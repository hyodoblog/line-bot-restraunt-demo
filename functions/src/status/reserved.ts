import { Line, client } from '../line.config'
import { datastoreUpdate, datastoreGetFindBy } from '../lib/gcloud/datastore'
import { reservedMsg } from '../messages'
import { dsKindUser, dsKindProduct } from '../models'
import { User } from '../models/user'
import { Product } from '../models/product'

export default async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  switch (text) {
    case 'キャンセルする': {
      user.statusNo = 7
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservedMsg.cancelConfirm)
      return 'キャンセル'
    }
    default: {
      const product: Product = await datastoreGetFindBy(
        dsKindProduct,
        'name',
        user.reservedProductName
      )
      await client.replyMessage(
        event.replyToken,
        reservedMsg.confirm(
          user.reservedProductName as string,
          user.reservedTimeToVisit as string,
          user.reservedName as string,
          product.money
        )
      )
      return 'その他の文字が入力された'
    }
  }
}
