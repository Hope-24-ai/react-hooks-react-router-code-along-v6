// routes.js
import Home from "./pages/Home";
import About from "./components/About";
import Login from "./components/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  }
];

export default routes;
