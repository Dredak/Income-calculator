import { COLUMN_ADDED, COLUMN_EXCLUDED, COLUMN_DELETED } from '../actions/types'

const initialState = {
  columns: [],
}

export default (state = initialState, { type, payload }) => {
  if (type === COLUMN_ADDED) {
    return { columns: [...state.columns, payload] }
  }

  if (type === COLUMN_EXCLUDED) {
    return {
      columns: state.columns.map(column =>
        column.id === payload
          ? { ...column, included: !column.included }
          : column
      ),
    }
  }

  if (type === COLUMN_DELETED) {
    return { columns: state.columns.filter(column => column.id !== payload) }
  }

  return state
}
