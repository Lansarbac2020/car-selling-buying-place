import axios from "axios";
const sendbirdApiToken=import.meta.env.VITE_SENDBIRD_API_TOKEN;
const sendBridAppId=import.meta.env.VITE_SENDBIRD_APP_ID;


const FormatResult=(resp)=>{
    let result=[];
    let finalResult=[]

    resp.forEach((item) => {
        const listingId=item.CarListing?.id;
        if(!result[listingId])
        {
            result[listingId]={
                car:item.CarListing,
                images:[]
            }
        }
        if(item.carImages)
        {
            result[listingId].images.push(item.carImages
                )
        }
    });
result.forEach((item)=>{
   finalResult.push({
    ...item.car,
    images:item.images
   })
})

return finalResult
}

// sendBrid
const CreateSendBirdUser=(userId,nickName,profileUrl)=>{
return axios.post('https://api-'+sendBridAppId+'.sendbird.com/v3/users',{
    user_id:userId,
    nickname:nickName,
    profile_url:profileUrl,
    issue_access_token:false
},{
    headers:{
        'Content-Type': 'application/json',
        'Api-Token':sendbirdApiToken
    }
})
}
const CreateSendBirdChannel=(users,title)=>{
    return axios.post('https://api-'+sendBridAppId+'.sendbird.com/v3/group_channels',{
        user_ids:users,
        is_distinct:true,
        name:title,
        operator_ids:[users[0]]
        
        
    },{
        headers:{
            'Content-Type': 'application/json',
            'Api-Token':sendbirdApiToken
        }
    })

}
export default{
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}