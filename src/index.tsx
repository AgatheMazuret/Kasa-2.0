import { createRoot } from "react-dom/client";
import App from "./routes";
import "../src/styles/global.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
