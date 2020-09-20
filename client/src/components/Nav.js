import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

function Nav() {

  const [user, setUser] = useState('')
  
  useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin() {
    axios.get('http://localhost:5000/api/checklogin', { withCredentials: true, crossDomain: true })
      .then(response => {
        setUser(response.data.user)
        console.log(response.data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
    {user ? <UserNav /> : <GuestNav />}
    </>
  )
}

export default withRouter(Nav)
