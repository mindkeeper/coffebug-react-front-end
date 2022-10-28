import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/SignUp/SignUp";
import DetailsProduct from "../pages/DetailsProduct/Detailsproduct";
import History from "../pages/History/History";
const router = createBrowserRouter([
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
    path: "/details",
    element: <DetailsProduct />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

export default router;
