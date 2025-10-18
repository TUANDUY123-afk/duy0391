
import React, { useState, useCallback } from 'react';
import { generateCompliment } from '../services/geminiService';

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const ComplimentGenerator: React.FC = () => {
  const [compliment, setCompliment] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateCompliment = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCompliment('');
    try {
      const result = await generateCompliment();
      setCompliment(result);
    } catch (err) {
      setError('Oops, có lỗi xảy ra khi gửi lời yêu. Vui lòng thử lại!');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-white/50 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="font-dancing-script text-3xl text-purple-600 mb-4">Ngàn Lời Yêu Thương</h2>
      <p className="text-gray-600 mb-6">Mỗi lần bấm nút là một lời yêu thương bất ngờ anh muốn nói với em!</p>
      
      <button
        onClick={handleGenerateCompliment}
        disabled={isLoading}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <HeartIcon />
        {isLoading ? 'Đang gửi...' : 'Gửi Lời Yêu Thương'}
      </button>

      {isLoading && (
        <div className="mt-6 text-purple-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-2">Đang tìm những lời ngọt ngào nhất...</p>
        </div>
      )}

      {error && <p className="mt-6 text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>}
      
      {compliment && (
        <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg animate-fade-in">
          <p className="text-lg text-purple-800 italic">"{compliment}"</p>
        </div>
      )}
    </div>
  );
};

export default ComplimentGenerator;
