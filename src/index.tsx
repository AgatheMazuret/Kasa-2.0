import { createRoot } from "react-dom/client";
import Nav from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Footer />
    </>
  );
};

// Affichez plutôt votre composant React
const root = createRoot(document.getElementById("root")!);
root.render(<App></App>);
