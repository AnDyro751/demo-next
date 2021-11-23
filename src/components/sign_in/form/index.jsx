import SimpleInput from "../../inputs/simple";
import PrincipalButton from "../../buttons/principal";
import RememberAndForgotPassword from "../remember_and_forgot_password";
import {Formik} from 'formik';
import validate from "./validate";
import defaultValues from "./defaultValues";

export default function SignInForm() {

  const _onSubmit = (setSubmitting, values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <Formik
      initialValues={
        defaultValues()
      }
      validate={(values) => validate(values)}
      onSubmit={(values, {setSubmitting}) => {
        _onSubmit(setSubmitting, values);
        console.log("submit")

      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
        <form
          onSubmit={handleSubmit}
          className='flex bg-white px-6 py-10 rounded shadow-lg space-y-5 flex-wrap'>
          <SimpleInput
            error={errors.email && touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'text'}
            id={'email'}
            value={values.email}
            placeholder={'batman@gmail.com'}
            label={'Dirección de Correo'}
            name={'email'}/>

          <SimpleInput
            error={errors.password && touched.password && errors.password}
            type={'password'}
            id={'password'}
            value={values.password}
            placeholder={'********'}
            label={'Contraseña'}
            onChange={handleChange}
            onBlur={handleBlur}
            name={'password'}/>

          <RememberAndForgotPassword/>

          <PrincipalButton
            type={"submit"}
            disabled={isSubmitting}
            text={'Iniciar sesión'}
          />

        </form>
      )}
    </Formik>
  )
}