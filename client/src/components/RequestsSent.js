import React from 'react'
import './css/RequestsSent.css'
import RequestCard from './RequestCard'

function RequestsSent() {
  return (
    <div className="request">
      <h1>받은 견적</h1>
      <div className="request__list">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  )
}

export default RequestsSent
