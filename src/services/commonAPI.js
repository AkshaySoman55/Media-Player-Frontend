import axios from "axios";

export const commonAPI = async (httpmethod,url,reqbody)=>{
  let reqConfig ={
    method:httpmethod,
    url,
    data:reqbody,
    Headers:{
      "Content-Type":"application/json"
    }
  }

  return await axios(reqConfig).then((result)=>{
    return result
  }).catch((error)=>{
    return error
  })
}

