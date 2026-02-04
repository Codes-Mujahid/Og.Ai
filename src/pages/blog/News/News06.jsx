import React, { useState } from 'react'
import './News06.css'

export default function News06() {
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
      'Introducing 0G Hub: Your Gateway to the 0G Ecosystem'
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
    <div className="n06_container">
      <div className="n06_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n06_hide hide">
          <div className="n06_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n06_socialshare-title">
            Introducing 0G Hub: Your Gateway to the 0G Ecosystem
          </div>
        </div>

        <main className="n06_main-wrapper main-wrapper">
          <section className="n06_section_hero section_hero n06_is-vertical is-vertical">
            <div className="n06_padding-global padding-global">
              <div className="n06_container-large container-large">
                <div className="n06_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n06_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n06_hero_bg-image hero_bg-image n06_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n06_hero_bg-gradient hero_bg-gradient n06_is-blog is-blog"></div>
                </div>

                <div className="n06_hero_content-component hero_content-component n06_is-vertical is-vertical">
                  <div className="n06_blog_meta-wrapper blog_meta-wrapper n06_is-white is-white">
                    <div className="n06_blog_meta-category">News</div>
                    <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                    <div className="n06_blog_meta-date">Feb 7, 2025</div>
                    <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                    <div className="n06_blog_meta-author">0g</div>
                  </div>

                  <div className="n06_spacer-small spacer-small"></div>

                  <div className="n06_max-width-large max-width-large n06_text-align-center text-align-center">
                    <h1 className="n06_heading-style-h3 heading-style-h3">
                      Introducing 0G Hub: Your Gateway to the 0G Ecosystem
                    </h1>
                  </div>

                  <div className="n06_spacer-small spacer-small"></div>

                  <div className="n06_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n06_link-icon-light link-icon-light n06_is-static is-static n06_w-inline-block w-inline-block"
                    >
                      <div className="n06_icon-embed-xsmall icon-embed-xsmall n06_w-embed w-embed">
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
                      className="n06_link-icon-light link-icon-light n06_is-static is-static n06_w-inline-block w-inline-block"
                    >
                      <div className="n06_icon-embed-xsmall icon-embed-xsmall n06_w-embed w-embed">
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
                      className="n06_link-icon-light link-icon-light n06_is-static is-static n06_w-inline-block w-inline-block"
                    >
                      <div className="n06_icon-embed-xsmall icon-embed-xsmall n06_w-embed w-embed">
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

          <section className="n06_section_legal-content section_legal-content">
            <div className="n06_padding-global padding-global">
              <div className="n06_padding-section-medium padding-section-medium">
                <div className="n06_container-small container-small">
                  <div className="n06_legal-content_outer">
                    <div className="n06_legal-content_component legal-content_component">
                      <div className="n06_blog-rich-text blog-rich-text n06_w-richtext w-richtext">
                        <p>
                          The AI revolution needs more than just powerful
                          infrastructure: it needs a central hub where builders,
                          users, and enthusiasts can explore, experiment, and
                          innovate.&nbsp;
                        </p>
                        <p>
                          That’s why we’ve built{' '}
                          <strong>
                            0G Hub: the one-stop destination for everything
                            happening in the 0G ecosystem.
                          </strong>
                        </p>
                        <p>
                          The Hub aggregates dApps, analytics, developer tools,
                          ecosystem updates, key content, and more to provide
                          everything in one place, so you never miss a beat.
                          <strong> </strong>
                          Whether you’re a developer, researcher, or just
                          crypto-curious, the 0G Hub is designed to make
                          exploring and interacting with 0G seamless.
                        </p>
                        <h2>
                          <strong>0G Hub Overview</strong>
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n06_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0d9b8934078252d84_QtQHeeFvkaZo9exLOrvZz2pWQc.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>With 0G Hub, you can:</p>
                        <ul role="list">
                          <li>
                            <strong>Discover Projects:</strong> Browse dApps, AI
                            frameworks, and services leveraging 0G’s AI-native
                            infrastructure.
                          </li>
                          <li>
                            <strong>Explore dApps &amp; Tools:</strong> Navigate
                            AI agents, compute marketplaces, and on-chain
                            storage solutions.
                          </li>
                          <li>
                            <strong>Monitor AI On-Chain Analytics:</strong> Track
                            key blockchain metrics—transactions, active
                            addresses, deployed contracts, and more.
                          </li>
                          <li>
                            <strong>View Your Web3 Profile: </strong>View all
                            your 0G assets to easily manage your portfolio.
                          </li>
                          <li>
                            <strong>Use the 0G Explorer: </strong>Dive into
                            real-time blockchain data with the{' '}
                            <a href="https://chainscan-newton.0g.ai/">
                              0G Chain Explorer
                            </a>
                            .
                          </li>
                          <li>
                            <strong>Get Testnet Tokens:</strong> Need test tokens
                            to start building? The integrated faucet allows
                            anyone to quickly get tokens to start using{' '}
                            <a href="https://docs.0g.ai/run-a-node/testnet-information">
                              0G’s testnet.
                            </a>
                          </li>
                          <li>
                            <strong>Swap &amp; Bridge (Coming Soon): </strong>A
                            built-in swap and bridge feature is on the way,
                            making asset movement within 0G frictionless.
                          </li>
                        </ul>
                        <p>
                          We make it easy to access everything through our
                          intuitive tabs, so you can easily find key information
                          of any type.
                        </p>
                        <h2>
                          <strong>A Unified View of 0G’s Ecosystem</strong>
                        </h2>
                        <p>Want to see everything being built on 0G?&nbsp;</p>
                        <p>
                          The{' '}
                          <a href="https://hub.0g.ai/ecosystem">
                            Ecosystem Page
                          </a>{' '}
                          lets you browse the 300+ projects and 450+ integrations
                          in the 0G network. These include projects across
                          nearly every Web3 vertical, such as AI model networks,
                          inference providers, gaming projects, rollup
                          infrastructure, and more.
                        </p>
                        <p>We also answer: how active is the 0G network?&nbsp;</p>
                        <p>
                          Our{' '}
                          <a href="https://hub.0g.ai/on-chain/analytics/overview">
                            Analytics page
                          </a>{' '}
                          provides real-time blockchain insights, including:
                        </p>
                        <ul role="list">
                          <li>Transaction data</li>
                          <li>Gas-related data</li>
                          <li>Account-related data</li>
                          <li>Token data (coming soon)</li>
                          <li>Mainnet data (coming soon)</li>
                          <li>Revenue-related data (coming soon)</li>
                          <li>0G Valuation data (coming soon)</li>
                        </ul>
                        <p>
                          One last page is our{' '}
                          <a href="https://hub.0g.ai/content">Content page</a>{' '}
                          which provides access key blog content, our YouTube
                          page, and upcoming events.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n06_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0d9b8934078252d90_Em9C0gY38WbZbx2EnCwcbt00ZWM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The{' '}
                          <a href="https://hub.0g.ai/ecosystem">
                            Ecosystem Page
                          </a>{' '}
                          shows all projects in the 0G Ecosystem.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n06_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0d9b8934078252d87_ZnSl1JwKqdU0NCOrUQUXDiN3I.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The{' '}
                          <a href="https://hub.0g.ai/on-chain/analytics/overview">
                            Analytics Page
                          </a>{' '}
                          provides real-time data.&nbsp;
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n06_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0d9b8934078252d98_dLoMgIswXPraaYRUAXBfiWFzzBY.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          <a href="https://hub.0g.ai/content">
                            https://hub.0g.ai/content
                          </a>
                          &nbsp;
                        </p>
                        <h2>
                          <strong>Why It Matters</strong>
                        </h2>
                        <p>
                          0G is the largest AI Layer 1 ecosystem, powered by the
                          fastest DeAIOS. With $325M raised, 0G is the ultimate
                          home for DeAI.
                        </p>
                        <p>
                          As the ecosystem expands, 0G Hub will serve as the
                          launchpad for discovering, building, and engaging with
                          the AI-powered future.
                        </p>
                        <p>
                          If you haven’t already, check out{' '}
                          <a href="http://hub.0g.ai/">
                            <strong>hub.0g.ai</strong>
                          </a>{' '}
                          today.
                        </p>
                        <p>And stay tuned - a lot more is coming soon. 🚀</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n06_section_filter section_filter">
            <div className="n06_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n06_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n06_cms-grid_list cms-grid_list n06_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n06_cms-grid_item cms-grid_item n06_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n06_cms-grid_content-wrapper cms-grid_content-wrapper n06_is-blog is-blog n06_w-inline-block w-inline-block"
                >
                  <div className="n06_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n06_cms-grid_image cms-grid_image"
                    />
                    <div className="n06_spacer-medium spacer-medium n06_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n06_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n06_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n06_related_category">News</div>
                        <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                        <div className="n06_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n06_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n06_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n06_cms-grid_item cms-grid_item n06_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n06_cms-grid_content-wrapper cms-grid_content-wrapper n06_is-blog is-blog n06_w-inline-block w-inline-block"
                >
                  <div className="n06_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n06_cms-grid_image cms-grid_image"
                    />
                    <div className="n06_spacer-medium spacer-medium n06_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n06_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n06_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n06_related_category">News</div>
                        <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                        <div className="n06_blog_meta-date2">Sep 16, 2025</div>
                      </div>
                      <div className="n06_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n06_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n06_cms-grid_item cms-grid_item n06_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n06_cms-grid_content-wrapper cms-grid_content-wrapper n06_is-blog is-blog n06_w-inline-block w-inline-block"
                >
                  <div className="n06_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n06_cms-grid_image cms-grid_image"
                    />
                    <div className="n06_spacer-medium spacer-medium n06_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n06_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n06_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n06_related_category">News</div>
                        <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                        <div className="n06_blog_meta-date2">Jul 14, 2025</div>
                      </div>
                      <div className="n06_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n06_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n06_cms-grid_item cms-grid_item n06_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n06_cms-grid_content-wrapper cms-grid_content-wrapper n06_is-blog is-blog n06_w-inline-block w-inline-block"
                >
                  <div className="n06_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n06_cms-grid_image cms-grid_image"
                    />
                    <div className="n06_spacer-medium spacer-medium n06_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n06_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n06_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n06_related_category">News</div>
                        <div className="n06_icon-embed-custom icon-embed-custom n06_w-embed w-embed">
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
                        <div className="n06_blog_meta-date2">Jun 17, 2025</div>
                      </div>
                      <div className="n06_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n06_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n06_copy-toast ${showToast ? 'n06_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

