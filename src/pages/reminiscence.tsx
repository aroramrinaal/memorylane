import { useState, useEffect } from 'react'
import Image from 'next/image'
import NavBar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { toast } from 'react-hot-toast' // Add this import
interface UploadedImage {
  fileUrl: string
  tags: string[]
  _id: string
  uploadDate: string // Add this line
}
export default function ReminiscencePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true) // Add this line
  useEffect(() => {
    fetchUploadedImages()
  }, [])
  const fetchUploadedImages = async () => {
    setIsFetching(true)
    try {
      const response = await fetch('http://localhost:8080/images')
      if (!response.ok) {
        throw new Error('Failed to fetch images')
      }
      const data = await response.json()
      setUploadedImages(data)
    } catch (error) {
      console.error('Error fetching images:', error)
      // Remove the toast notification from here
    } finally {
      setIsFetching(false)
    }
  }

  // Update this useEffect hook
  useEffect(() => {
    if (!isFetching && uploadedImages.length === 0) {
      toast.error('Failed to load images. Please try again.', {
        id: 'fetch-error', // Add this line
      })
    }
  }, [isFetching, uploadedImages])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }
  const handleUpload = async () => {
    if (!selectedFile) return
    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', selectedFile)
    try {
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      })
      if (!response.ok) {
        throw new Error('Upload failed')
      }
      const data = await response.json()
      setUploadedImages(prevImages => [data, ...prevImages]) // Update this line
      setSelectedFile(null)
      toast.success('Image uploaded successfully!', {
        id: 'upload-success', // Add this line
      })
    } catch (error) {
      console.error('Error uploading file:', error)
      toast.error('Failed to upload image. Please try again.', {
        id: 'upload-error', // Add this line
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-green-500">Reminiscence</h1>
        
        <section className="mb-12 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Upload a Memory</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="border border-gray-600 p-2 rounded bg-gray-800 text-white w-full sm:w-auto"
            />
            <Button
              onClick={handleUpload}
              disabled={!selectedFile || isLoading}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold w-full sm:w-auto"
            >
              {isLoading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-500">Your Memories</h2>
          {isFetching ? (
            <p className="text-center text-gray-400">Loading your memories...</p>
          ) : uploadedImages.length === 0 ? (
            <p className="text-center text-gray-400">No memories uploaded yet. Start by uploading an image!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedImages.map((image) => (
                <div key={image._id} className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-gray-900">
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.fileUrl}
                      alt={`Uploaded memory ${image._id}`}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-500">Tags:</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {image.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-green-500 text-black px-2 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">Uploaded on: {new Date(image.uploadDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}