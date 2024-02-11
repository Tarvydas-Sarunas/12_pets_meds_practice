import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import PetsPage from "./pages/PetsPage";
import MedicationPage from "./pages/MedicationPage";
import AddPet from "./pages/AddPet";
import SinglePetPage from "./pages/SinglePetPage";
import AddLogPage from "./pages/AddLogPage";
import AddPrescPage from "./pages/AddPrescPage";
import AddMedicationPage from "./pages/AddMedicationPage";

export default function App() {
  return (
    <div className='mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<PetsPage />} />
        <Route path="/medications" element={<MedicationPage />} />
        <Route path="/medications/add" element={<AddMedicationPage />} />
        <Route path="/pets/add" element={<AddPet />} />
        <Route path="/pets/:petId" element={<SinglePetPage />} />
        <Route path="/logs/add/:petId" element={<AddLogPage />} />
        <Route path="/presc/add/:petId" element={<AddPrescPage />} />
      </Routes>
    </div>
  );
}
