import React, { useState } from 'react'
import './Industry01.css'

export default function Industry01() {
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
      '0G Launches $88.88M Ecosystem Program to Accelerate AI Apps on 0G'
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
    <div className="i01_container">
      <div className="i01_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="i01_hide hide">
          <div className="i01_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="i01_socialshare-title">
            0G Launches $88.88M Ecosystem Program to Accelerate AI Apps on 0G
          </div>
        </div>

        <main className="i01_main-wrapper main-wrapper">
          <section className="i01_section_hero section_hero i01_is-vertical is-vertical">
            <div className="i01_padding-global padding-global">
              <div className="i01_container-large container-large">
                <div className="i01_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="i01_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="i01_hero_bg-image hero_bg-image i01_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="i01_hero_bg-gradient hero_bg-gradient i01_is-blog is-blog"></div>
                </div>

                <div className="i01_hero_content-component hero_content-component i01_is-vertical is-vertical">
                  <div className="i01_blog_meta-wrapper blog_meta-wrapper i01_is-white is-white">
                    <div className="i01_blog_meta-date">Feb 5, 2025</div>
                    <div className="i01_icon-embed-custom icon-embed-custom i01_w-embed w-embed">
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
                    <div className="i01_blog_meta-category">Industry</div>
                  </div>

                  <div className="i01_spacer-small spacer-small"></div>

                  <div className="i01_max-width-large max-width-large i01_text-align-center text-align-center">
                    <h1 className="i01_heading-style-h3 heading-style-h3">
                      0G Launches $88.88M Ecosystem Program to Accelerate AI Apps
                      on 0G
                    </h1>
                  </div>

                  <div className="i01_spacer-small spacer-small"></div>

                  <div className="i01_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="i01_link-icon-light link-icon-light i01_is-static is-static i01_w-inline-block w-inline-block"
                    >
                      <div className="i01_icon-embed-xsmall icon-embed-xsmall i01_w-embed w-embed">
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
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      href="#"
                      className="i01_link-icon-light link-icon-light i01_is-static is-static i01_w-inline-block w-inline-block"
                    >
                      <div className="i01_icon-embed-xsmall icon-embed-xsmall i01_w-embed w-embed">
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
                      onClick={(e) => handleSocialShare('x', e)}
                      href="#"
                      className="i01_link-icon-light link-icon-light i01_is-static is-static i01_w-inline-block w-inline-block"
                    >
                      <div className="i01_icon-embed-xsmall icon-embed-xsmall i01_w-embed w-embed">
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

          <section className="i01_section_legal-content section_legal-content">
            <div className="i01_padding-global padding-global">
              <div className="i01_padding-section-medium padding-section-medium">
                <div className="i01_container-small container-small">
                  <div className="i01_legal-content_outer">
                    <div className="i01_legal-content_component legal-content_component">
                      <div className="i01_blog-rich-text blog-rich-text i01_w-richtext w-richtext">
                        <p>
                          The 0G Foundation is pleased to announce the launch of
                          an $88.88M Ecosystem Growth Program designed to
                          accelerate the development of decentralized AI agents
                          and high-performance dApps within the 0G network. With
                          backing from leading investors and ecosystem partners,
                          the program will provide grants, technical guidance,
                          and liquidity strategies to projects pioneering
                          decentralized AI solutions.
                        </p>
                        <p>
                          As a one-stop platform for decentralized AI,
                          combining compute, storage, data availability, and a
                          service marketplace, 0G dramatically reduces the
                          friction of building and scaling AI-native
                          applications.
                        </p>
                        <h2>Powering the Next Generation of AI</h2>
                        <p>
                          As the first Artificial Intelligence Layer (AIL), 0G
                          is pioneering{' '}
                          <a href="https://0g.ai/blog/navigating-0g-s-tech-an-update-on-the-latest-in-0g-s-products">
                            agentic creation
                          </a>{' '}
                          to build the foundation for an AI-powered future
                          where autonomous agents operate in an open, modular,
                          and trustless environment. This program is a major
                          step toward realizing our vision of infinite AI,
                          providing resources to developers and innovators
                          building DeFAI (Decentralized Finance/AI)
                          applications, AI-driven data marketplaces, governance
                          tools, and more.
                        </p>
                        <p>
                          The $88.88M Ecosystem Program is backed by strategic
                          investors, AI Alignment{' '}
                          <a href="https://0g.ai/node-sale">node owners</a>, and
                          treasury commitments from the 0G Foundation. Key
                          supporters include{' '}
                          <a href="https://www.hack.vc/">Hack VC</a>,{' '}
                          <a href="https://delphiventures.io/">
                            Delphi Ventures
                          </a>
                          ,{' '}
                          <a href="https://www.bankless.ventures/">
                            Bankless Ventures
                          </a>
                          , and{' '}
                          <a href="https://www.okx.com/en-us/ventures">
                            OKX Ventures
                          </a>
                          , demonstrating strong alignment between the worlds
                          of web3, AI, and decentralized infrastructure.
                        </p>
                        <p>
                          Beyond funding innovation, the 0G Ecosystem Program
                          is a key step in ensuring that AI remains decentralized
                          and modular and serves as a public good rather than
                          being controlled by centralized entities.
                        </p>
                        <h2>Funding Criteria: Who Can Apply?</h2>
                        <p>
                          The 0G Ecosystem Program is open to developers,
                          startups, and researchers working at the intersection
                          of AI and web3. Funding will be distributed through
                          grants, liquidity strategies, and other forms of
                          investment, with priority given to projects that are:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Purpose-driven</strong>: AI-powered
                            applications tackling real-world challenges in
                            areas such as climate change, automation,
                            healthcare, supply chain, privacy, security, and
                            education.
                          </li>
                          <li>
                            <strong>Scalable &amp; practical</strong>: Solutions
                            that can be effectively implemented, scaled, and
                            adopted.
                          </li>
                          <li>
                            <strong>Fit within the 0G ecosystem</strong>:
                            Projects that strengthen and expand the 0G AI
                            ecosystem.
                          </li>
                          <li>
                            <strong>Are interoperable</strong>: Leveraging 0G’s
                            modular AI infrastructure to ensure seamless
                            cross-chain compatibility.
                          </li>
                          <li>
                            <strong>Sustainable in the long run</strong>:
                            Showcase a clear roadmap and commitment to
                            continuous innovation.
                          </li>
                        </ul>
                        <p>
                          In terms of 0G ecosystem priorities, the program is
                          open to a diverse range of AI-powered applications,
                          but some categories that are particularly well-suited
                          for funding include DeFi and social apps built with AI
                          agents, onchain data marketplaces, AI-driven gaming
                          and metaverse solutions, general AI infrastructure,
                          and governance protocols.
                        </p>
                        <p>
                          The 0G Foundation also encourages interdisciplinary
                          projects that integrate AI, web3, and traditional
                          industries, reflecting its mission to drive adoption
                          beyond blockchain-native applications.
                        </p>
                        <h2>Get Started Immediately: Introducing the Guild on 0G</h2>
                        <p>
                          Want to start building on 0G today? As part of this
                          initiative, the 0G Foundation is also launching the
                          Guild on 0G, an $8.88M accelerator program designed to
                          help early-stage builders take their AI-powered dApps
                          from testnet to mainnet.
                        </p>
                        <p>
                          <a href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/">
                            <strong>Join the Guild on 0G</strong>
                          </a>
                        </p>
                        <p>
                          The Guild will provide grants, prizes, and gas credits
                          to support projects actively developing decentralized
                          AI applications within the 0G ecosystem. By mobilizing
                          builders, creators, and developers, the Guild will
                          play a crucial role in expanding the 0G network’s
                          adoption and ensuring that promising AI applications
                          launch successfully on mainnet.
                        </p>
                        <p>Projects that successfully apply to the Guild on 0G will receive:</p>
                        <ul role="list">
                          <li>Dedicated grants &amp; funding for AI-powered dApps.</li>
                          <li>Gas credits to help scale AI workloads efficiently.</li>
                          <li>Technical &amp; marketing support to fast-track adoption.</li>
                        </ul>
                        <p>
                          In other words, the $88.88M Ecosystem Program is a
                          long-term investment in the future of decentralized
                          AI, targeting projects with scalable and practical
                          solutions. In contrast, the $8.88M Guild on 0G
                          accelerator focuses on immediate traction, supporting
                          early-stage builders ready to take their AI-powered
                          dApps from testnet to mainnet.
                        </p>
                        <h2>Building the DeAI Future</h2>
                        <p>
                          This $88.88M Ecosystem Program is one of the largest
                          web3 initiatives dedicated to advancing AI agent
                          development. It follows the successful $33M{' '}
                          <a href="https://0g.ai/blog/0g-node-sale-results">
                            AI Alignment Node Sale
                          </a>
                          , which laid the groundwork for the world’s first
                          decentralized AI Operating System by distributing over
                          92,000 alignment nodes globally.
                        </p>
                        <p>
                          Beyond funding, projects accepted into the Ecosystem
                          Program will gain access to technical resources,
                          integration support, and potential participation in
                          0G’s accelerator program. This ensures that developers
                          are equipped with everything they need to build and
                          scale impactful AI-driven applications.
                        </p>
                        <p>
                          More details on the application process and fund
                          distribution will be released in the coming weeks.
                          Developers interested in joining the 0G Ecosystem
                          Program can start by visiting{' '}
                          <a href="http://0G.ai" target="_blank" rel="noreferrer">
                            0G.ai
                          </a>{' '}
                          and engaging with the community on{' '}
                          <a
                            href="https://discord.com/invite/0glabs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Discord
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="i01_section_filter section_filter">
            <div className="i01_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="i01_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="i01_cms-grid_list cms-grid_list i01_w-dyn-items w-dyn-items"
            >
              <div role="listitem" className="i01_cms-grid_item cms-grid_item i01_w-dyn-item w-dyn-item">
                <a
                  href="/blog/0g-origin-story"
                  className="i01_cms-grid_content-wrapper cms-grid_content-wrapper i01_is-blog is-blog i01_w-inline-block w-inline-block"
                >
                  <div className="i01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682127048db2a15bce078551_PJXpESYIRq7OTB3DRaoo2q18ds.avif"
                      loading="lazy"
                      alt=""
                      className="i01_cms-grid_image cms-grid_image"
                    />
                    <div className="i01_spacer-medium spacer-medium i01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="i01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="i01_blog_meta-wrapper blog_meta-wrapper">
                        <div fs-list-field="category">Industry</div>
                        <div className="i01_icon-embed-custom icon-embed-custom i01_w-embed w-embed">
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
                        <div>Mar 26, 2024</div>
                      </div>
                      <div className="i01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="i01_heading-style-h5 heading-style-h5">0G Origin Story</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i01_cms-grid_item cms-grid_item i01_w-dyn-item w-dyn-item">
                <a
                  href="/blog/navigate-web3-s-future-with-0g-key-concepts-and-innovations"
                  className="i01_cms-grid_content-wrapper cms-grid_content-wrapper i01_is-blog is-blog i01_w-inline-block w-inline-block"
                >
                  <div className="i01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270465373596cc2f25ed_fo6W7M9bmWAcIxuu8BG3SGCj5Q.avif"
                      loading="lazy"
                      alt=""
                      className="i01_cms-grid_image cms-grid_image"
                    />
                    <div className="i01_spacer-medium spacer-medium i01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="i01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="i01_blog_meta-wrapper blog_meta-wrapper">
                        <div fs-list-field="category">Industry</div>
                        <div className="i01_icon-embed-custom icon-embed-custom i01_w-embed w-embed">
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
                        <div>Apr 8, 2024</div>
                      </div>
                      <div className="i01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="i01_heading-style-h5 heading-style-h5">
                        Navigate Web3&apos;s Future with 0G: Key Concepts and Innovations
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i01_cms-grid_item cms-grid_item i01_w-dyn-item w-dyn-item">
                <a
                  href="/blog/6-emerging-key-trends-in-blockchain-technology"
                  className="i01_cms-grid_content-wrapper cms-grid_content-wrapper i01_is-blog is-blog i01_w-inline-block w-inline-block"
                >
                  <div className="i01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ff65373596cc2f2108_pgOLkOIAwPqcTVVofD35xrLYQ.avif"
                      loading="lazy"
                      alt=""
                      className="i01_cms-grid_image cms-grid_image"
                    />
                    <div className="i01_spacer-medium spacer-medium i01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="i01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="i01_blog_meta-wrapper blog_meta-wrapper">
                        <div fs-list-field="category">Industry</div>
                        <div className="i01_icon-embed-custom icon-embed-custom i01_w-embed w-embed">
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
                        <div>May 23, 2024</div>
                      </div>
                      <div className="i01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="i01_heading-style-h5 heading-style-h5">
                        6 Emerging Key Trends in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i01_cms-grid_item cms-grid_item i01_w-dyn-item w-dyn-item">
                <a
                  href="/blog/the-comprehensive-guide-to-data-availability-in-blockchain-technology"
                  className="i01_cms-grid_content-wrapper cms-grid_content-wrapper i01_is-blog is-blog i01_w-inline-block w-inline-block"
                >
                  <div className="i01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fe2d09deedb577d993_JUdhw2M9qC3h30iV8tWNNsPJgA.avif"
                      loading="lazy"
                      alt=""
                      className="i01_cms-grid_image cms-grid_image"
                    />
                    <div className="i01_spacer-medium spacer-medium i01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="i01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="i01_blog_meta-wrapper blog_meta-wrapper">
                        <div fs-list-field="category">Industry</div>
                        <div className="i01_icon-embed-custom icon-embed-custom i01_w-embed w-embed">
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
                        <div>Jun 6, 2024</div>
                      </div>
                      <div className="i01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="i01_heading-style-h5 heading-style-h5">
                        The Comprehensive Guide to Data Availability in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`i01_copy-toast ${showToast ? 'i01_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

