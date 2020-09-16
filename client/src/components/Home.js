import React from 'react'
import './css/Home.css'
import Lesson from './picture/lesson.svg'
import HomeLiving from './picture/home-living.svg'
import Event from './picture/event.svg'
import Business from './picture/business.svg'
import Design from './picture/design.svg'
import Health from './picture/health.svg'
import Parttime from './picture/parttime.svg'
import Etc from './picture/etc.svg'


function Home() {
  return (
    <div className='main'>
      <section className="intro">
        <div className="summary">
          <div className="catchphrase">
            <span>딱! 맞는 고수를 <br />소개해드립니다</span>
          </div>
          <div className="search-container">
            <input type="text" placeholder="어떤 분야의 달인을 찾으시나요?" autocomplete="off" />
            <button type="submit"><i className="fas fa-search"></i></button>
          </div>
          <div className="list">
            <ul>
              <li className="item1">
                <img src={Lesson} alt=""/>
                <span>레슨</span>
              </li>
              <li className="item2">
                <img src={HomeLiving} alt=""/>
                <span>홈/리빙</span>
              </li>
              <li className="item3">
                <img src={Event} alt=""/>
                <span>이벤트</span>
              </li>
              <li className="item4">
                <img src={Business} alt=""/>
                <span>비즈니스</span>
              </li>
              <li className="item5">
                <img src={Design} alt=""/>
                <span>디자인/개발</span>
              </li>
              <li className="item6">
                <img src={Health} alt=""/>
                <span>건강/미용</span>
              </li>
              <li className="item7">
                <img src={Parttime} alt=""/>
                <span>취미</span>
              </li>
              <li className="item8">
                <img src={Etc} alt=""/>
                <span>기타</span>
              </li>
            </ul>
          </div>
          </div>
          <div className="image">
              <img src="https://soomgo-myong.s3.ap-northeast-2.amazonaws.com/images/pilates.png" />
          </div>
      </section>
    </div>
  )
}

export default Home
