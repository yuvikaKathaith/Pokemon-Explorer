import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FilterProvider } from "./contexts/FilterProvider.jsx";
import { FavouriteProvider } from "./contexts/FavouritesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavouriteProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </FavouriteProvider>
  </BrowserRouter>
);
