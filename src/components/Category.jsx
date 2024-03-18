import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from '../components/VideoCard'
import { addCategeoryApi, deleteCategoryApi, getAVideoApi, getCategeoryApi, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Category({videoDragAndRemoveStatus ,setVideoDragAndRemoveStatus}) {

  //state to store the category name
  const [categoryName, setCategoryName] =useState("")
  const [allCategory, setAllcategory] = useState([])
  const [addCategeoryStatus, setAddCategeoryStatus] = useState(false)
  const [deleteCategeoryStatus, setDeleteCategoryStatus] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(categoryName);

  const handleCategeoryAdd= async()=>{
    if(categoryName){
      let reqBody ={
        category:categoryName,
        allVideos:[]
      }
      const response = await addCategeoryApi(reqBody)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('categeory added')
        setAddCategeoryStatus(true)
        setCategoryName("")
        handleClose()
      }
      else{
        toast.error('something went wrong')
      }
    }
    else{
      toast.info(`Please enter the Category Name`)
    }
  
  }

  //function to get category
  const getAllCategeory =async()=>{
     const response = await getCategeoryApi()
     /* console.log(response); */
     setAllcategory(response.data)
  }
  

  //function to delete category
  const handleDeleteCategory = async(id)=>{
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }


  console.log(allCategory);

  //function to prevent the data loss on track
  const dragOver = (e)=>{
    e.preventDefault()
  }

  //function for drop
  const videoDrop =async(e, categoryId)=>{
     console.log(`category id is ${categoryId}`);

     //get the videoid send from videocard component
     const videoid = e.dataTransfer.getData("videoId")
     console.log(`video is ${videoid}`);

     //api call to get  a details of a pariticular video
     const {data} = await getAVideoApi(videoid)
     console.log(data);

     //selected category
     const selectedCategeory = allCategory.find((item)=>item.id==categoryId)
     console.log(selectedCategeory);

     if(selectedCategeory.allVideos.find(item=>item.id==videoid)){
      toast.error(`video already exist in the same category`)
     }else{
      selectedCategeory.allVideos.push(data)
     }
     

     //function to update category
     await updateCategory(categoryId,selectedCategeory)
     getAllCategeory()

    
     

    


  }

   //function to delete cards from category
   const DragStart =(e,categoryId,videoid)=>{
    console.log(`category id is ${categoryId}`);
    console.log(`videoid is ${videoid}`);

    let dataShared = {
      categoryId,videoid
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
   }

  
  useEffect(()=>{
    getAllCategeory()
    setAddCategeoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
    
  },[addCategeoryStatus, deleteCategeoryStatus ,videoDragAndRemoveStatus])


  return (
    <>
    <div className='d-flex justify-content-center align-items center mt-5 mb-5'>
      <button className='btn btn-warning w-100'onClick={handleShow}>Add New Category</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPencil}className='text-warning me-3' />Add new Categeory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
            <p>Category Name</p> 
            
          <Form.Group className='mb-3'>
          <Form.Control
            required
            type="text"
            placeholder="Enter the Categeory Name"
            onChange={(e)=>setCategoryName(e.target.value)}
          />
        </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategeoryAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
      
      {allCategory?.length>=0?
        allCategory?.map((item)=>(<div className='border border-secondary w-100 p-3 rounded mt-3' droppable  onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
        <div className='d-flex justify-content-center align-items-center'> 
          <p>{item.category}</p>
          <button  onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger  ms-auto '><FontAwesomeIcon icon={faTrashCan} /></button>
          

        </div>
        
        <Row>
        {item.allVideos.length>0?
         item.allVideos.map((card)=>(
          <Col sm={12} draggable onDragStart={(e)=>DragStart(e,item.id, card.id)}>
             <VideoCard displayVideo={card} isPresent={true}/> 
          </Col>)):null}
       </Row>
        

      </div>))
      : <p className='text-danger mt-5'>no categeory added yet</p>

      }
      
      
    </>
  )
  
  
}
<ToastContainer  position='top-center' theme='colored' autoClose ={2000}/>


export default Category