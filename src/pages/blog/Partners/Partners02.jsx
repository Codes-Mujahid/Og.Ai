import React, { useState } from 'react'

export default function Partners02() {
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
      'Where Onchain AI is Headed: Early Signals from the 0G Global Accelerator'
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
    <div className="p02_container">
      <style>{`
        .p02_copy-toast {
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

        .p02_copy-toast.p02_show {
          opacity: 1;
        }

        .p02_section_hero {
          position: relative;
          overflow: hidden;
        }

        .p02_hero_bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .p02_container .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .p02_container .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .p02_container .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div className="p02_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="p02_hide hide">
          <div className="p02_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="p02_socialshare-title">
            Where Onchain AI is Headed: Early Signals from the 0G Global
            Accelerator
          </div>
        </div>

        <main className="p02_main-wrapper main-wrapper">
          <section className="p02_section_hero section_hero p02_is-vertical is-vertical">
            <div className="p02_padding-global padding-global">
              <div className="p02_container-large container-large">
                <div className="p02_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="p02_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="p02_hero_bg-image p02_w-dyn-bind-empty hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="p02_hero_bg-gradient hero_bg-gradient p02_is-blog is-blog"></div>
                </div>

                <div className="p02_hero_content-component hero_content-component p02_is-vertical is-vertical">
                  <div className="p02_blog_meta-wrapper blog_meta-wrapper p02_is-white is-white">
                    <div className="p02_blog_meta-category">Partners</div>
                    <div className="p02_icon-embed-custom icon-embed-custom p02_w-embed w-embed">
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
                    <div className="p02_blog_meta-date">Aug 14, 2025</div>
                    <div className="p02_icon-embed-custom-2 icon-embed-custom p02_w-embed-2 w-embed">
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
                    <div className="p02_w-dyn-bind-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="p02_spacer-small spacer-small"></div>

                  <div className="p02_max-width-large max-width-large p02_text-align-center text-align-center">
                    <h1 className="p02_heading-style-h3 heading-style-h3">
                      Where Onchain AI is Headed: Early Signals from the 0G
                      Global Accelerator
                    </h1>
                  </div>

                  <div className="p02_spacer-small-2 spacer-small"></div>

                  <div className="p02_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="p02_link-icon-light link-icon-light p02_is-static is-static p02_w-inline-block w-inline-block"
                    >
                      <div className="p02_icon-embed-xsmall icon-embed-xsmall p02_w-embed-3 w-embed">
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
                      className="p02_link-icon-light link-icon-light p02_is-static is-static p02_w-inline-block-2 w-inline-block"
                    >
                      <div className="p02_icon-embed-xsmall-2 icon-embed-xsmall p02_w-embed-4 w-embed">
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
                      className="p02_link-icon-light link-icon-light p02_is-static is-static p02_w-inline-block-3 w-inline-block"
                    >
                      <div className="p02_icon-embed-xsmall-3 icon-embed-xsmall p02_w-embed-5 w-embed">
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

          <section className="p02_section_legal-content section_legal-content">
            <div className="p02_padding-global-2 padding-global">
              <div className="p02_padding-section-medium padding-section-medium">
                <div className="p02_container-small container-small">
                  <div className="p02_legal-content_outer">
                    <div className="p02_legal-content_component legal-content_component">
                      <div className="p02_blog-rich-text blog-rich-text p02_w-richtext w-richtext">
                        <p>
                          Since launching the
                          <a href="https://0g.ai/blog/0g-global-accelerator">
                            {' '}
                            0G Global Accelerator
                          </a>{' '}
                          alongside Web3Labs, we’ve been blown away by the
                          interest from builders worldwide. In just a few weeks,
                          we’ve interviewed dozens of early-stage projects
                          spanning nearly every continent — all eager to scale
                          the next generation of decentralized AI applications
                          on 0G.
                        </p>
                        <p>
                          <strong>
                            The top ten Global Accelerator applicants will
                            introduce their projects and vision at a live
                            DEMODAY in Hong Kong on Friday, August 29
                            (13:30-17:00 GMT+8).&nbsp;
                          </strong>
                        </p>
                        <p>
                          DEMODAY will be judged by representatives from top VC
                          firms, representatives from major exchanges, and other
                          industry experts, and you can also register to attend{' '}
                          <a href="https://lu.ma/fz1hcc7y">here</a> (subject to
                          0G approval). We will also be livestreaming the event,
                          so if you’re interested in attending remotely stay
                          tuned for more details!
                        </p>
                        <p>
                          And while the first cohort of the 0G Global
                          Accelerator is still being finalized, the early
                          signals are clear: the most ambitious builders are
                          looking to integrate multiple layers of 0G’s tech
                          stack as they reimagine what decentralized
                          intelligence can do. These projects are diverse in
                          scope, but several key sectors are already emerging as
                          hotspots of activity.
                        </p>
                        <h2>AI-Powered Prediction Markets&nbsp;</h2>
                        <p>
                          Prediction markets have long pushed the limits of
                          decentralized systems. But today’s most popular
                          options, like Polymarket and Kalshi, rely on{' '}
                          <a href="https://thedefiant.io/news/defi/polymarket-s-usd7m-ukraine-mineral-deal-debacle-traced-to-oracle-whale">
                            questionable resolution mechanisms
                          </a>{' '}
                          and manually created markets, which are slow, costly,
                          and unscaleable. Clearly, the opportunity for more
                          reliable, trustless prediction markets is growing.
                        </p>
                        <p>
                          0G’s accelerator applicants are thinking bigger. With
                          AI-native infrastructure like 0G, multiple teams are
                          exploring new frontiers for prediction markets, from
                          self-improving oracle networks to multi-model
                          resolution mechanisms that go far beyond simple yes/no
                          outcomes. For instance, one applicant is developing a
                          new model to link belief with price, complete with
                          AI-driven market creation and outcome verification so
                          anyone can launch and trade a market in seconds.&nbsp;
                        </p>
                        <h2>AI-Native Trading Platforms</h2>
                        <p>
                          DeFi continues to be a priority sector for AI
                          innovation, and multiple applicants are interested in
                          building trading tools that wouldn’t be possible
                          without decentralized AI infrastructure. From
                          autonomous strategy execution to decentralized quant
                          research networks, these teams are eager to architect
                          next-gen trading infrastructure that is built to
                          support agent-native, always-on execution
                          environments, rather than retrofitting AI onto
                          existing platforms.
                        </p>
                        <p>
                          One standout project is using a Model Context Protocol
                          (MCP) to dynamically integrate data streams across
                          markets. Instead of fixed strategies, their system
                          would continuously adapt to changing market
                          conditions, such as new liquidity sources or social
                          sentiment shifts, to enable more responsive,
                          intelligent trading automations.&nbsp;
                        </p>
                        <h2>Tokenized AI Agents / Intelligent NFTs</h2>
                        <p>
                          Earlier this year, we announced the upcoming arrival
                          of{' '}
                          <a href="https://0g.ai/blog/0g-introducing-erc-7857">
                            ERC-7857
                          </a>
                          , 0G’s proprietary iNFT standard. Designed to enable
                          the creation, ownership, training, and monetization of
                          onchain AI agents, iNFTs represent a major leap
                          forward for programmable, composable intelligence
                          onchain.&nbsp;
                        </p>
                        <p>
                          Now, multiple projects are clamoring to bring these
                          concepts to live. From consumer-facing agent
                          marketplaces to services powered entirely by tradeable
                          iNFTs, these projects are redefining what NFTs can do.
                          And unlike earlier NFT projects focused on speculation
                          and static collectibles, these teams are exploring
                          entirely new forms of value creation via tokenized
                          intelligence.&nbsp;
                        </p>
                        <h2>Decentralized Science</h2>
                        <p>
                          DeSci is still an emerging category, but the teams
                          we’ve spoken with so far are aiming to tackle some of
                          the most deeply entrenched problems in global research
                          infrastructure. And they’re doing it through AI and
                          decentralization.
                        </p>
                        <p>
                          So far, most DeSci applicants are focused on combining
                          AI with data ownership and storage — a direction that
                          aligns closely with 0G’s storage application module
                          and reflects 0G’s values around AI as a public good.
                          These DeSci projects are still in the early stages of
                          development, but have some promising, pro-social
                          proposals worth considering. Expect some exciting
                          updates if the current applicant batch is accepted!
                        </p>
                        <h2>Accelerate the Future of Decentralized Intelligence</h2>
                        <p>
                          The ongoing wave of initial accelerator applications
                          has infused the 0G ecosystem with a diverse range of
                          exciting ideas and project types. And we’re just
                          starting to scratch the surface.
                        </p>
                        <p>
                          As interest in 0G’s Global Accelerator continues to
                          build, we’re actively reviewing and vetting
                          submissions, speaking with teams, and surfacing the
                          most promising projects for deeper evaluation. While
                          some verticals are leading the charge so far, we’re
                          also seeing a burst of more unconventional ideas, from
                          iNFT projects with innovative user behavior tracking
                        </p>
                        <p>
                          These early signals are telling. Builders are looking
                          for a technical foundation where agents, models, and
                          data can operate trustlessly, and where composability
                          is the default. That’s what 0G was built for. And you
                          look forward to this future, we invite you to come
                          build it with us.
                        </p>
                        <p>
                          <a href="https://0g.ai/accelerator">
                            <em>Apply for the 0G Global Accelerator Program</em>
                          </a>
                        </p>
                        <p>‍</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="p02_section_filter section_filter">
            <div className="p02_blog_more-blog blog_more-blog">
              <h5 className="p02_related-title">Related news:</h5>
            </div>
          </section> */}

          {/* <div className="p02_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="p02_cms-grid_list cms-grid_list p02_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="p02_cms-grid_item cms-grid_item p02_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/0g-validators"
                  className="p02_cms-grid_content-wrapper cms-grid_content-wrapper p02_is-blog is-blog p02_w-inline-block w-inline-block"
                >
                  <div className="p02_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                      className="p02_cms-grid_image cms-grid_image"
                    />
                    <div className="p02_spacer-medium spacer-medium p02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="p02_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="p02_blog_meta-wrapper-2 blog_meta-wrapper">
                        <div className="p02_card1-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p02_icon-embed-custom-3 icon-embed-custom p02_w-embed-6 w-embed">
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
                        <div className="p02_card1-date">Sep 15, 2025</div>
                      </div>
                      <div className="p02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="p02_heading-style-h5 heading-style-h5">
                        Announcing 0G’s World-class Validator Set
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p02_cms-grid_item-2 cms-grid_item p02_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/early-signals-0g-global-accelerator"
                  aria-current="page"
                  className="p02_cms-grid_content-wrapper-2 cms-grid_content-wrapper p02_is-blog-2 is-blog p02_w-inline-block-2 w-inline-block p02_w--current w--current"
                >
                  <div className="p02_blog_content-2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                      className="p02_cms-grid_image-2 cms-grid_image"
                    />
                    <div className="p02_spacer-medium-2 spacer-medium p02_hide-mobile-portrait-2 hide-mobile-portrait"></div>
                    <div className="p02_blog_contnet-wrapper-2 blog_contnet-wrapper">
                      <div className="p02_blog_meta-wrapper-3 blog_meta-wrapper">
                        <div className="p02_card2-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p02_icon-embed-custom-4 icon-embed-custom p02_w-embed-7 w-embed">
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
                        <div className="p02_card2-date">Aug 14, 2025</div>
                      </div>
                      <div className="p02_spacer-xmedium-2 spacer-xmedium"></div>
                      <h3 className="p02_heading-style-h5-2 heading-style-h5">
                        Where Onchain AI is Headed: Early Signals from the 0G
                        Global Accelerator
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p02_cms-grid_item-3 cms-grid_item p02_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/builder-spotlight-gimo"
                  className="p02_cms-grid_content-wrapper-3 cms-grid_content-wrapper p02_is-blog-3 is-blog p02_w-inline-block-3 w-inline-block"
                >
                  <div className="p02_blog_content-3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                      className="p02_cms-grid_image-3 cms-grid_image"
                    />
                    <div className="p02_spacer-medium-3 spacer-medium p02_hide-mobile-portrait-3 hide-mobile-portrait"></div>
                    <div className="p02_blog_contnet-wrapper-3 blog_contnet-wrapper">
                      <div className="p02_blog_meta-wrapper-4 blog_meta-wrapper">
                        <div className="p02_card3-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p02_icon-embed-custom-5 icon-embed-custom p02_w-embed-8 w-embed">
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
                        <div className="p02_card3-date">Aug 13, 2025</div>
                      </div>
                      <div className="p02_spacer-xmedium-3 spacer-xmedium"></div>
                      <h3 className="p02_heading-style-h5-3 heading-style-h5">
                        0G Builder Spotlight: How Gimo Finance Is Unlocking
                        Liquid Staking for the AI Economy
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="p02_cms-grid_item-4 cms-grid_item p02_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/announcing-the-pond-and-0g-partnership"
                  className="p02_cms-grid_content-wrapper-4 cms-grid_content-wrapper p02_is-blog-4 is-blog p02_w-inline-block-4 w-inline-block"
                >
                  <div className="p02_blog_content-4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                      loading="lazy"
                      alt=""
                      className="p02_cms-grid_image-4 cms-grid_image"
                    />
                    <div className="p02_spacer-medium-4 spacer-medium p02_hide-mobile-portrait-4 hide-mobile-portrait"></div>
                    <div className="p02_blog_contnet-wrapper-4 blog_contnet-wrapper">
                      <div className="p02_blog_meta-wrapper-5 blog_meta-wrapper">
                        <div className="p02_card4-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p02_icon-embed-custom-6 icon-embed-custom p02_w-embed-9 w-embed">
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
                        <div className="p02_card4-date">Apr 20, 2024</div>
                      </div>
                      <div className="p02_spacer-xmedium-4 spacer-xmedium"></div>
                      <h3 className="p02_heading-style-h5-4 heading-style-h5">
                        Announcing the Pond and 0G Partnership
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`p02_copy-toast ${showToast ? 'p02_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
