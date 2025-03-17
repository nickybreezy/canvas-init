import React from 'react';
import { FaChevronCircleRight, FaStar, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function ChapterSummary() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col p-4 sm:p-6 md:p-8">
      {/* Title */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Chapter Summary</h1>
      </div>
      
      {/* Cards Container - Using flex-grow to take available space */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 flex-grow">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 w-full flex flex-col">
          {/* Orange Header */}
          <div className="bg-orange-500 p-3">
            <h2 className="text-lg md:text-xl font-semibold text-center text-white">Key Learnings</h2>
          </div>
          
          {/* Card Content with Two Tiles - Using flex-grow to take available space */}
          <div className="p-3 md:p-4 flex-grow flex flex-col">
            <div className="grid grid-cols-2 gap-3 flex-grow">
              {/* Tile 1 */}
              <div className="bg-gray-100 p-2 md:p-3 rounded-md flex flex-col">
                <h3 className="font-medium text-center text-gray-800 mb-1 text-sm md:text-base">What is Anonymization?</h3>
                <p className="text-gray-600 text-center text-xs md:text-sm">
                  Anonymization removes identifying information from data to protect privacy and ensure confidentiality.
                </p>
              </div>
              
              {/* Tile 2 */}
              <div className="bg-gray-100 p-2 md:p-3 rounded-md flex flex-col">
                <h3 className="font-medium text-center text-gray-800 mb-1 text-sm md:text-base">What is Anonymization?</h3>
                <p className="text-gray-600 text-center text-xs md:text-sm">
                  Anonymization removes identifying information from data to protect privacy and ensure confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 w-full flex flex-col">
          {/* Orange Header */}
          <div className="bg-orange-500 p-3">
            <h2 className="text-lg md:text-xl font-semibold text-center text-white">Score</h2>
          </div>
          
          {/* Card Content */}
          <div className="p-3 md:p-4 flex-grow flex flex-col justify-between">
            {/* 5 Stars */}
            <div className="flex justify-center mb-3 md:mb-4 text-yellow-500">
              <FaStar className="mx-1 text-lg md:text-xl" />
              <FaStar className="mx-1 text-lg md:text-xl" />
              <FaStar className="mx-1 text-lg md:text-xl" />
              <FaStar className="mx-1 text-lg md:text-xl" />
              <FaStar className="mx-1 text-lg md:text-xl" />
            </div>
            
            {/* Progress Bar */}
            <div className="mb-3 md:mb-4 relative">
              <div className="w-full bg-gray-200 rounded-full h-6 md:h-8">
                <div className="bg-green-500 h-6 md:h-8 rounded-full" style={{ width: '78%' }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium">
                  8 out of 11 questions right
                </div>
              </div>
            </div>
            
            {/* Percentage */}
            <div className="text-center text-sm md:text-lg font-semibold text-gray-700">
              78% of questions answered correctly
            </div>
          </div>
        </div>
      </div>
      
      {/* Buttons Container */}
      <div className="flex justify-between mt-4 sm:mt-6 md:mt-8">
        {/* Button 1 */}
        <div>
          <Link href="/">   
            <button className="bg-orange-500 text-white p-2 md:px-6 md:py-2 rounded-full hover:bg-orange-700 transition-colors">
              <FaHome className="inline-block md:mr-2" />
              <span className="hidden md:inline">Home</span>
            </button>
          </Link>
        </div>
        
        {/* Button 2 */}
        <div>
          <button className="bg-orange-500 text-white p-2 md:px-6 md:py-2 rounded-full hover:bg-orange-700 transition-colors">
            <FaChevronCircleRight className="inline-block md:mr-2" />
            <span className="hidden md:inline">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}