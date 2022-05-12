import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'
import img from '../../Assets/images/logo.png'
import img1 from '../../Assets/images/footer1.jpg'
import img2 from '../../Assets/images/img2-footer.jpg'
export default function Footer() {
  return (
    <div className='footer'>
        <Container >
            <div className='footer-divs'>
            <div className='logo'>
                <img src={img} alt=''/>
                <p>Simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever.</p>
            </div>

            <div className='recent-post'>
              <div className='header'>
               
                <header>Recent Post</header>
                <div>
                    <div className='text'>
                        <img src={img1} alt=''/>
                        <div className='inner-text'>
                          <p>Most Importent Issue For your car.</p>
                          <span>18 Feb 2019</span>
                        </div>
                    </div>
                    <div className='text'>
                        <img src={img2} alt=''/>
                        <div className='inner-text'>
                          <p>Most Importent Issue For your car.</p>
                          <span>18 Feb 2019</span>
                        </div>
                    </div>
                </div>
             </div>
            </div>

            <div className='address'>
             <div className='header'>
                <header>Address</header>
                <p>Head Office Address
                    121 King Street, Melbourne West,
                    Australia
                </p>
                <div className='phone'>
                    <div className='flex'><span>Phone:</span><p>888 123-4587</p></div>
                    <div className='flex'><span>Email:</span><p>info@example.com</p></div>
                </div>
            </div>
            </div>
            <div className='services'>
              <div className='header'>
                <header>Services</header>
                <ul>
                    <li>About</li>
                    <li>Service</li>
                    <li>Service single</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Blog List</li>
                </ul>
              </div>
            </div>
            </div>
           
        </Container>
        <hr/>
            <p className='copywrite'>Privacy Policy |  &copy; 2020 <span>Motonic</span> All rights reserved</p>

    </div>
  )
}
