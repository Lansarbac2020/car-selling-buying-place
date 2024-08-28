import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../config';
import { CarImages, CarListing } from './../../../config/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Service from '@/shared/Service';
import CarListItem from '@/components/CarListItem';

function SeachBycategory() {

    const{category}=useParams();
    const[carList, setCarList]=useState([])
    //console.log(category)

    useEffect(()=>{
          GetCarList();

    },[])
    const GetCarList=async()=>{
        // Call API to get car list based on category
          const result=await db.select().from(CarListing).innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
          .where(eq(CarListing.category,category))
        // Set carList state with the fetched data
        const resp=Service.FormatResult(result)
        //console.log("result",resp);
        setCarList(resp);
     
    }
  return (
    <div>
        <Header/>
        <div className='p-16 bg-black flex justify-center'>
            <Search/>
        </div>
            <div className='p-10 md:px-20'>
                <h2 className=' text-4xl font-bold '>  <span className='text-gray-600 mr-3'>Search for: </span>{category}</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                   {carList?.length>0?carList.map((item,index)=>(
                 <div key={index}>
                    <CarListItem key={index} car={item}/>
 
                </div>
                ))
            :[1,2,3,4,5].map((item,index)=>{
                return <div key={index} className='h-[300px] border rounded-xl bg-slate-200 animate-pulse' />
            })
            } 
                </div>
                
               
            </div>
        
        
    </div>
  )
}

export default SeachBycategory