import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  import Home from "./Home/Home";
  import { Login } from "./Login/Login"
  import { Singup } from "./Signup/Signup";
  
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
  ])

  export const Router = () => (
    <RouterProvider router={router} />
  )