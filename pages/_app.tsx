
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import "../app/globals.css"
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu'

 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
    <Navbar/>
    <div className='main'>
    <SideMenu clase=''/>
      <Component {...pageProps} />
      
      </div>
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