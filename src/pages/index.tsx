import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Image from "next/image";
import styled from 'styled-components';
import { ReactNode } from "react";
import NavBar from '@/Components/NavBar';
import { Parallax } from 'react-parallax';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;  
}

const HeroSection = () => (
  <div className="relative h-screen bg-gray-800 text-white">
    <Parallax
      bgImage="https://www.homecareassistanceroseville.com/wp-content/uploads/2018/06/AdobeStock_97047441.jpeg"
      strength={500} // Adjust this value to control the effect strength
      className="w-full h-full object-cover opacity-50"
    >
      <div style={{ height: 500 }}>        
      </div>
    </Parallax>    
    <div className="absolute inset-0 flex flex-col justify-center px-8">
      <p className="text-green-500 mb-2">RAISE YOUR VOICE TO WIN</p>
      <h2 className="text-5xl font-bold mb-4">Senior Care:<br />One Smile<br />At A Time</h2>
      <p className="mb-6 max-w-md">Rest assured, your loved one will receive the highest standard of care, delivered with professionalism and kindness.</p>
      <button className="bg-green-500 text-white px-6 py-3 rounded-full w-max">
        CONTACT US
      </button>
      <div className="flex mt-8 space-x-8">
        <div>
          <p className="text-3xl font-bold">24/7</p>
          <p>Live-in Care</p>
        </div>
        <div>
          <p className="text-3xl font-bold">98%</p>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="container mx-auto py-16 px-8">
    <div className="flex ">
      <div className="w-1/2 pr-8">
      <div style={{ position: 'relative', width: '500px', height: '300px' }}> 
      {/* Adjust width and height as needed */}
      <img
        src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg" 
        alt="First Image"
        style={{ width: '400px', objectFit: 'cover', marginTop: '50px', borderRadius: '5%' }}
      />
      <img
        src="https://www.nm.org//-/media/northwestern/healthbeat/images/healthy-tips/emotional-health/nm-reluctant-senior-care_feature.jpg" 
        alt="Second Image"
        style={{ 
          position: 'absolute',
          top: 200,
          right: 50,
          width: '400px', // Adjust overlay width          
          objectFit: 'cover', 
          borderRadius: '5%'
        }}
      />
    </div>
        {/* <img src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg" alt="Senior care 1" className="w-full mb-4 rounded-lg" />        
        
        <img src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg" alt="Senior care 1" className="w-full mb-4 rounded-lg" />         */}
      </div>
      <div className="w-1/2">
        <p className="text-green-500 mb-2">ABOUT US</p>
        <h2 className="text-4xl font-bold mb-8">Professional Care Can Trust & We Provide</h2>
        <div className="mb-8">
          <div className="flex items-start mb-4">
            <img src="/api/placeholder/40/40" alt="Nursing icon" className="mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Nursing Staff</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <img src="/api/placeholder/40/40" alt="Nursing icon" className="mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Nursing Staff</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div className="flex items-start">
            <img src="/api/placeholder/40/40" alt="Social services icon" className="mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Medical Social Services</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard : React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    <div className="text-green-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <button className="text-black font-semibold hover:underline">
      LEARN MORE
    </button>
  </div>
);

const OurServices = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-green-500 text-lg mb-2">OUR SERVICES</h2>
      <h3 className="text-center text-black text-4xl font-bold mb-4">
        Quality Senior Living, Every<br />Step of the Way
      </h3>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We go the extra mile to create a warm and nurturing environment
        where seniors can thrive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          icon={<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>}
          title="Respite Care"
          description="Pellentesque varittus accumsan temp Nullam placerat aliquet purus a mollis Nunc porta."
        />
        <ServiceCard
          icon={<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61A5.5 5.5 0 0 0 12 5.67C9.64 3.88 6.39 3.94 4.61 5.72C2.83 7.5 2.88 10.75 4.67 13.12C6.46 15.49 13.37 22 13.37 22L12 23.37L20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>}
          title="Memory Care"
          description="Pellentesque varittus accumsan temp Nullam placerat aliquet purus a mollis Nunc porta."
        />
        <ServiceCard
          icon={<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9986 17.1771 21.7078 15.5857 19.94 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 7C21.7686 7 23.2081 8.42412 23.2081 10.1818C23.2081 11.8443 21.9192 13.2209 20.2529 13.3373" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>}
          title="Assisted Living"
          description="Pellentesque varittus accumsan temp Nullam placerat aliquet purus a mollis Nunc porta."
        />
        <ServiceCard
          icon={<svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>}
          title="Independent Living"
          description="Pellentesque varittus accumsan temp Nullam placerat aliquet purus a mollis Nunc porta."
        />
      </div>
    </div>
  </section>
);

const MeetOurStaff = () => {
  return (
    <section className="py-12 bg-white" style={{minHeight : '100vh'}}>
      <div style={{display: 'flex', padding: '30px'}}>
  <div style={{width: '45%'}}>
    <h2 className='text-green-500 font-bold' >MEET OUR STAFF</h2>
    <h1 className='font-black text-black text-3xl mt-2'>we're here to help</h1>
    <p className='text-black mt-5'>Our employees often tell us their greatest job satisfaction comes from the opportunity to serve and support older people. While we are accustomed to hearing this, it is something we do not take for granted.</p>
    <button className= 'mt-10 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300'>JOIN US NOW</button>
  </div>
  <div style={{
          width: '55%', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gridGap: '20px'
        }}>
    <div style={{textAlign:'center'}}>
      <img style={{height: '35vh', margin: 'auto'}} src="https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/748332433088263852/1a66061e-7c10-b4a1-9db9-9e421f63f55b.jpeg" alt="Susan Friedland"/>
      <h3 className='font-bold text-black'>Susan Friedland</h3>
      <p className='text-black font-light'>Specialists</p>
    </div>
    <div style={{textAlign:'center'}}>
    <img style={{height: '35vh', margin: 'auto'}} src="https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/748332433088263852/1a66061e-7c10-b4a1-9db9-9e421f63f55b.jpeg" alt="Susan Friedland"/>
      <h3 className='font-bold text-black'>Karin Nara</h3>
      <p className='text-black font-light'>Registered nurses</p>
    </div>
    <div style={{textAlign:'center'}}>
    <img style={{height: '35vh', margin: 'auto'}} src="https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/748332433088263852/1a66061e-7c10-b4a1-9db9-9e421f63f55b.jpeg" alt="Susan Friedland"/>
      <h3 className='font-bold text-black'>Stacy Zamora</h3>
      <p className='text-black font-light'>Dietitians</p>
    </div>
    <div style={{textAlign:'center'}}>
    <img style={{height: '35vh', margin: 'auto'}} src="https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/748332433088263852/1a66061e-7c10-b4a1-9db9-9e421f63f55b.jpeg" alt="Susan Friedland"/>
      <h3 className='font-bold text-black'>Steve Herman</h3>
      <p className='text-black font-light'>Pharmacists</p>
    </div>    
  </div>
</div>
    </section>
  );
};

// const NewsletterSignup = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your newsletter signup logic here
//     console.log('Subscribing email:', email);
//     // Reset the email input after submission
//     setEmail('');
//   };

//   return (
//     <section className="bg-black text-white py-16">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-green-500 text-lg mb-2">QUALITY AI CONTACT FROM</h2>
//         <h3 className="text-4xl font-bold mb-8">Newsletter Signup</h3>
//         <form onSubmit={handleSubmit} className="flex justify-center">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//             className="w-full max-w-md px-4 py-2 rounded-l-md text-black"
//           />
//           <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 transition duration-300">
//             SUBSCRIBE
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">About US</h4>
            <p className="mb-4">There are many variations of passages Lorem Ipsum available, but the majority suffered alteration some form, injected humour, or randomised words.</p>
            <p className="text-green-500 text-xl font-bold">(+1)-800-456-478</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Popular Service</h4>
            <ul className="space-y-2">
              <li>Brakes Repair</li>
              <li>Air Conditioning</li>
              <li>Engine Diagnostics</li>
              <li>Lub, Oil & Filter</li>
              <li>Exhaust Repair</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Protfolio</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>Information</li>
              <li>Policy</li>
              <li>Brand</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p>© 2024 All Rights Reserved. Developed By CoderPlace</p>
      </div>
    </footer>
  );
};

const HomePage = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar/>    
    <HeroSection />
    <AboutSection />
    <OurServices/>
    <MeetOurStaff/>
    {/* <NewsletterSignup/> */}
    <Footer/>
  </div>
);

export default HomePage;