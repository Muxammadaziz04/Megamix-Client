import NextNProgress from 'nextjs-progressbar';
import Layout from 'components/Layout';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F8AB10" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(MyApp)