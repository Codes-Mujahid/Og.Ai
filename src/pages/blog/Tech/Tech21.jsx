import React, { useEffect, useState } from 'react'
import './Tech21.css'

export default function Tech21() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t21-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t21-webflow', 'true')
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
      'Check out this insightful blog post: Guild on 0G: Newmoney.AI, Peony, Zia'
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
    <div className="t21_container">
      <div className="t21_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t21_div002 hide">
          <div className="t21_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t21_div004">Guild on 0G: Newmoney.AI, Peony, Zia</div>
        </div>

        <main className="t21_main-wrapper main-wrapper">
          <section className="t21_section_hero section_hero is-vertical">
            <div className="t21_div005 padding-global">
              <div className="t21_div006 container-large">
                <div className="t21_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t21_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t21_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t21_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t21_div010 hero_content-component is-vertical">
                  <div className="t21_div011 blog_meta-wrapper is-white">
                    <div className="t21_div012">Tech</div>
                    <div className="t21_div013 icon-embed-custom w-embed">
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
                    <div className="t21_div014">Mar 25, 2025</div>
                    <div className="t21_div015 icon-embed-custom w-embed">
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
                    <div className="t21_div016">0g</div>
                  </div>

                  <div className="t21_div017 spacer-small"></div>

                  <div className="t21_div018 max-width-large text-align-center">
                    <h1 className="t21_heading heading-style-h3">
                      Guild on 0G: Newmoney.AI, Peony, Zia
                    </h1>
                  </div>

                  <div className="t21_div019 spacer-small"></div>

                  <div className="t21_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t21_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t21_div022 icon-embed-xsmall w-embed">
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
                      className="t21_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t21_div024 icon-embed-xsmall w-embed">
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
                      className="t21_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t21_div026 icon-embed-xsmall w-embed">
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

          <section className="t21_div027 section_legal-content">
            <div className="t21_div028 padding-global">
              <div className="t21_div029 padding-section-medium">
                <div className="t21_div030 container-small">
                  <div className="t21_div031">
                    <div className="t21_div032 legal-content_component">
                      <div className="t21_div033 blog-rich-text w-richtext">
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
                          <a href="https://0g.ai/blog/guild-on-0g-01">
                            Guild on 0G
                          </a>
                          —a series dedicated to showcasing the builders
                          pioneering decentralized AI innovation. In this second
                          edition, we&apos;re spotlighting three more standout
                          projects: Newmoney.AI, Peony, and Zia, each helping
                          reshape the future of web3 through intelligent automation
                          and onchain infrastructure.
                        </p>
                        <p>
                          Join us as we explore how these initiatives are
                          harnessing 0G&apos;s capabilities to drive transformative
                          change onchain.
                        </p>

                        <h2>
                          <a href="https://newmoney.ai/">Newmoney.AI</a>: Agentic
                          Wallets for Smarter DeFi
                        </h2>
                        <figure className="t21_div034 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t21_div035">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed8ced6b222591b815_tkZV34nAiMmxAHgMtI2Zp6GlM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Managing trades, liquidity, and lending has traditionally
                          required constant manual oversight. While this was once
                          the norm, the rise of AI agents and automation is
                          transforming DeFi. Newmoney.AI is leading this shift with
                          AI agentic wallets, enabling seamless, automated
                          interactions across multiple chains for smarter and more
                          efficient fund management.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>AI-Powered Agentic Wallets</strong>: Users can
                            deploy AI agents to automate trading, dollar cost
                            averaging, liquidity management, and market analysis.
                          </li>
                          <li>
                            <strong>Multi-Chain Support</strong>: Seamless
                            compatibility with EVM, Solana, and Bitcoin, leveraging
                            intent-based execution to enable gasless transactions.
                          </li>
                          <li>
                            <strong>Seamless User Experience</strong>: Unlike other
                            agentic wallets, Newmoney.AI eliminates the need for
                            custom setup by providing pre-built AI agents that
                            execute real DeFi strategies from day one.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Scalable AI Execution</strong>: Uses 0G’s DA
                            layer and compute infrastructure to run AI-driven
                            trading models efficiently.
                          </li>
                          <li>
                            <strong>Decentralized AI Execution</strong>: Future
                            plans to leverage 0G Compute for decentralized agentic
                            inference and execution.
                          </li>
                          <li>
                            <strong>High-Throughput Transactions</strong>: 0G’s
                            low-latency architecture ensures real-time trading
                            without bottlenecks.
                          </li>
                        </ul>
                        <p>
                          Newmoney.AI is pioneering the next generation of smart
                          wallets, leveraging AI automation to optimize DeFi
                          interactions and deliver a seamless, hands-free financial
                          experience.
                        </p>

                        <h2>
                          <a href="https://peony.ink/">Peony</a>: Trustless, Onchain
                          Signatures
                        </h2>
                        <figure className="t21_div036 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t21_div037">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed8ced6b222591b818_5lGrjglcyieF4FIH70Jqoo6JLA.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          For businesses, document creation and signature
                          collection are often slow and fragmented, with tools
                          like DocuSign lacking flexibility and provenance
                          tracking. Peony streamlines the process with onchain
                          document infrastructure and a product-first approach that
                          abstracts blockchain complexities, making the signing
                          experience seamless and accessible to anyone—even without
                          a wallet.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Onchain Signatures</strong>: Creates tamper-proof
                            audit trails with cryptographically verifiable
                            signatures.
                          </li>
                          <li>
                            <strong>AI Document Automation</strong>: Peony’s AI
                            streamlines contract generation, execution, and
                            compliance, reducing manual processes and potential
                            errors.
                          </li>
                          <li>
                            <strong>No Wallet Required</strong>: Users can sign
                            legally binding agreements onchain without needing a
                            wallet.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Onchain Document Verification</strong>: Peony
                            ensures agreements remain verifiable and auditable by
                            storing metadata, timestamps, and cryptographic proofs
                            directly on 0G.
                          </li>
                          <li>
                            <strong>Decentralized Storage</strong>: Uses 0G’s
                            storage layer to securely store encrypted copies of
                            agreements.
                          </li>
                          <li>
                            <strong>Scalability &amp; Speed</strong>: 0G’s
                            high-throughput blockchain ensures that agreements are
                            processed quickly and efficiently.
                          </li>
                        </ul>
                        <p>
                          Peony is redefining digital agreements with blockchain
                          security and AI automation, creating a seamless, trustless
                          signing experience that bridges web3 and real-world
                          applications.
                        </p>

                        <h2>
                          <a href="https://zia.finance/">Zia</a>: AI Liquidity for
                          DeFi
                        </h2>
                        <figure className="t21_div038 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t21_div039">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed8ced6b222591b80f_aaC8cpbYPJ9xdWA85ZH77Vkd8.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Liquidity in DeFi is often fragmented and inefficient,
                          leading to slippage and limited returns for traders and
                          providers (LPs). As automation reshapes this landscape,
                          Zia offers a smarter path forward with AI-powered liquidity
                          that reallocates capital in real-time. Zia’s first product,{' '}
                          <a href="https://tradegpt.finance/">TradeGPT</a>, is a
                          natural language DEX that makes trading as intuitive as
                          chatting with a broker.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>AI-Driven Liquidity Engine</strong>: Dynamically
                            reallocates capital across pools to improve depth and
                            optimize returns for LPs.
                          </li>
                          <li>
                            <strong>Natural Language DEX (TradeGPT)</strong>:
                            Enables users to execute trades using simple text
                            prompts with no technical experience required.
                          </li>
                          <li>
                            <strong>Advanced LP Strategies</strong>: Zia’s vaults
                            will support intelligent liquidity allocation across
                            pools to improve depth and capital efficiency.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Data Availability for AI Models</strong>: Zia
                            uses 0G to access and process real-time, onchain
                            liquidity data, enabling dynamic optimization across
                            pools.
                          </li>
                          <li>
                            <strong>Scalable AI Infrastructure</strong>: 0G’s DA
                            layer and decentralized storage allow for both training
                            and execution of complex strategies at low cost.
                          </li>
                          <li>
                            <strong>Transparency &amp; Collaboration</strong>: With
                            plans to decentralize parts of its AI stack, Zia will
                            use 0G to make its models more transparent and shareable
                            across the ecosystem.
                          </li>
                        </ul>
                        <p>
                          Zia is redefining DeFi liquidity with AI automation,
                          enabling smarter capital allocation and more efficient
                          trading across onchain markets.
                        </p>

                        <h2>Guild on 0G</h2>
                        <p>
                          From agentic wallets to blockchain-native signatures,
                          this edition of Guild on 0G highlights the builders
                          pushing decentralized AI forward. Newmoney.AI, Peony, and
                          Zia are harnessing 0G’s scalable, AI-native infrastructure
                          to redefine how we manage assets, sign agreements, and
                          more.
                        </p>
                        <p>
                          As the 0G ecosystem grows, we will continue to highlight
                          the builders and visionaries at the forefront of
                          decentralized AI. Stay tuned for the next edition of
                          Guild on 0G, and in the meantime, be sure to take a deeper
                          dive into <a href="https://newmoney.ai/">Newmoney.AI</a>,{' '}
                          <a href="https://peony.ink/">Peony</a>, and{' '}
                          <a href="https://x.com/zia_finance">Zia</a>.
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

          <section className="t21_div040 section_filter">
            <div className="t21_div041 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t21_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t21_div042 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t21_div043 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t21_div044 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t21_div045 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t21_div046 cms-grid_image"
                    />
                    <div className="t21_div047 spacer-medium hide-mobile-portrait"></div>
                    <div className="t21_div048 blog_contnet-wrapper">
                      <div className="t21_div049 blog_meta-wrapper">
                        <div fs-list-field="category" className="t21_div050">
                          Tech
                        </div>
                        <div className="t21_div051 icon-embed-custom w-embed">
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
                        <div className="t21_div052">Sep 5, 2024</div>
                      </div>
                      <div className="t21_div053 spacer-xmedium"></div>
                      <h3 className="t21_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t21_div054 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t21_div055 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t21_div056 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t21_div057 cms-grid_image"
                    />
                    <div className="t21_div058 spacer-medium hide-mobile-portrait"></div>
                    <div className="t21_div059 blog_contnet-wrapper">
                      <div className="t21_div060 blog_meta-wrapper">
                        <div fs-list-field="category" className="t21_div061">
                          Tech
                        </div>
                        <div className="t21_div062 icon-embed-custom w-embed">
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
                        <div className="t21_div063">Aug 25, 2025</div>
                      </div>
                      <div className="t21_div064 spacer-xmedium"></div>
                      <h3 className="t21_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t21_div065 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t21_div066 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t21_div067 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t21_div068 cms-grid_image"
                    />
                    <div className="t21_div069 spacer-medium hide-mobile-portrait"></div>
                    <div className="t21_div070 blog_contnet-wrapper">
                      <div className="t21_div071 blog_meta-wrapper">
                        <div fs-list-field="category" className="t21_div072">
                          Tech
                        </div>
                        <div className="t21_div073 icon-embed-custom w-embed">
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
                        <div className="t21_div074">Aug 7, 2025</div>
                      </div>
                      <div className="t21_div075 spacer-xmedium"></div>
                      <h3 className="t21_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t21_div076 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t21_div077 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t21_div078 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t21_div079 cms-grid_image"
                    />
                    <div className="t21_div080 spacer-medium hide-mobile-portrait"></div>
                    <div className="t21_div081 blog_contnet-wrapper">
                      <div className="t21_div082 blog_meta-wrapper">
                        <div fs-list-field="category" className="t21_div083">
                          Tech
                        </div>
                        <div className="t21_div084 icon-embed-custom w-embed">
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
                        <div className="t21_div085">Jul 3, 2025</div>
                      </div>
                      <div className="t21_div086 spacer-xmedium"></div>
                      <h3 className="t21_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t21_copy-toast ${showToast ? 't21_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

