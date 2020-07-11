import { Line, client } from '../line.config'
import { datastoreUpdate, datastoreGetFindBy } from '../lib/gcloud/datastore'
import { makeReplyMessages } from '../lib/line'
import { reservationMsg } from '../messages'
import { dsKindUser, dsKindProduct } from '../models'
import { User } from '../models/user'
import { Product } from '../models/product'

// メニュー選択の処理
export const process02 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  switch (text) {
    case 'トルコライスを注文':
      user.reservedProductName = 'トルコライス'
      break
    case 'カレーライスを注文':
      user.reservedProductName = 'カレーライス'
      break
    case 'ナポリタンを注文':
      user.reservedProductName = 'ナポリタン'
      break
    default:
      await client.replyMessage(
        event.replyToken,
        makeReplyMessages('メニューを選択してください')
      )
      return 'その他の文字が入力された'
  }

  if (user.reservedTimeToVisit === null) {
    user.statusNo = 3
  } else {
    user.statusNo = 5
  }
  await datastoreUpdate(dsKindUser, user)
  await client.replyMessage(event.replyToken, reservationMsg.timeToVisit)

  return 'メニューを選択'
}

// 来店時間入力の処理
const process03 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  if (user.reservedName === null) {
    user.statusNo = 4
  } else {
    user.statusNo = 5
  }
  user.reservedTimeToVisit = text
  await datastoreUpdate(dsKindUser, user)
  await client.replyMessage(event.replyToken, reservationMsg.questionName)
  return '来店時間入力'
}

// 名前入力の処理
const process04 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const product: Product = await datastoreGetFindBy(
    dsKindProduct,
    'name',
    user.reservedProductName
  )

  const { text } = event.message as Line.TextEventMessage
  user.statusNo = 5
  user.reservedTimeToVisit = text
  await datastoreUpdate(dsKindUser, user)
  await client.replyMessage(
    event.replyToken,
    reservationMsg.confirm(
      user.reservedProductName as string,
      user.reservedTimeToVisit as string,
      user.reservedName as string,
      product.money
    )
  )
  return '確認'
}

const process05 = async (
  event: Line.MessageEvent,
  user: User
): Promise<string> => {
  const { text } = event.message as Line.TextEventMessage
  switch (text) {
    case 'メニューを修正する':
      user.statusNo = 2
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.menuList)
      return 'メニューを修正'
    case '来店時間を修正する':
      user.statusNo = 3
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.timeToVisit)
      return '来店時間を修正'
    case 'お名前を修正する':
      user.statusNo = 4
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(event.replyToken, reservationMsg.questionName)
      return 'お名前を修正'
    case 'キャンセル':
      user.statusNo = 1
      await datastoreUpdate(dsKindUser, user)
      await client.replyMessage(
        event.replyToken,
        makeReplyMessages(
          '予約を取り消しました。またのお越しをお待ちしております。'
        )
      )
      return 'キャンセル'
    default:
      await client.replyMessage(
        event.replyToken,
        makeReplyMessages('確認メッセージのボタンを押してください！')
      )
      return 'その他のメッセージを受信'
  }
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
    case 5: {
      return await process05(event, user)
    }
    default: {
      return ''
    }
  }
}
