import { Entity } from '@google-cloud/datastore/build/src/entity'

export interface User extends Entity {
  userId: string
  isReserved: boolean
  reservedName: string | null
  reservedProductName: string | null
  reservedTimeToVisit: string | null
  statusNo: number
}

export const initData = (userId: string): User | Entity => {
  return {
    userId,
    isReserved: false,
    reservedName: null,
    reservedProductName: null,
    reservedTimeToVisit: null,
    statusNo: 1,
  }
}

export const initUserData = (user: User): User | Entity => {
  user.isReserved = false
  user.reservedName = null
  user.reservedProductName = null
  user.reservedTimeToVisit = null
  user.statusNo = 1

  return user
}
