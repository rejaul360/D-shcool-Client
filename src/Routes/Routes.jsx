import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Registration/Registration";
import Main from "../Main/Main";
import Errorpage from "../Pages/Errorpage/Errorpage";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Main/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";

  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Errorpage></Errorpage>,
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element:<Registration></Registration>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element:  <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children: [
        {
          path : 'userhome',
          element : <UserHome></UserHome>
        }, 
        {
          path : 'manageuser',
          element : <ManageUser></ManageUser>
        }, 
        {
          path : 'selected',
          element : <SelectedClass></SelectedClass>
        }, 
        {
          path : 'enrolled',
          element : <EnrolledClass></EnrolledClass>
        }, 
        {
          path : 'Paymenthistory',
          element : <PaymentHistory></PaymentHistory>
        }, 
      ]
    },

  ]);