import React from 'react'
import './css/Quotes.css'
import CurrencyFormat from 'react-currency-format'
import StarRating from './StarRating'

function Quotes({ image, name, rating, price }) {
  return (
    <div className='quotes'>
      <img className='quotes__image' src={image} alt=""/>
      <div className='quotes__content'>
        <span className="quotes__content__name">{name}</span>
        <div className='quotes__content__ratingBox'>
          <StarRating rate={rating}/>
          <span className='quotes__content__rating'>{rating}</span>
        </div>
        <span className='quotes__content__price'>
          <img className='quotes__content__currency' src='https://soomgo-myong.s3.ap-northeast-2.amazonaws.com/images/korean_currency.svg' alt=""/>
          <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={' '}suffix={'원'} />
        </span>
        
      </div>
    </div>
  )
}

export default Quotes
