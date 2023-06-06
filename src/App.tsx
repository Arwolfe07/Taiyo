import React, { Children } from 'react';
import './App.css';
import ContactForm from './components/contact/ContactForm';
import ContactList from './components/contact/ContactList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/root/RootLayout';
import GraphHome from './components/graphs/GraphHome';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <ContactForm />
    },
    {
      path: '/graphs',
      element: <GraphHome/>
    }
  ]

}])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
