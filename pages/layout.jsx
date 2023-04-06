import Header from "../Components/Header/Header";
import { useState } from 'react'

export default function Layout({ children }) {
    const [darkMode, setDarkMode] = useState(true)
  return (
    <>
        <main>
            <div className='py-5 px-2 min-h-screen dark:bg-neutral-900'>
                <Header darkMode= {darkMode} setDarkMode={setDarkMode}/>
                {children}
            </div>
        </main>
    </>
  )
}