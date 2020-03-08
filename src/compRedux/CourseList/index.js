// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function CourseList (){

//   return (
//     <ul>
//       <li>ReactJS</li>
//       <li>React Native</li>
//     </ul>
//   )

// }

//S>----------------------------------------------------------------------------------------<//


// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function CourseList (){
//   const courses = useSelector(state => state.data)

//   return (
//     <ul>
//     {
//       courses.map((course,i) => <li key={i}>{course}</li>)
//     }
//     </ul>
//   )



// }

//S>----------------------------------------------------------------------------------------<//

import React, {useRef, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title){
  return { type: 'ADD_COURSE', title}
}

export default function CourseList (){
  const qtde = 3
  // const courses = useSelector(state => state.data)
  const courses = useSelector(
    state => state.data.slice(0,qtde),
  [qtde]
  )
  
  const dispatch = useDispatch()
  const inputRef = useRef()

  function addCourse(){
    dispatch(addCourseAction(inputRef.current.value))
  }

  function ListCourse(){
    return (
      <ul>
      {
        courses.map((course,i) => <li key={i}>{course}</li>)
      }
      </ul>
    )    
  }

  function FormAddCourse(){
    return (
      <form 
        onSubmit={addCourse}
      >
        <input 
          type="text"
          ref={inputRef}
        />
        <button type="submit">Add Course</button>
      </form>
    )
  }

  return (
    <Fragment>
      <FormAddCourse />
      <ListCourse />
    </Fragment>
  )



}