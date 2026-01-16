import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';
import Bug from './pages/Bug';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bug" element={<Bug />} />
      </Routes>
    </Router>
  );
}

export default App;
