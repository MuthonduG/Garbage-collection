import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Components/Main Pages/Landing/Landing';
import Login from './Components/Page components/Login/Login';
import Signup from './Components/Page components/Signup/Signup'
import Dashboard from './Components/Main Pages/Dashboard/Dashboard'
import Profile from './Components/Page components/Profile/Profile';
import Packages from './Components/Page components/Packages/Packages';
import Notfound from './Components/Page components/Notfound/Notfound';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/404' element={<Notfound/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
