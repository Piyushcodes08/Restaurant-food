import React from 'react'
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import Header from './Food_website/Header'
import Section1 from './Food_website/Section1'
import About from './Food_website/About'
import Food from './Food_website/Food'
import Review from './Food_website/Review'
import Footer from './Food_website/Footer'
import Error from "./Food_website/Error";
import Login from './Food_website/Login'
import Signup from './Food_website/Signup'
import Forgot from './Food_website/Forgot'
import './Food_website/Style.css'

const App = () => {
 

  return (
    <div>


      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Section1 />} />
          <Route path='/About' element={<About />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/Review' element={<Review />} />
          <Route path='*' element={<Error />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/forgot' element={<Forgot/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
