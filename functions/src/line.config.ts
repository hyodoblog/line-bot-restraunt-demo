import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/dist/types'
import * as Config from 'firebase-functions/lib/config'

const accessToken = Config.config().env.access_token as string
const channelSecret = Config.config().env.channel_secret as string

export const config = {
  channelAccessToken: accessToken,
  channelSecret: channelSecret,
}
export const client = new Line.Client(config)

export const errorMessage = 'エラーが発生しました'

export { Line, Types, Config }
