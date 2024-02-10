import { Link } from "react-router-dom";


export default function AddPet() {
  return (
    <div className="container">
      <h1>Add pet</h1>
      <Link to={'/add-pet'}>Add pet</Link>
    </div>
  )
}
