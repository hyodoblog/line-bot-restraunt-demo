import { Line, client } from '../line.config'
import { datastoreUpdate, datastoreGetFindBy } from '../lib/gcloud/datastore'
import { makeReplyMessages } from '../lib/line'
import { reservationMsg } from '../messages'
import { dsKindUser, dsKindProduct } from '../models'
import { User } from '../models/user'
import { Product } from '../models/product'

export const process02 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  switch (text) {
    case 'トルコライスを注文': {
      user.statusNo = 3
      user.reservedProductName = 'トルコライス'
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.timeToVisit)
      return 'トルコライスを注文'
    }
    case 'カレーライスを注文': {
      user.statusNo = 3
      user.reservedProductName = 'カレーライス'
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.timeToVisit)
      return 'カレーライスを注文'
    }
    case 'ナポリタンを注文': {
      user.statusNo = 3
      user.reservedProductName = 'ナポリタン'
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.timeToVisit)
      return 'ナポリタンを注文'
    }
    default: {
      await client.replyMessage(
        event.replyToken,
        makeReplyMessages('ボタンを押してください')
      )
      return 'その他の文字が入力された'
    }
  }
}

const process03 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  user.statusNo = 4
  user.reservedTimeToVisit = text
  await datastoreUpdate(dsKindUser, user)
  await client.replyMessage(event.replyToken, reservationMsg.questionName)
  return '来店時間入力'
}

const process04 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  const product: Product = await datastoreGetFindBy(
    dsKindProduct,
    'name',
    user.reservedProductName
  )
  user.statusNo = 5
  user.reservedTimeToVisit = text
  await datastoreUpdate(dsKindUser, user)
  await client.replyMessage(
    event.replyToken,
    reservationMsg.confirm(
      user.reservedProductName as string,
      user.reservedTimeToVisit as string,
      user.reservedName as string,
      product.money as number
    )
  )
  return '確認'
}

export const reservation = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  switch (user.statusNo) {
    case 2: {
      return await process02(event, user)
    }
    case 3: {
      return await process03(event, user)
    }
    case 4: {
      return await process04(event, user)
    }
    default: {
      return ''
    }
  }
}
