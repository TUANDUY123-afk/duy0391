import React, { useState } from 'react';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm3 0a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z" clipRule="evenodd" />
  </svg>
);


const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-teal-50 p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between">
      <div>
        <h2 className="font-dancing-script text-3xl text-teal-600 mb-4 text-center">Bản Nhạc Dành Riêng Cho Em</h2>
        <div className="flex items-center justify-center space-x-4 my-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-teal-500 hover:text-teal-700 transition-colors"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className="text-left">
            <p className="font-bold text-gray-700">Từng Ngày Yêu Em</p>
            <p className="text-sm text-gray-500">Bùi Trương Linh</p>
          </div>
        </div>
      </div>
      {isPlaying && (
        <div className="flex justify-center items-end h-16 space-x-1 mt-4">
            <span className="w-2 h-4 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
            <span className="w-2 h-8 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
            <span className="w-2 h-12 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
            <span className="w-2 h-8 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
            <span className="w-2 h-4 bg-teal-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></span>
        </div>
      )}
       {!isPlaying && (
        <p className="text-center text-gray-500 mt-4 h-16 flex items-center justify-center">Bấm nút play để nghe nhé!</p>
       )}
    </div>
  );
};

export default MusicPlayer;
