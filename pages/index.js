import UnAuthenticatedLayout from "../src/components/layouts/unauthenticated";
import SignInForm from "../src/components/sign_in/form";
import {ToastProvider} from 'react-toast-notifications';

export default function Home() {
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
