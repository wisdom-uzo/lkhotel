import React from 'react'
import Layout from '../sections/Layout'
import RoomList from '../components/RoomList';
import { availableRooms } from '../data';
import PageWelcome from '../sections/PageWelcome';

const rooms = () => {


  
  

  return (
    <Layout>
       <PageWelcome pageName={'VIEW AVAILABLE ROOMS'} />
        <RoomList rooms={availableRooms} /> 

    </Layout>
  )
}

export default rooms 