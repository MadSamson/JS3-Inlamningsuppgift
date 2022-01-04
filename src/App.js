import {Routes, Route} from 'react-router-dom'
import React, {createContext, useState, useEffect} from 'react'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import CustomerDetailPage from './pages/CustomerDetailPage'
import CreateUser from './pages/CreateUser'
import StartPage from './pages/StartPage'
const GeneralContext = createContext([])

function App() {
  const [customers, setCustomers] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    getCustomers()

    const token = localStorage.getItem('js3')
    const headers = {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
    }
    fetch('https://frebi.willandskill.eu/api/v1/me',{
        headers: headers
    })
    .then(res=>res.json())
    .then(data=>setUserInfo(data))
  }, [])

  function getCustomers() {
      const token = localStorage.getItem('js3')
      const headers = {
          Authorization: `Bearer ${token}`,
      }
      const url = 'https://frebi.willandskill.eu/api/v1/customers/'
      fetch(url,{headers : headers})
      .then(res=>res.json())
      .then(data=>{
          setCustomers(data.results)
      })
  }
    
  return (
    <GeneralContext.Provider value={{customers, setCustomers, userInfo, setUserInfo}}>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<Home success={getCustomers}/>}/>
        <Route path='/home/:id' element={<CustomerDetailPage/>}/>
        <Route path='create-user' element={<CreateUser/>}/>
      </Routes>
    </GeneralContext.Provider>
  );
}
export{GeneralContext}
export default App;
