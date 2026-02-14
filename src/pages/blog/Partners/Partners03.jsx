import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Partners03() {
  const [showToast, setShowToast] = useState(false)
  const location = useLocation()

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
      '0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy'
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

  const currentPath = location?.pathname || ''
  const isCurrent = (path) => path === currentPath

  return (
    <div className="p03_container">
      <style>{`
        .p03_copy-toast {
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

        .p03_copy-toast.p03_show {
          opacity: 1;
        }

        .p03_section_hero {
          position: relative;
          overflow: hidden;
        }

        .p03_hero_bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .p03_container .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .p03_container .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .p03_container .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div className="p03_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="p03_hide hide">
          <div className="p03_socialshare-lead">Check out this insightful blog post:&nbsp;</div>
          <div className="p03_socialshare-title">
            0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy
          </div>
        </div>

        <main className="p03_main-wrapper main-wrapper">
          <section className="p03_section_hero section_hero p03_is-vertical is-vertical">
            <div className="p03_padding-global padding-global">
              <div className="p03_container-large container-large">
                <div className="p03_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="p03_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="p03_hero_bg-image-2 hero_bg-image p03_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="p03_hero_bg-gradient hero_bg-gradient p03_is-blog is-blog"></div>
                </div>

                <div className="p03_hero_content-component hero_content-component p03_is-vertical-2 is-vertical">
                  <div className="p03_blog_meta-wrapper blog_meta-wrapper p03_is-white is-white">
                    <div className="p03_blog_meta-category">Partners</div>
                    <div className="p03_icon-embed-custom icon-embed-custom p03_w-embed w-embed">
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
                    <div className="p03_blog_meta-date">Aug 13, 2025</div>
                    <div className="p03_icon-embed-custom-2 icon-embed-custom p03_w-embed-2 w-embed">
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
                    <div className="p03_blog_meta-empty p03_w-dyn-bind-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="p03_spacer-small spacer-small"></div>

                  <div className="p03_max-width-large max-width-large p03_text-align-center text-align-center">
                    <h1 className="p03_heading-style-h3 heading-style-h3">
                      0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy
                    </h1>
                  </div>

                  <div className="p03_spacer-small-2 spacer-small"></div>

                  <div className="p03_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="p03_link-icon-light link-icon-light p03_is-static is-static p03_w-inline-block w-inline-block"
                    >
                      <div className="p03_icon-embed-xsmall icon-embed-xsmall p03_w-embed-3 w-embed">
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
                      className="p03_link-icon-light-2 link-icon-light p03_is-static-2 is-static p03_w-inline-block-2 w-inline-block"
                    >
                      <div className="p03_icon-embed-xsmall-2 icon-embed-xsmall p03_w-embed-4 w-embed">
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
                      className="p03_link-icon-light-3 link-icon-light p03_is-static-3 is-static p03_w-inline-block-3 w-inline-block"
                    >
                      <div className="p03_icon-embed-xsmall-3 icon-embed-xsmall p03_w-embed-5 w-embed">
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

          <section className="p03_section_legal-content section_legal-content">
            <div className="p03_padding-global-2 padding-global">
              <div className="p03_padding-section-medium padding-section-medium">
                <div className="p03_container-small container-small">
                  <div className="p03_legal-shell">
                    <div className="p03_legal-content_component legal-content_component">
                      <div className="p03_blog-rich-text blog-rich-text p03_w-richtext w-richtext">
                        <p>
                          Decentralized AI can’t scale without infrastructure, and infrastructure is only as
                          strong as the builders behind it. Which is why we’ve launched the{' '}
                          <strong>0G Builder Spotlight</strong>, a new series showcasing some of the most
                          promising projects building at the intersection of AI and blockchain on 0G.&nbsp;
                        </p>
                        <p>
                          These teams are moving past experimenting with decentralized intelligence to fully
                          operationalizing it — and doing it faster, smarter, and more creatively thanks to
                          0G’s modular, AI-first architecture. First up on this list is{' '}
                          <strong>Gimo Finance</strong>: a cutting-edge liquid staking protocol unlocking
                          intelligent capital across the 0G ecosystem.
                        </p>
                        <h2>What Is Gimo Finance?</h2>
                        <p>
                          <a href="https://x.com/gimo_fi">Gimo Finance</a> is the first liquid staking
                          protocol purpose-built for 0G and one of the first in crypto to align directly with
                          the liquidity needs of decentralized AI systems.
                        </p>
                        <p>
                          At its core, Gimo allows users to stake{' '}
                          <a href="https://docs.gimofinance.xyz/docs/">$OG</a> (0G’s native token) and receive{' '}
                          <a href="https://docs.gimofinance.xyz/docs/token/st0g">$stOG</a>, a liquid staking
                          derivative that accrues yield, remains composable, and can be deployed across DeFi
                          protocols. Built on StaFi’s{' '}
                          <a href="https://docs.stafi.io/lsaas/">AI LSaaS</a> architecture and integrated
                          natively on <a href="https://0g.ai/blog/0g-deep-dive">0G L1</a>, Gimo transforms
                          passive capital into programmable financial building blocks for the machine economy.
                        </p>
                        <p>Core features of Gimo include:</p>
                        <ul role="list">
                          <li>Non-custodial liquid staking of $OG with fully on-chain rewards</li>
                          <li>$stOG, a yield-bearing, DeFi-compatible token</li>
                          <li>Composability with lending markets, DEXs, and yield aggregators</li>
                          <li>UX designed for both crypto-natives and AI agents</li>
                        </ul>
                        <h2>How is Gimo Integrating 0G?</h2>
                        <p>
                          For its next chapter, Gimo is taking full advantage of 0G’s technical stack. The
                          team reports 90-99% cheaper transaction fees, 80-90% cheaper storage costs, and 2-5x
                          faster execution speeds compared to their previous infrastructure (which included
                          Ethereum, Solana, and Polkadot, among others). And because 0G is EVM-compatible, Gimo
                          was able to reuse existing Solidity contracts and tooling.
                        </p>
                        <p>
                          <em>
                            “We chose to build Gimo on 0G because it&apos;s designed from the ground up for
                            modular, AI-native use cases. Its high-throughput, low-latency data availability
                            layer unlocks real-time composability essential for turning liquid staking into
                            programmable building blocks across DeFi, campaigns, and AI agents.”{' '}
                          </em>
                          <strong>— Jeff ZHANG, Gimo Co-founder</strong>
                        </p>
                        <p>
                          Whether executing multi-step flows or rebalancing strategies in real-time, Gimo
                          allows agents to interact onchain at high frequency without sacrificing affordability
                          or UX — all enabled through 0G’s modular, AI-first architecture.
                        </p>
                        <h2>What’s Next for Gimo</h2>
                        <p>
                          Gimo has evolved beyond simple staking rewards, and is now focused on unlocking new
                          forms of intelligent capital deployments across 0G. By converting staked $A0GI into
                          liquid, composable assets, Gimo enables a new class of AI-native financial
                          strategies. These strategies can be executed by users or autonomous agents, allowing
                          capital to flow with the same fluidity and responsiveness as information or compute.
                        </p>
                        <p>
                          <em>
                            “As the first liquid staking project on 0G and one that&apos;s actively building
                            agent-based interactions, we care a lot about responsiveness, cost-efficiency, and
                            developer agility,” the team said. “Fast transaction execution is a game-changer
                            for our AI agents.”
                          </em>{' '}
                          <strong>— Jacky Ye, Gimo Co-founder</strong>
                        </p>
                        <p>That same thinking applies to Gimo’s upcoming roadmap. Over the next six months, the team plans to expand its 0G integration with:</p>
                        <ul role="list">
                          <li>
                            A Staking Vault (LSV) product, offering diversified, agent-automated yield
                            strategies
                          </li>
                          <li>
                            Scalable AI agents for real-time user support, staking rebalancing, and governance
                            automation
                          </li>
                          <li>
                            Gamified campaign mechanics, transforming user actions into interactive,
                            rewards-driven experiences
                          </li>
                        </ul>
                        <p>
                          <em>
                            “What excites us most about the upcoming 0G features is the potential to unlock new,
                            fun, and creative ways for our users to engage and actually benefit,” they shared.
                            “We’re not just building infrastructure for developers, we’re designing experiences
                            for users.”
                          </em>{' '}
                          <strong>— Jeff ZHANG, Gimo Co-founder</strong>
                        </p>
                        <p>
                          <strong>
                            If you want to know more about what Gimo has to offer, be sure to attend our joint
                            AMA on AI-powered staking this Thursday (1PM UTC)
                          </strong>
                          .&nbsp;
                        </p>
                        <p>
                          <a href="https://x.com/Gimo_Fi/status/1955576317883380083">View AMA details here</a>
                        </p>
                        <p>
                          This online event will be cohosted by representatives from 0G, Gimo, Euclid and
                          JAINE, and we’ll have plenty to share about the future of liquid staking &amp; DeFi
                          innovation!
                        </p>
                        <h2>Gimo and the Future of the AI Economy</h2>
                        <p>
                          Gimo Finance sits at a critical intersection: between DeFi and decentralized
                          intelligence. As capital becomes as programmable and dynamic as compute, protocols
                          like Gimo are key to building the infrastructure for on-chain AI coordination.
                        </p>
                        <p>
                          0G provides the performance layer. Gimo provides the liquidity. Together, we’re
                          unlocking a future where agents and humans participate in shared economic systems:
                          staking, voting, earning, and evolving together.
                        </p>
                        <p>Gimo isn’t just enabling liquid staking. It’s creating the conditions for intelligent capital to thrive.</p>
                        <p>‍</p>
                        <p>
                          <em>Learn more about </em>
                          <a href="https://gimofinance.xyz/code/">
                            <em>Gimo Finance</em>
                          </a>
                        </p>
                        <p>
                          <em>Explore the </em>
                          <a href="https://0g.ai/partners">
                            <em>0G partner ecosystem</em>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="p03_section_filter section_filter">
            <div className="p03_blog_more-blog blog_more-blog">
              <h5 className="p03_related-title">Related news:</h5>
            </div>
          </section> */}
{/* 
          <div className="p03_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="p03_cms-grid_list cms-grid_list p03_w-dyn-items w-dyn-items"
            >
              <div role="listitem" className="p03_cms-grid_item cms-grid_item p03_w-dyn-item w-dyn-item">
                <a
                  href="/blog/0g-validators"
                  aria-current={isCurrent('/blog/0g-validators') ? 'page' : undefined}
                  className={`p03_cms-grid_content-wrapper cms-grid_content-wrapper p03_is-blog is-blog p03_w-inline-block w-inline-block ${isCurrent('/blog/0g-validators') ? 'p03_w--current w--current' : ''}`}
                >
                  <div className="p03_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                      className="p03_cms-grid_image cms-grid_image"
                    />
                    <div className="p03_spacer-medium spacer-medium p03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="p03_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="p03_blog_meta-wrapper-2 blog_meta-wrapper">
                        <div className="p03_card1-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p03_icon-embed-custom-3 icon-embed-custom p03_w-embed-6 w-embed">
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
                        <div className="p03_card1-date">Sep 15, 2025</div>
                      </div>
                      <div className="p03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="p03_heading-style-h5 heading-style-h5">
                        Announcing 0G’s World-class Validator Set
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="p03_cms-grid_item-2 cms-grid_item p03_w-dyn-item-2 w-dyn-item">
                <a
                  href="/blog/early-signals-0g-global-accelerator"
                  aria-current={isCurrent('/blog/early-signals-0g-global-accelerator') ? 'page' : undefined}
                  className={`p03_cms-grid_content-wrapper-2 cms-grid_content-wrapper p03_is-blog-2 is-blog p03_w-inline-block-2 w-inline-block ${isCurrent('/blog/early-signals-0g-global-accelerator') ? 'p03_w--current w--current' : ''}`}
                >
                  <div className="p03_blog_content-2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                      className="p03_cms-grid_image-2 cms-grid_image"
                    />
                    <div className="p03_spacer-medium-2 spacer-medium p03_hide-mobile-portrait-2 hide-mobile-portrait"></div>
                    <div className="p03_blog_contnet-wrapper-2 blog_contnet-wrapper">
                      <div className="p03_blog_meta-wrapper-3 blog_meta-wrapper">
                        <div className="p03_card2-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p03_icon-embed-custom-4 icon-embed-custom p03_w-embed-7 w-embed">
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
                        <div className="p03_card2-date">Aug 14, 2025</div>
                      </div>
                      <div className="p03_spacer-xmedium-2 spacer-xmedium"></div>
                      <h3 className="p03_heading-style-h5-2 heading-style-h5">
                        Where Onchain AI is Headed: Early Signals from the 0G Global Accelerator
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="p03_cms-grid_item-3 cms-grid_item p03_w-dyn-item-3 w-dyn-item">
                <a
                  href="/blog/builder-spotlight-gimo"
                  aria-current={isCurrent('/blog/builder-spotlight-gimo') ? 'page' : undefined}
                  className={`p03_cms-grid_content-wrapper-3 cms-grid_content-wrapper p03_is-blog-3 is-blog p03_w-inline-block-3 w-inline-block ${isCurrent('/blog/builder-spotlight-gimo') ? 'p03_w--current w--current' : ''}`}
                >
                  <div className="p03_blog_content-3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                      className="p03_cms-grid_image-3 cms-grid_image"
                    />
                    <div className="p03_spacer-medium-3 spacer-medium p03_hide-mobile-portrait-3 hide-mobile-portrait"></div>
                    <div className="p03_blog_contnet-wrapper-3 blog_contnet-wrapper">
                      <div className="p03_blog_meta-wrapper-4 blog_meta-wrapper">
                        <div className="p03_card3-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p03_icon-embed-custom-5 icon-embed-custom p03_w-embed-8 w-embed">
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
                        <div className="p03_card3-date">Aug 13, 2025</div>
                      </div>
                      <div className="p03_spacer-xmedium-3 spacer-xmedium"></div>
                      <h3 className="p03_heading-style-h5-3 heading-style-h5">
                        0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="p03_cms-grid_item-4 cms-grid_item p03_w-dyn-item-4 w-dyn-item">
                <a
                  href="/blog/announcing-the-pond-and-0g-partnership"
                  aria-current={isCurrent('/blog/announcing-the-pond-and-0g-partnership') ? 'page' : undefined}
                  className={`p03_cms-grid_content-wrapper-4 cms-grid_content-wrapper p03_is-blog-4 is-blog p03_w-inline-block-4 w-inline-block ${isCurrent('/blog/announcing-the-pond-and-0g-partnership') ? 'p03_w--current w--current' : ''}`}
                >
                  <div className="p03_blog_content-4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                      loading="lazy"
                      alt=""
                      className="p03_cms-grid_image-4 cms-grid_image"
                    />
                    <div className="p03_spacer-medium-4 spacer-medium p03_hide-mobile-portrait-4 hide-mobile-portrait"></div>
                    <div className="p03_blog_contnet-wrapper-4 blog_contnet-wrapper">
                      <div className="p03_blog_meta-wrapper-5 blog_meta-wrapper">
                        <div className="p03_card4-category" fs-list-field="category">
                          Partners
                        </div>
                        <div className="p03_icon-embed-custom-6 icon-embed-custom p03_w-embed-9 w-embed">
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
                        <div className="p03_card4-date">Apr 20, 2024</div>
                      </div>
                      <div className="p03_spacer-xmedium-4 spacer-xmedium"></div>
                      <h3 className="p03_heading-style-h5-4 heading-style-h5">
                        Announcing the Pond and 0G Partnership
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`p03_copy-toast ${showToast ? 'p03_show' : ''}`}>Link copied</div>
      </div>
    </div>
  )
}
