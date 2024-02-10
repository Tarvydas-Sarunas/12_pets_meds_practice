import { Link } from "react-router-dom";
import Btn from "../components/ui/Btn";
import useApiData from "../hooks/useApiData";
import Card from "../components/ui/Card";
import SinglePetCard from "../components/pets/SinglePetCard";

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
          <SinglePetCard item={pObj}/>
        </li>)}
      </ul>
    </div>
  )
}
