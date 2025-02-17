import './App.css';
import Home from './Home';
import Login from './Pages/Login/Index';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';

  return (
    <>
      {!isLoginRoute && (
        <Navbar />
      )}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;