import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Header from './Homepage/Header'
import HeroSection from './Homepage/HeroSection'
import MoviesOne from './Homepage/MoviesOne'
import Feed from './Homepage/Feed'
import Footer from './Homepage/Footer'
import Cinema from './Cinemapage/Cinema'
import Offer from './Offeerspage/Offer'
import FB from './FBPaga/FB'
import Main from './Homepage/Main'


createRoot(document.getElementById('root')).render(
  <StrictMode>
          <Main/>
  </StrictMode>,
)
