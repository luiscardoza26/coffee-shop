import React from 'react'
import './menu.css'
import IMG1 from '../../assets/menu-1.png'
import IMG2 from '../../assets/menu-2.png'
import IMG3 from '../../assets/menu-3.png'
import IMG4 from '../../assets/menu-4.png'
import IMG5 from '../../assets/menu-5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Espresso Cappuccino',
    subTitle: '$15.99 20.99'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title of two portfolio',
    subTitle: '$15.99 20.99'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title of three portfolio',
    subTitle: '$15.99 20.99'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title of four portfolio',
    subTitle: '$15.99 20.99'
    
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title of five portfolio',
    subTitle: '$15.99 20.99'
  }
]

const Menu = () => {
  return (
    <section id='menu'>
      <h5>About</h5>
      <h2>Our Menu</h2>


      <div className="container menu__container">
        {
          data.map(({id, image, title, subTitle, addCar}) => {
            return (
              <article key={id} className="menu__item">
                <div className="menu__item-image">
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Menu