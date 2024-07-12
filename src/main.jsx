import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/auth';
import './index.css';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
