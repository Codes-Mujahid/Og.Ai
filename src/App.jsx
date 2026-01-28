import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
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
import Foundation02 from './pages/blog/Og_Foundation/Foundation02.jsx'
import Foundation03 from './pages/blog/Og_Foundation/Foundation03.jsx'
import Foundation04 from './pages/blog/Og_Foundation/Foundation04.jsx'
import Foundation05 from './pages/blog/Og_Foundation/Foundation05.jsx'

import Industry01 from './pages/blog/Industry/Industry01.jsx'
import Industry02 from './pages/blog/Industry/Industry02.jsx'
import Industry03 from './pages/blog/Industry/Industry03.jsx'
import Industry04 from './pages/blog/Industry/Industry04.jsx'
import Industry05 from './pages/blog/Industry/Industry05.jsx'

import Login from './pages/Login.jsx'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/blog/0g-ecosystem-receives-290m-in-financing-to-develop-world-s-first-decentralized-ai-operating-system" element={<Foundation02 />} />
          <Route path="/blog/0g-node-sale-purchasing-guide" element={<Foundation03 />} />
          <Route path="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" element={<Foundation04 />} />
          <Route path="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" element={<Foundation05 />} />


          <Route path="/blog/0g-ecosystem-program" element={<Industry01 />} />
          <Route path="/blog/top-areas-of-on-chain-ai" element={<Industry02 />} />
          <Route path="/blog/how-web3-and-ai-can-work-together" element={<Industry03 />}/>
          <Route path="/blog/how-0g-can-power-better-web3-gaming" element={<Industry04 />} />
          <Route path="/blog/top-50-ai-projects" element={<Industry05 />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}
