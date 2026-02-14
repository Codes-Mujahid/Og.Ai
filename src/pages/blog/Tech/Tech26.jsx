import React, { useEffect, useState } from 'react'
import './Tech26.css'

export default function Tech26() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t26-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t26-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: Why the World Needs Decentralized AI')
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
    <div className="t26_container">
      <div className={`t26_copy-toast ${showToast ? 't26_show' : ''}`}>Link copied!</div>

      <div className="t26_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t26_div002 hide">
          <div className="t26_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t26_div004">Why the World Needs Decentralized AI</div>
        </div>

        <main className="t26_main-wrapper main-wrapper">
          <section className="t26_section_hero section_hero is-vertical">
            <div className="t26_div005 padding-global">
              <div className="t26_div006 container-large">
                <div className="t26_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t26_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t26_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t26_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t26_div008 hero_content-component is-vertical">
                  <div className="t26_div009 blog_meta-wrapper is-white">
                    <div className="t26_div010">Tech</div>
                    <div className="t26_div011 icon-embed-custom w-embed">
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
                    <div className="t26_div012">Feb 20, 2025</div>
                    <div className="t26_div013 icon-embed-custom w-embed">
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
                    <div className="t26_div014">0g</div>
                  </div>

                  <div className="t26_div015 spacer-small"></div>

                  <div className="t26_div016 max-width-large text-align-center">
                    <h1 className="t26_heading heading-style-h3">
                      Why the World Needs Decentralized AI
                    </h1>
                  </div>

                  <div className="t26_div017 spacer-small"></div>

                  <div className="t26_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t26_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t26_div019 icon-embed-xsmall w-embed">
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
                      className="t26_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t26_div020 icon-embed-xsmall w-embed">
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
                      className="t26_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t26_div021 icon-embed-xsmall w-embed">
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

          <section className="t26_section_legal-content section_legal-content">
            <div className="t26_div022 padding-global">
              <div className="t26_div023 padding-section-medium">
                <div className="t26_div024 container-small">
                  <div className="t26_div025">
                    <div className="t26_div026 legal-content_component">
                      <div className="t26_div027 blog-rich-text w-richtext">
                        <p>
                          As AI systems become more powerful and ubiquitous, it’s crucial to
                          pause and ask ourselves: what do we actually want from AI?
                        </p>
                        <p>
                          Do we want AI to be a black box where a handful of corporations
                          control what it knows, how it thinks, and who gets access? Do we
                          want AI to be manipulable, so outputs can be adjusted based on
                          hidden incentives, censorship, or corporate priorities? Do we
                          want AI to be a privilege where only those who can pay high fees
                          or navigate restrictive APIs can tap its full potential?
                        </p>
                        <p>If the answer to the above is no, then the AI we have today is not the AI we want.</p>
                        <p>
                          There’s no doubt that AI models like ChatGPT and DeepSeek are
                          popular and often useful. But these models ultimately lack
                          transparency, data reliability, and accountability because of how
                          they are built, operated, and shared.&nbsp;
                        </p>
                        <p>
                          <strong>
                            What we need is AI that is truly open, verifiable, and
                            accountable—AI that works for everyone, not just the highest
                            bidder.&nbsp;
                          </strong>
                        </p>
                        <h2>Centralized AI is a Dead End</h2>
                        <p>
                          Today, AI is entirely controlled by centralized entities like
                          OpenAI, Google, and Anthropic. While these companies have developed
                          powerful, popular models, their approach is fundamentally flawed,
                          resulting in several critical issues:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Censorship &amp; Limited Transparency</strong>: AI models
                            like GPT-4 operate as black boxes, meaning no one outside OpenAI
                            can verify how they work, what data they use, or whether they
                            are biased. As a result, users must assume the AI is making the
                            right decisions without any way to verify outputs.
                          </li>
                          <li>
                            <strong>Monopoly Power &amp; Cost Barriers</strong>: Running AI
                            workloads requires massive compute power, which is currently
                            controlled by a few large tech firms. Small companies,
                            researchers, and decentralized applications are forced to rely
                            on centralized APIs.
                          </li>
                          <li>
                            <strong>Data Ownership &amp; Privacy Risks</strong>: Today’s
                            AI-driven products are not built for user privacy or independent
                            data ownership. These models rely on user data harvested,
                            monetized, and controlled by corporations.&nbsp;
                          </li>
                          <li>
                            <strong>Limitations to Blockchain Integration</strong>: Today’s
                            AI models require offchain execution and manual data entry. This
                            means centralized AI cannot be a composable part of any onchain
                            environment without an intermediary solution.
                          </li>
                        </ul>
                        <p>
                          Under these conditions, AI remains siloed, centralized, and
                          unaccountable, controlled by a handful of corporations that
                          dictate how AI is built, used, and accessed.
                        </p>
                        <h2>All Offchain AI is Centralized</h2>
                        <p>
                          AI models like DeepSeek and Mistral represent a significant step
                          forward from fully centralized AI services like ChatGPT and Gemini.
                          These open-weight models allow developers to run AI locally,
                          modify models, and customize them without limited APIs or corporate
                          oversight.&nbsp;
                        </p>
                        <p>
                          But while open-weight models are a major improvement over closed
                          AI, they do not fully decentralize AI. Despite reducing corporate
                          gatekeeping, they still rely on offchain hosting, centralized
                          compute, opaque inference processes, and unverifiable outputs—just
                          like traditional closed-source AI.
                        </p>
                        <p>
                          For AI to be truly decentralized, every stage of the AI pipeline—including
                          model training, inference, data availability, and governance—must be
                          secured onchain in a trustless, verifiable way.
                        </p>
                        <figure className="t26_div028 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t26_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee65a36dfb5fbf2d2e_DftLa8F5XBoHWWVNLUh77ZIKn4.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h2>Bringing AI Onchain</h2>
                        <p>
                          Not all onchain AI is built the same. While several blockchain
                          projects are working on AI integrations, their narrower focus results
                          in fragmented AI solutions that rely on multiple external dependencies.
                        </p>
                        <ul role="list">
                          <li>
                            <strong>AI Storage/DA Protocols </strong>like Arweave and EigenDA provide
                            long-term storage or scalable DA layers for AI datasets, training data,
                            and inference outputs. However,&nbsp;
                          </li>
                          <li>
                            <strong>Decentralized Compute Platforms </strong>like Bittensor provide
                            distributed resources to run external AI workloads, and are not stand-alone
                            AI deployment solutions.
                          </li>
                          <li>
                            <strong>AI Agent Marketplaces </strong>let users buy and sell AI data, models,
                            and services. But unlike 0G, these platforms cannot train models or verify agent
                            outputs in-house.
                          </li>
                          <li>
                            <strong>Middleware / Service Layers </strong>like The Graph bridge between AI and
                            blockchains using centralized/external AI APIs. This is a far cry from 0G&apos;s
                            unified AI L1 infrastructure.
                          </li>
                          <li>
                            <strong>AI-Enabled Applications </strong>leverage AI for consumer use cases, but
                            require a robust, low-cost AI infrastructure to function and scale.
                          </li>
                        </ul>
                        <p>
                          0G is the only infrastructure purpose-built to support AI execution, inference,
                          and storage in a way that is truly decentralized, reliable, scalable. Unlike the
                          above categories, 0G’s AI-native L1 encompasses:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Decentralized Storage &amp; Data Availability</strong>, with all AI
                            training occurring natively on 0G.
                          </li>
                          <li>
                            <strong>Verifiable AI Outputs </strong>instead of black-box results, via 0G’s
                            Proof-of-Inference.
                          </li>
                          <li>
                            <strong>Censorship-Resistant Inference Execution</strong>, secured by 0G’s 0G
                            Alignment Nodes.
                          </li>
                          <li>
                            <strong>Fully Composable AI </strong>that can be customized and deployed anywhere
                            onchain.
                          </li>
                        </ul>
                        <p>
                          The result is a user-friendly, full-stack solution that combines and optimizes the
                          entire AI pipeline within a single onchain environment.&nbsp;
                        </p>
                        <h2>Decentralized AI Isn’t Optional—It’s the Only Way Forward</h2>
                        <p>
                          Right now, the world’s leading AI models are in the hands of centralized
                          corporations, throttling industry innovation and leaving users with no way to own,
                          verify, or customize model data and outputs. Even open-weight models, while a step
                          forward, ultimately face the same issues.
                        </p>
                        <p>
                          The only way to make AI trustless, censorship-resistant, and accessible to all is
                          to bring it fully onchain. That means moving beyond fragmented AI solutions and
                          towards a unified, verifiable AI infrastructure that ensures AI models can be
                          stored, trained, and used by anyone.
                        </p>
                        <p>
                          0G is that infrastructure—and we’re offering $8.88 million to ambitious builders
                          who are ready to co-create the future of decentralized AI!
                        </p>
                        <p>
                          <a href="https://app.deform.cc/form/d0326680-f45e-4fe1-9578-4a9e3769e313/?page_number=0">
                            Apply for Guild on 0G today
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t26_section_filter section_filter">
            <div className="t26_div030 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t26_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t26_div031 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t26_div032 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t26_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t26_div033 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t26_img003 cms-grid_image"
                    />
                    <div className="t26_div034 spacer-medium hide-mobile-portrait"></div>
                    <div className="t26_div035 blog_contnet-wrapper">
                      <div className="t26_div036 blog_meta-wrapper">
                        <div className="t26_div037">Tech</div>
                        <div className="t26_div038 icon-embed-custom w-embed">
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
                        <div className="t26_div039">Sep 5, 2024</div>
                      </div>
                      <div className="t26_div040 spacer-xmedium"></div>
                      <h3 className="t26_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t26_div041 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t26_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t26_div042 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t26_img004 cms-grid_image"
                    />
                    <div className="t26_div043 spacer-medium hide-mobile-portrait"></div>
                    <div className="t26_div044 blog_contnet-wrapper">
                      <div className="t26_div045 blog_meta-wrapper">
                        <div className="t26_div046">Tech</div>
                        <div className="t26_div047 icon-embed-custom w-embed">
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
                        <div className="t26_div048">Aug 25, 2025</div>
                      </div>
                      <div className="t26_div049 spacer-xmedium"></div>
                      <h3 className="t26_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS
                        with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t26_div050 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t26_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t26_div051 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t26_img005 cms-grid_image"
                    />
                    <div className="t26_div052 spacer-medium hide-mobile-portrait"></div>
                    <div className="t26_div053 blog_contnet-wrapper">
                      <div className="t26_div054 blog_meta-wrapper">
                        <div className="t26_div055">Tech</div>
                        <div className="t26_div056 icon-embed-custom w-embed">
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
                        <div className="t26_div057">Aug 7, 2025</div>
                      </div>
                      <div className="t26_div058 spacer-xmedium"></div>
                      <h3 className="t26_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI
                        Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t26_div059 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t26_a007 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t26_div060 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t26_img006 cms-grid_image"
                    />
                    <div className="t26_div061 spacer-medium hide-mobile-portrait"></div>
                    <div className="t26_div062 blog_contnet-wrapper">
                      <div className="t26_div063 blog_meta-wrapper">
                        <div className="t26_div064">Tech</div>
                        <div className="t26_div065 icon-embed-custom w-embed">
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
                        <div className="t26_div066">Jul 3, 2025</div>
                      </div>
                      <div className="t26_div067 spacer-xmedium"></div>
                      <h3 className="t26_heading5 heading-style-h5">0G Storage: Built for the AI Era</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

