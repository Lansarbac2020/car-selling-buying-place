import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailsHeader from '../components/DetailsHeader'
import { useParams } from 'react-router-dom';
import { db } from './../../../config';
import { CarImages, CarListing } from './../../../config/schema';
import Service from '@/shared/Service';
import { eq } from 'drizzle-orm';
import ImageGalery from '../components/ImageGalery';
import Description from '../components/Description';
import FeaturesList from '../components/Features';
import Pricing from '../components/Pricing';
import CarProperties from '../components/carSpecification';

function ListingDetails() {
    const{id}=useParams();
    //console.log(id);
    const[carDetail, setCarDetails]=useState()
useEffect(()=>{
    getCarDetails()
},[])

    const getCarDetails=async()=>{
        const result=await db.select().from(CarListing).innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId)).where(eq(CarListing.id,id));
        const resp=Service.FormatResult(result)
        setCarDetails(resp[0])
        //console.log(resp[0])
    }

  return (
    <div className='p-10 md:px-20'>
        {/* Listing Details */}
        <Header/>
        <div className=''>
            <DetailsHeader carDetail={carDetail}/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
            {/* left */}
            <div className='md:col-span-2 '>
             {/* image */}
             <ImageGalery carDetail={carDetail}/>
             {/* description */}
             <Description carDetail={carDetail}/>
             {/* features */}
             <FeaturesList features={carDetail?.features}/>
            </div>
            {/* right */}
            <div className=''>
             {/* pricing */}
             <Pricing carDetail={carDetail}/>
             {/* car properties */}
             <CarProperties carDetail={carDetail}/>
             {/* owner details */}
            </div>
        </div>
    </div>
  )
}

export default ListingDetails