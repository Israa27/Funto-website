import React from 'react'
import './blog.css'
import img from '../../Assets/images/img-2.jpg'
import img1 from '../../Assets/images/blog1.jpg'
import img2 from '../../Assets/images/blog2.jpg'
import img3 from '../../Assets/images/blog3.jpg'
export default function Blog() {
  return (
    <div className='blog'>
        <div className='header'>
            <span>Our Blog</span>
            <header>Latest News</header>
        </div>
        <div className='bolg-div'>
            <div className='single-div-bolg'>
                <div className='blog-img'>
                    <img src={img1} alt=''/>
                </div>
                <div className='bolg-text'>
                    <h4>Importent tips for your faviorate car.</h4>
                    <div className='blog-info'>
                        <img src={img} alt=''/>
                        <ul>
                            <li><span>By</span> Lily Anne</li>
                            
                            <li>Octobor 12,2020</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='single-div-bolg'>
                <div className='blog-img'>
                    <img src={img2} alt=''/>
                </div>
                <div className='bolg-text'>
                    <h4>Importent tips for your faviorate car.</h4>
                    <div className='blog-info'>
                        <img src={img} alt=''/>
                        <ul>
                            <li><span>By</span> Lily Anne</li>
                            <li>Octobor 12,2020</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='single-div-bolg'>
                <div className='blog-img'>
                    <img src={img3} alt=''/>
                </div>
                <div className='bolg-text'>
                    <h4>Importent tips for your faviorate car.</h4>
                    <div className='blog-info'>
                        <img src={img} alt=''/>
                        <ul>
                            <li><span>By</span> Lily Anne</li>
                            <li>Octobor 12,2020</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
