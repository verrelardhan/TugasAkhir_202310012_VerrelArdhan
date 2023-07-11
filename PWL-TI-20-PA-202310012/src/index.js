import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../src/Components/Pertemuan4/apps/routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <React.StrictMode>
        <BrowserRouter >
            <AppRoutes/>
        </BrowserRouter>
    </React.StrictMode>
  
    );

reportWebVitals();