import { Outlet } from 'react-router'
import NavBarApp from '../components/NavBarApp'
import Footer from '../components/Footer'

const LayoutApp = () => {
  return (
    <>
    <header>
    <NavBarApp/>
    </header>
    <main>
    <Outlet />
    </main>
    <footer>
    <Footer/>
    </footer>
    </>

  )
}

export default LayoutApp