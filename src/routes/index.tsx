import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteObject,
  Routes,
} from 'react-router-dom';

const LoginComponent = React.lazy(() => import('../pages/MainForm'));
const HomeComponent = React.lazy(() => import('../pages/Home'));
const ErrorPage = React.lazy(() => import('../pages/Error'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' />,
    index: true,
  },
  {
    path: '/login',
    element: <LoginComponent />,
    index: true,
  },
  {
    path: '/home',
    element: <HomeComponent />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default function MainRoutes() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}
