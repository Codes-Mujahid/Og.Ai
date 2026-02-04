import React, { useState } from 'react'
import './News05.css'

export default function News05() {
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
      'Token Update: A Look at 0G’s Upcoming Token Allocation'
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
    <div className="n05_container">
      <div className="n05_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n05_hide hide">
          <div className="n05_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n05_socialshare-title">
            Token Update: A Look at 0G’s Upcoming Token Allocation
          </div>
        </div>

        <main className="n05_main-wrapper main-wrapper">
          <section className="n05_section_hero section_hero n05_is-vertical is-vertical">
            <div className="n05_padding-global padding-global">
              <div className="n05_container-large container-large">
                <div className="n05_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n05_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n05_hero_bg-image hero_bg-image n05_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n05_hero_bg-gradient hero_bg-gradient n05_is-blog is-blog"></div>
                </div>

                <div className="n05_hero_content-component hero_content-component n05_is-vertical is-vertical">
                  <div className="n05_blog_meta-wrapper blog_meta-wrapper n05_is-white is-white">
                    <div className="n05_blog_meta-category">News</div>
                    <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                    <div className="n05_blog_meta-date">Mar 13, 2025</div>
                    <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                    <div className="n05_blog_meta-author">0g</div>
                  </div>

                  <div className="n05_spacer-small spacer-small"></div>

                  <div className="n05_max-width-large max-width-large n05_text-align-center text-align-center">
                    <h1 className="n05_heading-style-h3 heading-style-h3">
                      Token Update: A Look at 0G’s Upcoming Token Allocation
                    </h1>
                  </div>

                  <div className="n05_spacer-small spacer-small"></div>

                  <div className="n05_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n05_link-icon-light link-icon-light n05_is-static is-static n05_w-inline-block w-inline-block"
                    >
                      <div className="n05_icon-embed-xsmall icon-embed-xsmall n05_w-embed w-embed">
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
                      className="n05_link-icon-light link-icon-light n05_is-static is-static n05_w-inline-block w-inline-block"
                    >
                      <div className="n05_icon-embed-xsmall icon-embed-xsmall n05_w-embed w-embed">
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
                      className="n05_link-icon-light link-icon-light n05_is-static is-static n05_w-inline-block w-inline-block"
                    >
                      <div className="n05_icon-embed-xsmall icon-embed-xsmall n05_w-embed w-embed">
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

          <section className="n05_section_legal-content section_legal-content">
            <div className="n05_padding-global padding-global">
              <div className="n05_padding-section-medium padding-section-medium">
                <div className="n05_container-small container-small">
                  <div className="n05_legal-content_outer">
                    <div className="n05_legal-content_component legal-content_component">
                      <div className="n05_blog-rich-text blog-rich-text n05_w-richtext w-richtext">
                        <p>
                          0G is the largest AI Layer 1 ecosystem, powered by the
                          fastest DeAIOS, and is bringing AI fully on-chain. It
                          offers a scalable, secure, and developer-friendly
                          platform for building and deploying decentralized AI
                          applications. 0G&apos;s modular and layered
                          architecture, incorporating sharding mechanisms,
                          ensures infinite horizontal scalability, making it
                          ideal for handling the demands of AI workloads.
                          <br />
                          <br />
                          As 0G progresses towards mainnet, we’d like to share
                          an overview of our initial token allocation plan.
                        </p>

                        <h2>Token Allocation and Breakdown</h2>

                        <p>
                          The token supply at TGE will be 1,000,000,000 (1B)
                          tokens. Over half of the TGE supply (56%) will be
                          allocated to support the community and ecosystem
                          growth. Team and backer tokens are structured to
                          provide long-term incentives.
                        </p>

                        <p>
                          <strong>Community &amp; Ecosystem Growth</strong>:
                          56% (560M)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Ecosystem: 28%</strong> (280M)
                          </li>
                          <li>
                            <strong>AI Alignment Node: 15%</strong> (150M)
                          </li>
                          <li>
                            <strong>Community Rewards: 13%</strong> (130M)
                          </li>
                        </ul>

                        <p>
                          <strong>Core Team &amp; Early Backers</strong>: 44%
                          (440M)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>
                              0G Team, Contributors and Advisors: 22%
                            </strong>{' '}
                            (220M)
                          </li>
                          <li>
                            <strong>Backers:</strong> <strong>22%</strong>{' '}
                            (220M)
                          </li>
                        </ul>

                        <figure className="n05_w-richtext-align-center w-richtext-align-center n05_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n05_figure_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f3de3fede4f62eb5a4_p9hyaSE1aXXBkCEAAi75RJiMFKo.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>

                        <figure className="n05_w-richtext-align-center w-richtext-align-center n05_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n05_figure_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f2de3fede4f62eb595_uYOO2oA5zJwysOfR7NqyvjEbEA.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>

                        <p>
                          <em>Note: Allocations subject to change.</em>
                        </p>
                        <p>
                          The largest token allocation is dedicated to Ecosystem
                          growth.The AI Alignment Node allocation supports
                          participants operating decentralized validation
                          mechanisms to enhance the integrity and verifiability
                          of AI computations, and Community Rewards are reserved
                          for current and future users who actively contribute
                          to 0G’s community and ecosystem.
                        </p>

                        <h2>Stay Tuned for More Details</h2>

                        <p>
                          This distribution model is built to encourage
                          long-term participation, ensuring that incentives are
                          aligned across all key stakeholders while maximizing
                          0G’s long-term growth. More details on 0G token’s
                          multi-faceted use cases will be unveiled post-mainnet
                          launch.
                        </p>
                        <p>
                          In the meantime, stay engaged with the community and
                          keep an eye out for upcoming announcements!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n05_section_filter section_filter">
            <div className="n05_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n05_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n05_cms-grid_list cms-grid_list n05_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n05_cms-grid_item cms-grid_item n05_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n05_cms-grid_content-wrapper cms-grid_content-wrapper n05_is-blog is-blog n05_w-inline-block w-inline-block"
                >
                  <div className="n05_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n05_cms-grid_image cms-grid_image"
                    />
                    <div className="n05_spacer-medium spacer-medium n05_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n05_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n05_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n05_related_category">News</div>
                        <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                        <div className="n05_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n05_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n05_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n05_cms-grid_item cms-grid_item n05_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n05_cms-grid_content-wrapper cms-grid_content-wrapper n05_is-blog is-blog n05_w-inline-block w-inline-block"
                >
                  <div className="n05_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n05_cms-grid_image cms-grid_image"
                    />
                    <div className="n05_spacer-medium spacer-medium n05_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n05_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n05_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n05_related_category">News</div>
                        <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                        <div className="n05_blog_meta-date2">Sep 16, 2025</div>
                      </div>
                      <div className="n05_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n05_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n05_cms-grid_item cms-grid_item n05_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n05_cms-grid_content-wrapper cms-grid_content-wrapper n05_is-blog is-blog n05_w-inline-block w-inline-block"
                >
                  <div className="n05_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n05_cms-grid_image cms-grid_image"
                    />
                    <div className="n05_spacer-medium spacer-medium n05_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n05_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n05_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n05_related_category">News</div>
                        <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                        <div className="n05_blog_meta-date2">Jul 14, 2025</div>
                      </div>
                      <div className="n05_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n05_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n05_cms-grid_item cms-grid_item n05_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n05_cms-grid_content-wrapper cms-grid_content-wrapper n05_is-blog is-blog n05_w-inline-block w-inline-block"
                >
                  <div className="n05_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n05_cms-grid_image cms-grid_image"
                    />
                    <div className="n05_spacer-medium spacer-medium n05_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n05_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n05_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n05_related_category">News</div>
                        <div className="n05_icon-embed-custom icon-embed-custom n05_w-embed w-embed">
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
                        <div className="n05_blog_meta-date2">Jun 17, 2025</div>
                      </div>
                      <div className="n05_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n05_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n05_copy-toast ${showToast ? 'n05_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
