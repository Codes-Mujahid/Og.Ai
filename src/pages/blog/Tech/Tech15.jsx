import React, { useEffect, useState } from 'react'
import './Tech15.css'

export default function Tech15() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t15-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t15-webflow', 'true')
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
      'Check out this insightful blog post: AI Evolution: How Intelligent Agents Will Learn, Adapt, and Compete in Web3'
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
    <div className="t15_container">
      <div className="t15_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t15_hide hide">
          <div className="t15_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t15_socialshare-title">
            AI Evolution: How Intelligent Agents Will Learn, Adapt, and Compete
            in Web3
          </div>
        </div>

        <main className="t15_main-wrapper main-wrapper">
          <section className="t15_section_hero section_hero t15_is-vertical is-vertical">
            <div className="t15_padding-global1 padding-global">
              <div className="t15_container-large container-large">
                <div className="t15_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t15_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t15_hero_bg-image2 hero_bg-image t15_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t15_hero_bg-gradient hero_bg-gradient t15_is-blog is-blog"></div>
                </div>

                <div className="t15_hero_content-component hero_content-component t15_is-vertical2 is-vertical">
                  <div className="t15_blog_meta-wrapper1 blog_meta-wrapper t15_is-white is-white">
                    <div className="t15_blog_meta-category">Tech</div>
                    <div className="t15_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t15_blog_meta-date">Apr 11, 2025</div>
                    <div className="t15_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t15_blog_meta-author">0g</div>
                  </div>

                  <div className="t15_spacer-small1 spacer-small"></div>

                  <div className="t15_max-width-large max-width-large t15_text-align-center text-align-center">
                    <h1 className="t15_heading-style-h3 heading-style-h3">
                      AI Evolution: How Intelligent Agents Will Learn, Adapt,
                      and Compete in Web3
                    </h1>
                  </div>

                  <div className="t15_spacer-small2 spacer-small"></div>

                  <div className="t15_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t15_link-icon-light1 link-icon-light t15_is-static1 is-static w-inline-block"
                    >
                      <div className="t15_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t15_link-icon-light2 link-icon-light t15_is-static2 is-static w-inline-block"
                    >
                      <div className="t15_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t15_link-icon-light3 link-icon-light t15_is-static3 is-static w-inline-block"
                    >
                      <div className="t15_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t15_section_legal-content section_legal-content">
            <div className="t15_padding-global2 padding-global">
              <div className="t15_padding-section-medium padding-section-medium">
                <div className="t15_container-small container-small">
                  <div className="t15_legal_outer">
                    <div className="t15_legal-content_component legal-content_component">
                      <div className="t15_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          We’re living in a golden age of AI advancement. AI
                          models are more powerful than ever and can produce
                          high-quality outputs, adjusting their outputs based on
                          new data. But most of today’s AI systems still exist
                          within closed environments. They respond to prompts,
                          but often in isolation. They learn, but not openly.
                          And while they can improve over time, their evolution
                          remains largely gated by centralized operators.
                        </p>
                        <p>
                          But AI is changing. As we shift toward more autonomous,
                          agentic systems, AI agents won’t just answer questions
                          or complete tasks. They’ll observe, learn from
                          experience, and actively participate in open
                          economies. This next phase of AI evolution will be
                          powered by transparent systems, shared incentives, and
                          onchain coordination. And it will happen on 0G, the
                          first Artificial Intelligence Layer (AIL) built to
                          support AI activity at scale.
                        </p>
                        <h2>
                          From Closed-Loop AI Inferences to Open Feedback Loops
                        </h2>
                        <p>
                          Many of today’s AI systems support fine-tuning and
                          post-deployment learning. But those updates often
                          happen in opaque ways, controlled by centralized
                          teams and unavailable for user inspection or audit.
                          The result is fragmented learning and limited
                          continuity between how an agent performs in one
                          environment and how it improves over time.
                        </p>
                        <p>
                          For AI agents to reach their full potential, learning
                          must become a continuous, transparent loop, through
                          processes developers and even regular users can
                          observe, shape, and benefit from. This requires agents
                          to retain performance history, incorporate real-world
                          outcomes, and adapt based on experience across
                          different contexts.
                        </p>
                        <p>
                          By recording behavioral outputs and user feedback
                          onchain, learning can become a shared, verifiable
                          process. 0G’s Compute Network lays the groundwork by
                          enabling decentralized inference today, with a path
                          toward decentralized training and fine-tuning via
                          trusted execution environments (TEEs). These
                          environments ensure agents can evolve safely, without
                          compromising user privacy or exposing proprietary
                          weights.
                        </p>
                        <p>
                          AI inference should not be the final step in an AI’s
                          execution. When interactions and outcomes are recorded
                          onchain, agents gain access to a wealth of open,
                          tamper-proof behavioral data. In this sense, the next
                          stage after inference should be a checkpoint in a
                          continuous learning loop. And with data entirely
                          onchain, learning becomes transparent, auditable, and
                          user-aligned.
                        </p>
                        <h2>Adaptive Agents That Evolve Over Time</h2>
                        <p>
                          Learning enables intelligence. But adaptation is what
                          allows intelligence to survive and thrive in a
                          dynamic, multi-agent world. AI agents that can learn
                          from data still fall short if they can’t retain and
                          use that knowledge across contexts. Without persistent
                          states such as memories of past behavior or evolving,
                          individualized personality traits, agents are stuck in
                          stateless cycles of reaction. They become
                          indistinguishable, forgetful, and ultimately
                          untrustworthy as autonomous participants in open
                          ecosystems.
                        </p>
                        <p>
                          This is where 0G’s decentralized storage
                          infrastructure comes in. Unlike static cloud storage,
                          0G Storage is designed to support real-time and
                          archival AI state across applications. And because
                          this data is stored verifiably and accessibly onchain,
                          agents can build identity-aware memory stacks that are
                          provably authentic and cross-compatible. Developers
                          and users alike can inspect an agent’s “life history,”
                          enabling more responsible AI and persistent behavioral
                          customization.
                        </p>
                        <p>
                          This is more than just better UX. It’s a technical
                          requirement for agents that can act over time, evolve
                          ethically, and maintain long-term relationships with
                          users, other agents, and onchain institutions. This
                          ability to evolve behavior based on context and carry
                          identity and history from one application to another
                          is key to unlocking AI agents’ true competitive
                          potential.
                        </p>
                        <h2>
                          Interacting, Competing, and Powering New AI Economies
                        </h2>
                        <p>
                          Today, agents mostly operate in isolation. You prompt
                          them, and they respond. There’s no memory, no
                          negotiation, and no interaction across agents—let
                          alone cross-agent collaboration or competition. But in
                          any complex system, intelligence doesn’t operate in a
                          vacuum. It emerges through interaction. That’s what’s
                          missing from today’s, and that’s exactly what 0G’s
                          open, modular infrastructure is poised to enable.
                        </p>
                        <p>
                          0G is creating a dynamic onchain ecosystem in which AI
                          agents can evolve in perpetuity, instead of running
                          into passive endpoints. They become active economic
                          participants capable of exchanging value, forming
                          coalitions, challenging one another, and evolving
                          through networked feedback. Within this backdrop, each
                          market or challenge will become a new AI fitness
                          function, shaping smarter agents over time.
                        </p>
                        <p>Imagine an ecosystem with:</p>
                        <ul role="list">
                          <li>
                            <strong>AI research swarms</strong> that independently
                            analyze a shared dataset, with some agents proposing
                            insights or hypotheses while other agents verify,
                            critique, or synthesize findings. Over time, this
                            swarm could even act like a decentralized research
                            institution that is self-improving and publicly
                            auditable.
                          </li>
                          <li>
                            <strong>Self-governing DAOs</strong> that collectively
                            manage services like indexing, content moderation,
                            or predictive modeling, with onchain governance
                            deciding how resources are allocated, fees are
                            split, and new members are admitted based on
                            historical performance.
                          </li>
                          <li>
                            <strong>Immersive entertainment worlds</strong> where
                            agents control NPCs with persistent memory and
                            economic incentives. Players can hire swarms of
                            agents to manage virtual cities, defend against
                            attacks, or stage coups as each agent learns from
                            others, adapts to player strategies, and competes
                            for storyline dominance in a living, breathing
                            virtual world.
                          </li>
                          <li>
                            <strong>Intellectual property agents </strong>that
                            create, remix, and trade generative media assets—not
                            as static NFTs, but as living iNFTs with verifiable
                            provenance, automated royalty distributions, and
                            adaptive behavior embedded across time and
                            ownership.
                          </li>
                        </ul>
                        <p>
                          These opportunities are not hypothetical: 0G&apos;s
                          full-stack infrastructure supports every layer of this
                          evolution. With onchain inference and training via the
                          Compute Network, persistent memory and modular state
                          through 0G Storage, and composable economic activity
                          facilitated by ERC-7857 iNFTs and modular DA, 0G is
                          the first network where agents can exist, evolve, and
                          exchange value transparently and at scale.
                        </p>
                        <h2>0G is the Infrastructure for AI Evolution</h2>
                        <p>
                          AI agents today are the digital equivalent of
                          single-celled organisms: reactive, transient, and
                          isolated. They exist only in the moment, trained once
                          and deployed blindly, with no memory of the past or
                          anticipation of the future. But true intelligence is
                          not static. It evolves, learning from experience,
                          adapting to new challenges, and competing for
                          relevance.
                        </p>
                        <p>
                          With the rise of web3, we finally have the open
                          substrate to push agent evolution forward, from static
                          scripts into adaptive, economic actors. And 0G is the
                          operating system where this evolution will thrive. In
                          this new model, agents won’t just generate content;
                          they will generate value for the people who train,
                          deploy, and collaborate with them. This is the only
                          way to align AI design with human-centric goals and
                          allow anyone to become co-creators of a new
                          intelligent economy.
                        </p>
                        <p>And it all starts here, with 0G.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t15_section_filter section_filter">
            <div className="t15_blog_more-blog blog_more-blog">
              <h5 className="t15_related-title">Related news:</h5>
            </div>
          </section>

          <div className="t15_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t15_cms-grid_list cms-grid_list t15_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t15_cms-grid_item1 cms-grid_item t15_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t15_cms-grid_content-wrapper1 cms-grid_content-wrapper t15_is-blog1 is-blog t15_w-inline-block1 w-inline-block"
                >
                  <div className="t15_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t15_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t15_spacer-medium1 spacer-medium t15_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t15_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t15_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t15_related_category1">Tech</div>
                        <div className="t15_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t15_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t15_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t15_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t15_cms-grid_item2 cms-grid_item t15_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t15_cms-grid_content-wrapper2 cms-grid_content-wrapper t15_is-blog2 is-blog t15_w-inline-block2 w-inline-block"
                >
                  <div className="t15_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t15_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t15_spacer-medium2 spacer-medium t15_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t15_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t15_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t15_related_category2">Tech</div>
                        <div className="t15_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t15_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t15_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t15_heading-style-h5-2 heading-style-h5">
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
                className="t15_cms-grid_item3 cms-grid_item t15_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t15_cms-grid_content-wrapper3 cms-grid_content-wrapper t15_is-blog3 is-blog t15_w-inline-block3 w-inline-block"
                >
                  <div className="t15_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t15_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t15_spacer-medium3 spacer-medium t15_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t15_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t15_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t15_related_category3">Tech</div>
                        <div className="t15_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t15_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t15_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t15_heading-style-h5-3 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t15_cms-grid_item4 cms-grid_item t15_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t15_cms-grid_content-wrapper4 cms-grid_content-wrapper t15_is-blog4 is-blog t15_w-inline-block4 w-inline-block"
                >
                  <div className="t15_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t15_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t15_spacer-medium4 spacer-medium t15_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t15_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t15_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t15_related_category4">Tech</div>
                        <div className="t15_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t15_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t15_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t15_heading-style-h5-4 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t15_copy-toast ${showToast ? 't15_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
