import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/home.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
           
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
