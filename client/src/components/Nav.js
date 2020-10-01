import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { API } from '../config'
import GuestNav from './GuestNav'
import UserNav from './UserNav'

function Nav() {

  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem('Soomgo'))
    if(user) {
      setIsLogin(true)
      setIsLoading(false)
    } else {
      setIsLogin(false)
      setIsLoading(false)
    }
  }
  
  return (
    <>
      { isLogin ? <UserNav /> : <GuestNav /> }
    </>
  )
}

export default withRouter(Nav)
