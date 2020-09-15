import React, { useState } from 'react'
import axios from 'axios'
import './css/Signup.css'

function Signup() {
  const [values, setValues] = useState({
    name: 'asdf',
    email: 'asdf1234@gmail.com',
    password: 'asdf1234',
    error: '',
    success: false,
  })

  const {name, email, password, success, error } = values

  function signup(name, email, password) {
    axios.post('http://localhost:5000/signup', {
        name, email, password
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
      
  }


  const handleChange = name => event => {
    setValues({
      ...values, 
      error: false, 
      [name]: event.target.value
    })
  }

  const clickSubmit = event => {
    event.preventDefault()
    setValues({...values, error: false})
    console.log(name, email, password)
    signup({ name, email, password })
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error, success: false})
      } else {
        setValues({...values, name: '', email: '', password:'',  error: '', success: true})
      }
    })
  }

  return (
    <div>
      <div className="signup-form">
        <h1>숨고에 오신 것을 환영합니다</h1>
        <form >
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
          <button onSubmit={clickSubmit} className="signup-btn new-btn">회원가입</button>
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
