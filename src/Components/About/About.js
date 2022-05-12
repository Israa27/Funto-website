import React from 'react'
import { Container } from 'react-bootstrap'
import './about.css'
import img from '../../Assets/images/about-pic.png'
export default function About() {
  return (
    
    <div className='about'>
      <div className='about-img'>
        <img src={img} alt='about company '/>
      </div>
      <div className='about-text'>
        <span>About Our Company</span>
        <header>How We Can Help you</header>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
           If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
           hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
        <button>Learn More</button>
      </div>
    </div>
    
  )
}
