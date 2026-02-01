import React, { useState } from 'react'

export default function Partners07() {
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
    const text = encodeURIComponent('0G Partnership with Assister')
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
    <div className="partners07_root p07_div001">
      <style>{`
        .partners07_root .p07_copy-toast {
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

        .partners07_root .p07_copy-toast.p07_show {
          opacity: 1;
        }

        .partners07_root .p07_section_hero {
          position: relative;
          overflow: hidden;
        }

        .partners07_root .p07_div008 {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .partners07_root .p07_hero_bg-image,
        .partners07_root .p07_hero_bg-image-2 {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .partners07_root .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .partners07_root .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .partners07_root .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div className={`p07_div002 p07_copy-toast ${showToast ? 'p07_show' : ''}`}>
        Link copied
      </div>

      <div fs-socialshare-element="content" className="p07_div003 hide">
        <div className="p07_div004">Check out this insightful blog post:&nbsp;</div>
        <div className="p07_div005">0G Partnership with Assister</div>
      </div>

      <main className="p07_main main-wrapper">
        <section className="p07_section_hero section_hero is-vertical">
          <div className="p07_div006 padding-global">
            <div className="p07_div007 container-large">
              <div className="p07_div008 hero_bg-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                  alt=""
                  className="p07_hero_bg-image hero_bg-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                  loading="lazy"
                  alt=""
                  className="p07_hero_bg-image-2 hero_bg-image w-dyn-bind-empty"
                />
                <div className="p07_div009 hero_bg-gradient is-blog"></div>
              </div>

              <div className="p07_div010 hero_content-component is-vertical">
                <div className="p07_div011 blog_meta-wrapper is-white">
                  <div className="p07_div012">Partners</div>
                  <div className="p07_div013 icon-embed-custom w-embed">
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
                  <div className="p07_div014">Jun 29, 2024</div>
                  <div className="p07_div015 icon-embed-custom w-embed">
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
                  <div className="p07_div016">0g</div>
                </div>

                <div className="p07_div017 spacer-small"></div>

                <div className="p07_div018 max-width-large text-align-center">
                  <h1 className="p07_heading heading-style-h3">
                    0G Partnership with Assister
                  </h1>
                </div>

                <div className="p07_div019 spacer-small"></div>

                <div className="p07_div020 blog_button-wrapper">
                  <a
                    onClick={handleCopy}
                    href="#"
                    className="p07_link-icon-light link-icon-light is-static w-inline-block"
                  >
                    <div className="p07_div021 icon-embed-xsmall w-embed">
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
                    className="p07_link-icon-light-2 link-icon-light is-static w-inline-block"
                  >
                    <div className="p07_div022 icon-embed-xsmall w-embed">
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
                    className="p07_link-icon-light-3 link-icon-light is-static w-inline-block"
                  >
                    <div className="p07_div023 icon-embed-xsmall w-embed">
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

        <section className="p07_section_legal-content section_legal-content">
          <div className="p07_div024 padding-global">
            <div className="p07_div025 padding-section-medium">
              <div className="p07_div026 container-small">
                <div className="p07_div027">
                  <div className="p07_div028 legal-content_component">
                    <div className="p07_div029 blog-rich-text w-richtext">
                      <p>
                        0G is excited to partner with Assisterr, supporting
                        their on-chain Small Language Models (SLMs) via 0G’s
                        highly scalable data availability and data storage
                        infrastructure.
                      </p>
                      <p>
                        0G&apos;s storage solution, 0G Storage, will enhance AI
                        queryable data efficiency and could potentially be used
                        to support Assisterr’s decentralized vector databases.
                        It will also allow for the 0G ecosystem to access their
                        SLMs, helping 0G to bring AI fully on-chain.
                      </p>
                      <h3>
                        <strong>Assisterr’s SLMs</strong>
                      </h3>
                      <p>
                        SLMs are a type of natural language processing (NLP)
                        model that is highly compact and focused on efficiency.
                        They’re extremely important to the field of NLP due to
                        their efficiency and they’re now arriving on-chain
                        thanks to technological advances made by Assisterr.
                      </p>
                      <p>
                        Core to Assisterr is their Data Provenance Protocol that
                        ensures that these SLMs are community-owned, with a
                        decentralized community effort towards maximizing the
                        accuracy of domain-specific SLMs. This can be used for
                        incentivizing both data contributors and data
                        validators, as well as for tracking dataset changes, who
                        validated data quality, and more.
                      </p>
                      <p>
                        The result is that SLMs are becoming community-owned,
                        reaping all associated blockchain benefits along the
                        way.
                      </p>
                      <p>The partnership has 3 key elements:</p>
                      <ol role="list">
                        <li>
                          <strong>AI Queryable Data Storage: </strong>Using 0G to
                          store and query data used for Assisterr’s SLMs. This
                          includes vast datasets from any partners of Assisterr.
                        </li>
                        <li>
                          <strong>Decentralized Vector Database Research: </strong>
                          Jointly exploring support for decentralized vector
                          databases, which manage on-chain vectorized data. This
                          refers to data represented in a numerical format,
                          often used in machine learning and AI to represent
                          words, images, or other entities. These are core to
                          Assisterr’s Data Provenance Framework and support
                          their SLMs.
                        </li>
                        <li>
                          <strong>Providing Assisterr to Ecosystem Partners:</strong>{' '}
                          0G’s ecosystem will be able to access Assisterr,
                          receiving rewards for data contributions and data
                          validation. This means that other parties, including
                          those storing data via 0G, can share their data with
                          Assisterr and be rewarded in turn.
                        </li>
                      </ol>
                      <p>
                        This partnership represents a significant step forward
                        in terms of bringing SLMs on-chain, and both parties are
                        thrilled to be working together.
                      </p>
                      <h3>
                        <strong>About Assisterr.ai&nbsp;</strong>
                      </h3>
                      <p>
                        Assister is a Cambridge-based startup building a Network
                        of Community-Owned Small Language Models (SLMs). SLMs
                        refer to natural language processing (NLP) models
                        designed to be more compact and efficient than their
                        larger counterparts, providing useful language
                        understanding and generation capabilities with fewer
                        computational resources.
                      </p>
                      <h3>
                        <strong>About 0G&nbsp;</strong>
                      </h3>
                      <p>
                        0G is the first decentralized AI layer (AIL)—a modular,
                        infinitely-scalable layer 1 that integrates storage,
                        data availability, compute, and a service marketplace to
                        underpin the future of all AI use cases and
                        applications. The team includes 10+ PhD recipients and
                        one of the world’s top cryptographers, while the
                        business team has extensive fundraising and growth
                        success, winning numerous awards such as the top
                        YCombinator project and the top entrepreneur award. To
                        learn more, visit 0g.ai.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="p07_section_filter section_filter">
          <div className="p07_div030 blog_more-blog">
            <h5>Related news:</h5>
          </div>
        </section> */}

        {/* <div className="p07_div031 w-dyn-list">
          <div
            fs-cmsfilter-element="list"
            role="list"
            className="p07_div032 cms-grid_list w-dyn-items"
          >
            <div role="listitem" className="p07_div033 cms-grid_item w-dyn-item">
              <a
                href="/blog/0g-validators"
                className="p07_cms-grid_content-wrapper cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p07_div034 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                    className="p07_cms-grid_image cms-grid_image"
                  />
                  <div className="p07_div035 spacer-medium hide-mobile-portrait"></div>
                  <div className="p07_div036 blog_contnet-wrapper">
                    <div className="p07_div037 blog_meta-wrapper">
                      <div className="p07_div038" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p07_div039 icon-embed-custom w-embed">
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
                      <div className="p07_div040">Sep 15, 2025</div>
                    </div>
                    <div className="p07_div041 spacer-xmedium"></div>
                    <h3 className="p07_heading-style-h5 heading-style-h5">
                      Announcing 0G’s World-class Validator Set
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p07_div042 cms-grid_item w-dyn-item">
              <a
                href="/blog/early-signals-0g-global-accelerator"
                className="p07_cms-grid_content-wrapper-2 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p07_div043 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                    className="p07_cms-grid_image-2 cms-grid_image"
                  />
                  <div className="p07_div044 spacer-medium hide-mobile-portrait"></div>
                  <div className="p07_div045 blog_contnet-wrapper">
                    <div className="p07_div046 blog_meta-wrapper">
                      <div className="p07_div047" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p07_div048 icon-embed-custom w-embed">
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
                      <div className="p07_div049">Aug 14, 2025</div>
                    </div>
                    <div className="p07_div050 spacer-xmedium"></div>
                    <h3 className="p07_heading-style-h5-2 heading-style-h5">
                      Where Onchain AI is Headed: Early Signals from the 0G
                      Global Accelerator
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p07_div051 cms-grid_item w-dyn-item">
              <a
                href="/blog/builder-spotlight-gimo"
                className="p07_cms-grid_content-wrapper-3 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p07_div052 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                    className="p07_cms-grid_image-3 cms-grid_image"
                  />
                  <div className="p07_div053 spacer-medium hide-mobile-portrait"></div>
                  <div className="p07_div054 blog_contnet-wrapper">
                    <div className="p07_div055 blog_meta-wrapper">
                      <div className="p07_div056" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p07_div057 icon-embed-custom w-embed">
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
                      <div className="p07_div058">Aug 13, 2025</div>
                    </div>
                    <div className="p07_div059 spacer-xmedium"></div>
                    <h3 className="p07_heading-style-h5-3 heading-style-h5">
                      0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid
                      Staking for the AI Economy
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p07_div060 cms-grid_item w-dyn-item">
              <a
                href="/blog/announcing-the-pond-and-0g-partnership"
                className="p07_cms-grid_content-wrapper-4 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p07_div061 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                    loading="lazy"
                    alt=""
                    className="p07_cms-grid_image-4 cms-grid_image"
                  />
                  <div className="p07_div062 spacer-medium hide-mobile-portrait"></div>
                  <div className="p07_div063 blog_contnet-wrapper">
                    <div className="p07_div064 blog_meta-wrapper">
                      <div className="p07_div065" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p07_div066 icon-embed-custom w-embed">
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
                      <div className="p07_div067">Apr 20, 2024</div>
                    </div>
                    <div className="p07_div068 spacer-xmedium"></div>
                    <h3 className="p07_heading-style-h5-4 heading-style-h5">
                      Announcing the Pond and 0G Partnership
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  )
}
