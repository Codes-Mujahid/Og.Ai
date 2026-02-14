import React, { useEffect, useState } from 'react'
import './Tech40.css'

export default function Tech40() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t40-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t40-webflow', 'true')
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
      'Check out this insightful blog post: The 0G Ecosystem: A Comprehensive Overview'
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
    <div className="t40_container">
      <div className={`t40_copy-toast ${showToast ? 't40_show' : ''}`}>Link copied</div>

      <div className="t40_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t40_div002 hide">
          <div className="t40_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t40_div004">The 0G Ecosystem: A Comprehensive Overview</div>
        </div>

        <main className="t40_main-wrapper main-wrapper">
          <section className="t40_section_hero section_hero is-vertical">
            <div className="t40_div005 padding-global">
              <div className="t40_div006 container-large">
                <div className="t40_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t40_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t40_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t40_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t40_div009 hero_content-component is-vertical">
                  <div className="t40_div010 blog_meta-wrapper is-white">
                    <div className="t40_div011">Tech</div>
                    <div className="t40_div012 icon-embed-custom w-embed">
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
                    <div className="t40_div013">Aug 6, 2024</div>
                    <div className="t40_div014 icon-embed-custom w-embed">
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
                    <div className="t40_div015">0g</div>
                  </div>

                  <div className="t40_div016 spacer-small"></div>

                  <div className="t40_div017 max-width-large text-align-center">
                    <h1 className="t40_h1_001 heading-style-h3">
                      The 0G Ecosystem: A Comprehensive Overview
                    </h1>
                  </div>

                  <div className="t40_div018 spacer-small"></div>

                  <div className="t40_div019 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t40_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t40_div020 icon-embed-xsmall w-embed">
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
                      className="t40_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t40_div021 icon-embed-xsmall w-embed">
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
                      className="t40_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t40_div022 icon-embed-xsmall w-embed">
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

          <section className="t40_section_legal-content section_legal-content">
            <div className="t40_div023 padding-global">
              <div className="t40_div024 padding-section-medium">
                <div className="t40_div025 container-small">
                  <div className="t40_div026">
                    <div className="t40_div027 legal-content_component">
                      <div className="t40_div028 blog-rich-text w-richtext">
                        <p>
                          0G is the first decentralized AI layer (AIL)—a modular, infinitely-scalable layer 1 that
                          integrates storage, data availability, compute, and a service marketplace to underpin the
                          future of all AI use cases and applications.
                        </p>
                        <p>
                          Given our full-stack approach, 0G has quickly found itself right in the middle of key Web3
                          verticals, working with key industry players to advance the industry forward as a whole.
                        </p>
                        <p>
                          0G is currently experiencing high demand for its highly scalable decentralized storage
                          service and data availability solution. Additionally, the company is forming partnerships
                          with external players to enhance its offerings further.
                        </p>
                        <p>This article will examine the 0G ecosystem from two key lenses:</p>
                        <ol role="list">
                          <li>
                            <strong>Supply Side:</strong> Technological solutions implemented by 0G. This includes ZK
                            tech, interoperability solutions, restaking primitives, decentralized GPUs, indexing tools,
                            and oracles.
                          </li>
                          <li>
                            <strong>Demand Side: </strong>Projects using 0G’s decentralized storage and data
                            availability solutions. Examples include AI projects, blockchains, Web3 infrastructure, and
                            GameFi.
                          </li>
                        </ol>
                        <p>
                          Most of this progress has shaped up in the 3 months since 0G first announced its whopping{' '}
                          <a href="https://blog.0g.ai/blog/pre-seed-announcement">$35M pre-seed</a> funding round and the
                          team has been busy onboarding many more.&nbsp;
                        </p>
                        <h2>
                          <strong>Supply Side</strong>
                        </h2>
                        <p>The supply side of the 0G ecosystem refers to projects providing critical infrastructure components to 0G.</p>
                        <p>
                          <strong>ZK &amp; Interop:&nbsp;</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://union.build/">
                              <strong>Union</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://brevis.network/">
                              <strong>Brevis</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://gevulot.com/">
                              <strong>Gevulot</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.axelar.network/">
                              <strong>Axelar</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          These projects help 0G connect with external networks and ecosystems. For example, Brevis has
                          interoperability infrastructure that leverages ZK Proofs to securely stream stored data from
                          0G to external networks, as needed.
                        </p>
                        <p>
                          <strong>Restaking:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://www.eigenlayer.xyz/">
                              <strong>EigenLayer</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://babylonchain.io/">
                              <strong>Babylon</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com/pingpongbuild">
                              <strong>PingPong</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Restaking projects like EigenLayer, Babylon, and PingPong reinforce network security by
                          enabling users to stake tokens across multiple protocols.
                        </p>
                        <p>
                          <strong>GPUs:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://io.net/">
                              <strong>IoNet</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.exabits.ai/">
                              <strong>exaBits</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://aethir.com/ai">
                              <strong>Aethir</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://hyperbolic.xyz/">
                              <strong>Hyperbolic</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          0G uses GPUs to accelerate the erasure coding process associated with data storage.
                          Erasure-coding means that the data being stored is fragmented into redundant smaller pieces
                          and distributed across multiple storage locations. This is for security measures (such as in
                          the event of an outage) and also helps to efficiently retrieve data.
                        </p>
                        <p>
                          <strong>Indexing &amp; Oracles:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://thehemera.com/">
                              <strong>Hemera</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://redstone.finance/">
                              <strong>Redstone</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          0G is working with Hemera to create{' '}
                          <a href="https://medium.com/hemera-protocol/hemera-blobarchive-for-ethereum-permanent-data-availability-for-layer-2-11c289b20d45">
                            BlobArchive
                          </a>
                          , which indexes Layer 2 data generated post EIP-4844 (Ethereum’s upgrade that introduced data
                          blobs). Meanwhile, 0G is using Redstone as an oracle provider to stream pricing as needed,
                          such as for pricing used by AI models built on 0G.&nbsp;
                        </p>
                        <h2>
                          <strong>Demand Side</strong>
                        </h2>
                        <p>
                          The demand side of the 0G ecosystem is rapidly expanding with a broad spectrum of projects
                          using 0G for both data storage and data availability purposes.
                        </p>
                        <p>
                          <strong>AI</strong>
                        </p>
                        <p>
                          AI projects of varying types are leveraging 0G, including projects focused on data
                          generation, data cleaning and labeling, AI models, model inference, dApps, on-chain Agents,
                          and more.
                        </p>
                        <p>
                          For example, Talus uses 0G’s decentralized storage for fast AI model retrieval and inference,
                          supporting their AI Smart Agent platform.
                        </p>
                        <p>
                          <strong>L1s, L2s, L3s, and Appchains:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://polygon.technology/">
                              <strong>Polygon</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.optimism.io/">
                              <strong>OP</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://arbitrum.io/">
                              <strong>Arbitrum</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://manta.network/">
                              <strong>Manta</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Blockchain networks use 0G as a key data storage provider and data availability solution for
                          those building on their blockchains. 0G is already partnered with leading projects, including
                          serving as a DA solution for those building with OP Stack, Arbitrum Orbits, and more.
                        </p>
                        <p>
                          <strong>Other Infra:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://www.alchemy.com/">
                              <strong>Alchemy</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.nodekit.xyz/">
                              <strong>Nodekit</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.altlayer.io/">
                              <strong>AltLayer</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.gelato.network/">
                              <strong>Gelato</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.caldera.xyz/">
                              <strong>Caldera</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Infrastructure projects are also working with 0G to expand their offerings. For example, 0G
                          will be an alternative DA solution working with RAAS providers like Caldera to provide
                          storage and DA for rollups and app-chains building with the OP stack.
                        </p>
                        <p>
                          <strong>Gaming:</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://www.bladedao.games/">
                              <strong>Blade Games</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.shrapnel.com/">
                              <strong>Shrapnel</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.gaimin.io/">
                              <strong>Gaimin</strong>
                            </a>
                          </li>
                          <li>
                            <a href="https://carv.io/">
                              <strong>Carv</strong>
                            </a>
                          </li>
                        </ul>
                        <p>
                          The gaming industry is also tapping into the potential of 0G for improved performance. An
                          interesting example is how 0G is supporting Blade in providing real-time, decentralized
                          storage using zero-knowledge proofs for on-chain game states, ensuring verifiable and
                          trustless game processes and results.
                        </p>
                        <h2>
                          <strong>The 0G Ecosystem: A Comprehensive Overview</strong>
                        </h2>
                        <p>
                          In summary, the 0G ecosystem has rapidly emerged as a pivotal player in the Web3 space,
                          driven by its highly scalable decentralized storage and data availability solutions. The
                          above provided an overview of our ecosystem which is by no means exhaustive, and many more
                          key players are building alongside us.&nbsp;
                        </p>
                        <p>
                          If you'd like to join our ecosystem,{' '}
                          <a href="https://0g.ai/contact">shoot us a message!</a> We'll reach out as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t40_section_filter section_filter">
            <div className="t40_div031 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t40_div032 w-dyn-list t40_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t40_div033 cms-grid_list w-dyn-items">
              <div role="listitem" className="t40_div034 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t40_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t40_div035 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t40_img003 cms-grid_image"
                    />
                    <div className="t40_div036 spacer-medium hide-mobile-portrait"></div>
                    <div className="t40_div037 blog_contnet-wrapper">
                      <div className="t40_div038 blog_meta-wrapper">
                        <div className="t40_div039">Tech</div>
                        <div className="t40_div040 icon-embed-custom w-embed">
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
                        <div className="t40_div041">Sep 5, 2024</div>
                      </div>
                      <div className="t40_div042 spacer-xmedium"></div>
                      <h3 className="t40_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t40_div043 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t40_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t40_div044 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t40_img004 cms-grid_image"
                    />
                    <div className="t40_div045 spacer-medium hide-mobile-portrait"></div>
                    <div className="t40_div046 blog_contnet-wrapper">
                      <div className="t40_div047 blog_meta-wrapper">
                        <div className="t40_div048">Tech</div>
                        <div className="t40_div049 icon-embed-custom w-embed">
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
                        <div className="t40_div050">Aug 25, 2025</div>
                      </div>
                      <div className="t40_div051 spacer-xmedium"></div>
                      <h3 className="t40_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t40_div052 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t40_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t40_div053 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t40_img005 cms-grid_image"
                    />
                    <div className="t40_div054 spacer-medium hide-mobile-portrait"></div>
                    <div className="t40_div055 blog_contnet-wrapper">
                      <div className="t40_div056 blog_meta-wrapper">
                        <div className="t40_div057">Tech</div>
                        <div className="t40_div058 icon-embed-custom w-embed">
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
                        <div className="t40_div059">Aug 7, 2025</div>
                      </div>
                      <div className="t40_div060 spacer-xmedium"></div>
                      <h3 className="t40_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t40_div061 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t40_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t40_div062 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t40_img006 cms-grid_image"
                    />
                    <div className="t40_div063 spacer-medium hide-mobile-portrait"></div>
                    <div className="t40_div064 blog_contnet-wrapper">
                      <div className="t40_div065 blog_meta-wrapper">
                        <div className="t40_div066">Tech</div>
                        <div className="t40_div067 icon-embed-custom w-embed">
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
                        <div className="t40_div068">Jul 3, 2025</div>
                      </div>
                      <div className="t40_div069 spacer-xmedium"></div>
                      <h3 className="t40_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

