import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = (email, password) => async dispatch => {
  try {
    // Simulasikan API login
    const response = await axios.post('https://sanbers-news-api.herokuapp.com/api/auth', { email, password });
    const user = response.data;
    await SecureStore.setItemAsync('userToken', user.token);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const register = (email, password) => async dispatch => {
  try {
    // Simulasikan API register
    const response = await axios.post('https://sanbers-news-api.herokuapp.com/api/users', { email, password });
    const user = response.data;
    await SecureStore.setItemAsync('userToken', user.token);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async dispatch => {
  await SecureStore.deleteItemAsync('userToken');
  dispatch({ type: LOGOUT });
};
