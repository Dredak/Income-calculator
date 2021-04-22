import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addColumn, toggleColumn, deleteColumn } from '../../state/actions'
import Column from './Column'
import Header from './Header'

import './style.scss'

const classes = {
  totalWrapper: 'total-wrapper',
}

const Table = ({ columns, toggleColumn, deleteColumn }) => {
  const hasColumns = !!columns.length

  const content = hasColumns
    ? columns.map(column => (
        <Column
          key={column.id}
          column={column}
          onToggle={toggleColumn}
          onDelete={deleteColumn}
        />
      ))
    : 'Please add column.'

  const allTotal = hasColumns ? (
    <div className={classes.totalWrapper}>
      {`All total: ${columns.reduce(
        (acc, curr) => (curr.included ? acc + Number(curr.total) : acc),
        0
      )}
      `}
    </div>
  ) : null

  return (
    <>
      <div>
        <Header />
        <div>{content}</div>
      </div>
      {allTotal}
    </>
  )
}

const select = state => state.columns

Table.propTypes = {
  columns: PropTypes.array,
  addColumn: PropTypes.func,
  toggleColumn: PropTypes.func,
  deleteColumn: PropTypes.func,
}

export default connect(select, {
  addColumn,
  toggleColumn,
  deleteColumn,
})(Table)
