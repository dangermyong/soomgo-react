import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import './css/RequestsQuotes.css'
import Quotes from './Quotes'

function RequestsQuotes() {
  let { id } = useParams()
  
  const [isLoading, setLoading] = useState(true)
  const [quotes, setQuotes] = useState()
  
  useEffect(() => {
    if(id) {
      requestData(id)
    }
  }, [id])
  
  const requestData = (requestsId) => {
    const user = JSON.parse(localStorage.getItem('Soomgo'))
    if(user == null) {
      window.location.replace('/signin')
    }
    axios.get(`${API}/requests/quotes/${requestsId}`, { id: user.id }, { withCredentials: true, crossDomain: true })
    .then(response => {
      setQuotes(response.data.results[0])
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
      <div className="requestsQuotes">
        {console.log(quotes)}
        <div 
          className="requestsQuotes__titleBackground"
          style={{backgroundImage: `url(${quotes.backgroundImage})`}}
        >
          <div className='requestsQuotes__titleBox'>
            <h1 className="requestsQuotes__title">{quotes.title}</h1>
            <span className='requestsQuotes__date'>{quotes.requestDate.split('T')[0]}</span>
            <br />
            <button className="requestsQuotes__btn">자세히 보기</button>
          </div>
        </div>
        <div className='requestsQuotes__quotes'>
          {quotes.estimates.map(item => (
            <Quotes
              key={item.id}
              id={item.id}
              name={item.name}
              rating={item.rating}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default RequestsQuotes
