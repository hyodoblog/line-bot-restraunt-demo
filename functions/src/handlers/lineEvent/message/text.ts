import { Line } from '../../../line.config'
import { initUser } from '../../../lib'
import { datastoreGetFindBy } from '../../../lib/gcloud/datastore'
import { dsKindUser } from '../../../models'
import { User } from '../../../models/user'
import * as status from '../../../status'

export default async (event: Line.MessageEvent): Promise<string> => {
  const user: User | undefined = await datastoreGetFindBy(
    dsKindUser,
    'userId',
    event.source.userId
  )

  // データベースにuserデータがあるか確認
  if (!user || !user.statusNo) {
    await initUser(event, user)
    return 'ユーザーデータを初期化'
  }

  // 状態分離
  // statusNo: 1
  if (user.statusNo === status.idleStatusNo) {
    return await status.idle(event, user)
  }
  // statusNo: 2 ~ 5
  else if (user.statusNo < status.reservedStatusNo) {
    return await status.reservation(event, user)
  }
  // statusNo: 6
  else if (user.statusNo === status.reservedStatusNo) {
    return await status.reserved(event, user)
  }
  // statusNo: 7
  else if (user.statusNo <= status.lastStatusNo) {
    return await status.cancel(event, user)
  } else {
    throw new Error(`statusNo: ${user.statusNo}で不具合が発生`)
  }
}
