import React from "react";
import { createBrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/SignUp";
import DetailsProduct from "../pages/DetailsProduct/Detailsproduct";
import History from "../pages/History/History";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Payment from "../pages/Payment/Payment";
import TestPage from "../pages/Test Page/Test";
import AddProduct from "../pages/Admin/AddProducts";
import AddPromo from "../pages/Admin/AddPromo";

const router = Router([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/products/:id",
    element: <DetailsProduct />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/add-promo",
    element: <AddPromo />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
