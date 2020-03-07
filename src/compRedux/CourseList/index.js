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


import React from 'react'
import { useSelector } from 'react-redux'

export default function CourseList (){
  const courses = useSelector(state => state.data)

  return (
    <ul>
    {
      courses.map((course,i) => <li key={i}>{course}</li>)
    }
    </ul>
  )



}