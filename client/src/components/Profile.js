import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/Profile.css'

function Profile() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    getProfile()
  }, [])
  
  const getProfile = () => {
    axios.get('http://localhost:5000/api/profile/1', { withCredentials: true, crossDomain: true })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return (
    <div className='profile__section'>
      <h1 className='profile__title'>고수 프로필</h1>
      <div className='profile__container'>
        <div className='profileHeader'>
          <div className='picture'>
            <img src={data.image} alt='' />
          </div>
          <div className='profileText'>
            <p className='name'>{data.name}</p>
            <p className='subject'>{data.subject}</p><br />
            <p className='rating'>{data.rating} / 5.0</p>
          </div>
        </div>
        <p className='smallTitle'>한줄 소개</p>
        <p className='commnet'>{data.introduction}</p>
        <div className='gosuInfo'>
          <div className='basicInfo'>
            <p className='smallTitle'>기본 정보</p>
            <p className='content'>
              {data.auth_personal > 0 ? '본인 인증' : '본인 미인증' }
            </p>
            <p className='content'>{data.hiredNumber} 회 고용됨</p>
            <p className='content'>{data.address}</p>
            <p className='content'>연락가능시간 : {data.contactTime}</p>
            <p className='content'>{data.payment}</p>
          </div>
          <div className='addedInfo'>
            <p className='smallTitle'>추가 정보</p>
            <p className='content'>경력 {data.careerYear} 년</p>
            <p className='content'>직원수 {data.employees} 명</p>
            <p className='content'>채택수 : {data.hiredNumber}</p>
            <p className='content'>{data.auth_business > 0 ? '사업자등록증 등록완료' : '사업자등록증 미등록'}</p>
            <p className='content'>{data.license > 0 ? '자격증 등록완료' : '자격증 미등록'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
