import React from 'react'
import { Link } from 'react-router-dom'
import './css/SearchProItem.css'

function SearchProItem({id, name, image, title, rating, introduction, review_name, review_comment}) {
  return (
    <div className="gosulist">
      <Link to={`/profile/${id}`}>
        <div className="picture"><img src={image} alt="" /></div>
        <div className="profile">
          <div className="name">{name}</div>
          <div className="subject">{title}</div>
          <div className="rating">{rating} / 5.0</div>
          <div className="comment">{introduction}</div>
          <div className="review"><strong>{review_name}</strong> {review_comment}</div>
        </div>
      </Link>
    </div>
  )
}

export default SearchProItem
