import React, { useEffect, useState } from 'react'
import './Tech13.css'

export default function Tech13() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t13-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t13-webflow', 'true')
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
      'Check out this insightful blog post: Introducing 0G’s V3 Testnet: Galileo'
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
    <div className="t13_container">
      <div className="t13_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t13_hide hide">
          <div className="t13_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t13_socialshare-title">
            Introducing 0G’s V3 Testnet: Galileo
          </div>
        </div>

        <main className="t13_main-wrapper main-wrapper">
          <section className="t13_section_hero section_hero t13_is-vertical is-vertical">
            <div className="t13_padding-global1 padding-global">
              <div className="t13_container-large container-large">
                <div className="t13_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t13_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t13_hero_bg-image2 hero_bg-image t13_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t13_hero_bg-gradient hero_bg-gradient t13_is-blog is-blog"></div>
                </div>

                <div className="t13_hero_content-component hero_content-component t13_is-vertical2 is-vertical">
                  <div className="t13_blog_meta-wrapper1 blog_meta-wrapper t13_is-white is-white">
                    <div className="t13_blog_meta-category">Tech</div>
                    <div className="t13_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t13_blog_meta-date">Apr 23, 2025</div>
                    <div className="t13_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t13_blog_meta-author">0g</div>
                  </div>

                  <div className="t13_spacer-small1 spacer-small"></div>

                  <div className="t13_max-width-large max-width-large t13_text-align-center text-align-center">
                    <h1 className="t13_heading-style-h3 heading-style-h3">
                      Introducing 0G’s V3 Testnet: Galileo
                    </h1>
                  </div>

                  <div className="t13_spacer-small2 spacer-small"></div>

                  <div className="t13_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t13_link-icon-light1 link-icon-light t13_is-static1 is-static w-inline-block"
                    >
                      <div className="t13_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      className="t13_link-icon-light2 link-icon-light t13_is-static2 is-static w-inline-block"
                    >
                      <div className="t13_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('x', e)}
                      className="t13_link-icon-light3 link-icon-light t13_is-static3 is-static w-inline-block"
                    >
                      <div className="t13_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t13_section_legal-content section_legal-content">
            <div className="t13_padding-global2 padding-global">
              <div className="t13_padding-section-medium padding-section-medium">
                <div className="t13_container-small container-small">
                  <div className="t13_legal_outer">
                    <div className="t13_legal-content_component legal-content_component">
                      <div className="t13_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          As 0G accelerates toward mainnet, we’re excited to
                          launch the third version of 0G’s testnet: Galileo!
                        </p>
                        <p>
                          Named after the father of modern science, Galileo
                          marks a major leap forward in the evolution of 0G,
                          refining the lessons learned from V2 into a fresh
                          testnet deployment. With a 70% performance boost and a
                          more flexible, future-proofed architecture redesign,
                          Galileo represents the most powerful version of 0G to
                          date.&nbsp;
                        </p>
                        <p>
                          But before we get into what’s new, let’s revisit what
                          got us here.
                        </p>
                        <h2>
                          <strong>Lessons from Testnet Newton</strong>
                        </h2>
                        <p>
                          Our v2 testnet saw incredible early traction: 2.5M
                          unique wallets created, 350M+ transactions executed,
                          and ~530k smart contracts deployed in a matter of
                          weeks. This level of traction made it clear that the
                          demand for 0G&apos;s high-throughput, AI-optimized
                          blockchain was real. And it gave us something every
                          great system needs early on: stress data at scale.
                        </p>
                        <p>
                          Testnet Newton was a prototype built on Cosmos SDK and
                          Ethermint, optimized for rapid prototyping and early
                          integration across 0G’s storage and compute layers.
                          But as user activity took off, we identified several
                          pressure points that held the system back:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Mempool congestion</strong>: Tendermint’s
                            default behavior failed to prioritize high-gas
                            transactions, opening the door to DDoS-like spam
                            patterns.
                          </li>
                          <li>
                            <strong>Centralized performance ceilings</strong>:
                            Consensus and execution were fused together in a
                            single process, which made upgrading or optimizing
                            these mechanisms difficult at times.
                          </li>
                          <li>
                            <strong>Integration friction</strong>: Ecosystem
                            teams were building quickly, but faced accumulating
                            technical hurdles that would have required rework to
                            maintain forward compatibility.
                          </li>
                        </ul>
                        <p>
                          These architectural pressure points yielded invaluable
                          insights and gave us the opportunit to raise the bar
                          even higher. And with performance and feedback as our
                          compass, we’ve built something even better.
                        </p>
                        <h2>What’s New in Testnet Galileo</h2>
                        <p>
                          Testnet Galileo offers a significantly faster, more
                          capable, and future-ready environment for developers
                          building on 0G, featuring the latest EVM standards and
                          a robust architecture.
                        </p>
                        <p>
                          At its core, Galileo is a full rearchitecture of the
                          0G chain, built from the ground up to be faster, more
                          modular, and more AI-ready than anything before it. It
                          preserves the key strengths of 0G (high throughput,
                          verifiable infrastructure, and seamless integration
                          with storage and compute) but dramatically improves
                          modularity, performance, and developer experience.
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Massive performance gains</strong>: Galileo
                            delivers a 70% throughput increase over the previous
                            testnet, and can process up to 2,500 TPS using an
                            optimized CometBFT consensus. Finality remains fast
                            and stable, while processing speed is dramatically
                            increased.
                          </li>
                          <li>
                            <strong>Smarter EVM</strong>: Galileo integrates the
                            latest Ethereum upgrades from Shanghai,
                            Cancun-Deneb, and is built to support the upcoming
                            Pectra release. Developers can now use new opcodes
                            like PUSH0 and benefit from better data handling,
                            efficiency, and contract expressiveness.
                          </li>
                          <li>
                            <strong>Evolvable architecture</strong>: We&apos;ve
                            replaced Cosmos SDK entirely with the Ethereum
                            Engine API, decoupling consensus and execution into
                            separate processes. This makes the chain easier to
                            maintain, simpler to upgrade, and ready for parallel
                            execution in the future.
                          </li>
                          <li>
                            <strong>
                              Smart contract-based validator delegation
                            </strong>
                            : Galileo validator delegation is implemented via
                            smart contracts, rather than being hardcoded. This
                            enables more flexible staking designs and faster
                            iteration without requiring protocol-level changes.
                          </li>
                          <li>
                            <strong>Enhanced Security &amp; Faucet Reliability</strong>:
                            Galileo’s fully revamped faucet system brings
                            improved security and bot protection to ensure fair
                            test token distribution.
                          </li>
                          <li>
                            <strong>Seamless 0G integration</strong>: Users of
                            0G Storage and 0G Compute do not need to update
                            their existing code. These services are being
                            upgraded from the backend to work with Testnet
                            Galileo.
                          </li>
                        </ul>
                        <h2>What to Do Next</h2>
                        <p>
                          Since Galileo is a clean deployment, there’s no bridge
                          or state migration from Testnet Newton. Technical
                          documentation with detailed instructions for what to
                          do next are available{' '}
                          <a href="https://docs.0g.ai/run-a-node/testnet-information">
                            here
                          </a>
                          .
                        </p>
                        <p>Generally speaking, builders should:</p>
                        <ol role="list">
                          <li>
                            <strong>Get new test tokens</strong> through
                            Galileo’s <a href="https://faucet.0g.ai/">new faucet</a>, after
                            connecting your X account, providing your wallet
                            address, and completing a captcha&nbsp;
                          </li>
                          <li>
                            <strong>Configure your wallet </strong>using the
                            new network configuration details (RPC URL, Chain
                            ID, etc.) for Galileo&nbsp;
                          </li>
                          <li>
                            <strong>Redeploy your contracts </strong>on Galileo
                            (sample deployment scripts for popular frameworks
                            like Truffle, Hardhat, and Foundry{' '}
                            <a href="https://github.com/0glabs/0g-deployment-scripts">
                              here
                            </a>
                            )
                          </li>
                          <li>
                            <strong>Track your onchain activity</strong> on{' '}
                            <a href="https://chainscan-galileo.0g.ai/">
                              Galileo’s new block explorer
                            </a>
                          </li>
                        </ol>
                        <p>
                          If any questions or issues arise, you can flag them
                          via the #support-tickets channel in{' '}
                          <a href="https://discord.com/invite/0glabs">
                            0G’s Discord
                          </a>
                          .
                        </p>
                        <h2>Onward, Together</h2>
                        <p>
                          Inference workloads. Modular memory systems.
                          Autonomous economic actors. These are the primitives
                          that define the next generation of onchain
                          computation. And as other layers of the 0G
                          stack—storage, compute, service marketplace—continue
                          to set new benchmarks, Galileo ensures that 0G’s base
                          chain can keep up.
                        </p>
                        <p>
                          On the storage side, 0G has already benchmarked 2 GB
                          per second in throughput—the fastest performance
                          recorded in the history of decentralized AI. On top
                          of that, our compute inference layer has no overhead
                          compared to centralized systems and operates at
                          significantly lower costs. Testnet Galileo ties
                          together these accomplishments and leaves room for
                          more, bringing us much, much closer to a mainnet that
                          can serve as the high-speed, high-integrity backbone
                          for decentralized AI.
                        </p>
                        <p>
                          It’s an exciting time to build on 0G. Let’s get to
                          work!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t13_section_filter section_filter">
            <div className="t13_blog_more-blog blog_more-blog">
              <h5 className="t13_related-title">Related news:</h5>
            </div>
          </section>

          <div className="t13_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t13_cms-grid_list cms-grid_list t13_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t13_cms-grid_item1 cms-grid_item t13_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t13_cms-grid_content-wrapper1 cms-grid_content-wrapper t13_is-blog1 is-blog t13_w-inline-block1 w-inline-block"
                >
                  <div className="t13_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t13_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t13_spacer-medium1 spacer-medium t13_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t13_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t13_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t13_related_category1">Tech</div>
                        <div className="t13_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t13_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t13_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t13_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t13_cms-grid_item2 cms-grid_item t13_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t13_cms-grid_content-wrapper2 cms-grid_content-wrapper t13_is-blog2 is-blog t13_w-inline-block2 w-inline-block"
                >
                  <div className="t13_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t13_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t13_spacer-medium2 spacer-medium t13_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t13_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t13_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t13_related_category2">Tech</div>
                        <div className="t13_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t13_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t13_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t13_heading-style-h5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t13_cms-grid_item3 cms-grid_item t13_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t13_cms-grid_content-wrapper3 cms-grid_content-wrapper t13_is-blog3 is-blog t13_w-inline-block3 w-inline-block"
                >
                  <div className="t13_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t13_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t13_spacer-medium3 spacer-medium t13_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t13_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t13_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t13_related_category3">Tech</div>
                        <div className="t13_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t13_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t13_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t13_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t13_cms-grid_item4 cms-grid_item t13_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t13_cms-grid_content-wrapper4 cms-grid_content-wrapper t13_is-blog4 is-blog t13_w-inline-block4 w-inline-block"
                >
                  <div className="t13_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t13_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t13_spacer-medium4 spacer-medium t13_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t13_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t13_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t13_related_category4">Tech</div>
                        <div className="t13_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t13_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t13_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t13_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t13_copy-toast ${showToast ? 't13_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
