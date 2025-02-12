import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homecard from "./pages/home/home";
import House from "./pages/house/house";
import Apropos from "./pages/a-propos/apropos";
import Error from "./pages/error/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homecard />,
    errorElement: <Error />,
  },
  {
    path: "/house/:id",
    element: <House />,
  },
  {
    path: "/a-propos",
    element: <Apropos />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
