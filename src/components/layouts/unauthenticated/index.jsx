import PropTypes from 'prop-types'
import AuthHeader from "../../headers/AuthHeader";
import Head from "next/head";

export default function UnAuthenticatedLayout({children, title}) {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <AuthHeader/>
        <main>
          {children}
        </main>
      </div>
    </>

  )

}

UnAuthenticatedLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
}
UnAuthenticatedLayout.defaultProps = {
  title: "Grey Capital"
}