import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { API } from '../config'
import './css/RequestsSent.css'
import RequestCard from './RequestCard'

function RequestsSent() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([{}])
  
  useEffect(() => {
    getRequsets()
  }, [])
  
  const getRequsets = () => {
    const user = JSON.parse(localStorage.getItem('Soomgo'))
    if(user == null) {
      window.location.replace('/signin')
    }
    axios.post(`${API}/requests/sent`, { id: user.id }, { withCredentials: true, crossDomain: true })
      .then(res => {
        setData(res.data.results)
        setIsLoading(false)
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
        <h1>받은 견적</h1>
        <div className="request__list">
          {data.map(item => (
            <RequestCard 
              key={item.id}
              id={item.id}
              title={item.title}
              expiredDate={item.expiredDate.split('T')[0]}
              isExpired={item.isExpired}
              estimates={item.estimates}
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
