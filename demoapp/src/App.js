// import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/home';
import './App.css';
import Login from './screens/Login/login,';
import Register from './screens/Register/register';
import Navbar from './components/Navbar/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>

      <Router>
        <Navbar></Navbar>
        <ToastContainer/>
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
