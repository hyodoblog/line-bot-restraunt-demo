import { Request } from 'express'
import { client } from '../../line.config'
import { confirmPaymentRequest, makeReplyMessages } from '../../lib/line'
import { User } from '../../models/user'
import { dsKindUser } from '../../models'
import { datastoreGetFindBy, datastoreUpdate } from '../../lib/gcloud/datastore'

export default async (event: Request): Promise<string> => {
  const orderId = event.query.orderId as string | undefined
  const transactionId = event.query.transactionId as string | undefined

  if (orderId && transactionId) {
    const userId = orderId.substring(0, orderId.indexOf('_'))
    const amount = orderId.substring(
      orderId.indexOf('_') + 1,
      orderId.lastIndexOf('_')
    )

    try {
      const user: User | undefined = await datastoreGetFindBy(
        dsKindUser,
        'userId',
        userId
      )

      if (user) {
        const result = await confirmPaymentRequest(transactionId, amount)
        if (result.returnCode === '0000') {
          user.statusNo = 6
          user.reservedAt = new Date().getTime()
          await datastoreUpdate(dsKindUser, user)
          await client.pushMessage(
            userId,
            makeReplyMessages('予約が完了しました')
          )
          return '予約完了'
        } else {
          console.error(result)
          await client.pushMessage(
            userId,
            makeReplyMessages('決済に失敗しました...\n最初からやりなおして')
          )
          return '予約失敗'
        }
      }
    } catch (err) {
      console.log(err)
      return err
    }
  }
  return ''
}
