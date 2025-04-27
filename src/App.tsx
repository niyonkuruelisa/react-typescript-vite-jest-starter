import { FC } from 'react'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <main className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl mx-auto 
        transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to React + TypeScript + Vite
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Edit <code className="font-mono bg-gray-100 p-1 rounded">
            src/App.tsx</code> and save to test HMR
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
          py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all 
          duration-200">
            Click me!
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
