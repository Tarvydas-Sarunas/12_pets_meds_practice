
import useApiData from "../hooks/useApiData";
import SinglePetCard from "../components/pets/SinglePetCard";
import PageHeader from "../components/layout/PageHeader";
import axios from "axios";

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets'

export default function PetsPage() {

   const [petsArr, setPetsArr, isLoading] = useApiData(url)

   function handleDelete(petId) {
    axios.delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${petId}`)
      .then((resp) => {
        console.log('resp ===', resp)
        if (resp.status === 200) {
          const newPetsArr = petsArr.filter((pObj) => pObj.id !== petId)
          setPetsArr(newPetsArr)
        }
      })
      .catch(error => {
        console.warn('ivyko klaida:', error);
      })
  }

  return (
    <div className="container">
      <PageHeader link={'/pets/add'} pName={'Pets List'} bName={'Add Pet'}/>
      
      {isLoading && <p className="text-4xl px-4 py-3 border rounded-md text-center">Loading...</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-44">
      {petsArr.map((pObj, index) =>
          <SinglePetCard key={index} item={pObj} onHandleDelete={handleDelete}/>
        )}
      </ul>
    </div>
  )
}
