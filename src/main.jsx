import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'
import Navbar from './containers/Navbar'
import Hero from './containers/Home'
import BestSellers from './containers/BestSellers/SellersJs'
import Products from './containers/Products'
import ReviewSlider from './containers/ReviewSlider'
import Promo from './containers/Promo'
import Querys from './containers/Querys'
import Price from './containers/Price'
import Footer from './containers/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyles/>
     <Navbar/>
     <Hero/>
     <BestSellers/>
     <Products/>
     <ReviewSlider/>
     <Promo/>
     <Price/>
     <Querys/>
     <Footer/>
  </React.StrictMode>,
)
