import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

import './App.scss'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
