import React, { useState } from 'react'
import './Tech08.css'

export default function Tech08() {
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
      'Check out this insightful blog post: From Panels to Pizza: Inside 0G’s Momentum at Consensus Toronto'
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
    <div className="t08_container">
      <div className="t08_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t08_hide hide">
          <div className="t08_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t08_socialshare-title">
            From Panels to Pizza: Inside 0G’s Momentum at Consensus Toronto
          </div>
        </div>

        <main className="t08_main-wrapper main-wrapper">
          <section className="t08_section_hero section_hero t08_is-vertical is-vertical">
            <div className="t08_padding-global padding-global">
              <div className="t08_container-large container-large">
                <div className="t08_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t08_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t08_hero_bg-image2 hero_bg-image t08_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t08_hero_bg-gradient hero_bg-gradient t08_is-blog is-blog"></div>
                </div>

                <div className="t08_hero_content-component hero_content-component t08_is-vertical2 is-vertical">
                  <div className="t08_blog_meta-wrapper blog_meta-wrapper t08_is-white is-white">
                    <div className="t08_blog_meta-category">Tech</div>
                    <div className="t08_icon-embed-custom1 icon-embed-custom t08_w-embed w-embed">
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
                    <div className="t08_blog_meta-date">May 26, 2025</div>
                    <div className="t08_icon-embed-custom2 icon-embed-custom t08_w-embed2 w-embed">
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
                    <div className="t08_blog_meta-author">0g</div>
                  </div>

                  <div className="t08_spacer-small spacer-small"></div>

                  <div className="t08_max-width-large max-width-large t08_text-align-center text-align-center">
                    <h1 className="t08_heading-style-h3 heading-style-h3">
                      From Panels to Pizza: Inside 0G’s Momentum at Consensus
                      Toronto
                    </h1>
                  </div>

                  <div className="t08_spacer-small2 spacer-small"></div>

                  <div className="t08_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t08_link-icon-light1 link-icon-light t08_is-static is-static t08_w-inline-block w-inline-block"
                    >
                      <div className="t08_icon-embed-xsmall1 icon-embed-xsmall t08_w-embed3 w-embed">
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
                      className="t08_link-icon-light2 link-icon-light t08_is-static2 is-static t08_w-inline-block2 w-inline-block"
                    >
                      <div className="t08_icon-embed-xsmall2 icon-embed-xsmall t08_w-embed4 w-embed">
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
                      className="t08_link-icon-light3 link-icon-light t08_is-static3 is-static t08_w-inline-block3 w-inline-block"
                    >
                      <div className="t08_icon-embed-xsmall3 icon-embed-xsmall t08_w-embed5 w-embed">
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

          <section className="t08_section_legal-content section_legal-content">
            <div className="t08_padding-global2 padding-global">
              <div className="t08_padding-section-medium padding-section-medium">
                <div className="t08_container-small container-small">
                  <div className="t08_legal-content_outer">
                    <div className="t08_legal-content_component legal-content_component">
                      <div className="t08_blog-rich-text blog-rich-text t08_w-richtext w-richtext">
                        <p>
                          Consensus Toronto brought together the builders,
                          researchers, and operators shaping what’s next for AI,
                          crypto, and decentralized infrastructure. And with
                          barely a moment to unpack from{' '}
                          <a href="https://0g.ai/blog/token-2049-recap">
                            TOKEN2049 Dubai
                          </a>
                          , 0G was on the ground in Canada, pushing the
                          conversation forward.
                        </p>
                        <p>
                          From summit stages to university halls, our team led
                          conversations on agentic systems, modular compute, and
                          the open infrastructure needed to scale intelligence
                          in a trustless world.&nbsp;
                        </p>
                        <p>
                          With 0G mainnet on the horizon and ecosystem momentum
                          accelerating,{' '}
                          <a href="https://consensus2025.coindesk.com/">
                            Consensus Toronto
                          </a>{' '}
                          was a powerful moment to gather our community and
                          advance our vision for the Artificial Intelligence
                          Layer (AIL) of web3.
                        </p>
                        <h2>Leading the Conversation on AI and Infrastructure</h2>
                        <p>
                          Throughout the week, 0G team members took the stage at
                          conferences, summits, and curated forums to advance
                          the conversation around decentralized AI. But it
                          wasn’t just talk, it was a series of high-signal
                          engagements designed to challenge assumptions and
                          share insights.
                        </p>
                        <h3>Saturday, May 11</h3>
                        <p>
                          📍 0G popped up at the University of Toronto for Code,
                          Pizza &amp; the Future of Decentralized AI. This{' '}
                          <a href="https://lu.ma/2rcl6a30">
                            community-focused event
                          </a>{' '}
                          brought builders and believers together over bites and
                          ideas. In a fireside chat with{' '}
                          <a href="https://x.com/tesshau1">Tess Hau</a> (Tess
                          Ventures, Joinable AI), 0G CEO Michael Heinrich
                          unpacked some of the most important technical
                          questions of our time.
                        </p>
                        <figure className="t08_w-richtext-align-center1 w-richtext-align-center t08_w-richtext-figure-type-image1 w-richtext-figure-type-image">
                          <div className="t08_figure-inner1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff423c5_U9iwSsjhuOhoTp47n8xNky7SqU.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Together, they explored how 0G’s modular, verifiable
                          infrastructure supports not only the next generation
                          of AI tooling but a future where intelligence serves
                          humanity. The session ended with open Q&amp;A and
                          informal networking among a high-caliber group of
                          attendees, including AI researchers and
                          cryptographers with Master’s and PhDs.&nbsp;
                        </p>
                        <p>
                          Held in the province that birthed much of the original
                          Ethereum founding team, the event reflected Toronto’s
                          enduring role as a hub for technical innovation in
                          web3.
                        </p>
                        <h3>Monday, May 12</h3>
                        <p>
                          📍 At{' '}
                          <a href="https://lu.ma/web3tocon25">
                            Web3 Toronto Conference’s
                          </a>{' '}
                          Builders Week, a grassroots initiative dedicated to
                          growing the local ecosystem, Michael joined a panel
                          on AI and web3 alongside leaders from Mor20,
                          SapienAI, and Heisenberg Network. The conversation
                          dove into real use cases and explored how
                          decentralized infrastructure can empower AI
                          ecosystems to be more permissionless, composable, and
                          future-ready.
                        </p>
                        <p>
                          Later, Michael also appeared at a private investor
                          pitch day hosted by the Web3 Toronto organizers,
                          further deepening 0G’s connections across the
                          Canadian web3 landscape.
                        </p>
                        <figure className="t08_w-richtext-align-center2 w-richtext-align-center t08_w-richtext-figure-type-image2 w-richtext-figure-type-image">
                          <div className="t08_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff423d4_hWDaN8gLq4AMaLcvEXS4gO7A.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>Tuesday, May 13</h3>
                        <p>
                          📍 At Canada’s flagship web3 event,{' '}
                          <a href="https://www.futuristconference.com/">
                            Blockchain Futurist Conference
                          </a>
                          , Michael joined speakers from Celo, Copus AI, Secret
                          Network, and Ember AI on the panel “
                          <a href="https://www.futuristconference.com/schedule#:~:text=Privacy%202.0%20PANEL%3A%20Who%20Watches%20the%20Watcher%3A%20Understanding%20Privacy%20and%20Power%20in%20Artificial%20Intelligence">
                            Who Watches the Watcher?
                          </a>
                          ” The discussion focused on privacy in an AI-first
                          world and how decentralized infrastructure must
                          evolve to protect autonomy and transparency.
                        </p>
                        <figure className="t08_w-richtext-align-center3 w-richtext-align-center t08_w-richtext-figure-type-video1 w-richtext-figure-type-video">
                          <div className="t08_figure-inner3">
                            <iframe
                              src="https://www.youtube.com/embed/MwvW6P6E33U?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0&mute=1"
                              frameBorder="0"
                              title="Consensus Toronto panel video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </figure>
                        <p>
                          📍 Later that evening,{' '}
                          <a href="https://x.com/0G_labs/status/1925225154210410663">
                            0G hosted
                          </a>{' '}
                          a <a href="https://lu.ma/29c32p2o">dual-track forum</a>{' '}
                          focused on the decentralized AI economy. 0G’s Head of
                          BD, Jake Salerno, moderated a panel exploring
                          decentralized compute: from distributed GPU networks
                          to scalable, verifiable data layers. Michael joined a
                          follow-up session with ecosystem partners to unpack
                          how AI x blockchain integrations are unlocking new
                          frontiers in trustless intelligence.
                        </p>
                        <figure className="t08_w-richtext-align-center4 w-richtext-align-center t08_w-richtext-figure-type-image3 w-richtext-figure-type-image">
                          <div className="t08_figure-inner4">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff423d1_Kwx96z8ykUTL3RqZbvjDUtwj4.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Held during{' '}
                          <a href="https://www.canadacryptoweek.com/">
                            Canada Crypto Week
                          </a>
                          , this event brought the technical community together
                          to connect, build, and spark what’s next.
                        </p>
                        <h3>Thursday, May 15</h3>
                        <p>
                          📍 During <a href="https://lu.ma/yd5k0xhu">DeAI Day</a>,
                          an exclusive summit at The Rec Room brought together
                          thought leaders and developers working at the edge of
                          AI and crypto. In a panel on “Bringing AI Agents
                          On-Chain,” Michael joined builders from Kuvi.ai,
                          BitGPT, Contango, and 26CC to examine the foundations
                          of agent frameworks and onchain execution layers.&nbsp;
                        </p>
                        <figure className="t08_w-richtext-align-center5 w-richtext-align-center t08_w-richtext-figure-type-image4 w-richtext-figure-type-image">
                          <div className="t08_figure-inner5">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff423df_aKhzhRD7hlBsrn4UvUQuBGciE.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Immediately after, he delivered a keynote presenting
                          0G’s thesis: that decentralized AI needs more than
                          ideals: it needs infrastructure, and 0G is building
                          it.
                        </p>
                        <h3>Friday, May 16</h3>
                        <p>
                          📍 To close out the week, Michael delivered a{' '}
                          <a href="https://consensus2025.coindesk.com/agenda/event/-startup-spotlight-4-0gai-170">
                            Startup Spotlight keynote
                          </a>{' '}
                          on the Builders Stage at Consensus, playing to a
                          packed crowd eager to hear how 0G is powering the next
                          wave of decentralized AI.&nbsp;
                        </p>
                        <p>
                          Immediately after, he joined the AI Summit stage for{' '}
                          <a href="https://consensus2025.coindesk.com/agenda/event/-from-memecoin-mania-to-real-results-ai-agents-are-growing-up-74">
                            a panel
                          </a>{' '}
                          alongside leaders from Hedera, Secret Network, and
                          Gaia. Cutting through the noise of speculation cycles,
                          Michael spotlighted the real infrastructure required
                          to bring AI agents from hype to utility.
                        </p>
                        <figure className="t08_w-richtext-align-center6 w-richtext-align-center t08_w-richtext-figure-type-image5 w-richtext-figure-type-image">
                          <div className="t08_figure-inner6">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff423ec_UrgyiAXLrPEkERHmqT4ZtJaB74.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h2>Building Ecosystem Momentum in Canada</h2>
                        <p>
                          Throughout the week, the 0G team wasn’t just on stage;
                          we were in the crowd, on the ground, and in the
                          community. At every turn, Consensus Toronto reinforced
                          what we’ve long believed: decentralized AI is no
                          longer a theory, but a movement. And the world is
                          ready for an infrastructure layer that makes it real.
                        </p>
                        <p>
                          As{' '}
                          <a href="https://0g.ai/blog/road-to-mainnet-china">
                            mainnet approaches
                          </a>{' '}
                          and the AI x blockchain stack continues to evolve, 0G
                          is delivering the modular infrastructure needed to
                          power a new era of open, intelligent systems. We’re
                          not just building for today. We’re building the AIL{' '}
                          <a href="https://0g.ai/blog/how-ai-will-adapt-in-web3">
                            of tomorrow
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

          <section className="t08_section_filter section_filter">
            <div className="t08_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t08_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t08_cms-grid_list cms-grid_list t08_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t08_cms-grid_item1 cms-grid_item t08_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t08_cms-grid_content-wrapper1 cms-grid_content-wrapper t08_is-blog4 is-blog t08_w-inline-block4 w-inline-block"
                >
                  <div className="t08_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t08_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t08_spacer-medium1 spacer-medium t08_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t08_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t08_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t08_related_category1">Tech</div>
                        <div className="t08_icon-embed-custom3 icon-embed-custom t08_w-embed6 w-embed">
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
                        <div className="t08_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t08_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t08_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t08_cms-grid_item2 cms-grid_item t08_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t08_cms-grid_content-wrapper2 cms-grid_content-wrapper t08_is-blog5 is-blog t08_w-inline-block5 w-inline-block"
                >
                  <div className="t08_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t08_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t08_spacer-medium2 spacer-medium t08_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t08_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t08_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t08_related_category2">Tech</div>
                        <div className="t08_icon-embed-custom4 icon-embed-custom t08_w-embed7 w-embed">
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
                        <div className="t08_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t08_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t08_heading-style-h52 heading-style-h5">
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
                className="t08_cms-grid_item3 cms-grid_item t08_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t08_cms-grid_content-wrapper3 cms-grid_content-wrapper t08_is-blog6 is-blog t08_w-inline-block6 w-inline-block"
                >
                  <div className="t08_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t08_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t08_spacer-medium3 spacer-medium t08_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t08_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t08_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t08_related_category3">Tech</div>
                        <div className="t08_icon-embed-custom5 icon-embed-custom t08_w-embed8 w-embed">
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
                        <div className="t08_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t08_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t08_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t08_cms-grid_item4 cms-grid_item t08_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t08_cms-grid_content-wrapper4 cms-grid_content-wrapper t08_is-blog7 is-blog t08_w-inline-block7 w-inline-block"
                >
                  <div className="t08_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t08_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t08_spacer-medium4 spacer-medium t08_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t08_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t08_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t08_related_category4">Tech</div>
                        <div className="t08_icon-embed-custom6 icon-embed-custom t08_w-embed9 w-embed">
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
                        <div className="t08_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t08_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t08_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t08_copy-toast ${showToast ? 't08_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

