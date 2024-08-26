import FakeData from '@/shared/FakeData'
import React from 'react'
import CarListItem from './CarListItem'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

function MostSearchedCar() {
    //console.log(FakeData.carList);
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Cars</h2>
        <Carousel>
  <CarouselContent>

{FakeData.carList.map((car,index)=>(
                <div key={index}>
<CarouselItem className='basis-1/4'> <CarListItem car={car} key={index}/></CarouselItem>
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