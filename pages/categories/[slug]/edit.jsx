import AuthenticatedLayout from "../../../src/components/layouts/authenticated";
import EditFormCategory from "../../../src/components/categories/edit";

export default function EditCategory({slug}) {
  return (
    <AuthenticatedLayout>
      <EditFormCategory slug={slug}/>
    </AuthenticatedLayout>
  )
}

EditCategory.getInitialProps = (context) => {
  return {
    slug: context.query.slug
  }
}