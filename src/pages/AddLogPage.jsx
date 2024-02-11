
import PageHeader from '../components/layout/PageHeader'
import useApiData from '../hooks/useApiData';
import { useNavigate, useParams } from 'react-router';
import Btn from "../components/ui/Btn";
import SmartInput from '../components/ui/SmartInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const petsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets/'
const logsUrl = 'https://glittery-dull-snickerdoodle.glitch.me//v1/logs/'


export default function AddMedPage() {

  const {petId} = useParams()
  console.log('petId ===', petId);

const [allPetsArr, useAllPetsArr] = useApiData(petsUrl)
console.log('allPetsArrAddLog ===', allPetsArr);

const currentPetObj = allPetsArr?.find((pObj) => +pObj.id === +petId)
console.log('currentPetObj ===', currentPetObj);

const initialValues = {
  pet_id: petId,
  description: 'nezinau apie ka kalba',
  status: 'nezianu gal apie tai kokia jo bukle',   
};

const navigate = useNavigate()


const formik = useFormik({
  initialValues: initialValues,
  validationSchema: Yup.object({
    pet_id: Yup.number().required(),
    description: Yup.string().min(10).trim().required(),
    status: Yup.string().trim().required(),
  }),
  onSubmit: (values) => {
    sendPetAxios(values)
    console.log('values ===', values);
  },
});

function sendPetAxios(dataToSend) {
  axios.post(logsUrl, dataToSend)
  .then((resp) => {
    if (resp.status === 200) {
      navigate(`/pets/${petId}`)
    }
    console.log('resp ===', resp)})
  .catch((error) => console.warn('ivyko klaida:', error))
}

  return (
    <div className='container'>
      <PageHeader pName={`Add Log for ${currentPetObj?.name || ''} `}>
        <Btn to={`/pets/${petId}`}>Go Back</Btn>
      </PageHeader>

      <form onSubmit={formik.handleSubmit} className="grid gap-x-5">
        {/* one input */}
        <SmartInput name={'pet_id'} type={'number'} formik={formik} readOnly/>
        <SmartInput name={'description'} type={'text'} formik={formik}/>
        <SmartInput name={'status'} type={'text'} formik={formik}/>
        <Btn type='submit'>Submit</Btn>
      </form>
    </div>
  )
}
