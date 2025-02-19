import React from 'react'
import { RxCross2 } from "react-icons/rx";

const VideoPopup = ({HomeVideo,setPlayVid}) => {
  return (
    <div className="h-screen w-screen fixed flex items-start justify-center gap-2 max-lg:justify-end max-lg:flex-col-reverse max-lg:items-end p-5">
        <video controls src={HomeVideo}></video>
        <RxCross2 className='bg-white text-2xl cursor-pointer rounded-sm max-lg:text-right' onClick={()=>{setPlayVid(false)}}/>
    </div>
  )
}

export default VideoPopup