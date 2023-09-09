import { Button } from '@mui/material'
import React, { useState } from 'react'
import Link from "next/link";
import { HiMenu } from 'react-icons/hi'

const Header = () => {

  const [openMenu, setOPenMenu] = useState(true)
  return (
    <nav className='py-3 border-2  bg-gray-100 relative'>
     
      <div className="flex justify-around items-center">

          <div className="">
            <Link href='/' className=' text-7xl font-extrabold text-black'>L&K</Link>
          </div>


          <ul className="md:flex space-x-6 list-none hidden">
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

           <Button className='bg-yellow-400 hidden md:block'>BOOK  NOW</Button>
           <Button className='md:hidden text-[2rem] border-4 border-blue-400' 
            onClick={() => setOPenMenu(!openMenu)}
            ><HiMenu/></Button>

   
      </div>

      {openMenu &&
      <ul className=" space-x-6 list-none md:hidden w-full top-16 mt-10 flex flex-col  items-center justify-center space-y-10">
            <li className=''>
              <Link href="/rooms" className=" text-gray-600 hover:text-gray-800 font-bold font-serif text-lg">
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

            <li>
            <Button className='bg-yellow-400 w-[100%] px-20'>Book A Room</Button>
            </li>
      </ul>

      }
   


    </nav>
  )
}

export default Header