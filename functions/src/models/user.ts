import { Entity } from '@google-cloud/datastore/build/src/entity'

export interface User extends Entity {
  userId: string
  reservedName: string | null
  reservedProductName: string | null
  reservedTimeToVisit: string | null
  reservedAt: number | null
  statusNo: number
}

export const initData = (userId: string): User | Entity => {
  return {
    userId,
    reservedName: null,
    reservedProductName: null,
    reservedTimeToVisit: null,
    reservedAt: null,
    statusNo: 1,
  }
}

export const initUserData = (user: User): User | Entity => {
  user.reservedName = null
  user.reservedProductName = null
  user.reservedTimeToVisit = null
  user.reservedAt = null
  user.statusNo = 1

  return user
}
