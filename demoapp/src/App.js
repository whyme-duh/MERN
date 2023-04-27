// import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/home';
import './App.css';
import Login from './screens/Login/login,';
import Register from './screens/Register/register';
import About from './screens/AboutUs/aboutus';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <>

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path ='/login' element={<Login/>} />
          <Route path ='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
