
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Signup from './Pages/Signup';



function App() {
  return (
   <>
   <Router>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
