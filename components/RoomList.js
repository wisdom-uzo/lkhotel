import { Button, Card, CardActions, CardContent, CardMedia, Grid, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const RoomList = ({ rooms }) => {
  return (
    //<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //  {rooms.map((room) => (
        // <div key={room.roomNumber} className="bg-white rounded-lg shadow-md p-4">
        //   <img src={room.image} alt={`Room ${room.roomNumber}`} className="w-full h-32 object-cover mb-4 rounded" />
        //   <h2 className="text-lg font-semibold">{room.roomType}</h2>
        //   <p className="text-gray-600">${room.price} per night</p>
        //   <ul className="mt-2">
        //     {room.features.map((feature, index) => (
        //       <li key={index} className="flex items-center mb-1">
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           className="w-4 h-4 mr-2 text-green-600"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //           stroke="currentColor"
        //         >
        //           <path
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             strokeWidth="2"
        //             d="M5 13l4 4L19 7"
        //           />
        //         </svg>
        //         {feature}
        //       </li>
        //     ))}
        //   </ul>
        //   <p className="mt-4 text-gray-700">{room.description}</p>
        // </div>


        
     // ))}
   // </div>
   <>
    <div className="grid grid-cols-4 container mx-auto gap-7  ">

   
        {
            rooms.map((room, index) => (
                <Link href={`room/${room.roomNumber}`} key={index} className=' mx-auto col-span-4 md:col-span-2 lg:col-span-1'>
                  <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                    sx={{ height: 140 }}
                    image={room.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {room.roomType}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {room.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' color='primary'>Book Room</Button>
                    <Button size="small">${room.price} Per Night</Button>

                </CardActions>
                </Card> 
                </Link>
              
            ))
        }
          
    </div>

    </>   
  );
};

export default RoomList;
