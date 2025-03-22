import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <CartProvider>
        <AuthProvider>
          <WishlistProvider> {/* Wrap the app with WishlistProvider */}
            <App />
          </WishlistProvider>
        </AuthProvider>
      </CartProvider>
    </DarkModeProvider>
  </React.StrictMode>
);