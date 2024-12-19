import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"
import Home from "./components/Home";
import Testing from "./components/Testing";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/testing" element={<><Testing /></>} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
