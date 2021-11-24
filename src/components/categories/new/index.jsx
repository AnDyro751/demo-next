import {Formik} from 'formik';
import SimpleInput from "../../inputs/simple";
import PrincipalButton from "../../buttons/principal";
import validate from "./validate";
import network from "../../../network";
import {useToasts} from "react-toast-notifications";

export default function AddNewCategory() {
  const {addToast} = useToasts()

  const handleSubmit = async (values) => {
    let response = await network.category().save_category(values)
    console.log(response, "RESPONSE")
    if(response.error){
      showToast(response.error || 'Ha ocurrido un error al guardar la categoría', 'error')
    }else{
      showToast(response.error || 'Se ha guardado la categoría', 'success');
    }
  }

  const showToast = (message, type) => {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
    })
  }


  return (
    <div className=''>
      <div className='flex'>
        <h1 className='text-3xl font-medium my-6'>Agregar nueva categoría</h1>
      </div>
      <div className='flex w-6/12'>
        <Formik
          initialValues={{name: ''}}
          validate={values => validate(values)}
          onSubmit={async (values, {setSubmitting}) => {
            await handleSubmit(values);
            setSubmitting(false);
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
              className='space-y-5 w-full'
              onSubmit={handleSubmit}>
              <SimpleInput
                label={"Nombre de la categoría"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id={"name"}
                placeholder={"Nombre de la categoría"}
                name={"name"}
                type={"text"}
                error={errors.name && touched.name && errors.name}
              />
              <PrincipalButton
                disabled={isSubmitting}
                type={"submit"} text={"Crear categoría"}/>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}