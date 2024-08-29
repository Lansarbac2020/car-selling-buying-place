import { Button } from '@/components/ui/button'
import Service from '@/shared/Service'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function OwnerInformation({carDetail}) {

  const {user}=useUser()
  const navigation=useNavigate()
  const onMessageOwner=async()=>{
    const userId=user.primaryEmailAddress.emailAddress.split('@')[0];
    const ownerUserId=carDetail?.createdBy.split('@')[0];
    // create current user id
    try {
      
      await Service.CreateSendBirdUser(userId,user?.fullName,user?.imageUrl).then(resp=>{
        console.log("sendBird",resp)
      })
    } catch (e) {}
    //owner user id

    try{
      await Service.CreateSendBirdUser([userId,ownerUserId],carDetail?.listingTitle)
      .then(resp=>{
        console.log(resp);
        console.log("Chaneel Created");
        navigation('/profile');
      })
    
} catch (e) {}
    //create chanel
    try {
      await Service.CreateSendBirdChannel([userId,ownerUserId],carDetail?.listingTitle).then(resp=>{
        console.log(resp);
        console.log("sendBird channel")
        navigation('/profile')
      })
      
    } catch (err) {
      
    }
     // send message to owner
     //sendBird.Channel.create(ownerUserId, {
     //  isDistinct: true,
     //  name: carDetail?.title,
     //  userIds: [userId],
     // })
     //.then(channel => {
     //   channel.sendUserMessage(userId, 'Hello from '+user?.fullName)
     //   console.log('Channel created and message sent:', channel)
     // })
     //.catch(error => {
     //   console.error('Error creating channel or sending message:', error)
     // })
     //.finally(() => {
     //   // Close the channel when done
     //   channel?.close()
     // })
    //
   

  }
  return (
    <div className='p-10 mt-7 border rounded-xl shadow-md  md:grid '>
        <h2 className='font-medium text-2xl mb-3'>Owner Details</h2>
        <img src={carDetail?.userImageUrl} className='w-[60px] h-[60px] rounded-full'/>
        <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
        <h2 className='mt-2 text-gray-500 text-xl'>{carDetail?.createdBy}</h2>
        <Button 
        onClick={onMessageOwner}
        className='mt-6 -translate-x-7'>Message Owner</Button>
    </div>
  )
}

export default OwnerInformation