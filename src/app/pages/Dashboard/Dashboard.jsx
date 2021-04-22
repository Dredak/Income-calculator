import React from 'react'

import Table from 'components/Table'
import AddColumn from 'components/AddColumn'

import './style.scss'

const classes = {
  wrapper: 'dashboard-wrapper',
}

const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <Table />
      <AddColumn />
    </div>
  )
}

export default Dashboard
