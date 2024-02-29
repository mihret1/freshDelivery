import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


export default function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/auth' element={<Auth/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}
