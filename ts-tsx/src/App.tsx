import { useState } from 'react'
import './App.css'
import { Header } from './header.tsx'
import { Footer } from './footer.tsx'
import { Body } from './body.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
