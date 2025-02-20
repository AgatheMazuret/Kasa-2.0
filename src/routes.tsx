import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homecard from "./pages/home/home";
import House from "./pages/house/house";
import Apropos from "./pages/a-propos/apropos";
import Error from "./pages/error/error";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Homecard />
        <Footer />
      </>
    ),
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
  },
  {
    path: "/house/:id",
    element: (
      <>
        <Header />
        <House />
        <Footer />
      </>
    ),
  },
  {
    path: "/a-propos",
    element: (
      <>
        <Header />
        <Apropos />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
