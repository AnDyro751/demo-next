import AuthenticatedLayout from "../../src/components/layouts/authenticated";
import AddNewCategory from "../../src/components/categories/new";

export default function NewCategoriesPage() {
  return (
    <AuthenticatedLayout>
        <AddNewCategory/>
    </AuthenticatedLayout>
  )
}