import { useState } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Roboto_Mono, Roboto } from '@next/font/google'
import './global.css'


const robotoMono = Roboto_Mono(
    {subsets: ['latin'],
    variable: '--font-roboto-mono'
  }
  )
  
  const roboto = Roboto(
    {subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto'
  }
  )

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <main className={`${robotoMono.variable} ${roboto.variable} font-sans`}>
                <div className="pb-5 px-2 min-h-screen bg-primary font-roboto_mono">
                    <Header />
                        <div className='min-h-[90vh] pt-16'>
                        {children}
                        </div>
                    <Footer />
                </div>
            </main> 
        </body>
      </html>
    )
  }