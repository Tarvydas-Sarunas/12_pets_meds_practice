import * as Yup from 'yup';
import axios from "axios"
import Btn from "../components/ui/Btn";
import { useFormik } from 'formik';
import SmartInput from '../components/ui/SmartInput';
import PageHeader from '../components/layout/PageHeader';
import { useNavigate } from 'react-router';


export default function AddPet() {
  const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';



  const initialValues = {
    name: 'Dogis',
    dob: '2000-01-01',
    client_email: 'admin@mail.com',   
  };

  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(15, 'biski trumpiau please').trim().required(),
      dob: Yup.date().min('01/01/2000').required(),
      client_email: Yup.string().trim().email().lowercase().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Patikrinkite email').required(),
    }),
    onSubmit: (values) => {
      sendAxios(values)
      console.log('values ===', values);
    },
  });

  function sendAxios(dataToSend) {
    axios.post('https://glittery-dull-snickerdoodle.glitch.me/v1/pets', dataToSend)
    .then((resp) => {
      if (resp.status === 200) {
        navigate('/pets')
      }
      console.log('resp ===', resp)})
    .catch((error) => console.warn('ivyko klaida:', error))
  }

  return (
    <div className="container">
      <PageHeader link={'/'} pName={'Add pet'} bName={'Go Back'}/>
      
      <form noValidate onSubmit={formik.handleSubmit} className="grid gap-x-5">
        {/* one input */}
        <SmartInput name={'name'} formik={formik}/>
        <SmartInput name={'dob'} type={'date'} formik={formik}/>
        <SmartInput name={'client_email'} type={'email'} formik={formik}/>
        <Btn type="submit">Add</Btn>
      </form>
    </div>
  );
}
