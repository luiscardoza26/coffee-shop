import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Products from './components/products/Products'
import Review from './components/review/Review'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Nav />
        <Header />
        <About />
        <Menu />
        <Products />
        <Review />
        <Contact />
        <Blog />
        <Footer />
    </>
  )
}

export default App