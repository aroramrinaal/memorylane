import Image from "next/image"
import NavBar from "@/Components/NavBar"
import { Button } from "@/Components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">MemoryLane: AI-Powered Reminiscence Platform</h1>
              <p className="text-xl mb-8 text-gray-300">Empowering individuals with personalized digital memories through AI technology</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Explore MemoryLane</Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/index1.jpeg"
                alt="AI-powered reminiscence therapy"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Professional Care Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Professional Care Can Trust & We Provide</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {/* Replace with actual icon */}
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Expert Nursing Staff</h3>
                <p className="text-gray-600 text-center">Our highly trained nursing staff provides compassionate and professional care tailored to each individual's needs.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {/* Replace with actual icon */}
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Medical Social Services</h3>
                <p className="text-gray-600 text-center">We offer comprehensive medical social services to support both patients and their families throughout the care journey.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {/* Replace with actual icon */}
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Free Medical CheckUp</h3>
                <p className="text-gray-600 text-center">We provide regular free medical check-ups to ensure the ongoing health and well-being of our patients.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MemoryLane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}