import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"

function App() {
  return <Routes>
    <Route path="success" element={<Success />} />
    <Route path="*" element={<Home />} />
  </Routes>
}

export default App
