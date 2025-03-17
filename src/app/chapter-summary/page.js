import React from "react";
import { FaChevronCircleRight, FaStar, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function ChapterSummary() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col p-6 md:p-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Chapter Summary</h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center gap-6 flex-grow">
        {/* Key Learnings Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 w-full flex flex-col p-6">
          <div className="bg-orange-500 p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold text-center text-white">Key Learnings</h2>
          </div>
          <div className="p-4 flex-grow flex flex-col gap-4 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Learning Tile 1 */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium text-center text-gray-800 mb-2 text-lg">
                  What is Anonymization?
                </h3>
                <p className="text-gray-600 text-center">
                  Anonymization removes identifying information from data to protect privacy and ensure confidentiality.
                </p>
              </div>

              {/* Learning Tile 2 */}
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium text-center text-gray-800 mb-2 text-lg">
                  Why is Anonymization Important?
                </h3>
                <p className="text-gray-600 text-center">
                  It ensures data security and helps comply with privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 w-full flex flex-col p-6">
          <div className="bg-orange-500 p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold text-center text-white">Score</h2>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-center items-center">
            {/* Stars */}
            <div className="flex mb-4 text-yellow-500 text-2xl">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-8 mb-4 relative">
              <div className="bg-green-500 h-8 rounded-full" style={{ width: "78%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                8 out of 11 questions right
              </div>
            </div>

            {/* Percentage */}
            <div className="text-lg font-semibold text-gray-700">78% Correct</div>
          </div>
        </div>
      </div>

      {/* Buttons (Always at Bottom) */}
      <div className="flex justify-between mt-6">
        {/* Home Button */}
        <Link href="/">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors flex items-center">
            <FaHome className="mr-2" />
            Home
          </button>
        </Link>

        {/* Next Button */}
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors flex items-center">
          <FaChevronCircleRight className="mr-2" />
          Next
        </button>
      </div>
    </div>
  );
}
