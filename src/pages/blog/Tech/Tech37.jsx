import React, { useEffect, useState } from 'react'
import './Tech37.css'

export default function Tech37() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t37-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t37-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: Overview of AI Agents')
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
    <div className="t37_container">
      <div className={`t37_copy-toast ${showToast ? 't37_show' : ''}`}>Link copied</div>

      <div className="t37_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t37_div002 hide">
          <div className="t37_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t37_div004">Overview of AI Agents</div>
        </div>

        <main className="t37_main-wrapper main-wrapper">
          <section className="t37_section_hero section_hero is-vertical">
            <div className="t37_div005 padding-global">
              <div className="t37_div006 container-large">
                <div className="t37_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t37_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t37_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t37_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t37_div009 hero_content-component is-vertical">
                  <div className="t37_div010 blog_meta-wrapper is-white">
                    <div className="t37_div011">Tech</div>
                    <div className="t37_div012 icon-embed-custom w-embed">
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
                    <div className="t37_div013">Oct 8, 2024</div>
                    <div className="t37_div014 icon-embed-custom w-embed">
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
                    <div className="t37_div015">0g</div>
                  </div>

                  <div className="t37_div016 spacer-small"></div>

                  <div className="t37_div017 max-width-large text-align-center">
                    <h1 className="t37_h1_001 heading-style-h3">Overview of AI Agents</h1>
                  </div>

                  <div className="t37_div018 spacer-small"></div>

                  <div className="t37_div019 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t37_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t37_div020 icon-embed-xsmall w-embed">
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
                      className="t37_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t37_div021 icon-embed-xsmall w-embed">
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
                      className="t37_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t37_div022 icon-embed-xsmall w-embed">
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

          <section className="t37_section_legal-content section_legal-content">
            <div className="t37_div023 padding-global">
              <div className="t37_div024 padding-section-medium">
                <div className="t37_div025 container-small">
                  <div className="t37_div026">
                    <div className="t37_div027 legal-content_component">
                      <div className="t37_div028 blog-rich-text w-richtext">
                        <p>
                          <strong>AI Agents are a killer Crypto AI use case</strong> that not enough people are talking
                          about, and an area that we expect to grow exponentially in the coming years.
                        </p>
                        <p>
                          They refer to software designed to autonomously execute on-chain tasks, leveraging advanced AI
                          models and tools to analyze data. As Web3 is becoming increasingly more complex, humans cannot
                          manage the intricate relationships formed between all possible on-chain users, smart contracts,
                          and bots. For example, it’s already impossible to manually optimize yield across various
                          projects and networks, let alone to do the advanced tasks that AI Agents are capable of.
                        </p>
                        <p>
                          0G is proud to provide the infrastructure that brings AI Agents to life, with partnerships
                          already formed with AI Agent ecosystem players like Theoriq and Talus.
                        </p>
                        <p>In this article we’ll cover:</p>
                        <ul role="list">
                          <li>
                            <strong>What Are AI Agents?</strong>: An introduction to AI Agents, exploring their
                            definition, capabilities, and how they function autonomously within complex environments.
                          </li>
                          <li>
                            <strong>AI Agents in Web3</strong>: How AI Agents are revolutionizing the Web3 landscape by
                            managing intricate on-chain tasks and optimizing decentralized systems.
                          </li>
                          <li>
                            <strong>0G’s Role in Supporting AI Agents</strong>: A look at how 0G provides the necessary
                            infrastructure, including data storage and verification, to empower AI Agents in
                            decentralized ecosystems.
                          </li>
                        </ul>
                        <p>
                          <strong>What are AI Agents?</strong>
                        </p>
                        <p>
                          AI Agents refer to highly complex computer programs designed to function autonomously,
                          handling complex tasks related to decision-making, planning, and task execution. Typically,
                          they use Large Language Models (LLMs) on the backend, with customization and detailed
                          workflows to make them appropriate for any use case of interest.
                        </p>
                        <p>
                          Prior to advancements in LLMs and on-chain infrastructure, the concept of AI Agents revolved
                          around simple rule-based systems. Today’s AI Agents have transformed into sophisticated
                          systems capable of learning, reasoning, and making decisions independently.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t37_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f653e7576792b48c7e_DgzIaQjhz19HMLhBzfMKY2tfNt0.avif"
                              loading="lazy"
                              className="t37_img003"
                            />
                          </div>
                        </figure>
                        <p>Some existing use cases include:</p>
                        <ul role="list">
                          <li>
                            <strong>DAOs:</strong> AI-driven governance or treasury management.
                          </li>
                          <li>
                            <strong>DeFi:</strong> Liquidity optimization, sentiment analysis, intent-solvers, etc.
                          </li>
                          <li>
                            <strong>Content: </strong>Automated on-chain content curation and creation.
                          </li>
                          <li>
                            <strong>Entertainment and Gaming: </strong>Personalized gaming experiences, A.I. non-playable
                            characters, etc.
                          </li>
                          <li>
                            <strong>Assistants: </strong>Chatbots, personal assistants, content curators, recommendation
                            engines, etc.
                          </li>
                          <li>
                            <strong>AI and Data Ecosystem:</strong> New crowd-funding models, monetization of specialized
                            models, and collaboration between model developers and data providers.
                          </li>
                        </ul>
                        <p>
                          Within Web3, the proliferation of AI Agents is already rapidly increasing due to their ability
                          to navigate the complexities of decentralized systems. As this technology evolves, leading
                          innovators are exploring how these autonomous systems can significantly advance decentralized
                          ecosystems.
                        </p>
                        <p>
                          For example,{' '}
                          <a href="https://dain.org/">
                            <strong>Dain Protocol</strong>
                          </a>{' '}
                          has a platform for building and monetizing DeFi-focused Agents,{' '}
                          <a href="https://www.brianknows.org/">
                            <strong>BrianKnows</strong>
                          </a>{' '}
                          is building Agents that convert text prompts into transactions and data retrievals, and{' '}
                          <a href="https://www.cognition.ai/blog/introducing-devin">
                            <strong>Devin</strong>
                          </a>{' '}
                          can write code and execute GitHub pull requests.&nbsp;
                        </p>
                        <p>
                          Meanwhile, 0G’s partners <a href="https://www.theoriq.ai/">Theoriq</a> and{' '}
                          <a href="https://talus.network/">Talus</a> are building out platforms for the decentralization
                          creation and management of AI agents, which we’ll cover below.
                        </p>
                        <p>
                          <strong>How Do AI Agents Work?</strong>
                        </p>
                        <p>
                          AI Agents typically are built on top of Large Language Models (LLMs) such as{' '}
                          <a href="https://openai.com/index/gpt-4/">OpenAI’s GPT-4</a>,{' '}
                          <a href="https://llama.meta.com/llama2/">Meta’s LLaMa 2</a>, or{' '}
                          <a href="https://ai.google/discover/palm2/">Google’s PaLM 2</a>. While some build their own
                          proprietary algorithms, this can be challenging due to the immense resources required to
                          effectively compete with big players. An interesting use case is{' '}
                          <a href="https://www.assisterr.ai/">Assisterr</a> (also a 0G partner), who are using Small
                          Language Models (SLMs) instead, referring to smaller yet more specialized models that can be
                          especially important for business use cases.
                        </p>
                        <p>AI Agents operate by incorporating the following elements:</p>
                        <ul role="list">
                          <li>
                            <strong>Task-Specific Modules:</strong> Tailored to the agent&apos;s specific purpose, such
                            as interacting with external databases, integrating additional models, or building complex
                            data pipelines to handle specialized tasks.
                          </li>
                          <li>
                            <strong>Memory: </strong>Allowing agents to retain context or information from past
                            interactions and improve decision-making over time.
                          </li>
                          <li>
                            <strong>Action Modules:</strong> These modules interpret the outputs generated by the LLM
                            and convert them into actions, such as making API calls, controlling devices, or producing
                            specific outputs like code or structured data.
                          </li>
                          <li>
                            <strong>Environment Interface:</strong> AI Agents interact with their surroundings using
                            APIs, sensors, or user interfaces. This might involve retrieving information from the web,
                            controlling smart devices, or responding to user commands.
                          </li>
                        </ul>
                        <p>
                          <strong>Agents in action with 0G</strong>
                        </p>
                        <p>Two projects we&apos;re particularly excited about are already partners of ours:</p>
                        <ol role="list">
                          <li>
                            <a href="https://www.theoriq.ai/">
                              <strong>Theoriq</strong>
                            </a>
                            <strong>: </strong>A decentralized protocol designed to govern and facilitate the creation,
                            interaction, and optimization of “Agent Collectives”. These refer to a collection of AI
                            agents collaborating to solve complex tasks more effectively than individual agents.
                          </li>
                          <li>
                            <a href="https://talus.network/">
                              <strong>Talus</strong>
                            </a>
                            : An IBC-compatible Layer 1 and decentralized Smart Agent hub that allows users to access,
                            provide, and collaboratively build AI Agents and AI models using the Sui Move language for
                            horizontal scalability.&nbsp;
                          </li>
                        </ol>
                        <p>
                          Given the vast amount of datasets, users, and blockchain ecosystems both projects must
                          support, 0G’s data storage system and DA capabilities play a key role in helping them
                          scale.&nbsp;
                        </p>
                        <p>
                          Theoriq will have Agent Collectives seeking to analyze on-chain DeFi data for a new
                          decentralized finance (DeFi) project, perform advanced analytics, trade with smart contracts,
                          and generate a report. 0G can quickly query and verify any relevant data while also providing
                          data availability guarantees. Projects within the 0G ecosystem (including other networks and
                          dApps) can also connect to Theoriq to use their Agent Collectives. Theorqie recently raised{' '}
                          <a href="https://www.theblock.co/post/294078/web3-ai-platform-chainml-funding-theoriq">$6.2M</a>{' '}
                          to bring their vision to reality.&nbsp;
                        </p>
                        <p>
                          Meanwhile, Talus Network derives similar benefits as Agents may access AI models and datasets
                          hosted on either 0G or an external network, at unprecedented speeds. Talus recently raised{' '}
                          <a href="https://cointelegraph.com/press-releases/talus-network-raises-3m-in-funding-led-by-polychain-capital-to-democratize-onchain-ai-with-move">
                            $3M
                          </a>{' '}
                          to bring this to life.
                        </p>
                        <p>
                          A significant part of this entails users of Theoriq being able to store data using 0G Storage
                          or leverage any data or AI Models already stored on 0G. Meanwhile,
                        </p>
                        <p>
                          <strong>Final Remarks on Agents</strong>
                        </p>
                        <p>The AI Agent space is still early, in part due to the technology necessary to support it has only recently evolved.</p>
                        <p>0G is proud to be helping scale this crucial sector, through both:</p>
                        <ul role="list">
                          <li>
                            <a href="https://0g.ai/blog/0g-storage">
                              <strong>0G Storage:</strong>
                            </a>{' '}
                            Interoperable Web2/Web3 data storage for AI Agents.
                          </li>
                          <li>
                            <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                              <strong>0G DA:</strong>
                            </a>
                            <strong> </strong>Fast data verification and querying for AI Agents.
                          </li>
                        </ul>
                        <p>
                          It has become clear that AI Agents will not only serve as tools for both Web3 users and
                          protocols but will also help navigate Web3’s increasingly complex landscape.
                        </p>
                        <p>
                          If you’re interested in how 0G can help you build out the future of Crypto AI, please{' '}
                          <a href="https://0g.ai/contact">reach out here.</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t37_section_filter section_filter">
            <div className="t37_div030 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t37_div031 w-dyn-list t37_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t37_div032 cms-grid_list w-dyn-items">
              <div role="listitem" className="t37_div033 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t37_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t37_div034 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t37_img004 cms-grid_image"
                    />
                    <div className="t37_div035 spacer-medium hide-mobile-portrait"></div>
                    <div className="t37_div036 blog_contnet-wrapper">
                      <div className="t37_div037 blog_meta-wrapper">
                        <div className="t37_div038">Tech</div>
                        <div className="t37_div039 icon-embed-custom w-embed">
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
                        <div className="t37_div040">Sep 5, 2024</div>
                      </div>
                      <div className="t37_div041 spacer-xmedium"></div>
                      <h3 className="t37_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t37_div042 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t37_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t37_div043 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t37_img005 cms-grid_image"
                    />
                    <div className="t37_div044 spacer-medium hide-mobile-portrait"></div>
                    <div className="t37_div045 blog_contnet-wrapper">
                      <div className="t37_div046 blog_meta-wrapper">
                        <div className="t37_div047">Tech</div>
                        <div className="t37_div048 icon-embed-custom w-embed">
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
                        <div className="t37_div049">Aug 25, 2025</div>
                      </div>
                      <div className="t37_div050 spacer-xmedium"></div>
                      <h3 className="t37_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t37_div051 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t37_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t37_div052 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t37_img006 cms-grid_image"
                    />
                    <div className="t37_div053 spacer-medium hide-mobile-portrait"></div>
                    <div className="t37_div054 blog_contnet-wrapper">
                      <div className="t37_div055 blog_meta-wrapper">
                        <div className="t37_div056">Tech</div>
                        <div className="t37_div057 icon-embed-custom w-embed">
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
                        <div className="t37_div058">Aug 7, 2025</div>
                      </div>
                      <div className="t37_div059 spacer-xmedium"></div>
                      <h3 className="t37_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t37_div060 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t37_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t37_div061 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t37_img007 cms-grid_image"
                    />
                    <div className="t37_div062 spacer-medium hide-mobile-portrait"></div>
                    <div className="t37_div063 blog_contnet-wrapper">
                      <div className="t37_div064 blog_meta-wrapper">
                        <div className="t37_div065">Tech</div>
                        <div className="t37_div066 icon-embed-custom w-embed">
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
                        <div className="t37_div067">Jul 3, 2025</div>
                      </div>
                      <div className="t37_div068 spacer-xmedium"></div>
                      <h3 className="t37_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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
