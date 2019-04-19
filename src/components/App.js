import React, { Fragment } from 'react'
import ToggleSidebar from '../containers/ToggleSidebar';
import Content from './Content';
import '../bootstrap/css/sidebar.css'
import '../bootstrap/css/bootstrap.css'

const App = () => (
  <Fragment>
    <ToggleSidebar />
    <Content />
  </Fragment>
)

export default App