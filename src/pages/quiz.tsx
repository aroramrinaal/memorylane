import { useState } from 'react'
import NavBar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

export default function QuizPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-green-500 text-center">Start a Memory Quiz</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-green-500">Select a Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-gray-700"
            />
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-green-500">Today &apos; s Progress</h2>
            <p className="text-lg mb-4">Date: {date?.toDateString()}</p>
            <p className="text-lg mb-4">Completed Activities: 0/3</p>
            <p className="text-lg">Points Earned: 0</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-8 text-green-500">Memory Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Name Recall", description: "Practice remembering names and faces" },
            { title: "Relive Memories", description: "Explore and reminisce about past experiences" },
            { title: "Object Recognition", description: "Identify and remember everyday objects" }
          ].map((activity, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-green-500">{activity.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{activity.description}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold mt-auto">
                Start Activity
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
