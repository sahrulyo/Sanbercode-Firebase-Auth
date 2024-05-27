import { combineReducers } from 'redux';
import authReducer from './authReducer';  // Pastikan path ini benar

const rootReducer = combineReducers({
  auth: authReducer,
  // Tambahkan reducer lain di sini
});

export default rootReducer;
