import React from 'react';
import { getAuth} from 'firebase/auth';
import { loginWithGoogle } from '../components/config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const AuthContext = React.createContext();

const auth = getAuth(); // Initialize Firebase auth instance

const AuthProvider = (props) => {
  const [user] = useAuthState(auth); // Pass the auth instance to useAuthState

  const login = async () => {
    const user = await loginWithGoogle();
    if (!user) {
      // TODO: Handle failed login
    }
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };