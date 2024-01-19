
//Css import
import './index.css';

//library import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component import
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <App />
     <Toaster />
     </BrowserRouter>
   

)
