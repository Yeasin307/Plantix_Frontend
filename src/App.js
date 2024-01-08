import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import './App.css';
import Outlet from "./pages/Outlet";
import Crop from "./pages/Crop";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Fertilizer from "./pages/Fertilizer";
import Pests from "./pages/Pests";
import Cultivation from "./pages/Cultivation";

function App() {
  return (
    <AuthProvider>
      <Routers>
        <Routes>

          <Route path="/" element={<PrivateRoute><Outlet /></PrivateRoute>}>
            <Route path="/" element={<Crop />} />
            <Route path="/crops" element={<Crop />} />
            <Route path="/fertilizer" element={<Fertilizer />} />
            <Route path="/pests" element={<Pests />} />
            <Route path="/cultivation" element={<Cultivation />} />
            <Route path="/community" element={<Community />} />
          </Route>

          <Route path="/login" element={< Login />} />
          <Route path="*" element={< NotFound />} />

        </Routes>
      </Routers>
    </AuthProvider>
  );
}

export default App;
