import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">React + TypeScript + Tailwind</div>
          <p className="text-gray-500">You clicked {count} times</p>
          <button
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCount((count) => count + 1)}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  )
}

export default App