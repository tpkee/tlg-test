import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { RecoilRoot } from 'recoil';


import Navbar from "./components/Navbar";

import ProductsPage from "./pages/index";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import ContactPage from "./pages/contact";
import Test from "./pages/test";
import ErrorPage from "./error-page";

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/test",
        element: <Test />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);