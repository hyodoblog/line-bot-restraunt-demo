import { Line, client } from '../line.config'
import { datastoreUpdate } from '../lib/gcloud/datastore'
import { makeReplyMessages } from '../lib/line'
import { reservationMsg } from '../messages'
import { dsKindUser } from '../models'
import { User } from '../models/user'

export const idle = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  switch (text) {
    case 'メニュー一覧': {
      user.statusNo = 2
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.menuList)
      return 'メニュー一覧'
    }
    default: {
      await client.replyMessage(
        event.replyToken,
        makeReplyMessages(
          '下の「メニュー」を押してメニュ一覧を押してください！'
        )
      )
      return 'その他の文字が入力された'
    }
  }
}
