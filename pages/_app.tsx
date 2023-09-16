
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
    <Navbar/>
      
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'que lio' }
}