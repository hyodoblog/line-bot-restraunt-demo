import { datastoreInsert } from '../../lib/gcloud/datastore'
import { Product } from '../product'
import { dsKindProduct } from '../'

const seed = async () => {
  const data: Product[] = [
    {
      name: 'トルコ料理',
      money: 500,
    },
    {
      name: 'カレーライス',
      money: 700,
    },
    {
      name: 'ナポリタン',
      money: 1000,
    },
  ]
  await datastoreInsert(dsKindProduct, data)
  console.log('seed complete')
}

seed()
