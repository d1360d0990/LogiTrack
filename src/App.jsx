import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Packages } from './Components/Pages/Packages/Packages.jsx';
import { Login } from '../src/Components/Pages/Login/Login.jsx';
import OrderForm from './Components/OrderForm/OrderForm.jsx';




function App() {
  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/packages/addPackage/OrderForm" element={<OrderForm/>} />
          
        </Routes>
      </Router>
    
  );
}

export default App

