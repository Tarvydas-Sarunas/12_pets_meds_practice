
import PageHeader from '../components/layout/PageHeader'
import { useNavigate} from 'react-router';
import Btn from "../components/ui/Btn";
import SmartInput from '../components/ui/SmartInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const medsUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1/meds/'


export default function AddMedicationPage() {


const initialValues = {
  name: 'Doliprane 1000',
  description: 'nuo skausmo',   
};

const navigate = useNavigate()


const formik = useFormik({
  initialValues: initialValues,
  validationSchema: Yup.object({
    name: Yup.string().min(5).trim().required(),
    description: Yup.string().min(5).trim().required(),
  }),
  onSubmit: (values) => {
    sendPetAxios(values)
    console.log('values ===', values);
  },
});

function sendPetAxios(dataToSend) {
  axios.post(medsUrl, dataToSend)
  .then((resp) => {
    if (resp.status === 200) {
      navigate('/medications')
    }
    console.log('resp ===', resp)})
  .catch((error) => console.warn('ivyko klaida:', error))
}

  return (
    <div className='container'>
      <PageHeader pName={`Add New Medication`}>
        <Btn to={'/medications'}>Go Back</Btn>
      </PageHeader>

      <form onSubmit={formik.handleSubmit} className="grid gap-x-5">
        {/* one input */}
        <SmartInput name={'name'} type={'text'} formik={formik}/>
        <SmartInput name={'description'} type={'text'} formik={formik}/>
        <Btn type='submit'>Submit</Btn>
      </form>
    </div>
  )
}
