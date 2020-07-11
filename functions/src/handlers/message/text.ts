import { client, Line } from '../../line.config'
import { makeReplyMessages } from '../../lib/line'

export const text = async (event: Line.MessageEvent): Promise<void> => {
  const { replyToken } = event
  const { message } = event as {
    message: Line.TextEventMessage
  }

  await client.replyMessage(replyToken, makeReplyMessages(message.text))
}
