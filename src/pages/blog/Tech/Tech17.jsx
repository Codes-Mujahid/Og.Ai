import React, { useEffect, useState } from 'react'
import './Tech17.css'

export default function Tech17() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t17-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t17-webflow', 'true')
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
      'Check out this insightful blog post: This Week in Onchain AI - Ep.2 Recap'
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
    <div className="t17_container">
      <div className="t17_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t17_div002 hide">
          <div className="t17_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t17_div004">This Week in Onchain AI - Ep.2 Recap</div>
        </div>

        <main className="t17_main-wrapper main-wrapper">
          <section className="t17_section_hero section_hero is-vertical">
            <div className="t17_div005 padding-global">
              <div className="t17_div006 container-large">
                <div className="t17_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t17_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t17_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t17_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t17_div010 hero_content-component is-vertical">
                  <div className="t17_div011 blog_meta-wrapper is-white">
                    <div className="t17_div012">Tech</div>
                    <div className="t17_div013 icon-embed-custom w-embed">
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
                    <div className="t17_div014">Apr 9, 2025</div>
                    <div className="t17_div015 icon-embed-custom w-embed">
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
                    <div className="t17_div016">0g</div>
                  </div>

                  <div className="t17_div017 spacer-small"></div>

                  <div className="t17_div018 max-width-large text-align-center">
                    <h1 className="t17_heading heading-style-h3">
                      This Week in Onchain AI - Ep.2 Recap
                    </h1>
                  </div>

                  <div className="t17_div019 spacer-small"></div>

                  <div className="t17_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t17_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t17_div022 icon-embed-xsmall w-embed">
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
                      className="t17_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t17_div024 icon-embed-xsmall w-embed">
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
                      className="t17_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t17_div026 icon-embed-xsmall w-embed">
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

          <section className="t17_section_legal-content section_legal-content">
            <div className="t17_div027 padding-global">
              <div className="t17_div028 padding-section-medium">
                <div className="t17_div029 container-small">
                  <div className="t17_div030">
                    <div className="t17_div031 legal-content_component">
                      <div className="t17_div032 blog-rich-text w-richtext">
                        <p>
                          Today, we hosted the second episode of This Week in
                          Onchain AI—0G’s new X Space series, where we dive deep
                          into the world of Decentralized AI (DeAI) with leading
                          builders and thinkers.
                        </p>
                        <p>
                          Back <a href="https://0g.ai/blog/this-week-in-onchain-ai-ep-1">again</a>{' '}
                          were hosts <a href="https://x.com/jaxxdwyer">Jax Dwyer</a>{' '}
                          and <a href="https://x.com/ghcryptoguy">Elisha Owusu Akyaw</a>,{' '}
                          joined this week by{' '}
                          <a href="https://x.com/VitalisElkins">Vitalis Elkins</a>, Head of
                          Europe at <a href="https://www.bytetradelab.io/">ByteTrade</a>{' '}
                          and co-founder of{' '}
                          <a href="https://www.mindscraft.ai/">Mindscraft</a>, a no-code
                          platform for building intelligent agents.
                        </p>
                        <p>
                          The conversation spanned decentralized infrastructure,
                          the evolving role of AI agents, and how open source
                          intersects (and often conflicts) with decentralization.
                        </p>
                        <p>Here’s a recap of the biggest takeaways:</p>
                        <h2>Chatbots to Smart Agents: The New Paradigm of AI</h2>
                        <p>
                          To start things off, Vitalis shared the origin story of
                          Mindscraft, born from his team&apos;s frustration with the
                          limited functionality of existing agent platforms.
                          Early experiments like{' '}
                          <a href="https://schizoterminal.com/">Schizo Terminal</a>—a
                          “schizophrenic” AI exploring split personalities—evolved
                          into a broader vision: giving users the ability to
                          create personalized agents without any coding or prompt
                          engineering.
                        </p>
                        <p>
                          <strong>Vitalis</strong>: “It was a very simple idea:
                          allow people to create meaningful agents without
                          knowing coding or even prompting… just using key
                          interfaces like toggle lists and checkboxes.”
                        </p>
                        <p>
                          To Vitalis, the future of AI is one where users build
                          agents as easily as they install apps. But beyond
                          consumer use, he noted that B2B is where the near-term
                          opportunity lies: replacing high-churn roles like
                          moderators and support staff with more scalable,
                          intelligent agents.
                        </p>
                        <h2>Decentralized AI Still Isn’t Obvious</h2>
                        <p>
                          After a brief discussion about Vitalis’s ventures (and
                          Jax’s avid use of LLMs), the conversation shifted as
                          Elisha recounted a recent exchange with a friend at
                          MIT. The friend asked why he was building decentralized
                          AI—a question that still surprises Elisha, given how
                          deeply embedded centralized models like ChatGPT have
                          become in daily life.
                        </p>
                        <p>
                          Our speakers broke it down simply: users are feeding
                          private data into opaque black boxes. Whether it’s
                          personal chats, health data, or business strategy,
                          we’re giving massive corporations control over highly
                          sensitive information with little transparency and no
                          guarantee of alignment with user values.
                        </p>
                        <p>
                          <strong>Elisha</strong>:<strong> </strong>“For far too
                          long, we&apos;ve trusted big tech companies to manage our
                          data, protect our privacy, and provide us with
                          information. All of these three things are very
                          important to our existence, our ability to take the
                          right decisions, and just have our own free will and be
                          able to do whatever it is that we want. And I think
                          people don&apos;t seem to get that.”
                        </p>
                        <p>
                          Vitalis added that while many users may not care (yet),
                          there’s clear demand in the enterprise space.
                          Companies don’t want to feed their IP into a
                          competitor’s model, and DeAI offers a way to preserve
                          privacy without sacrificing performance.
                        </p>
                        <h2>Open Source ≠ Decentralized</h2>
                        <p>
                          A recurring theme in the conversation was the confusion
                          between open source and decentralized AI. While models
                          like Meta’s Llama and DeepSeek are technically open
                          source, they’re still produced by major corporations—often
                          with centralized control over training data,
                          deployment, and governance.
                        </p>
                        <p>
                          <strong>Jax</strong>: “Even when we look at the open
                          source models, they’re created by Facebook. Like Llama,
                          Facebook. DeepSeek, a hedge fund in China… All of these
                          are still being produced by commercial enterprises.”
                        </p>
                        <p>
                          Elisha expanded on this point, emphasizing that
                          decentralization isn’t just about publishing code; it’s
                          about who controls the infrastructure, how data is
                          stored, and who decides what gets prioritized.
                        </p>
                        <p>
                          <strong>Elisha</strong>: “You can be open source and
                          not decentralized… but decentralized platforms will
                          pick up these pieces of code from people who are
                          publishing as open source and adapt them to public
                          infrastructure.”
                        </p>
                        <p>
                          In that future, open models can evolve in transparent,
                          community-driven ways, building toward a more robust
                          and perhaps even censorship-resistant AI ecosystem.
                        </p>
                        <h2>The Agentic Future Is Closer Than We Think</h2>
                        <p>
                          As the conversation turned back to AI agents, all three
                          speakers shared a clear vision for where things are
                          heading: a shift from apps to agents. Top of mind was
                          how the way we interact with software could soon look
                          radically different.
                        </p>
                        <p>
                          <strong>Jax</strong>: “We may actually see the death of
                          the app future and the introduction of the agent
                          future… In the agentic future, maybe you just have one
                          really close personal assistant agent, and it would
                          work to coordinate all of these specialized
                          sub-agents.”
                        </p>
                        <p>
                          Elisha emphasized that we’re not just talking about
                          convenience but about critical infrastructure for
                          filtering information and improving decision-making. He
                          gave the example of recent fake news impacting
                          financial markets:
                        </p>
                        <p>
                          <strong>Elisha</strong>: “On Monday, when the stock
                          market opened and the prices were dumping, some
                          accounts and news platforms claimed that Trump is about
                          to put a halt on the tariffs. That news stayed in
                          circulation for a good two hours before people from
                          the White House could clarify that they don&apos;t know
                          anything about a pause. People went long based on that
                          news, and they quickly got liquidated. It was a very
                          sad situation and also very interesting in terms of
                          how people interact with news… Having an AI agent that
                          verifies news, explains context—this is not just a
                          crypto-specific use case, it’s for everyone.”
                        </p>
                        <p>
                          Vitalis added that the agentic future will be defined
                          by natural interactions and seamless personalization,
                          moving far beyond today&apos;s prompt-heavy experiences:
                        </p>
                        <p>
                          <strong>Vitalis</strong>: “Right now, you need to
                          understand how to speak with ChatGPT. People who know
                          how to communicate with LLMs have a big advantage. But
                          I think it will be completely neglected in a few
                          years. It’ll be turned into a fully natural language,
                          and agents will understand you the way people do.”
                        </p>
                        <p>
                          The takeaway? Agents aren’t just a trend—they’re the
                          next major UX shift. Decentralized infrastructure will
                          be critical to making them trustworthy, composable,
                          and privacy-preserving.
                        </p>
                        <h2>0G Milestones</h2>
                        <p>
                          To close out, Elisha highlighted several exciting
                          developments from the 0G ecosystem:
                        </p>
                        <ul role="list">
                          <li>
                            Keep an eye on puzzle drops from the 0G X account—something’s
                            brewing.
                          </li>
                          <li>0G will be present at Token2049 (more details soon).</li>
                          <li>Testnet V3 is on the way, accelerating the road to mainnet.</li>
                        </ul>
                        <h2>Join the Conversation</h2>
                        <p>
                          Missed the space? Listen to the full recording{' '}
                          <a href="https://x.com/0G_labs/status/1910014848400085240">
                            here
                          </a>
                          , and be sure to follow <a href="https://x.com/0G_labs">0G on X</a>{' '}
                          for future episodes.
                        </p>
                        <p>
                          Join our <a href="https://discord.com/invite/0glabs">Discord</a>{' '}
                          to keep up with DeAI conversations, builder updates, and
                          upcoming community activations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t17_section_filter section_filter">
            <div className="t17_div033 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t17_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t17_div034 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t17_div035 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t17_div036 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t17_div037 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t17_div038 cms-grid_image"
                    />
                    <div className="t17_div039 spacer-medium hide-mobile-portrait"></div>
                    <div className="t17_div040 blog_contnet-wrapper">
                      <div className="t17_div041 blog_meta-wrapper">
                        <div fs-list-field="category" className="t17_div042">
                          Tech
                        </div>
                        <div className="t17_div043 icon-embed-custom w-embed">
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
                        <div className="t17_div044">Sep 5, 2024</div>
                      </div>
                      <div className="t17_div045 spacer-xmedium"></div>
                      <h3 className="t17_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t17_div046 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t17_div047 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t17_div048 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t17_div049 cms-grid_image"
                    />
                    <div className="t17_div050 spacer-medium hide-mobile-portrait"></div>
                    <div className="t17_div051 blog_contnet-wrapper">
                      <div className="t17_div052 blog_meta-wrapper">
                        <div fs-list-field="category" className="t17_div053">
                          Tech
                        </div>
                        <div className="t17_div054 icon-embed-custom w-embed">
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
                        <div className="t17_div055">Aug 25, 2025</div>
                      </div>
                      <div className="t17_div056 spacer-xmedium"></div>
                      <h3 className="t17_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t17_div057 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t17_div058 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t17_div059 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t17_div060 cms-grid_image"
                    />
                    <div className="t17_div061 spacer-medium hide-mobile-portrait"></div>
                    <div className="t17_div062 blog_contnet-wrapper">
                      <div className="t17_div063 blog_meta-wrapper">
                        <div fs-list-field="category" className="t17_div064">
                          Tech
                        </div>
                        <div className="t17_div065 icon-embed-custom w-embed">
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
                        <div className="t17_div066">Aug 7, 2025</div>
                      </div>
                      <div className="t17_div067 spacer-xmedium"></div>
                      <h3 className="t17_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t17_div068 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t17_div069 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t17_div070 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t17_div071 cms-grid_image"
                    />
                    <div className="t17_div072 spacer-medium hide-mobile-portrait"></div>
                    <div className="t17_div073 blog_contnet-wrapper">
                      <div className="t17_div074 blog_meta-wrapper">
                        <div fs-list-field="category" className="t17_div075">
                          Tech
                        </div>
                        <div className="t17_div076 icon-embed-custom w-embed">
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
                        <div className="t17_div077">Jul 3, 2025</div>
                      </div>
                      <div className="t17_div078 spacer-xmedium"></div>
                      <h3 className="t17_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t17_copy-toast ${showToast ? 't17_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

