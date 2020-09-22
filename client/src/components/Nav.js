import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import GuestNav from './GuestNav'
import UserNav from './UserNav'
import { LoginUserContext } from '../App'

function Nav() {
  const loginUserContext = useContext(LoginUserContext)

  const [user, setUser] = useState('')
  
  useEffect(() => {
    checkLogin()
    
  }, [loginUserContext.loginUserState])

  function checkLogin() {
    axios.get('http://localhost:5000/api/checklogin', { withCredentials: true, crossDomain: true })
      .then(response => {
        // setUser(response.data.user)
        console.log(response.data.user)
        loginUserContext.loginUserDispatch({ type: 'login', value: response.data.user.id })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
    {loginUserContext.loginUserState ? <UserNav /> : <GuestNav />}
    </>
  )
}

export default withRouter(Nav)
