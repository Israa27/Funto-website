import React from 'react'
import './team.css'
import img from '../../Assets/images/img-1.jpg'
import img2 from '../../Assets/images/img-2.jpg'
import img3 from '../../Assets/images/img-3.jpg'
import img4 from '../../Assets/images/img-4.jpg'
export default function Team() {
  return (
    <div className='team'>
        <div className='header'>
            <span>Meet Our Expertise</span>
            <header>Our Awesome Team</header>
        </div>
        <div className='team-members'>

            <div className='member'>
            <div className='social-icon'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
                <img src={img} alt=''/>
                <button>Alexsandar Nick</button>
            </div>
            <div className='member'>
            <div className='social-icon'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
                <img src={img2} alt=''/>
                <button>David Simon</button>
            </div>
            <div className='member'>
            <div className='social-icon'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
                <img src={img3} alt=''/>
                <button>Calvy Jenefar</button>
            </div>
            <div className='member'>
            <div className='social-icon'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin"></i>
            </div>
                <img src={img4} alt=''/>
                <button>Riccardo Cavallo</button>
            </div>

        </div>
    </div>
  )
}
