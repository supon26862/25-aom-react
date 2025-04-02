import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "owner", element: <Owner /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
