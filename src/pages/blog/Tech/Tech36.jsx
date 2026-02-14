import React, { useEffect, useState } from 'react'
import './Tech36.css'

export default function Tech36() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t36-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t36-webflow', 'true')
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
      'Check out this insightful blog post: How Does 0G DA Compare to Celestia and EigenLayer?'
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
    <div className="t36_container">
      <div className={`t36_copy-toast ${showToast ? 't36_show' : ''}`}>Link copied</div>

      <div className="t36_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t36_div002 hide">
          <div className="t36_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t36_div004">How Does 0G DA Compare to Celestia and EigenLayer?</div>
        </div>

        <main className="t36_main-wrapper main-wrapper">
          <section className="t36_section_hero section_hero is-vertical">
            <div className="t36_div005 padding-global">
              <div className="t36_div006 container-large">
                <div className="t36_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t36_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t36_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t36_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t36_div009 hero_content-component is-vertical">
                  <div className="t36_div010 blog_meta-wrapper is-white">
                    <div className="t36_div011">Tech</div>
                    <div className="t36_div012 icon-embed-custom w-embed">
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
                    <div className="t36_div013">Oct 17, 2024</div>
                    <div className="t36_div014 icon-embed-custom w-embed">
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
                    <div className="t36_div015">0g</div>
                  </div>

                  <div className="t36_div016 spacer-small"></div>

                  <div className="t36_div017 max-width-large text-align-center">
                    <h1 className="t36_heading heading-style-h3">
                      How Does 0G DA Compare to Celestia and EigenLayer?
                    </h1>
                  </div>

                  <div className="t36_div018 spacer-small"></div>

                  <div className="t36_div019 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t36_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t36_div020 icon-embed-xsmall w-embed">
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
                      className="t36_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t36_div021 icon-embed-xsmall w-embed">
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
                      className="t36_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t36_div022 icon-embed-xsmall w-embed">
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

          <section className="t36_section_legal-content section_legal-content">
            <div className="t36_div023 padding-global">
              <div className="t36_div024 padding-section-medium">
                <div className="t36_div025 container-small">
                  <div className="t36_div026">
                    <div className="t36_div027 legal-content_component">
                      <div className="t36_div028 blog-rich-text w-richtext">
                        <p>
                          In the highly competitive Data Availability (DA) space, projects like Celestia and EigenDA
                          have established themselves as major players, backed by significant funding and advanced
                          technical solutions. However, as the first Artificial Intelligence Layer (AIL), 0G outperforms
                          traditional DA solutions across scalability, throughput, and latency, while also delivering far
                          more.
                        </p>
                        <p>
                          By integrating compute and storage into the stack, 0G powers the first Decentralized AI
                          Operating System (dAIOS), enabling real-time AI interactions, deep data storage, and
                          high-performance computation on a decentralized network.
                        </p>
                        <p>In this article, we will cover:</p>
                        <ul role="list">
                          <li>
                            <strong>Key Data Availability Solutions</strong>: An overview of Celestia and EigenDA,
                            leaders in the DA space.
                          </li>
                          <li>
                            <strong>0G&apos;s DA Superiority</strong>: How 0G&apos;s DA layer outperforms Celestia and
                            EigenDA in terms of throughput, latency, and scalability.
                          </li>
                          <li>
                            <strong>0G as a Decentralized AI Operating System (dAIOS)</strong>: Beyond just DA, how 0G’s
                            architecture supports decentralized AI workflows through integrated storage, computation,
                            and data availability.
                          </li>
                        </ul>
                        <p>
                          <strong>Overview of Competing DA Layers</strong>
                        </p>
                        <p>
                          While 0G offers far more than just data availability, it’s essential to evaluate how it stacks
                          up against leading DA layers.
                        </p>
                        <p>
                          Celestia is a modular blockchain platform, known for its <strong>Data Availability Sampling (DAS)</strong>, which
                          allows light nodes to verify data without storing it all, enhancing scalability. Despite this,
                          it faces limitations with throughput (10 Mbps) and block time (12 seconds), making it
                          insufficient for high-performance needs. Its key features include:
                        </p>
                        <p>
                          Celestia is a modular blockchain platform designed for efficient data availability and
                          consensus. It uses Tendermint for consensus (which assumes 2/3 of validators are honest) and
                          offers fast finality with block times of{' '}
                          <a href="https://docs.celestia.org/developers/integrate-celestia" target="_blank" rel="noreferrer">
                            ~12 seconds
                          </a>
                          . Celestia&apos;s key innovation is Data Availability Sampling (DAS), which allows light nodes to
                          verify that data is available by sampling small portions of the data, rather than storing
                          everything. This is important for scalability, as it is relatively easy to become a light node,
                          meaning that the amount of stored data can scale quite well.
                        </p>
                        <p>To summarize:</p>
                        <ul role="list">
                          <li>
                            <strong>Data Availability Sampling (DAS):</strong> Enables scalability by allowing light
                            nodes to verify small portions of data.
                          </li>
                          <li>
                            <strong>12-Second Block Time:</strong> Celestia uses Tendermint for consensus, achieving
                            finality within ~12 seconds.
                          </li>
                          <li>
                            <strong>Cosmos L1 Architecture:</strong> Built as a layer 1 on the Cosmos ecosystem,
                            leveraging Tendermint&apos;s consensus mechanism.
                          </li>
                        </ul>
                        <p>
                          EigenDA, on the other hand, is a data availability solution tied to Ethereum&apos;s EigenLayer.
                          It uses <strong>restaking</strong> to incentivize Ethereum validators to also serve as DA
                          validators, offering <strong>horizontal scalability</strong> through erasure coding. However,
                          it focuses more on Ethereum L2 use cases and lacks flexibility for data-heavy applications
                          like AI.
                        </p>
                        <p>To summarize:</p>
                        <ul role="list">
                          <li>
                            <strong>Restaking for Validators</strong>: Validators on Ethereum can use their staked ETH
                            as collateral to become EigenDA validators, providing DA services and earning additional
                            yield.
                          </li>
                          <li>
                            <strong>Tied to Ethereum via EigenLayer</strong>: EigenDA leverages Ethereum&apos;s security and
                            restaking mechanism, relying on the Ethereum L1 for shared state and bridging DA
                            attestations to L2s.
                          </li>
                          <li>
                            <strong>Horizontal Scalability</strong>: EigenDA achieves horizontal scalability, meaning
                            that adding more nodes directly increases system capacity, making it ideal for handling
                            growing data demands.
                          </li>
                        </ul>
                        <p>
                          EigenDA relies on a fixed-size quorum of 200 top validators selected based on their staked ETH.
                          This means that only the top stakers participate in the data availability validation process.
                        </p>
                        <p>
                          <strong>0G’s Strength as a dAIOS</strong>
                        </p>
                        <p>
                          Even when evaluated purely as a DA layer, 0G outshines both Celestia and EigenDA. 0G&apos;s
                          throughput is 50x higher, and its scalability extends far beyond both platforms, thanks to its
                          random validator selection, which improves decentralization and security. However, 0G&apos;s true
                          innovation lies in its ability to serve as a complete dAIOS, integrating computation, storage,
                          and AI workflows on-chain. This unique combination positions 0G as the ultimate solution for
                          data-heavy applications that Celestia and EigenDA cannot support effectively.
                        </p>
                        <p>
                          We covered our role as a dAIOS in-depth{' '}
                          <a
                            href="https://0g.ai/blog/reintroducing-0g-the-first-decentralized-ai-operating-system"
                            target="_blank"
                            rel="noreferrer"
                          >
                            in this blog post
                          </a>
                          .
                        </p>
                        <p>However, on the DA side, key areas of differentiation include:</p>
                        <ul role="list">
                          <li>
                            <strong>Throughput</strong>: 0G’s throughput is so fast that we can support countless
                            high-performance use cases even beyond AI, including high-frequency trading, on-chain
                            gaming, and more.
                          </li>
                          <li>
                            <strong>Latency</strong>: Celestia’s 12-second block times are too slow for high-performance
                            applications like on-chain AI and trading, where 0G’s low latency makes it ideal.
                          </li>
                          <li>
                            <strong>Decentralized Validator Selection</strong>: Unlike EigenDA’s deterministic node
                            assignment, 0G’s{' '}
                            <a href="https://0g.ai/blog/0g-removing-das" target="_blank" rel="noreferrer">
                              random node selection
                            </a>{' '}
                            enhances security and minimizes collusion risks.
                          </li>
                          <li>
                            <strong>Independence from Ethereum</strong>: While EigenDA depends on Ethereum’s restaking
                            mechanism, 0G offers complete modularity and avoids the complexity of Ethereum.
                          </li>
                        </ul>
                        <p>
                          <strong>Conclusion</strong>
                        </p>
                        <p>
                          In conclusion, 0G is not just a DA layer, but the{' '}
                          <strong>world’s first Decentralized AI Operating System (dAIOS)</strong>, capable of managing
                          real-time AI interactions, data storage, and computation on a modular, composable stack built
                          for the next era of intelligent applications.
                        </p>
                        <p>
                          Despite its broader scope, 0G still surpasses leading DA solutions like Celestia and EigenDA in
                          terms of <strong>scalability, performance, and flexibility</strong>, making it the clear choice
                          for any high-performance decentralized application.
                        </p>
                        <p>Want to join the on-chain AI revolution?</p>
                        <p>
                          To start building with 0G, join our{' '}
                          <a href="https://discord.com/invite/0glabs" target="_blank" rel="noreferrer">
                            Discord
                          </a>{' '}
                          or{' '}
                          <a href="https://0g.ai/contact" target="_blank" rel="noreferrer">
                            reach out here
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

          <section className="t36_section_filter section_filter">
            <div className="t36_div029 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t36_div030 w-dyn-list t36_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t36_div031 cms-grid_list w-dyn-items">
              <div role="listitem" className="t36_div032 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t36_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t36_div033 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t36_img003 cms-grid_image"
                    />
                    <div className="t36_div034 spacer-medium hide-mobile-portrait"></div>
                    <div className="t36_div035 blog_contnet-wrapper">
                      <div className="t36_div036 blog_meta-wrapper">
                        <div className="t36_div037">Tech</div>
                        <div className="t36_div038 icon-embed-custom w-embed">
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
                        <div className="t36_div039">Sep 5, 2024</div>
                      </div>
                      <div className="t36_div040 spacer-xmedium"></div>
                      <h3 className="t36_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t36_div041 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t36_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t36_div042 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t36_img004 cms-grid_image"
                    />
                    <div className="t36_div043 spacer-medium hide-mobile-portrait"></div>
                    <div className="t36_div044 blog_contnet-wrapper">
                      <div className="t36_div045 blog_meta-wrapper">
                        <div className="t36_div046">Tech</div>
                        <div className="t36_div047 icon-embed-custom w-embed">
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
                        <div className="t36_div048">Aug 25, 2025</div>
                      </div>
                      <div className="t36_div049 spacer-xmedium"></div>
                      <h3 className="t36_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t36_div050 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t36_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t36_div051 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t36_img005 cms-grid_image"
                    />
                    <div className="t36_div052 spacer-medium hide-mobile-portrait"></div>
                    <div className="t36_div053 blog_contnet-wrapper">
                      <div className="t36_div054 blog_meta-wrapper">
                        <div className="t36_div055">Tech</div>
                        <div className="t36_div056 icon-embed-custom w-embed">
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
                        <div className="t36_div057">Aug 7, 2025</div>
                      </div>
                      <div className="t36_div058 spacer-xmedium"></div>
                      <h3 className="t36_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t36_div059 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t36_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t36_div060 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t36_img006 cms-grid_image"
                    />
                    <div className="t36_div061 spacer-medium hide-mobile-portrait"></div>
                    <div className="t36_div062 blog_contnet-wrapper">
                      <div className="t36_div063 blog_meta-wrapper">
                        <div className="t36_div064">Tech</div>
                        <div className="t36_div065 icon-embed-custom w-embed">
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
                        <div className="t36_div066">Jul 3, 2025</div>
                      </div>
                      <div className="t36_div067 spacer-xmedium"></div>
                      <h3 className="t36_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

