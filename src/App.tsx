import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import PhotosPage from "./pages/Photos"

function App() {
  return <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/photos" element={<PhotosPage />} />
    <Route path="success" element={<Success />} />
  </Routes>
}

export default App
