import React from 'react'
import './css/ChooseAccount.css'
import { Link, withRouter } from 'react-router-dom'

function ChooseAccount() {
  return (
    <div>
      <div className="row">
      <h1>숨고 무료 가입하기</h1>
      </div>
      <div className="joinblock">
        <div className="pro__join both__join">
          <h2>더 많은 고객을 만나고 싶어요</h2>
          <p>고수의 도움을 필요로 하는 수 많은 고객을 만나보세요.</p>
          <Link to="/signin" className="pro__join__Btn">고수로 가입하기</Link>
        </div>
        <div className="or">or</div>
        <div className="user__join both__join">
          <h2>도움이 필요한 일이 있어요</h2>
          <p>어떤 일이든 그에 꼭 맞는 숨은 고수를 소개 받으세요.</p>
          <Link to="/signup" className="user__join__Btn">가입하고 서비스 요청하기</Link>
        </div>
      </div>
      <div className="row row__login">
        <p>이미 계정이 있으신가요?</p>
        <Link to="#">로그인</Link>
      </div>
    </div>
  )
}

export default withRouter(ChooseAccount)
