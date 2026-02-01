import React, { useState } from 'react'

export default function Partners04() {
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
      '0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC'
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
    <div className="partners04_root p04_div001">
      <style>{`
        .partners04_root .p04_copy-toast {
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

        .partners04_root .p04_copy-toast.p04_show {
          opacity: 1;
        }

        .partners04_root .p04_section_hero {
          position: relative;
          overflow: hidden;
        }

        .partners04_root .p04_div009 {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .partners04_root .p04_hero_bg-image,
        .partners04_root .p04_hero_bg-image-2 {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .partners04_root .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .partners04_root .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .partners04_root .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div fs-socialshare-element="content" className="p04_div002 hide">
        <div className="p04_div003">Check out this insightful blog post:&nbsp;</div>
        <div className="p04_div004">
          0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC
        </div>
      </div>

      <main className="p04_main main-wrapper">
        <section className="p04_section_hero section_hero is-vertical">
          <div className="p04_div005 padding-global">
            <div className="p04_div006 container-large">
              <div className="p04_div009 hero_bg-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                  alt=""
                  className="p04_hero_bg-image hero_bg-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                  loading="lazy"
                  alt=""
                  className="p04_hero_bg-image-2 hero_bg-image w-dyn-bind-empty"
                />
                <div className="p04_div010 hero_bg-gradient is-blog"></div>
              </div>

              <div className="p04_div011 hero_content-component is-vertical">
                <div className="p04_div012 blog_meta-wrapper is-white">
                  <div className="p04_div013">Partners</div>
                  <div className="p04_div014 icon-embed-custom w-embed">
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
                  <div className="p04_div015">Jan 13, 2025</div>
                  <div className="p04_div016 icon-embed-custom w-embed">
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
                  <div className="p04_div017">0g</div>
                </div>

                <div className="p04_div018 spacer-small"></div>

                <div className="p04_div019 max-width-large text-align-center">
                  <h1 className="p04_heading heading-style-h3">
                    0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in
                    APAC
                  </h1>
                </div>

                <div className="p04_div020 spacer-small"></div>

                <div className="p04_div021 blog_button-wrapper">
                  <a
                    onClick={handleCopy}
                    href="#"
                    className="p04_link-icon-light link-icon-light is-static w-inline-block"
                  >
                    <div className="p04_div022 icon-embed-xsmall w-embed">
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
                    className="p04_link-icon-light-2 link-icon-light is-static w-inline-block"
                  >
                    <div className="p04_div023 icon-embed-xsmall w-embed">
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
                    className="p04_link-icon-light-3 link-icon-light is-static w-inline-block"
                  >
                    <div className="p04_div024 icon-embed-xsmall w-embed">
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

        <section className="p04_section_legal-content section_legal-content">
          <div className="p04_div025 padding-global">
            <div className="p04_div026 padding-section-medium">
              <div className="p04_div027 container-small">
                <div className="p04_div028">
                  <div className="p04_div029 legal-content_component">
                    <div className="p04_div030 blog-rich-text w-richtext">
                      <p>
                        0G, the first Artificial Intelligence Layer (AIL) and
                        decentralized AI operating system (dAIOS), is
                        collaborating with Alibaba Cloud to drive
                        next-generation AI and Web3 infrastructure across the
                        Asia-Pacific region.
                      </p>
                      <p>
                        By combining Alibaba Cloud’s industry-leading computing
                        capabilities with 0G’s modular, decentralized AI stack,
                        this partnership sets the stage for scalable, verifiable,
                        and data-driven solutions across APAC. Together, they aim
                        to empower developers, enterprises, and emerging talent
                        to build within a new era of Infinite AI, where compute,
                        storage, and intelligence are open, composable, and
                        accessible to all.
                      </p>
                      <p>
                        This collaboration is supported by Cloudician
                        Technology, a key Web3 infrastructure partner in the
                        region. It reflects a shared commitment to bridging Web2
                        and Web3 systems—creating a seamless pathway for
                        enterprises and developers to adopt decentralized
                        technologies at scale.
                      </p>
                      <h3>Key Highlights of the Collaboration:</h3>
                      <ol role="list">
                        <li>
                          Driving Web3 Growth in APAC: This partnership fosters a
                          thriving Web3 ecosystem by combining Alibaba Cloud’s
                          regional presence with 0G’s AIL. Together, they’re
                          enabling enterprises and developers to adopt
                          decentralized infrastructure that’s optimized for AI
                          performance and scale.
                        </li>
                        <li>
                          Seamless Integration of AI, Cloud, and Web3: 0G’s
                          decentralized AI stack—spanning compute, storage, and
                          data availability—will integrate with Alibaba Cloud’s
                          infrastructure to support data-intensive use cases like
                          large-scale AI training, real-time inference, and
                          verifiable compute.
                        </li>
                        <li>
                          Empowering the Next Generation of Innovators: Through
                          workshops, hackathons, and mentorship programs, the
                          collaboration will support emerging talent across APAC,
                          inspiring builders to explore the composability of AI,
                          blockchain, and cloud technologies.
                        </li>
                      </ol>
                      <h3>Key Partners and Roles</h3>
                      <ul role="list">
                        <li>
                          0G (Zero Gravity): The first AIL and dAIOS, 0G serves as
                          the foundation for composable, scalable, and verifiable
                          AI applications. Its modular infrastructure
                          orchestrates compute, storage, and data services to
                          meet the demands of decentralized AI workloads.
                        </li>
                        <li>
                          Alibaba Cloud: A leading cloud computing provider
                          offering robust technology and a vast customer base,
                          and supporting the development of secure and efficient
                          blockchain infrastructure and Web3 applications.
                          Alibaba Cloud’s global network, reliable computing
                          resources, and data protection capabilities make it a
                          key player in the cloud computing market.
                        </li>
                        <li>
                          Cloudician Technology: A professional web3
                          infrastructure provider with extensive experience in
                          staking and validator services, PRC &amp; node API
                          services, security, key custody, data indexing, and
                          tool development, as well as offering high-performance
                          databases, media streaming, and high-speed private data
                          storage network solutions.
                        </li>
                      </ul>
                      <p>
                        Together with support from Cloudician, 0G and Alibaba
                        Cloud are accelerating the convergence of AI and Web3 in
                        APAC. By empowering developers, enterprises, and emerging
                        builders with reliable infrastructure and modular,
                        decentralized AI tooling, the partnership is laying the
                        groundwork for an open, innovation-driven digital future.
                      </p>
                      <p>
                        To learn more about 0G Labs, visit{' '}
                        <a href="https://0g.ai/" target="_blank" rel="noreferrer">
                          0G.ai
                        </a>
                      </p>
                      <p>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="p04_section_filter section_filter">
          <div className="p04_div031 blog_more-blog">
            <h5>Related news:</h5>
          </div>
        </section> */}

        {/* <div className="p04_div032 w-dyn-list">
          <div
            fs-cmsfilter-element="list"
            role="list"
            className="p04_div033 cms-grid_list w-dyn-items"
          >
            <div role="listitem" className="p04_div034 cms-grid_item w-dyn-item">
              <a
                href="/blog/0g-validators"
                className="p04_cms-grid_content-wrapper cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p04_div035 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                    className="p04_cms-grid_image cms-grid_image"
                  />
                  <div className="p04_div036 spacer-medium hide-mobile-portrait"></div>
                  <div className="p04_div037 blog_contnet-wrapper">
                    <div className="p04_div038 blog_meta-wrapper">
                      <div className="p04_div039" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p04_div040 icon-embed-custom w-embed">
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
                      <div className="p04_div041">Sep 15, 2025</div>
                    </div>
                    <div className="p04_div042 spacer-xmedium"></div>
                    <h3 className="p04_heading-style-h5 heading-style-h5">
                      Announcing 0G’s World-class Validator Set
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p04_div043 cms-grid_item w-dyn-item">
              <a
                href="/blog/early-signals-0g-global-accelerator"
                className="p04_cms-grid_content-wrapper-2 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p04_div044 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                    className="p04_cms-grid_image-2 cms-grid_image"
                  />
                  <div className="p04_div045 spacer-medium hide-mobile-portrait"></div>
                  <div className="p04_div046 blog_contnet-wrapper">
                    <div className="p04_div047 blog_meta-wrapper">
                      <div className="p04_div048" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p04_div049 icon-embed-custom w-embed">
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
                      <div className="p04_div050">Aug 14, 2025</div>
                    </div>
                    <div className="p04_div051 spacer-xmedium"></div>
                    <h3 className="p04_heading-style-h5-2 heading-style-h5">
                      Where Onchain AI is Headed: Early Signals from the 0G
                      Global Accelerator
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p04_div052 cms-grid_item w-dyn-item">
              <a
                href="/blog/builder-spotlight-gimo"
                className="p04_cms-grid_content-wrapper-3 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p04_div053 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                    className="p04_cms-grid_image-3 cms-grid_image"
                  />
                  <div className="p04_div054 spacer-medium hide-mobile-portrait"></div>
                  <div className="p04_div055 blog_contnet-wrapper">
                    <div className="p04_div056 blog_meta-wrapper">
                      <div className="p04_div057" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p04_div058 icon-embed-custom w-embed">
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
                      <div className="p04_div059">Aug 13, 2025</div>
                    </div>
                    <div className="p04_div060 spacer-xmedium"></div>
                    <h3 className="p04_heading-style-h5-3 heading-style-h5">
                      0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid
                      Staking for the AI Economy
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p04_div061 cms-grid_item w-dyn-item">
              <a
                href="/blog/announcing-the-pond-and-0g-partnership"
                className="p04_cms-grid_content-wrapper-4 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p04_div062 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                    loading="lazy"
                    alt=""
                    className="p04_cms-grid_image-4 cms-grid_image"
                  />
                  <div className="p04_div063 spacer-medium hide-mobile-portrait"></div>
                  <div className="p04_div064 blog_contnet-wrapper">
                    <div className="p04_div065 blog_meta-wrapper">
                      <div className="p04_div066" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p04_div067 icon-embed-custom w-embed">
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
                      <div className="p04_div068">Apr 20, 2024</div>
                    </div>
                    <div className="p04_div069 spacer-xmedium"></div>
                    <h3 className="p04_heading-style-h5-4 heading-style-h5">
                      Announcing the Pond and 0G Partnership
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
      </main>

      <div className={`p04_div070 p04_copy-toast ${showToast ? 'p04_show' : ''}`}>
        Link copied
      </div>
    </div>
  )
}

