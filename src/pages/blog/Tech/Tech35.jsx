import React, { useEffect, useState } from 'react'
import './Tech35.css'

export default function Tech35() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t35-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t35-webflow', 'true')
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
      'Check out this insightful blog post: 0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort'
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
    <div className="t35_container">
      <div className={`t35_copy-toast ${showToast ? 't35_show' : ''}`}>Link copied</div>

      <div className="t35_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t35_div002 hide">
          <div className="t35_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t35_div004">0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort</div>
        </div>

        <main className="t35_main-wrapper main-wrapper">
          <section className="t35_section_hero section_hero is-vertical">
            <div className="t35_div005 padding-global">
              <div className="t35_div006 container-large">
                <div className="t35_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t35_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t35_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t35_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t35_div008 hero_content-component is-vertical">
                  <div className="t35_div009 blog_meta-wrapper is-white">
                    <div className="t35_div010">Tech</div>
                    <div className="t35_div011 icon-embed-custom w-embed">
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
                    <div className="t35_div012">Oct 29, 2024</div>
                    <div className="t35_div013 icon-embed-custom w-embed">
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
                    <div className="t35_div014">0g</div>
                  </div>

                  <div className="t35_div015 spacer-small"></div>

                  <div className="t35_div016 max-width-large text-align-center">
                    <h1 className="t35_heading heading-style-h3">
                      0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort
                    </h1>
                  </div>

                  <div className="t35_div017 spacer-small"></div>

                  <div className="t35_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t35_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t35_div019 icon-embed-xsmall w-embed">
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
                      className="t35_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t35_div020 icon-embed-xsmall w-embed">
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
                      className="t35_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t35_div021 icon-embed-xsmall w-embed">
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

          <section className="t35_section_legal-content section_legal-content">
            <div className="t35_div022 padding-global">
              <div className="t35_div023 padding-section-medium">
                <div className="t35_div024 container-small">
                  <div className="t35_div025">
                    <div className="t35_div026 legal-content_component">
                      <div className="t35_div027 blog-rich-text w-richtext">
                        <p>
                          Cayman Islands<strong>, October 29, 2024 –</strong> 0G Foundation and OnePiece Labs have
                          announced the recruitment for the second cohort of their Web3 and AI Accelerator. The program
                          is aimed at empowering innovative AI projects that are redefining the future of decentralized
                          technology.&nbsp;
                        </p>
                        <p>
                          The Web3 and AI Accelerator offers unparalleled access to technical resources, mentorship,
                          and a global network of investor, industry experts, and 0G ecosystem projects and partners.
                          The second cohort will focus on three strategic categories – dAI apps, Middleware, and
                          Suppliers/Providers – prioritizing mid to late-stage companies with proven products and
                          significant growth potential.
                        </p>
                        <p>
                          <strong>dAI Apps</strong>: Projects developing real-world AI use cases such as specialized
                          agents, intelligent prediction markets, AI chatting and AI memes, DeFi trading, and AI
                          payments. These solutions will integrate with the 0G serving framework for AI inference via
                          APIs, enabling decentralized, high-performance applications.
                        </p>
                        <p>
                          <strong>Middleware</strong>: Projects that build on top of 0G’s decentralized AI OS, focusing
                          on the development of custom models, AI agents, fine-tuning techniques, data integration,
                          privacy and security, and coordination layers.. These projects will help optimize and enhance
                          the 0G ecosystem by improving core functionalities such as model training and data
                          processing.
                        </p>
                        <p>
                          <strong>Suppliers &amp; Providers</strong>: Data suppliers, computation/GPU networks, and
                          projects offering verifiable models (e.g. ZKML). These suppliers provide essential
                          infrastructure including differentiated data access, computational power for AI model
                          training, and enhanced&nbsp; provenance for decentralized applications.
                        </p>
                        <p>
                          The accelerator offers access to 0G’s decentralized AI infrastructure for model training,
                          data management, and AI inference coupled with support for scaling operations, refining
                          product-market fit, and launching on 0G’s mainnet.&nbsp; It also includes mentorship from
                          industry leaders in AI, Web3, and blockchain technology and the ability to meet investors and
                          key partners in the AI and Web3 space.
                        </p>
                        <p>
                          The first cohort of the 0G x OnePiece Labs accelerator saw participating projects make
                          significant progress. <a href="https://carv.io/">CARV</a> expanded its user base to over 10
                          million through its innovative AI-driven mini-games, generating $6 million in revenue and
                          establishing partnerships with top Web2 and Web3 studios.
                        </p>
                        <p>
                          <a href="https://cygnus.finance/">Cygnus Finance</a> secured major partnerships with OpenOcean
                          and Synfutures, while also gaining official promotion from Binance. The project is now on
                          track to raise $15 million to continue scaling its decentralized finance solutions.
                        </p>
                        <p>
                          <a href="https://www.datahive.network/">DataHive</a> expanded its pipeline to 6 million users
                          and secured $150K in booked revenue. The project has also entered the final review stage for
                          the prestigious Endless Frontier Labs program by NYU Stern School of Business.
                        </p>
                        <p>
                          Other standout projects secured exclusive partnerships with top-tier global gaming studios,
                          film IPs, and decentralized platforms, further solidifying their growth trajectories. These
                          successes reflect the immense potential of the first cohort, setting the stage for even
                          greater achievements in the upcoming cohort.
                        </p>
                        <p>
                          Applications for the second cohort of the Web3 and AI Accelerator are now open. AI projects
                          with mature products, especially those focused on scaling their growth or infrastructure, are
                          encouraged to apply <a href="https://tally.so/r/3llDzB">https://tally.so/r/3llDzB</a>.
                        </p>
                        <h2>
                          <strong>About 0G Foundation</strong>
                        </h2>
                        <p>
                          The 0G Foundation is an organization dedicated to driving innovation and growth maintaining
                          the world’s first decentralised AI Operating System. Focused on creating an open, transparent,
                          and scalable infrastructure, the 0G Foundation is committed to fostering a vibrant,
                          decentralized ecosystem where AI can operate as a public good. Through strategic partnerships,
                          community initiatives, and innovative technology, 0G Foundation strives to ensure the
                          long-term sustainability and integrity of the 0G network.&nbsp;
                        </p>
                        <h2>
                          <strong>About OnePiece Labs</strong>&nbsp;&nbsp;
                        </h2>
                        <p>
                          OnePiece Labs is a Silicon Valley-based incubator that empowers visionary founders to
                          innovate within the Web3 ecosystem. With a focus on mentorship, funding, and partnerships,
                          OnePiece Labs helps entrepreneurs bring groundbreaking decentralized technologies to market.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t35_section_filter section_filter">
            <div className="t35_div028 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t35_div029 w-dyn-list t35_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t35_div030 cms-grid_list w-dyn-items">
              <div role="listitem" className="t35_div031 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t35_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t35_div032 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t35_img003 cms-grid_image"
                    />
                    <div className="t35_div033 spacer-medium hide-mobile-portrait"></div>
                    <div className="t35_div034 blog_contnet-wrapper">
                      <div className="t35_div035 blog_meta-wrapper">
                        <div className="t35_div036">Tech</div>
                        <div className="t35_div037 icon-embed-custom w-embed">
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
                        <div className="t35_div038">Sep 5, 2024</div>
                      </div>
                      <div className="t35_div039 spacer-xmedium"></div>
                      <h3 className="t35_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t35_div040 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t35_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t35_div041 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t35_img004 cms-grid_image"
                    />
                    <div className="t35_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t35_div043 blog_contnet-wrapper">
                      <div className="t35_div044 blog_meta-wrapper">
                        <div className="t35_div045">Tech</div>
                        <div className="t35_div046 icon-embed-custom w-embed">
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
                        <div className="t35_div047">Aug 25, 2025</div>
                      </div>
                      <div className="t35_div048 spacer-xmedium"></div>
                      <h3 className="t35_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t35_div049 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t35_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t35_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t35_img005 cms-grid_image"
                    />
                    <div className="t35_div051 spacer-medium hide-mobile-portrait"></div>
                    <div className="t35_div052 blog_contnet-wrapper">
                      <div className="t35_div053 blog_meta-wrapper">
                        <div className="t35_div054">Tech</div>
                        <div className="t35_div055 icon-embed-custom w-embed">
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
                        <div className="t35_div056">Aug 7, 2025</div>
                      </div>
                      <div className="t35_div057 spacer-xmedium"></div>
                      <h3 className="t35_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t35_div058 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t35_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t35_div059 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t35_img006 cms-grid_image"
                    />
                    <div className="t35_div060 spacer-medium hide-mobile-portrait"></div>
                    <div className="t35_div061 blog_contnet-wrapper">
                      <div className="t35_div062 blog_meta-wrapper">
                        <div className="t35_div063">Tech</div>
                        <div className="t35_div064 icon-embed-custom w-embed">
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
                        <div className="t35_div065">Jul 3, 2025</div>
                      </div>
                      <div className="t35_div066 spacer-xmedium"></div>
                      <h3 className="t35_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

