import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
FontAwesomeIcon


function Header() {
  return (
    
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand className=''>
      <FontAwesomeIcon icon={faVideo}beat style={{color:'orange',fontSize:'35px'}} />{' '}
      
        <span style={{color:'white',fontSize:'30px'}}>Media Player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header