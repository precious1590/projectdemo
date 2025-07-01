import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import Profile from "./views/Profile";
import Guestlayout from "./component/Guestlayout";
import Defaultlayout from "./component/Defaultlayout";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Guestlayout />,
    children: [

       {
        path: '/',
        element: <Navigate to="/dashboard"/>
      },

      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '/',
    element: <Defaultlayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard/>

      },
      
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'profile',
        element: <Profile/>
      },

      {
        path: 'settings',
        element: <Settings/>
      },

    
    ]
  },
  {
        path: '*',
        element: <NotFound />
      }
]);

export default router;
