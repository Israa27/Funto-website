import React from 'react'
import { Container } from 'react-bootstrap'
import './services.css'
import data from './data'
export default function () {
  return (
    <div className='service'>
        <Container>
            <div className='header'>
                <span>What We Do</span>
                <header>Our Services</header>
            </div>
            <div className='all-divs'>
                {data.map((item,index)=>{
                    return(
                    <div className='service-box' key={index}>
                        <div className='service-icon'>
                            <i className={item.icon} ></i>
                        </div>
                        <div className='service-text-box'>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </div>

                )})

                }

            </div>
        </Container>

    </div>
  )
}
