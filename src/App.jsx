import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import OnePunchManCards from "./components/OnePunchManCards"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Página principal */}
        <Route path="/" element={<Home />} />

        {/* 🔹 Vista con las tarjetas giratorias */}
        <Route path="/cards" element={<OnePunchManCards />} />
      </Routes>
    </Router>
  )
}

export default App
