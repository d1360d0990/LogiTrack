import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home/Home.jsx';
import { Packages } from './Components/Pages/Packages/Packages.jsx';
import { Login } from '../src/Components/Pages/Login/Login.jsx';
import { Provider } from 'react-redux';
import store from './store/Store.jsx';
import AddPackage from './Components/Pages/AddPackage/AddPackage.jsx';
import { Tarifas } from './Components/Pages/Rates/Tarifas.jsx';
import { Consultations } from './Components/Pages/Consult/Consultations.jsx';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound.jsx';



export const baseURL = import.meta.env.VITE_BASE_URL;
export const OrdersURL = import.meta.env.VITE_ORDERS;
export const filters = import.meta.env.VITE_GET_ORDERS_FILTER;
export const addOrderURL = import.meta.env.VITE_ADD_ORDER




function App() {
  

  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/rates" element={<Tarifas/>} />
          <Route path="/Consultations" element={<Consultations/>} />
          <Route path="/packages/addPackage" element={<AddPackage/>} />
          <Route path="*" element={<PageNotFound/>} />
          
        </Routes>
      </Router>
      </Provider>
    
  );
}

export default App

