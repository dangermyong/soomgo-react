import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/RequestsSent.css'
import RequestCard from './RequestCard'

function RequestsSent() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([{}])
  
  useEffect(() => {
    getRequsets()
  }, [])
  
  const getRequsets = () => {
    axios.get(`http://localhost:5000/api/requests/sent`, { withCredentials: true, crossDomain: true })
      .then(res => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="request">
        {console.log(data)}
        <h1>받은 견적</h1>
        <div className="request__list">
          {data.map(item => (
            <RequestCard 
              key={item.id}
              title={item.title}
              expiredDate={item.expiredDate.split('T')[0]}
              isExpired={item.isExpired}
            />
          ))}
          <RequestCard />
          <RequestCard />
        </div>
      </div>
    )
  }
}

export default RequestsSent
