import React from 'react'
import './css/SearchProItem.css'

function SearchProItem({id, name, image, title, rating, introduction, review_name, review_comment}) {
  return (
    <div class="gosulist">
      <a href=''>
        <div class="picture"><img src={image} alt="" /></div>
        <div class="profile">
          <div class="name">{name}</div>
          <div class="subject">{title}</div>
          <div class="rating">{rating} / 5.0</div>
          <div class="comment">{introduction}</div>
          <div class="review"><strong>{review_name}</strong> {review_comment}</div>
        </div>
      </a>
    </div>
  )
}

export default SearchProItem
