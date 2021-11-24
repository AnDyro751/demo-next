import Link from "next/link";
import {ToastProvider} from "react-toast-notifications";

export default function AuthenticatedLayout({children}) {
  return (
    <ToastProvider>
      <div className='flex w-full space-x-4'>
        <aside className='w-2/12 py-3 px-4 bg-gray-200'>
          <ul>
            <li>
              <Link href={'/categories'}>
                <a>
                  Categorías
                </a>
              </Link>
            </li>
          </ul>
        </aside>
        <main className='w-10/12'>
          {children}
        </main>
      </div>
    </ToastProvider>
  )
}