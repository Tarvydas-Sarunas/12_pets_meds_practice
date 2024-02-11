
import { useParams } from "react-router";
import PageHeader from "../components/layout/PageHeader";
import useApiData from "../hooks/useApiData";
import Card from "../components/ui/Card";
import Btn from "../components/ui/Btn";

const logsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/logs/'
const petsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets/'
const prescUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/'

export default function SinglePetPage() {

  const {petId} = useParams()
  console.log('petId ===', petId);

  const [curentPetArr, setCurentPetArr, isLoading ] = useApiData(`${logsUrl}/${petId}`)
  // const [curentPetPrescArr, setCurentPrescPetArr ] = useApiData(`${prescUrl}/${petId}`)

// console.log('curentPetPrescArr ===', curentPetPrescArr);
  console.log('curentPetArr ===', curentPetArr);
  // const curentPetObj = curentPetArr[0]


  const [allPetsArr, useAllPetsArr] = useApiData(petsUrl)
console.log('allPetsArr ===', allPetsArr);

const currentPetObj = allPetsArr.find((pObj) => +pObj.id === +petId)
console.log('currentPetObj ===', currentPetObj);

  return (
    <div className="container">
    <PageHeader pName={`${currentPetObj?.name || ''}: Health Records  `}>
      <Btn outline to={`/logs/add/${petId}`}>Add Log</Btn>
      <Btn outline to={`/presc/add/${petId}`}>Add Prescription</Btn>
      <Btn to={`/`}>Go Back</Btn>
    </PageHeader>

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {curentPetArr?.map((lObj) => <Card li key={lObj.status}>
      <p className="border-b mb-2">Log</p>
<h3 className="text-2xl font-semibold mb-3">{lObj.status}</h3>
<p>{lObj.description} </p>
      </Card>
      )}
      
    </ul>
    {/* <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {curentPetPrescArr.map((lObj) => <Card li key={lObj.status}>
      <p className="border-b mb-2">Prescription</p>
<h3 className="text-2xl font-semibold mb-3">{lObj.status}</h3>
<p>{lObj.comment} </p>
      </Card>
      )}
      
    </ul> */}
    </div>
  )
}
