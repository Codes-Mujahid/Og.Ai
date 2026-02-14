import React, { useEffect, useState } from 'react'
import './Tech33.css'

export default function Tech33() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t33-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t33-webflow', 'true')
    document.head.appendChild(link)

    return () => {
      link.remove()
    }
  }, [])

  const copyToClipboard = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', 'true')
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  const handleCopy = async (e) => {
    e.preventDefault()
    const url = window.location.href

    try {
      await copyToClipboard(url)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    } catch {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    }
  }

  const handleSocialShare = (platform, e) => {
    e.preventDefault()
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(
      'Check out this insightful blog post: 0G’s 2024 in Review: Building the Future of Decentralized AI'
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
    <div className="t33_container">
      <div className={`t33_copy-toast ${showToast ? 't33_show' : ''}`}>Link copied</div>

      <div className="t33_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t33_div002 hide">
          <div className="t33_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t33_div004">0G’s 2024 in Review: Building the Future of Decentralized AI</div>
        </div>

        <main className="t33_main-wrapper main-wrapper">
          <section className="t33_section_hero section_hero is-vertical">
            <div className="t33_div005 padding-global">
              <div className="t33_div006 container-large">
                <div className="t33_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t33_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t33_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t33_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t33_div008 hero_content-component is-vertical">
                  <div className="t33_div009 blog_meta-wrapper is-white">
                    <div className="t33_div010">Tech</div>
                    <div className="t33_div011 icon-embed-custom w-embed">
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
                    <div className="t33_div012">Dec 31, 2024</div>
                    <div className="t33_div013 icon-embed-custom w-embed">
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
                    <div className="t33_div014">0g</div>
                  </div>

                  <div className="t33_div015 spacer-small"></div>

                  <div className="t33_div016 max-width-large text-align-center">
                    <h1 className="t33_heading heading-style-h3">
                      0G’s 2024 in Review: Building the Future of Decentralized AI
                    </h1>
                  </div>

                  <div className="t33_div017 spacer-small"></div>

                  <div className="t33_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t33_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t33_div019 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      className="t33_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t33_div020 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('x', e)}
                      className="t33_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t33_div021 icon-embed-xsmall w-embed">
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

          <section className="t33_section_legal-content section_legal-content">
            <div className="t33_div022 padding-global">
              <div className="t33_div023 padding-section-medium">
                <div className="t33_div024 container-small">
                  <div className="t33_div025">
                    <div className="t33_div026 legal-content_component">
                      <div className="t33_div027 blog-rich-text w-richtext">
                        <p>
                          2024 has been a transformative year for 0G as we have established ourselves as a leader in
                          decentralized AI space.&nbsp;
                        </p>
                        <p>
                          From launching groundbreaking products to securing significant funding, hosting hackathons,
                          and forming partnerships across key Web3 verticals, we’ve taken major steps toward realizing
                          our vision of a decentralized AI operating system (deAIOS).
                        </p>
                        <p>As the year comes to a close, we’re thrilled to share the highlights of our progress, including:</p>
                        <ul role="list">
                          <li>
                            <strong>Node Sale Success:</strong> Over 83,000 nodes sold, raising $30M and onboarding
                            6,000+ unique wallets.
                          </li>
                          <li>
                            <strong>Game-Changing Product Launches:</strong> Introducing the 0G Service Marketplace, 0G
                            Compute Network, and 0G Serving.
                          </li>
                          <li>
                            <strong>Major Fundraising Milestones:</strong> Securing $325M across pre-seed, seed, etc to
                            build the 0G ecosystem.&nbsp;
                          </li>
                          <li>
                            <strong>Expanding Our Ecosystem:</strong> Integrating with over 155+ partners across gaming,
                            DePIN, AI, and more.
                          </li>
                          <li>
                            <strong>Global Presence:</strong> Participating in over 100 events and hosting 3 hackathons
                            to inspire innovation.
                          </li>
                        </ul>
                        <p>
                          In this year-end review, we’ll dive deeper into each of these achievements and share what’s
                          next for 0G in 2025. Let’s celebrate how far we’ve come—and the exciting journey ahead!
                        </p>
                        <h3>
                          <strong>Node Sale: Powering Decentralized AI</strong>
                        </h3>
                        <p>This year’s node sale demonstrated the massive demand for 0G’s decentralized AI infrastructure:</p>
                        <ul role="list">
                          <li>
                            <strong>80,000+ Nodes Sold</strong>: Supporting global decentralized AI operations.
                          </li>
                          <li>
                            <strong>$30M Raised</strong>: From over 6,000 unique wallets, showcasing our widespread
                            adoption.
                          </li>
                          <li>
                            <strong>18 Launchpads</strong>: Amplifying accessibility and visibility across Web3.
                          </li>
                          <li>
                            <strong>8 one-click node service providers.</strong>
                          </li>
                        </ul>
                        <p>
                          <strong>New Products</strong>
                        </p>
                        <p>On top of 0G Storage and 0G DA, 0G Labs also introduced other game-changing products this year.</p>
                        <p>These include:</p>
                        <ul role="list">
                          <li>
                            <strong>0G Service Marketplace</strong>: A platform to access and host AI services like
                            inference, datasets, and models.
                          </li>
                          <li>
                            <strong>0G Compute Network</strong>: Connecting developers with decentralized GPU resources
                            for training and inference.
                          </li>
                          <li>
                            <strong>0G Serving</strong>: Offering seamless solutions for deploying AI models on-chain.
                          </li>
                        </ul>
                        <p>
                          To learn more about 0G Service and 0G Compute, please refer to{' '}
                          <a href="https://0g.ai/blog/0g-demo-a-technical-walkthrough">this guide and walkthrough.&nbsp;</a>
                        </p>
                        <p>
                          To go in-depth on 0G Service,{' '}
                          <a href="https://0g.ai/blog/0g-serving">refer to this blog post.</a>
                        </p>
                        <h3>
                          <strong>Fundraising</strong>
                        </h3>
                        <p>2024 saw 0G secure significant funding to scale our ecosystem:</p>
                        <ul role="list">
                          <li>
                            <a href="https://0g.ai/blog/pre-seed-announcement">
                              <strong>$35M Pre-Seed</strong>
                            </a>
                            : To launch the foundational layers of our deAIOS.
                          </li>
                          <li>
                            <a href="https://0g.ai/blog/0g-ecosystem-receives-290m-in-financing-to-develop-world-s-first-decentralized-ai-operating-system">
                              <strong>$40M Seed Round &amp; $250M Liquid Line</strong>
                            </a>
                            : A $40M seed round led by top VCs, including Hack VC, Delphi Ventures, and Animoca, as well
                            as a $250M liquid line, ensuring access to liquidity for ecosystem development and
                            long-term sustainability.&nbsp;
                          </li>
                          <li>
                            <a href="https://0g.ai/blog/0g-node-sale-results">
                              <strong>$30M Node Sale:</strong>
                            </a>
                            &nbsp; Covered above, but entailing 80,000+ nodes sold through 18 launchpads, raising $28M
                            from 6,000+ unique wallets.&nbsp;
                          </li>
                        </ul>
                        <h3>
                          <strong>0G Foundation Launch</strong>
                        </h3>
                        <p>
                          2024 also marked the launch of the 0G Foundation, an independent organization dedicated to
                          advancing decentralized AI as a public good.
                        </p>
                        <p>The foundation’s core mission is to:</p>
                        <ul role="list">
                          <li>
                            <strong>Promote Decentralized AI Research</strong>: Supporting scalable AI alignment
                            technologies and decentralized systems to safeguard the integrity of AI processes and data.
                          </li>
                          <li>
                            <strong>Foster Community Engagement</strong>: Organizing events, educational programs, and
                            training to empower developers, node operators, and contributors.
                          </li>
                          <li>
                            <strong>Fund Ecosystem Growth</strong>: Offering grants, acceleration programs, and funding
                            for innovative open-source projects leveraging the 0G network.
                          </li>
                          <li>
                            <strong>Champion Ethical AI Practices</strong>: Collaborating with policymakers,
                            organizations, and advocacy groups to prioritize transparency, fairness, and auditability in
                            AI systems.
                          </li>
                        </ul>
                        <p>
                          The foundation is supported by an exceptional team, including 8 PhDs from top institutions
                          like MIT, Stanford, and Tsinghua, alongside leading entrepreneurs and technologists from
                          companies like Airbnb, Amazon, Avalanche, and Microsoft.
                        </p>
                        <h3>
                          <strong>100+ Industry-Leading Partnerships</strong>
                        </h3>
                        <p>
                          In 2024 alone, 0G has integrated 100+ partners, with many more that will be announced shortly.
                          These projects include leaders across nearly every Web3 vertical.
                        </p>
                        <p>To name just a few:</p>
                        <ul role="list">
                          <li>
                            <strong>Gaming: </strong>
                            This vertical focuses on enabling immersive, decentralized gaming experiences through
                            secure asset storage, scalable data availability, and AI-powered mechanics. Partners include{' '}
                            <a href="https://www.bladedao.games/">Blade Games</a>, Neon Machine (
                            <a href="https://www.shrapnel.com/">Shrapnel</a>), <a href="https://www.gaimin.io/">Gaimin</a>
                            , and more.
                          </li>
                          <li>
                            <strong>L1s, L2s, and Rollups-as-a-Service: </strong>
                            Providing foundational infrastructure for app chains and enabling builders with all-in-one
                            solutions for storage, data availability, and AI resources. Partners include AltLayer,{' '}
                            <a href="https://www.caldera.xyz/">Caldera</a>, <a href="https://www.rome.builders/">Rome Protocol</a>
                            , <a href="https://arbitrum.io/">Arbitrum</a>, <a href="https://www.optimism.io/">Optimism</a>, and more.
                          </li>
                          <li>
                            <strong>Artificial Intelligence: </strong>
                            Powering AI projects with decentralized storage, GPU compute, and seamless data
                            availability for large-scale model training, inference, and smart agents. Projects include{' '}
                            <a href="https://talus.network/">Talus</a>, <a href="https://www.bagel.net/">Bagel</a>,{' '}
                            <a href="https://www.theoriq.ai/">Theoriq</a>, and more.&nbsp;
                          </li>
                          <li>
                            <strong>DePIN: </strong>
                            Bridging real-world data with on-chain applications through secure storage, communication,
                            and scalable computational resources. Partners include <a href="https://iotex.io/">IoTeX</a>,{' '}
                            <a href="https://mizu.global/">Mizu</a>, <a href="https://hyperbolic.xyz/">Hyperbolic</a>, and more.
                          </li>
                        </ul>
                        <p>
                          While we provided an<a href="https://0g.ai/blog/the-0g-ecosystem-a-comprehensive-overview"> ecosystem overview back in August</a>, the landscape has expanded dramatically since then.&nbsp;
                        </p>
                        <p>An updated 2024 Year-End Ecosystem Report will be shared soon!</p>
                        <p>
                          <strong>Podcast Launch</strong>
                        </p>
                        <p>
                          This year, we launched our YouTube channel, which includes our podcast, our developer office
                          hours, and more, including guides on claiming node sale NFTs.
                        </p>
                        <p>
                          On the podcast side, we recorded 12 long-form episodes, 70 shorts shared{' '}
                          <a href="https://x.com/0G_labs">via our X</a>, and 14 medium-form videos.
                        </p>
                        <p>
                          We hosted a variety of key guests from Web3 and AI, such as executives from Mind Network,
                          Phala, Hyperbolic, and more.
                        </p>
                        <p>
                          To catch up on episodes, visit <a href="https://www.youtube.com/@0G_Labs">0G’s Official YouTube Channel</a>.
                        </p>
                        <h3>
                          <strong>Hackathons &amp; Conferences</strong>
                        </h3>
                        <p>
                          In 2024, 0G had an impactful presence at over 100 events, connecting with developers,
                          innovators, and industry leaders across the globe.
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Major Conferences:</strong> 0G participated in flagship events such as ETH Denver,
                            ETH Tokyo, ETH Brussels, Token2049 (Dubai &amp; Singapore), and Devcon, where we showcased
                            our decentralized AI infrastructure and innovative tech stack.
                          </li>
                          <li>
                            <strong>Hackathons:</strong> 0G hosted <strong>three hackathons</strong>, inspiring builders
                            to explore cutting-edge decentralized solutions leveraging 0G Storage, 0G DA, and more.
                          </li>
                        </ul>
                        <p>
                          We have many more planned for 2025, and encourage anyone keen on building with us{' '}
                          <a href="https://discord.com/invite/0glabs">to reach out.</a>
                        </p>
                        <h3>
                          <strong>What’s Next in 2025</strong>
                        </h3>
                        <p>
                          As we step into 2025, 0G is poised to deliver mainnet-ready products that redefine the
                          decentralized AI landscape. Building on the momentum of 2024, our focus remains on empowering
                          developers, enterprises, and partners with the tools they need to help us make AI a public
                          good.
                        </p>
                        <p>Here&apos;s a glimpse at what&apos;s on the horizon:</p>
                        <ul role="list">
                          <li>
                            <strong>Agent Network:</strong> This ambitious initiative aims to create a decentralized
                            ecosystem of interoperable AI agents designed to handle complex and diverse agentic AI use
                            cases.
                          </li>
                          <li>
                            <strong>Developer Onboarding:</strong> We’ll focus on building the next generation of dApps
                            on top of 0G, where we believe that there is immense potential for early builders.&nbsp;
                          </li>
                          <li>
                            <strong>New Products: </strong>
                            While we can’t share the details on these yet, we have some very exciting products and
                            services planned that will help to further decentralize AI.
                          </li>
                        </ul>
                        <p>
                          2025 is shaping up to be a landmark year for 0G as we continue pushing the boundaries of what
                          decentralized AI can achieve.
                        </p>
                        <p>
                          Interested in building with us? <a href="https://discord.com/invite/0glabs">Reach out via Discord.</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t33_section_filter section_filter">
            <div className="t33_div028 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t33_div029 w-dyn-list t33_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t33_div030 cms-grid_list w-dyn-items">
              <div role="listitem" className="t33_div031 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t33_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t33_div032 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t33_img003 cms-grid_image"
                    />
                    <div className="t33_div033 spacer-medium hide-mobile-portrait"></div>
                    <div className="t33_div034 blog_contnet-wrapper">
                      <div className="t33_div035 blog_meta-wrapper">
                        <div className="t33_div036">Tech</div>
                        <div className="t33_div037 icon-embed-custom w-embed">
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
                        <div className="t33_div038">Sep 5, 2024</div>
                      </div>
                      <div className="t33_div039 spacer-xmedium"></div>
                      <h3 className="t33_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t33_div040 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t33_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t33_div041 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t33_img004 cms-grid_image"
                    />
                    <div className="t33_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t33_div043 blog_contnet-wrapper">
                      <div className="t33_div044 blog_meta-wrapper">
                        <div className="t33_div045">Tech</div>
                        <div className="t33_div046 icon-embed-custom w-embed">
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
                        <div className="t33_div047">Aug 25, 2025</div>
                      </div>
                      <div className="t33_div048 spacer-xmedium"></div>
                      <h3 className="t33_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t33_div049 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t33_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t33_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t33_img005 cms-grid_image"
                    />
                    <div className="t33_div051 spacer-medium hide-mobile-portrait"></div>
                    <div className="t33_div052 blog_contnet-wrapper">
                      <div className="t33_div053 blog_meta-wrapper">
                        <div className="t33_div054">Tech</div>
                        <div className="t33_div055 icon-embed-custom w-embed">
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
                        <div className="t33_div056">Aug 7, 2025</div>
                      </div>
                      <div className="t33_div057 spacer-xmedium"></div>
                      <h3 className="t33_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t33_div058 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t33_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t33_div059 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t33_img006 cms-grid_image"
                    />
                    <div className="t33_div060 spacer-medium hide-mobile-portrait"></div>
                    <div className="t33_div061 blog_contnet-wrapper">
                      <div className="t33_div062 blog_meta-wrapper">
                        <div className="t33_div063">Tech</div>
                        <div className="t33_div064 icon-embed-custom w-embed">
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
                        <div className="t33_div065">Jul 3, 2025</div>
                      </div>
                      <div className="t33_div066 spacer-xmedium"></div>
                      <h3 className="t33_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

