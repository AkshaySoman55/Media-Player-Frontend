import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteaVideo } from '../services/allAPI';


function VideoCard({displayVideo, setDeleteVideoStatus , isPresent}) {

 
 console.log(displayVideo);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


 // function to add to history
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo.caption
    let url = displayVideo.embedLink
    let time = new Date()
    let timeStamp= Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour:`2-digit`,
      minute:`2-digit`,
      second:`2-digit`
      
    }).format(time)

    let reqBody={
      caption,url,timeStamp

    }
    const response = await AddToHistory(reqBody)
    console.log(response);
  }

  // function to delete a video
  const handleDelete = async(id)=>{
      const response = await deleteaVideo(id)
      console.log(response);
      setDeleteVideoStatus(true)

  }

  //function to drag
  const videoDrag =(e, Id)=>{
    console.log(`card with id ${Id} have dragged`);
    e.dataTransfer.setData("videoId",Id)
  }
    
  

  return (
    <>

    <Card style={{ width: '100%',}} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>

     { !isPresent && < Card.Img onClick={handleShow} variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'200px'} />}
      <Card.Body className='d-flex'>
        
        <Card.Text>
          {displayVideo?.caption.slice(0,12)}
        </Card.Text>
       { !isPresent && <Button  variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='ms-auto h-50' size='sm'><FontAwesomeIcon icon={faTrashCan} /></Button>}
      </Card.Body>
    </Card>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption.slice(0.20)}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${displayVideo?.embedLink}?autoplay=1`} title="Kaathuvaakula Rendu Kaadhal - Naan Pizhai Video | Vijay Sethupathi, Nayanthara | Anirudh Ravichander" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard