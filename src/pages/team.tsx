import React from 'react';
import NavBar from '@/components/Navbar';
import Image from "next/image"

const TeamMember: React.FC<{ name: string; image: string }> = ({ name, image }) => (
  <div className="flex flex-col items-center bg-black rounded-lg p-6 shadow-lg">
    <div className="w-40 h-40 relative mb-6">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
    <p className="text-green-500 mb-4 text-lg">CEO</p>
  </div>
);

const TeamPage: React.FC = () => {
  const teamMembers = [
    { name: "Mrinaal Arora", image: "/team/john-doe.jpg" },
    { name: "Tien Dat Dang", image: "/team/jane-smith.jpg" },
    { name: "Aditya Madiya", image: "/team/mike-johnson.jpg" },
    { name: "Atharva Verma", image: "/team/sarah-brown.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-24 text-center">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;