import {Routes, Route} from 'react-router-dom'
import React, {createContext,useState} from 'react'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import CustomerDetailPage from './pages/CustomerDetailPage'
import CreateUser from './pages/CreateUser'
import StartPage from './pages/StartPage'
const GeneralContext = createContext([])

function App() {
  const [customers, setCustomers] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
    
  return (
    <GeneralContext.Provider value={{customers, setCustomers, userInfo, setUserInfo}}>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:id' element={<CustomerDetailPage/>}/>
        <Route path='create-user' element={<CreateUser/>}/>
      </Routes>
    </GeneralContext.Provider>
  );
}
export{GeneralContext}
export default App;
