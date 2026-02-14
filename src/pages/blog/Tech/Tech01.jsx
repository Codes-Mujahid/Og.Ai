import React, { useState } from 'react'
import './Tech01.css'

export default function Tech01() {
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
      'Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard'
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
    <div className="t01_container">
      <div className="t01_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t01_hide hide">
          <div className="t01_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t01_socialshare-title">
            Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1,
            Hits 11,000 TPS with Parallel Consensus per Shard
          </div>
        </div>

        <main className="t01_main-wrapper main-wrapper">
          <section className="t01_section_hero section_hero t01_is-vertical is-vertical">
            <div className="t01_padding-global padding-global">
              <div className="t01_container-large container-large">
                <div className="t01_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t01_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t01_hero_bg-image hero_bg-image t01_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t01_hero_bg-gradient hero_bg-gradient t01_is-blog is-blog"></div>
                </div>

                <div className="t01_hero_content-component hero_content-component t01_is-vertical is-vertical">
                  <div className="t01_blog_meta-wrapper blog_meta-wrapper t01_is-white is-white">
                    <div className="t01_blog_meta-category">Tech</div>
                    <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                    <div className="t01_blog_meta-date">Aug 25, 2025</div>
                    <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                    <div className="t01_blog_meta-empty"></div>
                  </div>

                  <div className="t01_spacer-small spacer-small"></div>

                  <div className="t01_max-width-large max-width-large t01_text-align-center text-align-center">
                    <h1 className="t01_heading-style-h3 heading-style-h3">
                      Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                      Layer 1, Hits 11,000 TPS with Parallel Consensus per
                      Shard
                    </h1>
                  </div>

                  <div className="t01_spacer-small spacer-small"></div>

                  <div className="t01_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="t01_link-icon-light link-icon-light t01_is-static is-static t01_w-inline-block w-inline-block"
                    >
                      <div className="t01_icon-embed-xsmall icon-embed-xsmall t01_w-embed w-embed">
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
                      className="t01_link-icon-light link-icon-light t01_is-static is-static t01_w-inline-block w-inline-block"
                    >
                      <div className="t01_icon-embed-xsmall icon-embed-xsmall t01_w-embed w-embed">
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
                      className="t01_link-icon-light link-icon-light t01_is-static is-static t01_w-inline-block w-inline-block"
                    >
                      <div className="t01_icon-embed-xsmall icon-embed-xsmall t01_w-embed w-embed">
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

          <section className="t01_section_legal-content section_legal-content">
            <div className="t01_padding-global padding-global">
              <div className="t01_padding-section-medium padding-section-medium">
                <div className="t01_container-small container-small">
                  <div className="t01_legal-content_outer">
                    <div className="t01_legal-content_component legal-content_component">
                      <div className="t01_blog-rich-text blog-rich-text t01_w-richtext w-richtext">
                        <p>
                          At Zero Gravity Labs, we’re building the foundation
                          for decentralized AI through infrastructure that
                          delivers Ethereum-grade security and limitless scale
                          (infinite TPS and data throughput). This month, we
                          validated that vision with a breakthrough milestone.
                        </p>
                        <p>
                          <strong>
                            0G has achieved 11,000 transactions per second
                            (TPS) per shard across 50 distributed validators,
                            with an average block time of just 500 milliseconds.
                          </strong>
                          &nbsp;
                        </p>
                        <p>
                          This deployment ran across multi-cloud, geographically
                          distributed nodes connected with dedicated 100 mbps
                          links, showcasing 0G’s resilience under real-world
                          conditions. And because our architecture scales
                          linearly with additional shards, throughput is
                          infinite, with capacity expanding as demand grows.
                        </p>
                        <h2>11,000 TPS per Shard Is Just the Start</h2>
                        <p>
                          Numbers alone don’t tell the full story. Hitting 11,000
                          TPS per shard is impressive, but the bottom line is
                          0G’s design enables infinite TPS via parallel
                          consensus. And ultimately, what really matters is how
                          this breakthrough reshapes the boundaries of
                          blockchain performance, scalability, and real-world
                          usability.&nbsp;
                        </p>
                        <p>
                          Here are four reasons this milestone matters for the
                          future of decentralized AI and beyond:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Massive Performance Leap:</strong> 0G now
                            far surpasses the capacity of most existing
                            blockchains, putting us firmly in the category of
                            high-performance, real-world scalable chains.
                          </li>
                          <li>
                            <strong>Breakthrough Consensus Innovation: </strong>
                            This achievement was made possible by a new
                            parallel consensus workflow that removes the
                            sequential bottleneck of payload execution.&nbsp;
                          </li>
                          <li>
                            <strong>Enterprise-Ready Infrastructure:</strong>{' '}
                            The milestone was validated across multi-cloud,
                            geographically distributed nodes. This demonstrates
                            0G’s ability to operate effectively under real-world,
                            enterprise-grade conditions.
                          </li>
                          <li>
                            <strong>Next-Gen Block Capacity:</strong> 0G now
                            operates with a 120M gas limit per block, one of
                            the highest in the industry. Combined with parallel
                            execution, 0G can now handle AI-scale, data-intensive
                            workloads without compromising security or
                            throughput.
                          </li>
                        </ul>
                        <h2>Escaping the Execution Trap</h2>
                        <p>
                          Traditional Ethereum-style consensus requires
                          validators to re-execute every transaction in sequence
                          before finalizing a block. This design ensures
                          security but creates redundant computation and limits
                          throughput.
                        </p>
                        <p>
                          Zero Gravity removes this bottleneck by introducing a
                          parallel execution workflow. Here’s how it works:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Dummy State Root Propagation</strong>:
                            Proposers and validators propagate blocks using a
                            placeholder (dummy) state root, allowing
                            transactions to move quickly through the network
                            without waiting for full execution.
                          </li>
                          <li>
                            <strong>Parallel Execution</strong>: Transactions
                            are executed in parallel by proposers and
                            validators, eliminating the sequential choke point.
                          </li>
                          <li>
                            <strong>Validator Security Guarantees</strong>: Even
                            with parallelism, validators still perform full
                            state checks before finalization, maintaining the
                            same security guarantees as Ethereum.
                          </li>
                        </ul>
                        <p>
                          Together, these innovations eliminate redundant
                          computation while preserving decentralization and
                          trust. The result is unprecedented throughput without
                          any security compromises.&nbsp;
                        </p>
                        <h2>Scaling for AI and Data-Heavy Workloads</h2>
                        <p>
                          The latest benchmark not only demonstrated raw
                          throughput, but also validated 0G’s ability to sustain
                          AI-scale operations under real-world conditions. By
                          combining parallel consensus with shard-based scaling,
                          aggregate throughput increases linearly as the number
                          of shards increases, effectively enabling infinite
                          scale.
                        </p>
                        <p>
                          This architecture unlocks several critical
                          capabilities for AI and beyond:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Model Training and Inference:</strong> 0G
                            now has the bandwidth required for onchain
                            fine-tuning, inference requests, and model
                            coordination at speeds impossible on sequential
                            consensus systems.
                          </li>
                          <li>
                            <strong>Dataset Verification at Scale:</strong>{' '}
                            Large datasets can be ingested, hashed, and
                            validated across multiple shards without creating
                            bottlenecks, ensuring verifiable provenance for AI
                            data pipelines.
                          </li>
                          <li>
                            <strong>Diverse Agentic Ecosystems:</strong>{' '}
                            Shard-based scaling allows thousands of tokenized
                            agents to execute economic transactions, inference
                            calls, and coordination tasks in parallel.&nbsp;
                          </li>
                          <li>
                            <strong>High-Volume Applications:</strong> 0G can
                            now support high-frequency, high-volume user
                            activities such as automated agentic trading and
                            in-game transactions, which often demand thousands
                            of concurrent state updates per second.
                          </li>
                        </ul>
                        <p>
                          In short, 0G has proven that intensive AI workloads
                          and other computationally demanding applications can be
                          effectively deployed and scaled onchain.
                        </p>
                        <h2>Onward to Infinite Scale</h2>
                        <p>
                          At Zero Gravity Labs, we’ve always believed that the
                          future of decentralized AI requires an entirely new
                          class of infrastructure — one that combines
                          Ethereum-level security with infinite performance
                          scale. With this recent achievement, we’ve shown what
                          that future looks like in practice.
                        </p>
                        <p>
                          Ultimately, our goal is to achieve 100,000 TPS per
                          shard and 50ms block finality, creating an environment
                          where even the most complex decentralized AI can
                          operate without limits. Beyond raw throughput, the
                          future of AI-native infrastructure demands systems
                          powerful enough to carry the next generation of
                          decentralized applications forward. And with this
                          latest milestone, Zero Gravity has shown it’s
                          possible.
                        </p>
                        <p>‍</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t01_section_filter section_filter">
            <div className="t01_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t01_w-dyn-list w-dyn-list">
            <div className="t01_cms-grid_list cms-grid_list t01_w-dyn-items w-dyn-items" role="list">
              <div className="t01_cms-grid_item cms-grid_item t01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t01_cms-grid_content-wrapper cms-grid_content-wrapper t01_is-blog is-blog t01_w-inline-block w-inline-block"
                >
                  <div className="t01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t01_cms-grid_image cms-grid_image"
                    />
                    <div className="t01_spacer-medium spacer-medium t01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="t01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t01_related_category">Tech</div>
                        <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                        <div className="t01_related_date">Sep 5, 2024</div>
                      </div>
                      <div className="t01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t01_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t01_cms-grid_item cms-grid_item t01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  aria-current="page"
                  className="t01_cms-grid_content-wrapper cms-grid_content-wrapper t01_is-blog is-blog t01_w-inline-block w-inline-block t01_w--current w--current"
                >
                  <div className="t01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t01_cms-grid_image cms-grid_image"
                    />
                    <div className="t01_spacer-medium spacer-medium t01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="t01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t01_related_category">Tech</div>
                        <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                        <div className="t01_related_date">Aug 25, 2025</div>
                      </div>
                      <div className="t01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t01_heading-style-h5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t01_cms-grid_item cms-grid_item t01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t01_cms-grid_content-wrapper cms-grid_content-wrapper t01_is-blog is-blog t01_w-inline-block w-inline-block"
                >
                  <div className="t01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t01_cms-grid_image cms-grid_image"
                    />
                    <div className="t01_spacer-medium spacer-medium t01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="t01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t01_related_category">Tech</div>
                        <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                        <div className="t01_related_date">Aug 7, 2025</div>
                      </div>
                      <div className="t01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t01_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t01_cms-grid_item cms-grid_item t01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-storage"
                  className="t01_cms-grid_content-wrapper cms-grid_content-wrapper t01_is-blog is-blog t01_w-inline-block w-inline-block"
                >
                  <div className="t01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t01_cms-grid_image cms-grid_image"
                    />
                    <div className="t01_spacer-medium spacer-medium t01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="t01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t01_related_category">Tech</div>
                        <div className="t01_icon-embed-custom icon-embed-custom t01_w-embed w-embed">
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
                        <div className="t01_related_date">Jul 3, 2025</div>
                      </div>
                      <div className="t01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t01_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t01_copy-toast ${showToast ? 't01_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

