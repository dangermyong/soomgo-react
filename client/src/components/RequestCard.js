import React from 'react'
import './css/RequestCard.css'
import Pic from './code.jpg'

function RequestCard() {
  return (
    <div className='requestCard'>
      <div className="requestCard__date">
        <span className='requestCard__badge'>마감</span>
        <span>2020.01.14</span>
      </div>
      <h4>골프 레슨</h4>
      <div className="requestCard__imgContainer">
        <img className='requestCard__img' src={Pic} alt=""/>
        <img className='requestCard__img' src={Pic} alt=""/>
      </div>
      <button className="requestCard__btn">자세히 보기</button>
    </div>
  )
}

export default RequestCard
