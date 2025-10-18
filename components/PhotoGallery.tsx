
import React, { useState, useEffect } from 'react';

const images = [
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/10/800/600",
  "https://picsum.photos/id/20/800/600",
  "https://picsum.photos/id/30/800/600",
];

const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
        goToNext();
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);


  return (
    <div className="bg-rose-50 p-6 rounded-2xl shadow-lg h-full flex flex-col">
      <h2 className="font-dancing-script text-3xl text-rose-500 mb-4 text-center">Kỷ Niệm Của Chúng Ta</h2>
      <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-inner group">
        <div
          className="w-full h-full bg-center bg-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <p className="text-center text-gray-500 mt-4">Mỗi khoảnh khắc bên em đều thật đáng nhớ.</p>
    </div>
  );
};

export default PhotoGallery;
