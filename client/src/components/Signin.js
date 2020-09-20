import React, { useState } from 'react'
import './css/Signin.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


function Signin() {
  
  const [values, setValues] = useState({
    email: 'asdf1234@gmail.com',
    password: 'asdf1234',
  })
  const [loginSuccess, setLoginSuccess] = useState(false)

  const { email, password } = values

  const handleChange = name => event => {
    setValues({
      ...values, 
      [name]: event.target.value
    })
  }

  const clickSubmit = event => {
    event.preventDefault()
    console.log(email, password)
    signin( email, password )
  }

  function signin(email, password) {
    axios.post('http://localhost:5000/api/signin', {
        email, password
    }, { withCredentials: true, crossDomain: true })
      .then(response => {
        setLoginSuccess(true)
        // setMessage('로그인 완료되었습니다.')
        // setSuccess(true)
      })
      .catch(err => {
        console.log(err)
        // setMessage(err.response.data.err)
        // setSuccess(false)
      })
  }

  const redirect = () => {
    if(loginSuccess) {
      return <Redirect to='/' />
    }
  }

  return (
    <div className="login-form">
      <h1>숨고에 오신 것을 환영합니다</h1>
      <form className='loginForm'action="/login" method="POST">
        <label className="title">이메일</label>
        <input
          type="email"
          className="input-box"
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleChange('email')} 
          value={email}
        />
        <label className="title">비밀번호</label>
        <div className="password__input">
          <input
            type="password"
            className="input-box"
            placeholder="영문자와 숫자를 포함하여 8자 이상"
            name="password"
            onChange={handleChange('password')} 
            value={password}
          />
        </div>
        <a href="/" className="small findPassword"> 비밀번호 찾기 </a>
        <button onClick={clickSubmit} type="submit" className="login-btn new-btn">로그인</button>
        <button className="login-btn facebook-btn">페이스북으로 로그인</button>
      </form>
      <a href="/signin" className="noId">계정이 없으신가요?</a>
      {redirect()}
    </div>
  )
}

export default Signin
