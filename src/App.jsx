import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Premium from './pages/Premium';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans selection:bg-pink-500 selection:text-white">
        
        {/* Modular Navigation Component */}
        <Navbar />

        {/* Main Routed Views */}
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        {/* Modular Footer Component */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;