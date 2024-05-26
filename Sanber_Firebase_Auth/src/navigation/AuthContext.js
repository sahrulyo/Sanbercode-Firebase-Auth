import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Contoh autentikasi sederhana, di sini Anda dapat menambahkan logika autentikasi yang sesuai
    setUser(email);
  };

  const register = (email, password) => {
    // Contoh registrasi sederhana, di sini Anda dapat menambahkan logika registrasi yang sesuai
    setUser(email);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
