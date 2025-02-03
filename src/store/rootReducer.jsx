import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../slices/uiSlice';
import ordersReducer from '../slices/OrdersSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  orders: ordersReducer,
  
});

export default rootReducer;