import React, { useEffect, useState } from 'react'
import './Tech30.css'

export default function Tech30() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t30-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t30-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: Benchmarking 0G Performance')
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
    <div className="t30_container">
      <div className={`t30_copy-toast ${showToast ? 't30_show' : ''}`}>Link copied</div>

      <div className="t30_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t30_div002 hide">
          <div className="t30_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t30_div004">Benchmarking 0G Performance</div>
        </div>

        <main className="t30_main-wrapper main-wrapper">
          <section className="t30_section_hero section_hero is-vertical">
            <div className="t30_div005 padding-global">
              <div className="t30_div006 container-large">
                <div className="t30_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t30_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t30_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t30_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t30_div008 hero_content-component is-vertical">
                  <div className="t30_div009 blog_meta-wrapper is-white">
                    <div className="t30_div010">Tech</div>
                    <div className="t30_div011 icon-embed-custom w-embed">
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
                    <div className="t30_div012">Jan 21, 2025</div>
                    <div className="t30_div013 icon-embed-custom w-embed">
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
                    <div className="t30_div014">0g</div>
                  </div>

                  <div className="t30_div015 spacer-small"></div>

                  <div className="t30_div016 max-width-large text-align-center">
                    <h1 className="t30_heading heading-style-h3">Benchmarking 0G Performance</h1>
                  </div>

                  <div className="t30_div017 spacer-small"></div>

                  <div className="t30_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t30_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t30_div019 icon-embed-xsmall w-embed">
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
                      className="t30_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t30_div020 icon-embed-xsmall w-embed">
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
                      className="t30_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t30_div021 icon-embed-xsmall w-embed">
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

          <section className="t30_section_legal-content section_legal-content">
            <div className="t30_div022 padding-global">
              <div className="t30_div023 padding-section-medium">
                <div className="t30_div024 container-small">
                  <div className="t30_div025">
                    <div className="t30_div026 legal-content_component">
                      <div className="t30_div027 blog-rich-text w-richtext">
                        <p>
                          0G is the largest AI Layer 1 ecosystem, powered by the fastest DeAIOS, and
                          is bringing AI fully on-chain.
                        </p>
                        <p>
                          High performance is crucial for 0G to seamlessly bring AI on-chain, which
                          entails managing complex models and large datasets with minimal latency. We
                          performed testing across three transaction types, against Berachain,
                          Evmos, Kava, and Sei, which all represent highly performant networks that
                          also use the Cosmos SDK.&nbsp;
                        </p>
                        <p>
                          This testing is important as 0G is still in its V1 architecture phase,
                          with an upcoming transition to V2 that will further enhance performance.
                          This means that preliminary results reflect 0G&apos;s performance in its
                          early days, against top-tier networks that have existed for much
                          longer.&nbsp;
                        </p>
                        <h4>Key takeaways from our testing include:</h4>
                        <ul role="list">
                          <li>
                            <strong>Performance Across Testing Categories: </strong>0G demonstrated
                            competitive results for simple transactions, but underperformed slightly
                            for ERC-20 transactions and Uniswap transactions.
                          </li>
                          <li>
                            <strong>V1 Context and Future Potential:</strong> These results reflect
                            0G&apos;s early-stage V1 architecture, built on the now-discontinued
                            Ethermint framework. Despite this, the network demonstrates strong
                            foundational performance and significant promise for further growth.
                          </li>
                          <li>
                            <strong>V2 Upgrades to Redefine Performance:</strong> Upcoming V2
                            enhancements, including a dual-chain architecture and dynamic multi-chain
                            scaling, will position 0G as a high-performance, future-proof network
                            capable of surpassing leading chains in throughput and scalability.
                          </li>
                        </ul>
                        <p>
                          We have also published the benchmarking results{' '}
                          <a href="https://github.com/0g-wh/evmchainbench">here on Github</a>.
                        </p>
                        <p>
                          <strong>Benchmarking Overview</strong>
                        </p>
                        <p>
                          Benchmarking is essential to evaluate 0G&apos;s current performance of its
                          V1 architecture and identify areas for improvement. V1 represents the first
                          iteration of <a href="https://docs.0g.ai/0g-chain">0G Chain</a>, built to
                          demonstrate core functionality while tackling the unique demands of
                          decentralized applications. With significant upgrades planned for 0G&apos;s
                          V2, it&apos;s crucial first to establish a baseline for how V1 performs
                          compared to leading networks.
                        </p>
                        <p>
                          We tested against other leading EVM-compatible networks, including
                          Berachain, Evmos, Kava, and Sei, with results measured in Transactions Per
                          Second (TPS). This research was designed to provide a transparent view of
                          0G&apos;s current capabilities while identifying opportunities for
                          improvement as we transition from V1 to V2.
                        </p>
                        <p>
                          During our testing, we focused on three distinct categories of
                          transactions:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Simple Transactions</strong>: Measures the ability to process
                            basic account-to-account transactions, such as transferring native
                            tokens. Good for reflecting baseline throughput and efficiency.
                          </li>
                          <li>
                            <strong>ERC20 Transactions</strong>: Evaluates performance with ERC20
                            token standards, meaning Ethereum-based transactions.&nbsp;
                          </li>
                          <li>
                            <strong>Uniswap Transactions</strong>: As a transaction on a DEX like
                            Uniswap is more complex than a simple token transfer, this illustrates
                            each blockchain&apos;s speed at executing complex smart contract
                            interactions, such as a common blockchain transaction.
                          </li>
                        </ol>
                        <p>
                          By testing across all three transaction types, we can see how each network
                          performs in different scenarios.
                        </p>
                        <p>
                          <strong>Networks: Berachain, Kava, Evmos, Sei</strong>
                        </p>
                        <p>We decided to test 0G&apos;s performance against four networks:</p>
                        <ol role="list">
                          <li>Berachain</li>
                          <li>Evmos</li>
                          <li>Kava</li>
                          <li>Sei</li>
                        </ol>
                        <p>
                          0G, Evmos, and Kava all use Cosmos and Ethermint, where each Ethereum
                          transaction is wrapped into a Cosmos transaction for consensus processing.
                          &nbsp; Meanwhile, Berachain uses a{' '}
                          <strong>Cosmos+Beacon API+Geth/Reth</strong> design. This approach wraps
                          entire Ethereum block payloads into single Cosmos transactions for
                          consensus processing.&nbsp;
                        </p>
                        <p>
                          The approach taken by 0G, Evmos, and Kava introduces additional consensus
                          overhead, resulting in slightly lower TPS compared to Berachain. By
                          processing block-level payloads rather than transaction-level ones,
                          Berachain significantly reduces consensus overhead, yielding consistently
                          higher TPS across all categories, reflected in the results below.
                        </p>
                        <p>
                          Although Sei&apos;s extensive modifications to Cosmos, Tendermint, and
                          Go-Ethereum make its architecture fundamentally different, we included Sei
                          here for completeness.&nbsp;
                        </p>
                        <p>
                          <strong>RESULTS</strong>
                        </p>
                        <p>The results can be seen as follows:</p>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="t30_figure001 w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t30_div028">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0599cd8e14724b15e_f58dSwvPpqZcNlZYvzSBm08g.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The benchmarking results reveal that for Simple transactions, it was
                          comparable to all other networks. However, the results indicate mixed
                          performance in other categories:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Simple Transactions</strong>: 0G outperformed Kava and delivered
                            results on par with other established networks like Bera, Evmos, and Sei.
                            This highlights its strong foundational performance for processing basic
                            transactions efficiently.
                          </li>
                          <li>
                            <strong>ERC-20 Transactions</strong>: While 0G outperformed Kava, it
                            underperformed compared to Bera, Evmos, and Sei. This suggests there is
                            room for optimization in handling token transactions under the widely
                            adopted ERC-20 standard.
                          </li>
                          <li>
                            <strong>Uniswap Transactions</strong>: 0G showed lower performance in
                            this category, reflecting a need for enhancements to handle better the
                            computational demands of decentralized exchange (DEX) operations.
                          </li>
                        </ol>
                        <p>At a technical level, there are explanations for these differences.&nbsp;</p>
                        <p>
                          For instance, Berachain&apos;s advantage is that they leverage a block-level
                          payload architecture. This means that instead of processing transactions one
                          by one, Berachain processes entire blocks of transactions at once. This
                          reduces overhead and improves efficiency, resulting in higher transaction
                          throughput.&nbsp;
                        </p>
                        <p>
                          This architecture inspired our V2 upgrades. For context, 0G&apos;s V1 was
                          built on <a href="https://docs.ethermint.zone/">Ethermint</a>, which has
                          limitations due to its discontinued development. Current architecture
                          introduces some overhead, impacting TPS relative to simpler chains.
                        </p>
                        <h3>
                          <strong>Transitioning to V2: A Transformative Leap</strong>
                        </h3>
                        <p>
                          It&apos;s important to note that despite 0G&apos;s strong performance and
                          recent growth, it is a significantly newer network compared to these other
                          chains. And the results reflect the network&apos;s V1 state, which is built
                          on Ethermint, a framework that has since been discontinued. Despite this,
                          0G demonstrates competitive performance, especially in Simple TPS, showing
                          promise for further optimization and scalability.
                        </p>
                        <p>With V2, arriving later in 2025, 0G will adopt a new architecture inspired by Ethereum 2.0.</p>
                        <p>
                          In our upcoming V2 release, we will adopt a block-level payload approach
                          inspired by Berachain&apos;s architecture, significantly reducing consensus
                          overhead and boosting efficiency. Additionally, we will optimize block
                          finality times to enable faster transaction confirmations while maintaining
                          high TPS. To further refine performance, we will conduct extensive
                          benchmarking to balance block size, latency, and gas fees, ensuring an
                          ideal tradeoff that enhances both user experience and network scalability.
                        </p>
                        <p>There are two other major changes that will enhance performance:</p>
                        <ol role="list">
                          <li>
                            <strong>Switching to a dual-chain paradigm</strong>
                          </li>
                        </ol>
                        <p>
                          0G V2 will adopt a dual-chain paradigm inspired by Ethereum 2.0, where a
                          beacon chain (which handles consensus) works alongside an execution chain
                          (which processes transactions). This separation optimizes performance,
                          enabling faster and more efficient transaction processing while allowing 0G
                          to move beyond the discontinued Ethermint framework.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Multi-chain scaling</strong>
                          </li>
                        </ol>
                        <p>
                          0G&apos;s V2 architecture introduces horizontal scalability, enabling the
                          addition of new, independent consensus networks as demand grows. This
                          approach ensures that 0G can dynamically expand to handle increasing
                          transaction and data volumes while maintaining high performance and
                          throughput.
                        </p>
                        <p>
                          A key part of this is{' '}
                          <a href="https://docs.0g.ai/0g-chain?_highlight=shared&_highlight=staking#shared-staking:~:text=Traditionally%2C%20adding%20more%20consensus%20networks%20would%20require%20validators%20to%20stake%20additional%20assets%20for%20each%20network%2C%20making%20it%20difficult%20to%20maintain%20sufficient%20security%20across%20the%20entire%20system.%200G%20overcomes%20this%20challenge%20by%20implementing%20a%20shared%20staking%20model.">
                            shared staking
                          </a>
                          , where validators stake funds on the Ethereum mainnet to provide security
                          across all 0G Consensus networks they participate in. If a slashable event
                          occurs on any network, the validator&apos;s mainnet stake is penalized,
                          extending Ethereum-level security to all of 0G&apos;s networks
                          simultaneously. This mechanism eliminates the need for validators to stake
                          additional assets for each new network, making it easier to scale securely.
                        </p>
                        <h3>
                          <strong>What&apos;s Next for 0G?</strong>
                        </h3>
                        <p>
                          0G had{' '}
                          <a href="https://0g.ai/blog/0g-s-2024-in-review-building-the-future-of-decentralized-ai">
                            many significant accomplishments in 2024
                          </a>
                          , including new products such as:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Node Sale Success: </strong>Over 83,000 nodes sold across 6,000+
                            unique wallets.&nbsp;
                          </li>
                          <li>
                            <strong>Game-Changing Product Launches:</strong> Launched 0G Service
                            Marketplace, 0G Compute Network, and 0G Serving.&nbsp;
                          </li>
                          <li>
                            <strong>Major Fundraising:</strong> $325M raised.
                          </li>
                          <li>
                            <strong>Expanding Our Ecosystem:</strong> 155+ partners across all Web3
                            verticals.
                          </li>
                          <li>
                            <strong>Global Presence: </strong>Participating in over 100 events and
                            hosting 3 hackathons to inspire innovation.
                          </li>
                        </ul>
                        <p>
                          Heading into 2025, one of our key focuses is to further improve our
                          performance, for which our V2 upgrades will be a core aspect. We also have
                          exciting product launches, such as our Agent Network, and we&apos;ll be
                          sharing details on it shortly.
                        </p>
                        <p>
                          <a href="https://discord.com/invite/0glabs">Reach out via Discord.</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t30_section_filter section_filter">
            <div className="t30_div029 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t30_div030 w-dyn-list t30_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t30_div031 cms-grid_list w-dyn-items">
              <div role="listitem" className="t30_div032 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t30_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t30_div033 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t30_img003 cms-grid_image"
                    />
                    <div className="t30_div034 spacer-medium hide-mobile-portrait"></div>
                    <div className="t30_div035 blog_contnet-wrapper">
                      <div className="t30_div036 blog_meta-wrapper">
                        <div className="t30_div037">Tech</div>
                        <div className="t30_div038 icon-embed-custom w-embed">
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
                        <div className="t30_div039">Sep 5, 2024</div>
                      </div>
                      <div className="t30_div040 spacer-xmedium"></div>
                      <h3 className="t30_h3_001 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t30_div041 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t30_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t30_div042 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t30_img004 cms-grid_image"
                    />
                    <div className="t30_div043 spacer-medium hide-mobile-portrait"></div>
                    <div className="t30_div044 blog_contnet-wrapper">
                      <div className="t30_div045 blog_meta-wrapper">
                        <div className="t30_div046">Tech</div>
                        <div className="t30_div047 icon-embed-custom w-embed">
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
                        <div className="t30_div048">Aug 25, 2025</div>
                      </div>
                      <div className="t30_div049 spacer-xmedium"></div>
                      <h3 className="t30_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits
                        11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t30_div050 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t30_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t30_div051 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t30_img005 cms-grid_image"
                    />
                    <div className="t30_div052 spacer-medium hide-mobile-portrait"></div>
                    <div className="t30_div053 blog_contnet-wrapper">
                      <div className="t30_div054 blog_meta-wrapper">
                        <div className="t30_div055">Tech</div>
                        <div className="t30_div056 icon-embed-custom w-embed">
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
                        <div className="t30_div057">Aug 7, 2025</div>
                      </div>
                      <div className="t30_div058 spacer-xmedium"></div>
                      <h3 className="t30_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+
                        Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t30_div059 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t30_a007 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t30_div060 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t30_img006 cms-grid_image"
                    />
                    <div className="t30_div061 spacer-medium hide-mobile-portrait"></div>
                    <div className="t30_div062 blog_contnet-wrapper">
                      <div className="t30_div063 blog_meta-wrapper">
                        <div className="t30_div064">Tech</div>
                        <div className="t30_div065 icon-embed-custom w-embed">
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
                        <div className="t30_div066">Jul 3, 2025</div>
                      </div>
                      <div className="t30_div067 spacer-xmedium"></div>
                      <h3 className="t30_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

