import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/LuisTorres.DeveloperWebSite" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Luis Torres 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer