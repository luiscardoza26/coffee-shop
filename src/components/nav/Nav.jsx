import React, { useState } from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {MdRateReview} from 'react-icons/md'
import {RiContactsLine} from 'react-icons/ri'
import {FaBlog} from 'react-icons/fa'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#menu" onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active' : ''}><MdOutlineRestaurantMenu /></a>
        <a href="#products" onClick={() => setActiveNav('#products')} className={activeNav === '#products' ? 'active' : ''}><MdProductionQuantityLimits /></a>
        <a href="#review" onClick={() => setActiveNav('#review')} className={activeNav === '#review' ? 'active' : ''}><MdRateReview /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>
        <a href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}><FaBlog /></a>
    </nav>
  )
}

export default Nav