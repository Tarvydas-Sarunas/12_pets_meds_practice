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
      <Link to={'/add-pet'}> <Btn >Add Pet</Btn> </Link>
      </div>
      <ul>
      {/* {petsArr.map(() => )} */}
        <li>
          <Card>
            <h3 className="text-xl mb-2 font-bold">Lese</h3>
            <p >data</p>
            <p className="mb-4">email</p>
            <div className="flex gap-1">
              <Btn>View Logs</Btn>
              <Btn outline>Delete</Btn>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  )
}
