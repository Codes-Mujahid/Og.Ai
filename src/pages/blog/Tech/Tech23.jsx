import React, { useEffect, useState } from 'react'
import './Tech23.css'

export default function Tech23() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t23-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t23-webflow', 'true')
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
      'Check out this insightful blog post: Building Decentralized AI? Here’s Why 0G Should Be Part of Your Stack'
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
    <div className="t23_container">
      <div className="t23_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t23_div002 hide">
          <div className="t23_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t23_div004">
            Building Decentralized AI? Here’s Why 0G Should Be Part of Your Stack
          </div>
        </div>

        <main className="t23_main-wrapper main-wrapper">
          <section className="t23_section_hero section_hero is-vertical">
            <div className="t23_div005 padding-global">
              <div className="t23_div006 container-large">
                <div className="t23_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t23_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t23_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t23_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t23_div010 hero_content-component is-vertical">
                  <div className="t23_div011 blog_meta-wrapper is-white">
                    <div className="t23_div012">Tech</div>
                    <div className="t23_div013 icon-embed-custom w-embed">
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
                    <div className="t23_div014">Mar 18, 2025</div>
                    <div className="t23_div015 icon-embed-custom w-embed">
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
                    <div className="t23_div016">0g</div>
                  </div>

                  <div className="t23_div017 spacer-small"></div>

                  <div className="t23_div018 max-width-large text-align-center">
                    <h1 className="t23_heading heading-style-h3">
                      Building Decentralized AI? Here’s Why 0G Should Be Part of Your Stack
                    </h1>
                  </div>

                  <div className="t23_div019 spacer-small"></div>

                  <div className="t23_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t23_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t23_div022 icon-embed-xsmall w-embed">
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
                      className="t23_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t23_div024 icon-embed-xsmall w-embed">
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
                      className="t23_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t23_div026 icon-embed-xsmall w-embed">
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

          <section className="t23_div027 section_legal-content">
            <div className="t23_div028 padding-global">
              <div className="t23_div029 padding-section-medium">
                <div className="t23_div030 container-small">
                  <div className="t23_div031">
                    <div className="t23_div032 legal-content_component">
                      <div className="t23_div033 blog-rich-text w-richtext">
                        <p>
                          At its core, web3 is about building new decentralized solutions
                          without scalability, ownership or collaboration constraints. AI,
                          on the other hand, has traditionally been the opposite: opaque,
                          centralized, and difficult to integrate into permissionless
                          systems. For builders, this creates a paradox: AI is increasingly
                          powerful and necessary, but most AI tools force developers into
                          closed ecosystems, restrictive access models, or onchain
                          environments that aren’t purpose-built for AI.
                        </p>
                        <p>
                          0G was designed to change this. As the first decentralized AI
                          protocol (AIP), 0G makes possible decentralized AI apps to bring
                          about a truly democratized future of intelligence. It’s a
                          full-stack solution that provides everything an AI application
                          needs: compute, data availability, and storage. And projects
                          deploying on 0G’s L1 have the benefit of faster and more
                          seamless interplay between all these specialized capabilities.
                        </p>
                        <p>
                          <strong>
                            But here’s the key point: you don’t have to fully deploy on
                            0G’s chain to benefit from its powerful, modular features!
                          </strong>
                        </p>
                        <p>
                          Modular AI infrastructure means you can pick and choose what
                          you need. Whether you want to decrease the operational costs of
                          an AI dApp or run your existing AI models in a more verifiable
                          onchain environment, 0G’s modular offerings can plug directly
                          into your current stack.&nbsp;
                        </p>
                        <h2>0G’s Modular Infrastructure Can Benefit Any AI Stack</h2>
                        <p>
                          One of the biggest misconceptions about onchain AI is that it
                          requires full migration to a new blockchain. The reality is
                          much more flexible. 0G’s modular architecture allows builders
                          to tap into decentralized AI infrastructure without abandoning
                          their existing ecosystems.&nbsp;
                        </p>
                        <p>The end result is more:</p>
                        <ul role="list">
                          <li>
                            <strong>Targeted AI Infrastructure</strong>: Use 0G’a storage,
                            compute, and DA solutions independently or in tandem,
                            depending on your strategic needs..
                          </li>
                          <li>
                            <strong>Scalability and Flexibility</strong>: Tap into
                            scalable, lower-cost AI infrastructure that unlocks new
                            product build options and end user possibilities.
                          </li>
                          <li>
                            <strong>Cross-Chain Compatibility</strong>: Keep the core of
                            your existing AI setup while integrating best-in-class AI
                            infrastructure services.
                          </li>
                        </ul>
                        <p>
                          Let’s break down what this looks like across several of 0G’s
                          core AI infrastructure layers.
                        </p>
                        <h2>AI Storage: Long-Term &amp; High-Speed Solutions</h2>
                        <p>
                          AI models are data-hungry, since they require vast amounts of
                          storage for training datasets, inference logs, and real-time
                          operational data. Traditional blockchain storage solutions like
                          Arweave and Filecoin weren’t designed for AI workloads, leading
                          to slow retrieval speeds and inefficient data access. 0G’s
                          decentralized storage infrastructure is different.
                        </p>
                        <p>0G offers two storage tiers designed to meet different needs:</p>
                        <ul role="list">
                          <li>
                            <strong>Standard Storage</strong>: A low-cost, decentralized
                            storage layer for archival datasets, training data, and rollup
                            state history.
                          </li>
                          <li>
                            <strong>Turbo Storage</strong>: A high-speed storage layer
                            optimized for AI inference, dynamic dApps, and real-time
                            querying.
                          </li>
                        </ul>
                        <p>
                          With this, a web3 social app using AI for personalized feeds
                          could store long-term behavioral data using 0G Standard Storage,
                          ensuring cost-effective data retention while using Turbo Storage
                          for real-time content recommendations. Or an AI-powered NFT
                          marketplace could store generative model weights and metadata in
                          0G Storage, ensuring onchain provenance and availability without
                          incurring the high costs of centralized storage providers.
                        </p>
                        <p>
                          Both solutions use onchain incentives and cryptographic proofs
                          to ensure data integrity while reducing reliance on centralized
                          cloud providers, in addition to enabling new hybrid AI models.
                        </p>
                        <h2>Data Availability: Scalable, Trustless, &amp; Cost-Efficient</h2>
                        <p>
                          One of the most pressing technical challenges for L2s, rollups,
                          and AI-powered dApps is ensuring that data remains available and
                          verifiable without overwhelming the base layer they rely on.
                          Traditional DA solutions weren’t built for AI, meaning they
                          struggle with handling large, high-throughput AI datasets that
                          require constant state transitions and onchain interactions.
                        </p>
                        <p>
                          0G solves this with an infinitely scalable DA layer that enables
                          rollups, AI-enhanced smart contracts, and decentralized AI to
                          offload data while maintaining security and accessibility.
                        </p>
                        <p>Even if your AI is not fully deployed on 0G chain, you can use 0G DA to:</p>
                        <ul role="list">
                          <li>
                            <strong>Reduce the cost of posting data onchain</strong>{' '}
                            compared to Ethereum or traditional L1 DA solutions.
                          </li>
                          <li>
                            <strong>Ensure fast, low-latency data access</strong> without
                            sacrificing decentralization or flexibility.
                          </li>
                          <li>
                            <strong>Integrate seamlessly with rollup frameworks</strong>{' '}
                            like AltLayer to optimize scalability.
                          </li>
                        </ul>
                        <p>
                          Consider a DeFi rollup that needs efficient storage for trade
                          execution history: by using 0G DA instead of something like
                          Ethereum, the rollup can significantly cut costs while ensuring
                          all transactions remain verifiable onchain. Similarly, an
                          AI-powered DAO governance system could use 0G DA to securely
                          store and verify voting data, preventing manipulation and
                          maintaining transparency across decision-making processes.
                        </p>
                        <h2>AI Compute: Verifiable Onchain Inference Execution</h2>
                        <p>
                          Most blockchains are designed for transaction processing, not AI
                          execution. Running AI models onchain is difficult due to high
                          computation costs, slow inference speeds, and a lack of scalable
                          compute infrastructure. That’s why AI in web3 today is still
                          mostly offchain and centralized.
                        </p>
                        <p>
                          0G solves this by providing a decentralized compute network built
                          specifically for AI inference. Instead of relying on closed AI
                          APIs, developers can run AI models trustlessly, with onchain
                          verifiability.
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Onchain AI inference execution </strong>for a vast,
                            growing range of AI dApps.
                          </li>
                          <li>
                            <strong>Support for advanced AI models </strong>like
                            Llama-3.3-70B-Instruct and DeepSeek-R1-70B.
                          </li>
                          <li>
                            <strong>TEEML (Trusted Execution Environment Machine Learning) </strong>
                            for verifiable, privacy-preserving AI.
                          </li>
                        </ul>
                        <p>
                          By integrating 0G Compute from other chains, projects gain
                          trustless, verifiable AI execution without centralizing their
                          inference pipelines. This not only enhances transparency but
                          also opens the door to fully composable AI logic that can
                          interact with smart contracts, DAOs, and DeFi protocols in ways
                          that weren’t possible before.
                        </p>
                        <p>
                          For instance, a DeFi protocol integrating AI-driven risk
                          assessment could tap into 0G Compute to process real-time
                          borrower credit scores instead of relying on opaque, centralized
                          AI risk models. Or a web3 gaming project could offload AI-driven
                          NPC behavior and dynamic world generation to 0G’s decentralized
                          inference layer. Instead of running AI models off-chain (as
                          most web3 games do), the game could request real-time, verifiable
                          inference results from 0G, allowing for adaptive, player-driven
                          experiences where AI characters evolve based on onchain
                          interactions.
                        </p>
                        <h2>0G: Greater than the Sum of its Parts</h2>
                        <p>
                          The long-term vision of 0G is clear—AI should be decentralized,
                          verifiable, and trustless at every level of the stack. The best
                          way to capitalize on everything 0G has to offer is to fully
                          deploy on the 0G network, leveraging the full power of
                          decentralized AI infrastructure.
                        </p>
                        <p>
                          But we also recognize that many builders don’t want to migrate
                          their existing tech stack. That’s why 0G is designed to be
                          modular, cross-chain compatible, and plug-and-play. Whether you
                          need high-performance storage, scalable DA, or verifiable AI
                          inference, 0G ensures that any project—no matter where it
                          lives—can still take advantage of the most powerful decentralized
                          AI infrastructure in web3.
                        </p>
                        <p>
                          The most successful platforms don’t just serve one use case—they
                          make it easy for anyone to tap into their infrastructure,
                          whether they operate within the ecosystem or not. This is exactly
                          how 0G is designed for AI, with a powerful, full-stack solution
                          that is greater than the sum of its parts.
                        </p>
                        <p>
                          <br />
                        </p>
                        <p>
                          <em>Ready to start building on 0G? </em>
                          <a href="https://app.deform.cc/form/d0326680-f45e-4fe1-9578-4a9e3769e313/?page_number=0">
                            <em>Apply for Guild on 0G today</em>
                          </a>
                        </p>
                        <p>
                          <em>Want a deeper dive into 0G’s technical offerings? </em>
                          <a href="https://docs.0g.ai/intro">
                            <em>Check out 0G’s Documentation</em>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t23_div034 section_filter">
            <div className="t23_div035 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t23_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t23_div036 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t23_div037 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t23_div038 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t23_div039 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t23_div040 cms-grid_image"
                    />
                    <div className="t23_div041 spacer-medium hide-mobile-portrait"></div>
                    <div className="t23_div042 blog_contnet-wrapper">
                      <div className="t23_div043 blog_meta-wrapper">
                        <div fs-list-field="category" className="t23_div044">
                          Tech
                        </div>
                        <div className="t23_div045 icon-embed-custom w-embed">
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
                        <div className="t23_div046">Sep 5, 2024</div>
                      </div>
                      <div className="t23_div047 spacer-xmedium"></div>
                      <h3 className="t23_heading2 heading-style-h5">
                        0G&#x27;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t23_div048 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t23_div049 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t23_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t23_div051 cms-grid_image"
                    />
                    <div className="t23_div052 spacer-medium hide-mobile-portrait"></div>
                    <div className="t23_div053 blog_contnet-wrapper">
                      <div className="t23_div054 blog_meta-wrapper">
                        <div fs-list-field="category" className="t23_div055">
                          Tech
                        </div>
                        <div className="t23_div056 icon-embed-custom w-embed">
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
                        <div className="t23_div057">Aug 25, 2025</div>
                      </div>
                      <div className="t23_div058 spacer-xmedium"></div>
                      <h3 className="t23_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1,
                        Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t23_div059 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t23_div060 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t23_div061 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t23_div062 cms-grid_image"
                    />
                    <div className="t23_div063 spacer-medium hide-mobile-portrait"></div>
                    <div className="t23_div064 blog_contnet-wrapper">
                      <div className="t23_div065 blog_meta-wrapper">
                        <div fs-list-field="category" className="t23_div066">
                          Tech
                        </div>
                        <div className="t23_div067 icon-embed-custom w-embed">
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
                        <div className="t23_div068">Aug 7, 2025</div>
                      </div>
                      <div className="t23_div069 spacer-xmedium"></div>
                      <h3 className="t23_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed
                        100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t23_div070 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t23_div071 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t23_div072 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t23_div073 cms-grid_image"
                    />
                    <div className="t23_div074 spacer-medium hide-mobile-portrait"></div>
                    <div className="t23_div075 blog_contnet-wrapper">
                      <div className="t23_div076 blog_meta-wrapper">
                        <div fs-list-field="category" className="t23_div077">
                          Tech
                        </div>
                        <div className="t23_div078 icon-embed-custom w-embed">
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
                        <div className="t23_div079">Jul 3, 2025</div>
                      </div>
                      <div className="t23_div080 spacer-xmedium"></div>
                      <h3 className="t23_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={`t23_copy-toast ${showToast ? 't23_show' : ''}`}>
            Link copied
          </div>
        </main>
      </div>
    </div>
  )
}

