import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./pages/Sign";
import Login from "./pages/Login";





export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
