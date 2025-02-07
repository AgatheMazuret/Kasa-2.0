import { createRoot } from "react-dom/client";
import Nav from "./components/header/header";
import Footer from "./components/footer/footer";
import "./styles/global.css";
import Card from "./components/cards/card";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Card />
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App></App>);
