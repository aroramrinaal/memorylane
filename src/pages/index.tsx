import Image from "next/image"
import NavBar from "@/Components/NavBar"
import { Button } from "@/Components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">MemoryLane: AI-Powered Reminiscence Platform</h1>
              <p className="text-xl mb-8 text-gray-600">Empowering individuals with personalized digital memories through cutting-edge AI technology</p>
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

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Innovative AI Solutions</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-200">
                <Image
                  src="/index2.jpg"
                  alt="AI-powered memory generation"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">AI Memory Generation</h3>
                  <p className="text-gray-600">Our advanced AI algorithms create personalized memory experiences, stimulating cognitive function and emotional well-being.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-200">
                <Image
                  src="/index3.jpg"
                  alt="Interactive reminiscence sessions"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Reminiscence</h3>
                  <p className="text-gray-600">Engage in immersive, AI-guided reminiscence sessions tailored to individual experiences and preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-500 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MemoryLane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}