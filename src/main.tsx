import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { Index } from "~/pages";
import { WarframePage } from "~/pages/warframe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/warframe" element={<WarframePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
