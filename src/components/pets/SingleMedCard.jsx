
import Card from '../ui/Card'
import Btn from '../ui/Btn'

export default function SingleMedCard({item: pObj, onHandleDelete}) {
  return (
    <Card className='shadow-lg' li>
      <p className="border-b mb-2">Medication</p>
            <h3 className="text-xl mb-2 font-bold">{pObj.name}</h3>
            <p className="mb-4">{pObj.description}</p>
            <div className="flex gap-1 justify-center">
              <Btn onClick={() => onHandleDelete(pObj.id)} outline>Delete</Btn>
            </div>
          </Card>
  )
}
