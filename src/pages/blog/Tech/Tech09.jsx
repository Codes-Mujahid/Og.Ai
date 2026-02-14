import React, { useEffect, useState } from 'react'
import './Tech09.css'

export default function Tech09() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t09-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t09-webflow', 'true')
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
      'Check out this insightful blog post: A Recap of 0G’s Massive Week at TOKEN2049 Dubai'
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
    <div className="t09_container">
      <div className="t09_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t09_hide hide">
          <div className="t09_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t09_socialshare-title">
            A Recap of 0G’s Massive Week at TOKEN2049 Dubai
          </div>
        </div>

        <main className="t09_main-wrapper main-wrapper">
          <section className="t09_section_hero section_hero t09_is-vertical is-vertical">
            <div className="t09_padding-global padding-global">
              <div className="t09_container-large container-large">
                <div className="t09_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t09_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t09_hero_bg-image2 hero_bg-image t09_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t09_hero_bg-gradient hero_bg-gradient t09_is-blog is-blog"></div>
                </div>

                <div className="t09_hero_content-component hero_content-component t09_is-vertical2 is-vertical">
                  <div className="t09_blog_meta-wrapper blog_meta-wrapper t09_is-white is-white">
                    <div className="t09_blog_meta-category">Tech</div>
                    <div className="t09_icon-embed-custom1 icon-embed-custom t09_w-embed w-embed">
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
                    <div className="t09_blog_meta-date">May 19, 2025</div>
                    <div className="t09_icon-embed-custom2 icon-embed-custom t09_w-embed2 w-embed">
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
                    <div className="t09_blog_meta-author">0g</div>
                  </div>

                  <div className="t09_spacer-small spacer-small"></div>

                  <div className="t09_max-width-large max-width-large t09_text-align-center text-align-center">
                    <h1 className="t09_heading-style-h3 heading-style-h3">
                      A Recap of 0G’s Massive Week at TOKEN2049 Dubai
                    </h1>
                  </div>

                  <div className="t09_spacer-small2 spacer-small"></div>

                  <div className="t09_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t09_link-icon-light1 link-icon-light t09_is-static is-static t09_w-inline-block w-inline-block"
                    >
                      <div className="t09_icon-embed-xsmall1 icon-embed-xsmall t09_w-embed3 w-embed">
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
                      className="t09_link-icon-light2 link-icon-light t09_is-static2 is-static t09_w-inline-block2 w-inline-block"
                    >
                      <div className="t09_icon-embed-xsmall2 icon-embed-xsmall t09_w-embed4 w-embed">
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
                      className="t09_link-icon-light3 link-icon-light t09_is-static3 is-static t09_w-inline-block3 w-inline-block"
                    >
                      <div className="t09_icon-embed-xsmall3 icon-embed-xsmall t09_w-embed5 w-embed">
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

          <section className="t09_section_legal-content section_legal-content">
            <div className="t09_padding-global2 padding-global">
              <div className="t09_padding-section-medium padding-section-medium">
                <div className="t09_container-small container-small">
                  <div className="t09_legal-content_outer">
                    <div className="t09_legal-content_component legal-content_component">
                      <div className="t09_blog-rich-text blog-rich-text t09_w-richtext w-richtext">
                        <p>
                          TOKEN2049 Dubai was one of the year’s largest
                          gatherings for the crypto ecosystem, drawing over
                          15,000 builders, investors, and researchers to discuss
                          what’s next for the industry. 0G had a strong presence
                          throughout the week, participating in panels, side
                          events, and small-group conversations that touched
                          every layer of decentralized infrastructure.
                        </p>
                        <p>
                          But the focus wasn’t just visibility. It was about
                          substance—laying the groundwork for a future where
                          compute, memory, and data are modular, permissionless,
                          and built for the demands of intelligent systems.
                        </p>
                        <h2>Leading the Conversation Across AI and DePIN</h2>
                        <p>
                          Throughout the week, 0G team members took the stage at
                          more than a dozen major events to speak on the
                          convergence of AI and blockchain, the future of DePIN
                          networks, and the role of infrastructure in scaling
                          intelligence.
                        </p>
                        <h3>Monday, April 28</h3>
                        <p>
                          📍 0G’s Co-Founder &amp; CEO Michael kicked off the
                          week at <a href="https://lu.ma/0dsifzww">GrowthRadar</a>
                          , a high-signal event with 1,000+ registrations and a
                          tightly curated crowd of 150. In a panel on node
                          sales, he broke down how 0G is rethinking early{' '}
                          <a href="https://0g.ai/blog/0g-node-sale-results">
                            network incentives
                          </a>{' '}
                          and infrastructure alignment.
                        </p>
                        <figure className="t09_w-richtext-align-center1 w-richtext-align-center t09_w-richtext-figure-type-image1 w-richtext-figure-type-image">
                          <div className="t09_figure-inner1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b990ad3c8b73a60063d_VO4u1OsHQbb0cznn0YpH2cGixUw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          📍 Later that day, Elisha Owusu Akyaw, 0G’s Social
                          Media and Growth Lead, stepped up for 0G at{' '}
                          <a href="https://lu.ma/ScalingDemoDay2025">
                            Scaling Demoday
                          </a>
                          , joining as a judge to evaluate some of the
                          ecosystem’s most promising AI x crypto projects. With
                          700+ registrations, the event showcased top teams
                          building scalable AI systems.
                        </p>
                        <p>
                          📍 Michael then took the stage at Lagrange’s{' '}
                          <a href="https://lu.ma/2qhbj7fn">House of ZK</a>, a
                          summit exploring the convergence of ZK and AI. In one
                          of the event’s most future-facing panels, he joined
                          leaders from GAIB, LazAI, and OpenLedger to debate a
                          defining question for the next era of infrastructure:
                          Who owns the intelligence layer?
                        </p>
                        <h3>Tuesday, April 29</h3>
                        <p>
                          📍 Michael returned for{' '}
                          <a href="https://lu.ma/deAI_Day_Dubai">deAI Day</a>, a
                          high-signal summit with 3,500+ registrations and
                          nearly 1,000 onsite attendees. He joined leaders from
                          GEODNET, iExec, and Solana to discuss how economic
                          DePINs can power scalable, modular AI.
                        </p>
                        <figure className="t09_w-richtext-align-center2 w-richtext-align-center t09_w-richtext-figure-type-image2 w-richtext-figure-type-image">
                          <div className="t09_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9b0ad3c8b73a6006ae_ARvZhPSwmQY5H4kmTJqS6i3Hc8.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          📍 That afternoon, at{' '}
                          <a href="https://lu.ma/UnchainedSummitDubai">
                            Unchained Summit
                          </a>
                          , Michael spoke alongside Lumino AI and MantleX on the
                          convergence of agents, AI, and web3, highlighting how
                          modular infrastructure can unlock real-world
                          autonomy.
                        </p>
                        <p>
                          📍 0G Co-Founder &amp; CTO Ming made his TOKEN2049
                          debut at{' '}
                          <a href="https://lu.ma/fz7ndzlm">AI Block Summit</a>, a
                          1,500-registrant event focused on agentic economies
                          and decentralized compute. He spoke on the momentum
                          behind AI accelerationism and why DeAI is quickly
                          moving from theory to implementation.
                        </p>
                        <p>
                          📍 Later that day, at{' '}
                          <a href="https://lu.ma/bohfjhoi">Meta Crypto Oasis</a>,
                          Ming joined speakers including TRON’s founder{' '}
                          <a href="https://x.com/justinsuntron">Justin Sun</a>{' '}
                          and Click Labs’s pseudonymous founder{' '}
                          <a href="https://x.com/Jellyweb3">Jelly</a>, and others
                          to explore how algorithmic autonomy could reshape
                          governance across the web3 stack.
                        </p>
                        <h3>Wednesday, April 30</h3>
                        <p>
                          📍 At <a href="https://lu.ma/agentsday-dubai">Agents Day</a>
                          , Ming joined speakers from Filecoin, Subsquid, and
                          METIS to explore how quality data drives smarter
                          decentralized agents. With over 3,000 registrants and
                          300+ speakers, the event highlighted why modular
                          inputs are essential for secure, scalable agentic
                          systems.
                        </p>
                        <p>
                          📍 That evening, Michael spoke at{' '}
                          <a href="https://lu.ma/djmxgv9m">12 Years, One Gate, One World</a>
                          , Gate.io’s rooftop summit with nearly 3,000
                          registrants. In a panel on hype vs. utility, he argued
                          that modular infrastructure is the missing link
                          between web3 vision and real-world adoption.
                        </p>
                        <figure className="t09_w-richtext-align-center3 w-richtext-align-center t09_w-richtext-figure-type-image3 w-richtext-figure-type-image">
                          <div className="t09_figure-inner3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b990ad3c8b73a60064a_gsdMEdZ73F8LVHNRtytDENoBgcE.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>Thursday, May 1</h3>
                        <p>
                          📍 At <a href="https://lu.ma/depin-dubai">DePIN Day</a>,
                          which drew over 2,000 registrants, JC joined speakers
                          from io.net, Fluence, and Avail to explore whether
                          decentralized infrastructure can make AI more scalable
                          and secure. The panel spotlighted DePIN as a critical
                          layer for trustless, high-performance AI.
                        </p>
                        <p>
                          📍 Later that evening, 0G’s Strategic Partnerships Lead
                          George spoke at <a href="https://lu.ma/udujqd30">X1 EcoDay</a>
                          , a curated gathering of DePIN and DeAI leaders focused
                          on building the infrastructure layer of Web4. He joined
                          a panel on how decentralized systems are reshaping the
                          internet’s next phase—from compute to coordination.
                        </p>
                        <figure className="t09_w-richtext-align-center4 w-richtext-align-center t09_w-richtext-figure-type-image4 w-richtext-figure-type-image">
                          <div className="t09_figure-inner4">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b990ad3c8b73a60064e_BbPkwVq2x0X60onMEeVZjAhy2hU.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>Friday, May 2</h3>
                        <p>
                          📍 Ming kicked off the day at{' '}
                          <a href="https://lu.ma/39m8o07l">AI Panels + Brunch</a>,
                          joining a morning discussion on decentralized AI. Over
                          coffee and conversation, he outlined how modular
                          infrastructure can accelerate the development of open,
                          intelligent systems.
                        </p>
                        <figure className="t09_w-richtext-align-center5 w-richtext-align-center t09_w-richtext-figure-type-image5 w-richtext-figure-type-image">
                          <div className="t09_figure-inner5">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9c0ad3c8b73a6007b6_SMHqniIgtU9kV7ZDEl1l5ygKzg.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          📍 Later, at the{' '}
                          <a href="https://lu.ma/hack_dubai">Hack Seasons Conference</a>{' '}
                          hosted at Dubai’s iconic Museum of the Future, Michael
                          joined leaders from Fluence, Aethir, and Addressable to
                          explore how blockchain projects can stay competitive in
                          the AI arms race, emphasizing the role of scalable,
                          trustless compute.
                        </p>
                        <p>
                          These engagements weren’t just check-the-box
                          appearances. They underscored 0G’s technical
                          credibility and growing role as a platform at the
                          intersection of AI, compute, and web3.
                        </p>
                        <h2>Hosting the Builders of the Future</h2>
                        <p>
                          While panels and speaking engagements provided the
                          spotlight, 0G also created space for real connection
                          and collaboration through a series of curated side
                          events.
                        </p>
                        <p>
                          📍 On Tuesday night, 0G hosted an intimate{' '}
                          <a href="https://lu.ma/iyt5saj2">VIP KOL Dinner</a>,
                          bringing together a curated group of thought leaders,
                          creators, and collaborators for an evening of fine
                          dining and off-the-record conversations. The gathering
                          offered space to connect deeply with the 0G leadership
                          and share ideas shaping the future of decentralized AI.
                        </p>
                        <p>
                          📍 Throughout Wednesday, the 0G team hosted a variety
                          of interviews. Numerous members from the core 0G team
                          sat down to share insights on 0G’s mission, modular
                          infrastructure, and the momentum building around
                          decentralized AI, capturing content that will fuel
                          community storytelling in the weeks ahead.
                        </p>
                        <p>
                          📍 Midday on Wednesday, 0G hosted an exclusive{' '}
                          <a href="https://lu.ma/qd92rta2">VIP Investors Lunch</a>
                          , bringing together a select group of strategic
                          partners and backers. Over a private meal, the
                          conversation centered on 0G’s vision for decentralized
                          AI infrastructure and the opportunities ahead as
                          mainnet approaches.
                        </p>
                        <p>
                          📍 On Thursday afternoon, 0G opened doors for an
                          invite-only <a href="https://lu.ma/xnu2levf">networking event</a>
                          . Set against a coastal backdrop, the gathering brought
                          together friends, founders, and ecosystem partners for
                          relaxed conversations, meaningful connections, and a
                          shared vision for the future of decentralized AI.
                        </p>
                        <p>
                          📍 0G closed the week with{' '}
                          <a href="https://lu.ma/6hxkb8ow">Connections</a>, a
                          co-hosted private investor dinner with Rock34X and the
                          Middle East Stablecoin Association. Designed for
                          builders and backers in stablecoins, DeAI, and
                          programmable liquidity, the event brought together 50
                          handpicked guests for thoughtful conversations on
                          autonomous finance.
                        </p>
                        <p>
                          These events created the connective tissue behind the
                          headlines—a place where long-term relationships were
                          formed and the modular ecosystem took shape in real
                          time.
                        </p>
                        <h2>Why TOKEN2049 Mattered</h2>
                        <p>
                          0G’s presence in Dubai wasn’t about vanity metrics,
                          but about velocity. With mainnet{' '}
                          <a href="https://0g.ai/blog/road-to-mainnet-china">
                            on the horizon
                          </a>
                          , ecosystem growth accelerating, and demand for
                          modular infrastructure rising across AI and DePIN, 0G
                          is advancing its role as the Artificial Intelligence
                          Layer (AIL) for web3.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t09_section_filter section_filter">
            <div className="t09_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t09_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t09_cms-grid_list cms-grid_list t09_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t09_cms-grid_item1 cms-grid_item t09_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t09_cms-grid_content-wrapper1 cms-grid_content-wrapper t09_is-blog4 is-blog t09_w-inline-block4 w-inline-block"
                >
                  <div className="t09_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t09_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t09_spacer-medium1 spacer-medium t09_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t09_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t09_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t09_related_category1">Tech</div>
                        <div className="t09_icon-embed-custom3 icon-embed-custom t09_w-embed6 w-embed">
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
                        <div className="t09_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t09_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t09_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t09_cms-grid_item2 cms-grid_item t09_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t09_cms-grid_content-wrapper2 cms-grid_content-wrapper t09_is-blog5 is-blog t09_w-inline-block5 w-inline-block"
                >
                  <div className="t09_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t09_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t09_spacer-medium2 spacer-medium t09_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t09_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t09_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t09_related_category2">Tech</div>
                        <div className="t09_icon-embed-custom4 icon-embed-custom t09_w-embed7 w-embed">
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
                        <div className="t09_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t09_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t09_heading-style-h52 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t09_cms-grid_item3 cms-grid_item t09_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t09_cms-grid_content-wrapper3 cms-grid_content-wrapper t09_is-blog6 is-blog t09_w-inline-block6 w-inline-block"
                >
                  <div className="t09_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t09_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t09_spacer-medium3 spacer-medium t09_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t09_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t09_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t09_related_category3">Tech</div>
                        <div className="t09_icon-embed-custom5 icon-embed-custom t09_w-embed8 w-embed">
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
                        <div className="t09_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t09_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t09_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t09_cms-grid_item4 cms-grid_item t09_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t09_cms-grid_content-wrapper4 cms-grid_content-wrapper t09_is-blog7 is-blog t09_w-inline-block7 w-inline-block"
                >
                  <div className="t09_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t09_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t09_spacer-medium4 spacer-medium t09_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t09_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t09_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t09_related_category4">Tech</div>
                        <div className="t09_icon-embed-custom6 icon-embed-custom t09_w-embed9 w-embed">
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
                        <div className="t09_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t09_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t09_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t09_copy-toast ${showToast ? 't09_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
