import React from 'react'
import './blog.css'
import IMG1 from '../../assets/blog-1.jpg'
import IMG2 from '../../assets/blog-2.jpg'
import IMG3 from '../../assets/blog-3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Best Of Our Product',
    autor: 'By Admin Luis / 21st May, 2022',
    textB: 'Get To Know The Best Of Our Products, And Why Most People Want To Buy Them.',
    readMore: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Best Of A Good Cup Of Coffee In The Morning',
    autor: 'By Admin Luis / 02st May, 2021',
    textB: 'Get To Know The Best Of Having A Cup Of Coffee In The Morning, And Accompany It With The Best You Want.',
    readMore: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'What Better Way To Share A Good Cup Of Coffee With Someone!',
    autor: 'By Admin Luis / 15st May, 2021',
    textB: 'Be Sure To Read The Best Tips To Share An Incredible Cup Of Coffee With Someone.',
    readMore: '#'
  }
]

const Blog = () => {
  return (
    <section id='blog'>
      <h5>Look at our blog</h5>
      <h2>Our Blog</h2>


      <div className="container blog__container">
        {
          data.map(({id, image, title, textB, autor, readMore}) => {
            return (
              <article key={id} className="blog__item">

                <div className="blog__item-image">
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <h3>{autor}</h3>
                <p>{textB}</p>

                <div className="blog__item-cta">
                  <a href={readMore} className='btn btn-read' rel="noreferrer">Read More</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blog