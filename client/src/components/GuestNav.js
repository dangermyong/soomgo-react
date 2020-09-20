import React from 'react'
import { Link } from 'react-router-dom'
import './css/Nav.css'

function GuestNav() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/"><img src="https://soomgo-myong.s3.ap-northeast-2.amazonaws.com/images/soomgo_logo.png" alt="" /></a>
      </div>
      <div className="navbar__menu">
        <ul className="navbar__menu">
          <Link className="navbar__menu__item" to='/'>고수가입</Link>
          <Link className="navbar__menu__item" to='/choose-account'>회원가입</Link>
          <Link className="navbar__menu__item" to='/search/pro'>고수찾기</Link>
          <Link className="navbar__menu__item" to='/signin'>로그인</Link>
        </ul>
      </div>
    </nav>
  )
}

export default GuestNav
