import React, { useEffect, useState } from 'react'
import './Tech39.css'

export default function Tech39() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t39-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t39-webflow', 'true')
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
      'Check out this insightful blog post: The Evolution of Data Availability in Blockchain and What’s Next'
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
    <div className="t39_container">
      <div className={`t39_copy-toast ${showToast ? 't39_show' : ''}`}>Link copied</div>

      <div className="t39_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t39_div002 hide">
          <div className="t39_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t39_div004">The Evolution of Data Availability in Blockchain and What’s Next</div>
        </div>

        <main className="t39_main-wrapper main-wrapper">
          <section className="t39_section_hero section_hero is-vertical">
            <div className="t39_div005 padding-global">
              <div className="t39_div006 container-large">
                <div className="t39_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t39_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t39_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t39_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t39_div009 hero_content-component is-vertical">
                  <div className="t39_div010 blog_meta-wrapper is-white">
                    <div className="t39_div011">Tech</div>
                    <div className="t39_div012 icon-embed-custom w-embed">
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
                    <div className="t39_div013">Aug 11, 2024</div>
                    <div className="t39_div014 icon-embed-custom w-embed">
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
                    <div className="t39_div015">0g</div>
                  </div>

                  <div className="t39_div016 spacer-small"></div>

                  <div className="t39_div017 max-width-large text-align-center">
                    <h1 className="t39_h1_001 heading-style-h3">
                      The Evolution of Data Availability in Blockchain and What’s Next
                    </h1>
                  </div>

                  <div className="t39_div018 spacer-small"></div>

                  <div className="t39_div019 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t39_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t39_div020 icon-embed-xsmall w-embed">
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
                      className="t39_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t39_div021 icon-embed-xsmall w-embed">
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
                      className="t39_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t39_div022 icon-embed-xsmall w-embed">
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

          <section className="t39_section_legal-content section_legal-content">
            <div className="t39_div023 padding-global">
              <div className="t39_div024 padding-section-medium">
                <div className="t39_div025 container-small">
                  <div className="t39_div026">
                    <div className="t39_div027 legal-content_component">
                      <div className="t39_div028 blog-rich-text w-richtext">
                        <p>
                          Data availability (DA) refers to the availability of relevant transaction data required to
                          verify a block’s validity. Given its direct relevance to Ethereum’s scalability, performance,
                          and potential use cases, it has become one of Web3’s most pressing infrastructure concerns.
                        </p>
                        <p>
                          Understanding the evolution of the DA space will give the reader advanced insights into the
                          space and its direction, including major use cases such as truly on-chain AI that are now
                          becoming a reality.
                        </p>
                        <p>In this article, we will cover:</p>
                        <ul role="list">
                          <li>Data availability and its significance</li>
                          <li>The emergence of data availability layers</li>
                          <li>Key limitations affecting industry advancement</li>
                          <li>New architectures for high-performance tasks</li>
                        </ul>
                        <h2>
                          <strong>Early Days: 2017-2021</strong>
                        </h2>
                        <p>
                          Even in Ethereum’s early days it was clear that scalability was a major concern, with the
                          network hitting <a href="https://etherscan.io/chart/tx">~1M transactions per day</a> in 2017
                          alone.&nbsp;
                        </p>
                        <p>Various solutions were proposed, including:</p>
                        <ol role="list">
                          <li>
                            <strong>Plasma: </strong>A framework for using child chains that periodically commit data to
                            the main Ethereum chain.
                          </li>
                          <li>
                            <strong>Sharding: </strong>Horizontal transaction processing for Ethereum.
                          </li>
                          <li>
                            <strong>State channels</strong>: Off-chain transaction channels that settle on-chain when
                            participants agree to close a channel.&nbsp;
                          </li>
                        </ol>
                        <p>
                          Layer 2 networks were ultimately chosen as the go-to solution, handling transactions off-chain
                          and then posting summarized proofs to Ethereum to prove honest execution.{' '}
                          <a href="https://www.optimism.io/">Optimism</a> and <a href="https://arbitrum.io/">Arbitrum</a>{' '}
                          are two examples that both launched in 2021 and maintain data availability by providing
                          off-chain transaction data that any full node may verify.
                        </p>
                        <figure className="t39_fig001 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t39_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f780bf9f20026edac3_Jc9knyS5iJfP5NPjnTpd10Cft7E.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          <strong>Daily Layer 2 Transactions. Source: </strong>
                          <a href="https://www.growthepie.xyz/fundamentals/transaction-count">
                            <strong>https://www.growthepie.xyz/fundamentals/transaction-count</strong>
                          </a>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          However, the number of daily transactions executed by Layer 2s has since grown immensely (see:
                          above). Ethereum’s{' '}
                          <a href="https://ethereum.org/en/developers/docs/nodes-and-clients/#:~:text=on%20Ethereum%27s%20state.-,Full%20node,-Full%20nodes%20do">
                            full nodes
                          </a>
                          , responsible for storing the entirety of Ethereum’s transaction history, have therefore been
                          receiving more and more data.&nbsp;
                        </p>
                        <p>
                          At this time, Ethereum’s EIP-4844 upgrade had not yet occurred, meaning that publishing Layer
                          2 transaction data to Ethereum was very expensive. This necessitated solutions that could
                          efficiently prove data availability, known as data availability layers.
                        </p>
                        <h2>
                          <strong>The Emergence of Data Availability Layers: 2021-2023</strong>
                        </h2>
                        <p>
                          Between 2021 and 2023, various projects began developing these data availability layers (DALs),
                          significantly reducing associated data availability costs.
                        </p>
                        <p>To understand DALs, one must note that networks have four different layers:</p>
                        <ol role="list">
                          <li>
                            <strong>The Execution Layer: </strong>Executes valid transactions and smart contract
                            operations.
                          </li>
                          <li>
                            <strong>The Settlement Layer: </strong>Finalizes and records transactions to ensure
                            immutability.
                          </li>
                          <li>
                            <strong>The Data Layer: </strong>Stores and provides access to transaction data and
                            blockchain state.
                          </li>
                          <li>
                            <strong>The Consensus Layer:</strong> Ensures all nodes in the network agree on the current
                            state of the blockchain and the order of transactions.
                          </li>
                        </ol>
                        <p>A monolithic blockchain is one where full nodes in a blockchain network handle all 4 tasks. Ethereum would be an example.</p>
                        <p>
                          In contrast, modular blockchains separate the data layer and consensus layer from execution and
                          settlement, providing a more cost-effective means of storing and verifying data. Celestia
                          launched in late 2023 as an early pioneer in this space, using{' '}
                          <a href="https://celestia.org/glossary/data-availability-sampling/">data availability sampling</a>{' '}
                          for cost-effective data verification that anyone can contribute to without needing a full node.
                        </p>
                        <p>
                          In short, this works by having light clients (a more lightweight version of full nodes) each
                          store small bits of data, and use mathematical sampling to prove that all data exists and is
                          valid.
                        </p>
                        <figure className="t39_fig002 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t39_div030">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f780bf9f20026edac0_2tN49ZajXBtdYZnMmt3RLJmBi8.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Other DAL solutions such as <a href="https://near.org/">NEAR</a>,{' '}
                          <a href="https://docs.eigenlayer.xyz/eigenda/overview">EigenDA</a>, and{' '}
                          <a href="https://www.availproject.org/">Avail</a> have also arrived. Each DAL takes a unique
                          approach, such as NEAR relying upon sharding and EigenDA using data availability
                          committees.&nbsp;
                        </p>
                        <p>As we’ll see, each has limitations that severely restrict both performance and potential use cases.</p>
                        <h2>
                          <strong>DAL Limitations: 2023 Onwards</strong>
                        </h2>
                        <p>
                          We are now at an interesting point in time where various DALs have launched and have others
                          using them as infrastructure, but their technology remains highly incapable of serving future
                          use cases.
                        </p>
                        <p>
                          Consider Celestia&apos;s performance bottlenecks. This includes a{' '}
                          <a href="https://docs.celestia.org/developers/integrate-celestia">12-second block speed</a>{' '}
                          (meaning slow latency), while throughput is limited to 6.67 mb per second. And although NEAR’s
                          throughput is over double that of Celestia’s, both projects are underwhelming and best suited
                          for Layer 2s with limited performance needs.
                        </p>
                        <p>
                          As the number of Web3 use cases expands, so too do the requirements to adequately process them
                          on-chain in a timely, secure, and cost-effective manner. The reality is that existing DA
                          solutions are still inadequate for this, and cannot support use cases such as:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>On-chain AI: </strong>AI models must quickly access vast amounts at a low cost for
                            model training, data inference, and more.
                          </li>
                          <li>
                            <strong>High-Frequency Trading: </strong>Require ultra-fast querying of order book prices, as
                            well as fast transaction settlement.
                          </li>
                          <li>
                            <strong>Gaming: </strong>Need fast access to data containing game states, assets, player
                            interactions, and more.
                          </li>
                          <li>
                            <strong>Interoperability: </strong>Fast sharing of data between different blockchain
                            networks.
                          </li>
                          <li>
                            <strong>Data Markets: </strong>Where users can store, update, and query data on-chain
                            efficiently, unlocking new business revenues around data sharing and monetization.
                          </li>
                        </ul>
                        <p>
                          Fortunately, given the importance of the DA space, it has received more widespread attention
                          and many are racing to build the truly performant solutions needed.
                        </p>
                        <p>
                          It is also a vast market, meaning there will be no shortage of data availability needs and room
                          for many solutions.
                        </p>
                        <h2>
                          <strong>Infinitely Scalable DA: 2024 Onwards</strong>
                        </h2>
                        <p>The DA space is racing to address the use cases above, and more. The winners in the space will provide a solution that’s:</p>
                        <ol role="list">
                          <li>
                            <strong>Fast</strong>: Data should be quierable or verifiable in sub-seconds, similar to Web2
                            data infrastructure solutions like AWS.
                          </li>
                          <li>
                            <strong>Interoperable</strong>: Capable of supporting EVM and non-EVM networks.
                          </li>
                          <li>
                            <strong>Highly Scalable:</strong> Able to interact at a global scale with billions (or more)
                            of transactions at any given moment in time. This is especially so for AI or high-frequency
                            trading.
                          </li>
                        </ol>
                        <p>None of the early DA solutions have solutions to support this at present, but have bright teams working hard.</p>
                        <p>Meanwhile, 0G has raised $35M in pre-seed funding round for a new data availability architecture predicted to address the above.</p>
                        <p>
                          We covered this in-depth <a href="https://0g.ai/blog/0g-s-data-availability-layer">in our blog post here</a>, but at a high level 0G has a built-in data storage system that can be quickly queried for fast data availability at ~10-30 MB per second, or 24x faster than Celestia. It is also infinitely scalable, as more consensus networks can be added, with each handling transactions in parallel. The priority has been AI projects, as they in particular require a DA solution like 0G, and we are focused on making AI a public good.
                        </p>
                        <p>
                          The tech is thus far highly promising, which is why investors have been so attracted to the
                          project. However, the team also realizes that this is a major market with room for many, and
                          hopes to see other promising solutions proposed so that we can advance the space together.
                        </p>
                        <p>All in all, we hope that the above provided useful context around the data availability landscape.</p>
                        <p>
                          If you’d like to join our ecosystem, <a href="https://0g.ai/contact">shoot us a message!</a>
                          &nbsp;
                        </p>
                        <p>
                          And <a href="https://x.com/0G_labs">follow us on Twitter</a> for up-to-date announcements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t39_section_filter section_filter">
            <div className="t39_div031 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t39_div032 w-dyn-list t39_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t39_div033 cms-grid_list w-dyn-items">
              <div role="listitem" className="t39_div034 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t39_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t39_div035 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t39_img003 cms-grid_image"
                    />
                    <div className="t39_div036 spacer-medium hide-mobile-portrait"></div>
                    <div className="t39_div037 blog_contnet-wrapper">
                      <div className="t39_div038 blog_meta-wrapper">
                        <div className="t39_div039">Tech</div>
                        <div className="t39_div040 icon-embed-custom w-embed">
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
                        <div className="t39_div041">Sep 5, 2024</div>
                      </div>
                      <div className="t39_div042 spacer-xmedium"></div>
                      <h3 className="t39_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t39_div043 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t39_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t39_div044 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t39_img004 cms-grid_image"
                    />
                    <div className="t39_div045 spacer-medium hide-mobile-portrait"></div>
                    <div className="t39_div046 blog_contnet-wrapper">
                      <div className="t39_div047 blog_meta-wrapper">
                        <div className="t39_div048">Tech</div>
                        <div className="t39_div049 icon-embed-custom w-embed">
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
                        <div className="t39_div050">Aug 25, 2025</div>
                      </div>
                      <div className="t39_div051 spacer-xmedium"></div>
                      <h3 className="t39_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t39_div052 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t39_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t39_div053 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t39_img005 cms-grid_image"
                    />
                    <div className="t39_div054 spacer-medium hide-mobile-portrait"></div>
                    <div className="t39_div055 blog_contnet-wrapper">
                      <div className="t39_div056 blog_meta-wrapper">
                        <div className="t39_div057">Tech</div>
                        <div className="t39_div058 icon-embed-custom w-embed">
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
                        <div className="t39_div059">Aug 7, 2025</div>
                      </div>
                      <div className="t39_div060 spacer-xmedium"></div>
                      <h3 className="t39_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t39_div061 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t39_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t39_div062 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t39_img006 cms-grid_image"
                    />
                    <div className="t39_div063 spacer-medium hide-mobile-portrait"></div>
                    <div className="t39_div064 blog_contnet-wrapper">
                      <div className="t39_div065 blog_meta-wrapper">
                        <div className="t39_div066">Tech</div>
                        <div className="t39_div067 icon-embed-custom w-embed">
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
                        <div className="t39_div068">Jul 3, 2025</div>
                      </div>
                      <div className="t39_div069 spacer-xmedium"></div>
                      <h3 className="t39_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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
