import { Config, Types } from '../line.config'
import { createHmac } from 'crypto'
import * as Rp from 'request-promise'

// 2000文字以上のテキストを分割してする
const maxTextLength = 2000
export const makeReplyMessages = (
  text: string
): Types.TextMessage[] | Types.TextMessage => {
  if (text.length > maxTextLength) {
    const replyMessages = []
    while (text.length > maxTextLength) {
      replyMessages.push({
        type: 'text',
        text: text.substr(0, maxTextLength),
      } as Types.TextMessage)
      text = text.slice(maxTextLength, -1)
    }
    replyMessages.push({
      type: 'text',
      text,
    } as Types.TextMessage)
    return replyMessages
  } else {
    return {
      type: 'text',
      text,
    } as Types.TextMessage
  }
}

// 10000文字以上返信する時に使用する
const maxTextsLength = maxTextLength * 5
export const makeTexts = (text: string): string[] => {
  const texts: string[] = []
  if (text.length > maxTextsLength) {
    while (text.length > maxTextsLength) {
      texts.push(text.substr(0, maxTextsLength))
      text = text.slice(maxTextsLength, -1)
    }
    texts.push(text)
  } else {
    texts.push(text)
  }
  return texts
}

const baseUrl = Config.config().env.base_url as string
const payChannelId = Config.config().env.line_pay_channel_id as string
const payChannelSecret = Config.config().env.line_pay_channel_secret as string
export const getLinePayRequestUrl = async (
  userId: string,
  amount: string
): Promise<any> => {
  const orderId = String(`${userId}_${amount}_${Date.now()}`)
  const body = {
    amount,
    currency: 'JPY',
    orderId,
    packages: [
      {
        id: 0,
        amount,
        name: `${amount}ポイント`,
        products: [
          {
            name: `${amount}ポイント`,
            quantity: 1,
            price: amount,
          },
        ],
      },
    ],
    redirectUrls: {
      confirmUrl: `${baseUrl}/confirm`,
      confirmUrlType: 'SERVER',
      cancelUrl: `?orderId=${orderId}`,
    },
    options: {
      payment: {
        payType: 'NORMAL',
      },
      display: {
        flowType: 'HIDE_PAY_SCREEN',
      },
    },
  }
  const nonce = String(Date.now())
  const headers = {
    'Content-Type': 'application/json',
    'X-LINE-ChannelId': payChannelId,
    'X-LINE-Authorization-Nonce': nonce,
    'X-LINE-Authorization': createHmac('sha256', payChannelSecret)
      .update(
        `${payChannelSecret}/v3/payments/request${JSON.stringify(body)}${nonce}`
      )
      .digest('base64'),
  }

  const options = {
    method: 'POST',
    uri: 'https://api-pay.line.me/v3/payments/request',
    json: body,
    headers,
  }

  const result = await Rp(options).promise()
  return result
}

interface ConfirmPayRes {
  returnCode: string
}
export const confirmPaymentRequest = async (
  transactionId: string,
  amount: string
): Promise<ConfirmPayRes> => {
  const body = {
    amount,
    currency: 'JPY',
  }
  const nonce = String(Date.now())
  const path = String(`/v3/payments/${transactionId}/confirm`)

  const headers = {
    'Content-Type': 'application/json',
    'X-LINE-ChannelId': payChannelId,
    'X-LINE-Authorization-Nonce': nonce,
    'X-LINE-Authorization': createHmac('sha256', payChannelSecret)
      .update(payChannelSecret + path + JSON.stringify(body) + nonce)
      .digest('base64'),
  }

  const options = {
    method: 'POST',
    uri: `https://api-pay.line.me${path}`,
    json: body,
    headers,
  }

  const result = await Rp(options).promise()
  return result
}
