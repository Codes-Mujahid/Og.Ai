import React, { useEffect, useState } from 'react'
import './Tech20.css'

export default function Tech20() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t20-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t20-webflow', 'true')
    document.head.appendChild(link)

    return () => {
      link.remove()
    }
  }, [])

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
      'Check out this insightful blog post: StorageScan Update: Performance Tracking, Miner Rewards, and Leaderboard Are Live'
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
    <div className="t20_container">
      <div className="t20_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t20_div002 hide">
          <div className="t20_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t20_div004">
            StorageScan Update: Performance Tracking, Miner Rewards, and Leaderboard
            Are Live
          </div>
        </div>

        <main className="t20_main-wrapper main-wrapper">
          <section className="t20_section_hero section_hero is-vertical">
            <div className="t20_div005 padding-global">
              <div className="t20_div006 container-large">
                <div className="t20_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t20_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t20_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t20_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t20_div010 hero_content-component is-vertical">
                  <div className="t20_div011 blog_meta-wrapper is-white">
                    <div className="t20_div012">Tech</div>
                    <div className="t20_div013 icon-embed-custom w-embed">
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
                    <div className="t20_div014">Mar 26, 2025</div>
                    <div className="t20_div015 icon-embed-custom w-embed">
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
                    <div className="t20_div016">0g</div>
                  </div>

                  <div className="t20_div017 spacer-small"></div>

                  <div className="t20_div018 max-width-large text-align-center">
                    <h1 className="t20_heading heading-style-h3">
                      StorageScan Update: Performance Tracking, Miner Rewards, and
                      Leaderboard Are Live
                    </h1>
                  </div>

                  <div className="t20_div019 spacer-small"></div>

                  <div className="t20_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t20_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t20_div022 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      className="t20_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t20_div024 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('x', e)}
                      className="t20_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t20_div026 icon-embed-xsmall w-embed">
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

          <section className="t20_div027 section_legal-content">
            <div className="t20_div028 padding-global">
              <div className="t20_div029 padding-section-medium">
                <div className="t20_div030 container-small">
                  <div className="t20_div031">
                    <div className="t20_div032 legal-content_component">
                      <div className="t20_div033 blog-rich-text w-richtext">
                        <p>
                          As we accelerate toward mainnet, 0G’s decentralized
                          storage network is becoming one of the most active test
                          environments in web3. With millions of files uploaded and
                          terabytes of data moving across the network, many 0G
                          storage miners have been asking for more visibility into
                          how the system is performing and how rewards are
                          calculated.
                        </p>
                        <p>
                          We heard you—and we’re happy to announce that{' '}
                          <a href="https://scan-devnet.0g.ai/">
                            StorageScan’s newly updated interface
                          </a>{' '}
                          is live! This update includes an array of intuitive
                          real-time analytics, including miner leaderboards and
                          transparent reward tracking for all Turbo and Standard
                          storage nodes.&nbsp;
                        </p>
                        <p>Here’s the full rundown on what this update entails.</p>
                        <h2>What’s New on StorageScan?</h2>
                        <p>
                          0G’s latest update gives you everything you need to make
                          smarter decisions and track your earnings in real-time,
                          whether you’re a new user deciding whether to run a node
                          or an active miner uploading AI datasets on 0G.
                        </p>
                        <h2>
                          <strong>All-in-One Analytics Dashboard</strong>
                        </h2>
                        <p>
                          <a href="https://scan-devnet.0g.ai/">
                            StorageScan’s new homepage
                          </a>{' '}
                          dashboard now provides a visual snapshot of the network,
                          including:
                        </p>
                        <ul role="list">
                          <li>Total Active Miners</li>
                          <li>24hr Average Mining Rewards</li>
                          <li>Total Storage Size</li>
                          <li>Files Uploaded</li>
                          <li>Gas Usage and Fees</li>
                        </ul>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="t20_div034 w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t20_div035">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee9a298d11ceacea41_tr7zoPImxY7jofR2fccziOTc.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Miner Rewards Tracking Over Time</strong>
                        </h3>
                        <p>
                          StorageScan now shows mining rewards at a glance, with
                          toggles for 24-hour, 3-day, and 7-day earnings. This
                          makes it much easier for you to track your earnings over
                          time and optimize your node performance.
                        </p>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="t20_div036 w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t20_div037">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee9a298d11ceacea44_C9X2ApWhzanlqCoKNwqmdt02pk.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Top Miners Leaderboard</strong>
                        </h3>
                        <p>
                          0G users now have full visibility into all StorageScan
                          miners’ performance and rewards. This includes a Top
                          Miners leaderboard where you can see how your address
                          ranks in real time. Insights include total rewards, win
                          count, and rewards over time, which helps benchmark your
                          node against the current top performers.
                        </p>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="t20_div038 w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t20_div039">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee9a298d11ceacea4f_lAOUi3ccet9Doy4bba1ZLkUClvE.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Clearer Insights for Turbo and Standard Nodes</strong>
                        </h3>
                        <p>
                          StorageScan splits analytics across Turbo and Standard
                          networks, ensuring targeted insights and breakdowns on
                          how rewards differ based on performance and demand. These
                          two networks cater to different storage needs, ensuring
                          tailored coverage for any use case:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Standard Network (HDD)</strong>: More
                            cost-efficient but slower, for less time-sensitive data
                          </li>
                          <li>
                            <strong>Turbo Network (SSD)</strong>: Faster
                            performance at a premium, for time-sensitive tasks
                          </li>
                        </ul>
                        <p>
                          Both networks are essential to 0G’s performance and
                          growth, and our new StorageScan interface enables more
                          granular planning for users who are considering scaling
                          their contributions across different tiers.
                        </p>
                        <h2>Get Started with StorageScan</h2>
                        <p>
                          0G’s storage network is foundational to the decentralized
                          AI ecosystem we’re building. Large-scale AI inference,
                          model training, and on-chain data indexing all depend on
                          storage that’s fast, verifiable, and decentralized. But
                          to truly decentralize AI storage, we also need to make it
                          transparent and rewarding for those contributing
                          resources. That’s exactly what StorageScan now delivers.
                        </p>
                        <p>
                          With 0G rapidly approaching mainnet launch, this
                          StorageScan upgrade reflects our commitment to
                          transparency, usability, and community-driven
                          development. By offering clearer insights into miner
                          rewards and network operations, we’re making it easier
                          for new and existing users to take full advantage of
                          everything 0G has to offer.&nbsp;
                        </p>
                        <p>
                          We appreciate all the community feedback that helped
                          shape this update, and we’ll continue refining
                          StorageScan to ensure all contributors are empowered,
                          informed, and rewarded.
                        </p>
                        <p>
                          And if you’re not running a node on StorageScan yet,
                          getting started has never been easier:
                        </p>
                        <ul role="list">
                          <li>
                            Get testnet tokens from the{' '}
                            <a href="https://faucet.0g.ai/">0G Faucet</a>
                          </li>
                          <li>
                            Explore the{' '}
                            <a href="https://github.com/0glabs/0g-storage-go-starter-kit">
                              Storage Starter Kit&nbsp;
                            </a>
                          </li>
                          <li>
                            Follow the{' '}
                            <a href="https://docs.0g.ai/run-a-node/storage-node">
                              Storage Node Setup Guide
                            </a>
                          </li>
                          <li>
                            Visit{' '}
                            <a
                              href="https://scan-devnet.0g.ai/?network=turbo"
                              target="_blank"
                              rel="noreferrer"
                            >
                              StorageScan
                            </a>{' '}
                            to monitor your rewards in real time
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t20_div040 section_filter">
            <div className="t20_div041 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t20_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t20_div042 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t20_div043 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t20_div044 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t20_div045 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t20_div046 cms-grid_image"
                    />
                    <div className="t20_div047 spacer-medium hide-mobile-portrait"></div>
                    <div className="t20_div048 blog_contnet-wrapper">
                      <div className="t20_div049 blog_meta-wrapper">
                        <div fs-list-field="category" className="t20_div050">
                          Tech
                        </div>
                        <div className="t20_div051 icon-embed-custom w-embed">
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
                        <div className="t20_div052">Sep 5, 2024</div>
                      </div>
                      <div className="t20_div053 spacer-xmedium"></div>
                      <h3 className="t20_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t20_div054 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t20_div055 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t20_div056 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t20_div057 cms-grid_image"
                    />
                    <div className="t20_div058 spacer-medium hide-mobile-portrait"></div>
                    <div className="t20_div059 blog_contnet-wrapper">
                      <div className="t20_div060 blog_meta-wrapper">
                        <div fs-list-field="category" className="t20_div061">
                          Tech
                        </div>
                        <div className="t20_div062 icon-embed-custom w-embed">
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
                        <div className="t20_div063">Aug 25, 2025</div>
                      </div>
                      <div className="t20_div064 spacer-xmedium"></div>
                      <h3 className="t20_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t20_div065 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t20_div066 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t20_div067 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t20_div068 cms-grid_image"
                    />
                    <div className="t20_div069 spacer-medium hide-mobile-portrait"></div>
                    <div className="t20_div070 blog_contnet-wrapper">
                      <div className="t20_div071 blog_meta-wrapper">
                        <div fs-list-field="category" className="t20_div072">
                          Tech
                        </div>
                        <div className="t20_div073 icon-embed-custom w-embed">
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
                        <div className="t20_div074">Aug 7, 2025</div>
                      </div>
                      <div className="t20_div075 spacer-xmedium"></div>
                      <h3 className="t20_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t20_div076 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t20_div077 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t20_div078 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t20_div079 cms-grid_image"
                    />
                    <div className="t20_div080 spacer-medium hide-mobile-portrait"></div>
                    <div className="t20_div081 blog_contnet-wrapper">
                      <div className="t20_div082 blog_meta-wrapper">
                        <div fs-list-field="category" className="t20_div083">
                          Tech
                        </div>
                        <div className="t20_div084 icon-embed-custom w-embed">
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
                        <div className="t20_div085">Jul 3, 2025</div>
                      </div>
                      <div className="t20_div086 spacer-xmedium"></div>
                      <h3 className="t20_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div
          className={`t20_div087 t20_copy-toast ${showToast ? 't20_show' : ''}`}
        >
          Link copied!
        </div>
      </div>
    </div>
  )
}

