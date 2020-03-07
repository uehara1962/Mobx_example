import React from 'react'
import { Provider } from 'react-redux'

import store from '../store'

import CourseList from '../CourseList'

const Main = () => {
  return (
    <Provider store= {store}>
      <CourseList />
    </Provider>
  )
}

export default Main
