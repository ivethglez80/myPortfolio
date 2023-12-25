import { LangProvider } from './context/langContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './views/home/home'
import About from './views/about/about'
import Profile from './views/profile/profile'
import Portfolio from './views/portfolio/portfolio'
import ContactInfo from './views/contactInfo/contactInfo'
import Blog from './views/blog/blog'
import NotFound from './views/notFound/notFound'
import Footer from './components/footer'

import './App.css'

function App() {


  return (
    <>
    <LangProvider>
    <BrowserRouter>
    
    <NavBar />
      <Routes>
        
        <Route  path="/" element={<Home />} />
        <Route  path="/ivt-portfolio" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/profile" element={<Profile />} />
        <Route  path="/portfolio" element={<Portfolio />} />
        <Route  path="/contact-info" element={<ContactInfo />} />
        <Route  path="/blog" element={<Blog />} />
        <Route  path="*" element={<NotFound />} />
        
      </Routes>
    <Footer />
    </BrowserRouter>
    </LangProvider>
    </>
  )
}

export default App
