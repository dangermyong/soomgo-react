import React from 'react'
import { Link } from 'react-router-dom'
import './css/SearchProItem.css'
import StarRating from './StarRating'
import SmsIcon from '@material-ui/icons/Sms';

function SearchProItem({id, name, image, rating, introduction, review_name, review_comment}) {
  if(review_comment == '') {
    review_comment = '아직 리뷰가 없습니다.'
  }
  return (
    <div className="gosulist">
      <Link to={`/profile/${id}`}>
        <div className="picture"><img src={image} alt="" /></div>
        <div className="profile">
          <div className="gosulist__name">{name}</div>
          <div className="gosulist__rate">
            <StarRating rate={rating}/>
            <div className="gosulist__rating">{rating} / 5.0</div>
          </div>
          <div className="gosulist__comment">
          {introduction}</div>
          <div className="gosulist__review">
            <SmsIcon size="small" color="disabled"/>
            <span className="gosulist__review__comment">
              <strong>{review_name}</strong> {review_comment}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchProItem
