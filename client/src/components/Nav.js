import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import GuestNav from './GuestNav'
import UserNav from './UserNav'
import { LoginUserContext } from '../App'

function Nav() {
  const loginUserContext = useContext(LoginUserContext)

  useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin() {
    axios.get('http://localhost:5000/api/checklogin', { withCredentials: true, crossDomain: true })
      .then(res => {
        loginUserContext.loginUserDispatch({ type: 'login', value: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
    {loginUserContext.loginUserState.userId ? <UserNav /> : <GuestNav />}
    </>
  )
}

export default withRouter(Nav)
