import React from 'react'
import './contact.css'
import img from '../../Assets/images/car.png'
export default function Contact() {
  return (
    <div className='contact'>
       <div className='img-comtact'>
           <img src={img} alt=''/>
       </div>
        <form>
        <h1>Book An Appointment</h1>
            <div className='name'>
            <input type='text' placeholder='Your Name*'/>
            <input type='number' placeholder='Phone'/>
            </div>
            <div className='name'>
            <input type='email'placeholder='Your E-mail' />
            <select>
                <option>Tires Replacement</option>
                <option>Transmission</option>
                <option>Breaks</option>
                <option>Batteries</option>
            </select>
            </div>
            <textarea placeholder='Message'></textarea>
            <button>Appointment</button>
        </form>

    </div>
  )
}
