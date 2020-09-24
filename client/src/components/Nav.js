import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

function Nav() {

  const [isLogin, setIsLogin] = useState(false)
  
  useEffect(() => {
    checkLogin()
    console.log('check login')
  })

  const checkLogin =  () => {
    axios.get('http://localhost:5000/api/checklogin', { withCredentials: true, crossDomain: true })
      .then(res => {
        if (res.data.user.id === null) {
          setIsLogin(false)
        }
        setIsLogin(true)
        return
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }

  return (
    <>
      { isLogin ? <UserNav /> : <GuestNav /> }
    </>
  )
  
}

export default withRouter(Nav)
