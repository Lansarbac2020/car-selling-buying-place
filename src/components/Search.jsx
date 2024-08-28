import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { IoSearchSharp } from "react-icons/io5";
import Data from '@/shared/Data';
import { Link } from 'react-router-dom';

function Search() {

  const [cars, setCars]=useState();
  const [make, setMake]=useState();
  const [price, setPrice]=useState();

  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full md:flex flex-col md:flex-row gap-10 px-5 items-center w-[60%] '>
<Select onValueChange={(value)=>setCars(value)}>
  <SelectTrigger className=" outline-none md:border-none w-full ">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="new">New</SelectItem>
    <SelectItem value="old">Old</SelectItem>
    <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
   
  </SelectContent>
</Select>
<Separator orientation='vertical' className='hidden md:block'/>
<Select onValueChange={(value)=>setMake(value)}>
  <SelectTrigger className=" outline-none  md:border-none w-full">
    <SelectValue placeholder="Car Makes" /> 
    </SelectTrigger>
    <SelectContent>
    {Data.CarMakes.map((maker,index)=>(
        <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
  
    ))}
  </SelectContent>
</Select>
<Separator orientation='vertical' className='hidden md:block'/>
<Select onValueChange={(value)=>setPrice(value)}>
  <SelectTrigger className=" outline-none md:border-none w-full">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
{Data.Pricing.map((price,index)=>(
    <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
))}
  </SelectContent>
</Select>
<Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>

<IoSearchSharp className='text-[50px] md:-translate-x-9 sm:mr-3 text-white hover:scale-105 cursor-pointer transition-all duration-200 bg-primary rounded-full p-3' />
</Link>
    </div>
  )
}

export default Search