import React, { useState } from 'react'
import './Tech03.css'

export default function Tech03() {
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
    const text = encodeURIComponent('0G Storage: Built for the AI Era')
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
    <div className="t03_container">
      <div className="t03_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t03_hide hide">
          <div className="t03_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t03_socialshare-title">
            0G Storage: Built for the AI Era
          </div>
        </div>

        <main className="t03_main-wrapper main-wrapper">
          <section className="t03_section_hero section_hero t03_is-vertical is-vertical">
            <div className="t03_padding-global padding-global">
              <div className="t03_container-large container-large">
                <div className="t03_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t03_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t03_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t03_hero_bg-gradient hero_bg-gradient t03_is-blog is-blog"></div>
                </div>

                <div className="t03_hero_content-component hero_content-component t03_is-vertical2 is-vertical">
                  <div className="t03_blog_meta-wrapper blog_meta-wrapper t03_is-white is-white">
                    <div className="t03_blog_meta-category">Tech</div>
                    <div className="t03_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t03_blog_meta-date">Jul 3, 2025</div>
                    <div className="t03_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t03_blog_meta-author">0g</div>
                  </div>

                  <div className="t03_spacer-small spacer-small"></div>

                  <div className="t03_max-width-large max-width-large t03_text-align-center text-align-center">
                    <h1 className="t03_heading-style-h3 heading-style-h3">
                      0G Storage: Built for the AI Era
                    </h1>
                  </div>

                  <div className="t03_spacer-small2 spacer-small"></div>

                  <div className="t03_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t03_link-icon-light1 link-icon-light t03_is-static is-static w-inline-block"
                    >
                      <div className="t03_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t03_link-icon-light2 link-icon-light t03_is-static2 is-static w-inline-block"
                    >
                      <div className="t03_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t03_link-icon-light3 link-icon-light t03_is-static3 is-static w-inline-block"
                    >
                      <div className="t03_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t03_section_legal-content section_legal-content">
            <div className="t03_padding-global2 padding-global">
              <div className="t03_padding-section-medium padding-section-medium">
                <div className="t03_container-small container-small">
                  <div className="t03_legal-content_outer">
                    <div className="t03_legal-content_component legal-content_component">
                      <div className="t03_blog-rich-text blog-rich-text w-richtext">
                        <p>AI is moving onchain, and that demands more than just compute.</p>
                        <p>
                          Whether you’re training models, running inference, or
                          coordinating agents, every intelligent system depends
                          on one thing: fast, reliable access to data.
                        </p>
                        <p>
                          But most decentralized storage protocols weren’t built
                          for that. Solutions like IPFS, Arweave, and Filecoin
                          focus on archiving static files, not powering real-time,
                          intelligent applications. They struggle with rapid
                          updates, structured querying, and composability, all
                          essential for AI.
                        </p>
                        <p>
                          0G Storage changes that. It’s a modular, AI-native
                          storage layer designed specifically for the demands of
                          modern onchain applications. Rather than simply
                          providing a place to store files, 0G Storage acts as a
                          memory layer for the next generation of software.
                        </p>
                        <h2>What Makes 0G Storage Unique</h2>
                        <p>
                          0G Storage is based around a layered architecture
                          purpose built for flexibility and performance. The
                          system is made up of two composable components:
                        </p>
                        <p>
                          The <strong>Log Layer</strong> handles large,
                          unstructured blobs—like model weights, datasets, event
                          logs, or raw sensor data. It works like an append-only
                          ledger: everything written is timestamped, ordered, and
                          permanently recorded. The data is split into chunks,
                          erasure coded, and distributed across the network for
                          redundancy and durability.
                        </p>
                        <p>
                          The <strong>Key-Value</strong> (KV) Layer sits on top of
                          the log layer, adding structure and mutability. It
                          enables you to store and query specific pieces of data
                          (such as vector embeddings, user states, or metadata)
                          with millisecond-level performance. Every update to the
                          KV store is logged immutably, while still allowing
                          developers to read and write structured state
                          efficiently.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t03_figure-inner1">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b1c2fa0f4ffeec06f364_AD_4nXf8p14Z-ujIpyHg2tiJdY6zjEX1ejJffhEbIfVwkxwWTWdIbSa6dtI_bgwTt6mMY3UgYvOzp6qTwpo_3qpifzrOrFqZdhGyLgbPgMI9jwN-_1Li24O8IRWp-41LCtrmJLFy89c.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          These layers can be used independently or together, and
                          they’re fully modular. You can integrate 0G Storage
                          into your existing app, use it with or without the 0G
                          chain, or plug it into a custom rollup or VM. It’s
                          designed to work across ecosystems, not just within
                          its own sandbox.
                        </p>
                        <p>
                          This flexibility opens up a range of real-world use
                          cases already in motion:
                        </p>
                        <ul role="list">
                          <li>AI agents retrieving memory and context on the fly</li>
                          <li>DePIN networks streaming real-time sensor data</li>
                          <li>LLM pipelines accessing decentralized training data</li>
                          <li>
                            Games and social apps persisting user and state data
                            trustlessly
                          </li>
                        </ul>
                        <p>
                          No matter what you’re building, 0G Storage makes it
                          easier to access and coordinate data across users,
                          chains, and intelligent agents. This modularity makes
                          0G Storage a universal building block, not just for
                          0G-native apps, but for any ecosystem that needs
                          performant, persistent, onchain data.
                        </p>
                        <h2>How 0G Storage Works</h2>
                        <p>
                          Underneath the hood, 0G Storage introduces several
                          innovations that make it fast, secure, and verifiable.
                        </p>
                        <p>
                          All stored data (be it a blob or a KV entry) is
                          cryptographically committed, allowing every operation
                          to be tracked, verified, and reproduced. This ensures
                          applications can confidently interact with the data
                          layer without relying on any centralized provider.
                        </p>
                        <p>
                          Data is encoded using erasure coding, allowing it to be
                          split across many nodes and reconstructed even if some
                          are offline. To keep nodes honest, the system uses
                          Proof of Replication and Availability (PoRA): storage
                          providers are randomly challenged to prove they still
                          hold specific pieces of data, and failure to respond
                          can lead to slashed rewards.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t03_figure-inner2">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b1c3fa0f4ffeec06f36c_AD_4nXcTdUCDIYkVaYZP_vyifl4wwCaM5vsHeiKyzHsQwhLeB3T2d9NzkCpj1wdc_5EWUpRpYpAD7Z6td3--Mv3gPrmiRVhtXo_xuEeBtBf_mswWsrb4iR0fkvISuGIeMUYCqNC3uKPU.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          This design ensures that data is not just stored, but
                          always available, provable, and composable into more
                          complex onchain systems. Together, these mechanisms
                          ensure 0G Storage is fast, secure, and provably
                          reliable, exactly what intelligent systems need to
                          operate autonomously.
                        </p>
                        <h2>Designed to Scale Sustainably</h2>
                        <p>
                          Storing and serving AI-scale data isn’t just a
                          technical challenge; it’s an economic one. 0G
                          introduces a three-part incentive structure that
                          balances affordability with long-term availability:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>One-Time Storage Fee</strong>: Users pay
                            based on the size of data stored.
                          </li>
                          <li>
                            <strong>Storage Endowment</strong>: A portion of
                            that fee is streamed over time to storage miners to
                            ensure continuing availability.
                          </li>
                          <li>
                            <strong>Data Sharing Royalties</strong>: Uniquely,
                            0G rewards nodes that share data with others by
                            tying royalties to the network’s PoRA mechanism.
                            I.e., when a node helps another retrieve and validate
                            data through a PoRA challenge, both can earn
                            additional rewards.
                          </li>
                        </ul>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t03_figure-inner3">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b1c3fa0f4ffeec06f369_AD_4nXdyGWyyO7yubGhiCjYyRawgvZHV1cKz0tDcwvJPq9ta6yVH-XtgRRrqeHN2W-kZebDsm-WCKoKIkeLCHGlobl4p57gYq76bUXEfQrItZmUrp8R1hIIBbJoV080jUrty4hdNS2my.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h2>Build on 0G</h2>
                        <p>
                          Nowadays, storage is no longer just a backend service
                          but a core pillar of intelligent infrastructure.
                        </p>
                        <p>
                          As onchain AI becomes more real, the need for fast,
                          composable, and verifiable storage will only grow. 0G
                          Storage is already powering next-generation apps across
                          various use cases, and it’s ready for anyone to build
                          upon.
                        </p>
                        <p>
                          Whether you're integrating AI agents, managing real-time
                          data, or scaling a new kind of decentralized
                          application, 0G Storage is the foundation you need.
                          Get started with the full{' '}
                          <a href="https://docs.0g.ai/concepts/storage">
                            0G Storage documentation
                          </a>{' '}
                          and start building today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t03_section_filter section_filter">
            <div className="t03_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t03_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              className="t03_cms-grid_list cms-grid_list w-dyn-items"
              role="list"
            >
              <div className="t03_cms-grid_item1 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t03_cms-grid_content-wrapper1 cms-grid_content-wrapper t03_is-blog2 is-blog w-inline-block"
                >
                  <div className="t03_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t03_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t03_spacer-medium spacer-medium t03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t03_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t03_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t03_related_category1">Tech</div>
                        <div className="t03_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t03_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t03_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t03_cms-grid_item2 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t03_cms-grid_content-wrapper2 cms-grid_content-wrapper t03_is-blog3 is-blog w-inline-block"
                >
                  <div className="t03_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t03_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t03_spacer-medium2 spacer-medium t03_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t03_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t03_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t03_related_category2">Tech</div>
                        <div className="t03_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t03_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t03_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t03_heading-style-h5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t03_cms-grid_item3 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t03_cms-grid_content-wrapper3 cms-grid_content-wrapper t03_is-blog4 is-blog w-inline-block"
                >
                  <div className="t03_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t03_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t03_spacer-medium3 spacer-medium t03_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t03_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t03_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t03_related_category3">Tech</div>
                        <div className="t03_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t03_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t03_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t03_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t03_cms-grid_item4 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-storage"
                  aria-current="page"
                  className="t03_cms-grid_content-wrapper4 cms-grid_content-wrapper t03_is-blog5 is-blog w-inline-block w--current"
                >
                  <div className="t03_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t03_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t03_spacer-medium4 spacer-medium t03_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t03_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t03_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t03_related_category4">Tech</div>
                        <div className="t03_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t03_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t03_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t03_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t03_copy-toast ${showToast ? 't03_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

