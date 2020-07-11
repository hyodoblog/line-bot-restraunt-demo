import { Types } from '../line.config'

export const menuList: Types.FlexMessage = {
  type: 'flex',
  altText: 'Flex Message',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url:
            'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
          contents: [
            {
              type: 'text',
              text: 'トルコライス',
              size: 'xl',
              weight: 'bold',
            },
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
                      text: '500円',
                      flex: 0,
                      margin: 'sm',
                      weight: 'bold',
                    },
                    {
                      type: 'text',
                      text: '400kcl',
                      size: 'sm',
                      align: 'end',
                      color: '#AAAAAA',
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
          contents: [
            {
              type: 'spacer',
              size: 'xxl',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '注文',
                text: 'トルコライスを注文',
              },
              color: '#905C44',
              style: 'primary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url:
            'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
          contents: [
            {
              type: 'text',
              text: 'カレーライス',
              size: 'xl',
              weight: 'bold',
            },
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
                      text: '600円',
                      flex: 0,
                      margin: 'sm',
                      weight: 'bold',
                    },
                    {
                      type: 'text',
                      text: '400kcl',
                      size: 'sm',
                      align: 'end',
                      color: '#AAAAAA',
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
          contents: [
            {
              type: 'spacer',
              size: 'xxl',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '注文',
                text: 'カレーライスを注文',
              },
              color: '#905C44',
              style: 'primary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url:
            'https://images.unsplash.com/photo-1585828922344-85c9daa264b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            label: 'Action',
            uri: 'https://linecorp.com',
          },
          contents: [
            {
              type: 'text',
              text: 'ナポリタン',
              size: 'xl',
              weight: 'bold',
            },
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
                      text: '700円',
                      flex: 0,
                      margin: 'sm',
                      weight: 'bold',
                    },
                    {
                      type: 'text',
                      text: '400kcl',
                      size: 'sm',
                      align: 'end',
                      color: '#AAAAAA',
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
          contents: [
            {
              type: 'spacer',
              size: 'xxl',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '注文',
                text: 'ナポリタンを注文',
              },
              color: '#905C44',
              style: 'primary',
            },
          ],
        },
      },
    ],
  },
}

export const timeToVisit: Types.FlexMessage = {
  type: 'flex',
  altText: 'Flex Message',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        direction: 'ltr',
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'xs',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '12:00',
                text: '12:00',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '12:15',
                text: '12:15',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '12:30',
                text: '12:30',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '12:45',
                text: '12:45',
              },
              style: 'secondary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        direction: 'ltr',
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'xs',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '13:00',
                text: '13:00',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '13:15',
                text: '13:15',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '13:30',
                text: '13:30',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '13:45',
                text: '13:45',
              },
              style: 'secondary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        direction: 'ltr',
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'xs',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '14:00',
                text: '14:00',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '14:15',
                text: '14:15',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '14:30',
                text: '14:30',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '14:45',
                text: '14:45',
              },
              style: 'secondary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        direction: 'ltr',
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'xs',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '15:00',
                text: '15:00',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '15:15',
                text: '15:15',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '15:30',
                text: '15:30',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '15:45',
                text: '15:45',
              },
              style: 'secondary',
            },
          ],
        },
      },
      {
        type: 'bubble',
        direction: 'ltr',
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'xs',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '16:00',
                text: '16:00',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '16:15',
                text: '16:15',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '16:30',
                text: '16:30',
              },
              style: 'secondary',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '16:45',
                text: '16:45',
              },
              style: 'secondary',
            },
          ],
        },
      },
    ],
  },
}

export const questionName: Types.TextMessage = {
  type: 'text',
  text: 'お名前を教えて下さい！',
}

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
            text: '予約内容確認',
          },
        ],
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        action: {
          type: 'uri',
          label: 'Action',
          uri: 'https://linecorp.com',
        },
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
              type: 'uri',
              label: '確定',
              uri: 'https://linecorp.com',
            },
            style: 'primary',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'メニューを修正する',
              text: 'メニューを修正する',
            },
            style: 'secondary',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: '来店時間を修正する',
              text: '来店時間を修正する',
            },
            style: 'secondary',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'お名前を修正する',
              text: 'お名前を修正する',
            },
            style: 'secondary',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: 'キャンセル',
              text: 'キャンセル',
            },
            color: '#FFED00',
            style: 'secondary',
          },
        ],
      },
    },
  }
}
