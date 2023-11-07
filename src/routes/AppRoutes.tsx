import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Administracion from "../pages/Administracion";
import Componentes from "../pages/Componentes";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/componentes" element={<Componentes />} />
        </Routes>
    )
};
