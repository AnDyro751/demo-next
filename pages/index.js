import UnAuthenticatedLayout from "../src/components/layouts/unauthenticated";
import SignInForm from "../src/components/sign_in/form";
import {ToastProvider} from 'react-toast-notifications';
import {connect} from 'react-redux';
import {signInUser} from "../src/actions/userActions";
import {wrapper} from "../src/store";
import {COOKIE_NAME} from "../src/utils/constants";

function Home({signed_in, user}) {

  if (user?.signed_in || signed_in) {
    return (
      <ToastProvider>
        <h1>Sesión iniciada</h1>
      </ToastProvider>
    )
  }
  return (
    <>
      <ToastProvider>
        <UnAuthenticatedLayout title={'Iniciar sesión'}>
          <div className='w-full flex justify-center h-screen items-center'>
            <div className='w-4/12 mx-auto'>
              <h1 className='text-4xl font-bold text-center mb-10'>Iniciar sesión</h1>
              <SignInForm/>
            </div>
          </div>
        </UnAuthenticatedLayout>
        <style global jsx>{`
        body{
          background: #eee;
        }
      `}</style>
      </ToastProvider>
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => (context) => {
  let signed_in = false
  if (store && context) {
    if (context.req.cookies[COOKIE_NAME]) {
      signed_in = true
      // podemos hacer petición para traer los datos de inicio de sesión
      store.dispatch(signInUser({email: 'ndjnjs'}));
    }
  }
  return {
    props: {
      signed_in: signed_in
    }
  }
})
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Home);
