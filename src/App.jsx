import { useState } from 'react'
import './App.css'
import HomeScreem from './components/homeScreem/HomeScreem'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="App bg-gray-900 text-white font-mono">
       <HomeScreem isGameStarted={isGameStarted} setIsGameStarted={setIsGameStarted} />
    </div>
  )
}

export default App
