import React from 'react'
import  './products.css'
import IMG1 from '../../assets/product-1.png'
import IMG2 from '../../assets/product-2.png'
import IMG3 from '../../assets/product-3.png'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Express Cofee (Traditional)',
    price: '$15.99',
    priceD: '20.99'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Express Cofee (Vainilla)',
    price: '$15.99',
    priceD: '20.99'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Express Cofee (X5 Combo)',
    price: '$15.99',
    priceD: '20.99'
  }
]

const Products = () => {
  return (
    <section id='products'>
      <h5>About</h5>
      <h2>Our product</h2>


      <div className="container product__container">
        {
          data.map(({id, image, title, price, priceD, addCar}) => {
            return (
              <article key={id} className="product__item">

                <div className="product__item-image">
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <AiFillStar className='iconStar' />
                <BsStarHalf className='iconStar' />
                <h3>{price}<span>{priceD}</span></h3>
                
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Products