import { Types } from '../line.config'

export const confirm = (
  productName: string,
  timeToVisit: string,
  name: string,
  money: number
): Types.FlexMessage => {
  return {
    type: 'flex',
    altText: 'Flex Message',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        flex: 0,
        contents: [
          {
            type: 'text',
            text: '現在予約中です！',
            align: 'center',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: 'メニュー',
                    flex: 0,
                    margin: 'sm',
                    weight: 'bold',
                  },
                  {
                    type: 'text',
                    text: productName,
                    size: 'sm',
                    align: 'end',
                    color: '#AAAAAA',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '来店時間',
                    flex: 0,
                    margin: 'sm',
                    weight: 'bold',
                  },
                  {
                    type: 'text',
                    text: timeToVisit,
                    size: 'sm',
                    align: 'end',
                    color: '#AAAAAA',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: 'お名前',
                    flex: 0,
                    margin: 'sm',
                    weight: 'bold',
                  },
                  {
                    type: 'text',
                    text: name,
                    size: 'sm',
                    align: 'end',
                    color: '#AAAAAA',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'text',
                    text: '料金',
                    flex: 0,
                    margin: 'sm',
                    weight: 'bold',
                  },
                  {
                    type: 'text',
                    text: `${money}円`,
                    size: 'sm',
                    align: 'end',
                    weight: 'bold',
                    color: '#333333',
                  },
                ],
              },
            ],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'spacer',
            size: 'xxl',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'キャンセル',
              text: 'キャンセルする',
            },
            color: '#FFED00',
            style: 'secondary',
          },
        ],
      },
    },
  }
}

export const cancelConfirm: Types.FlexMessage = {
  type: 'flex',
  altText: 'Flex Message',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      flex: 0,
      contents: [
        {
          type: 'text',
          text: '本当にキャンセルしますか？',
          align: 'center',
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          action: {
            type: 'message',
            label: 'はい',
            text: 'はい',
          },
          color: '#FFED00',
          style: 'secondary',
        },
        {
          type: 'button',
          action: {
            type: 'message',
            label: 'いいえ',
            text: 'いいえ',
          },
          style: 'secondary',
        },
      ],
    },
  },
}
