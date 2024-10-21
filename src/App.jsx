import  Navbar from "./Components/Navbar.jsx"
import  Footer from "./Components/Footer.jsx"
import  Gallery from "./Components/gallery.jsx"
import  Home from "./Components/Home.jsx"
import  Contact from "./Components/Contact.jsx"


import "./App.css"
import { Routes , Route , useLocation } from "react-router-dom";
function App() {

  const location = useLocation();


  return (
    <>
    <Navbar/>
    <Home />
    <Gallery />
    <Contact />
    <Footer />
    </>

  )
}

export default App
