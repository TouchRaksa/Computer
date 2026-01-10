import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Image1 from '../assets/Image/Laptop/18.jpg';
import Image2 from '../assets/Image/Laptop/25.jpg';
import Image3 from '../assets/Image/Laptop/19.jpg';
import Image4 from '../assets/Image/Laptop/21.jpg';
import Image5 from '../assets/Image/Laptop/29.jpg';
import Image6 from '../assets/Image/Laptop/23.jpg';
import Image7 from '../assets/Image/Laptop/24.jpg';
import Image8 from '../assets/Image/Laptop/27.jpg';

const heroData = [
  { image: Image1, title: "Headphones", subtitle: "Discover our electronics tools made with love and passion!", price: 99 },
  { image: Image2, title: "Desktop Computers", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 799 },
  { image: Image3, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 499 },
  { image: Image4, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 520 },
  { image: Image5, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 550 },
  { image: Image6, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 530 },
  { image: Image7, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 600 },
  { image: Image8, title: "Laptop", subtitle: "Explore the latest gadgets with unbeatable prices!", price: 480 },
];

function HeroSection() {
  const [ratings, setRatings] = useState(Array(heroData.length).fill(0));
  const navigate = useNavigate();

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleBuyNow = (item) => {
    navigate('/buy', {
      state: { image: item.image, name: item.title, price: item.price },
    });
  };

  return (
    <div className="w-full flex snap-x snap-mandatory overflow-x-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
      {heroData.map((item, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 snap-start w-full transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            aspectRatio: '16/9',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 lg:px-32 text-white z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-[100px] animate-fadeIn">{item.title}</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 max-w-2xl animate-fadeIn delay-150">{item.subtitle}</p>

            <div className="flex items-center gap-4 sm:gap-6 animate-fadeIn delay-300">
              <button
                onClick={() => handleBuyNow(item)}
                className="bg-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-lg sm:text-2xl hover:bg-blue-700 transition shadow-lg"
              >
                Buy Now
              </button>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    onClick={() => handleRating(index, i + 1)}
                    className={`cursor-pointer text-lg sm:text-xl ${
                      i < ratings[index] ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSection;
