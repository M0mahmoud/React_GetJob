import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FindJob from "./pages/FindJob/FindJob";
import Home from "./pages/Home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "find-job", element: <FindJob /> },
    ],
  },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
]);
