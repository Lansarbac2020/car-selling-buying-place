import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import MysListing from './components/MysListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function Profile() {
  return (
    <div>
        <Header/>
        <Tabs defaultValue="my-listing" className="w-full">
  <TabsList className='w-full flex justify-start'>
    <TabsTrigger value="my-listing">My Listing</TabsTrigger>
    <TabsTrigger value="inbox">Inbox</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="my-listing">
    <MysListing/>
  </TabsContent>
  <TabsContent value="inbox">Inbox</TabsContent>
  <TabsContent value="profile">Profile</TabsContent>
</Tabs>

        <div className='px-10 md:px-20 my-10'>
           
        </div>
    </div>
  )
}

export default Profile