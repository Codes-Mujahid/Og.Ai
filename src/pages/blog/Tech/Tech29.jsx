import React, { useEffect, useState } from 'react'
import './Tech29.css'

export default function Tech29() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t29-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t29-webflow', 'true')
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
      'Check out this insightful blog post: Guild on 0G: A New Frontier for Decentralized AI Builders'
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
    <div className="t29_container">
      <div className={`t29_copy-toast ${showToast ? 't29_show' : ''}`}>Link copied</div>

      <div className="t29_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t29_div002 hide">
          <div className="t29_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t29_div004">
            Guild on 0G: A New Frontier for Decentralized AI Builders
          </div>
        </div>

        <main className="t29_main-wrapper main-wrapper">
          <section className="t29_section_hero section_hero is-vertical">
            <div className="t29_div005 padding-global">
              <div className="t29_div006 container-large">
                <div className="t29_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t29_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t29_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t29_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t29_div008 hero_content-component is-vertical">
                  <div className="t29_div009 blog_meta-wrapper is-white">
                    <div className="t29_div010">Tech</div>
                    <div className="t29_div011 icon-embed-custom w-embed">
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
                    <div className="t29_div012">Feb 15, 2025</div>
                    <div className="t29_div013 icon-embed-custom w-embed">
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
                    <div className="t29_div014">0g</div>
                  </div>

                  <div className="t29_div015 spacer-small"></div>

                  <div className="t29_div016 max-width-large text-align-center">
                    <h1 className="t29_heading heading-style-h3">
                      Guild on 0G: A New Frontier for Decentralized AI Builders
                    </h1>
                  </div>

                  <div className="t29_div017 spacer-small"></div>

                  <div className="t29_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t29_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t29_div019 icon-embed-xsmall w-embed">
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
                      className="t29_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t29_div020 icon-embed-xsmall w-embed">
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
                      className="t29_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t29_div021 icon-embed-xsmall w-embed">
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

          <section className="t29_section_legal-content section_legal-content">
            <div className="t29_div022 padding-global">
              <div className="t29_div023 padding-section-medium">
                <div className="t29_div024 container-small">
                  <div className="t29_div025">
                    <div className="t29_div026 legal-content_component">
                      <div className="t29_div027 blog-rich-text w-richtext">
                        <p>
                          The future of AI is decentralized, and 0G is building the operating system
                          for it. As the largest L1 for AI, 0G provides the infrastructure, compute,
                          and storage needed to power the next generation of decentralized AI
                          applications.
                        </p>
                        <p>
                          Now, with the launch of Guild on 0G, we are inviting builders, creators,
                          and visionaries to experiment, design, and deploy AI-powered applications
                          directly on 0G. This program offers over $8.88 million in prizes, grants,
                          and gas credits for participants who join us in accelerating the
                          development of verifiable, permissionless AI experiences that will define
                          the future of web3.
                        </p>
                        <p>
                          <a href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/">
                            <strong>Apply for the Guild on 0G</strong>
                          </a>
                        </p>
                        <p>
                          If you&apos;re a builder looking to leverage AI in a decentralized
                          environment, let’s take a closer look at why 0G is the best place to
                          build, how you can get started, and what key verticals we’re actively
                          seeking to grow.
                        </p>
                        <h2>Why Guild on 0G?</h2>
                        <p>
                          With{' '}
                          <a href="https://0g.ai/blog/0g-ecosystem-receives-290m-in-financing-to-develop-world-s-first-decentralized-ai-operating-system">
                            $325M+ raised
                          </a>
                          , 0G is one of the best-capitalized AI blockchains. Over 300 projects are
                          already partnered with us, including major players like Alibaba, Ora, OP,
                          and more. Additionally, our $88M Ecosystem Fund is actively supporting
                          projects that align with our mission.
                        </p>
                        <p>
                          To that end, Guild on 0G is a builder-focused initiative that rewards
                          innovation, experimentation, and the development of AI applications that
                          take full advantage of 0G’s modular, AI-first onchain infrastructure.
                          Builders will have early access to 0G’s testnet in order to develop system
                          familiarity, develop new use cases, and hit the floor running upon
                          mainnet launch.
                        </p>
                        <h2>
                          <strong>The First AI-Native Layer 1</strong>
                        </h2>
                        <p>
                          Unlike existing on-chain AI solutions that operate as mere wrappers around
                          centralized AI models, 0G is the first true AI-native L1—a purpose-built
                          Decentralized AI Operating System (deAIOS) that includes:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Verifiable storage</strong>: A decentralized storage network
                            optimized for massive data loads.
                          </li>
                          <li>
                            <strong>Verifiable compute &amp; AI inference marketplace</strong>:
                            Enabling decentralized model training and execution.
                          </li>
                        </ul>
                        <h2>
                          <strong>The Best AI-Native Layer 1</strong>
                        </h2>
                        <p>
                          Guild on 0G participants will receive direct funding for their AI dApps,
                          in addition to technical mentorship and support from the 0G team and
                          ecosystem partners. On top of that, selected projects will be eligible for
                          exclusive co-marketing and promotion within the 0G network. But beyond
                          that, there are several other reasons why 0G is the go-to ecosystem for
                          bringing your onchain AI application to life:&nbsp;
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Strong Ecosystem &amp; Funding Support</strong>: With $325M+
                            raised, 0G is one of the best-capitalized AI blockchains. Over 300
                            projects are already partnered with us, including major players like
                            Alibaba, Ora, OP, and more. Additionally, our $188M Ecosystem Fund is
                            actively supporting projects that align with our mission.
                          </li>
                          <li>
                            <strong>Developer-Friendly Infrastructure</strong>: 0G is fully
                            EVM-compatible, meaning dApps from Ethereum and other chains can easily
                            integrate. Additionally, new AI primitives like{' '}
                            <a href="https://0g.ai/blog/0g-introducing-erc-7857">ERC-7857</a> (iNFTs)
                            enable AI agents to be tokenized, owned, and traded in web3.
                          </li>
                          <li>
                            <strong>Democratized Participation</strong>: We’re not just another
                            VC-funded chain. 0G is committed to community ownership, allowing retail
                            investors, independent developers, and researchers to participate in
                            shaping the future of DeAI.
                          </li>
                        </ul>
                        <h2>
                          <strong>What Can You Build?</strong>
                        </h2>
                        <p>
                          The Guild on 0G is looking for AI-powered applications that take advantage
                          of 0G’s AI-native infrastructure, and there are no limits to what use case
                          or sector your project can focus on. That said, here are a few key
                          verticals we are interested in building out:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>AI Agents &amp; DFAI</strong>: Building autonomous AI-powered
                            financial and decision-making systems.
                          </li>
                          <li>
                            <strong>Intelligent DeFi</strong>: Next-gen DeFi applications and
                            protocols that leverage on-chain intelligence, from smart wallets to
                            AI-powered yield farming protocols.
                          </li>
                          <li>
                            <strong>Decentralized Science (DeSci)</strong>: AI-driven research and
                            knowledge-sharing networks.
                          </li>
                          <li>
                            <strong>AI-Enabled Games</strong>: Games powered by AI models running
                            entirely on-chain.
                          </li>
                          <li>
                            <strong>iNFTs &amp; Intelligent Content</strong>: Next-gen entertainment
                            protocols that redefine creator-fan experiences.
                          </li>
                        </ul>
                        <h2>
                          <strong>How to Get Started</strong>
                        </h2>
                        <p>
                          Ready to get started? Developers who want to build on 0G will go through a
                          structured five-stage process to ensure the best projects receive support:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Application Submission:</strong>{' '}
                            <a href="https://app.deform.cc/form/da4fc5f6-1836-42fc-b95b-84f43ce1bdf2/">
                              Complete your project proposal{' '}
                            </a>
                            once all the details are in place.
                          </li>
                          <li>
                            <strong>Team &amp; Product Review: </strong>The 0G team assesses your
                            project’s technical feasibility, roadmap viability, and team
                            capabilities.
                          </li>
                          <li>
                            <strong>Ecosystem Synergy Review: </strong>Applications are evaluated
                            based on how well the project integrates within the broader 0G
                            ecosystem.
                          </li>
                          <li>
                            <strong>Technical Support &amp; Mentorship: </strong>Approved projects
                            receive hands-on technical support, partnership opportunities, and
                            marketing amplification.
                          </li>
                          <li>
                            <strong>Final Terms &amp; Capital Allocation: </strong>Eligible{' '}
                            <strong> </strong>projects will receive funding of up to $200K through
                            grants, investments, or ecosystem incentives.
                          </li>
                        </ol>
                        <h2>
                          <strong>Stay Connected</strong>
                        </h2>
                        <p>
                          The world needs an open, decentralized AI ecosystem. Guild on 0G is a call
                          to action for developers to build that future. Whether you are working on
                          AI-powered finance, gaming, science, or creative applications, 0G provides
                          the infrastructure, funding, and support to bring your ideas to life.
                        </p>
                        <p>Let’s build the future of AI together.</p>
                        <ul role="list">
                          <li>
                            <a href="https://x.com/0G_labs">Follow 0G Labs on X</a> for the latest
                            updates
                          </li>
                          <li>
                            <a href="https://discord.com/invite/0glabs">Join the 0G Discord</a> to
                            connect with the team and community
                          </li>
                        </ul>
                        <p>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t29_section_filter section_filter">
            <div className="t29_div028 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t29_div029 w-dyn-list t29_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t29_div030 cms-grid_list w-dyn-items">
              <div role="listitem" className="t29_div031 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t29_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t29_div032 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t29_img003 cms-grid_image"
                    />
                    <div className="t29_div033 spacer-medium hide-mobile-portrait"></div>
                    <div className="t29_div034 blog_contnet-wrapper">
                      <div className="t29_div035 blog_meta-wrapper">
                        <div className="t29_div036">Tech</div>
                        <div className="t29_div037 icon-embed-custom w-embed">
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
                        <div className="t29_div038">Sep 5, 2024</div>
                      </div>
                      <div className="t29_div039 spacer-xmedium"></div>
                      <h3 className="t29_h3_001 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t29_div040 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t29_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t29_div041 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t29_img004 cms-grid_image"
                    />
                    <div className="t29_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t29_div043 blog_contnet-wrapper">
                      <div className="t29_div044 blog_meta-wrapper">
                        <div className="t29_div045">Tech</div>
                        <div className="t29_div046 icon-embed-custom w-embed">
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
                        <div className="t29_div047">Aug 25, 2025</div>
                      </div>
                      <div className="t29_div048 spacer-xmedium"></div>
                      <h3 className="t29_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits
                        11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t29_div049 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t29_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t29_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t29_img005 cms-grid_image"
                    />
                    <div className="t29_div051 spacer-medium hide-mobile-portrait"></div>
                    <div className="t29_div052 blog_contnet-wrapper">
                      <div className="t29_div053 blog_meta-wrapper">
                        <div className="t29_div054">Tech</div>
                        <div className="t29_div055 icon-embed-custom w-embed">
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
                        <div className="t29_div056">Aug 7, 2025</div>
                      </div>
                      <div className="t29_div057 spacer-xmedium"></div>
                      <h3 className="t29_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+
                        Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t29_div058 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t29_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t29_div059 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t29_img006 cms-grid_image"
                    />
                    <div className="t29_div060 spacer-medium hide-mobile-portrait"></div>
                    <div className="t29_div061 blog_contnet-wrapper">
                      <div className="t29_div062 blog_meta-wrapper">
                        <div className="t29_div063">Tech</div>
                        <div className="t29_div064 icon-embed-custom w-embed">
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
                        <div className="t29_div065">Jul 3, 2025</div>
                      </div>
                      <div className="t29_div066 spacer-xmedium"></div>
                      <h3 className="t29_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

