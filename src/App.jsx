import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import PetsPage from "./pages/PetsPage";
import MedicationPage from "./pages/MedicationPage";
import AddPet from "./pages/AddPet";

export default function App() {
  return (
    <div className='mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<PetsPage />} />
        <Route path="/medications" element={<MedicationPage />} />
        <Route path="/add-pet" element={<AddPet />} />
      </Routes>
    </div>
  );
}
