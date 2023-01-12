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
import PrivateElement from "../components/PrivateElement";
import EditProduct from "../pages/Admin/EditProduct";
import Dashboard from "../pages/Admin/Dashboard";
import SaveProductModal from "../components/Modals/SaveProductModal";
import Cart from "../components/Cards/Cart";

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
    element: (
      <PrivateElement allowedRoles={["User"]}>
        <Profile />
      </PrivateElement>
    ),
  },
  {
    path: "/product/:id",
    element: <DetailsProduct />,
  },
  {
    path: "/history",
    element: (
      <PrivateElement allowedRoles={["User"]}>
        <History />
      </PrivateElement>
    ),
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
  {
    path: "/payment",
    element: (
      <PrivateElement allowedRoles={["User"]}>
        <Payment />
      </PrivateElement>
    ),
  },
  {
    path: "/product/new",
    element: (
      <PrivateElement allowedRoles={["Admin"]}>
        <AddProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/promos/new",
    element: (
      <PrivateElement allowedRoles={["Admin"]}>
        <AddPromo />
      </PrivateElement>
    ),
  },
  {
    path: "/test",
    element: <TestPage />,
  },

  {
    path: "/product/:id/edit",
    element: (
      <PrivateElement allowedRoles={["Admin"]}>
        <EditProduct />
      </PrivateElement>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateElement allowedRoles={["Admin"]}>
        <Dashboard />
      </PrivateElement>
    ),
  },
  {
    path: "/modal",
    element: <SaveProductModal />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
