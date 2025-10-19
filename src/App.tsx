import React, { useState, useEffect } from 'react';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import ComplimentGenerator from './components/ComplimentGenerator';
import FallingPetals from './components/FallingPetals';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
        <div className="text-center text-white p-8 bg-black bg-opacity-30 rounded-2xl shadow-2xl backdrop-blur-md animate-fade-in">
          <h1 className="font-dancing-script text-5xl mb-4">Món quà nhỏ...</h1>
          <p className="text-xl mb-8">...dành tặng người con gái anh yêu ❤️</p>
          <button
            onClick={() => setShowIntro(false)}
            className="px-8 py-3 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:bg-pink-100 transform hover:scale-110 transition-all duration-300 ease-in-out"
          >
            Mở Quà
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tr from-rose-100 to-teal-100">
      <FallingPetals />
      <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center z-10 relative">
        <div className="w-full max-w-4xl bg-white bg-opacity-70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 animate-fade-in-scale">
          <header className="text-center mb-8">
            <h1 className="font-dancing-script text-5xl md:text-7xl text-rose-500">Chúc mừng 20/10!</h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-2">Gửi đến tình yêu của anh,</p>
          </header>

          <div className="text-center text-gray-700 text-lg leading-relaxed mb-10">
            <p>Nhân ngày Phụ nữ Việt Nam, anh muốn gửi đến em những lời chúc tốt đẹp nhất. Cảm ơn em đã đến bên anh, tô điểm cho cuộc sống của anh thêm rực rỡ và ý nghĩa. Em là món quà tuyệt vời nhất mà cuộc sống đã ban tặng cho anh.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhotoGallery />
            <MusicPlayer />
          </div>

          <div className="mt-10">
            <ComplimentGenerator />
          </div>

           <footer className="text-center mt-12">
             <p className="font-dancing-script text-3xl text-pink-600">Mãi yêu em!</p>
           </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
