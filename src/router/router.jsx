import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import PrivateRoute from "../components/protectedRoute/PrivateRoute";
import AddEventPage from "../pages/eventPages/AddEventPage";
import EventsPage from "../pages/eventPages/EventsPage";
import MyEventPage from "../pages/eventPages/MyEventPage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/events",
        element: <PrivateRoute><EventsPage /></PrivateRoute>
      },
      {
        path: "my-events",
        element: <PrivateRoute><MyEventPage /></PrivateRoute>
      },
      {
        path: "add-event",
        element: <PrivateRoute><AddEventPage /></PrivateRoute>
      }
    ]
  }
]);

export default router;