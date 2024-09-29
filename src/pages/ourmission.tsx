import React from 'react';
import NavBar from '@/Components/NavBar';
import { Button } from "@/Components/ui/button"

const OurMission: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">Our Mission</h1>
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-8">
            <p className="text-xl mb-6 leading-relaxed">
              At Memorylane, we believe in providing support and resources for dementia patients and their families to help preserve the precious memories of the past and make daily living easier. Our mission is to empower caregivers and patients alike by offering thoughtful solutions, while fostering a compassionate community.
            </p>
            <p className="text-2xl font-semibold italic text-green-500 text-center">
              &ldquo;Preserving yesterday, supporting today.&rdquo;
            </p>
          </div>
          <div className="text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Join Our Cause</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurMission;