import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routers>
        <Routes>

          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={< Login />} />
          <Route path="*" element={< NotFound />} />

        </Routes>
      </Routers>
    </AuthProvider>
  );
}

export default App;
