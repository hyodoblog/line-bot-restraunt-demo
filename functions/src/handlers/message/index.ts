import { Line } from '../../line.config'
import { text } from './text'
// import { makeReplyMessages } from '../../lib/line'

export const message = async (event: Line.MessageEvent): Promise<string> => {
  // Webhookの検証
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return 'Webhookの検証'
  }

  switch (event.message.type) {
    case 'text':
      await text(event)
      break
    default:
  }
  return ''
}
