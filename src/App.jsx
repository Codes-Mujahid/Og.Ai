import { Routes, Route, useLocation } from 'react-router-dom'
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
import Industry06 from './pages/blog/Industry/Industry06.jsx'

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

import Tech01 from './pages/blog/Tech/Tech01.jsx'
import Tech02 from './pages/blog/Tech/Tech02.jsx'
import Tech03 from './pages/blog/Tech/Tech03.jsx'
import Tech04 from './pages/blog/Tech/Tech04.jsx'
import Tech05 from './pages/blog/Tech/Tech05.jsx'
import Tech06 from './pages/blog/Tech/Tech06.jsx'
import Tech07 from './pages/blog/Tech/Tech07.jsx'
import Tech08 from './pages/blog/Tech/Tech08.jsx'
import Tech09 from './pages/blog/Tech/Tech09.jsx'
import Tech10 from './pages/blog/Tech/Tech10.jsx'
import Tech11 from './pages/blog/Tech/Tech11.jsx'
import Tech12 from './pages/blog/Tech/Tech12.jsx'
import Tech13 from './pages/blog/Tech/Tech13.jsx'
import Tech14 from './pages/blog/Tech/Tech14.jsx'
import Tech15 from './pages/blog/Tech/Tech15.jsx'
import Tech16 from './pages/blog/Tech/Tech16.jsx'
import Tech17 from './pages/blog/Tech/Tech17.jsx'
import Tech18 from './pages/blog/Tech/Tech18.jsx'
import Tech19 from './pages/blog/Tech/Tech19.jsx'
import Tech20 from './pages/blog/Tech/Tech20.jsx'
import Tech21 from './pages/blog/Tech/Tech21.jsx'
import Tech22 from './pages/blog/Tech/Tech22.jsx'
import Tech23 from './pages/blog/Tech/Tech23.jsx'
import Tech24 from './pages/blog/Tech/Tech24.jsx'
import Tech25 from './pages/blog/Tech/Tech25.jsx'
import Tech26 from './pages/blog/Tech/Tech26.jsx'
import Tech27 from './pages/blog/Tech/Tech27.jsx'
import Tech28 from './pages/blog/Tech/Tech28.jsx'
import Tech29 from './pages/blog/Tech/Tech29.jsx'
import Tech30 from './pages/blog/Tech/Tech30.jsx'
import Tech31 from './pages/blog/Tech/Tech31.jsx'
import Tech32 from './pages/blog/Tech/Tech32.jsx'
import Tech33 from './pages/blog/Tech/Tech33.jsx'
import Tech34 from './pages/blog/Tech/Tech34.jsx'
import Tech35 from './pages/blog/Tech/Tech35.jsx'
import Tech36 from './pages/blog/Tech/Tech36.jsx'
import Tech37 from './pages/blog/Tech/Tech37.jsx'
import Tech38 from './pages/blog/Tech/Tech38.jsx'
import Tech39 from './pages/blog/Tech/Tech39.jsx'
import Tech40 from './pages/blog/Tech/Tech40.jsx'
import Tech41 from './pages/blog/Tech/Tech41.jsx'

import Builder01 from './pages/blog/Builder Spotlight/Builder01.jsx'

// import Login from './pages/Login.jsx'

export default function App() {
  // const location = useLocation()
  // const isLoginPath = location.pathname.startsWith('/login')

  return (
    <div>
      <ScrollToTop />
      {/* {!isLoginPath ? <Navbar01 /> : null} */}
        <Navbar01 />
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
          <Route path="/blog/0g-ecosystem-receives-290m-in-financing-to-develop-world-s-first-decentralized-ai-operating-system" element={<Foundation02 />} />
          <Route path="/blog/0g-node-sale-purchasing-guide" element={<Foundation03 />} />
          <Route path="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" element={<Foundation04 />} />
          <Route path="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" element={<Foundation05 />} />


          <Route path="/blog/0g-ecosystem-program" element={<Industry01 />} />
          <Route path="/blog/top-areas-of-on-chain-ai" element={<Industry02 />} />
          <Route path="/blog/how-web3-and-ai-can-work-together" element={<Industry03 />}/>
          <Route path="/blog/how-0g-can-power-better-web3-gaming" element={<Industry04 />} />
          <Route path="/blog/top-50-ai-projects" element={<Industry05 />} />
          <Route path="/blog/agentic-ai-market-infra-2026" element={<Industry06 />} />


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

          <Route path="/blog/0g-hits-11k-tps-per-shard" element={<Tech01 />} />
          <Route path="/blog/worlds-first-distributed-100b-parameter-ai" element={<Tech02 />} />
          <Route path="/blog/0g-storage" element={<Tech03 />} />
          <Route path="/blog/superai-recap" element={<Tech04 />} />
          <Route path="/blog/galileo-early-adoption-report" element={<Tech05 />} />
          <Route path="/blog/0g-global-accelerator" element={<Tech06 />} />
          <Route path="/blog/guild-on-0g-05" element={<Tech07 />} />
          <Route path="/blog/consensus-toronto-recap" element={<Tech08 />} />
          <Route path="/blog/token-2049-recap" element={<Tech09 />} />
          <Route path="/blog/0g-latest-hackathon-highlights" element={<Tech10 />} />
          <Route path="/blog/ai-fine-tuning-with-0g-compute" element={<Tech11 />} />
          <Route path="/blog/guild-on-0g-04" element={<Tech12 />} />
          <Route path="/blog/introducing-v3-testnet-galileo" element={<Tech13 />} />
          <Route path="/blog/ai-ownership-vs-api-access" element={<Tech14 />} />
          <Route path="/blog/how-ai-will-adapt-in-web3" element={<Tech15 />} />
          <Route path="/blog/guild-on-0g-03" element={<Tech16 />} />
          <Route path="/blog/this-week-in-onchain-ai-ep-2" element={<Tech17 />} />
          <Route path="/blog/road-to-mainnet-china" element={<Tech18 />} />
          <Route path="/blog/h12025-update" element={<Tech19 />} />
          <Route path="/blog/storagescan-miner-rewards-update" element={<Tech20 />} />
          <Route path="/blog/guild-on-0g-02" element={<Tech21 />} />
          <Route path="/blog/ai-accelerator-cohort-2" element={<Tech22 />} />
          <Route path="/blog/partial-0g-deployment" element={<Tech23 />} />
          <Route path="/blog/guild-on-0g-01" element={<Tech24 />} />
          <Route path="/blog/clarifying-0g-s-token-allocation-our-commitment-to-the-community" element={<Tech25 />} />
          <Route path="/blog/decentralized-ai" element={<Tech26 />} />
          <Route path="/blog/this-week-in-onchain-ai-ep-1" element={<Tech27 />} />
          <Route path="/blog/0g-deep-dive" element={<Tech28 />} />
          <Route path="/blog/guild-on-0g" element={<Tech29 />} />
          <Route path="/blog/benchmarking-0g-performance-draft" element={<Tech30 />} />
          <Route path="/blog/0g-introducing-erc-7857" element={<Tech31 />} />
          <Route path="/blog/0g-newton-testnet-rpc-integration-guide" element={<Tech32 />} />
          <Route path="/blog/0g-s-2024-in-review-building-the-future-of-decentralized-ai" element={<Tech33 />} />
          <Route path="/blog/0g-demo-a-technical-walkthrough" element={<Tech34 />} />
          <Route path="/blog/0g-foundation-and-onepiece-labs-open-applications-for-ai-accelerator-cohort" element={<Tech35 />} />
          <Route path="/blog/how-does-0g-da-compare-to-celestia-and-eigenlayer" element={<Tech36 />} />
          <Route path="/blog/overview-of-ai-agents" element={<Tech37 />} />
          <Route path="/blog/0g-s-whitepaper-a-complete-breakdown" element={<Tech38 />} />
          <Route path="/blog/the-evolution-of-data-availability-in-blockchain-and-what-s-next" element={<Tech39 />} />
          <Route path="/blog/the-0g-ecosystem-a-comprehensive-overview" element={<Tech40 />} />
          <Route path="/blog/high-frequency-defi-on-0g-redefining-speed-and-efficiency" element={<Tech41 />} />
          
          <Route path="/blog/builder-spotlight-flashback" element={<Builder01 />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      {/* {!isLoginPath ? <Footer /> : null} */}
        <Footer />
    </div>
  )
}
