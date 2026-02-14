import React, { useState } from 'react'
import './Tech05.css'

export default function Tech05() {
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
    const text = encodeURIComponent("0G’s Galileo Testnet: Early Adoption Report")
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
    <div className="t05_container">
      <div className="t05_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t05_hide hide">
          <div className="t05_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t05_socialshare-title">
            0G’s Galileo Testnet: Early Adoption Report
          </div>
        </div>

        <main className="t05_main-wrapper main-wrapper">
          <section className="t05_section_hero section_hero t05_is-vertical is-vertical">
            <div className="t05_padding-global padding-global">
              <div className="t05_container-large container-large">
                <div className="t05_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t05_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t05_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t05_hero_bg-gradient hero_bg-gradient t05_is-blog is-blog"></div>
                </div>

                <div className="t05_hero_content-component hero_content-component t05_is-vertical2 is-vertical">
                  <div className="t05_blog_meta-wrapper blog_meta-wrapper t05_is-white is-white">
                    <div className="t05_blog_meta-category">Tech</div>
                    <div className="t05_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t05_blog_meta-date">Jun 20, 2025</div>
                    <div className="t05_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t05_blog_meta-author"></div>
                  </div>

                  <div className="t05_spacer-small spacer-small"></div>

                  <div className="t05_max-width-large max-width-large t05_text-align-center text-align-center">
                    <h1 className="t05_heading-style-h3 heading-style-h3">
                      0G’s Galileo Testnet: Early Adoption Report
                    </h1>
                  </div>

                  <div className="t05_spacer-small2 spacer-small"></div>

                  <div className="t05_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t05_link-icon-light1 link-icon-light t05_is-static is-static w-inline-block"
                    >
                      <div className="t05_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      href="#"
                      className="t05_link-icon-light2 link-icon-light t05_is-static2 is-static w-inline-block"
                    >
                      <div className="t05_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      onClick={(e) => handleSocialShare('x', e)}
                      href="#"
                      className="t05_link-icon-light3 link-icon-light t05_is-static3 is-static w-inline-block"
                    >
                      <div className="t05_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t05_section_legal-content section_legal-content">
            <div className="t05_padding-global2 padding-global">
              <div className="t05_padding-section-medium padding-section-medium">
                <div className="t05_container-small container-small">
                  <div className="t05_legal-content_outer">
                    <div className="t05_legal-content_component legal-content_component">
                      <div className="t05_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          When we launched 0G’s v3 testnet (Galileo){' '}
                          <a href="https://0g.ai/blog/introducing-v3-testnet-galileo">
                            in May
                          </a>
                          , the goal wasn’t just better performance: it was to
                          provide further proof that modular blockchain
                          infrastructure can succeed at scaling AI-native
                          applications. After a month of performance, that proof
                          is in the data, as we’ve found that Galileo isn’t just
                          running, but thriving, showing what the future of
                          decentralized AI infrastructure can look like.
                        </p>
                        <h2>What Galileo Set Out to Solve</h2>
                        <p>
                          Most blockchains aren’t built for AI. They’re slow,
                          expensive, monolithic: all qualities that make
                          deploying AI agents onchain difficult, if not nearly
                          impossible. Galileo, the next evolution from our v2{' '}
                          <a href="https://0g.ai/blog/testnet-annoucement">
                            testnet Newton
                          </a>{' '}
                          was designed to break that pattern.
                        </p>
                        <p>As the third major 0G testnet, Galileo introduced:</p>
                        <ol role="list">
                          <li>
                            Optimized{' '}
                            <a href="https://docs.0g.ai/concepts/chain?_highlight=cometbft#technical-deep-dive:~:text=optimized%20version%20of-,CometBFT,-(formerly%20Tendermint)%20as">
                              CometBFT
                            </a>{' '}
                            consensus enabling 2,500+ TPS and sub-second
                            finality
                          </li>
                          <li>
                            Fast-track EVM upgrade paths for flexible iteration
                          </li>
                          <li>
                            A development-first environment where AI use cases
                            can actually run
                          </li>
                          <li>Enhanced separation of execution and consensus</li>
                        </ol>
                        <p>
                          Galileo wasn’t a minor tweak; it was a rearchitecture
                          designed to make full-stack, AI-ready infrastructure a
                          reality.
                        </p>
                        <h2>Proof of Performance</h2>
                        <p>
                          In just over a month (May-June),{' '}
                          <a href="https://docs.0g.ai/developer-hub/testnet/testnet-overview">
                            Galileo demonstrated
                          </a>{' '}
                          that the architecture works and scales. The key
                          metrics observed as proof of this conclusion thus far
                          are:
                        </p>
                        <ul role="list">
                          <li>92 million+ transactions processed</li>
                          <li>6.4 million+ accounts created</li>
                          <li>
                            ~2-3 million daily transactions (peaking near 4
                            million/day)
                          </li>
                          <li>
                            26.65 transactions per second (TPS) sustained in
                            live use with 50+ TPS peaks
                          </li>
                          <li>
                            ~1.3 second block time, with headroom to scale up to
                            2,500 TPS
                          </li>
                          <li>
                            31,000+ daily faucet requests signaling significant
                            active developer interest
                          </li>
                        </ul>
                        <p>
                          It’s essential to note that these figures aren&apos;t
                          simulated load or scripted spam; they represent
                          organic growth from a developer community actively
                          engaging with the chain. With block gas usage still at
                          ~10% of capacity, Galileo has an incredible capacity
                          for growth.
                        </p>
                        <h2>Ecosystem in Motion</h2>
                        <p>
                          Of course, performance is only part of the story when
                          it comes to testnets. What’s happening <em>around </em>
                          Galileo is just as exciting as what’s happening on
                          it.&nbsp;
                        </p>
                        <p>
                          In the past month, top infrastructure providers like{' '}
                          <a href="https://www.quicknode.com/chains/0g">
                            QuickNode
                          </a>
                          ,{' '}
                          <a href="https://thirdweb.com/0g-galileo-testnet-16601">
                            ThirdWeb
                          </a>
                          , and{' '}
                          <a href="https://www.ankr.com/rpc/0g/">Ankr</a> have
                          rolled out full support for Galileo, making it easier
                          than ever for developers to plug into the network.
                          Explorers like{' '}
                          <a href="https://chainscan-galileo.0g.ai">Chainscan</a>{' '}
                          and the new{' '}
                          <a href="https://storagescan-galileo.0g.ai/">
                            Storage Explorer
                          </a>{' '}
                          offer real-time transparency across both the EVM and
                          decentralized storage layers, a critical toolset for
                          builders working with AI-native data flows.
                        </p>
                        <p>
                          Meanwhile, the developer ecosystem is gaining
                          momentum. Early projects are already deploying
                          contracts and experimenting with new AI use cases,
                          taking full advantage of Galileo’s modular stack and
                          low-latency performance. Community growth has been
                          equally strong: during peak periods, the network saw
                          over 400,000 new accounts created daily, eventually
                          settling into a sustained daily average of
                          100,000-200,000 new accounts.&nbsp;
                        </p>
                        <h2>What&apos;s Next: Mainnet on the Horizon</h2>
                        <p>
                          Galileo is quickly becoming a validation layer for the
                          future of AI-native infrastructure. The performance
                          and growth we’ve seen over the past month confirm that
                          0G’s architecture can scale in practice, not just in
                          theory. Key design decisions, including modular
                          execution and consensus, as well as rapid EVM upgrade
                          paths, are now live, tested, and proving their value.
                        </p>
                        <p>Here’s what Galileo has validated so far:</p>
                        <ul role="list">
                          <li>
                            <strong>Modular Design at Scale</strong>: Separated
                            execution and consensus layers handled millions of
                            transactions with sustained speed and reliability
                          </li>
                          <li>
                            <strong>Fast EVM Upgradeability</strong>: New
                            features can be shipped without system-wide
                            disruption, giving developers more agility
                          </li>
                          <li>
                            <strong>Room to Grow</strong>: Blocks currently use
                            only 2.5M-4.6M gas (of a 36M limit), leaving
                            significant headroom for 8-10x throughput expansion
                          </li>
                          <li>
                            <strong>Developer Experimentation</strong>: Galileo
                            introduced smart contract-based delegation, allowing
                            validators to offer more flexible staking
                            mechanisms.
                          </li>
                        </ul>
                        <p>
                          Looking ahead, mainnet won’t just bring higher
                          throughput; it will unlock a new class of applications
                          built for a modular, AI-native world. Galileo has
                          proven that the infrastructure is real, the demand is
                          real, and the ecosystem is ready to grow.
                        </p>
                        <h2>Build on Galileo</h2>
                        <p>Here are some ways to get involved:</p>
                        <ol role="list">
                          <li>
                            Get test tokens through Galileo’s{' '}
                            <a href="https://faucet.0g.ai/">new faucet</a>.
                          </li>
                          <li>
                            Configure your wallet using the new network
                            configuration details (RPC URL, Chain ID, etc.).
                          </li>
                          <li>
                            Redeploy your contracts on Galileo (sample
                            deployment scripts for Truffle, Hardhat, Foundry{' '}
                            <a href="https://github.com/0glabs/0g-deployment-scripts">
                              here
                            </a>
                            ).
                          </li>
                          <li>
                            Track your onchain activity on Galileo’s{' '}
                            <a href="https://chainscan-galileo.0g.ai/">
                              block explorer
                            </a>
                            .
                          </li>
                          <li>
                            Apply for the{' '}
                            <a href="https://0g.ai/blog/guild-on-0g">
                              Guild on 0G
                            </a>{' '}
                            to get access to 0G infra, mentorship, and
                            distribution partners.
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t05_section_filter section_filter">
            <div className="t05_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t05_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t05_cms-grid_list cms-grid_list w-dyn-items"
            >
              <div
                role="listitem"
                className="t05_cms-grid_item1 cms-grid_item w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t05_cms-grid_content-wrapper1 cms-grid_content-wrapper t05_is-blog4 is-blog w-inline-block"
                >
                  <div className="t05_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t05_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t05_spacer-medium1 spacer-medium t05_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t05_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t05_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t05_related_category1">Tech</div>
                        <div className="t05_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t05_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t05_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t05_heading-style-h51 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t05_cms-grid_item2 cms-grid_item w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t05_cms-grid_content-wrapper2 cms-grid_content-wrapper t05_is-blog5 is-blog w-inline-block"
                >
                  <div className="t05_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t05_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t05_spacer-medium2 spacer-medium t05_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t05_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t05_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t05_related_category2">Tech</div>
                        <div className="t05_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t05_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t05_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t05_heading-style-h52 heading-style-h5">
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
                className="t05_cms-grid_item3 cms-grid_item w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t05_cms-grid_content-wrapper3 cms-grid_content-wrapper t05_is-blog6 is-blog w-inline-block"
                >
                  <div className="t05_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t05_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t05_spacer-medium3 spacer-medium t05_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t05_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t05_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t05_related_category3">Tech</div>
                        <div className="t05_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t05_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t05_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t05_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t05_cms-grid_item4 cms-grid_item w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t05_cms-grid_content-wrapper4 cms-grid_content-wrapper t05_is-blog7 is-blog w-inline-block"
                >
                  <div className="t05_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t05_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t05_spacer-medium4 spacer-medium t05_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t05_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t05_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t05_related_category4">Tech</div>
                        <div className="t05_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t05_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t05_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t05_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t05_copy-toast ${showToast ? 't05_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

