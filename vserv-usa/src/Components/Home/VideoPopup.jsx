import React from 'react'
import { RxCross2 } from "react-icons/rx";

const VideoPopup = ({HomeVideo,setPlayVid}) => {
  return (
    <div className="h-screen w-screen fixed flex items-start justify-center mt-6 gap-2">
        <video controls src={HomeVideo}></video>
        <RxCross2 className='bg-white text-2xl cursor-pointer rounded-sm' onClick={()=>{setPlayVid(false)}}/>
    </div>
  )
}

export default VideoPopup