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
export default{
    FormatResult,
}