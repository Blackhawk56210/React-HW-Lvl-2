import { useState, useEffect } from 'react';

const ImageCarousel = ({ images, showHover, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    // Cleanup on unmount
    return () => clearInterval(autoSlide);
  }, [current, interval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-md">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
          className={`w-full h-100 cover ${showHover ? "hover:blur-xs" : "hover:none"}`}
        />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 opacity-25 text-white px-2 py-3 rounded-full cursor-pointer">
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 opacity-25 text-white px-2 py-3 rounded-full cursor-pointer">
        ❯
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
            current === index ? 'bg-white' : 'bg-gray-400'}`}/>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;