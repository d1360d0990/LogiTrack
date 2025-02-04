import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Packages } from './Components/Pages/Packages/Packages.jsx';
import { Login } from '../src/Components/Pages/Login/Login.jsx';
import { Provider } from 'react-redux';
import store from './store/Store.jsx';
import AddPackage from './Components/Pages/AddPackage/AddPackage.jsx';



export const baseURL = import.meta.env.VITE_BASE_URL;
export const OrdersURL = import.meta.env.VITE_ORDERS;
export const filters = import.meta.env.VITE_GET_ORDERS_FILTER;
export const addOrderURL = import.meta.env.VITE_ADD_ORDERS




function App() {
  

  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/packages/addPackage" element={<AddPackage/>} />
          
          
        </Routes>
      </Router>
      </Provider>
    
  );
}

export default App

