import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
const Homepage = lazy(() => import("./routes/homepage/index"));
const Login = lazy(() => import("./routes/registro/index"));
const Consultas = lazy(() => import("./routes/consultas/index"));
const Services = lazy(() => import("./routes/services/index"));
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <HashRouter>
        <Suspense fallback={<Card />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/registro" element={<Login />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  </React.StrictMode>
);
