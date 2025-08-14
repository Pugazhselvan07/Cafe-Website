import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';

import slide1 from './assets/banner1.png';
import slide2 from './assets/banner2(2).png';
import slide3 from './assets/banner3.png';
const UncontrolledExample: React.FC = () => {
  const carouselItems = [
   {
      src: slide1,
      alt: 'offer-image',
      title: 'Burger + Coke + Wings',
      description: 'Buy at 199',
    },
    {
      src: slide2,
      alt: 'offer-image2',
      title: 'Special Avacado Caramel Milkshake',
      description: 'Buy 1 Get 1 Free',
    },
    {
      src: slide3,
      alt: 'Third Slide',
      title: 'Cold Coffee',
      description: 'Buy at 149',
    },
  ];
   return (
    <section className='container-fluid '>
       <h2 className="text-center mb-4 offer-heading ">🔥 Today's Offers 🔥</h2>
    <Carousel className='w-100'>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3 className='caption-h3'>{item.title}</h3>
            <p className='caption-p'>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </section>
  );
};
export default UncontrolledExample;
