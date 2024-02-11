import axios from "axios"
import Btn from "../components/ui/Btn";
import PageHeader from "../components/layout/PageHeader";
import useApiData from "../hooks/useApiData";
import SingleMedCard from "../components/pets/SingleMedCard";

const medsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds/'

export default function MedicationPage() {

  const [medArr, setMedArr, isLoading, error, reFetch] = useApiData(medsUrl)
console.log('medicationArr ===', medArr);

  function handleDelete(petId) {
   axios.delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${petId}`)
     .then((resp) => {
       console.log('resp ===', resp)
       if (resp.status === 200) {
         const newmedArr = medArr.filter((pObj) => pObj.id !== petId)
         setMedArr(newmedArr)
       }
       // arba iskvieciu reFetch kad isnaujo partrauktu duomenis is db
       // reFetch()
     })
     .catch(error => {
       console.warn('ivyko klaida:', error);
     })
 }

 return (
   <div className="container">
     <PageHeader pName={'Medications List'}>
       <Btn to={'/medications/add'}>Add Med</Btn>
     </PageHeader>
     {isLoading && <p className="text-4xl px-4 py-3 border rounded-md text-center">Loading...</p>}
     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-44">
     {medArr
     .filter((pObj) => pObj.name && pObj.description)
     .map((pObj, index) =>
         <SingleMedCard key={index} item={pObj} onHandleDelete={handleDelete}/>
       )}
     </ul>
   </div>
 )
}

