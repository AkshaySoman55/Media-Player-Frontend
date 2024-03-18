import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { deleteWtchHistoryapi, getAllVideoHistory } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function WatchHistory() {
  const [historyVideos,setHistoryVideos] = useState([])
  const [deleteVideoStatus , setDeleteVideoStatus]= useState(false)

  //function to get all videos in history
   const getHistory = async()=>{
   const response = await getAllVideoHistory()
     /* console.log(response);  */ 
   setHistoryVideos(response.data)
    
  }/* 
    console.log(historyVideos);
   */


  //function to delete from history
  const handleDelete = async(id)=>{
    const response = await deleteWtchHistoryapi(id)
    if(response.status>=200 && response.status<300){
      setDeleteVideoStatus(true)
    }
    else{
      toast.error(`something went wrong`)
    }
    
  }

  useEffect(()=>{
    getHistory()
  },[deleteVideoStatus])


  return (
    <>
    <div className=' d-flex justify-content-between align-items-center mx-5 p-5'>
      <h3>Watch History</h3>
      <h6><Link to={'/Home'} style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon className='me-3' icon={faArrowLeft} beat />Back to Home</Link></h6>
    </div>

   <div className=' d-flex justify-content-between align-items-center mx-5 p-5'>
    
      <table className='table m-5 '>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {historyVideos?.map((item, index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href="">{item.url}</a></td>
            <td>{item.timeStamp}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
          </tr>
          ))}

        </tbody>
      </table>
   </div>

   <ToastContainer  position='top-center' theme='colored' autoClose ={2000}/>
   
    </>
  )
}

export default WatchHistory