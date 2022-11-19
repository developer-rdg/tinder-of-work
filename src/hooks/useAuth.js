import React, { createContext, useContext } from 'react'
import * as Google from 'expo-auth-session/providers/google';

const AuthContext = createContext({
    // Initial state...
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
        user: 'rodrigo',
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}