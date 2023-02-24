import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Reducer } from '@/service/reducer/Reducer'

export default function App({ Component, pageProps }: AppProps) {

  return(
    <Reducer>
      <Component {...pageProps} />
    </Reducer>
    ) 
    
}
