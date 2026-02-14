import React, { useState } from 'react'
import './Tech06.css'

export default function Tech06() {
  const [showToast, setShowToast] = useState(false)

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
      '0G & Web3Labs Global Accelerator: A Launchpad for Decentralized AI'
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
    <div className="t06_container">
      <div className="t06_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t06_hide hide">
          <div className="t06_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t06_socialshare-title">
            0G &amp; Web3Labs Global Accelerator: A Launchpad for Decentralized
            AI
          </div>
        </div>

        <main className="t06_main-wrapper main-wrapper">
          <section className="t06_section_hero section_hero t06_is-vertical is-vertical">
            <div className="t06_padding-global padding-global">
              <div className="t06_container-large container-large">
                <div className="t06_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t06_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t06_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t06_hero_bg-gradient hero_bg-gradient t06_is-blog is-blog"></div>
                </div>

                <div className="t06_hero_content-component hero_content-component t06_is-vertical2 is-vertical">
                  <div className="t06_blog_meta-wrapper blog_meta-wrapper t06_is-white is-white">
                    <div className="t06_blog_meta-category">Tech</div>
                    <div className="t06_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t06_blog_meta-date">Jun 11, 2025</div>
                    <div className="t06_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t06_blog_meta-author">0g</div>
                  </div>

                  <div className="t06_spacer-small spacer-small"></div>

                  <div className="t06_max-width-large max-width-large t06_text-align-center text-align-center">
                    <h1 className="t06_heading-style-h3 heading-style-h3">
                      0G &amp; Web3Labs Global Accelerator: A Launchpad for
                      Decentralized AI
                    </h1>
                  </div>

                  <div className="t06_spacer-small2 spacer-small"></div>

                  <div className="t06_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t06_link-icon-light1 link-icon-light t06_is-static is-static w-inline-block"
                    >
                      <div className="t06_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t06_link-icon-light2 link-icon-light t06_is-static2 is-static w-inline-block"
                    >
                      <div className="t06_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t06_link-icon-light3 link-icon-light t06_is-static3 is-static w-inline-block"
                    >
                      <div className="t06_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t06_section_legal-content section_legal-content">
            <div className="t06_padding-global2 padding-global">
              <div className="t06_padding-section-medium padding-section-medium">
                <div className="t06_container-small container-small">
                  <div className="t06_legal-content_outer">
                    <div className="t06_legal-content_component legal-content_component">
                      <div className="t06_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          The future of decentralized AI won’t be built by one
                          company, one region, or one idea. It will emerge from a
                          global ecosystem of builders solving real
                          infrastructure challenges across compute, privacy, and
                          the limitations of today’s blockchain systems.
                        </p>
                        <p>
                          To help accelerate that future, we’re proud to
                          announce the <strong>Global Accelerator Program</strong>,
                          a six-month program jointly launched by 0G Labs and{' '}
                          <a href="https://web3labs.g-rocket.co/">Web3Labs</a>.
                          This initiative is designed to support high-quality
                          projects building within the 0G ecosystem, providing
                          them with the operational, technical, and fundraising
                          support they need to scale.
                        </p>
                        <p>
                          Rooted in Asia yet open to the world and focused on
                          impact, this accelerator will select up to 10
                          exceptional teams from around the globe and equip them
                          with the tools to transition from early traction to
                          ecosystem adoption.
                        </p>
                        <h2>Why This Accelerator, Why Now</h2>
                        <p>
                          The demand for decentralized AI infrastructure is
                          growing, but many early-stage teams struggle to break
                          through the noise, especially in the Asia-Pacific
                          region, where operational and GTM support is limited.
                          At 0G, we believe in growing the stack and the
                          community. That means ensuring strong technical teams
                          aren’t held back by a lack of access to resources or
                          ecosystem connections.
                        </p>
                        <p>
                          The Global Accelerator fills that gap. While{' '}
                          <a href="https://0g.ai/blog/guild-on-0g">
                            Guild on 0G
                          </a>{' '}
                          focuses on onboarding and directly investing in early
                          developer teams building scale-ready apps, this new
                          initiative targets the next stage of growth: helping
                          traction-stage projects sharpen their strategy,
                          integrate into the 0G and web3 ecosystems, and connect
                          with investors and partners.
                        </p>
                        <p>
                          <br />
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t06_richtext-figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b98094ade4814352057_cYSr2amvFiV5xl0uvyQ72CyBR4Q.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h2>What We’re Looking For</h2>
                        <p>
                          The accelerator is open to any 0G-native project
                          aligned with our vision of building the Artificial
                          Intelligence Layer (AIL). We’re especially excited to
                          support builders in the following seven domains:
                        </p>
                        <h3>1. AI Agents</h3>
                        <p>
                          Autonomous, intelligent agents that automate web3
                          interactions, from DeFi assistants to task schedulers
                          to personal onchain copilots.
                        </p>
                        <h3>
                          2. Intelligent NFTs (
                          <a href="https://0g.ai/blog/0g-introducing-erc-7857">
                            iNFTs
                          </a>
                          )
                        </h3>
                        <p>
                          NFTs that do more than sit still. Powered by 0G’s{' '}
                          <a href="https://0g.ai/blog/reintroducing-0g-the-first-decentralized-ai-operating-system">
                            dAIOS
                          </a>{' '}
                          and <a href="https://0g.ai/blog/0g-storage">storage layer</a>,
                          iNFTs can update dynamically, act autonomously, and
                          interact across media, social, and financial layers.
                        </p>
                        <h3>3. Decentralized Science (DeSci)</h3>
                        <p>
                          Open data, transparent funding, and verifiable
                          research frameworks. DeSci on 0G unlocks decentralized
                          collaboration in science.
                        </p>
                        <h3>4. Real World Assets (RWA)</h3>
                        <p>
                          Tokenize the tangible. Use 0G to enable liquidity,
                          proof-based transparency, and programmable
                          interactions with real-world assets.
                        </p>
                        <h3>5. PayFi (Decentralized Payments and Finance)</h3>
                        <p>
                          Build AI-enhanced payment rails for the underbanked.
                          Think: smart agents, micropayments, and better ways to
                          monetize content.
                        </p>
                        <h3>6. Robotics</h3>
                        <p>
                          Marry onchain logic with real-world automation.
                          Applications range from decentralized coordination to
                          autonomous research agents.
                        </p>
                        <h3>7. Privacy-Preserving AI</h3>
                        <p>
                          Use 0G’s decentralized storage and compute layers to
                          train AI models without compromising user privacy.
                        </p>
                        <h2>Full-Stack Support for Builders</h2>
                        <p>
                          The 10 selected participants in the 0G Global
                          Accelerator will receive:
                        </p>
                        <ul role="list">
                          <li>Grants of up to $25,000 from 0G Labs</li>
                          <li>
                            Technical integration guidance and ecosystem
                            onboarding
                          </li>
                          <li>PR and marketing support from both 0G and Web3Labs</li>
                          <li>
                            Access to the Web3Labs Investment Alliance for
                            fundraising
                          </li>
                          <li>
                            Operational and GTM coaching, with a focus on
                            Asia-based teams
                          </li>
                          <li>Fast-track listing support from exchange partners</li>
                          <li>Up to $10,000 in Microsoft Azure cloud credits</li>
                        </ul>
                        <p>
                          By combining infrastructure access, capital, and
                          ecosystem connectivity, the program helps founders and
                          teams move from early traction to scalable growth.
                        </p>
                        <h2>Global Reach, Local Impact</h2>
                        <p>
                          The 0G Global Accelerator is launched in partnership
                          with <a href="https://web3labs.g-rocket.co/">Web3Labs</a>,
                          a one-stop gateway for web3 startups aligned with the
                          Hong Kong SAR government’s web3 policy vision. While
                          the program has a strong foundation in Asia and is
                          designed to support APAC teams, it’s open to
                          exceptional founders everywhere.
                        </p>
                        <p>
                          We recently kicked off the program with a community
                          meetup in Hangzhou, where more than 150 builders
                          gathered in an open-air venue to connect, share
                          insights, and explore opportunities within the 0G
                          ecosystem. The strong turnout underscored the growing
                          interest in decentralized AI across the region.
                        </p>
                        <p>
                          <br />
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t06_richtext-figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b98094ade481435205a_TgaNBI5yQiPCgAYVj58m1TVkM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          No matter where you&apos;re building, if you&apos;re
                          aligned with 0G’s mission to decentralize AI
                          infrastructure, we want to hear from you.{' '}
                          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTD_sLQ_wsSzeUfSstM2PRYtQCbYg69QYVfQmlo3CffKYXsQ/viewform">
                            Applications are open through July 1
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

          <section className="t06_section_filter section_filter">
            <div className="t06_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t06_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t06_cms-grid_list cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t06_cms-grid_item cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t06_cms-grid_content-wrapper cms-grid_content-wrapper t06_is-blog2 is-blog w-inline-block"
                >
                  <div className="t06_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t06_cms-grid_image cms-grid_image"
                    />
                    <div className="t06_spacer-medium spacer-medium hide-mobile-portrait"></div>
                    <div className="t06_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="t06_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t06_related-category">Tech</div>
                        <div className="t06_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t06_related-date">Sep 5, 2024</div>
                      </div>
                      <div className="t06_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t06_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t06_cms-grid_item2 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t06_cms-grid_content-wrapper2 cms-grid_content-wrapper t06_is-blog3 is-blog w-inline-block"
                >
                  <div className="t06_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t06_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t06_spacer-medium2 spacer-medium hide-mobile-portrait"></div>
                    <div className="t06_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t06_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t06_related-category2">Tech</div>
                        <div className="t06_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t06_related-date2">Aug 25, 2025</div>
                      </div>
                      <div className="t06_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t06_heading-style-h52 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t06_cms-grid_item3 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t06_cms-grid_content-wrapper3 cms-grid_content-wrapper t06_is-blog4 is-blog w-inline-block"
                >
                  <div className="t06_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t06_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t06_spacer-medium3 spacer-medium hide-mobile-portrait"></div>
                    <div className="t06_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t06_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t06_related-category3">Tech</div>
                        <div className="t06_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t06_related-date3">Aug 7, 2025</div>
                      </div>
                      <div className="t06_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t06_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t06_cms-grid_item4 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t06_cms-grid_content-wrapper4 cms-grid_content-wrapper t06_is-blog5 is-blog w-inline-block"
                >
                  <div className="t06_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t06_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t06_spacer-medium4 spacer-medium hide-mobile-portrait"></div>
                    <div className="t06_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t06_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t06_related-category4">Tech</div>
                        <div className="t06_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t06_related-date4">Jul 3, 2025</div>
                      </div>
                      <div className="t06_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t06_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t06_copy-toast ${showToast ? 't06_show' : ''}`}>
          Link copied!
        </div>
      </div>
    </div>
  )
}

