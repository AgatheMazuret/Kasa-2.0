import Nav from "./components/header/header";
import Footer from "./components/footer/footer";
import "./styles/global.css";
import Card from "./components/cards/card";
import { BrowserRouter } from "react-router-dom";

const Homecard = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Card />
      <Footer />
    </BrowserRouter>
  );
};

export default Homecard;
