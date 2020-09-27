import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/Profile.css'
import StarRating from './StarRating'
import CheckIcon from '@material-ui/icons/Check';


function Profile() {
  let { id } = useParams()

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([{}])

  useEffect(() => {
    getProfile()
  }, [])
  
  const getProfile = () => {
    axios.get(`http://localhost:5000/api/profile/${id}`, { withCredentials: true, crossDomain: true })
      .then(res => {
        setData(res.data)
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
      <div className='profile__section'>
        <h1 className='profile__title'>고수 프로필</h1>
        <div className='profile__header'>
          <img className='profile__picture' src={data.image} width='120px' height='120px' alt='' />
          <div className='profile__text'>
            <p className='profile__name'>{data.name}</p>
            <p className='profile__subject'>{data.subject}</p>
            <div className="profile__rate">
              <StarRating rate={data.rating ? data.rating : 0} />
              <div className="profile__rating">{data.rating} / 5.0</div>
            </div>
          </div>
        </div>
        <p className='profile__smallTitle'>한줄 소개</p>
        <p className='profile__introduction'>{data.introduction}</p>
        <div className='profile__gosuInfo'>
          <div className='profile__basicInfo'>
            <p className='profile__smallTitle'>기본 정보</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />
              {data.auth_personal > 0 ? '본인 인증' : '본인 미인증' }
            </p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />{data.hiredNumber} 회 고용됨</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />{data.address}</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />연락가능시간 : {data.contactTime}</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />{data.payment}</p>
          </div>
          <div className='profile__addedInfo'>
            <p className='profile__smallTitle'>추가 정보</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />경력 {data.careerYear} 년</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />직원수 {data.employees} 명</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />채택수 : {data.hiredNumber}</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />{data.auth_business > 0 ? '사업자등록증 등록완료' : '사업자등록증 미등록'}</p>
            <p className='profile__content'><CheckIcon style={{marginRight: '5px'}} />{data.license > 0 ? '자격증 등록완료' : '자격증 미등록'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
