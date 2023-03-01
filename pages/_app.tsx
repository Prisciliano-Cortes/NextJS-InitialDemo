import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

// type NextPageWithLayout = NextPage & {
//     getLayout?: (page: JSX.Element) => JSX.Element
// }

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
    const getLayout = Component.getLayout || ((page) => page)
    // return <Component {...pageProps} />
    return getLayout(<Component {...pageProps} />)
}
