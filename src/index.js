import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import router from './routes/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
);

