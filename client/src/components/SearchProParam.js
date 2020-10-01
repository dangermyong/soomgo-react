import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/SearchPro.css'
import SearchIcon from '@material-ui/icons/Search'
import SearchProItem from './SearchProItem'
import { useParams } from 'react-router-dom'
import { API } from '../config'

function SearchProParam() {
  let { id } = useParams()
  
  const exampleUrls = [
    ['부천', '회계', 0],
    ['서울', '영어', 1],
    ['시흥', '수학', 2],
  ]
  const [searchData, setSearchData] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  useEffect(() => {
    if(id) {
      console.log(id)
      requestData(id)
    }
  }, [])
  
  function search() {
    axios.get(`${API}/search/pro`, { withCredentials: true, crossDomain: true
  })
      .then(response => {
        setSearchData(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const requestData = (search) => {
    axios.get(`${API}/search/pro?search=${search}`, { withCredentials: true, crossDomain: true })
    .then(response => {
      setSearchData(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchInput)
    requestData(searchInput)
  }


  return (
    <div className='main'>
      <h1><a href="/search/pro">고수찾기</a></h1>
      <div className="container">
        <div className="linkbox">
          <a href="/">숨고 &gt; </a>
          <a href="/search/pro">지역,카테고리</a>
        </div>
        <form onSubmit={handleSubmit} className='searchProForm'>
          <SearchIcon className='searchIcon'/>
          <input className='searchProForm__input' type="search" placeholder="고수, 지역, 서비스를 검색해보세요" name="search" id="searchPro" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        </form>
        <div className="button">
          {exampleUrls.map(example => (
            <button 
              onClick={() => {requestData(`${example[0]} ${example[1]}`)}}
              key={example[2]} 
              className='example__button'>
                {example[0]} {example[1]}
            </button>))}
        </div>
        <div className='proNumber'><strong>{searchData.length}</strong> 명의 고수</div><br />
        {searchData.map(item => (
          <SearchProItem 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            title={item.title}
            rating={item.rating}
            introduction={item.introduction}
            review_name={item.review_name}
            review_comment={item.review_comment}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchProParam
