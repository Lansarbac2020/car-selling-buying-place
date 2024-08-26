import Header from '@/components/Header'
import React from 'react'
import carDetails from './../shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'  
import { Separator } from '@/components/ui/separator'
import features from './../shared/features.json'
import CheckBox from './components/CheckBox'

function AddNewListing() {
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
 <label className='text-sm'>{item?.label}{ item.required&&<span className='text-red-700'>*</span>}</label>
             {item.fieldType=='text'|| item.fieldType=='number'
              ? <InputField item={item}/>
              :item.fieldType=='dropdown'?<DropDownField item={item}/>
              : item.fieldType=='textarea'?<TextAreaField item={item}/>
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
            <div>
                {features.features.map((item,index)=>(
                    <div key={index}>
                        <CheckBox/> <h2>{item.label}</h2>
                    </div>
                ))}
            </div>
         </div>
        {/* car images */}

            </form>
        </div>
    </div>
  )
}

export default AddNewListing