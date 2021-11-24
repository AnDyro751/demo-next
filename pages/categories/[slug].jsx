import AuthenticatedLayout from "../../src/components/layouts/authenticated";
import ShowCategory from "../../src/components/categories/show";
import {useRouter} from 'next/router'

function CategoryShowPage({slug}) {
  return (
    <AuthenticatedLayout>
      <ShowCategory slug={slug}/>
    </AuthenticatedLayout>
  )
}

CategoryShowPage.getInitialProps = (ctx) => {
  return {slug: ctx.query.slug}
}

export default CategoryShowPage