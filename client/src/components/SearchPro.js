import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/SearchPro.css'
import SearchIcon from '@material-ui/icons/Search'
import SearchProItem from './SearchProItem'


function SearchPro() {
  const [searchData, setSearchData] = useState([])
  
  useEffect(() => {
    search()
  }, [])

  useEffect(() =>{
    console.log(searchData)
  },[searchData])

  function search() {
    axios.get('http://localhost:5000/api/search/pro', { withCredentials: true, crossDomain: true
    })
      .then(response => {
        setSearchData(response.data.results)
        // setMessage('로그인 완료되었습니다.')
        // setSuccess(true)
      })
      .catch(err => {
        console.log(err)
        // setMessage(err.response.data.err)
        // setSuccess(false)
      })
  }

  return (
    <div className='main'>
      <h1><a href="/search/pro">고수찾기</a></h1>
      <div className="container">
        <div className="linkbox">
          <a href="/">숨고 > </a>
          <a href="/search/pro">지역,카테고리</a>
        </div>
        <form className='searchProForm'>
          <SearchIcon className='searchIcon'/>
          <input className='searchProForm__input'type="search" placeholder="고수, 지역, 서비스를 검색해보세요" name="search" id="searchPro" />
        </form>
        <div className="button">
          <a href="/search/pro?search=부천+회계">부천 회계</a>
          <a href="/search/pro?search=시흥+세무">시흥 세무</a>
          <a href="/search/pro?search=서울+Java">서울 Java</a>
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

export default SearchPro
