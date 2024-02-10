import { Link } from "react-router-dom";


export default function PetsPage() {
  return (
    <div className="container">
      <h1>Pets List</h1>
      <Link to={'/pets/add-pet'}>Add pet</Link>
    </div>
  )
}
