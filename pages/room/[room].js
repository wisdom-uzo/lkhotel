import { useRouter } from 'next/router'
import React from 'react'
import { availableRooms } from '../../data'
import Layout from '../../sections/Layout'
import PageWelcome from '../../sections/PageWelcome'

const Room = ({params}) => {

   const rout2 = useRouter()

   const currentRoom = availableRooms.find( rooms  => rooms.roomNumber === rout2.query.room )
   console.log(currentRoom)

  return (
    <Layout>
      
      <PageWelcome pageName={'ROOM DETAILS '} />

        <div className="grid grid-cols-2 container mx-auto gap-5">
            <div className=" col-span-2 md:col-span-1 ">
              <img className='w-full '  src={`/${currentRoom.image}`} />
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2>ROOM DETAILS </h2>
              <h2 className="">{currentRoom.roomType}</h2>
              <p>${currentRoom.price}/ Night</p>
              <h2 className="">Room Features</h2>
              <div className="flex gap-3 flex-wrap">{currentRoom.features.map((feature) => (<p>{feature},</p>))}</div>
              <p>{currentRoom.description }</p>
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