import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from './../shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'  
import { Separator } from '@/components/ui/separator'
import features from './../shared/features.json'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { db } from './../../config'
import { CarListing } from './../../config/schema'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { RiLoader3Line } from "react-icons/ri";
import { toast } from './../components/ui/sonner'
import { useNavigate } from 'react-router-dom'


function AddNewListing() {
    const [formData, setFormData]=useState([]);
    const[featuresData, setFeaturesData]=useState([]);
    const[triggerUploadImages,setTriggerUploadImages]=useState();
    const[loading, setLoading]=useState(false)
    const navigate=useNavigate();


    const handleInputChange=(name,value)=>{
         setFormData((prevData)=>({
             ...prevData,
             [name]:value
         }))
         console.log(formData);
    }
    const handleFeatureChange=(name,value)=>{
                setFeaturesData((prevData)=>({
                    ...prevData,
                    [name]:value
                }))
                console.log("features",featuresData);
    }
    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault();
        //console.log("formdata",formData);
        toast('Please..wait')
        try{
        const result= await db.insert(CarListing).values({
            ...formData,
            features:featuresData
        }).returning({id:CarListing.id});
        if(result)
        {
           console.log("success")
           setTriggerUploadImages(result[0]?.id);
           setLoading(false)
        }

    }catch(error){
        console.log("Error",error);
    
    }
    }
    //   const UploadImages=()=>{

    //   }
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'> Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                {/* car details */}
                <div>
                    <h2 className='mb-6 font-medium text-lg '>Car Details</h2>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        {
      carDetails.carDetails.map((item,index)=>(
        <div key={index}>
 <label className='text-sm flex gap-2 items-center mb-2'>
    <IconField icon={item?.icon}/>
    {item?.label}{ item.required&&<span className='text-red-700'>*</span>}</label>
             {item.fieldType=='text'|| item.fieldType=='number'
              ? <InputField item={item} handleInputChange={handleInputChange}/>
              :item.fieldType=='dropdown'?<DropDownField item={item} handleInputChange={handleInputChange}/>
              : item.fieldType=='textarea'?<TextAreaField item={item} handleInputChange={handleInputChange}/>
              : null}
        </div>
      ))           
         }
                    </div>
                </div>
                <Separator className='my-6'/>
        {/* features list */}
         <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                {features.features.map((item,index)=>(
                    <div key={index} className='flex gap-2 items-center'>
                       <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name, value)}/> <h2>{item.label} 
                        
                        </h2>
                    </div>
                ))}
            </div>
         </div>
         <Separator className='my-6'/>
        {/* car images */}
        <UploadImages triggerUploadImages={triggerUploadImages} setLoading={(v)=>{setLoading(v);navigate('/profile')}}/>
 {/* submit button */}
 <div className=' mt-10 flex justify-end'>
<Button type='submit'
disabled={loading}
onClick={(e)=>onSubmit(e)}>
    
    {!loading?'Submit':<RiLoader3Line className='animate-spin text-lg' />}
     </Button>
 </div>
 
            </form>
        </div>
    </div>
  )
}

export default AddNewListing