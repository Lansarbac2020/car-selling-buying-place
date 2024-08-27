import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

function UploadImages() {

    const[selectedFileList, setSelectedFileList] =useState([]);
    const onFileSelected=(e)=>{
        const files=e.target.files
        console.log(files);
        for(let i=0; i<files?.length; i++)
        {
            const file = files[i];
           setSelectedFileList((prev)=>[
            ...prev,file
           ])
            //const objectUrl=URL.createObjectURL(file);

            
            
        }
    }
    const onImageRemove=(image,index)=>{
      const result=selectedFileList.filter((item)=>item!=image);
      setSelectedFileList(result)
    }
  return (
    <div>
        <h2 className='my-3 font-medium text-xl'>Upload Images</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
           
           {selectedFileList.map((image,index)=>(
            <div key={index}>
                <IoIosCloseCircle
                onClick={()=>onImageRemove(image,index)}
                className='absolute m-2 text-lg '/>
             <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover'/>
            </div>
           ))}
           
            <label htmlFor='upload-images'>
                <div className=' border rounded-xl border-dotted border-primary  bg-blue-100 p-10 cursor-pointer hover:shadow-lg'>
                    <h2 className='text-lg text-center text-primary '>+</h2>
                </div>
            </label>
            <Input type='file' multiple={true} 
            onChange={onFileSelected}
            id='upload-images' className='opacity-0'/>
        </div>
    </div>
  )
}

export default UploadImages