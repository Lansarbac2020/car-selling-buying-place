import FakeData from '@/shared/FakeData'
import React, { useEffect, useState } from 'react'
import CarListItem from './CarListItem'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { CarImages, CarListing } from './../../config/schema'
import { desc, eq } from 'drizzle-orm'
import { db } from './../../config'
import Service from '@/shared/Service'
  

function MostSearchedCar() {
  const[carList, setCarList]=useState([]);
  useEffect(()=>{
          getPopularCarList();
  },[])
    //console.log(FakeData.carList);
    const getPopularCarList=async()=>{
      const result=await db.select().from(CarListing).leftJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
      .limit(10)
      const resp=Service.FormatResult(result);
      console.log(resp)
      setCarList(resp)
    }
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Cars</h2>
        <Carousel>
  <CarouselContent>

{carList.map((car,index)=>(
                <div key={index}>
<CarouselItem className='basis-1/2 md:basis-1/3 lg:basis-1/4'> 
<CarListItem car={car} key={index}/></CarouselItem>
                </div>
            ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      
    </div>
  )
}

export default MostSearchedCar