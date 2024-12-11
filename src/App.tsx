import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './landingPage'
import Login from './components/sign-signout/login';
import Register from './components/sign-signout/register';
import Verification from './components/verification';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1500, // Animation duration in milliseconds
  easing: 'ease-in-out', // Default easing for animations
  once: true, // Whether animation should happen only once - while scrolling down
});
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='verified' element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
