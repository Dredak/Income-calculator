import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

import './style.scss'

const classes = {
  tableCell: 'table-cell',
  column: 'table-column',
  greyedOut: 'greyed-out',
  checkbox: 'checkbox',
  deleteBtn: 'delete-button',
}

const Column = ({ column, onToggle, onDelete }) => {
  const { id, included, year, q1, q2, q3, q4, total } = column
  const handleChange = () => onToggle(id)
  const handleDelete = () => onDelete(id)

  return (
    <div key={id} className={classes.column}>
      <Checkbox
        className={classes.checkbox}
        checked={included}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox' }}
      />
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {year}
      </span>
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {q1}
      </span>
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {q2}
      </span>
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {q3}
      </span>
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {q4}
      </span>
      <span
        className={`${classes.tableCell} ${!included ? classes.greyedOut : ''}`}
      >
        {total}
      </span>
      <Button
        className={classes.deleteBtn}
        onClick={handleDelete}
        style={{ height: '30px' }}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    </div>
  )
}

Column.propTypes = {
  column: PropTypes.object,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
}

export default Column
