import React, { useEffect, useState } from 'react'
import './Tech16.css'

export default function Tech16() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t16-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t16-webflow', 'true')
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
      'Check out this insightful blog post: Guild on 0G: Leea Labs, Unagi, Rivalz'
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
    <div className="t16_container">
      <div className="t16_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t16_div002 hide">
          <div className="t16_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t16_div004">Guild on 0G: Leea Labs, Unagi, Rivalz</div>
        </div>

        <main className="t16_main-wrapper main-wrapper">
          <section className="t16_section_hero section_hero is-vertical">
            <div className="t16_div005 padding-global">
              <div className="t16_div006 container-large">
                <div className="t16_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t16_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t16_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t16_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t16_div010 hero_content-component is-vertical">
                  <div className="t16_div011 blog_meta-wrapper is-white">
                    <div className="t16_div012">Tech</div>
                    <div className="t16_div013 icon-embed-custom w-embed">
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
                    <div className="t16_div014">Apr 10, 2025</div>
                    <div className="t16_div015 icon-embed-custom w-embed">
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
                    <div className="t16_div016">0g</div>
                  </div>

                  <div className="t16_div017 spacer-small"></div>

                  <div className="t16_div018 max-width-large text-align-center">
                    <h1 className="t16_heading heading-style-h3">
                      Guild on 0G: Leea Labs, Unagi, Rivalz
                    </h1>
                  </div>

                  <div className="t16_div019 spacer-small"></div>

                  <div className="t16_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t16_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t16_div022 icon-embed-xsmall w-embed">
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
                      className="t16_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t16_div024 icon-embed-xsmall w-embed">
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
                      className="t16_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t16_div026 icon-embed-xsmall w-embed">
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

          <section className="t16_section_legal-content section_legal-content">
            <div className="t16_div027 padding-global">
              <div className="t16_div028 padding-section-medium">
                <div className="t16_div029 container-small">
                  <div className="t16_div030">
                    <div className="t16_div031 legal-content_component">
                      <div className="t16_div032 blog-rich-text w-richtext">
                        <p>
                          At the intersection of blockchain and AI, we’re seeing
                          a new generation of projects move beyond theory and
                          into real-world application.
                        </p>
                        <p>
                          At 0G, our mission has always been to power this
                          evolution. Our{' '}
                          <a href="https://0g.ai/blog/0g-deep-dive">
                            AI-native Layer 1
                          </a>{' '}
                          is designed for scale, verifiability, and low-latency
                          inference, creating the foundation for builders to
                          explore what comes after smart contracts.
                        </p>
                        <p>
                          <a href="https://0g.ai/blog/guild-on-0g-02">
                            Guild on 0G
                          </a>{' '}
                          is our ongoing series highlighting the teams turning
                          that vision into reality. In this third edition, we’re
                          featuring Leea Labs, Unagi, and Rivalz. These three
                          very different projects have one thing in common:
                          they’re pushing the limits of what AI can do in a
                          decentralized world.
                        </p>
                        <h2>
                          <a href="https://leealabs.com/">Leea Labs</a>:
                          Infrastructure for Multi-Agent Intelligence
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t16_div033">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec253219358cff9b42_lpXa0lpYkAuGYDoOtEW2UPKJyw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Building collaborative AI systems is complex.
                          Developers often struggle to deploy and scale agents
                          across environments while managing compute, privacy,
                          and communication. Leea Labs aims to solve this with a
                          unified infrastructure layer that lets agents operate
                          independently or together, powered by an orchestration
                          framework that simplifies everything from memory
                          persistence to multi-agent workflows.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Multi-Agent Orchestration</strong>: Leea
                            Labs’ “Father Agent” tool generates fully integrated
                            agent workflows from a single user prompt.
                          </li>
                          <li>
                            <strong>Modular Development</strong>: Developers can
                            plug into a growing library of reusable agent
                            building blocks.
                          </li>
                          <li>
                            <strong>Real-Time Data Integration</strong>: Agents
                            receive out-of-the-box access to live data streams
                            for dynamic decision-making.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Persistent Agent Memory</strong>: 0G storage
                            ensures continuity for long-running agent systems.
                          </li>
                          <li>
                            <strong>Lightweight Inference</strong>: 0G Compute
                            enables per-request cognition without heavy
                            infrastructure.
                          </li>
                          <li>
                            <strong>Secure Collaboration</strong>: Verifiable,
                            decentralized architecture enhances operational
                            trust across agent networks.
                          </li>
                        </ul>
                        <p>
                          Leea Labs is building the backbone for the next
                          generation of autonomous, composable AI ecosystems. By
                          making it easier to deploy intelligent agents that can
                          collaborate and adapt over time, they’re unlocking
                          more powerful, personalized experiences for users
                          onchain.
                        </p>
                        <h2>
                          <a href="https://www.unagi.games/">Unagi</a>:
                          AI-Powered Entertainment, Onchain
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t16_div034">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec253219358cff9b3c_y1fWqOIhG0VG31BKR0qoHBxbk.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Unagi is building an AI-native entertainment ecosystem
                          that transforms static NFTs into fully autonomous,
                          intelligent agents—aligned with 0G’s{' '}
                          <a href="https://0g.ai/blog/0g-introducing-erc-7857">
                            ERC-7857
                          </a>{' '}
                          standard for iNFTs. Centered on their original IP,{' '}
                          <a href="https://personajourney.io/">Persona</a>, the
                          platform empowers fans and creators to engage with
                          living digital characters across animation, games,
                          manga, and more—turning collectibles into interactive,
                          evolving experiences.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Intelligent NFTs</strong>: Persona avatars
                            evolve with memory, voice, and visual identity.
                          </li>
                          <li>
                            <strong>Agent-as-a-Service</strong>: Users can
                            generate short films, quests, and content packs
                            starring their agent.
                          </li>
                          <li>
                            <strong>Expansive AI Worldbuilding</strong>:
                            Developing interactive games and 3D environments for
                            agent-native experiences.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Persistent Memory &amp; Identity</strong>:
                            0G storage supports long-term memory and evolving
                            agent identity.
                          </li>
                          <li>
                            <strong>Scalable Inference</strong>: Enables low-cost,
                            on-demand agent behavior through decentralized
                            compute.
                          </li>
                          <li>
                            <strong>Native Migration Path</strong>: Bridges
                            existing Persona NFTs from Ethereum to 0G’s
                            AI-native environment.
                          </li>
                        </ul>
                        <p>
                          Unagi is exploring new ways to tell stories in web3,
                          where NFTs aren’t just digital collectibles but
                          characters with memory, personality, and agency. As
                          part of 0G’s growing ecosystem, they’re helping define
                          what it means for intelligent media to live and evolve
                          onchain.
                        </p>
                        <h2>
                          <a href="https://rivalz.ai/">Rivalz</a>: Verifiable AI
                          Oracles for Smart Contracts
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t16_div035">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec253219358cff9b3f_AttZbQjKTQ6mo7ZjgwPgwQ0gR04.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Rivalz enables smart contracts to integrate real-time
                          AI logic through verifiable oracles. By bridging AI
                          decision-making and onchain execution, they’re powering
                          a new class of DeFi and agentic applications where
                          contracts can reason, respond, and adapt.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>AI Oracles</strong>: Smart contracts can
                            request AI-generated outputs to inform or execute
                            logic.
                          </li>
                          <li>
                            <strong>Agentic Automation</strong>: Developers can
                            build contracts that delegate actions to AI-powered
                            agents.
                          </li>
                          <li>
                            <strong>Enhanced Signal Quality</strong>: Combines AI
                            models with curated data sources for better outputs.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Verifiable Oracle Infrastructure</strong>:
                            Rivalz stores oracle inputs and outputs on 0G with
                            hash-based validation, ensuring post-execution
                            transparency and auditability.
                          </li>
                          <li>
                            <strong>Audit-Ready AI Execution</strong>: Developers
                            can trace and validate how AI responses were
                            generated and used.
                          </li>
                          <li>
                            <strong>Decentralized Storage Backbone</strong>:
                            Leverages 0G to anchor outputs in a tamper-proof,
                            trust-minimized environment.
                          </li>
                        </ul>
                        <p>
                          Rivalz is building the connective tissue between smart
                          contracts and verifiable, onchain AI—making it possible
                          for decentralized applications to reason, adapt, and
                          act with intelligence.
                        </p>
                        <h2>Guild on 0G</h2>
                        <p>
                          From multi-agent infrastructure to verifiable AI
                          oracles to intelligent NFTs, this edition of Guild on
                          0G showcases the range of innovation emerging at the
                          intersection of AI and decentralized systems. Leea
                          Labs, Rivalz, and Unagi each demonstrate how 0G’s
                          AI-native infrastructure can power entirely new
                          classes of onchain experiences.
                        </p>
                        <p>
                          As the 0G ecosystem continues to expand, we’ll keep
                          highlighting the teams turning ambitious ideas into
                          decentralized realities. Stay tuned for the next
                          edition of Guild on 0G—and in the meantime, dive
                          deeper into{' '}
                          <a href="https://x.com/leealabs">Leea Labs</a>,{' '}
                          <a href="https://x.com/Unagi_studio">Unagi</a>, and{' '}
                          <a href="https://x.com/Rivalz_AI">Rivalz</a> to see how
                          they’re shaping the future of intelligent, autonomous
                          applications.
                        </p>
                        <p>
                          <a href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/">
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

          <section className="t16_section_filter section_filter">
            <div className="t16_div036 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t16_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t16_div037 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t16_div038 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t16_div039 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t16_div040 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t16_div041 cms-grid_image"
                    />
                    <div className="t16_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t16_div043 blog_contnet-wrapper">
                      <div className="t16_div044 blog_meta-wrapper">
                        <div fs-list-field="category" className="t16_div045">
                          Tech
                        </div>
                        <div className="t16_div046 icon-embed-custom w-embed">
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
                        <div className="t16_div047">Sep 5, 2024</div>
                      </div>
                      <div className="t16_div048 spacer-xmedium"></div>
                      <h3 className="t16_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t16_div049 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t16_div050 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t16_div051 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t16_div052 cms-grid_image"
                    />
                    <div className="t16_div053 spacer-medium hide-mobile-portrait"></div>
                    <div className="t16_div054 blog_contnet-wrapper">
                      <div className="t16_div055 blog_meta-wrapper">
                        <div fs-list-field="category" className="t16_div056">
                          Tech
                        </div>
                        <div className="t16_div057 icon-embed-custom w-embed">
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
                        <div className="t16_div058">Aug 25, 2025</div>
                      </div>
                      <div className="t16_div059 spacer-xmedium"></div>
                      <h3 className="t16_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t16_div060 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t16_div061 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t16_div062 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t16_div063 cms-grid_image"
                    />
                    <div className="t16_div064 spacer-medium hide-mobile-portrait"></div>
                    <div className="t16_div065 blog_contnet-wrapper">
                      <div className="t16_div066 blog_meta-wrapper">
                        <div fs-list-field="category" className="t16_div067">
                          Tech
                        </div>
                        <div className="t16_div068 icon-embed-custom w-embed">
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
                        <div className="t16_div069">Aug 7, 2025</div>
                      </div>
                      <div className="t16_div070 spacer-xmedium"></div>
                      <h3 className="t16_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t16_div071 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t16_div072 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t16_div073 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t16_div074 cms-grid_image"
                    />
                    <div className="t16_div075 spacer-medium hide-mobile-portrait"></div>
                    <div className="t16_div076 blog_contnet-wrapper">
                      <div className="t16_div077 blog_meta-wrapper">
                        <div fs-list-field="category" className="t16_div078">
                          Tech
                        </div>
                        <div className="t16_div079 icon-embed-custom w-embed">
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
                        <div className="t16_div080">Jul 3, 2025</div>
                      </div>
                      <div className="t16_div081 spacer-xmedium"></div>
                      <h3 className="t16_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t16_copy-toast ${showToast ? 't16_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
