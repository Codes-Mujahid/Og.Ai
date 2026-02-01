import React, { useState } from 'react'

export default function Partners05() {
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
    const text = encodeURIComponent('Announcing Lumoz and 0G Partnership')
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
    <div className="partners05_root p05_div001">
      <style>{`
        .partners05_root .p05_copy-toast {
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

        .partners05_root .p05_copy-toast.p05_show {
          opacity: 1;
        }

        .partners05_root .p05_section_hero {
          position: relative;
          overflow: hidden;
        }

        .partners05_root .p05_div006 {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .partners05_root .p05_hero_bg-image,
        .partners05_root .p05_hero_bg-image-2 {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .partners05_root .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .partners05_root .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .partners05_root .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div fs-socialshare-element="content" className="p05_div002 hide">
        <div className="p05_div003">Check out this insightful blog post:&nbsp;</div>
        <div className="p05_div004">Announcing Lumoz and 0G Partnership</div>
      </div>

      <main className="p05_main main-wrapper">
        <section className="p05_section_hero section_hero is-vertical">
          <div className="p05_div005 padding-global">
            <div className="p05_div007 container-large">
              <div className="p05_div006 hero_bg-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                  alt=""
                  className="p05_hero_bg-image hero_bg-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                  loading="lazy"
                  alt=""
                  className="p05_hero_bg-image-2 hero_bg-image w-dyn-bind-empty"
                />
                <div className="p05_div008 hero_bg-gradient is-blog"></div>
              </div>

              <div className="p05_div009 hero_content-component is-vertical">
                <div className="p05_div010 blog_meta-wrapper is-white">
                  <div className="p05_div011">Partners</div>
                  <div className="p05_div012 icon-embed-custom w-embed">
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
                  <div className="p05_div013">Sep 24, 2024</div>
                  <div className="p05_div014 icon-embed-custom w-embed">
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
                  <div className="p05_div015">0g</div>
                </div>

                <div className="p05_div016 spacer-small"></div>

                <div className="p05_div017 max-width-large text-align-center">
                  <h1 className="p05_heading heading-style-h3">
                    Announcing Lumoz and 0G Partnership
                  </h1>
                </div>

                <div className="p05_div018 spacer-small"></div>

                <div className="p05_div019 blog_button-wrapper">
                  <a
                    onClick={handleCopy}
                    href="#"
                    className="p05_link-icon-light link-icon-light is-static w-inline-block"
                  >
                    <div className="p05_div020 icon-embed-xsmall w-embed">
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
                    className="p05_link-icon-light-2 link-icon-light is-static w-inline-block"
                  >
                    <div className="p05_div021 icon-embed-xsmall w-embed">
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
                    className="p05_link-icon-light-3 link-icon-light is-static w-inline-block"
                  >
                    <div className="p05_div022 icon-embed-xsmall w-embed">
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

        <section className="p05_section_legal-content section_legal-content">
          <div className="p05_div023 padding-global">
            <div className="p05_div024 padding-section-medium">
              <div className="p05_div025 container-small">
                <div className="p05_div026">
                  <div className="p05_div027 legal-content_component">
                    <div className="p05_div028 blog-rich-text w-richtext">
                      <p>
                        0G is excited to collaborate with{' '}
                        <a href="https://lumoz.org/">Lumoz</a>, the Modular
                        Compute Layer for ZK &amp; AI. This partnership brings
                        together two critical infrastructure layers—Lumoz’s
                        decentralized compute and 0G’s Artificial Intelligence
                        Layer (AIL)—to power verifiable, modular, and onchain AI
                        at scale.
                      </p>
                      <p>
                        Lumoz provides computing power for verifying AI and
                        Zero-Knowledge (ZK) related computations, while also
                        offering rollup infrastructure that enables anyone to
                        deploy their own ZK rollup. ZK is highly scalable,
                        meaning it can efficiently support AI applications, a
                        significant focus for Lumoz and an area of clear
                        alignment with 0G.
                      </p>
                      <p>
                        The result is a highly composable tech stack that
                        unlocks new frontiers for decentralized AI, aligning
                        closely with 0G’s vision of a Decentralized AI Operating
                        System (dAIOS) built for performance, openness, and
                        verifiability.
                      </p>
                      <p>
                        They’ve already helped launch several networks,
                        including <a href="https://zkfair.io/">ZK Fair</a>,{' '}
                        <a href="https://merlinchain.io/">Merlin Chain</a> (a
                        BTC L2), and <a href="https://duckchain.io/">Duckchain</a>{' '}
                        (a TON L2).
                      </p>
                      <p>
                        Working together means that 0G will provide highly
                        scalable data storage and data availability solutions
                        for Lumoz itself, as well as for any projects built with
                        their tech stack.
                      </p>
                      <p>Key highlights include:</p>
                      <ul role="list">
                        <li>
                          <strong>Transaction Storage: </strong>Projects built
                          with Lumoz will have many transactions occurring at
                          any given moment in time. 0G can efficiently store and
                          verify this data with 0G Storage.
                        </li>
                        <li>
                          <strong>ZK Proof Storage: </strong>Beyond regular
                          transactions, many ZK Proofs will also be created as
                          cryptographic proof that transactions for Lumoz-based
                          networks were done correctly. These add up quickly but
                          will also be managed by 0G’s storage solution.
                        </li>
                      </ul>
                      <p>
                        Meanwhile, both types of verification will be secured
                        by Ethereum to verify that all was done correctly and
                        honestly.
                      </p>
                      <h2>
                        <strong>Introduction to Lumoz</strong>
                      </h2>
                      <p>
                        The Lumoz Network provides advanced zero-knowledge proof
                        (ZKP) services, supporting the development of Rollup
                        networks and providing computational power for
                        cutting-edge technologies like AI.
                      </p>
                      <p>
                        Facing the current challenges of computational costs in
                        the zero-knowledge computing field, their team has
                        extensive experience in the ZKP domain and has optimized
                        circuits and algorithms to address high costs and
                        low-efficiency issues faced by Rollup projects, while
                        also lowering the barriers for ordinary users to
                        participate in the ZK computing market.
                      </p>
                      <p>The Lumoz DePIN network is easy for anyone to join and build with.</p>
                      <p>
                        More info: <a href="https://lumoz.org/">https://lumoz.org/</a>
                      </p>
                      <h2>
                        <strong>0G Labs</strong>
                      </h2>
                      <p>
                        0G is the world’s first Artificial Intelligence Layer
                        (AIL)—a new category of modular infrastructure where
                        compute, storage, and intelligence are verifiable and
                        onchain by default.
                      </p>
                      <p>
                        At its core is 0G’s Decentralized AI Operating System
                        (dAIOS): a unified, infinitely scalable system that
                        powers AI applications. With throughput speeds of 50
                        GB/second per consensus layer—50,000x faster than
                        competitors—at 100x lower cost, 0G is revolutionizing
                        high-data use cases, enabling scalable L2s and modular
                        AI to seamlessly integrate into the Web3 ecosystem.
                      </p>
                      <p>
                        Our 1000x faster storage, infinitely scalable DA, and
                        verifiable AI serving framework are making fully
                        on-chain AI a reality, while future-proofing AI
                        infrastructure to support continuous innovation and
                        scalability for the future.
                      </p>
                      <p>
                        To learn more, visit <a href="http://0g.ai/">0G.ai</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="p05_section_filter section_filter">
          <div className="p05_div029 blog_more-blog">
            <h5>Related news:</h5>
          </div>
        </section> */}

        {/* <div className="p05_div030 w-dyn-list">
          <div
            fs-cmsfilter-element="list"
            role="list"
            className="p05_div031 cms-grid_list w-dyn-items"
          >
            <div role="listitem" className="p05_div032 cms-grid_item w-dyn-item">
              <a
                href="/blog/0g-validators"
                className="p05_cms-grid_content-wrapper cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p05_div033 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                    className="p05_cms-grid_image cms-grid_image"
                  />
                  <div className="p05_div034 spacer-medium hide-mobile-portrait"></div>
                  <div className="p05_div035 blog_contnet-wrapper">
                    <div className="p05_div036 blog_meta-wrapper">
                      <div className="p05_div037" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p05_div038 icon-embed-custom w-embed">
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
                      <div className="p05_div039">Sep 15, 2025</div>
                    </div>
                    <div className="p05_div040 spacer-xmedium"></div>
                    <h3 className="p05_heading-style-h5 heading-style-h5">
                      Announcing 0G’s World-class Validator Set
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p05_div041 cms-grid_item w-dyn-item">
              <a
                href="/blog/early-signals-0g-global-accelerator"
                className="p05_cms-grid_content-wrapper-2 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p05_div042 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                    className="p05_cms-grid_image-2 cms-grid_image"
                  />
                  <div className="p05_div043 spacer-medium hide-mobile-portrait"></div>
                  <div className="p05_div044 blog_contnet-wrapper">
                    <div className="p05_div045 blog_meta-wrapper">
                      <div className="p05_div046" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p05_div047 icon-embed-custom w-embed">
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
                      <div className="p05_div048">Aug 14, 2025</div>
                    </div>
                    <div className="p05_div049 spacer-xmedium"></div>
                    <h3 className="p05_heading-style-h5-2 heading-style-h5">
                      Where Onchain AI is Headed: Early Signals from the 0G
                      Global Accelerator
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p05_div050 cms-grid_item w-dyn-item">
              <a
                href="/blog/builder-spotlight-gimo"
                className="p05_cms-grid_content-wrapper-3 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p05_div051 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                    className="p05_cms-grid_image-3 cms-grid_image"
                  />
                  <div className="p05_div052 spacer-medium hide-mobile-portrait"></div>
                  <div className="p05_div053 blog_contnet-wrapper">
                    <div className="p05_div054 blog_meta-wrapper">
                      <div className="p05_div055" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p05_div056 icon-embed-custom w-embed">
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
                      <div className="p05_div057">Aug 13, 2025</div>
                    </div>
                    <div className="p05_div058 spacer-xmedium"></div>
                    <h3 className="p05_heading-style-h5-3 heading-style-h5">
                      0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid
                      Staking for the AI Economy
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p05_div059 cms-grid_item w-dyn-item">
              <a
                href="/blog/announcing-the-pond-and-0g-partnership"
                className="p05_cms-grid_content-wrapper-4 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p05_div060 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                    loading="lazy"
                    alt=""
                    className="p05_cms-grid_image-4 cms-grid_image"
                  />
                  <div className="p05_div061 spacer-medium hide-mobile-portrait"></div>
                  <div className="p05_div062 blog_contnet-wrapper">
                    <div className="p05_div063 blog_meta-wrapper">
                      <div className="p05_div064" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p05_div065 icon-embed-custom w-embed">
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
                      <div className="p05_div066">Apr 20, 2024</div>
                    </div>
                    <div className="p05_div067 spacer-xmedium"></div>
                    <h3 className="p05_heading-style-h5-4 heading-style-h5">
                      Announcing the Pond and 0G Partnership
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
      </main>

      <div className={`p05_div068 p05_copy-toast ${showToast ? 'p05_show' : ''}`}>
        Link copied
      </div>
    </div>
  )
}
