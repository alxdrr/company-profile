import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import FaqPage from './pages/FAQPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/faq',
    element: <FaqPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
