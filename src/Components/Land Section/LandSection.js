import React from 'react'
import './land.css'
import img from '../../Assets/images/hero-image.png'
import { Container } from 'react-bootstrap'
export default function () {
  return (
    <Container>
    <div className='content'>
     <div className='image'>
        <img src={img} alt=''/>
     </div>
    <div className='text'>
      <header>We Ensure Your Safe& 
          Happy Journey</header>
      <p>There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered</p>
      <button>Contact Us</button>
    </div>
    </div>
    </Container>
  )
}
