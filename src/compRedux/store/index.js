import { createStore } from 'redux'

const INITIAL_STORE = {
  data: [
    'React Native',
    'ReactJS'
  ]
}


const courses = (state=INITIAL_STORE, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state , data: [...state.data, action.title]}
    default:
      return state
  }
}

const store = createStore(courses)

export default store