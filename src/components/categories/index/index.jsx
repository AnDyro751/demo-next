import {useEffect, useState} from "react";
import Link from 'next/link'

export default function IndexCategories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let items = localStorage.getItem('categories');
    if (items) {
      setCategories(JSON.parse(items) || []);
    }
    setLoading(false)
    // Buscar categorías en el localstorage
  }, []);

  if (loading) {
    return (
      <p>
        Cargando...
      </p>
    )
  }
  return (
    <div className='flex w-full flex-wrap'>
      <h1 className='text-3xl font-medium mb-6 w-full'>
        Mostrando {categories.length} {categories.length === 1 ? "categoría" : "categorías"}
      </h1>
      <div className='flex flex-wrap'>
        {categories.map((category, index) => (
          <div className='w-full flex items-center space-x-3' key={index}>
            <p className='w-full'>{category?.name}</p>
            <Link
              href={{pathname: `/categories/[slug]`, query: {slug: category?.id}}}
            >
              <a className='text-blue-600'>Ver</a>
            </Link>
            <Link
              href={{pathname: `/categories/[slug]/edit`, query: {slug: category?.id}}}
            >
              <a className='text-blue-600'>Editar</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}