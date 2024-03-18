
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//api for uploading video

export const uploadVideoApi =async(reqBody)=>{
  return await commonAPI(`POST`,`${serverURL}/video`,reqBody)
}

//api to get uploaded video

 export const getuploadedVideoApi = async()=>{
  return await commonAPI('GET',`${serverURL}/video`,"")
}

//api to delete a particular video

export const deleteaVideo =async(id)=>{
  return await commonAPI(`DELETE`,`${serverURL}/video/${id}`,{})
}

//api to add video into history

export const AddToHistory = async(reqBody)=>{
  return await commonAPI(`POST`,`${serverURL}/history`,reqBody)
}

//apt to get video from the history

export const getAllVideoHistory  = async()=>{
  return await commonAPI(`GET`,`${serverURL}/history`,"")
}

//api to delete watch history

export const deleteWtchHistoryapi = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

/// api to add an categeory

export const addCategeoryApi =async(reqBody)=>{
   return await commonAPI(`POST`,`${serverURL}/category`,reqBody)
}

//api to get the categeory

export const getCategeoryApi = async()=>{
  return await commonAPI(`GET`,`${serverURL}/category`,"")
}

//api to delete category

export const deleteCategoryApi = async(id)=>{
  return await commonAPI(`DELETE`,`${serverURL}/category/${id}`,{})

}

//api to get a single video from videos

export const getAVideoApi = async(id)=>{
  return await commonAPI(`GET`,`${serverURL}/video/${id}`,"")
}

//api to update category

export const updateCategory = async(id,reqBody)=>{
  return await commonAPI(`PUT`,`${serverURL}/category/${id}`,reqBody)
}