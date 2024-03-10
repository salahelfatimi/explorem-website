import Navbar from './navbar'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='py-24 mb-auto'>{children}</main>
      <Footer />
    </>
  )
}