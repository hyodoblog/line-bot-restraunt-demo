import { Line } from '../../line.config'
import Error from './error'
import Follow from './follow'
import Message from './message'

export default async (
  event: Line.WebhookEvent & Line.ReplyableEvent
): Promise<string> => {
  try {
    switch (event.type) {
      case 'follow': {
        return await Follow(event as Line.FollowEvent)
      }
      case 'unfollow': {
        return 'ブロックまたは友達登録を解除されました'
      }
      case 'message': {
        return await Message(event as Line.MessageEvent)
      }
      default:
    }
    return ''
  } catch (err) {
    console.log(err)
    await Error(event)
    return err
  }
}
