import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Chatbot from './chatbot.jsx';
import Layout from './Layout.jsx';
import Form from './Components/Signup/Index.jsx';
import FormLogin from './Components/LogIn/Index.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import AppDashboard from './Components/Dashboard/src/AppDashboard.jsx'




const routes = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='chatbot' element={<Chatbot />} />
      <Route path='signup' element={<Form />} />
      <Route path='login' element={<FormLogin />} />
      <Route path='dashboard' element={<AppDashboard />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
