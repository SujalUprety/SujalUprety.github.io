import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import App from './App';
import MetaTags from './MetaTags';
import { PersonalInfo } from './data';
import "./Styles/index.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <HelmetProvider>
    <MetaTags info={PersonalInfo} />
    <App />
  </HelmetProvider>
);