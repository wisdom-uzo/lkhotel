import { useCallback, useEffect } from "react";
import Link from "next/link";
import Header from "../sections/Header";

const HomePage = () => {
  const onBtnPrimaryContainerClick = useCallback(() => {
    // Please sync "Home Page Scrolled" to the project
  }, []);

  const onBtnPrimaryContainer1Click = useCallback(() => {
    // Please sync "Home Page Scrolled" to the project
  }, []);

  const backgroundImageUrl = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

  const socialMediaLinks = [
    {
      platform: 'Facebook',
      link: 'https://www.facebook.com/yourhotel',
    },
    {
      platform: 'Twitter',
      link: 'https://www.twitter.com/yourhotel',
    },
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/yourhotel',
    },
    // Add more social media links as needed
  ];


  const rooms = [
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Experience luxury and comfort in our spacious Deluxe Rooms.',
      price: 199, // Price per night
      features: ['King-size bed', 'City view', 'Complimentary breakfast'],
    },
    {
      name: 'Suite Room',
      image: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80.com/300',
      description: 'Indulge in the opulence of our elegant Suite Rooms with stunning views.',
      price: 299, // Price per night
      features: ['Separate living area', 'Panoramic ocean view', 'Private balcony'],
    },
    {
      name: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80.com/300',
      description: 'Experience the ultimate luxury in our spacious Executive Suites.',
      price: 399, // Price per night
      features: ['Private Jacuzzi', 'Spacious living area', 'Complimentary spa access'],
    },
    {
      name: 'Family Room',
      image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80.com/300',
      description: 'Perfect for families, our Family Rooms offer comfort and convenience.',
      price: 249, // Price per night
      features: ['Two queen-size beds', 'Kids play area', 'Connecting rooms available'],
    },
    {
      name: 'Presidential Suite',
      image: 'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Indulge in opulence and extravagance in our Presidential Suite.',
      price: 599, // Price per night
      features: ['Private butler service', 'Private terrace', 'Panoramic city view'],
    },
    {
      name: 'Suite Room',
      image: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80.com/300',
      description: 'Indulge in the opulence of our elegant Suite Rooms with stunning views.',
      price: 299, // Price per night
      features: ['Separate living area', 'Panoramic ocean view', 'Private balcony'],
    },
    // Add more room objects as needed
  ];
  
  const amenities = [
    {
      name: 'Swimming Pool',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwplGJz7iz6yCZzJ_XSzaZW3bCHdauzArjdQ&usqp=CAU',
    },
    {
      name: 'Spa & Wellness',
      image: 'https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170533337/79096988-beauty-girl-spa-illustration-vector-design-graphic-icon.jpg?ver=6',
    },
    {
      name: 'Fitness Center',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeBPKmrxuCdb6KsMZjO4t2YzAYffgLHXK-w&usqp=CAU',
    },
    {
      name: 'Fine Dining',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/017/970/521/small_2x/hotel-dish-food-glass-flat-color-icon-icon-banner-template-free-vector.jpg',
    },
    {
      name: 'Free Wi-Fi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg9DmF5K0QDBpLTb3VNnf1IhJHyIJDrEnkgd4eaaSmvSYr8bJoS-scfi2mxh9vQCzV0U&usqp=CAU',
    },
  ];
  


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-white w-full overflow-hidden text-left text-base text-darkgray font-poppins">
     

    <Header />
     {/* <header className=" bg-white w-full h-20 text-left text-7xl text-mediumslateblue font-poppins flex justify-around items-center">
      
        <div className="absolute top-[79px] left-[0px] bg-gainsboro w-full h-px" />

        <div className="font-medium">
          <span>Stay</span>
          <span className="text-darkslateblue">cation.</span>
        </div>

        <div className="text-base text-right inline-block w-[460px] h-6">
          <span>Home</span>
          <span className="text-darkslateblue">{`        Browse by        Stories        Agents `}</span>
        </div>
      </header>

      <section
        className="w-[80%] mx-auto py-5 grid grid-cols-2 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <VacationForm />
        <img
          className=" relative col-span-2 md:col-span-1 overflow-hidden h-[450px] object-cover"
          alt=""
          src="/banner@2x.png"
        />
      </section>


   

      {/* <MostPickedContainer /> 

      <BeautyBackyardCard />

      <LargeLivingRoomHotelsContainer />

      <FormContainer /> 
      */}


<section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="Hotel Exterior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
        <div className="text-center">
          <h1 className="text-4xl md:text-[4rem] font-extrabold text-white mb-4">
            Discover Luxury & Comfort
          </h1>
          <p className="text-[2rem] text-white">
            Experience a stay like no other at L&K Hotel and Suites.
          </p>
          <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-semibold transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
 


    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Amenities Highlights
          </h2>
          <p className="text-gray-600">
            Experience a world of luxury and comfort with our exceptional amenities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={amenity.image}
                alt={amenity.name}
                className="mx-auto h-32 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {amenity.name}
              </h3>
              <p className="text-gray-600">
                Discover relaxation and entertainment like never before.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Discover Our Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            At L&K Hotel and Suites, we don't just offer accommodation; we provide an escape from the ordinary. Our journey began [X] years ago, and since then, we have redefined luxury and hospitality, offering you a world of elegance and comfort.
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Our mission is simple: to exceed expectations and create exceptional memories. Every corner of our establishment tells a tale of opulence and care, from the meticulously designed rooms to the breathtaking views. Welcome to a realm of indulgence and personalized service.
          </p>
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    </section>

      <section className="bg-gradient-to-b from-gray-200 to-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">Discover Our Luxurious Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-800 font-semibold">${room.price} per night</p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                    Learn More
                  </button>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section
      className="bg-cover bg-center py-16 relative w-full"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")' }}
    >
    <div className="absolute top-[0px]  rounded-mini [background:linear-gradient(180.1deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] w-full h-full" />

      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-4">Ready to Experience Luxury?</h2>
        <p className="text-white text-lg mb-8">Book your stay now and enjoy our world-class amenities.</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>
    </section>



      <div className="relative w-full py-5 flex justify-center bg-gray-100 text-5xl text-darkslateblue">
        <div className=" flex flex-row pt-10 px-0 pb-0 box-border justify-center gap-[57px]">
       
          <img
            className="relative w-[20%] overflow-hidden object-cover"
            alt=""
            src="/foto-keluarga@2x.png"
          />

          <div className=" relative ">
            <div className=" font-medium mb-5">
              Happy Family
            </div>

            <div className="text-[32px]">
              <p className="m-0">{`What a great trip with my family and `}</p>
              <p className="m-0">I should try again next time soon ...</p>
            </div>

            <div className="text-lg font-light text-darkgray">
              Angga, Product Designer
            </div>

            {/* <PrimaryButton
              ctaButtonText="Read Their Story"
              propHeight="50px"
              propWidth="244.09px"
              propTop="301px"
              propRight="unset"
              propBottom="unset"
              propLeft="4px"
              onBtnPrimaryContainer1Click={onBtnPrimaryContainerClick}
            /> */}
            <img
              className=" w-[180px] h-9"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </div>



    <section className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Connect with Us
        </h2>
        <div className="flex justify-center space-x-4">
          {socialMediaLinks.map((linkData, index) => (
            <a
              key={index}
              href={linkData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-500 transition duration-300"
            >
              {linkData.platform}
            </a>
          ))}
        </div>
      </div>
    </section>




    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            We're here to assist you. Reach out to us for inquiries or reservations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Details
            </h3>
            <p className="text-gray-600">
              Phone: +1-123-456-7890<br />
              Email: info@landkhotel.com
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get in Touch
              </h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600 mb-1">Message</label>
                  <textarea
                    id="message"
                    className="w-full border rounded px-3 py-2"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Location
            </h3>
            <p className="text-gray-600">
              1234 Elm Street<br />
              City, State 12345<br />
              Country
            </p>
            <div className="mt-6">
              {/* Include a map here (Google Maps, Mapbox, etc.) */}
            </div>
          </div>
        </div>
      </div>
    </section>


      <footer className="bg-gray-900 text-white py-8">
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

    
  </div>
  );
};

export default HomePage;
