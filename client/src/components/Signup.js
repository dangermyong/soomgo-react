import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './css/Signup.css'
import { API } from '../config'

function Signup() {
  const [values, setValues] = useState({
    name: 'asdf',
    email: 'asdf1234@gmail.com',
    password: 'asdf1234'
  })
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const { name, email, password } = values

  function signup(name, email, password) {
    axios.post(`${API}/signup`, {
        name, email, password
    })
      .then(response => {
        console.log(response.data)
        setMessage('회원가입이 완료되었습니다.')
        setSuccess(true)
      })
      .catch(err => {
        console.log(err.response.data.err)
        setMessage(err.response.data.err)
        setSuccess(false)
      })
  }

  const handleChange = name => event => {
    setValues({
      ...values, 
      [name]: event.target.value
    })
  }

  const clickSubmit = event => {
    event.preventDefault()
    signup( name, email, password )
  }

  const showError = () => (
    <div className="message" style={{display: success ? 'none' : ''}}>{message}</div>
  )

  const showSuccess = () => (
    <div className="message" style={{display: success ? '' : 'none'}}>New account is created. Please Click here <Link to='/signin'>Signin</Link></div>
  )

  return (
    <div>
      <div className="signup-form">
        <h1>숨고에 오신 것을 환영합니다</h1>
        {showSuccess()}
        {showError()}
        <form className='signupForm'>
          <label className="title">이름</label>
          <input 
            type="text" 
            className="input-box" 
            placeholder="실명을 입력하세요"
            onChange={handleChange('name')}
            value={name}
          />
          <label className="title">이메일</label>
          <input
            type="email"
            className="input-box"
            placeholder="이메일을 입력하세요"
            onChange={handleChange('email')}
            value={email}
          />
          <label className="title">비밀번호</label>
          <div className="password__input">
            <input
              type="password"
              className="input-box"
              placeholder="영문자와 숫자를 포함하여 8자 이상"
              onChange={handleChange('password')}
              value={password}
            />
            <div className="show-password fas fa-eye-slash"></div>
          </div>
          <p className="small">
            숨고의 이용약관 및 개인정보취급방침에
            동의합니다
          </p>
          <p> {name}, {email}, {password} </p>
          <button onClick={clickSubmit} className="signup-btn new-btn">회원가입</button>
          <button className="signup-btn facebook-btn">페이스북으로 가입하기</button>
          <p className="small small_center">
            유저의 허락없이 게시물을 올리지 않습니다
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
