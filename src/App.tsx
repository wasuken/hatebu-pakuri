import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/templates/header.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
	  <Header />
	</div>
  )
}

export default App
