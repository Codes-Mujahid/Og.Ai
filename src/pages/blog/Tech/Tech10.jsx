import React, { useEffect, useState } from 'react'
import './Tech10.css'

export default function Tech10() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t10-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t10-webflow', 'true')
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
      'Check out this insightful blog post: Forging the Future of Onchain AI: 0G’s Latest Hackathon Highlights'
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
    <div className="t10_container">
      <div className="t10_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t10_hide hide">
          <div className="t10_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t10_socialshare-title">
            Forging the Future of Onchain AI: 0G’s Latest Hackathon Highlights
          </div>
        </div>

        <main className="t10_main-wrapper main-wrapper">
          <section className="t10_section_hero section_hero t10_is-vertical is-vertical">
            <div className="t10_padding-global padding-global">
              <div className="t10_container-large container-large">
                <div className="t10_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t10_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t10_hero_bg-image2 hero_bg-image t10_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t10_hero_bg-gradient hero_bg-gradient t10_is-blog is-blog"></div>
                </div>

                <div className="t10_hero_content-component hero_content-component t10_is-vertical2 is-vertical">
                  <div className="t10_blog_meta-wrapper blog_meta-wrapper t10_is-white is-white">
                    <div className="t10_blog_meta-category">Tech</div>
                    <div className="t10_icon-embed-custom1 icon-embed-custom t10_w-embed1 w-embed">
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
                    <div className="t10_blog_meta-date">May 16, 2025</div>
                    <div className="t10_icon-embed-custom2 icon-embed-custom t10_w-embed2 w-embed">
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
                    <div className="t10_blog_meta-author">0g</div>
                  </div>

                  <div className="t10_spacer-small spacer-small"></div>

                  <div className="t10_max-width-large max-width-large t10_text-align-center text-align-center">
                    <h1 className="t10_heading-style-h3 heading-style-h3">
                      Forging the Future of Onchain AI: 0G’s Latest Hackathon
                      Highlights
                    </h1>
                  </div>

                  <div className="t10_spacer-small2 spacer-small"></div>

                  <div className="t10_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t10_link-icon-light1 link-icon-light t10_is-static1 is-static t10_w-inline-block1 w-inline-block"
                    >
                      <div className="t10_icon-embed-xsmall1 icon-embed-xsmall t10_w-embed3 w-embed">
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
                      className="t10_link-icon-light2 link-icon-light t10_is-static2 is-static t10_w-inline-block2 w-inline-block"
                    >
                      <div className="t10_icon-embed-xsmall2 icon-embed-xsmall t10_w-embed4 w-embed">
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
                      className="t10_link-icon-light3 link-icon-light t10_is-static3 is-static t10_w-inline-block3 w-inline-block"
                    >
                      <div className="t10_icon-embed-xsmall3 icon-embed-xsmall t10_w-embed5 w-embed">
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

          <section className="t10_section_legal-content section_legal-content">
            <div className="t10_padding-global2 padding-global">
              <div className="t10_padding-section-medium padding-section-medium">
                <div className="t10_container-small container-small">
                  <div className="t10_legal-content_outer">
                    <div className="t10_legal-content_component legal-content_component">
                      <div className="t10_blog-rich-text blog-rich-text t10_w-richtext w-richtext">
                        <p>
                          Over the past few months, 0G has been on the road
                          (both virtually and physically) supporting a wave of
                          builders pushing the boundaries of decentralized AI.
                        </p>
                        <p>
                          From elite student competitions in Seoul to high-speed
                          sprints in Shenzhen and Shanghai, and from ETHGlobal’s
                          winner-stacked Trifecta experiment to a multi-week
                          innovation marathon in Hong Kong, 0G-backed hackathons
                          have surfaced some of the most exciting innovation in
                          the blockchain and AI ecosystems.
                        </p>
                        <p>
                          Each event brought something different: new regions,
                          new developers, and new ways of applying 0G
                          infrastructure to real challenges. But together, they
                          tell a story of momentum.
                        </p>
                        <h2>
                          <a href="https://ethglobal.com/events/trifecta/prizes/0g">
                            ETHGlobal Trifecta
                          </a>
                        </h2>
                        <p>
                          <a href="https://ethglobal.com/">ETHGlobal</a>{' '}
                          Trifecta was a 72-hour online hackathon unlike any
                          other. Only previous ETHGlobal winners were invited to
                          participate, making it a high-caliber, experimental
                          event focused on pushing boundaries.
                        </p>
                        <p>
                          For 0G, it marked the team’s first appearance as an
                          ETHGlobal sponsor, and an opportunity to onboard
                          seasoned builders to the next generation of modular
                          infrastructure.
                        </p>
                        <p>
                          0G contributed a total of $5,000 in bounties, split
                          between $2,500 that went toward Trifecta’s overall
                          winners and $2,500 in 0G-specific tracks focused on
                          decentralized storage and compute.
                        </p>
                        <figure className="t10_w-richtext-align-center1 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t10_figure-inner1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99b7d26e784609d783_GM790oDqdUGB4EGBbDKxTA7zs7E.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          For the 0G Storage track, three teams were awarded
                          $400 each for innovative and efficient integrations of
                          0G’s decentralized storage layer:
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://ethglobal.com/showcase/careai-metza">
                              CareAI
                            </a>
                            : A privacy-preserving mental health assistant
                            powered by onchain AI and ZKML.
                          </li>
                          <li>
                            <a href="https://ethglobal.com/showcase/model-wars-70jsg">
                              Model Wars
                            </a>
                            : A decentralized marketplace for ML models, where
                            performance determines rewards.
                          </li>
                          <li>
                            <a href="https://ethglobal.com/showcase/clampify-iqz3p">
                              Clampify
                            </a>
                            : A fine-tuning interface for ML models deployed
                            with zkML.
                          </li>
                        </ul>
                        <p>
                          For the 0G Compute track,{' '}
                          <a href="https://ethglobal.com/showcase/ogxbt-8gysv">
                            OGxbt
                          </a>{' '}
                          earned $500 as the runner-up for compute integration
                          with a Bitcoin oracle that uses AI agents to validate
                          cross-chain data. All in all, none of the projects
                          that submitted met the bar for the $800 first prize.
                        </p>
                        <h2>
                          <a href="https://lu.ma/izqwtsfy">
                            TinTinLand AI Agent Evolution Hackathon
                          </a>
                        </h2>
                        <p>
                          The TinTinLand AI Agent Evolution Hackathon was a
                          hybrid event spanning two months of online development
                          and three days of high-intensity offline co-coding,
                          culminating in a vibrant Hong Kong Demo Day.
                        </p>
                        <p>
                          Organized by{' '}
                          <a href="https://tintinland.com/">TinTinLand</a> in
                          collaboration with 0G and{' '}
                          <a href="https://flow.com/">Flow</a>, the hackathon
                          challenged builders to explore the next frontier of
                          intelligent agents across both infrastructure and
                          consumer apps.
                        </p>
                        <p>
                          0G sponsored its own dedicated track focused on two
                          key themes: “User-Friendly AI for Everyone” and
                          “Building Rollups with 0G’s DA Layer.” Participants
                          were encouraged to build tools that made advanced AI
                          accessible to everyday users or to experiment with
                          novel rollup and DA architectures leveraging 0G’s
                          infrastructure.
                        </p>
                        <p>0G awarded a total of $5,000 in prizes, including:</p>
                        <ul role="list">
                          <li>
                            $2,000 for 1st place: 0gChat – a user-friendly AI
                            chatbot platform built on 0G compute.
                          </li>
                          <li>
                            $1,000 for 2nd place: AnyCreative – a creative
                            assistant powered by AI models using 0G infra.
                          </li>
                          <li>
                            $500 each to four teams for best integration of 0G
                            Storage or Compute: LinguaBridge, Swimming Coach,
                            and 0G Gateway.
                          </li>
                        </ul>
                        <p>
                          In total, over 250 developers participated, with 34
                          completed projects and 20 awards presented. The
                          results demonstrated growing demand for scalable,
                          developer-friendly AI tooling, and 0G’s infrastructure
                          proved to be a critical enabler of innovation at the
                          edge of onchain AI.
                        </p>
                        <figure className="t10_w-richtext-align-center2 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t10_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9bb7d26e784609d7c4_YqGEwAvsLr5AwiWVfHcjU29N9tM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h2>OpenBuild Offline Hackathons (Shenzhen &amp; Shanghai)</h2>
                        <p>
                          As part of{' '}
                          <a href="https://openbuild.xyz/">OpenBuild</a>’s
                          ongoing AI³ Growth Journey series, 0G sponsored two
                          dynamic offline hackathons in China: a mini-hackathon
                          in Shenzhen and a full-day build sprint in Shanghai.
                          Both events were designed to accelerate collaboration
                          between AI and web3 developers, with a strong emphasis
                          on real-world applications and creator-friendly
                          tooling.
                        </p>
                        <h3>
                          <a href="https://x.com/OpenBuildxyz/status/1907754285313765427">
                            Shenzhen Mini-Hackathon
                          </a>
                        </h3>
                        <p>
                          In Shenzhen, over a dozen AI x web3 teams came
                          together for a three-hour rapid build session. Despite
                          the short timeframe, developers delivered impressive
                          early-stage projects. 0G sponsored the event alongside{' '}
                          <a href="https://gokite.ai/">Kite AI</a>,{' '}
                          <a href="https://www.campnetwork.xyz/?__cf_chl_rt_tk=go5hviWvRHus6ZXzvRx7wAw77ljdlBWjR.kq53qJXag-1747336054-1.0.1.1-eCIRhopTlqpAXIjqNbtchzcPihtuyExe218XGg6.7_s">
                            Camp Network
                          </a>
                          , <a href="https://www.delysium.com/">Delysium</a>,
                          and <a href="https://supra.com/">Supra</a>, helping
                          kickstart the community’s exploration of decentralized
                          AI infrastructure.
                        </p>
                        <figure className="t10_w-richtext-align-center3 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t10_figure-inner3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99b7d26e784609d765_9wZaFFhHmaeNTxZBiOiPWkKVYk.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Winning projects included:</p>
                        <ul role="list">
                          <li>
                            AI Goal: An AI-powered goal planner focused on
                            productivity and third-party verification.
                          </li>
                          <li>
                            Game of Life: Generative NFT art based on Conway’s
                            Game of Life, praised for its creative execution.
                          </li>
                          <li>EchoStone: A decentralized information hub.</li>
                        </ul>
                        <p>
                          The mini-hackathon served as an energizing launchpad
                          for future AI x blockchain development across the
                          region.
                        </p>
                        <h3>
                          <a href="https://mp.weixin.qq.com/s/3uWlltu3CZuveXrh9xBJ3A">
                            Shanghai Hackathon
                          </a>
                        </h3>
                        <p>
                          The Shanghai edition took things up a notch with a
                          hybrid format blending online learning and offline
                          development. Over 50 developers gathered in person,
                          building nine AI-infused web3 prototypes under the
                          theme “Build Your First AI Agent on Web3 Infra.” Judges
                          evaluated submissions based on innovation, technical
                          execution, user experience, and commercial viability.
                        </p>
                        <figure className="t10_w-richtext-align-center4 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t10_figure-inner4">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9bb7d26e784609d7d3_mHzP6hmHOXYLn1uDjvLeitHHSw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Winning projects included:</p>
                        <ul role="list">
                          <li>
                            OpenMemory: A visionary system for AI agent memory
                            transfer with real commercial potential.
                          </li>
                          <li>
                            0xAuto: An intelligent trading tool that combines AI
                            decision-making with web3 execution.
                          </li>
                          <li>
                            Video to NFT: A creative pipeline for turning
                            AI-analyzed video into copyright-protected NFTs.
                          </li>
                          <li>
                            BlockRecruit (Best Vibe Award): A web3-native
                            recruitment platform that impressed with energy and
                            teamwork.
                          </li>
                        </ul>
                        <p>
                          The Shanghai hackathon showcased the power of AI
                          agents built on modular, decentralized
                          infrastructure—just the kind of innovation 0G is here
                          to support.
                        </p>
                        <h2>
                          <a href="https://lu.ma/yvngjopk">
                            The Academic Frontier Hackathon
                          </a>
                        </h2>
                        <p>
                          Hosted in Seoul and co-organized by{' '}
                          <a href="https://leccaventures.com/">LECCA Ventures</a>{' '}
                          and 0G, The Academic Frontier was a high-energy
                          hackathon designed to spotlight AI agent innovation at
                          the university level. With a strong academic focus,
                          the event brought together elite student builders from
                          Korea and the U.S. to transform cutting-edge research
                          into real-world, decentralized AI applications.
                        </p>
                        <figure className="t10_w-richtext-align-center5 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t10_figure-inner5">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99b7d26e784609d787_Lcm6bVQGE9XBssW0s6cqbOJ7hP0.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          More than just a hackathon, the day-long event
                          featured interactive missions, a $10K+ raffle prize
                          pool, and talks from 0G,{' '}
                          <a href="https://www.bnbchain.org/">BNB Chain</a>,{' '}
                          <a href="https://www.monad.xyz/">Monad</a>, and{' '}
                          <a href="https://chainlight.io/">ChainLight</a>.
                          Attendees competed in games like the “0G Squid Game,”
                          connected with top builders and VCs, and capped the
                          day with a Korean BBQ afterparty.
                        </p>
                        <p>
                          The pitch competition was the centerpiece, with judges
                          selecting three standout projects from a large pool of
                          university teams:
                        </p>
                        <ul role="list">
                          <li>
                            0G Build Block: A developer framework that makes
                            building smart contracts feel like building apps,
                            simplifying onchain development for a broader
                            audience.
                          </li>
                          <li>
                            Planisphere: An AI agent prediction market designed
                            by a team of PhDs and professors, blending academic
                            rigor with practical blockchain mechanics.
                          </li>
                          <li>
                            ZeroEffortStaking: An AI-powered staking aggregator
                            that aims to simplify and optimize DeFi strategies
                            with minimal user effort.
                          </li>
                        </ul>
                        <p>
                          The Academic Frontier showcased the potential of
                          modular infrastructure to empower the next generation
                          of decentralized AI builders and reaffirmed 0G’s role
                          in helping bridge the gap between academia and
                          application.
                        </p>
                        <h2>More to Come</h2>
                        <p>
                          While these four hackathons were an incredible start
                          to the year, they’re just the beginning. With more
                          events on the horizon, we’re continuing to support
                          builders who are shaping the future of decentralized
                          AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t10_section_filter section_filter">
            <div className="t10_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t10_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t10_cms-grid_list cms-grid_list t10_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t10_cms-grid_item1 cms-grid_item t10_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t10_cms-grid_content-wrapper1 cms-grid_content-wrapper t10_is-blog4 is-blog t10_w-inline-block4 w-inline-block"
                >
                  <div className="t10_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t10_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t10_spacer-medium1 spacer-medium t10_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t10_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t10_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t10_related_category1">Tech</div>
                        <div className="t10_icon-embed-custom3 icon-embed-custom t10_w-embed6 w-embed">
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
                        <div className="t10_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t10_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t10_heading-style-h51 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t10_cms-grid_item2 cms-grid_item t10_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t10_cms-grid_content-wrapper2 cms-grid_content-wrapper t10_is-blog5 is-blog t10_w-inline-block5 w-inline-block"
                >
                  <div className="t10_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t10_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t10_spacer-medium2 spacer-medium t10_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t10_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t10_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t10_related_category2">Tech</div>
                        <div className="t10_icon-embed-custom4 icon-embed-custom t10_w-embed7 w-embed">
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
                        <div className="t10_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t10_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t10_heading-style-h52 heading-style-h5">
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
                className="t10_cms-grid_item3 cms-grid_item t10_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t10_cms-grid_content-wrapper3 cms-grid_content-wrapper t10_is-blog6 is-blog t10_w-inline-block6 w-inline-block"
                >
                  <div className="t10_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t10_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t10_spacer-medium3 spacer-medium t10_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t10_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t10_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t10_related_category3">Tech</div>
                        <div className="t10_icon-embed-custom5 icon-embed-custom t10_w-embed8 w-embed">
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
                        <div className="t10_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t10_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t10_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t10_cms-grid_item4 cms-grid_item t10_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t10_cms-grid_content-wrapper4 cms-grid_content-wrapper t10_is-blog7 is-blog t10_w-inline-block7 w-inline-block"
                >
                  <div className="t10_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t10_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t10_spacer-medium4 spacer-medium t10_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t10_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t10_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t10_related_category4">Tech</div>
                        <div className="t10_icon-embed-custom6 icon-embed-custom t10_w-embed9 w-embed">
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
                        <div className="t10_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t10_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t10_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t10_copy-toast ${showToast ? 't10_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
