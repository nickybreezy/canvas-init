import React from 'react';
import { FaChevronCircleRight, FaStar, FaHome } from 'react-icons/fa';

export default function ChapterSummary() {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Chapter Summary</h1>
      </div>
      
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 max-w-md">
          {/* Orange Header */}
          <div className="bg-orange-500 p-4">
            <h2 className="text-xl font-semibold text-center text-white">Key Learnings</h2>
          </div>
          
          {/* Card Content with Two Tiles */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Tile 1 */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium text-center text-gray-800 mb-2">What is Anonymization?</h3>
                <p className="text-gray-600 text-center text-sm">
                Anonymization removes identifying information from data to protect privacy and ensure confidentiality.
                </p>
              </div>
              
              {/* Tile 2 */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium text-center text-gray-800 mb-2">What is Anonymization?</h3>
                <p className="text-gray-600 text-center text-sm">
                Anonymization removes identifying information from data to protect privacy and ensure confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 max-w-md">
          {/* Orange Header */}
          <div className="bg-orange-500 p-4">
            <h2 className="text-xl font-semibold text-center text-white">Score</h2>
          </div>
          
          {/* Card Content */}
          <div className="p-6">
            {/* 5 Stars */}
            <div className="flex justify-center mb-6 text-yellow-500">
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
              <FaStar className="mx-1" />
            </div>
            
            {/* Progress Bar */}
<div className="mb-4 relative">
  <div className="w-full bg-gray-200 rounded-full h-8">
    <div className="bg-green-500 h-8 rounded-full" style={{ width: '78%' }}></div>
    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
      8 out of 11 questions right
    </div>
  </div>
</div>
            
            {/* Percentage */}
            <div className="text-center text-lg font-semibold text-gray-700 mt-4">
              78% of questions answered correctly
            </div>
          </div>
        </div>
      </div>
      
      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row justify-between mt-auto">
        {/* Button 1 */}
        <div className="mb-4 md:mb-0">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">

           <FaHome className="inline-block mr-5 ml-5" />
          </button>
        </div>
        
        {/* Button 2 */}
        <div>
          <button className="bg-orange-500  text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          <FaChevronCircleRight className="inline-block mr-5 ml-5" />
          </button>
        </div>
      </div>
    </div>
  );
}