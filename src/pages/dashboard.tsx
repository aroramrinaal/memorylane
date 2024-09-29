// import { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link' // Add this import
import NavBar from '@/Components/NavBar'
import { Button } from '@/Components/ui/button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const dummyData = [
  { date: '2023-01', score: 65 },
  { date: '2023-02', score: 59 },
  { date: '2023-03', score: 80 },
  { date: '2023-04', score: 81 },
  { date: '2023-05', score: 56 },
  { date: '2023-06', score: 55 },
  { date: '2023-07', score: 40 },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-green-500 text-center">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Daily Quiz</h2>
            <p className="text-gray-300 mb-6 text-center">Challenge yourself with our daily memory quiz</p>
            <Link href="/quiz">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">Start Quiz</Button>
            </Link>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">Explore Memories</h2>
            <p className="text-gray-300 mb-6 text-center">Browse through your cherished memories</p>
            <Link href="/reminiscence">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">View Memories</Button>
            </Link>
          </div>
        </div>

        <section className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-green-500">Memory Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="date" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  labelStyle={{ color: '#22c55e' }}
                />
                <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  )
}
