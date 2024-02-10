import * as Yup from 'yup';
import axios from "axios"
import Btn from "../components/ui/Btn";
import { useFormik } from 'formik';

function SmartInput({name, formik, type = 'text', placeholder}) {
  return (
    <label className="block mb-4">
      <span className="text-lg block first-letter:uppercase">{name}</span>
      <input 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values[name]} 
        name={name} 
        className={`border w-full px-2 py-[5px] rounded-md ${formik.touched[name] && formik.errors[name] ? 'border-red-500 bg-red-50': 'border-slate-300' } `} 
        type={type} 
        placeholder={placeholder || 'Enter ' + name}
      />
      {formik.touched[name] && formik.errors[name] && 
        <div className="bg-red-100 text-red-900 px-4 py-1 mt-2 rounded-md">
          <p>{formik.errors[name]}</p>
        </div>
      }
    </label>
  );
}

export default function AddPet() {
  const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

  const initialValues = {
    name: 'Dogis',
    dob: '2000-01-01',
    client_email: 'admin@mail.com',   
  };

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
    axios.post(url, dataToSend)
    .then((resp) => console.log('resp ===', resp))
    .catch((error) => console.warn('ivyko klaida:', error))
  }

  return (
    <div className="container">
      <h1 className="text-4xl my-5">Add pet</h1>
      <form noValidate onSubmit={formik.handleSubmit} className="grid gap-x-5">
        {/* one input */}
        <SmartInput name={'name'} formik={formik}/>
        <SmartInput name={'dob'} type={'date'} formik={formik}/>
        <SmartInput name={'client_email'} type={'email'} formik={formik}/>
        <button type='submit'>Submit</button>
        <Btn type="submit">Add</Btn>
      </form>
    </div>
  );
}
