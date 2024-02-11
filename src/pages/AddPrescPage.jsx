
import PageHeader from '../components/layout/PageHeader'
import useApiData from '../hooks/useApiData';
import { useNavigate, useParams } from 'react-router';
import Btn from "../components/ui/Btn";
import SmartInput from '../components/ui/SmartInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const petsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets/'
const prescUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/prescriptions/'


export default function AddPrescPage() {

  const {petId} = useParams()
  console.log('petId ===', petId);

const [allPetsArr, useAllPetsArr] = useApiData(petsUrl)
console.log('allPetsArrAddLog ===', allPetsArr);

const currentPetObj = allPetsArr?.find((pObj) => +pObj.id === +petId)
console.log('currentPetObj ===', currentPetObj);

const initialValues = {
  descriptmedication_id: 15,
  pet_id: petId,
  comment: 'tik vakarais pries miega',   
};

const navigate = useNavigate()


const formik = useFormik({
  initialValues: initialValues,
  validationSchema: Yup.object({
    descriptmedication_id: Yup.number().required(),
    pet_id: Yup.number().required(),
    comment: Yup.string().trim().required(),
  }),
  onSubmit: (values) => {
    sendPetAxios(values)
    console.log('values ===', values);
  },
});

function sendPetAxios(dataToSend) {
  axios.post(prescUrl, dataToSend)
  .then((resp) => {
    if (resp.status === 200) {
      navigate(`/pets/${petId}`)
    }
    console.log('resp ===', resp)})
  .catch((error) => console.warn('ivyko klaida:', error))
}

  return (
    <div className='container'>
      <PageHeader pName={`Add Prescription for ${currentPetObj?.name || ''} `}>
        <Btn to={`/pets/${petId}`}>Go Back</Btn>
      </PageHeader>

      <form onSubmit={formik.handleSubmit} className="grid gap-x-5">
        {/* one input */}
        <SmartInput name={'description_id'} type={'number'} formik={formik}/>
        <SmartInput name={'pet_id'} type={'number'} formik={formik} readOnly/>
        <SmartInput name={'comment'} type={'text'} formik={formik}/>
        <Btn type='submit'>Submit</Btn>
      </form>
    </div>
  )
}
