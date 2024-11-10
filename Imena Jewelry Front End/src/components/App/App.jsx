import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
      <Header />
      <Routes>
        <Route 
        path="/" element={<Main/>} />
        <Route 
        path="product" element={<Product/>} />
        <Route 
        path="cart" element={<Cart/>} />
        <Route 
        path="checkout" element={<Checkout/>} />
      </Routes>
      

      </div>
    </>
  )
}

export default App
