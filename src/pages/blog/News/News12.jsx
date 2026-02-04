import React, { useState } from 'react'
import './News12.css'
 
export default function News12() {
  const [showToast, setShowToast] = useState(false)
 
  const handleCopy = (e) => {
    e.preventDefault()
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    })
  }
 
  const handleSocialShare = (platform, e) => {
    e.preventDefault()
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(
      '0G Foundation and OnePiece Labs Join Forces to Launch Pioneering Incubation Program for Web3 and AI Innovators'
    )
    let shareUrl = ''
 
    if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    } else if (platform === 'x') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    }
 
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }
 
  return (
    <div className="n12_container">
      <div className="n12_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n12_hide hide">
          <div className="n12_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n12_socialshare-title">
            0G Foundation and OnePiece Labs Join Forces to Launch Pioneering
            Incubation Program for Web3 and AI Innovators
          </div>
        </div>
 
        <main className="n12_main-wrapper main-wrapper">
          <section className="n12_section_hero section_hero n12_is-vertical is-vertical">
            <div className="n12_padding-global padding-global">
              <div className="n12_container-large container-large">
                <div className="n12_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n12_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n12_hero_bg-image2 hero_bg-image n12_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n12_hero_bg-gradient hero_bg-gradient n12_is-blog is-blog"></div>
                </div>
 
                <div className="n12_hero_content-component hero_content-component n12_is-vertical2 is-vertical">
                  <div className="n12_blog_meta-wrapper blog_meta-wrapper n12_is-white is-white">
                    <div className="n12_blog_meta-category">News</div>
                    <div className="n12_icon-embed-custom1 icon-embed-custom n12_w-embed1 w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 4 4"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="n12_blog_meta-date">Jul 30, 2024</div>
                    <div className="n12_icon-embed-custom2 icon-embed-custom n12_w-embed2 w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 4 4"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <circle cx="2" cy="2" r="2" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="n12_blog_meta-author">0g</div>
                  </div>
 
                  <div className="n12_spacer-small spacer-small"></div>
 
                  <div className="n12_max-width-large max-width-large n12_text-align-center text-align-center">
                    <h1 className="n12_heading-style-h3 heading-style-h3">
                      0G Foundation and OnePiece Labs Join Forces to Launch
                      Pioneering Incubation Program for Web3 and AI Innovators
                    </h1>
                  </div>
 
                  <div className="n12_spacer-small2 spacer-small"></div>
 
                  <div className="n12_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n12_link-icon-light link-icon-light n12_is-static is-static n12_w-inline-block w-inline-block"
                    >
                      <div className="n12_icon-embed-xsmall1 icon-embed-xsmall n12_w-embed3 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 19 20"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
 
                    <a
                      fs-socialshare-element="linkedin"
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      href="#"
                      className="n12_link-icon-light2 link-icon-light n12_is-static2 is-static n12_w-inline-block2 w-inline-block"
                    >
                      <div className="n12_icon-embed-xsmall2 icon-embed-xsmall n12_w-embed4 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 20 18"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
 
                    <a
                      fs-socialshare-element="x"
                      onClick={(e) => handleSocialShare('x', e)}
                      href="#"
                      className="n12_link-icon-light3 link-icon-light n12_is-static3 is-static n12_w-inline-block3 w-inline-block"
                    >
                      <div className="n12_icon-embed-xsmall3 icon-embed-xsmall n12_w-embed5 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 21 18"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            d="M16.2511 0.25L11.1976 5.84192L6.82829 0.25H0.5L8.06131 9.82111L0.894939 17.75H3.9636L9.49461 11.6322L14.3284 17.75H20.5L12.6179 7.66285L19.318 0.25H16.2511ZM15.1748 15.9731L4.08133 1.93359H5.90492L16.8741 15.9731H15.1748Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          <section className="n12_section_legal-content section_legal-content">
            <div className="n12_padding-global2 padding-global">
              <div className="n12_padding-section-medium padding-section-medium">
                <div className="n12_container-small container-small">
                  <div className="n12_legal-content_outer">
                    <div className="n12_legal-content_component legal-content_component">
                      <div className="n12_blog-rich-text blog-rich-text n12_w-richtext w-richtext">
                        <p>
                          <strong>Stanford, California, July 30th, 2024 </strong>
                          - 0G Foundation, in collaboration with One Piece Labs,
                          is excited to announce the launch of our inaugural
                          incubation program.
                        </p>
                        <p>
                          This program is aimed at identifying talented founders
                          across various industries and providing them with
                          valuable technological unlocks via seamless
                          integration of 0G.ai’s DA, data storage, or
                          decentralized serving layer.&nbsp; This initiative is
                          designed to provide strategic support, resources, and
                          mentorship to promising startups in the Web3 and AI
                          space, Gaming, DeFI, dePIN, deStorage, and deCompute
                          sectors.
                        </p>
                        <h2>
                          <strong>Rationale Behind the Incubation Program</strong>
                        </h2>
                        <p>
                          Founders at various stages of their company life cycle
                          can benefit from different levels of support.
                          Early-stage founders can benefit from networking to
                          find compatible teams, funding to turn an idea into a
                          demonstrable MVP, and then developer tooling to build
                          out the actual product. Middle-late-stage founders can
                          also benefit from add-on funding but may be more
                          focused on community building and performance metrics
                          such as DAU, MAU, ARR, etc. Late-stage companies with
                          sufficiently large communities can benefit from
                          technology that helps their business scale with
                          minimal incremental customer acquisition costs (CAC)
                          or to craft a compelling TGE plan.&nbsp;
                        </p>
                        <p>
                          0G foundation can provide strategic support in each of
                          the above-mentioned domains at any stage of a project’s
                          life cycle.
                        </p>
                        <p>
                          This incubator program, co-hosted by OPL, can provide
                          resources, mentorship, co-founder matchmaking,
                          technological support, community building, strong
                          co-marketing, and investor introductions.
                        </p>
                        <p>
                          0G also aims to leverage its advanced infrastructure
                          and extensive network to drive transformative
                          developments in existing Web3 and AI companies that
                          may require high-performance DA with low latency, low
                          data storage costs, and decentralized inference via a
                          serving layer.
                        </p>
                        <p>
                          “Launching this incubator program is a strategic move
                          to strengthen our ecosystem and support groundbreaking
                          projects that can push the boundaries of Web3 and AI,”
                          said Michael, Advisor to 0G foundation and co-founder
                          of Zero Gravity Labs. “We are committed to providing
                          startups with the tools and mentorship they need to
                          overcome challenges and scale rapidly, fostering a
                          collaborative environment that drives collective
                          success.”
                        </p>
                        <h2>
                          <strong>Promises of the 0G Accelerator Program</strong>
                        </h2>
                        <ol role="list">
                          <li>
                            Resource Allocation: Startups will gain access to
                            funding, cutting-edge technology, and development
                            tools essential for their growth.
                          </li>
                          <li>
                            Mentorship and Guidance: Expert advice and
                            mentorship from industry leaders and successful
                            entrepreneurs will help overcome challenges and
                            seize opportunities.
                          </li>
                          <li>
                            Technical Support: Robust technical support from
                            0G’s team will ensure seamless integration with our
                            infrastructure and effective utilization of our
                            tools.
                          </li>
                          <li>
                            Community Building: Facilitating connections and
                            collaborations within the 0G ecosystem to create a
                            supportive and innovative community.
                          </li>
                          <li>
                            Market Exposure: Providing visibility and exposure
                            through our network and marketing channels, helping
                            projects reach a broader audience.
                          </li>
                        </ol>
                        <h2>
                          <strong>About 0G Foundation</strong>
                        </h2>
                        <p>
                          0G Foundation was established to promote the growth,
                          development and security of 0G, a decentralized
                          ecosystem. The 0G ecosystem is based around the
                          fastest modular AI chain: the infrastructure for fully
                          onchain AI via the fastest programmable DA, storage,
                          and verifiable AI serving framework. The protocol
                          design enables speeds of up to 50GB/s per consensus
                          layer enough to enable fully onchain LLM training.
                        </p>
                        <h2>
                          <strong>About OnePiece Labs</strong>
                        </h2>
                        <p>
                          Based in Silicon Valley, OnePiece Labs is a pioneering
                          incubator and seed funding organization dedicated to
                          empowering visionary founders in shaping the
                          decentralized Web3 ecosystem. We believe in the
                          transformative potential of blockchain technology and
                          decentralized applications (dApps) to revolutionize
                          industries and empower individuals globally.
                        </p>
                        <h2>
                          <strong>Our First 0G Accelerator Cohort 🚀</strong>
                        </h2>
                        <p>
                          🌟 <strong>Company</strong>: CARV
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: Modular data layer
                          for gaming and AI, sharing data value with the
                          industry and individuals.
                        </p>
                        <p>
                          👥 <strong>Team</strong>:{' '}
                          <a href="https://www.linkedin.com/in/clo-g-8b992b5b/">
                            Chloe Gu
                          </a>
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: CARV Protocol is a modular
                          data layer for gaming and AI, revolutionizing how data
                          is used and shared by ensuring privacy, ownership, and
                          control are firmly in the hands of individuals,
                          pioneering a future where data generates value for
                          all.
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: 750+ games &amp; AI
                          companies, or 2.5M+ registered players, $1M monthly
                          recurring revenue.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Raised $50+ million.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: Cygnus Finance
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: The first modular
                          real yield layer, combining non-EVM systems with EVM
                          ecosystem.
                        </p>
                        <p>
                          👥 <strong>Founder</strong>:{' '}
                          <a href="https://www.linkedin.com/in/eric-cheung-b78292130/">
                            Eric Cheung
                          </a>
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: As the end game of real
                          yield, Cygnus EVM-compatible ZK rollup combines non-EVM
                          systems such as TON with EVM ecosystem. Its
                          yield-bearing Liquidity Validation System will help
                          7B+ people acquire digital assets and provide services
                          for any system that requires its own distributed
                          validation semantics for verification.
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: Backed by OKX Ventures,
                          Franklin Templeton, Optimism Foundation retro funding.
                          TVL $50M+. Users 100K+ .
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Raising $15 million
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: Polyverse AI
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: Revolutionizing AI
                          data and privacy computing with Zero-trust PET and
                          FHE.
                        </p>
                        <p>
                          👥 <strong>Team</strong>: AI technologists from Meta,
                          OpenAI, Google, backed by NVIDIA, Microsoft
                          Accelerator.
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: Polyverse AI is at the
                          forefront of revolutionizing AI data and privacy
                          computing (FHE) through its innovative Zero-Trust AI
                          Data Engine and decentralized AI Data Marketplace.
                          Specializing in the application of cutting-edge
                          technologies such as Fully Homomorphic Encryption
                          (FHE), PET (privacy-enhancing technology) Polyverse AI
                          enables secure, privacy-preserving data training,
                          transactions and computations. Serving a diverse
                          clientele ranging from large corporations to research
                          institutions, the company facilitates the safe
                          exchange and monetization of data while ensuring
                          compliance with global data protection regulations.
                          Through its platform, Polyverse AI empowers the
                          development of robust AI applications across multiple
                          industries, setting new standards for AI data
                          confidentiality and utility in the digital age.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Raising $8 million.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: 0xKnowledge
                        </p>
                        <p>
                          🔍<strong> What it does</strong>: Building the world’s
                          first AI-augmented, Web3-native documentation platform
                          and personalized AI assistants.
                        </p>
                        <p>
                          👥 <strong>Founder</strong>:{' '}
                          <a href="https://www.linkedin.com/in/joshua-sum/">
                            Joshua Sum
                          </a>
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: 0xKnowledge is spearheading
                          the integration of AI and blockchain to create a
                          self-maintaining knowledge base management system.
                          This platform aims to streamline knowledge capture
                          across various sources, enabling the creation of
                          personalized AI assistants for every employee. This
                          addresses critical inefficiencies in unifying data and
                          documentation, transforming how knowledge is accessed,
                          utilized and shared across industries.
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: Secured 5 customers and
                          2 distribution partners
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Raising seed.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: DataHive
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: Layer 2 for
                          user-owned AI operating on user-owned data.
                        </p>
                        <p>
                          👥 <strong>Founder</strong>:{' '}
                          <a href="https://www.linkedin.com/in/raygill/">
                            Ray Gill
                          </a>
                          &nbsp;
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: $150K booked revenue and
                          launching with 1+ million users.
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: DataHive is building the
                          first AI Data Asset Layer 2, decentralizing AI data
                          access by connecting data publishers with data
                          consumers in a decentralized network and marketplace.
                          We are paving the way for a decentralized AI future
                          where user-owned AI is created and controlled from the
                          bottom up, relying on verified real-time and
                          real-world data.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Raised pre-seed; raising
                          seed.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: Heph
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: AI model training
                          and quality assurance platform using a global
                          workforce of &gt;174K data labelers.
                        </p>
                        <p>
                          👥 <strong>Founders</strong>:{' '}
                          <a href="https://www.linkedin.com/in/andreasschemm/">
                            Andreas Schemm
                          </a>
                          ,{' '}
                          <a href="https://www.linkedin.com/in/marius-hamacher-64b025280/">
                            Marius Hamacher
                          </a>
                          ,{' '}
                          <a href="https://www.linkedin.com/in/willsmercer/">
                            Will Mercer&nbsp;
                          </a>
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: 2.5Bn data points labeled
                          with &gt;97% accuracy.
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: Heph AI is pioneering the
                          intersection of AI and blockchain by providing data
                          labeling as well as AI model training and quality
                          assurance services. Utilizing a global workforce of
                          &gt;174,000 data labelers, Heph AI offers a hybrid
                          Human/Machine labeling approach that is significantly
                          more cost-effective and faster than traditional
                          services.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: $2 million.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: Infinity Ground
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: AI-native gaming
                          Appchain powered by SVM Rollup, providing modular
                          tools for AI gaming development.
                        </p>
                        <p>
                          👥 <strong>Founder</strong>:{' '}
                          <a href="https://www.linkedin.com/in/lanxue-zhang-88637ab7/">
                            Lani Zhang
                          </a>
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: Onboarded 5 games and 4
                          movie IPs for interactive AI movies in less than 1
                          month.
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: Infinity Ground is the
                          first AI-native Gaming Appchain powered by SVM Rollup.
                          We provide modular tools, such as RAG Engine, Creator
                          Copilot, and Model Router, to make AI gaming
                          development easier and form a unified ecosystem to
                          reduce fragments for individual AI games. Also, we
                          provide the best AI gaming experience while keeping
                          the benefits of decentralization and transparency of
                          Blockchain.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Angel round raised $200K+,
                          seed round in progress.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: MetaPals
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: Integrating digital
                          companions into daily lives through custom-built
                          overlay technology.
                        </p>
                        <p>
                          📈 <strong>Traction</strong>: 55K+ users, high
                          retention rates, successful NFT launches.
                        </p>
                        <p>
                          👥 <strong>Founders</strong>:{' '}
                          <a href="https://www.linkedin.com/in/maxgiammario/">
                            Max Giammario
                          </a>
                          ,{' '}
                          <a href="https://www.linkedin.com/in/lingga-pradipta-froitzheim-65223911b/">
                            Lingga Pradipta
                          </a>
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: MetaPals is pioneering a
                          new era of digital companionship by seamlessly
                          integrating AI and blockchain through a browser
                          extension game engine. These companions exist as
                          browser overlays rather than standalone apps, making
                          them seamlessly accessible. Through innovative use of
                          AI and blockchain, MetaPals offers personalized,
                          gamified AI companions that learn from user
                          interactions and form deep emotional bonds with users,
                          making digital interactions more meaningful.
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: $1 million.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          🌟 <strong>Company</strong>: Fractopus
                        </p>
                        <p>
                          🔍 <strong>What it does</strong>: Fractopus protocol
                          connects content on the internet into a peer-to-peer
                          revenue-sharing network.
                        </p>
                        <p>
                          👥 <strong>Founders</strong>:{' '}
                          <a href="https://www.linkedin.com/in/handuo-zhang-164a7893/">
                            Handuo Zhang
                          </a>
                          ,{' '}
                          <a href="https://www.linkedin.com/in/chao-chao-sound/">
                            Chao Chao
                          </a>
                          ,{' '}
                          <a href="https://github.com/JohnZhu1982">John Zhu</a>
                        </p>
                        <p>
                          💡 <strong>Pitch</strong>: Content on the internet is
                          disconnected. It is either gated by centralized
                          platforms or struggling to get revenue &amp; exposure.
                          The Fractopus protocol solves this problem by having
                          content connect with each other into a peer-to-peer
                          revenue &amp; exposure-sharing network.&nbsp;
                        </p>
                        <p>
                          Fractopus is getting a solid product-market fit by
                          enabling the monetization of AI-generated content. Its
                          partners include ComfyUI (10m users) and WaytoAGI
                          (800k members),
                        </p>
                        <p>
                          💸 <strong>Stage</strong>: Angel round raised $380K,
                          Pre-seed round in progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          <section className="n12_section_filter section_filter">
            <div className="n12_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>
 
          <div className="n12_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n12_cms-grid_list cms-grid_list n12_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n12_cms-grid_item1 cms-grid_item n12_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n12_cms-grid_content-wrapper1 cms-grid_content-wrapper n12_is-blog1 is-blog n12_w-inline-block1 w-inline-block"
                >
                  <div className="n12_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n12_cms-grid_image1 cms-grid_image"
                    />
                    <div className="n12_spacer-medium1 spacer-medium n12_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="n12_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="n12_blog_meta-wrapper2 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n12_related_category1"
                        >
                          News
                        </div>
                        <div className="n12_icon-embed-custom3 icon-embed-custom n12_w-embed6 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 4 4"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="n12_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n12_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="n12_heading-style-h51 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n12_cms-grid_item2 cms-grid_item n12_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n12_cms-grid_content-wrapper2 cms-grid_content-wrapper n12_is-blog2 is-blog n12_w-inline-block2 w-inline-block"
                >
                  <div className="n12_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n12_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n12_spacer-medium2 spacer-medium n12_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n12_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n12_blog_meta-wrapper3 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n12_related_category2"
                        >
                          News
                        </div>
                        <div className="n12_icon-embed-custom4 icon-embed-custom n12_w-embed7 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 4 4"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="n12_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n12_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n12_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n12_cms-grid_item3 cms-grid_item n12_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n12_cms-grid_content-wrapper3 cms-grid_content-wrapper n12_is-blog3 is-blog n12_w-inline-block3 w-inline-block"
                >
                  <div className="n12_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n12_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n12_spacer-medium3 spacer-medium n12_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n12_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n12_blog_meta-wrapper4 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n12_related_category3"
                        >
                          News
                        </div>
                        <div className="n12_icon-embed-custom5 icon-embed-custom n12_w-embed8 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 4 4"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="n12_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n12_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n12_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n12_cms-grid_item4 cms-grid_item n12_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n12_cms-grid_content-wrapper4 cms-grid_content-wrapper n12_is-blog4 is-blog n12_w-inline-block4 w-inline-block"
                >
                  <div className="n12_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n12_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n12_spacer-medium4 spacer-medium n12_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n12_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n12_blog_meta-wrapper5 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n12_related_category4"
                        >
                          News
                        </div>
                        <div className="n12_icon-embed-custom6 icon-embed-custom n12_w-embed9 w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 4 4"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                            role="img"
                          >
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="n12_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n12_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n12_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
 
        <div className={`n12_copy-toast ${showToast ? 'n12_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
