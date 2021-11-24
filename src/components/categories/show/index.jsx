import {useEffect, useState} from "react";
import {useToasts} from "react-toast-notifications";
import {useRouter} from "next/router";

export default function ShowCategory({slug}) {
  const router = useRouter();
  const {addToast} = useToasts()
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});


  useEffect(() => {
    let items = localStorage.getItem('categories');
    if (items) {
      let jsonItems = JSON.parse(items);
      let currentItem = jsonItems.find((el) => el.id === slug);
      if (currentItem) {
        setCategory(currentItem);
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
    }
  }, [])

  if (loading) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <div>
      <h1 className='text-3xl font-medium my-6'>Mostrando categoría</h1>
      <h3>Nombre: {category?.name}</h3>
    </div>
  )
}