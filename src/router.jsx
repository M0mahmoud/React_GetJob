import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FindJob from "./pages/FindJob/FindJob";
import JobDetails from "./pages/FindJob/JobDetails";
import Home from "./pages/Home/Home";
import AppliedJobs from "./pages/Profile/AppliedJobs";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: ":username", element: <Profile /> },
      { path: ":username/applied-jobs", element: <AppliedJobs /> },
      { path: "jobs", element: <FindJob /> },
      { path: "jobs/:jobId", element: <JobDetails /> },
    ],
  },

  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
]);
