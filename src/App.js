import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Components/Main Pages/Landing/Landing';
import Login from './Components/Page components/Login/Login';
import Signup from './Components/Page components/Signup/Signup'
import Dashboard from './Components/Main Pages/Dashboard/Dashboard'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
