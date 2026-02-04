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
import Navbar01 from './components/Navbar01.jsx'
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

import Partners01 from './pages/blog/Partners/Partners01.jsx'
import Partners02 from './pages/blog/Partners/Partners02.jsx'
import Partners03 from './pages/blog/Partners/Partners03.jsx'
import Partners04 from './pages/blog/Partners/Partners04.jsx'
import Partners05 from './pages/blog/Partners/Partners05.jsx'
import Partners06 from './pages/blog/Partners/Partners06.jsx'
import Partners07 from './pages/blog/Partners/Partners07.jsx'

import News01 from './pages/blog/News/News01.jsx'
import News02 from './pages/blog/News/News02.jsx'
import News03 from './pages/blog/News/News03.jsx'
import News04 from './pages/blog/News/News04.jsx'
import News05 from './pages/blog/News/News05.jsx'
import News06 from './pages/blog/News/News06.jsx'
import News07 from './pages/blog/News/News07.jsx'
import News08 from './pages/blog/News/News08.jsx'
import News09 from './pages/blog/News/News09.jsx'
import News10 from './pages/blog/News/News10.jsx'
import News11 from './pages/blog/News/News11.jsx'
import News12 from './pages/blog/News/News12.jsx'
import News13 from './pages/blog/News/News13.jsx'
import News14 from './pages/blog/News/News14.jsx'
import News15 from './pages/blog/News/News15.jsx'
import News16 from './pages/blog/News/News16.jsx'
import News17 from './pages/blog/News/News17.jsx'

// import Login from './pages/Login.jsx'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar01 />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
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


          <Route path="/blog/0g-validators" element={<Partners01 />} />
          <Route path="/blog/early-signals-0g-global-accelerator" element={<Partners02 />}/>
          <Route path="/blog/builder-spotlight-gimo" element={<Partners03 />}/>
          <Route path="/blog/0g-ai-and-alibaba-cloud-to-advance-ai-and-web3-ecosystems-in-apac" element={<Partners04 />}/>
          <Route path="/blog/announcing-lumoz-and-0g-partnership" element={<Partners05 />}/>
          <Route path="/blog/user-guide-focg-summer-co-hosted-by-0g-labs-blade-games-and-blockbooster" element={<Partners06 />}/>
          <Route path="/blog/0g-partnership-with-assister" element={<Partners07 />}/>

          <Route path="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility" element={<News01 />} />
          <Route path="/blog/explaining-the-0g-token-airdrop" element={<News02 />} />
          <Route path="/blog/ethcc-cannes-recap" element={<News03 />} />
          <Route path="/blog/0g-art-contest" element={<News04 />} />
          <Route path="/blog/token-update-a-look-at-0g-s-upcoming-token-allocation" element={<News05 />} />
          <Route path="/blog/introducing-0g-hub-your-gateway-to-the-0g-ecosystem" element={<News06 />} />
          <Route path="/blog/navigating-0g-s-tech-an-update-on-the-latest-in-0g-s-products" element={<News07 />} />
          <Route path="/blog/the-0g-ecosystem" element={<News08 />} />
          <Route path="/blog/0g-serving" element={<News09 />} />
          <Route path="/blog/reintroducing-0g-the-first-decentralized-ai-operating-system" element={<News10 />}/>
          <Route path="/blog/focg-summer-wrap-up" element={<News11 />}/>
          <Route path="/blog/0g-foundation-and-onepiece-labs-join-forces-to-launch-pioneering-incubation-program-for-web3-and-ai-innovators" element={<News12 />}/>
          <Route path="/blog/hackathon-evolution-how-your-suggestions-shape-our-updates" element={<News13 />}/>
          <Route path="/blog/ethcc-brussels-recap-og-lab-s-first-summit-path-to-dagi" element={<News14 />}/>
          <Route path="/blog/0g-ambassador-program-cohort-1-selection" element={<News15 />}/>
          <Route path="/blog/focg-summer-co-hosted-by-0g-labs-blade-games-and-blockbooster" element={<News16 />}/>
          <Route path="/blog/0g-x-onepiece-labs-x-camp-hackathon" element={<News17 />}/>
          
          
          <Route path="*" element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}
