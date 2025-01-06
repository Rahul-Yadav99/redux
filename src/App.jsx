import context from "./context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./components/Product"
import Detail from "./components/Detail"
import { useState } from "react"
const App = () => {
  
  const [product, setProduct] = useState(null)
  
    return (
    <context.Provider value={{product, setProduct}}>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
