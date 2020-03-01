import { DB_ENV } from '../../config'

const DB = wx.cloud.database({
  env: DB_ENV
})

const getCollection = (collection, conditions = {}) => DB.collection(collection).where(conditions).get()

export {
  DB,
  getCollection
}
