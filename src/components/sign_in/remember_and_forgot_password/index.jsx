import Link from 'next/link';

export default function RememberAndForgotPassword({}) {
  return (
    <div className='flex space-between items-center w-full justify-between'>
      <div className='flex items-center'>
        <input type="checkbox" className='mr-2' id={'remember_me'} />
        <label htmlFor="remember_me">
          <span className='text-sm font-gray-700 font-medium'>Recuerdame</span>
        </label>
      </div>
      <div>
        <Link href={'/users/forgot_password'}>
          <a className='text-indigo-600 text-sm font-medium'>
            ¿Olvidaste tu contraseña?
          </a>
        </Link>
      </div>
    </div>
  )
}