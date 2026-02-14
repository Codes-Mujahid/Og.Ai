import React, { useEffect, useState } from 'react'
import './Tech14.css'

export default function Tech14() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t14-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t14-webflow', 'true')
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
      'Check out this insightful blog post: True AI Ownership vs API Access: Returning Power to the Builders'
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
    <div className="t14_container">
      <div className="t14_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t14_hide hide">
          <div className="t14_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t14_socialshare-title">
            True AI Ownership vs API Access: Returning Power to the Builders
          </div>
        </div>

        <main className="t14_main-wrapper main-wrapper">
          <section className="t14_section_hero section_hero t14_is-vertical is-vertical">
            <div className="t14_padding-global1 padding-global">
              <div className="t14_container-large container-large">
                <div className="t14_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t14_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t14_hero_bg-image2 hero_bg-image t14_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t14_hero_bg-gradient hero_bg-gradient t14_is-blog is-blog"></div>
                </div>

                <div className="t14_hero_content-component hero_content-component t14_is-vertical2 is-vertical">
                  <div className="t14_blog_meta-wrapper1 blog_meta-wrapper t14_is-white is-white">
                    <div className="t14_blog_meta-category">Tech</div>
                    <div className="t14_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t14_blog_meta-date">Apr 15, 2025</div>
                    <div className="t14_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t14_blog_meta-author">0g</div>
                  </div>

                  <div className="t14_spacer-small1 spacer-small"></div>

                  <div className="t14_max-width-large max-width-large t14_text-align-center text-align-center">
                    <h1 className="t14_heading-style-h3 heading-style-h3">
                      True AI Ownership vs API Access: Returning Power to the
                      Builders
                    </h1>
                  </div>

                  <div className="t14_spacer-small2 spacer-small"></div>

                  <div className="t14_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t14_link-icon-light1 link-icon-light t14_is-static1 is-static w-inline-block"
                    >
                      <div className="t14_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t14_link-icon-light2 link-icon-light t14_is-static2 is-static w-inline-block"
                    >
                      <div className="t14_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t14_link-icon-light3 link-icon-light t14_is-static3 is-static w-inline-block"
                    >
                      <div className="t14_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t14_section_legal-content section_legal-content">
            <div className="t14_padding-global2 padding-global">
              <div className="t14_padding-section-medium padding-section-medium">
                <div className="t14_container-small container-small">
                  <div className="t14_legal_outer">
                    <div className="t14_legal-content_component legal-content_component">
                      <div className="t14_blog-rich-text blog-rich-text w-richtext">
                        <p>Today, most people don’t own the AI they use. They rent it.</p>
                        <p>
                          Sure, the current wave of AI innovation is producing more intelligent
                          outputs, but it’s also reinforcing outdated, centralized architectures
                          of control. Whether you’re using OpenAI’s ChatGPT or Anthropic’s
                          Claude, your interactions with AI are mediated through centralized
                          APIs. This gated access means users can’t see how a model works,
                          transfer it, or modify its behavior outside the narrow parameters
                          allowed by the provider.&nbsp;
                        </p>
                        <p>
                          If that sounds familiar, it should. It’s the same dynamic that web3
                          was designed to overcome in finance, organizational governance, and
                          beyond. And now, AI is the next frontier. What platforms like 0G
                          enable is the ability to take AI agents out of the sandbox and into
                          programmable, ownable, modular systems. This is an essential step
                          forward for AI as a whole, a paradigm shift that is less about how
                          smart models are, and more about how they’re accessed and what kind
                          of ownership structures will define the next generation of
                          intelligence.
                        </p>
                        <h2>The Illusion of Ownership</h2>
                        <p>
                          API access is often mistaken for AI democratization. But accessibility
                          does not equal autonomy. When your AI tools are gated by keys, rate
                          limits, black-box logic, and centralized moderation policies, you’re
                          integrating someone else’s SaaS product.&nbsp;
                        </p>
                        <p>
                          This includes open-source-inspired setups like Mistral-powered
                          chatbots hosted on Hugging Face, which are locked into static
                          delivery architectures. And even the growing crop of “agentic
                          wrappers” like Personal.ai and Jan.ai rely on proprietary backend
                          infrastructure and retain unilateral control over how agents operate,
                          how data is stored, and how usage is monetized. These aren’t sovereign
                          digital beings. They’re centralized services with a custom frontend
                          and a chatty UX.
                        </p>
                        <p>
                          What’s more, even open-source models lose their flexibility once
                          deployed into these managed, containerized environments. A developer
                          might fine-tune a LLaMA model or run a local instance of DeepSeek,
                          but once it’s packaged as an endpoint, it’s effectively a black box
                          all over again.
                        </p>
                        <p>
                          This also reflects the key bottleneck in the current “onchain AI”
                          movement. Many purported onchain AI projects claim to be
                          decentralized, but in practice rely on hosted endpoints and opaque
                          inference layers. Even token-wrapped models typically represent
                          rights to use an AI model, not to own or govern its behavior, logic,
                          or value accrual. This falls short of web3’s core promise of
                          verifiable, programmable ownership.&nbsp;
                        </p>
                        <h2>What True AI Ownership Looks Like</h2>
                        <p>
                          Owning an AI agent shouldn’t just mean having the right to execute
                          inferences. It should mean full agent composability, portability, and
                          the ability to deploy your model wherever you want:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Composability</strong>: Your agent can plug into other
                            systems, contracts, and agents. It can borrow logic, share
                            resources, or respond to programmable incentives.&nbsp;
                          </li>
                          <li>
                            <strong>Portability</strong>: You can transfer your self-contained
                            agent, along with its behavior, identity, and memory, across
                            wallets, dApps, chains, or decentralized marketplaces without
                            rebuilding.
                          </li>
                          <li>
                            <strong>Deployability</strong>: You should decide where your agent
                            lives and how it runs, rather than relying on someone else&apos;s
                            server or API key.
                          </li>
                        </ul>
                        <p>
                          None of this is possible under the current model of centrally hosted
                          APIs. Centralized endpoints are inherently non-transferable,
                          non-programmable, and non-interoperable. As such, the world needs a
                          new agent model that is not tethered to hosted endpoints and can move
                          between different owners, contracts, and compute environments.
                        </p>
                        <h2>0G’s ERC-7857 Standard Enables True AI Ownership</h2>
                        <p>
                          To make AI truly ownable, we need new standards for how they are
                          packaged, owned, and shared across ecosystems. That’s where ERC-7857,
                          0G’s new token standard for intelligent NFTs (iNFTs), comes in.
                        </p>
                        <p>
                          ERC-7857 defines a schema for turning AI agents into composable,
                          transferable assets that can live fully onchain, evolve over time,
                          and interact with other agents and applications.
                        </p>
                        <p>Key features include:</p>
                        <ul role="list">
                          <li>
                            <strong>Agent-as-Asset Design</strong>: Each iNFT carries the
                            identity, logic, and access keys for a specific AI agent. This
                            enables agents to be stored, referenced, and exchanged like any
                            other token.
                          </li>
                          <li>
                            <strong>Transferability with Memory</strong>: iNFTs can be bought,
                            sold, or moved across wallets with persistent state, including
                            memory, behavior configs, usage history, and reputation data.
                          </li>
                          <li>
                            <strong>Permissionless Interoperability</strong>: Agents built using
                            ERC-7857 can interact with any smart contract or dApp that supports
                            the standard. This opens the door to multi-agent environments,
                            auctions, onchain tournaments, and beyond.
                          </li>
                          <li>
                            <strong>Modular Hooks</strong>: Developers can attach custom logic to
                            each iNFT (ex: rate limits, staking rules, royalty logic) to unlock
                            new possibilities in programmable behavior.
                          </li>
                        </ul>
                        <h2>From API Access to Full AI Agency</h2>
                        <p>
                          If the rapid growth of web3 has taught us anything, it’s that
                          permissionless infrastructure beats closed platforms in the long run.
                          The same will be true for AI, if we build it that way.
                        </p>
                        <p>
                          AI will radically reshape business and society in the coming decades.
                          But unless we change how it’s controlled and shared, we risk repeating
                          the centralization mistakes of legacy tech. As we approach the next
                          wave of AI and blockchain convergence, we need to ask ourselves
                          whether we’re rebuilding the same walled gardens, or opening up an
                          entirely new design space.
                        </p>
                        <p>
                          By combining ERC-7857 with 0G’s full-stack Artificial Intelligence
                          Layer, which includes&nbsp; high-throughput inference, decentralized
                          storage, and onchain DA, we enable truly permissionless AI economies
                          where agents can{' '}
                          <a href="https://0g.ai/blog/how-ai-will-adapt-in-web3">
                            evolve, compete, and cooperate freely
                          </a>
                          . Within this system, the agent itself is the unit of value, not the
                          API.
                        </p>
                        <p>
                          ERC-7857 is a standard, but it’s also a statement: AI belongs in the
                          hands of builders, not gatekeepers. So let’s stop treating AI like a
                          product, and more like a public good.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t14_section_filter section_filter">
            <div className="t14_blog_more-blog blog_more-blog">
              <h5 className="t14_related-title">Related news:</h5>
            </div>
          </section>

          <div className="t14_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t14_cms-grid_list cms-grid_list t14_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t14_cms-grid_item1 cms-grid_item t14_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t14_cms-grid_content-wrapper1 cms-grid_content-wrapper t14_is-blog1 is-blog t14_w-inline-block1 w-inline-block"
                >
                  <div className="t14_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t14_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t14_spacer-medium1 spacer-medium t14_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t14_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t14_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t14_related_category1">Tech</div>
                        <div className="t14_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t14_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t14_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t14_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t14_cms-grid_item2 cms-grid_item t14_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t14_cms-grid_content-wrapper2 cms-grid_content-wrapper t14_is-blog2 is-blog t14_w-inline-block2 w-inline-block"
                >
                  <div className="t14_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t14_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t14_spacer-medium2 spacer-medium t14_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t14_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t14_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t14_related_category2">Tech</div>
                        <div className="t14_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t14_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t14_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t14_heading-style-h5 heading-style-h5">
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
                className="t14_cms-grid_item3 cms-grid_item t14_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t14_cms-grid_content-wrapper3 cms-grid_content-wrapper t14_is-blog3 is-blog t14_w-inline-block3 w-inline-block"
                >
                  <div className="t14_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t14_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t14_spacer-medium3 spacer-medium t14_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t14_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t14_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t14_related_category3">Tech</div>
                        <div className="t14_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t14_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t14_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t14_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t14_cms-grid_item4 cms-grid_item t14_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t14_cms-grid_content-wrapper4 cms-grid_content-wrapper t14_is-blog4 is-blog t14_w-inline-block4 w-inline-block"
                >
                  <div className="t14_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t14_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t14_spacer-medium4 spacer-medium t14_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t14_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t14_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t14_related_category4">Tech</div>
                        <div className="t14_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t14_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t14_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t14_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t14_copy-toast ${showToast ? 't14_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

