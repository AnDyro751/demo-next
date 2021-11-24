import AuthenticatedLayout from "../../src/components/layouts/authenticated";
import IndexCategories from "../../src/components/categories/index";
import Link from "next/link";

export default function CategoriesIndexPage() {
  return (
    <AuthenticatedLayout>
      <Link href={'/categories/new'}>
        <a className='bg-indigo-700 text-white py-3 px-5 my-6 rounded hover:shadow-xl transition inline-block'>
          Agregar categoría
        </a>
      </Link>
      <IndexCategories/>
    </AuthenticatedLayout>
  )
}