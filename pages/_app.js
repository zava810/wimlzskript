import '../styles/globals.css'
import { Roboto_Mono, Roboto } from '@next/font/google'

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

export default function App({ Component, pageProps }) {
  return (
    <main className={`${robotoMono.variable} ${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main> 
  )
}
