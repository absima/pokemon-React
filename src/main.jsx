import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import CtxtProvider from './setContext';
import App from './App';
import './index.css'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <CtxtProvider>
      <App />
    </CtxtProvider>
  </BrowserRouter>
);

