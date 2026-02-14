import React, { useEffect, useState } from 'react'
import './Tech22.css'

export default function Tech22() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t22-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t22-webflow', 'true')
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
      'Check out this insightful blog post: Announcing 0G and OnePiece Labs’ Second AI Accelerator Cohort'
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
    <div className="t22_container">
      <div className="t22_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t22_div002 hide">
          <div className="t22_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t22_div004">
            Announcing 0G and OnePiece Labs’ Second AI Accelerator Cohort
          </div>
        </div>

        <main className="t22_main-wrapper main-wrapper">
          <section className="t22_section_hero section_hero is-vertical">
            <div className="t22_div005 padding-global">
              <div className="t22_div006 container-large">
                <div className="t22_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t22_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t22_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t22_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t22_div010 hero_content-component is-vertical">
                  <div className="t22_div011 blog_meta-wrapper is-white">
                    <div className="t22_div012">Tech</div>
                    <div className="t22_div013 icon-embed-custom w-embed">
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
                    <div className="t22_div014">Mar 19, 2025</div>
                    <div className="t22_div015 icon-embed-custom w-embed">
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
                    <div className="t22_div016">0g</div>
                  </div>

                  <div className="t22_div017 spacer-small"></div>

                  <div className="t22_div018 max-width-large text-align-center">
                    <h1 className="t22_heading heading-style-h3">
                      Announcing 0G and OnePiece Labs’ Second AI Accelerator Cohort
                    </h1>
                  </div>

                  <div className="t22_div019 spacer-small"></div>

                  <div className="t22_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t22_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t22_div022 icon-embed-xsmall w-embed">
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
                      className="t22_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t22_div024 icon-embed-xsmall w-embed">
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
                      className="t22_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t22_div026 icon-embed-xsmall w-embed">
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

          <section className="t22_div027 section_legal-content">
            <div className="t22_div028 padding-global">
              <div className="t22_div029 padding-section-medium">
                <div className="t22_div030 container-small">
                  <div className="t22_div031">
                    <div className="t22_div032 legal-content_component">
                      <div className="t22_div033 blog-rich-text w-richtext">
                        <p>
                          The 0G x OnePiece Labs AI Accelerator is designed to support
                          cutting-edge AI projects that are pushing the boundaries of
                          decentralized intelligence. Since kicking off this
                          Accelerator last summer on a rolling admissions basis,
                          we’ve seen a flood of high-potential AI applicants looking
                          to scale their impact within the decentralized AI
                          landscape.&nbsp;
                        </p>
                        <p>
                          So far, the inaugural 0G x OPL Accelerator cohort has set a
                          high bar:
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://carv.io/">
                              <strong>CARV</strong>
                            </a>{' '}
                            grew its user base to over 10M, generated $6M in revenue
                            from their cutting-edge, AI-driven gaming solutions, and
                            reached a $1B ATH market cap after onboarding with 0G x
                            OnePiece.
                          </li>
                          <li>
                            <a href="https://www.cygnus.finance/">
                              <strong>Cygnus Finance</strong>
                            </a>{' '}
                            Reached $100M+ TVL and secured strategic partnerships with
                            Binance, OpenOcean, and SynFutures; currently gearing up
                            for a $15M fundraising round leading up to their TGE.
                          </li>
                          <li>
                            <a href="https://www.datahive.network/">
                              <strong>DataHive</strong>
                            </a>{' '}
                            expanded its pipeline to 6M users, secured $150K in booked
                            revenue and is in the final review stage at NYU Stern’s
                            Endless Frontier Labs.
                          </li>
                          <li>
                            <a href="https://www.infinityg.ai/">
                              <strong>Infinity Ground</strong>
                            </a>{' '}
                            raised $2M in Seed funding to build interoperable
                            AI-powered worlds across blockchains like Base, BNB Chain,
                            and KaiaChain.
                          </li>
                        </ul>
                        <p>
                          Following the remarkable success of this first cohort, 0G
                          and OnePiece Labs are excited to introduce the second
                          cohort—a handpicked selection of startups building at the
                          intersection of AI and web3!
                        </p>
                        <h2>Meet The Latest Cohort</h2>
                        <p>
                          The second 0G x OPL cohort is composed of high-caliber AI
                          projects spanning multiple web3 sectors and application
                          types. The most exciting verticals and projects covered in
                          this cohort include:
                        </p>
                        <h3>AI-Enhanced Gaming / Generative AI</h3>
                        <p>
                          <a href="https://playsout.com/">
                            <strong>PlaysOut</strong>
                          </a>{' '}
                          (Unlocking Mini-Games in Every App)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch: </strong>PlaysOut enables super apps to
                            seamlessly integrate thousands of AI-powered mini-games,
                            enhancing user engagement, retention, and unlocking new
                            revenue streams.
                          </li>
                          <li>
                            <strong>Major Milestones: </strong>Partnerships with
                            Tencent Cloud, OKX, Aptos, KAIA, TON, Movement, and Taiko;
                            engages 200+ mini-game developers &amp; studios globally
                            and is currently raising a $5M strategic pre-TGE round.
                          </li>
                        </ul>
                        <p>
                          <a href="https://playarts.ai/">
                            <strong>PlayArts</strong>
                          </a>{' '}
                          (AI-Powered Dynamic NFTs)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: PlayArts transforms AI-generated
                            data into dynamic, tradable NFTs, enabling users to
                            monetize evolving AI agents through a Train-to-Earn
                            system. By embedding AI intelligence into NFTs, PlayArts
                            is redefining digital asset ownership and interaction.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Selected for the NVIDIA
                            Inception Program and also backed by Story Protocol
                            Arbitrum, and Alchemy. They reached 200K users in January
                            2025 and are currently raising a $2M seed round at a $20M
                            valuation.
                          </li>
                        </ul>
                        <p>
                          <a href="https://eve.games/">
                            <strong>Escape Velocity</strong>
                          </a>
                          <strong> </strong>(Autonomous Gaming Agent Launchpad)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch: </strong>Escape Velocity is a tokenized
                            agent launchpad that adds gaming utility to autonomous
                            agents, and solves liquidity fragmentation issues through
                            gamified trading and “liquidity pool raids” mechanisms
                          </li>
                          <li>
                            <strong>Milestones: </strong>Gamified trading MVP launched
                            in early Feb. First gaming agent prototype, Agent Squaid
                            (AI Squid Game), released at Consensus HK. Currently
                            raising a $1M Seed Round.
                          </li>
                        </ul>
                        <p>
                          <a href="https://wagervs.fun/">
                            <strong>WagerVS</strong>
                          </a>{' '}
                          (Gamified Prediction Market Platform)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch:</strong> WagerVS is a decentralized,
                            gamified prediction market where players can create and
                            engage in unique bets—from celebrity feuds to sports,
                            politics, crypto news, and more. By leveraging AI for
                            event forecasting and outcome determination, WagerVS
                            solves the issue of traditional gaming where “the house
                            always wins,” ensuring fairer and more engaging wagering
                            experiences.
                          </li>
                          <li>
                            <strong>Milestones: </strong>Open Beta launched on{' '}
                            <strong>February 25, 2025. </strong>Raised{' '}
                            <strong>$55K</strong> from a small community OTC private
                            sale. Over <strong>100 unique wallets</strong> onboarded.
                            Processed <strong>$10K+ in wagers</strong> within the
                            first 10 days. Recorded fastest wager of{' '}
                            <strong>$2K in just 14 hours. </strong>Full platform launch
                            planned post-beta after debugging. Currently raising a
                            $1M Seed Round.
                          </li>
                        </ul>
                        <p>
                          <a href="https://lockness.xyz/">
                            <strong>Lockness</strong>
                          </a>{' '}
                          (Decentralized 3D Asset Creation Platform)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch:</strong> Lockness is revolutionizing 3D
                            asset creation by combining DePIN and Generative AI. The
                            platform enables users to effortlessly scan real-world
                            objects into high-quality 3D models using just a
                            smartphone or generate complex 3D assets from simple text
                            prompts. Lockness offers unmatched versatility for
                            creators, from artists to engineers.
                          </li>
                          <li>
                            <strong>Milestones: 3D Scanner MVP</strong> ready for
                            alpha testing within 3 months. Received a{' '}
                            <strong>Render Network Grant</strong> for its innovative
                            approach. <strong>Raising $500K</strong> Pre-Seed at a{' '}
                            <strong>$5M Valuation</strong>.
                          </li>
                        </ul>
                        <h3>AI Agent Marketplaces</h3>
                        <p>
                          <a href="https://www.assisterr.ai/">
                            <strong>Assisterr AI</strong>
                          </a>{' '}
                          (A Network of Specialized AI Models &amp; Agents)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: AI is poised to add $15.7T to the
                            global economy by 2030. Assisterr AI is leading this
                            revolution by providing the infrastructure and tools to
                            build, monetize, and tokenize Specialized AI Models &amp;
                            Agents—disrupting SaaS as we know it.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Raised $2.5M, reached
                            2.5M users and saw 17K+ AI agents/models deployed by our
                            community in 202; currently raising a $5m private round to
                            fuel their TGE.
                          </li>
                        </ul>
                        <p>
                          <a href="http://exponent.ai/">
                            <strong>Exponent.ai</strong>
                          </a>{' '}
                          (AI-Powered Trading Agents for Retail Users)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: Exponent.ai makes the average web3
                            user as productive as institutional firms by equipping
                            them with an entire team of AI trading agents, including
                            Analyst and Trader agents in a chat-based UI.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Analyst MVP launched at
                            Devcon7 SEA, onboarding 1K+ users in 3 weeks. Raised $2.59M
                            pre-seed from top web3 VCs like GSR and KR1. 11K+
                            followers on X, 17K+ Telegram members, and growing fast;
                            currently raising a $4.5M seed round.
                          </li>
                        </ul>
                        <p>
                          <a href="https://www.replicats.ai/">
                            <strong>Replicats</strong>
                          </a>{' '}
                          (No-Code AI-Fi for Autonomous Trading Agents)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: Replicats is a no-code AI-Fi
                            framework for building autonomous trading agents, powered
                            by DAG workflows, specialized foundational models, and
                            LLMs.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Replicats’ first agent,
                            Replicat-One, has launched internally, with public demos
                            coming soon. The RCAT token was the #1 asset bought by
                            smart money on Base on its launch day, according to
                            Nansen; currently raising a $2M seed round.
                          </li>
                        </ul>
                        <h3>Specialized Language Models (SLMs)&nbsp;</h3>
                        <p>
                          <a href="https://credible.finance/">
                            <strong>Credible Finance</strong>
                          </a>
                          <strong> </strong>(AI-Powered Credit System for Web3 Users)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: Credible Finance leverages
                            AI-driven credit analysis to generate on-chain credit
                            scores for 560M digital asset holders, enabling access to
                            credit cards, cash loans, and pay-later financial products
                            within a decentralized ecosystem.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Backed by Circle,
                            Outlier Ventures, BitSwiss Capital, Solana, 0G, and
                            OnePiece Labs. Over 200K+ users are already utilizing its
                            fintech ecosystem; currently raising a $5M pre-TGE
                            strategic round and a $30M Oracle node sale.
                          </li>
                        </ul>
                        <p>
                          <a href="https://www.credprotocol.com/">
                            <strong>Cred Protocol</strong>
                          </a>
                          <strong> </strong>(The First Predictive Web3 Credit Score)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: On-chain lending is a $50B market
                            but remains inefficient due to a lack of credit
                            visibility. Cred Protocol introduces the first predictive
                            web3 credit score—a “FICO for crypto”—enabling
                            reputation-based lending and institutional credit access.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Processed 350K+ credit
                            scores across 9 chains in 2024. Joined the Base ecosystem
                            and launched under-collateralized lending with 3Jane;
                            currently raising a $2M round.
                          </li>
                        </ul>
                        <h3>DAO Automation</h3>
                        <p>
                          <a href="https://www.daoagents.io/" target="_blank">
                            <strong>DAO AI</strong>
                          </a>
                          <strong> </strong>(The First Agentic Governance Protocol for
                          DAOs)
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Pitch</strong>: By 2030, DAOs will govern over $1
                            trillion in assets. DAO AI is redefining decentralized
                            governance with the first agentic governance protocol,
                            allowing DAOs to operate autonomously and efficiently at
                            scale using on-chain intelligence &amp; machine learning.
                          </li>
                          <li>
                            <strong>Major Milestones</strong>: Onboarded 10K daily
                            users in its first week after launching in February 2025;
                            backed by Serafund (early investors in Movement, $1B+, and
                            Plume, $300M+) and currently raising a $3.5M round to fuel
                            their TGE.
                          </li>
                        </ul>
                        <p>
                          While these projects vary in focus, they share common
                          traits: advanced product maturity, strong communities, and
                          significant growth potential, making them valuable
                          additions to the 0G ecosystem.&nbsp;
                        </p>
                        <h2>Building the Future of AI on 0G</h2>
                        <p>
                          We’re proud to launch the second cohort of their AI
                          Accelerator, bringing together some of the most
                          cutting-edge AI projects in web3.&nbsp;
                        </p>
                        <p>
                          By bringing these high-caliber projects into the 0G
                          decentralized AI OS, the accelerator aims to expand 0G’s
                          technological capabilities and attract more innovators to
                          its ecosystem. 0G is rapidly emerging as the AI-enabling
                          Layer 1, with a vision to build a truly decentralized AI
                          infrastructure that is scalable, efficient, and open to
                          all. And with OnePiece’s proven track record in AI and web3
                          acceleration, we’re excited to see how far these 0G x
                          OnePiece Labs AI Accelerator projects will go!
                        </p>
                        <p>
                          In support of this mission, 0G has secured significant
                          funding, recently closing a major investment round to fuel
                          its growth. With its TGE on the horizon, the 0G ecosystem is
                          primed for exponential expansion. It offers AI developers,
                          researchers, and enterprises an unparalleled platform to
                          build and deploy AI solutions that are powerful,
                          decentralized, and accessible to all.
                        </p>
                        <p>
                          Over the coming weeks, the projects that form cohort 2 will
                          receive mentorship, technical support, and investor
                          exposure—culminating in their participation at Token2049
                          Dubai’s on-site Demo Day, where they will showcase their
                          progress to the global web3 and AI community.
                        </p>
                        <p>
                          Stay tuned for updates as these projects bring their
                          AI-powered visions to life!
                        </p>
                        <p>
                          <a
                            href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/"
                            target="_blank"
                          >
                            Apply for the Guild on 0G
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t22_div034 section_filter">
            <div className="t22_div035 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t22_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t22_div036 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t22_div037 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t22_div038 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t22_div039 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t22_div040 cms-grid_image"
                    />
                    <div className="t22_div041 spacer-medium hide-mobile-portrait"></div>
                    <div className="t22_div042 blog_contnet-wrapper">
                      <div className="t22_div043 blog_meta-wrapper">
                        <div fs-list-field="category" className="t22_div044">
                          Tech
                        </div>
                        <div className="t22_div045 icon-embed-custom w-embed">
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
                        <div className="t22_div046">Sep 5, 2024</div>
                      </div>
                      <div className="t22_div047 spacer-xmedium"></div>
                      <h3 className="t22_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t22_div048 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t22_div049 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t22_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t22_div051 cms-grid_image"
                    />
                    <div className="t22_div052 spacer-medium hide-mobile-portrait"></div>
                    <div className="t22_div053 blog_contnet-wrapper">
                      <div className="t22_div054 blog_meta-wrapper">
                        <div fs-list-field="category" className="t22_div055">
                          Tech
                        </div>
                        <div className="t22_div056 icon-embed-custom w-embed">
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
                        <div className="t22_div057">Aug 25, 2025</div>
                      </div>
                      <div className="t22_div058 spacer-xmedium"></div>
                      <h3 className="t22_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI
                        Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t22_div059 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t22_div060 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t22_div061 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t22_div062 cms-grid_image"
                    />
                    <div className="t22_div063 spacer-medium hide-mobile-portrait"></div>
                    <div className="t22_div064 blog_contnet-wrapper">
                      <div className="t22_div065 blog_meta-wrapper">
                        <div fs-list-field="category" className="t22_div066">
                          Tech
                        </div>
                        <div className="t22_div067 icon-embed-custom w-embed">
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
                        <div className="t22_div068">Aug 7, 2025</div>
                      </div>
                      <div className="t22_div069 spacer-xmedium"></div>
                      <h3 className="t22_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t22_div070 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t22_div071 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t22_div072 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t22_div073 cms-grid_image"
                    />
                    <div className="t22_div074 spacer-medium hide-mobile-portrait"></div>
                    <div className="t22_div075 blog_contnet-wrapper">
                      <div className="t22_div076 blog_meta-wrapper">
                        <div fs-list-field="category" className="t22_div077">
                          Tech
                        </div>
                        <div className="t22_div078 icon-embed-custom w-embed">
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
                        <div className="t22_div079">Jul 3, 2025</div>
                      </div>
                      <div className="t22_div080 spacer-xmedium"></div>
                      <h3 className="t22_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t22_copy-toast ${showToast ? 't22_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
