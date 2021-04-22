import { COLUMN_ADDED, COLUMN_DELETED, COLUMN_EXCLUDED } from './types'

export const addColumn = column => ({ type: COLUMN_ADDED, payload: column })
export const toggleColumn = id => ({ type: COLUMN_EXCLUDED, payload: id })
export const deleteColumn = id => ({ type: COLUMN_DELETED, payload: id })
