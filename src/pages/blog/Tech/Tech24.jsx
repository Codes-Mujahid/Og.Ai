import React, { useEffect, useState } from 'react'
import './Tech24.css'

export default function Tech24() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t24-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t24-webflow', 'true')
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
      'Check out this insightful blog post: Guild on 0G: Zer0, H1uman, Avinasi Labs'
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
    <div className="t24_container">
      <div className="t24_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t24_div002 hide">
          <div className="t24_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t24_div004">Guild on 0G: Zer0, H1uman, Avinasi Labs</div>
        </div>

        <main className="t24_main-wrapper main-wrapper">
          <section className="t24_section_hero section_hero is-vertical">
            <div className="t24_div005 padding-global">
              <div className="t24_div006 container-large">
                <div className="t24_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t24_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t24_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t24_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t24_div010 hero_content-component is-vertical">
                  <div className="t24_div011 blog_meta-wrapper is-white">
                    <div className="t24_div012">Tech</div>
                    <div className="t24_div013 icon-embed-custom w-embed">
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
                    <div className="t24_div014">Mar 17, 2025</div>
                    <div className="t24_div015 icon-embed-custom w-embed">
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
                    <div className="t24_div016">0g</div>
                  </div>

                  <div className="t24_div017 spacer-small"></div>

                  <div className="t24_div018 max-width-large text-align-center">
                    <h1 className="t24_heading heading-style-h3">
                      Guild on 0G: Zer0, H1uman, Avinasi Labs
                    </h1>
                  </div>

                  <div className="t24_div019 spacer-small"></div>

                  <div className="t24_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t24_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t24_div022 icon-embed-xsmall w-embed">
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
                      className="t24_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t24_div024 icon-embed-xsmall w-embed">
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
                      className="t24_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t24_div026 icon-embed-xsmall w-embed">
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

          <section className="t24_section_legal-content section_legal-content">
            <div className="t24_div027 padding-global">
              <div className="t24_div028 padding-section-medium">
                <div className="t24_div029 container-small">
                  <div className="t24_div030">
                    <div className="t24_div031 legal-content_component">
                      <div className="t24_div032 blog-rich-text w-richtext">
                        <p>
                          In today&apos;s web3 landscape, the convergence of AI and
                          blockchain is driving the next wave of innovation.
                        </p>
                        <p>
                          At 0G, we&apos;ve long been committed to building an
                          ecosystem where visionary projects can thrive, leveraging
                          our{' '}
                          <a href="https://0g.ai/blog/0g-deep-dive">
                            AI-native Layer 1
                          </a>{' '}
                          infrastructure to push the boundaries of what&apos;s
                          possible.
                        </p>
                        <p>
                          With this vision in mind, we launched{' '}
                          <a href="https://0g.ai/blog/guild-on-0g">
                            Guild on 0G
                          </a>
                          —a series dedicated to showcasing the builders pioneering
                          decentralized AI innovation. In this first edition,
                          we&apos;re spotlighting three standout projects: zer0,
                          H1uman, and Avinasi Labs, each harnessing AI and
                          blockchain to reshape the future of web3.
                        </p>
                        <p>
                          Join us as we explore how these initiatives are harnessing
                          0G&apos;s capabilities to drive transformative change
                          onchain.
                        </p>

                        <h2>
                          <a href="https://x.com/zer0_dex">zer0</a>: AI-Powered
                          Liquidity for DeFi
                        </h2>
                        <figure className="t24_div033 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t24_div034">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee034820a8b9006d99_AKdt9uP4AfyP4pflqVs3LkcNDj0.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Over the past decade, decentralized exchanges have
                          reshaped crypto trading, but challenges like inefficient
                          liquidity, limited accessibility, and cost constraints
                          persist. zer0, a next-generation DEX, is tackling these
                          issues with advanced automation and smart liquidity
                          management, making DeFi faster, more accessible, and more
                          efficient.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>
                              AI Automated Liquidity Management (AIALM)
                            </strong>
                            : Uses AI predictions to dynamically manage liquidity
                            pools, reducing slippage and maximizing capital
                            efficiency.
                          </li>
                          <li>
                            <strong>Voice/Text-Based DeFi Agent</strong>: Allows
                            users to execute swaps, add liquidity, or set
                            conditional orders using natural language commands via
                            Telegram or web-based widget.
                          </li>
                          <li>
                            <strong>DefAI Tech Stack</strong>: zer0 hosts AI models
                            directly onchain, making liquidity strategies
                            transparent, community-driven, and highly efficient.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>AI Liquidity Management</strong>: zer0’s AI
                            models for price prediction and liquidity optimization
                            are stored on 0G’s DA Layer, ensuring low-cost, onchain
                            AI computation.
                          </li>
                          <li>
                            <strong>Execution &amp; Settlement</strong>: 0G’s
                            consensus layer ensures sub-second finality, enabling
                            AI-driven liquidity adjustments and seamless DeFi agent
                            execution, minimizing front-running risks.
                          </li>
                          <li>
                            <strong>Scalability &amp; Efficiency</strong>: zer0
                            runs on 0G’s execution layer, enabling onchain price
                            predictions and low-cost liquidity management while
                            reducing gas fees by 99%+ compared to Ethereum
                          </li>
                        </ul>
                        <p>
                          By integrating AI into DeFi, zer0 is positioned to be a
                          major contributor to liquidity within the 0G ecosystem,
                          helping to set a new standard for decentralized trading
                          and automated financial strategies.
                        </p>

                        <h2>
                          <a href="http://humans.ai/">H1uman</a>: Decentralized AI
                          Agent Factory
                        </h2>
                        <figure className="t24_div035 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t24_div036">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee034820a8b9006d93_RMIbAKs3UMCwc98WjqWMV3LeFzo.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Developing artificial intelligence has traditionally
                          required deep technical expertise and specialized
                          resources, creating barriers for innovators.{' '}
                          <a href="http://humans.ai/">Humans.ai</a>’s H1uman (H1)
                          seeks to circumvent these obstacles with a user-friendly,
                          decentralized platform that makes building and deploying
                          AI agents more accessible than ever.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>AI Agent Factory</strong>: The H1 platform
                            lowers the barriers to AI agent creation, allowing
                            users to easily build and deploy agents through an
                            intuitive, user-friendly environment with no deep
                            technical expertise required.
                          </li>
                          <li>
                            <strong>Incentive Mechanism</strong>: Users who
                            register AI Agents are labeled “developers,” while
                            registered AI Agents are called “AI Miners.” AI Miners
                            generate passive income for developers through an
                            integrated DeFi rewards mechanism.
                          </li>
                          <li>
                            <strong>Diverse Use Cases</strong>: From AI-powered
                            meme tokens to AI-driven DeFi tools, H1 opens up
                            accessibility to AI to a wider web3 audience.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>AI-Native Infrastructure</strong>: H1’s AI
                            Agent Factory V1 launch on 0G leverages 0G’s AI-native
                            infrastructure, including on-prem GPUs for AI model
                            execution and HDD storage, ensuring efficient and
                            scalable AI operations.
                          </li>
                          <li>
                            <strong>NFT-Based Trust Layer</strong>: H1 utilizes 0G’s
                            unique trust layer, allowing transparent verification
                            of AI models and fostering a decentralized,
                            community-driven AI ecosystem.
                          </li>
                          <li>
                            <strong>Decentralized AI Innovation</strong>: 0G’s
                            infrastructure supports AI-powered token creation,
                            advanced AI DeFi tools, and collaborative AI model
                            evolution, making it the ideal home for H1’s vision of
                            community-powered AI development.
                          </li>
                        </ul>
                        <p>
                          By lowering the barrier to AI innovation, H1uman is
                          driving deeper onchain engagement and expanding AI’s role
                          within web3 applications.
                        </p>

                        <h2>
                          <a href="https://avinasi.ai/">Avinasi Labs</a>: AI for
                          Longevity Research
                        </h2>
                        <figure className="t24_div037 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t24_div038">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee034820a8b9006d96_W6fkwCRwjCT1fsUAVS5whQFEvA.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Scientific progress in longevity research has long been
                          hindered by data accessibility challenges. Avinasi Labs
                          is seeking to revolutionize the field by creating the
                          first AI-native graphic layer for longevity, allowing
                          users to contribute health data in a secure, incentivized,
                          and decentralized way.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Reward-Based Framework</strong>: Avinasi
                            incentivizes users to contribute encrypted biodata to
                            earn rewards, creating a verifiable dataset that fuels
                            scientific research on aging.
                          </li>
                          <li>
                            <strong>Collaborative Research</strong>: Avinasi Labs’
                            participant methodology expands a substantial dataset on
                            aging and longevity research to be used by researchers
                            globally.
                          </li>
                          <li>
                            <strong>AI Insights</strong>: As Avinasi’s resources
                            grow, scientists will be able to train models on
                            securely encrypted longevity datasets, leveraging
                            advanced analytics to uncover patterns in aging and
                            longevity.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Secure Biodata Storage</strong>: Avinasi stores
                            encrypted, append-only biodata on 0G’s log layer,
                            ensuring data integrity and accessibility. This biodata
                            can be downloaded by anyone, but can only be decrypted
                            by the TEE running a specific program.
                          </li>
                          <li>
                            <strong>Durable Data Storage</strong>: 0G’s
                            erasure-coding mechanism and PoRA guarantee data
                            durability, preventing loss and ensuring long-term
                            reliability.
                          </li>
                          <li>
                            <strong>High-Throughput AI Processing</strong>: 0G’s
                            scalable infrastructure supports large-scale data
                            processing, making it ideal for storing biodatasets and
                            enabling scientists to train models on encrypted data.
                          </li>
                        </ul>
                        <p>
                          By democratizing longevity research, Avinasi Labs is
                          creating a global, user-driven dataset, enabling
                          individuals to actively shape the future of health and
                          aging science.
                        </p>

                        <h2>Guild on 0G</h2>
                        <p>
                          Guild on 0G is all about celebrating the projects that
                          are pushing the limits of blockchain and AI. From zer0’s
                          AI DeFi automation to H1uman’s democratized agent
                          creation and Avinasi Labs’ decentralized longevity
                          research framework, these projects are shaping the future
                          of web3 in ways that only AI can power.
                        </p>
                        <p>
                          As the 0G ecosystem grows, we will continue to highlight
                          the builders and visionaries at the forefront of
                          decentralized AI. Stay tuned for the next edition of
                          Guild on 0G, and in the meantime, be sure to take a
                          deeper dive into <a href="https://x.com/zer0_dex">zer0</a>
                          , <a href="http://humans.ai/">H1uman</a>, and{' '}
                          <a href="https://avinasi.ai/">Avinasi Labs</a>.
                        </p>
                        <p>
                          <a href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/">
                            Apply for the Guild on 0G
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t24_section_filter section_filter">
            <div className="t24_div039 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t24_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t24_div040 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t24_div041 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t24_div042 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t24_div043 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t24_div044 cms-grid_image"
                    />
                    <div className="t24_div045 spacer-medium hide-mobile-portrait"></div>
                    <div className="t24_div046 blog_contnet-wrapper">
                      <div className="t24_div047 blog_meta-wrapper">
                        <div className="t24_div048">Tech</div>
                        <div className="t24_div049 icon-embed-custom w-embed">
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
                        <div className="t24_div050">Sep 5, 2024</div>
                      </div>
                      <div className="t24_div051 spacer-xmedium"></div>
                      <h3 className="t24_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t24_div052 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t24_div053 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t24_div054 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t24_div055 cms-grid_image"
                    />
                    <div className="t24_div056 spacer-medium hide-mobile-portrait"></div>
                    <div className="t24_div057 blog_contnet-wrapper">
                      <div className="t24_div058 blog_meta-wrapper">
                        <div className="t24_div059">Tech</div>
                        <div className="t24_div060 icon-embed-custom w-embed">
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
                        <div className="t24_div061">Aug 25, 2025</div>
                      </div>
                      <div className="t24_div062 spacer-xmedium"></div>
                      <h3 className="t24_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t24_div063 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t24_div064 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t24_div065 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t24_div066 cms-grid_image"
                    />
                    <div className="t24_div067 spacer-medium hide-mobile-portrait"></div>
                    <div className="t24_div068 blog_contnet-wrapper">
                      <div className="t24_div069 blog_meta-wrapper">
                        <div className="t24_div070">Tech</div>
                        <div className="t24_div071 icon-embed-custom w-embed">
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
                        <div className="t24_div072">Aug 7, 2025</div>
                      </div>
                      <div className="t24_div073 spacer-xmedium"></div>
                      <h3 className="t24_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t24_div074 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t24_div075 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t24_div076 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t24_div077 cms-grid_image"
                    />
                    <div className="t24_div078 spacer-medium hide-mobile-portrait"></div>
                    <div className="t24_div079 blog_contnet-wrapper">
                      <div className="t24_div080 blog_meta-wrapper">
                        <div className="t24_div081">Tech</div>
                        <div className="t24_div082 icon-embed-custom w-embed">
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
                        <div className="t24_div083">Jul 3, 2025</div>
                      </div>
                      <div className="t24_div084 spacer-xmedium"></div>
                      <h3 className="t24_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t24_copy-toast ${showToast ? 't24_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

