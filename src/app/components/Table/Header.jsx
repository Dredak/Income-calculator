import React from 'react'

import './style.scss'

const classes = {
  header: 'table-header',
  headerCell: 'table-cell header-cell',
}

const Header = () => (
  <div className={classes.header}>
    <span className={classes.headerCell}>Year</span>
    <span className={classes.headerCell}>Q1</span>
    <span className={classes.headerCell}>Q2</span>
    <span className={classes.headerCell}>Q3</span>
    <span className={classes.headerCell}>Q4</span>
    <span className={classes.headerCell}>Total</span>
  </div>
)

export default Header
