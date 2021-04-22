import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { addColumn } from '../../state/actions'

import './style.scss'

const classes = {
  wrapper: 'add-column-wrapper',
  input: 'input',
}

const buttonDisabler = formState =>
  !Object.keys(formState).every(fieldName => {
    return formState[fieldName] || formState[fieldName] === 0
  })

const initialFormState = {
  year: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
}

const AddColumn = ({ addColumn }) => {
  const [formState, setFormState] = useState(initialFormState)
  const handleChange = (event, fieldName) => {
    if (fieldName === 'calories') {
      setFormState({ ...formState, [fieldName]: Number(event.target.value) })
    } else {
      setFormState({ ...formState, [fieldName]: event.target.value })
    }
  }

  const handleAddColumn = () => {
    setFormState(initialFormState)
    addColumn({
      id: uuid(),
      included: true,
      year: formState.year,
      q1: formState.q1,
      q2: formState.q2,
      q3: formState.q3,
      q4: formState.q4,
      total: Object.keys(formState).reduce((acc, curr) => {
        if (curr === 'year') return acc
        return acc + Number(formState[curr])
      }, 0),
    })
  }

  return (
    <div className={classes.wrapper}>
      <TextField
        className={classes.input}
        label="Year"
        type="number"
        inputProps={{ min: 0 }}
        onChange={event => handleChange(event, 'year')}
        value={formState.year}
        margin="normal"
      />
      <TextField
        className={classes.input}
        label="Q1"
        type="number"
        onChange={event => handleChange(event, 'q1')}
        value={formState.q1}
        margin="normal"
      />
      <TextField
        className={classes.input}
        label="Q2"
        type="number"
        onChange={event => handleChange(event, 'q2')}
        value={formState.q2}
        margin="normal"
      />
      <TextField
        className={classes.input}
        label="Q3"
        type="number"
        onChange={event => handleChange(event, 'q3')}
        value={formState.q3}
        margin="normal"
      />
      <TextField
        className={classes.input}
        label="Q4"
        type="number"
        onChange={event => {
          handleChange(event, 'q4')
        }}
        value={formState.q4}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddColumn}
        disabled={buttonDisabler(formState)}
      >
        Add
      </Button>
    </div>
  )
}

AddColumn.propTypes = {
  addColumn: PropTypes.func,
}

export default connect(null, {
  addColumn,
})(AddColumn)
