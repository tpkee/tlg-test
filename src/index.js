import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ProductsPage from "./pages/index";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Test from "./pages/test";
import ErrorPage from "./error-page";

import './index.css';

const router = createBrowserRouter([
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
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);