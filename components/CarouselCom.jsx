import React from 'react'
import Slider from 'react-slick'




const CarouselCom = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed:3000,
    autoplay:true,
  };

  const slides = [
    {
      image: 'cm1.jpg',
      alt: 'Image 1',
      title: 'Slide 1 Title',
      description: 'Slide 1 Description',
    },
    {
      image: 'cm2.jpg',
      alt: 'Image 2',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    },
    {
      image: 'cm3.jpg',
      alt: 'Image 2',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description',
    },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
    {slides.map((slide, index) => (
      <div key={index} className="relative ">
        <img src={slide.image} alt={slide.alt} className="w-full md:h-[90vh]" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
  )
}

export default CarouselCom