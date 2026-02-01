import React, { useState } from 'react'

export default function Partners01() {
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
    const text = encodeURIComponent('Announcing 0G’s World-class Validator Set')
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
    <div className="p01_container">
      <style>{`
        .p01_copy-toast {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--purple-shade, #9200e1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-family: sans-serif;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 9999;
          pointer-events: none;
        }

        .p01_copy-toast.p01_show {
          opacity: 1;
        }

        .p01_section_hero {
          position: relative;
          overflow: hidden;
        }

        .p01_hero_bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .p01_container .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .p01_container .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .p01_container .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div className="p01_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="p01_hide hide">
          <div className="p01_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="p01_socialshare-title">
            Announcing 0G’s World-class Validator Set
          </div>
        </div>

        <main className="p01_main-wrapper main-wrapper">
          <section className="p01_section_hero section_hero p01_is-vertical is-vertical">
            <div className="p01_padding-global padding-global">
              <div className="p01_container-large container-large">
                <div className="p01_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="p01_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="p01_hero_bg-image p01_w-dyn-bind-empty hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="p01_hero_bg-gradient hero_bg-gradient p01_is-blog is-blog"></div>
                </div>

                <div className="p01_hero_content-component hero_content-component p01_is-vertical is-vertical">
                  <div className="p01_blog_meta-wrapper blog_meta-wrapper p01_is-white is-white">
                    <div className="p01_blog_meta-date">Sep 15, 2025</div>
                    <div className="p01_icon-embed-custom icon-embed-custom p01_w-embed w-embed">
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
                    <div className="p01_blog_meta-category">Partners</div>
                  </div>

                  <div className="p01_spacer-small spacer-small"></div>

                  <div className="p01_max-width-large max-width-large p01_text-align-center text-align-center">
                    <h1 className="p01_heading-style-h3 heading-style-h3">
                      Announcing 0G’s World-class Validator Set
                    </h1>
                  </div>

                  <div className="p01_spacer-small-2 spacer-small"></div>

                  <div className="p01_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="p01_link-icon-light link-icon-light p01_is-static is-static p01_w-inline-block w-inline-block"
                    >
                      <div className="p01_icon-embed-xsmall icon-embed-xsmall p01_w-embed w-embed">
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
                      className="p01_link-icon-light link-icon-light p01_is-static is-static p01_w-inline-block w-inline-block"
                    >
                      <div className="p01_icon-embed-xsmall icon-embed-xsmall p01_w-embed w-embed">
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
                      className="p01_link-icon-light link-icon-light p01_is-static is-static p01_w-inline-block w-inline-block"
                    >
                      <div className="p01_icon-embed-xsmall icon-embed-xsmall p01_w-embed w-embed">
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

          <section className="p01_section_legal-content section_legal-content">
            <div className="p01_padding-global-2 padding-global">
              <div className="p01_padding-section-medium padding-section-medium">
                <div className="p01_container-small container-small">
                  <div className="p01_legal-content_outer">
                    <div className="p01_legal-content_component legal-content_component">
                      <div className="p01_blog-rich-text blog-rich-text p01_w-richtext w-richtext">
                        <p>
                          One of the most important signals of network readiness
                          is who shows up to secure it. A chain is only as
                          strong as the operators that maintain its consensus.
                          And in 0G’s case, that responsibility now lies with
                          some of the most respected names in web3 and
                          enterprise infrastructure.
                        </p>
                        <p>
                          <strong>
                            As 0G approaches its Token Generation Event (TGE),
                            we are proud to announce the onboarding of a
                            world-class set of validators who will secure the
                            network from day one.&nbsp;
                          </strong>
                        </p>
                        <p>
                          Their participation makes it clear that 0G is
                          launching a production-ready system supported by the
                          same institutions that secure the largest networks in
                          the world, while decentralizing the future of onchain
                          AI.
                        </p>
                        <h2>What Do 0G Validators Do?</h2>
                        <p>
                          Validators perform the essential task of verifying
                          transactions, maintaining consensus, and safeguarding
                          the integrity of the chain. On 0G, they also secure
                          the foundation upon which decentralized AI can run.
                          In short, these validators are key to ensuring that
                          all AI inference, training, and data-heavy workloads
                          that take place on 0G are verifiable, scalable, and
                          tamper-proof.
                        </p>
                        <p>
                          You can view validator details, delegation breakdown,
                          and commission rates on the<strong> </strong>
                          <a href="https://explorer.0g.ai/testnet/validators">
                            <strong>0G Validator Dashboard</strong>
                          </a>
                          <strong>.</strong>
                        </p>
                        <p>
                          By onboarding top-tier validators from both web3 and
                          traditional enterprise ecosystems, we are ensuring
                          that 0G will be secured by operators with proven
                          reliability, global reach, and deep track records
                          across the blockchain industry.
                        </p>
                        <h2>Meet the Validators</h2>
                        <p>
                          Our validator set brings together a diverse mix of
                          institutional giants, infrastructure leaders, and
                          Web3-native operators. This ensures both
                          decentralization and reliability from day one.&nbsp;
                        </p>
                        <p>Among the standout validators securing 0G are:</p>
                        <ul role="list">
                          <li>
                            <strong>Amazon Web Services (AWS)</strong>: The
                            world’s most widely used cloud provider, both for
                            traditional cloud services and validator support
                            across multiple blockchains
                          </li>
                          <li>
                            <strong>Google Cloud</strong>: Google brings
                            unmatched expertise in distributed systems
                            engineering and enterprise integrations to 0G
                          </li>
                          <li>
                            <strong>Alibaba Cloud (AliCloud)</strong>: A top
                            global cloud provider supporting mission-critical
                            workloads across finance, AI, and e-commerce
                          </li>
                          <li>
                            <strong>NTT Docomo</strong>: Japan’s largest mobile
                            network operator, bringing telecom-grade
                            infrastructure expertise to validator operations
                          </li>
                          <li>
                            <strong>Blockdaemon</strong>: One of the largest,
                            most trusted institutional staking providers in web3
                          </li>
                          <li>
                            <strong>Figment</strong>: A top-tier validator and
                            infrastructure provider supporting dozens of major
                            networks
                          </li>
                          <li>
                            <strong>Coinbase Cloud</strong>: The staking and
                            infrastructure arm of Coinbase, one of the largest
                            and most trusted crypto companies
                          </li>
                          <li>
                            <strong>Alchemy</strong>: Powers many of the
                            largest web3 applications with reliable APIs and
                            node infrastructure
                          </li>
                          <li>
                            <strong>Hex Trust</strong>: A leading Asia-based
                            institutional custodian and staking provider
                          </li>
                          <li>
                            <strong>Staked (Kraken)</strong>: Trusted staking
                            service securing billions across Ethereum, Solana,
                            and beyond
                          </li>
                          <li>
                            <strong>QuickNode</strong>: A major infrastructure
                            provider that validates and provides dApp access to
                            75+ blockchains
                          </li>
                          <li>
                            <strong>P2P.org</strong>: An institutional staking
                            powerhouse that operates across Ethereum, Solana,
                            Cosmos, and many others with billions in assets
                            under management
                          </li>
                          <li>
                            <strong>Stakin</strong>: A leading validator in the
                            Ethereum, Cosmos and more, with a successful track
                            record of supporting interoperability-focused chains
                          </li>
                          <li>
                            <strong>Chorus One</strong>: A respected validator
                            operator across Cosmos, Ethereum, and beyond, known
                            for its research-driven approach to staking and
                            decentralization.
                          </li>
                          <li>
                            <strong>Everstake</strong>: A staking provider
                            serving over 625,000 users and validating across
                            70+ networks including Ethereum, Solana, and Cardano
                          </li>
                        </ul>
                        <p>
                          These institutions are just the tip of the spear. To
                          date, <strong>0G has onboarded over 100 validators</strong>, and
                          is in the process of vetting even more. With this deep
                          bench of independent operators, 0G will begin its
                          mainnet journey with both the decentralization of a
                          community-owned network and the reliability of
                          enterprise-scale infrastructure.
                        </p>
                        <h2>The Foundation for Infinite Scale</h2>
                        <p>
                          Validators are the backbone of any blockchain. And for
                          0G, where AI-scale workloads demand both speed and
                          trust, their role is critical. The track record and
                          breadth of 0G’s approved validators is a signal to
                          builders, enterprises, and the global community that
                          0G is ready for mass onchain AI deployment and
                          adoption.&nbsp;
                        </p>
                        <p>
                          0G’s TGE event is just weeks away, and as we enter
                          0G’s next chapter these validators will play a central
                          role in securing the world’s first decentralized AI
                          operating system — an infrastructure capable of
                          scaling AI workloads onchain with Ethereum-grade
                          security and infinite performance, and ensures that
                          AI becomes a public good.
                        </p>
                        <p>Stay tuned for more updates!</p>
                        <p>‍</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="p01_section_filter section_filter">
            <div className="p01_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section> */}

          {/* <div className="p01_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="p01_cms-grid_list cms-grid_list p01_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="p01_cms-grid_item cms-grid_item p01_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/0g-validators"
                  aria-current="page"
                  className="p01_cms-grid_content-wrapper cms-grid_content-wrapper p01_is-blog is-blog p01_w-inline-block w-inline-block p01_w--current w--current"
                >
                  <div className="p01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                      className="p01_cms-grid_image cms-grid_image"
                    />
                    <div className="p01_spacer-medium spacer-medium p01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="p01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="p01_blog_meta-wrapper-2 blog_meta-wrapper">
                        <div
                          className="p01_card1-category"
                          fs-list-field="category"
                        >
                          Partners
                        </div>
                        <div className="p01_icon-embed-custom-2 icon-embed-custom p01_w-embed-2 w-embed">
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
                        <div className="p01_card1-date">Sep 15, 2025</div>
                      </div>
                      <div className="p01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="p01_heading-style-h5 heading-style-h5">
                        Announcing 0G’s World-class Validator Set
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p01_cms-grid_item-2 cms-grid_item p01_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/early-signals-0g-global-accelerator"
                  className="p01_cms-grid_content-wrapper-2 cms-grid_content-wrapper p01_is-blog-2 is-blog p01_w-inline-block-2 w-inline-block"
                >
                  <div className="p01_blog_content-2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                      className="p01_cms-grid_image-2 cms-grid_image"
                    />
                    <div className="p01_spacer-medium-2 spacer-medium p01_hide-mobile-portrait-2 hide-mobile-portrait"></div>
                    <div className="p01_blog_contnet-wrapper-2 blog_contnet-wrapper">
                      <div className="p01_blog_meta-wrapper-3 blog_meta-wrapper">
                        <div
                          className="p01_card2-category"
                          fs-list-field="category"
                        >
                          Partners
                        </div>
                        <div className="p01_icon-embed-custom-3 icon-embed-custom p01_w-embed-3 w-embed">
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
                        <div className="p01_card2-date">Aug 14, 2025</div>
                      </div>
                      <div className="p01_spacer-xmedium-2 spacer-xmedium"></div>
                      <h3 className="p01_heading-style-h5-2 heading-style-h5">
                        Where Onchain AI is Headed: Early Signals from the 0G
                        Global Accelerator
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p01_cms-grid_item-3 cms-grid_item p01_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/builder-spotlight-gimo"
                  className="p01_cms-grid_content-wrapper-3 cms-grid_content-wrapper p01_is-blog-3 is-blog p01_w-inline-block-3 w-inline-block"
                >
                  <div className="p01_blog_content-3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                      className="p01_cms-grid_image-3 cms-grid_image"
                    />
                    <div className="p01_spacer-medium-3 spacer-medium p01_hide-mobile-portrait-3 hide-mobile-portrait"></div>
                    <div className="p01_blog_contnet-wrapper-3 blog_contnet-wrapper">
                      <div className="p01_blog_meta-wrapper-4 blog_meta-wrapper">
                        <div
                          className="p01_card3-category"
                          fs-list-field="category"
                        >
                          Partners
                        </div>
                        <div className="p01_icon-embed-custom-4 icon-embed-custom p01_w-embed-4 w-embed">
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
                        <div className="p01_card3-date">Aug 13, 2025</div>
                      </div>
                      <div className="p01_spacer-xmedium-3 spacer-xmedium"></div>
                      <h3 className="p01_heading-style-h5-3 heading-style-h5">
                        0G Builder Spotlight: How Gimo Finance Is Unlocking
                        Liquid Staking for the AI Economy
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p01_cms-grid_item-4 cms-grid_item p01_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/announcing-the-pond-and-0g-partnership"
                  className="p01_cms-grid_content-wrapper-4 cms-grid_content-wrapper p01_is-blog-4 is-blog p01_w-inline-block-4 w-inline-block"
                >
                  <div className="p01_blog_content-4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                      loading="lazy"
                      alt=""
                      className="p01_cms-grid_image-4 cms-grid_image"
                    />
                    <div className="p01_spacer-medium-4 spacer-medium p01_hide-mobile-portrait-4 hide-mobile-portrait"></div>
                    <div className="p01_blog_contnet-wrapper-4 blog_contnet-wrapper">
                      <div className="p01_blog_meta-wrapper-5 blog_meta-wrapper">
                        <div
                          className="p01_card4-category"
                          fs-list-field="category"
                        >
                          Partners
                        </div>
                        <div className="p01_icon-embed-custom-5 icon-embed-custom p01_w-embed-5 w-embed">
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
                        <div className="p01_card4-date">Apr 20, 2024</div>
                      </div>
                      <div className="p01_spacer-xmedium-4 spacer-xmedium"></div>
                      <h3 className="p01_heading-style-h5-4 heading-style-h5">
                        Announcing the Pond and 0G Partnership
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`p01_copy-toast ${showToast ? 'p01_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
