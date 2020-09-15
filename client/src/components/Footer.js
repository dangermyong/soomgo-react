import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container footer__container__top">
        <div className="footer__leftbox__top">
          <p className="phone">1599-5319</p>
          <p className="operatingtime">
            평일 10:00 ~ 18:00 <br />(점심시간 13:00 - 14:00 제외 · 주말/공휴일
            제외)
          </p>
          <div className="socialmedia">
            <a href="#"><i className="fab fa-apple"></i>APP STORE</a>
            <a href="#"><i className="fab fa-google-play"></i>PLAY STORE</a>
          </div>
        </div>
        <div className="footer__rightbox__top">
          <ul className="content-list">
            <li className="content">
              <p className="small__text__title">숨고소개</p>
              <a href="" className="small__text__content">회사소개</a>
              <a href="" className="small__text__content">채용안내</a>
            </li>
            <li className="content">
              <p className="small__text__title">고객안내</p>
              <a href="" className="small__text__content">이용안내</a>
              <a href="" className="small__text__content">안전정책</a>
              <a href="" className="small__text__content">예상금액</a>
              <a href="" className="small__text__content">고수찾기</a>
              <a href="" className="small__text__content">고수에게묻다</a>
            </li>
            <li className="content">
              <p className="small__text__title">고수안내</p>
              <a href="" className="small__text__content">이용안내</a>
              <a href="" className="small__text__content">고수가입</a>
              <a href="" className="small__text__content">고수센터</a>
              <a href="" className="small__text__content">고수후기</a>
            </li>
            <li className="content">
              <p className="small__text__title">고객센터</p>
              <a href="" className="small__text__content">공지사항</a>
              <a href="" className="small__text__content">자주묻는질문</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__container footer__container__bottom">
        <div className="footer__leftbox__bottom">
          <div className="term__box">
            <a href="" className="term__list">이용약관</a>
            <a href="" className="term__list">개인정보취급방침</a>
            <span> </span>
          </div>
          <div className="term__description">
            <div className="space">
              <p>
                (주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며
                개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한
                <span>의무와 책임은 거래당사자에게 있습니다.</span>
              </p>
            </div>
            <div>
              <p>
                상호명:(주)브레이브모바일 · 대표이사:김로빈 ·
                개인정보책임관리자:김태우 · 주소:경기도 성남시 분당구
                황새울로200번길 28, 11층 1175호 
              </p>
              <p>
                사업자등록번호:120-88-22325 ·
                통신판매업신고증:제 2015-서울강남-00567 호 · 직업정보제공사업
                신고번호:서울청 제 2019-21호
              </p>
              <p>고객센터:1599-5319 ·
                이메일:support@soomgo.com
              </p>
              <p>Copyright ©Brave Mobile Inc. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="footer__rightbox__bottom">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-blogger"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
