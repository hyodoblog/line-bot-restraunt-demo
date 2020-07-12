import { datastoreInsert } from '../../lib/gcloud/datastore'
import { Product } from '../product'
import { dsKindProduct } from '../'
import * as dotenv from 'dotenv'
dotenv.config()

const seed = async () => {
  const data: Product[] = [
    {
      name: 'トルコライス',
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
