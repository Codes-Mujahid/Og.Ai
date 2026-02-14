import React, { useState } from 'react'
import './News11.css'
 
export default function News11() {
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
    const text = encodeURIComponent('FOCG Summer Wrap-up')
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
    <div className="n11_container">
      <div className="n11_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n11_hide hide">
          <div className="n11_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n11_socialshare-title">FOCG Summer Wrap-up</div>
        </div>
 
        <main className="n11_main-wrapper main-wrapper">
          <section className="n11_section_hero section_hero n11_is-vertical is-vertical">
            <div className="n11_padding-global padding-global">
              <div className="n11_container-large container-large">
                <div className="n11_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n11_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n11_hero_bg-image2 hero_bg-image n11_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n11_hero_bg-gradient hero_bg-gradient n11_is-blog is-blog"></div>
                </div>
 
                <div className="n11_hero_content-component hero_content-component n11_is-vertical2 is-vertical">
                  <div className="n11_blog_meta-wrapper blog_meta-wrapper n11_is-white is-white">
                    <div className="n11_blog_meta-category">News</div>
                    <div className="n11_icon-embed-custom1 icon-embed-custom n11_w-embed1 w-embed">
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
                    <div className="n11_blog_meta-date">Sep 20, 2024</div>
                    <div className="n11_icon-embed-custom2 icon-embed-custom n11_w-embed2 w-embed">
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
                    <div className="n11_blog_meta-author">0g</div>
                  </div>
 
                  <div className="n11_spacer-small spacer-small"></div>
 
                  <div className="n11_max-width-large max-width-large n11_text-align-center text-align-center">
                    <h1 className="n11_heading-style-h3 heading-style-h3">
                      FOCG Summer Wrap-up
                    </h1>
                  </div>
 
                  <div className="n11_spacer-small2 spacer-small"></div>
 
                  <div className="n11_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n11_link-icon-light link-icon-light n11_is-static is-static n11_w-inline-block w-inline-block"
                    >
                      <div className="n11_icon-embed-xsmall1 icon-embed-xsmall n11_w-embed3 w-embed">
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
                      className="n11_link-icon-light2 link-icon-light n11_is-static2 is-static n11_w-inline-block2 w-inline-block"
                    >
                      <div className="n11_icon-embed-xsmall2 icon-embed-xsmall n11_w-embed4 w-embed">
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
                      className="n11_link-icon-light3 link-icon-light n11_is-static3 is-static n11_w-inline-block3 w-inline-block"
                    >
                      <div className="n11_icon-embed-xsmall3 icon-embed-xsmall n11_w-embed5 w-embed">
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
 
          <section className="n11_section_legal-content section_legal-content">
            <div className="n11_padding-global2 padding-global">
              <div className="n11_padding-section-medium padding-section-medium">
                <div className="n11_container-small container-small">
                  <div className="n11_legal-content_outer">
                    <div className="n11_legal-content_component legal-content_component">
                      <div className="n11_blog-rich-text blog-rich-text n11_w-richtext w-richtext">
                        <p>
                          The Fully On-chain Gaming (FOCG) Summer co-hosted by
                          0G, Blade Games, and Blockbooster successfully
                          concluded August 22nd.&nbsp;
                        </p>
                        <p>
                          Winners will be announced shortly, and we would like
                          to extend our heartfelt thanks to all users who
                          enthusiastically participated and actively spread the
                          word.
                        </p>
                        <p>
                          0G’s data availability infrastructure means that
                          high-throughput applications are at last arriving
                          on-chain, enabling fully on-chain games such as those
                          created by Blade Games.
                        </p>
                        <p>
                          This is yet another example of 0G bringing previously
                          unfeasible use cases to reality, and we’re excited for
                          what’s next.
                        </p>
                        <p>
                          If you want to partner with us to bring any
                          high-performance use case to life,{' '}
                          <a href="https://0g.ai/contact">please reach out here</a>
                          .
                        </p>
                        <h2>FOCG Summer Achievements</h2>
                        <p>
                          The FOCG Summer marks an important milestone as it
                          represents a rare instance whereby fully on-chain
                          games have been successfully launched and used by
                          many.&nbsp;
                        </p>
                        <p>
                          For context, games were deployed on an Arbitrum Orbit
                          Chain powered by 0G’s Data Availability infrastructure,
                          which is{' '}
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            covered in-depth here
                          </a>
                          .
                        </p>
                        <p>During this event, we had:</p>
                        <ul role="list">
                          <li>
                            <strong>741,192 unique active wallets</strong>
                          </li>
                          <li>
                            <strong>
                              271,766 wallets interacted with the 0G Arbitrum
                              Orbit Chain
                            </strong>
                          </li>
                          <li>
                            <strong>3,842,371 missions completed</strong>
                          </li>
                          <li>
                            <strong>1,165,776 transactions processed</strong>
                          </li>
                        </ul>
                        <p>
                          This was an incredible turnout, and we’re excited
                          about what’s next!
                        </p>
                        <h2>Coming Next</h2>
                        <p>
                          0G Labs will continue to support highly intensive use
                          cases such as the ZK onchain game engine managed by
                          Blade Games.
                        </p>
                        <p>
                          Their core game{' '}
                          <a href="https://www.bladedao.games/#:~:text=INTERNAL%20PLAYTESTING,of%20the%20game.">
                            Dune Factor
                          </a>
                          , will be live in late September, with several other
                          ZK on-chain games in their ecosystem launching in
                          October.
                        </p>
                        <p>
                          If you would like to learn more about how 0G’s data
                          storage and data availability solutions can support
                          your business,{' '}
                          <a href="https://0g.ai/contact">please reach out here</a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          <section className="n11_section_filter section_filter">
            <div className="n11_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>
 
          <div className="n11_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n11_cms-grid_list cms-grid_list n11_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n11_cms-grid_item cms-grid_item n11_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n11_cms-grid_content-wrapper cms-grid_content-wrapper n11_is-blog2 is-blog n11_w-inline-block4 w-inline-block"
                >
                  <div className="n11_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n11_cms-grid_image cms-grid_image"
                    />
                    <div className="n11_spacer-medium spacer-medium n11_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n11_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n11_blog_meta-wrapper2 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n11_related_category"
                        >
                          News
                        </div>
                        <div className="n11_icon-embed-custom3 icon-embed-custom n11_w-embed6 w-embed">
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
                        <div className="n11_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n11_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n11_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n11_cms-grid_item2 cms-grid_item n11_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n11_cms-grid_content-wrapper2 cms-grid_content-wrapper n11_is-blog3 is-blog n11_w-inline-block5 w-inline-block"
                >
                  <div className="n11_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n11_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n11_spacer-medium2 spacer-medium n11_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n11_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n11_blog_meta-wrapper3 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n11_related_category2"
                        >
                          News
                        </div>
                        <div className="n11_icon-embed-custom4 icon-embed-custom n11_w-embed7 w-embed">
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
                        <div className="n11_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n11_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n11_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n11_cms-grid_item3 cms-grid_item n11_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n11_cms-grid_content-wrapper3 cms-grid_content-wrapper n11_is-blog4 is-blog n11_w-inline-block6 w-inline-block"
                >
                  <div className="n11_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n11_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n11_spacer-medium3 spacer-medium n11_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n11_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n11_blog_meta-wrapper4 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n11_related_category3"
                        >
                          News
                        </div>
                        <div className="n11_icon-embed-custom5 icon-embed-custom n11_w-embed8 w-embed">
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
                        <div className="n11_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n11_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n11_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
 
              <div
                role="listitem"
                className="n11_cms-grid_item4 cms-grid_item n11_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n11_cms-grid_content-wrapper4 cms-grid_content-wrapper n11_is-blog5 is-blog n11_w-inline-block7 w-inline-block"
                >
                  <div className="n11_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n11_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n11_spacer-medium4 spacer-medium n11_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n11_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n11_blog_meta-wrapper5 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="n11_related_category4"
                        >
                          News
                        </div>
                        <div className="n11_icon-embed-custom6 icon-embed-custom n11_w-embed9 w-embed">
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
                        <div className="n11_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n11_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n11_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
 
        <div className={`n11_copy-toast ${showToast ? 'n11_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
