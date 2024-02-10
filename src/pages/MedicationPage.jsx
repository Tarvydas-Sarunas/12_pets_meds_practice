import { Link } from "react-router-dom";

export default function MedicationPage() {
  return (
    <div className="container">
      <h1>Medications</h1>
      <Link to={'/pets/add'}>Add pet</Link>
    </div>
  )
}
