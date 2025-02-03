import { createSlice } from '@reduxjs/toolkit';
import { getorders } from '../service/getApi';

const ordersSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.loading = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure } = ordersSlice.actions;

export const fetchOrders = () => async (dispatch) => {
  dispatch(fetchOrdersStart());
  try {
    const orders = await getorders();
    dispatch(fetchOrdersSuccess(orders));
  } catch (error) {
    dispatch(fetchOrdersFailure(error.toString()));
  }
};

export default ordersSlice.reducer;