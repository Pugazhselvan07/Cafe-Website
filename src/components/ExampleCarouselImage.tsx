import React from 'react';

type ExampleCarouselImageProps = {
  src: string;
  alt?: string;
};
const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ src, alt = 'Slide' }) => {
     return (
    <img
      src={src}
      alt={alt}
      className="d-block w-100"
      style={{ height: '750px', objectFit: 'cover' }}
    />
  );
};
export default ExampleCarouselImage;

