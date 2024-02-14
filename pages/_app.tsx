import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/configuration/theme'
import { style as Style } from '../src/configuration/style'
import '../src/configuration/preload-font.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
    const persistor = persistStore(store)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Style />
                    <Head>
                        <link rel="shortcut icon" href="/favicon.ico" />
                        <title>REACT</title>
                    </Head>
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
