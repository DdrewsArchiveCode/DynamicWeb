import { useState } from 'react'
//import './css/App.css'
import { Header } from './header.tsx'
import { Footer } from './footer.tsx'
import { Body } from './body.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h2>halo bang</h2>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
