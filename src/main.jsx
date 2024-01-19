
//Css import
import './index.css';

//library import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component import
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter>
     <App />
     <Toaster />
     </BrowserRouter>
     </Provider>
   

)
