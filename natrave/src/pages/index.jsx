import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  import Home from "./Home/Home";
  import { Login } from "./Login/Login"
  import { Singup } from "./Signup/Signup";
  import { Dashboard } from "./Dashboard/Dashboard";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Singup/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
  ])

  export const Router = () => (
    <RouterProvider router={router} />
  )