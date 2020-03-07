// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// const StoreContext = React.createContext()

// const store = useLocalStore(() => ({
//   bugs: ["Centipede"]
// }))

// function App() {
//   return (
//     <main>Bugs!</main>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// const StoreContext = React.createContext()

// const StoreProvider = ({children}) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"]
//   }))

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )

// }

// function App() {
//   return (
//     <main>Bugs!</main>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// const StoreContext = React.createContext()

// const StoreProvider = ({children}) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"]
//   }))

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )

// }

// function App() {
//   return (
//     <StoreProvider>
//       <main>Bugs!</main>
//     </StoreProvider>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// const StoreContext = React.createContext()

// const StoreProvider = ({children}) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"],
//     addBug: (bug) => {
//       store.bugs.push(bug)
//     }
//   }))

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )
// }


// const BugsList = () => {
//   const store2 = React.useContext(StoreContext)

//   return (
//     <ul>
//       {store2.bugs.map(bug => (
//         <li key={bug}>{bug}</li> 
//       ))}
//     </ul>
//   )
// }

// const BugsForm = () => {
//   const store3 = React.useContext(StoreContext)
//   const [ bug, setBug ] = React.useState("")

//   return (
//     <form
//       onSubmit={e => {
//         store3.addBug(bug)
//         setBug("")
//         e.preventDefault()
//       }}
//     >
//       <input 
//         type="text" 
//         value={bug} 
//         onChange={e => {setBug(e.target.value)}}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function App() {
//   return (
//     <StoreProvider>
//       <main>
//         <BugsList />
//         <BugsForm />
//       </main>
//     </StoreProvider>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// const StoreContext = React.createContext()

// const StoreProvider = ({children}) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"],
//     addBug: (bug) => {
//       store.bugs.push(bug)
//     },
//     // get bugsCount(){
//     //   return store.bugs.length;
//     // }
//     bugsCount: () => {
//       return store.bugs.length;
//     }
//   }))

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )
// }

// const BugsHeader = () => {
//   const store4 = React.useContext(StoreContext)
//   return useObserver(() => (
//     <h1>{store4.bugsCount} Bugs! </h1>
//   ))
// }


// const BugsList = () => {
//   const store2 = React.useContext(StoreContext)

//   return useObserver(() => (
//     <ul>
//       {store2.bugs.map(bug => (
//         <li key={bug}>{bug}</li> 
//       ))}
//     </ul>
//   ))
// }

// const BugsForm = () => {
//   const store3 = React.useContext(StoreContext)
//   const [ bug, setBug ] = React.useState("")

//   return (
//     <form
//       onSubmit={e => {
//         store3.addBug(bug)
//         setBug("")
//         e.preventDefault()
//       }}
//     >
//       <input 
//         type="text" 
//         value={bug} 
//         onChange={e => {setBug(e.target.value)}}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function App() {
//   return (
//     <StoreProvider>
//       <center>
//         <BugsHeader />
//         <BugsList />
//         <BugsForm />
//       </center>
//     </StoreProvider>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { useLocalStore, useObserver } from 'mobx-react'

// import Main from './compRedux/main'

// const StoreContext = React.createContext()

// const StoreProvider = ({children}) => {
//   const store = useLocalStore(() => ({
//     bugs: ["Centipede"],
//     addBug: (bug) => {
//       store.bugs.push(bug)
//     },
//     // get bugsCount(){
//     //   return store.bugs.length;
//     // }
//     bugsCount: () => {
//       return store.bugs.length;
//     }
//   }))

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )
// }

// const BugsHeader = () => {
//   const store4 = React.useContext(StoreContext)
//   return useObserver(() => (
//     <h1>{store4.bugsCount} Bugs! </h1>
//   ))
// }


// const BugsList = () => {
//   const store2 = React.useContext(StoreContext)

//   return useObserver(() => (
//     <ul>
//       {store2.bugs.map(bug => (
//         <li key={bug}>{bug}</li> 
//       ))}
//     </ul>
//   ))
// }

// const BugsForm = () => {
//   const store3 = React.useContext(StoreContext)
//   const [ bug, setBug ] = React.useState("")

//   return (
//     <form
//       onSubmit={e => {
//         store3.addBug(bug)
//         setBug("")
//         e.preventDefault()
//       }}
//     >
//       <input 
//         type="text" 
//         value={bug} 
//         onChange={e => {setBug(e.target.value)}}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function App() {
//   return (
//     <StoreProvider>
//       <center>
//         <BugsHeader />
//         <BugsList />
//         <BugsForm />
//         <Main />
//       </center>
//     </StoreProvider>
//   );
// }

// export default App;

//S>----------------------------------------------------------------------------------------<//

import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useLocalStore, useObserver } from 'mobx-react'

import Main from './compRedux/main'
import OpenWeather from './openWeather'

const StoreContext = React.createContext()

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug)
    },
    // get bugsCount(){
    //   return store.bugs.length;
    // }
    bugsCount: () => {
      return store.bugs.length;
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

const BugsHeader = () => {
  const store4 = React.useContext(StoreContext)
  return useObserver(() => (
    <h1>{store4.bugsCount} Bugs! </h1>
  ))
}


const BugsList = () => {
  const store2 = React.useContext(StoreContext)

  return useObserver(() => (
    <ul>
      {store2.bugs.map(bug => (
        <li key={bug}>{bug}</li> 
      ))}
    </ul>
  ))
}

const BugsForm = () => {
  const store3 = React.useContext(StoreContext)
  const [ bug, setBug ] = React.useState("")

  return (
    <form
      onSubmit={e => {
        store3.addBug(bug)
        setBug("")
        e.preventDefault()
      }}
    >
      <input 
        type="text" 
        value={bug} 
        onChange={e => {setBug(e.target.value)}}
      />
      <button type="submit">Add</button>
    </form>
  )
}

function App() {
  return (
    <StoreProvider>
      <center>
        <BugsHeader />
        <BugsList />
        <BugsForm />
        <hr />
        <Main />
        <hr />
        <OpenWeather />
      </center>
    </StoreProvider>
  );
}

export default App;
