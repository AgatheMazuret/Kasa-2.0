import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homecard from "./index.tsx";
import House from "./pages/house/house.tsx";
import Apropos from "./pages/a-propos/apropos.tsx";
import Error from "./pages/error/error.tsx";
const router = createBrowserRouter([
  {
    path: "/index",
    element: <Homecard />,
  },
  {
    path: "/house/:id",
    element: <House />,
  },
  {
    path: "/a-propos",
    element: <Apropos />,
  },

  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
