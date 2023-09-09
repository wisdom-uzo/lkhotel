import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { availableRooms } from '../../data'
import Layout from '../../sections/Layout'
import PageWelcome from '../../sections/PageWelcome'
import { TextField } from '@mui/material'
import { Calendar, DateRangePicker } from 'react-date-range'

const Room = ({params}) => {

   const rout2 = useRouter()

   const currentRoom = availableRooms?.find( rooms  => rooms.roomNumber === rout2.query.room )
   console.log(currentRoom)

   const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });


  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    
  }

    // Function to calculate the number of days between two dates
    const calculateNumberOfDays = (startDate, endDate) => {
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffDays = Math.round(Math.abs((start - end) / oneDay));
      return diffDays + 1; // Add 1 to include both the start and end dates
    };



    const numberOfDays = calculateNumberOfDays(
      selectionRange.startDate,
      selectionRange.endDate
    );


  return (
    <Layout>
      
      <PageWelcome pageName={'ROOM DETAILS '} />

        <div className="grid grid-cols-2 container mx-auto gap-5 text-gray-700">
            <div className=" col-span-2 md:col-span-1 px-3">
              <img className='w-full '  src={`/${currentRoom?.image}`} />
            </div>
            <div className="col-span-2 md:col-span-1 gap-2 flex flex-col px-3">
              <h2 className="text-[2.5rem]">{currentRoom?.roomType}</h2>
              <p  className="text-[1.2rem]">${currentRoom?.price} Per Night</p>
              <h2 className="">Room Features</h2>
              <div className="flex gap-3 flex-wrap  ">{currentRoom?.features.map((feature, index) => (<p  key={index} className='bg-yellow-400 font-semibold  rounded p-2'>{feature}</p>))}</div>
              <p className='mt-4'>{currentRoom?.description } Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, praesentium aliquam libero quasi repellendus fugiat animi porro adipisci, ducimus asperiores vel. Nobis adipisci error ad aliquam repudiandae doloremque magni mollitia.</p>

              <h2 className="bg-blue-500 mt-5 text-center p-3">Book This Room</h2>

              <form action="">
               
                <TextField size='small' type='text' className=' w-full mb-4' label='Full Name' />

                <TextField size='small' type='email' className=' w-full mb-4' label='E-mail' />

                <TextField size='small' type='tel' className=' w-full' label='Phone Number' />
                 
                <h2 className='my-5'>Pick Sign in Date and Sign out Date</h2>
                
                <p className='mb-10'> Number of days selected: {numberOfDays}</p>



                <div className='date-range-picker w-full max-w-[300px]'>
                    <DateRangePicker
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                      showMonthAndYearPickers={true}
                      
                    />
                </div>
               
   

              <button className=' shadow-md w-full text-[1rem] font-bold py-3 mt-10 bg-blue-500 rounded text-white hover:bg-blue-600'> Submit</button>


              </form>
            </div>
        </div>
      
    </Layout>
  )
}

export default Room


// export async function getInitialProps( context ) {

//   const {room} = context.params
//   const currentRoom = availableRooms.find( rooms  => rooms.roomNumber === room )
//   console.log(currentRoom)
//   return {
//     props : {currentRoom} 
//   }
// }