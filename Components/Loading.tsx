"use client";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800/50">
      <div className="relative w-16 h-16 mr-4">
        <div className="absolute inset-0 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-t-transparent border-purple-500 rounded-full animate-spin animation-delay-200"></div>
      </div>

      <div className="flex items-center">
        <span className="text-white text-xl font-semibold animate-bounce-letter">L</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-100">o</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-200">a</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-300">d</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-400">i</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-500">n</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-600">g</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-700">.</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-800">.</span>
        <span className="text-white text-xl font-semibold animate-bounce-letter delay-900">.</span>
      </div>
    </div>
  );
}
