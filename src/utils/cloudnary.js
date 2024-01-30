import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_KEY_SECRET 
});





// uploading data file use trycatch []

const uploadCloudinary=async(localFilepath)=>{
  try {
    if(!localFilepath) return null;
    //upload file
    cloudinary.uploader.upload(localFilepath,{
      resource_type:'auto',
    });//file uploaded on cloud
    console.log("file uploaded",response.url);
    return response;

  } catch (error) {
    fs.unlinkSync(localFilepath)//to remove the local temprary file if upload get failed
    return null;
  }
}


export {uploadCloudinary};

