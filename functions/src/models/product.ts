import { Entity } from '@google-cloud/datastore/build/src/entity'

export interface Product extends Entity {
  name: string
  money: number
}
