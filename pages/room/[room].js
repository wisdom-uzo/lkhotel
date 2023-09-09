import { useRouter } from 'next/router'
import React from 'react'
import { availableRooms } from '../../data'
import Layout from '../../sections/Layout'
import PageWelcome from '../../sections/PageWelcome'
import { TextField } from '@mui/material'

const Room = ({params}) => {

   const rout2 = useRouter()

   const currentRoom = availableRooms?.find( rooms  => rooms.roomNumber === rout2.query.room )
   console.log(currentRoom)

  return (
    <Layout>
      
      <PageWelcome pageName={'ROOM DETAILS '} />

        <div className="grid grid-cols-2 container mx-auto gap-5">
            <div className=" col-span-2 md:col-span-1 ">
              <img className='w-full '  src={`/${currentRoom?.image}`} />
            </div>
            <div className="col-span-2 md:col-span-1 gap-2 flex flex-col">
              <h2 className="bg-red-500">{currentRoom?.roomType}</h2>
              <p  className="bg-red-500">${currentRoom?.price}/ Night</p>
              <h2 className="">Room Features</h2>
              <div className="flex gap-3 flex-wrap  ">{currentRoom?.features.map((feature, index) => (<p  key={index} className='bg-yellow-400 font-semibold  rounded p-2'>{feature}</p>))}</div>
              <p className=''>{currentRoom?.description }</p>

              <h2 className="bg-blue-500 mt-5 text-center p-3">Book This Room</h2>

              <form action="">
               
                <TextField size='small' type='text' className=' w-full mb-4' label='Full Name' />

                <TextField size='small' type='email' className=' w-full' label='E-mail' />

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