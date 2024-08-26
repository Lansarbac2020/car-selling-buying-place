import {faker} from '@faker-js/faker'
function createRandomCarList(){
    return{
       name:faker.vehicle.vehicle(),
       fuelType:faker.vehicle.fuel(),
       model:faker.vehicle.model(),
       type:faker.vehicle.type(),
       
       image:'https://imgs.search.brave.com/Qde7EfTJnpBDHSgUK2x6tfIvKwtJ7VdyV8fmBFFTIxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJjYXJzLm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA0L0xh/bWJvcmdoaW5pLU1p/dXJhLVNWLTItNzcw/eDQ4MS5qcGc',
       miles:1000,
       gearType: 'Automatic',
       price:faker.finance.amount({min:4000, max:20000}) 

    };
}
const carList=faker.helpers.multiple(createRandomCarList,{
    count:7
})
export default{
    carList
}