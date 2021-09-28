import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import QuotesContextProvider from './useContext/context'

ReactDOM.render(
  <QuotesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </QuotesContextProvider>,
  document.getElementById("root")
);
