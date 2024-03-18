import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
FontAwesomeIcon
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div  className='w-100  justify-content-center alighn-items-center d-flex flex-coloumn mt-5 '>
      
      <div className='w-100 row p-3'>
        <div className="col-md-3">
        <div className='website'>
        <FontAwesomeIcon icon={faVideo} style={{color:'orange',fontSize:'35px'}} />
      
          <span style={{fontSize:'35px',color:'white'}} className='ms-3'>Media Player</span>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente, asperiores alias praesentium assu.</p>
        </div>
        </div>

        <div className="col-md-3">
        <div className='links'>
          <h5>Links</h5>
          <p className='mt-3'><Link to={'/'}>Landing Page</Link></p>
          <p><Link to={'/Home'}>Home</Link></p>
          <p><Link to={'/WatchHistory'} >Watch History</Link></p>
        </div>
        </div>

        <div className="col-md-3">
        <div className='guides'>
          <h5>Guides</h5>
          <p>React</p>
          <p>React-Bootstrap</p>
          <p>Bootswatch</p>

        </div>
        </div>

        <div className="col-md-3">
        <div className='contact'>
          <h5>Contact</h5>
          <div className='d-flex mt-3  w-100'>
            <input type="text" className='form-control' placeholder='Enter your email address' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-around mt-5 pt-2'>
          <FontAwesomeIcon icon={faInstagram} size='1xl' />
          <FontAwesomeIcon icon={faFacebook} size='1xl' />
          <FontAwesomeIcon icon={faXTwitter} size='1xl'/>
          <FontAwesomeIcon icon={faLinkedin} size='1xl'/>


          </div>
        </div>
        </div>

      
        
      

      </div>

    </div>
  )
}

export default Footer