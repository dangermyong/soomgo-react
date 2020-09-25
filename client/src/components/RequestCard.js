import React from 'react'
import './css/RequestCard.css'
import Pic from './code.jpg'

function RequestCard({ title, expiredDate, isExpired}) {
  return (
    <div className='requestCard'>
      <div className="requestCard__date">
        <span className='requestCard__badge'>{isExpired ? '마감' : '진행중'}</span>
        <span>{expiredDate}</span>
      </div>
      <h4>{title}</h4>
      <div className="requestCard__imgContainer">
        <img className='requestCard__img' src={Pic} alt=""/>
        <img className='requestCard__img' src={Pic} alt=""/>
      </div>
      <button className="requestCard__btn">자세히 보기</button>
    </div>
  )
}

export default RequestCard
