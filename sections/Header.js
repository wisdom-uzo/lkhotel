import { Button, Link } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <nav className='py-3 border-2 border-black bg-black bg-opacity-5'>
     
      <div className="flex justify-around items-center">

          <div className="">
            <Link href='/' className=' text-7xl font-extrabold text-black'>L&K</Link>
          </div>


          <ul className="flex space-x-6 list-none ">
            <li className=' list-none'>
              <Link href="/rooms" className="decoration-transparent text-gray-600 hover:text-gray-800 font-bold font-serif text-lg">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/amenities" className="text-gray-600 hover:text-gray-800 font-bold font-serif text-lg ">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/dining" className="text-gray-600 hover:text-gray-800 font-bold font-serif text-lg ">
                Dining
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 font-bold font-serif text-lg ">
                About Us
              </Link>
            </li>
            <li>
              <Link  href="/contact" className="text-gray-600 hover:text-gray-800 font-bold font-serif text-lg ">
                Contact
              </Link>
            </li>
          </ul>

           <Button className='bg-yellow-400 '>BOOK  NOW</Button>
      </div>




   


    </nav>
  )
}

export default Header