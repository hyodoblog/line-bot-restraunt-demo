import { User } from '../models/user'
import { datastoreGet } from '../lib/gcloud/datastore'
import { dsKindUser } from '../models'

export default async (): Promise<void> => {
  const users: User[] = await datastoreGet(dsKindUser)

  for (let i = 0; i < users.length; i++) {
    console.log(users[i])
  }
}
