import { Link } from "react-router-dom";
import Btn from "../components/ui/Btn";


export default function PetsPage() {
  return (
    <div className="container">
      <div className=" mt-5 flex items-center justify-between">
      <h1 className="text-main text-4xl ">Pets List</h1>
      <Link to={'/add-pet'}> <Btn >Add Pet</Btn> </Link>
      </div>
    </div>
  )
}
