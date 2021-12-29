
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SigninComponent from "./components/Signin.component";
import SignupComponent from "./components/Signup.component";
import HomeComponent from './components/Home.component';
import ThousandComponent from './components/games/Thousand.component';
import TrainComponent from './components/games/Train.component';
import DashboardComponent from './components/dashboard/Dashboard.component';

export default function AppRouterComponent() {
  const userSelector = useSelector((state) => state.auth.user);
  
  const privateRoutes = [
    { path: '/', element: < HomeComponent />, exact: 'true' },
    { path: '/games/thousand', element: < ThousandComponent />, exact: 'true' },
    { path: '/games/train/*', element: < TrainComponent />, exact: 'true' },
    { path: '/dashboard', element: < DashboardComponent />, exact: 'true' },
    { path: '*', element: <Navigate to="/" />, exact: 'true' },
  ];

  const publicRoutes = [
    { path: '/', element: < HomeComponent />, exact: 'true' },
    { path: '/games/thousand', element: < ThousandComponent />, exact: 'true' },
    { path: '/games/train/*', element: < TrainComponent />, exact: 'true' },
    { path: '/dashboard', element: < DashboardComponent />, exact: 'true' },
    { path: '/auth/', element: < SigninComponent />, exact: 'true' },
    { path: '/auth/signup', element: < SignupComponent />, exact: 'true' },
    { path: '*', element: <Navigate to="/" />, exact: 'true' },
  ];

  return (
    <Routes>
      {userSelector && userSelector.role === 'member'
        ? privateRoutes.map((route) => <Route {...route} key={route.path} />)
        : publicRoutes.map((route) => <Route {...route} key={route.path} />)
      }
    </Routes>
  );
}
