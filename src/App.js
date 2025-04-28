import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Onboarding from './Components/Onboarding';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}