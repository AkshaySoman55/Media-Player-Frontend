import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  const navigateByurl = useNavigate()
  return (
    <div>
      <Row className='d-flex justify-content align-items-center mt-5 mb-5'>
        <Col lg={1}></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
          <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis labore, amet laboriosam atque necessitatibus consequatur vel nostrum. Omnis blanditiis </p>
          <button onClick={()=>navigateByurl('/Home')} className='btn btn-warning mt-5'>Get Strated</button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img  src="https://media1.tenor.com/m/gZwJY9WN3WkAAAAC/littlekingdoms-dance.gif " alt="img1" />
        </Col>

      </Row>

      <div className='container d-flex justify-content-center align-items-center mt-5 flex-column mb-5'>
        <h3>Features</h3>
        <div className='row d-flex justify-content-evenly me-5'>

          <div className="col-md-4 px-4">
          <Card className='p-4 m-3' style={{ width: '16rem' }}>
          <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJndHV5bW1qeHVydmQ0dGZnNXEycXJjOXo3YTBzYW45aTcweXcxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/200.webp" />
      <Card.Body>
        <Card.Title className='text-center'>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
          </div>

          <div className="col-md-4 px-4">
          <Card className='p-4 m-3' style={{ width: '16rem'  }}>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm5qNXZqM3Q3bXc5d294bWFjczFzbjJvZzFybG5obTZxcm5kcngyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MF4gHGVeCOXAc/giphy.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Categorized</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
          </div>

          <div className="col-md-4 px-4">
          <Card className='p-4 m-3'  style={{ width: '16rem' }}>
          <Card.Img variant="top" style={{width:'100%', height:'300px'}} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3d0NjJuY3o1MzdrdHNxMndzMjZtdW84NDlwa29ybTJlbnBvdXZ1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tqfS3mgQU28ko/giphy.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
          </div>

      


    
        </div>
      </div>


      <div className='w-100 d-flex justify-content-center align-items-center mt-5 mb-5'>
       
       <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <div className="row  w-100 p-5">

  <div className="col-md-5">
         <h2 style={{fontSize:'35px'}} className='text-warning' >Play What's You Need</h2>
         <h6 className='mt-4'><span style={{fontSize:'30px',color:'yellow'}}>Play Everything </span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga, sequi rerum, cupiditate nam perspiciatis optio?</h6>

         <h6 className='mt-4'><span style={{fontSize:'30px',color:'yellow' }}>Play Everything </span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga, sequi rerum, cupiditate nam perspiciatis optio?</h6>

         <h6 className='mt-4 mb-3'><span style={{fontSize:'30px', color:'yellow'}}>Play Everything </span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fuga, sequi rerum, cupiditate nam perspiciatis optio?</h6>

  </div>
  <div className="col-md-1"></div>

   <div className="col-md-6">

        <iframe width="100%" height="400" src="https://www.youtube.com/embed/My_S68DAAPg" title="Manithan - Aval Video | Udhayanidhi | Santhosh Narayanan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  

   </div>

   </div>
        </div>
        <div className="col-md-1"></div>

       </div>

      </div>

      

    </div>
  )
}

export default LandingPage