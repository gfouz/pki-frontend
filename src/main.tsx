import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import "./index.css";
import Card from "./components/Card";
const Homepage = lazy(() => import("./routes/homepage/index"));
const Login = lazy(() => import("./routes/registro/index"));
const Request = lazy(() => import("./routes/consultas/index"));
const Services = lazy(() => import("./routes/services/index"));
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
     <ChakraProvider>
      <HashRouter>
        <Suspense fallback={<Card />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/registro" element={<Login />} />
            <Route path="/consultas" element={<Request />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </Suspense>
      </HashRouter>
     </ChakraProvider> 
    </>
  </React.StrictMode>
);
