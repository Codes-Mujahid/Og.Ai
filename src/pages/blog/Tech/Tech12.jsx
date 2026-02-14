import React, { useEffect, useState } from 'react'
import './Tech12.css'

export default function Tech12() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t12-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t12-webflow', 'true')
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
      'Check out this insightful blog post: Guild on 0G: sightAI, xNomad, Cove'
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
    <div className="t12_container">
      <div className="t12_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t12_hide hide">
          <div className="t12_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t12_socialshare-title">
            Guild on 0G: sightAI, xNomad, Cove
          </div>
        </div>

        <main className="t12_main-wrapper main-wrapper">
          <section className="t12_section_hero section_hero t12_is-vertical is-vertical">
            <div className="t12_padding-global padding-global">
              <div className="t12_container-large container-large">
                <div className="t12_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t12_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t12_hero_bg-image2 hero_bg-image t12_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t12_hero_bg-gradient hero_bg-gradient t12_is-blog is-blog"></div>
                </div>

                <div className="t12_hero_content-component hero_content-component t12_is-vertical2 is-vertical">
                  <div className="t12_blog_meta-wrapper blog_meta-wrapper t12_is-white is-white">
                    <div className="t12_blog_meta-category">Tech</div>
                    <div className="t12_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t12_blog_meta-date">Apr 28, 2025</div>
                    <div className="t12_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t12_blog_meta-author">0g</div>
                  </div>

                  <div className="t12_spacer-small spacer-small"></div>

                  <div className="t12_max-width-large max-width-large t12_text-align-center text-align-center">
                    <h1 className="t12_heading-style-h3 heading-style-h3">
                      Guild on 0G: sightAI, xNomad, Cove
                    </h1>
                  </div>

                  <div className="t12_spacer-small2 spacer-small"></div>

                  <div className="t12_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t12_link-icon-light1 link-icon-light t12_is-static1 is-static w-inline-block"
                    >
                      <div className="t12_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      className="t12_link-icon-light2 link-icon-light t12_is-static2 is-static w-inline-block"
                    >
                      <div className="t12_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      href="#"
                      onClick={(e) => handleSocialShare('x', e)}
                      className="t12_link-icon-light3 link-icon-light t12_is-static3 is-static w-inline-block"
                    >
                      <div className="t12_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t12_section_legal-content section_legal-content">
            <div className="t12_padding-global2 padding-global">
              <div className="t12_padding-section-medium padding-section-medium">
                <div className="t12_container-small container-small">
                  <div className="t12_legal-content_outer">
                    <div className="t12_legal-content_component legal-content_component">
                      <div className="t12_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          Welcome to the fourth installment of Guild on
                          0G—our{' '}
                          <a href="https://0g.ai/blog/guild-on-0g-03">
                            ongoing series
                          </a>{' '}
                          spotlighting the builders advancing decentralized AI
                          using the 0G stack.
                        </p>
                        <p>
                          Each of the projects featured in this series is
                          helping bring 0G’s{' '}
                          <a href="https://0g.ai/blog/0g-deep-dive">
                            Artificial Intelligence Layer
                          </a>{' '}
                          (AIL) to life: a modular foundation for permissionless
                          compute, scalable storage, and AI-native services. From
                          autonomous agents to composable AI protocols, this
                          latest cohort is exploring solutions to some of the
                          most complex challenges in distributed intelligence.
                        </p>
                        <p>
                          In this fourth edition, we’re featuring{' '}
                          <a href="https://x.com/theSightAI">sightAI</a>,{' '}
                          <a href="https://x.com/xNomadAI">xNomad</a>, and{' '}
                          <a href="https://x.com/coveai_io">Cove</a>. These three
                          very different projects share a commonality: they are
                          pushing the boundaries of what AI could achieve in a
                          decentralized world.
                        </p>
                        <h2>
                          <a href="https://sightai.io/">
                            sightAI
                          </a>
                          : Composable Agents with Decentralized Memory
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t12_richtext-figure-inner1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126eb9a298d11ceace91a_g6YkJqKbIXhqHSZJCMZBIH81f4.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Today’s AI systems are typically locked into
                          centralized APIs, where compute is opaque, data is
                          proprietary, and users have no control over memory or
                          context. sightAI is aiming to solve this by building a
                          permissionless network of Modular Compute Providers
                          (MCPs), where each agent is independently addressable
                          and traceable. This architecture is designed to let
                          users compose, query, and switch between agents.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Modular Compute</strong>: MCPs operate as
                            decentralized agents, each represented by a
                            Decentralized Identifier (DID) and deployable on
                            demand.
                          </li>
                          <li>
                            <strong>Transparent Inference</strong>: Users can
                            inspect the full chain of logic, data, and model
                            provenance behind each AI output.
                          </li>
                          <li>
                            <strong>Context Persistence</strong>: Optional
                            encrypted memory lets users carry task state across
                            sessions, agents, and devices.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Decentralized Model Hosting</strong>: Stores
                            model weights and metadata on 0G, enabling
                            peer-to-peer loading by compute providers.
                          </li>
                          <li>
                            <strong>Cross-Agent Context Layer</strong>: Encrypted
                            user memory is stored on 0G, allowing persistent
                            state across agents and devices.
                          </li>
                          <li>
                            <strong>Modular Integration</strong>: 0G’s SDK and
                            REST-based interface allow seamless embedding in
                            browser and node environments.
                          </li>
                        </ul>
                        <p>
                          sightAI is building infrastructure for AI agents that
                          are both composable and accountable, where each step
                          of logic and storage can be verified. By anchoring
                          memory and metadata in 0G, they are advancing toward a
                          future where users move from passively interacting
                          with AI to actively owning and shaping their
                          experience.
                        </p>
                        <h2>
                          <a href="https://xnomad.ai/">xNomad</a>: Tokenized AI
                          Agents for the Web3 Economy
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t12_richtext-figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126eb9a298d11ceace912_XrZGeidxDCbZWSEc9sRfe2hUhg.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The majority of AI systems are static, centralized,
                          and inaccessible to everyday users. xNomad is
                          developing open-source frameworks to change that,
                          enabling anyone to turn an NFT into an autonomous,
                          Intelligent NFT (iNFT) agent that can manage crypto,
                          interact with dApps, and evolve over time. These
                          AI-NFTs live onchain, carry transferable logic, and
                          can serve as programmable web3 assistants backed by
                          real-time crypto intelligence.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Autonomous Agents</strong>: AI-NFTs can
                            interact with DeFi protocols, wallets, and apps
                            using onchain state.
                          </li>
                          <li>
                            <strong>Specialized Intelligence</strong>: xNomad
                            Brain is a crypto-native LLM designed to reason
                            about markets and protocols.
                          </li>
                          <li>
                            <strong>Launch-Ready Toolkit</strong>: A full
                            platform for deploying, training, and trading AI
                            agents on public chains.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Onchain Agent Infrastructure</strong>: Uses
                            0G’s{' '}
                            <a href="https://0g.ai/blog/0g-introducing-erc-7857">
                              ERC-7857
                            </a>{' '}
                            standard to mint verifiable, composable iNFT agents.
                          </li>
                          <li>
                            <strong>Low-Cost Inference &amp; Storage</strong>:
                            Deploys 0G compute and storage to support scalable
                            training, analytics, and execution.
                          </li>
                          <li>
                            <strong>Integrated AI Services</strong>: Distributes
                            xNomad Brain via 0G’s service marketplace for
                            seamless access across apps.
                          </li>
                        </ul>
                        <p>
                          xNomad is rethinking what ownership means in AI: where
                          agents can be built, upgraded, and traded like any
                          other asset, but with memory, autonomy, and evolving
                          intelligence. By building on 0G, they are helping
                          define what decentralized, intelligent asset
                          management looks like onchain.
                        </p>
                        <h2>
                          <a href="https://coveai.io/">Cove</a>: Wallet-Native AI
                          Agents for Decentralized Trading
                        </h2>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t12_richtext-figure-inner3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126eb9a298d11ceace915_V9DeWqGM27lBAZpRrK1PMMeheY.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Most crypto trading still relies on fragmented tools,
                          siloed liquidity, and centralized infrastructure. Cove
                          is building a decentralized trading network powered by
                          AI agents that act on behalf of users, not
                          intermediaries. Through WalletNet and MEX (My
                          Exchange), users can execute trades directly from
                          their wallets across DEXs, CEXs, and OTC markets,
                          aiming for real-time liquidity optimization, MEV
                          resistance, and zero custody trade-offs.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Wallet-Native Trading</strong>: Users can
                            access markets directly from their wallets,
                            eliminating the need for a custodial interface.
                          </li>
                          <li>
                            <strong>AI-Driven Execution</strong>: Agents analyze
                            sentiment and optimize trade routing across venues.
                          </li>
                          <li>
                            <strong>Unified Liquidity</strong>: MEX aggregates
                            depth from CEXs and DEXs while preserving privacy
                            and decentralization.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Decentralized Compute Backbone</strong>:
                            Uses 0G compute to run high-frequency AI agents for
                            execution and sentiment analysis.
                          </li>
                          <li>
                            <strong>Encrypted Market Intelligence</strong>:
                            Stores AI-generated insights, trade reports, and
                            market history on 0G Storage.
                          </li>
                          <li>
                            <strong>Fast, Verifiable Execution</strong>: Relies
                            on 0G’s DA layer for real-time data access and
                            tamper-proof strategy validation.
                          </li>
                        </ul>
                        <p>
                          Cove is seeking to redefine what trading
                          infrastructure looks like in web3, shifting execution
                          logic from centralized platforms to autonomous agents
                          secured by decentralized compute. With 0G, they’re
                          building toward a world where markets are not only
                          more efficient but also more private, self-custodial,
                          and intelligent by design.
                        </p>
                        <h2>Guild on 0G</h2>
                        <p>
                          Each project in this cohort contributes to a shared
                          vision: a decentralized, composable, and AI-native
                          internet. Whether through autonomous agents,
                          verifiable compute, or persistent memory, they’re
                          helping shape what it means for intelligence to live
                          onchain.
                        </p>
                        <p>
                          As we continue to develop the AIL, we are seeking
                          founders who are pushing the boundaries of what is
                          possible in modular AI. If you&apos;re working on
                          infrastructure, applications, or tools that fit into
                          this new paradigm, we’d love to hear from you.
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

          <section className="t12_section_filter section_filter">
            <div className="t12_blog_more-blog blog_more-blog">
              <h5 className="t12_related-title">Related news:</h5>
            </div>
          </section>

          <div className="t12_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t12_cms-grid_list cms-grid_list t12_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t12_cms-grid_item1 cms-grid_item t12_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t12_cms-grid_content-wrapper1 cms-grid_content-wrapper t12_is-blog1 is-blog t12_w-inline-block1 w-inline-block"
                >
                  <div className="t12_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t12_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t12_spacer-medium1 spacer-medium t12_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t12_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t12_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t12_related_category1">Tech</div>
                        <div className="t12_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t12_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t12_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t12_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t12_cms-grid_item2 cms-grid_item t12_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t12_cms-grid_content-wrapper2 cms-grid_content-wrapper t12_is-blog2 is-blog t12_w-inline-block2 w-inline-block"
                >
                  <div className="t12_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t12_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t12_spacer-medium2 spacer-medium t12_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t12_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t12_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t12_related_category2">Tech</div>
                        <div className="t12_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t12_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t12_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t12_heading-style-h5 heading-style-h5">
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
                className="t12_cms-grid_item3 cms-grid_item t12_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t12_cms-grid_content-wrapper3 cms-grid_content-wrapper t12_is-blog3 is-blog t12_w-inline-block3 w-inline-block"
                >
                  <div className="t12_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t12_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t12_spacer-medium3 spacer-medium t12_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t12_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t12_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t12_related_category3">Tech</div>
                        <div className="t12_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t12_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t12_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t12_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t12_cms-grid_item4 cms-grid_item t12_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t12_cms-grid_content-wrapper4 cms-grid_content-wrapper t12_is-blog4 is-blog t12_w-inline-block4 w-inline-block"
                >
                  <div className="t12_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t12_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t12_spacer-medium4 spacer-medium t12_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t12_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t12_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t12_related_category4">Tech</div>
                        <div className="t12_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t12_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t12_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t12_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t12_copy-toast ${showToast ? 't12_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

