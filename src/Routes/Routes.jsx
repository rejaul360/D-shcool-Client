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
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import AllClass from "../Pages/AllClass/AllClass";
import Instractor from "../Pages/Instractor/Instractor";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        path: 'class',
        element: <AllClass></AllClass>
      },
      {
        path: 'instractor',
        element: <Instractor></Instractor>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'singup',
        element: <Registration></Registration>
      },

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      //Admin dashboard
      {
        path: 'manageclass',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      },
      //********Student dashboard**************
      {
        path: 'selected',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: 'enrolled',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: 'Paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      //**********Instractor dashboard***********
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclass',
        element: <MyClass></MyClass>
      }


    ]
  },

]);