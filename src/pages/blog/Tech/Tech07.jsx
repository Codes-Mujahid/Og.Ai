import React, { useState } from 'react'
import './Tech07.css'

export default function Tech07() {
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
      'Check out this insightful blog post: Guild on 0G: Euclid, MeetLinkAI, QuillAI'
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
    <div className="t07_container">
      <div className="t07_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t07_hide hide">
          <div className="t07_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t07_socialshare-title">
            Guild on 0G: Euclid, MeetLinkAI, QuillAI
          </div>
        </div>

        <main className="t07_main-wrapper main-wrapper">
          <section className="t07_section_hero section_hero t07_is-vertical is-vertical">
            <div className="t07_padding-global padding-global">
              <div className="t07_container-large container-large">
                <div className="t07_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t07_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t07_hero_bg-image2 hero_bg-image t07_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t07_hero_bg-gradient hero_bg-gradient t07_is-blog is-blog"></div>
                </div>

                <div className="t07_hero_content-component hero_content-component t07_is-vertical2 is-vertical">
                  <div className="t07_blog_meta-wrapper blog_meta-wrapper t07_is-white is-white">
                    <div className="t07_blog_meta-category">Tech</div>
                    <div className="t07_icon-embed-custom1 icon-embed-custom t07_w-embed w-embed">
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
                    <div className="t07_blog_meta-date">Jun 9, 2025</div>
                    <div className="t07_icon-embed-custom2 icon-embed-custom t07_w-embed2 w-embed">
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
                    <div className="t07_blog_meta-author">0g</div>
                  </div>

                  <div className="t07_spacer-small spacer-small"></div>

                  <div className="t07_max-width-large max-width-large t07_text-align-center text-align-center">
                    <h1 className="t07_heading-style-h3 heading-style-h3">
                      Guild on 0G: Euclid, MeetLinkAI, QuillAI
                    </h1>
                  </div>

                  <div className="t07_spacer-small2 spacer-small"></div>

                  <div className="t07_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t07_link-icon-light1 link-icon-light t07_is-static is-static t07_w-inline-block w-inline-block"
                    >
                      <div className="t07_icon-embed-xsmall1 icon-embed-xsmall t07_w-embed3 w-embed">
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
                      className="t07_link-icon-light2 link-icon-light t07_is-static2 is-static t07_w-inline-block2 w-inline-block"
                    >
                      <div className="t07_icon-embed-xsmall2 icon-embed-xsmall t07_w-embed4 w-embed">
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
                      className="t07_link-icon-light3 link-icon-light t07_is-static3 is-static t07_w-inline-block3 w-inline-block"
                    >
                      <div className="t07_icon-embed-xsmall3 icon-embed-xsmall t07_w-embed5 w-embed">
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

          <section className="t07_section_legal-content section_legal-content">
            <div className="t07_padding-global2 padding-global">
              <div className="t07_padding-section-medium padding-section-medium">
                <div className="t07_container-small container-small">
                  <div className="t07_legal-content_outer">
                    <div className="t07_legal-content_component legal-content_component">
                      <div className="t07_blog-rich-text blog-rich-text t07_w-richtext w-richtext">
                        <p>
                          Welcome to the fifth installment of Guild on 0G—our{' '}
                          <a href="https://0g.ai/blog/guild-on-0g-03">
                            ongoing series
                          </a>{' '}
                          spotlighting the builders advancing decentralized AI
                          using the 0G stack.
                        </p>
                        <p>
                          Each project featured in this series is helping bring
                          0G’s{' '}
                          <a href="https://0g.ai/blog/0g-deep-dive">
                            Artificial Intelligence Layer
                          </a>{' '}
                          (AIL) to life: a modular foundation for permissionless
                          compute, scalable storage, and AI-native services. From
                          autonomous agents to composable protocols, this latest
                          cohort is tackling some of the most complex challenges
                          in distributed intelligence.
                        </p>
                        <p>
                          In this edition, we’re featuring{' '}
                          <a href="https://x.com/EuclidProtocol">Euclid</a>,{' '}
                          <a href="https://x.com/MeetLinkAI">MeetLinkAI</a>, and{' '}
                          <a href="https://x.com/QuillAI_Network">QuillAI</a>.
                          These three very different projects share a
                          commonality: they are pushing the boundaries of what AI
                          could achieve in a decentralized world.
                        </p>
                        <h2>
                          <a href="https://www.euclidprotocol.io/">
                            Euclid Protocol
                          </a>
                          : Liquidity Without Limits
                        </h2>
                        <figure className="t07_w-richtext-align-center w-richtext-align-center t07_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="t07_richtext-figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9a966ce215e33fadf8_qFC8IPybyRA68dStslf2ET4qU.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Euclid is building the first Liquidity Consensus Layer
                          (LCL)—a novel infrastructure that enables dApps and
                          chains to access liquidity across all assets, networks,
                          and ecosystems without relying on bridges. From DeFi to
                          RWAs to payments, Euclid aims to eliminate fragmentation
                          at the root and redefine what interoperability looks
                          like.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Unified Liquidity Pools</strong>: EuclidFi
                            allows DEXs to operate omnichain pools, enabling
                            seamless cross-chain swaps without wrapping or
                            bridging.
                          </li>
                          <li>
                            <strong>Cross-Chain RWA Settlement</strong>:
                            EuclidRWA unlocks real-world asset access and
                            collateralization across 40+ chains, with
                            near-instant settlement.
                          </li>
                          <li>
                            <strong>Universal Payments</strong>: EuclidPay
                            supports payments in any token, on any
                            chain—dramatically expanding the market reach for
                            dApps.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Real-Time State Sync</strong>: 0G enables
                            near-instant, verifiable synchronization of
                            liquidity state across chains, without relying on
                            delayed messaging.
                          </li>
                          <li>
                            <strong>Modular, Low-Latency Architecture</strong>:
                            Euclid leverages 0G’s ultra-fast infrastructure to
                            coordinate cross-chain swaps, lending, and payments.
                          </li>
                          <li>
                            <strong>Trustless Liquidity Access</strong>: By
                            integrating 0G, Euclid avoids the need for bridges
                            or wrapped assets while preserving security
                            guarantees.
                          </li>
                        </ul>
                        <p>
                          With 0G, Euclid is turning fragmented liquidity into a
                          shared, composable layer. One that any project can plug
                          into, and no chain has to build alone.
                        </p>
                        <h2>
                          <a href="https://x.com/MeetLinkAI">MeetLinkAI</a>:
                          Smarter Connections, Onchain
                        </h2>
                        <figure className="t07_w-richtext-align-center2 w-richtext-align-center t07_w-richtext-figure-type-image2 w-richtext-figure-type-image">
                          <div className="t07_richtext-figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9a966ce215e33fadf5_lfaGv6T2IH8utXMjiN4IXAMo9Rw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          MeetLinkAI is a networking and contacts CRM designed to
                          help OffChain’s global community of 20,000+ members
                          extract more value from in-person events and online
                          meetups. By blending social discovery with onchain
                          identity, MeetLinkAI brings real-world connection to
                          the next generation of social apps.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Onchain Identity Verification</strong>: Users
                            sign with wallets to prove authenticity, creating a
                            secure, blockchain-based alternative to traditional
                            KYC.
                          </li>
                          <li>
                            <strong>Social Discovery Engine</strong>: A
                            Tinder-like interface helps users find relevant
                            connections based on shared interests and opt into
                            contact sharing.
                          </li>
                          <li>
                            <strong>IRL-First Networking</strong>: Designed to
                            encourage in-person and virtual meetups, not just
                            digital chats, fostering stronger real-world
                            relationships.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Decentralized Storage</strong>: MeetLinkAI
                            uses 0G’s native storage to manage sensitive user
                            data securely, avoiding central points of failure.
                          </li>
                          <li>
                            <strong>Privacy-First Architecture</strong>: The team
                            is exploring how 0G&apos;s decentralized AI stack can
                            enhance user privacy and control over data.
                          </li>
                          <li>
                            <strong>Integrated Infra Stack</strong>: The
                            combination of AI compute and native storage made 0G
                            the ideal home for MeetLinkAI’s next phase of growth.
                          </li>
                        </ul>
                        <p>
                          With 0G, MeetLinkAI is turning events into long-term
                          networks, where every handshake, intro, and opt-in
                          becomes a gateway to deeper connection.
                        </p>
                        <h2>
                          <a href="https://quillai.network/">QuillAI Network</a>:
                          AGI-Grade Security for the Onchain Economy
                        </h2>
                        <figure className="t07_w-richtext-align-center3 w-richtext-align-center t07_w-richtext-figure-type-image3 w-richtext-figure-type-image">
                          <div className="t07_richtext-figure-inner3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9a966ce215e33fadec_kS3Sii4FfgWffnMbc8nc492t80.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          QuillAI Network is developing a decentralized system of
                          adversarial AI agents that deliver autonomous,
                          continuously improving security for the onchain
                          economy. From smart contracts to token audits to AI
                          safety, QuillAI is redefining what decentralized threat
                          detection can look like.
                        </p>
                        <h4>Core Features</h4>
                        <ul role="list">
                          <li>
                            <strong>Adversarial AI Architecture</strong>: Uses
                            reinforcement learning in a red/blue team
                            configuration to simulate attacks and improve
                            defense mechanisms over time.
                          </li>
                          <li>
                            <strong>Smart Contract &amp; Token Protection</strong>
                            : Identifies vulnerabilities, scam tokens, and rug
                            pulls—then alerts users and suggests remediations.
                          </li>
                          <li>
                            <strong>AI Agent Hardening</strong>: Secures AI agents
                            from prompt injections and jailbreak attempts using
                            dynamic threat modeling.
                          </li>
                        </ul>
                        <h4>Why 0G?</h4>
                        <ul role="list">
                          <li>
                            <strong>Decentralized Compute Infrastructure</strong>
                            : QuillAI taps into 0G’s compute marketplace to
                            efficiently scale training and inference for its AI
                            models.
                          </li>
                          <li>
                            <strong>Native to 0G L1</strong>: The protocol is built
                            directly on 0G’s Layer 1 to ensure seamless
                            integration and performance.
                          </li>
                          <li>
                            <strong>Purpose-Built for AI Security</strong>: 0G
                            offers the infrastructure flexibility and scalability
                            QuillAI needs to evolve its models in real time.
                          </li>
                        </ul>
                        <p>
                          With 0G, QuillAI is building an autonomous security
                          layer for the onchain economy—constantly training,
                          testing, and adapting to stay one step ahead of
                          emerging threats.
                        </p>
                        <h2>Guild on 0G</h2>
                        <p>
                          Each project in this cohort contributes to a shared
                          vision: a decentralized, composable, and AI-native
                          internet. Whether through autonomous agents, verifiable
                          compute, or persistent memory, they’re shaping what it
                          means for intelligence to live onchain.
                        </p>
                        <p>
                          As we continue to build the AIL, we’re looking for
                          founders who are pushing the boundaries of what’s
                          possible in modular AI. If you’re working on
                          infrastructure, applications, or tooling for this new
                          paradigm, we want to hear from you.
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

          <section className="t07_section_filter section_filter">
            <div className="t07_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t07_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t07_cms-grid_list cms-grid_list t07_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t07_cms-grid_item1 cms-grid_item t07_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t07_cms-grid_content-wrapper1 cms-grid_content-wrapper t07_is-blog4 is-blog t07_w-inline-block4 w-inline-block"
                >
                  <div className="t07_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t07_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t07_spacer-medium1 spacer-medium t07_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t07_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t07_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t07_related_category1">Tech</div>
                        <div className="t07_icon-embed-custom3 icon-embed-custom t07_w-embed6 w-embed">
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
                        <div className="t07_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t07_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t07_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t07_cms-grid_item2 cms-grid_item t07_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t07_cms-grid_content-wrapper2 cms-grid_content-wrapper t07_is-blog5 is-blog t07_w-inline-block5 w-inline-block"
                >
                  <div className="t07_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t07_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t07_spacer-medium2 spacer-medium t07_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t07_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t07_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t07_related_category2">Tech</div>
                        <div className="t07_icon-embed-custom4 icon-embed-custom t07_w-embed7 w-embed">
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
                        <div className="t07_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t07_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t07_heading-style-h52 heading-style-h5">
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
                className="t07_cms-grid_item3 cms-grid_item t07_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t07_cms-grid_content-wrapper3 cms-grid_content-wrapper t07_is-blog6 is-blog t07_w-inline-block6 w-inline-block"
                >
                  <div className="t07_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t07_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t07_spacer-medium3 spacer-medium t07_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t07_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t07_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t07_related_category3">Tech</div>
                        <div className="t07_icon-embed-custom5 icon-embed-custom t07_w-embed8 w-embed">
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
                        <div className="t07_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t07_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t07_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t07_cms-grid_item4 cms-grid_item t07_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t07_cms-grid_content-wrapper4 cms-grid_content-wrapper t07_is-blog7 is-blog t07_w-inline-block7 w-inline-block"
                >
                  <div className="t07_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t07_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t07_spacer-medium4 spacer-medium t07_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t07_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t07_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t07_related_category4">Tech</div>
                        <div className="t07_icon-embed-custom6 icon-embed-custom t07_w-embed9 w-embed">
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
                        <div className="t07_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t07_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t07_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t07_copy-toast ${showToast ? 't07_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
