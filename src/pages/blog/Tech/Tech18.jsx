import React, { useEffect, useState } from 'react'
import './Tech18.css'

export default function Tech18() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t18-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t18-webflow', 'true')
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
      'Check out this insightful blog post: Road to Mainnet: Highlights from 0G’s China Roadshow'
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
    <div className="t18_container">
      <div className="t18_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t18_div002 hide">
          <div className="t18_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t18_div004">
            Road to Mainnet: Highlights from 0G’s China Roadshow
          </div>
        </div>

        <main className="t18_main-wrapper main-wrapper">
          <section className="t18_section_hero section_hero is-vertical">
            <div className="t18_div005 padding-global">
              <div className="t18_div006 container-large">
                <div className="t18_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t18_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t18_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t18_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t18_div010 hero_content-component is-vertical">
                  <div className="t18_div011 blog_meta-wrapper is-white">
                    <div className="t18_div012">Tech</div>
                    <div className="t18_div013 icon-embed-custom w-embed">
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
                    <div className="t18_div014">Apr 1, 2025</div>
                    <div className="t18_div015 icon-embed-custom w-embed">
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
                    <div className="t18_div016">0g</div>
                  </div>

                  <div className="t18_div017 spacer-small"></div>

                  <div className="t18_div018 max-width-large text-align-center">
                    <h1 className="t18_heading heading-style-h3">
                      Road to Mainnet: Highlights from 0G’s China Roadshow
                    </h1>
                  </div>

                  <div className="t18_div019 spacer-small"></div>

                  <div className="t18_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t18_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t18_div022 icon-embed-xsmall w-embed">
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
                      className="t18_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t18_div024 icon-embed-xsmall w-embed">
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
                      className="t18_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t18_div026 icon-embed-xsmall w-embed">
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

          <section className="t18_section_legal-content section_legal-content">
            <div className="t18_div027 padding-global">
              <div className="t18_div028 padding-section-medium">
                <div className="t18_div029 container-small">
                  <div className="t18_div030">
                    <div className="t18_div031 legal-content_component">
                      <div className="t18_div032 blog-rich-text w-richtext">
                        <p>
                          From February 13 to March 15, 0G hit the road with a mission
                          to mobilize developers, founders, users, and ecosystem
                          partners around the future of decentralized AI.
                        </p>
                        <p>
                          The 0G Road to Mainnet China Roadshow brought the 0G vision to
                          four of China’s most influential innovation hubs—Shanghai,
                          Shenzhen, Chengdu, and Hangzhou—drawing in over 800 attendees,
                          nearly 1,000 new community members, and a wave of excitement
                          for the next chapter of blockchain x AI.
                        </p>
                        <p>
                          What began as a community-building initiative quickly became
                          a powerful showcase for 0G’s high-performance AI-native Layer
                          1, built from the ground up for open innovation.
                        </p>
                        <h2>Highlights from the Tour</h2>
                        <p>📍 4 Stops: Shanghai, Shenzhen, Chengdu, Hangzhou</p>
                        <p>👥 1,801 Registrants, 886 Total Attendees</p>
                        <p>🐼 991 New Community Members</p>
                        <p>
                          Each stop combined expert panels, technical keynotes, and
                          builder-focused discussions designed to showcase the
                          infrastructure and ecosystem 0G is building.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t18_div033">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ecd9ea354b30800794_y1d2dRMpbOEYmPd1xe55LUWNrxA.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          From scalability to agent composability, 0G’s modular
                          architecture sparked meaningful conversations with attendees
                          on how AI can live natively onchain without workarounds.
                        </p>
                        <h2>Why This Roadshow Mattered</h2>
                        <p>
                          Throughout the roadshow, it became clear that decentralized
                          AI is being recognized globally for what it truly is: a
                          fundamental shift in how we compute and coordinate.
                        </p>
                        <p>
                          That shift in understanding demands a new kind of
                          infrastructure. 0G’s DeAIOS (Decentralized AI Operating
                          System) rises to meet that need by reimagining the full
                          stack—execution, storage, data availability, and agent
                          frameworks—all EVM-compatible and purpose-built for AI
                          workloads.
                        </p>
                        <p>
                          At each stop, we heard the same thing: Builders are hungry
                          for performant, composable infrastructure that goes beyond
                          speculative L1s. 0G isn’t retrofitting old ideas; we’re
                          introducing a new class of infrastructure, complete with
                          developer incentives, composable AI agents (iNFTs), and a
                          modular stack ready to scale.
                        </p>
                        <h2>City-by-City Momentum</h2>
                        <h4>Shanghai | Feb 13</h4>
                        <p>
                          The tour opened with strong energy, setting the stage for
                          DeAI in Asia’s financial capital. Attendees got a deep dive
                          into 0G’s roadmap and the first public breakdown of its iNFT
                          framework.
                        </p>
                        <h4>Shenzhen| Feb 15</h4>
                        <p>
                          Known for its tech-savvy crowd, Shenzhen brought 200+
                          attendees, many of them developers eager to explore how 0G
                          supports AI-native workflows.
                        </p>
                        <h4>Chengdu | March 8</h4>
                        <p>
                          Chengdu set the bar with over 630 registrants and the most
                          diverse attendee base, ranging from AI founders to web2
                          engineers exploring blockchain for the first time. The
                          modular design of 0G resonated especially well here.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t18_div034">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ecd9ea354b30800791_wm0Zn3JqMtXqa1npntfDOEsnaw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h4>Hangzhou | March 15</h4>
                        <p>
                          The final stop delivered the strongest ecosystem turnout,
                          with partners, builders, and researchers coming together to
                          connect around what’s next: 0G mainnet and the emerging AI
                          Agent economy.
                        </p>
                        <h2>Powered by a Robust Community</h2>
                        <p>
                          0G collaborated with <a href="https://tintinland.com/">TinTinLand</a> to
                          bring this tour to life. Their reach across China’s web3
                          builder scene helped amplify the tour’s message and ensured
                          the right developers showed up eager to learn and build.
                        </p>
                        <p>
                          Across all stops, we saw an attendee mix of 60% web3
                          developers, 25% web2 developers, and 15% university students.
                          Each city also received an overwhelming number of
                          registrations, with standing room only in some cases.
                        </p>
                        <p>
                          Notably, this diversity extended beyond backgrounds, spanning
                          generations, too. In Chengdu, one senior-aged community
                          member and node buyer drove over 1,000 kilometers from Xi’An
                          just to meet the team in person. His enthusiasm for
                          blockchain and AI left a lasting impression on the 0G team
                          and reminded us how far-reaching the DeAI movement already
                          is.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t18_div035">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ecd9ea354b3080078e_oXgpmJbH4XVyo0IVEoy7cb2idww.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Throughout the tour, we kept the momentum going through
                          AMAs, X Spaces, and WeChat activations. TinTinLand’s online
                          outreach generated over 12,000 views via{' '}
                          <a href="https://twitter.com/i/spaces/1kvJpbbQdVwKE">X Spaces</a> alone,
                          proving the global community is just as excited for what’s
                          coming next.
                        </p>
                        <h2>What’s Next: Countdown to Mainnet</h2>
                        <p>
                          The Road to Mainnet, although paved with IRL meetups, is a
                          movement to activate the next wave of builders who will help
                          define decentralized AI. Now, with the China leg of our tour
                          complete, we’re shifting focus to the most important
                          milestone at hand: 0G Mainnet.
                        </p>
                        <p>
                          Coming in <a href="https://0g.ai/blog/h12025-update">Q2 2025</a>, 0G’s
                          mainnet will unlock:
                        </p>
                        <ul role="list">
                          <li>Full iNFT transferability</li>
                          <li>Seamless agent deployment via AIverse</li>
                          <li>Next-gen performance upgrades for AI workloads</li>
                          <li>Modular execution, decentralized inference, and more</li>
                        </ul>
                        <p>
                          For those who joined us on the road? You’re already early.
                          The mainnet era is coming, and it’s going to change
                          everything.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t18_section_filter section_filter">
            <div className="t18_div036 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t18_w-dyn-list w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t18_div037 cms-grid_list w-dyn-items">
              <div role="listitem" className="t18_div038 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t18_div039 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t18_div040 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t18_div041 cms-grid_image"
                    />
                    <div className="t18_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t18_div043 blog_contnet-wrapper">
                      <div className="t18_div044 blog_meta-wrapper">
                        <div className="t18_div045">Tech</div>
                        <div className="t18_div046 icon-embed-custom w-embed">
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
                        <div className="t18_div047">Sep 5, 2024</div>
                      </div>
                      <div className="t18_div048 spacer-xmedium"></div>
                      <h3 className="t18_heading5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t18_div049 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/0g-hits-11k-tps-per-shard"
                  className="t18_div050 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t18_div051 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t18_div052 cms-grid_image"
                    />
                    <div className="t18_div053 spacer-medium hide-mobile-portrait"></div>
                    <div className="t18_div054 blog_contnet-wrapper">
                      <div className="t18_div055 blog_meta-wrapper">
                        <div className="t18_div056">Tech</div>
                        <div className="t18_div057 icon-embed-custom w-embed">
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
                        <div className="t18_div058">Aug 25, 2025</div>
                      </div>
                      <div className="t18_div059 spacer-xmedium"></div>
                      <h3 className="t18_heading5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t18_div060 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t18_div061 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t18_div062 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t18_div063 cms-grid_image"
                    />
                    <div className="t18_div064 spacer-medium hide-mobile-portrait"></div>
                    <div className="t18_div065 blog_contnet-wrapper">
                      <div className="t18_div066 blog_meta-wrapper">
                        <div className="t18_div067">Tech</div>
                        <div className="t18_div068 icon-embed-custom w-embed">
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
                        <div className="t18_div069">Aug 7, 2025</div>
                      </div>
                      <div className="t18_div070 spacer-xmedium"></div>
                      <h3 className="t18_heading5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t18_div071 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/0g-storage"
                  className="t18_div072 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t18_div073 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t18_div074 cms-grid_image"
                    />
                    <div className="t18_div075 spacer-medium hide-mobile-portrait"></div>
                    <div className="t18_div076 blog_contnet-wrapper">
                      <div className="t18_div077 blog_meta-wrapper">
                        <div className="t18_div078">Tech</div>
                        <div className="t18_div079 icon-embed-custom w-embed">
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
                        <div className="t18_div080">Jul 3, 2025</div>
                      </div>
                      <div className="t18_div081 spacer-xmedium"></div>
                      <h3 className="t18_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t18_copy-toast ${showToast ? 't18_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

