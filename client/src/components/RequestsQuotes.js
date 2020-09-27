import React from 'react'
import './css/RequestCard.css'
import { Link } from 'react-router-dom'

function RequestCard({ id, title, expiredDate, isExpired, estimates}) {
  const img = () => {
    if(estimates == null) {
      return(<div className='requestCard__noEstimates'>아직 받은 견적이 없습니다.</div>)
    } else {
      return (
        estimates.map(estimate => (
          <img key={estimate.id} className='requestCard__img' src={estimate.image} alt=""/>
      ))
    )}
  }

  return (
    <div className='requestCard'>
      <div className="requestCard__date">
        <span className='requestCard__badge'>{isExpired ? '마감' : '진행중'}</span>
        <span>{expiredDate}</span>
      </div>
      <h4>{title}</h4>
      <div className="requestCard__imgContainer">
        {img()}
      </div>
      <div className="requestCard__btnContainer">
        <Link to={`/requests/quotes/${id}`}>
          <button className="requestCard__btn">자세히 보기</button>
        </Link>
      </div>
    </div>
  )
}

export default RequestCard
