import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategeoryApi, getuploadedVideoApi, updateCategory } from '../services/allAPI'



function View({uploadVideoStatus, setVideoDragAndRemoveStatus}) {

      const [video,setVideo] = useState([])
      const [deleteVideoStatus,setDeleteVideo]=useState(false)
      const [videostatus, setVideoStatus] = useState(false)

      const getVideos = async()=>{
          const response =  await getuploadedVideoApi()
         /*  console.log(response); */
         const {data} = response
         /* console.log(data); */
         setVideo(data)
      }

      console.log(video);
      const dragOver =(e)=>{
        e.preventDefault()
      }

      const videoDrop =async(e)=>{
        const {categoryId,videoid} = JSON.parse(e.dataTransfer.getData("dataShared"))
        console.log(categoryId,videoid);

         //get all category
         const {data}= await getCategeoryApi()

         //access the object with category id from all category
         let selectedCategeory= data.find((item)=>item.id== categoryId)

         //filtering the category object by removeing the video object from the allvideos
         let result = selectedCategeory.allVideos.filter((item)=>item.id!=videoid)

         console.log(result);
         let newCategory = {
          category:selectedCategeory.category,allVideos:result,id:categoryId
         }


         //updating the category 
         await updateCategory(categoryId,newCategory)
         setVideoDragAndRemoveStatus(true)
         
      }
      


      useEffect(()=>{  // to handle side effects
            getVideos()
            setDeleteVideo(false)
            setVideoStatus(false)
            
      },[uploadVideoStatus,deleteVideoStatus, videostatus,]) // dependency [] - content will be loaded if page loads


  return (
    <>
    <Row className='w-100 mb-5' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
    
    {
      video?.length>0?
      video?.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideo}/>
       </Col>

      )): <p className='text-warning fs-3'>No video uploaded</p>
        
    }



    </Row >

    
    </>
  )
}

export default View