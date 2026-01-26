import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Press from './pages/Press.jsx'
import Brandkit from './pages/Brandkit.jsx'
import Ama from './pages/Ama.jsx'
import Product from './pages/Product.jsx'
import Blog from './pages/Blog.jsx'
import Partners from './pages/Partners.jsx'
import Research from './pages/Research.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Accelerator from './pages/Accelerator.jsx'
import Disclaimer from './pages/Disclaimer.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
// blog_pages
import Foundation01 from './pages/blog/Og_Foundation/Foundation01.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/accelerator" element={<Accelerator />} />
          <Route path="/research" element={<Research />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brandkit" element={<Brandkit />} />
          <Route path="/ama" element={<Ama />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* blog_pages */}
          <Route path="/blog/0g-node-sale-results" element={<Foundation01 />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}
