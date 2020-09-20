import React from 'react'
import './css/UserNav.css'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function UserNav() {
  return (
    <nav className="userNav">
      <div className="userNav__logo">
        <a href="/"><img src="https://soomgo-myong.s3.ap-northeast-2.amazonaws.com/images/soomgo_logo.png" alt="" /></a>
      </div>
      <div className="userNav__menu">
        <ul className="userNav__menu__ul">
          <li className="userNav__menu__item"><a href="/requests/sent" className="receivedEstimates">받은견적</a></li>
          <li className="userNav__menu__item"><a href="/" className="chatting">채팅</a></li>
          <li className="userNav__menu__item"><a href="/search/pro" className="searchPro">고수찾기</a></li>
          <li className="userNav__menu__item">
            <form action="input" className="searchProForm">
              <SearchIcon />
              <i className="fas fa-search"></i>
              <input type="text" placeholder="서비스를 검색해보세요" />
            </form>
          </li>
        </ul>
        <div className="userNav__profile">
          <NotificationsNoneIcon />
          <AccountCircleIcon className='userNav__profile__accountIcon' color='disabled' fontSize='large'/>
          <span className="openModal">김용재 고객님</span>
          <ArrowDropDownIcon />
        </div>
        <div className="modal" id="modal">
          <div className="modal-header">
            <div className="title">
              <div>안녕하세요, 김용재님</div>
              <div>평점 0 리뷰 0</div>
              <div>프로필 관리</div>
              <div>마이페이지</div>
            </div>
          </div>
          <div className="modal-body">
            <a href="/logout">Log out</a>
          </div>
        </div>
      </div>
      <div className="" id="overlay"></div>
    </nav>
  )
}

export default UserNav
