import React from 'react'
import './review.css'
import AVTR1 from '../../assets/pic-1.jpg'
import AVTR2 from '../../assets/pic-2.jpg'
import AVTR3 from '../../assets/pic-3.jpg'
import {AiFillStar} from 'react-icons/ai'

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Luna Stuart',
    review: 'In terms of quality and price, it is incredible, the taste of this coffee is of another level, really very satisfied with this product.',
  },
  {
    avatar: AVTR2,
    name: 'Hermione Climton',
    review: 'Never before have I tasted such a fine and delicious coffee, its flavor makes you want more, I really recommend it.',
  },
  {
    avatar: AVTR3,
    name: 'Martha Smith',
    review: 'I have tasted different types of coffee in all my life, but this one takes the first place, it is smooth, thick, frothy, and with great quality in its flavor.',
  }
]

const Review = () => {
  return (
    <section id='review'>
      <h5>Review from clients</h5>
      <h2>Reviews</h2>

      <Swiper className="container review__container"
      // install Swiper modules
      modules={[ Autoplay, Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="review">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
                <br />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
              </SwiperSlide >
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Review