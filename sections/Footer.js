import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>123 Hotel Street, City</p>
        <p>Email: info@landkhotel.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h2 className="text-xl font-semibold mb-4">Explore</h2>
        <ul className="list-none">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Rooms</a></li>
          <li><a href="#" className="hover:text-gray-400">Amenities</a></li>
          <li><a href="#" className="hover:text-gray-400">Special Offers</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Connect</h2>
        <div className="flex">
          <a href="#" className="mr-4 hover:text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 13.5V19a1 1 0 001 1h5.5M14.5 14.5V19a1 1 0 001 1h5.5M10 7v7m0 0V7m0 7h5.5M3 21v-6a4 4 0 014-4h2m6 0V3a1 1 0 00-1-1H8.5M21 21v-6a4 4 0 00-4-4h-2"></path>
            </svg>
          </a>
          <a href="#" className="mr-4 hover:text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6a6 6 0 100 12 6 6 0 000-12z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4a1 1 0 011-1h.5a9 9 0 019 9v.5a1 1 0 01-1 1h-.5a9 9 0 01-9-9V4z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 002.21 9H8M16 9v4M20 9v4a2 2 0 01-2 2H6a2 2 0 01-2-2V9M16 13a4 4 0 01-8 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} L&K Hotel and Suites. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer