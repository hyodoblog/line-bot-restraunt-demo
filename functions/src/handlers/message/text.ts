import { Line } from '../../line.config'
import { initUser } from '../../lib'
import { datastoreGetFindBy } from '../../lib/gcloud/datastore'
import { dsKindUser } from '../../models'
import { User } from '../../models/user'
import * as status from '../../status'

export const text = async (event: Line.MessageEvent): Promise<string> => {
  const user: User | undefined = await datastoreGetFindBy(
    dsKindUser,
    'userId',
    event.source.userId
  )

  if (!user) {
    await initUser(event, user)
    return 'ユーザーデータを初期化'
  }

  if (user.statusNo === status.idleStatusNo) {
    return await status.idle(event, user)
  } else if (user.statusNo <= status.reservedStatusNo) {
    return await status.reservation(event, user)
  }
  return ''
}
