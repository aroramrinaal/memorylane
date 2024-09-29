import Image from "next/image"
import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Memorylane: AI-Powered Reminiscence Platform</h1>
              <p className="text-xl mb-8 text-gray-300">Bridging the gap in memory for those affected by dementia through personalized digital reminiscence therapy</p>
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

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How MemoryLane Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Upload Memories</h3>
                <p className="text-gray-600 text-center">Families securely upload photos and videos to our cloud storage.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">AI Processing</h3>
                <p className="text-gray-600 text-center">Our AI automatically tags people, places, and events in the uploaded content.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Timeline</h3>
                <p className="text-gray-600 text-center">We create a personalized, interactive timeline of the patient&apos;s life for reminiscence therapy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-green-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Revolutionizing Dementia Care</h2>
            <p className="text-xl mb-8 text-center">MemoryLane is more than just an app - it&apos;s a bridge to the past, a tool for families to connect, and a beacon of hope for those affected by dementia.</p>
            <div className="text-center">
              <Button className="bg-white text-green-500 hover:bg-gray-100">Join Our Mission</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}