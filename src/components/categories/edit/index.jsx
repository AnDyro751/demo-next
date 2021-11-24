import SimpleInput from "../../inputs/simple";
import {Formik} from 'formik';
import validate from "../new/validate";
import {useEffect, useState} from "react";
import PrincipalButton from "../../buttons/principal";
import {useToasts} from "react-toast-notifications";
import {useRouter} from "next/router";

export default function EditFormCategory({slug}) {
  const {addToast} = useToasts();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});

  useEffect(() => {
    let item = findItem();
    if (item) {
      setCategory(item);
      setLoading(false);
    } else {
      addToast('No se ha encontrado la categoría', {
        appearance: 'error',
        autoDismiss: 'true'
      })
      setTimeout(() => {
        router.push('/categories');
      }, 2000)
    }
  }, []);

  const findItem = () => {
    let items = findItems();
    if (items) {
      let currentItem = items.find((el) => el.id === slug);
      if (currentItem) {
        return currentItem
      } else {
        return null
      }
    }
  }

  const findItems = () => {
    let items = localStorage.getItem('categories');
    let jsonItems = JSON.parse(items);
    return jsonItems;
  }

  const handleSubmit = (values) => {
    try {
      let items = findItems();
      let currentItem = items.find((el) => el.id === slug);
      if (currentItem) {
        currentItem["name"] = values.name;
      }
      localStorage.setItem('categories', JSON.stringify(items));
      addToast('Se ha actualizado la categoría', {
        appearance: 'success',
        autoDismiss: true
      })
      router.push(`/categories/${slug}`)
    } catch (e) {
      addToast('Ha ocurrido un error al guardar los datos', {
        appearance: 'error',
        autoDismiss: true
      })
    }

  };

  if (loading) {
    return (
      <p>Cargando...</p>
    )
  }


  return (
    <div>
      <h1 className='text-3xl font-medium my-6'>Editando Categoría</h1>
      <Formik
        initialValues={{name: category?.name}}
        validate={values => validate(values)}
        onSubmit={(values, {setSubmitting}) => {
          handleSubmit(values);
          setSubmitting(false)
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
            className='w-6/12 space-y-5'>
            <SimpleInput
              onChange={handleChange}
              id={"name"}
              error={errors.name && touched.name && errors.name}
              placeholder={"Nombre de la categoría"}
              name={"name"}
              type={"text"}
              value={values.name}
              label={"Nombre de la categoría"}
              onBlur={handleBlur}
            />

            <PrincipalButton
              disabled={isSubmitting}
              type={"submit"}
              text={isSubmitting ? 'Guardando...' : "Editar Categoría"}
            />
          </form>
        )}
      </Formik>
    </div>
  )
}