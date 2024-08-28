import Header from '@/components/Header'
import { db } from './../../config';
import { CarImages, CarListing } from './../../config/schema';
import React, { useEffect, useState } from 'react'
import {useSearchParams } from 'react-router-dom'
import { eq, gte } from 'drizzle-orm';
import Service from '@/shared/Service';
import Search from '@/components/Search';
import CarListItem from '@/components/CarListItem';

function SearchByOption() {
    const [searchParams]=useSearchParams();
    const[carList,setCarList]=useState([])
    const condition=searchParams.get('cars');
    const make=searchParams.get('make');
    const price=searchParams.get('price');

   // console.log(cars)

   useEffect(()=>{
      getCarList();
   },[])
   const getCarList=async()=>{
    const result=await db.select().from(CarListing)
    .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
    .where(condition!=undefined&&eq(CarListing.condition,condition))
    .where(make!=undefined&&eq(CarListing.make,make))
    // .where(price!=undefined&&gte(CarListing.price,price))
    const resp=Service.FormatResult(result)
    console.log(resp)
    setCarList(resp)
   }
  return (
    <div>
        <Header/>
        <div className='p-16 bg-black flex justify-center'>
            <Search/>
        </div>
            <div className='p-10 md:px-20'>
                <h2 className=' text-4xl font-bold '>Search Result</h2>
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

export default SearchByOption