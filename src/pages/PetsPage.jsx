import { Link } from "react-router-dom";
import Btn from "../components/ui/Btn";
import useApiData from "../hooks/useApiData";
import Card from "../components/ui/Card";

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets'

export default function PetsPage() {

   const [petsArr, setPetsArr] = useApiData(url)

  return (
    <div className="container">
      <div className=" my-5 flex items-center justify-between">
      <h1 className="text-main text-4xl ">Pets List</h1>
      <Link to={'/pets/add'}> <Btn >Add Pet</Btn> </Link>
      </div>
      <ul className="grid grid-cols-3 gap-5 pb-44">
      {petsArr.map((pObj, index) => <li key={index}>
          <Card>
            <h3 className="text-xl mb-2 font-bold">{pObj.name}</h3>
            <p >{new Date(pObj.dob).toLocaleDateString()}</p>
            <p className="mb-4">{pObj.client_email}</p>
            <div className="flex gap-1">
              <Link to={'/pets/1'}>
              <Btn>View Logs</Btn>
              </Link>
              <Btn outline>Delete</Btn>
            </div>
          </Card>
        </li>)}
      </ul>
    </div>
  )
}
