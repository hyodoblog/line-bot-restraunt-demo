import { client, Line } from '../line.config'
import { makeReplyMessages } from '../lib/line'

export const follow = async (event: Line.FollowEvent): Promise<string> => {
  const { replyToken } = event
  await client.replyMessage(
    replyToken,
    makeReplyMessages('友達追加ありがとうございます')
  )
  return '友達登録されました'
}
