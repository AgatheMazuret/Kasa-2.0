import { createRoot } from "react-dom/client";
import App from "./routes";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
