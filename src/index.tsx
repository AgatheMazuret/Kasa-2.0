import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./routes";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
