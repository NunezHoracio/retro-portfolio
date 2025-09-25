import { useState } from 'react'
import './App.css'
import HomeScreen from './components/homeScreen/HomeScreen';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="App bg-gray-900 text-white font-jersey 15">
       <HomeScreen setIsGameStarted={setIsGameStarted} />
    </div>
  )
}

export default App
