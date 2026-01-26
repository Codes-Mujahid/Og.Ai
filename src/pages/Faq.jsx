import { useEffect, useRef } from 'react'
import './Faq.css'

const htmlContent = `
  <div class="faq-page">
  <div class="faq_image-wrapper">
    <div class="faq_image">
      <img
        src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group.avif"
        loading="lazy"
        sizes="100vw"
        srcset="https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0f3f115b69034dbe4204_Mask%20group.avif 3024w"
        alt=""
        class="faq_bg-image"
      />
      <div class="faq_blur show-mobile-landscape"></div>
    </div>
    <section class="section_faq">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-large">
            <div class="faq_component">
              <div class="spacer-huge show-mobile-landscape"></div>
              <div class="text-align-center">
                <h1>FAQs</h1>
                <div class="spacer-medium"></div>
              </div>
              <div class="w-layout-grid faq_list">
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">What is 0G?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G is the largest AI L1. It is a modular, infinitely scalable blockchain designed to power the future of decentralized AI. It provides the full-stack infrastructure needed to build, run, and scale AI-native applications onchain, including fast data availability, decentralized storage, and a permissionless compute network. Unlike traditional L1s, 0G is purpose-built for AI. Its architecture is optimized for high-throughput data handling, real-time inference, and open access to verifiable AI models, making it possible to develop apps that were previously infeasible. Whether you&#x27;re training autonomous agents, deploying intelligent NFTs, or launching high-performance games, 0G is the foundational layer where it all becomes possible.</p>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">Why is 0G the foundation for decentralized AI?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G is the first blockchain specifically designed to support intelligent, decentralized applications at scale. Serving as the Artificial Intelligence Layer (AIL), it offers the modular infrastructure essential for making decentralized AI practical, including rapid data availability, decentralized storage, and verifiable computation. Its architecture divides data publishing, storage, and computation into distinct layers, each optimized for the speed, scale, and transparency required by AI workloads. This enables developers to train, deploy, and run models directly onchain, maintaining full ownership and eliminating reliance on centralized infrastructure.</p>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">What are the core components of the 0G stack?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G is a decentralized AI operating system (<a href="https://docs.0g.ai/?_highlight=deaios#the-first-decentralized--ai-operating-system-deaios" target="_blank">deAIOS</a>), architected as a modular full-stack platform where its core components—0G Chain, Compute, Storage, and Data Availability—work together to power the next generation of AI-native applications.</p>
                      <ol role="list">
                        <li><a href="https://docs.0g.ai/concepts/chain" target="_blank">0G Chain</a> serves as the blockchain foundation of the stack, featuring a modular architecture with separate consensus and execution layers. It delivers over 2,500 TPS and sub-second finality, utilizing an optimized version of CometBFT consensus alongside full EVM compatibility. Future upgrades, including DAG-based consensus and parallel processing, will further enhance scalability, ensuring 0G remains optimized for AI workloads.</li>
                        <li>The <a href="https://docs.0g.ai/concepts/compute" target="_blank">Compute Network</a> is a decentralized GPU marketplace that makes AI compute accessible, affordable, and censorship-resistant. Developers can run model inference and fine-tuning jobs across a global network of GPU providers, paying only for what they use. A trustless settlement flow using ZK-proofs ensures that results are verifiable and tamper-proof, at a fraction of the cost of traditional cloud services.</li>
                        <li><a href="https://docs.0g.ai/concepts/storage" target="_blank">0G Storage</a> offers ultra-fast, decentralized data storage optimized for AI. It accommodates both structured and unstructured data, utilizing erasure coding and Proof of Random Access (PoRA) to guarantee reliability and performance. Storage is arranged into an immutable Log Layer for large datasets and a mutable Key-Value Layer for real-time data, providing S3-level speed with complete decentralization and significantly lower costs.</li>
                        <li><a href="https://docs.0g.ai/concepts/da" target="_blank">Data Availability (DA)</a> allows for infinitely scalable and programmable data validation. It combines built-in storage integration, horizontal scalability, and a sampling-based consensus mechanism to support massive AI and web3 workloads. With a demonstrated throughput of 50 Gbps on the Galileo Testnet, 0G DA powers high-performance use cases, including AI agents, gaming, DeFi, rollups, and shared sequencers, while leveraging Ethereum’s shared staking security for robust decentralization.</li>
                      </ol>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">How does 0G scale AI, gaming, and DeFi workloads?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G’s modular architecture is purpose-built to support the scale and performance requirements of AI, gaming, and DeFi—three of the most data- and compute-intensive use cases of blockchain in web3.</p>
                      <ol role="list">
                        <li>For AI, 0G offers the only stack capable of executing large-scale inference and training workloads onchain. Developers can deploy AI agents and models using decentralized computing, enabling swift data retrieval and verifiable outputs at a fraction of the cost compared to traditional cloud platforms.</li>
                        <li>For gaming, 0G’s high-throughput storage and data availability layers enable real-time, onchain game logic and dynamic asset management. Game states, player interactions, and complex assets can be processed at the speeds necessary for modern gaming experiences.</li>
                        <li>For DeFi, 0G provides the throughput and composability essential for high-frequency trading, real-time oracles, and cross-chain liquidity. Its horizontally scalable DA layer facilitates fast settlement, while its storage and compute layers can handle advanced financial primitives and analytics.</li>
                      </ol>
                      <p>By combining these capabilities, 0G offers a new foundation for building decentralized apps that match (and surpass) the performance of legacy systems.</p>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">Who are the 0G founders?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G was founded by a team of experienced builders, researchers, and strategists with deep backgrounds in blockchain, AI, systems engineering, and venture. Each founder brings a distinct area of expertise to 0G’s mission of creating the infrastructure for decentralized intelligence:</p>
                      <ol role="list">
                        <li><strong>Michael Heinrich</strong>: As the Chief Executive Officer (CEO), Michael has a diverse background that spans software development, technical product management, and business strategy. Before 0G, he scaled a Web 2.0 company to significant heights, showcasing his ability to lead and grow technology-driven enterprises.</li>
                        <li><strong>Ming Wu</strong>: Serving as the Chief Technology Officer (CTO), Ming brings an extensive research and development background from his time at Microsoft Research Asia, where he focused on distributed systems, storage, computation, and AI platforms. His expertise is crucial in building 0G&#x27;s technical foundation.</li>
                        <li><strong>Fan Long</strong>: Taking on the role of Chief Strategy and Security Officer (CSSO), Fan combines his academic research in system security and blockchain with entrepreneurial experience. His academic tenure and co-founding experience in blockchain projects lend 0G a robust strategic and security direction.</li>
                        <li><strong>Thomas Yao</strong>: As the Chief Business Officer (CBO), Thomas&#x27;s background in physics, self-driving technology, and venture capital provides 0G with strategic business insights and investment expertise. His experience in early blockchain investments and technology startups is invaluable for navigating the business aspects of the project.</li>
                      </ol>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">What’s the difference between 0G Labs and the 0G Foundation?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>0G Labs is the core contributor responsible for building and maintaining the 0G protocol. This includes research and development across the data availability, storage, and compute layers, as well as product design, engineering, and ecosystem support. 0G Labs operates much like a traditional software organization, but focused entirely on advancing the 0G stack.</p>
                      <p>The 0G Foundation, by contrast, is an independent organization dedicated to advancing decentralized AI as a public good. Its mission includes funding decentralized AI research and development, fostering community engagement, supporting open-source projects through grants, promoting AI transparency and integrity, and advocating for ethical AI practices.</p>
                      <p>As the 0G ecosystem evolves, the Foundation aims to play a pivotal role in guiding the network’s decentralization and ensuring that its values of transparency, fairness, and integrity are upheld.</p>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">How can developers build on 0G?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <p>Developers can start building on 0G by tapping into its modular infrastructure stack, purpose-built for decentralized AI. The 0G stack includes high-throughput data availability, scalable onchain storage, and access to decentralized GPU compute, giving developers the tools to deploy everything from AI agents and inference models to intelligent NFTs (<a href="https://0g.ai/blog/0g-introducing-erc-7857" target="_blank">iNFTS</a>) and high-performance games.</p>
                      <p>The best way to get started is by exploring the <a href="https://docs.0g.ai/" target="_blank">0G documentation</a> and joining the 0G developer community <a href="https://docs.0g.ai/" target="_blank">on Discord</a>. You’ll find quickstart guides, grant opportunities, and example use cases to help you launch fast. Whether you&#x27;re fine-tuning a model, composing a service on top of 0G Storage, or integrating DA into a new protocol, the stack is designed to be composable and familiar. For more hands-on support, 0G also runs <a href="https://0g.ai/blog/0g-latest-hackathon-highlights" target="_blank">hackathons</a>, <a href="https://0g.ai/blog/ai-accelerator-cohort-2" target="_blank">accelerator programs</a>, and <a href="https://0g.ai/blog/0g-ecosystem-program" target="_blank">ecosystem campaigns</a> to help new builders explore the intersection of crypto and AI.</p>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
                <div class="faq_accordion">
                  <div class="faq_question">
                    <h2 class="text-size-medium">How can I get involved in the 0G ecosystem?</h2>
                    <div class="faq_icon">
                      <div class="faq_icon-wrappper">
                        <div class="faq_line is-vertical"></div>
                        <div class="faq_line is-horizontal"></div>
                      </div>
                    </div>
                  </div>
                  <div class="faq_answer">
                    <div class="text-rich-text w-richtext">
                      <ol role="list">
                        <li>There are many ways to contribute to the growth of 0G: whether you&#x27;re a builder, researcher, content creator, or just curious about the future of decentralized AI.
                          <ul role="list">
                            <li>Join the community: Follow 0G <a href="https://x.com/0G_labs" target="_blank">on X</a> and <a href="https://www.linkedin.com/company/0g-labs/" target="_blank">LinkedIn</a>, join the <a href="https://discord.com/invite/0glabs" target="_blank">Discord</a>, read <a href="https://0g.ai/blog" target="_blank">our blog</a>, and subscribe to the newsletter (at the bottom of this page) to stay updated on ecosystem news, events, and grants. You can also participate in discussions on forums and subreddits to help grow collective knowledge.</li>
                            <li>Build with 0G: If you’re a developer, dive into the <a href="https://docs.0g.ai/" target="_blank">docs</a>, explore <a href="https://docs.0g.ai/developer-hub/testnet/testnet-overview" target="_blank">testnets</a>, and join upcoming hackathons and accelerators. You can also submit feature ideas and contribute to early integrations across DA, storage, and compute layers.</li>
                            <li>Contribute creatively: 0G supports community-led content, from videos and tutorials to memes and dev blogs. If you’re helping people understand the stack (or just making it fun), you’re contributing.</li>
                            <li>Earn rewards: Through quests, community campaigns, and early contributor programs, you can earn recognition, access, NFTs, merch, and even mentorship opportunities. Some campaigns include <a href="https://yaps.kaito.ai/0g" target="_blank">leaderboards</a> and community awards to highlight top contributors.</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                    <div class="spacer-xxsmall"></div>
                    <div class="spacer-small"></div>
                  </div>
                </div>
              </div>
              <div class="spacer-large"></div>
              <div class="text-align-center">
                <p class="text-size-medium">Please feel free to reach out <a href="mailto:support@0g.ai" class="text-color-primary">support@0g.ai</a> with any additional questions!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
`

function setAccordionOpen(accordionEl, isOpen) {
  const answerEl = accordionEl.querySelector('.faq_answer')
  if (!answerEl) return

  const teardownKey = '__faq_teardown_transition_end__'
  if (typeof answerEl[teardownKey] === 'function') {
    answerEl[teardownKey]()
    answerEl[teardownKey] = null
  }

  const currentHeight = answerEl.getBoundingClientRect().height

  if (!isOpen) {
    answerEl.style.height = `${currentHeight}px`
    requestAnimationFrame(() => {
      accordionEl.classList.remove('is-open')
      answerEl.style.height = '0px'
    })
    return
  }

  answerEl.style.height = `${currentHeight}px`
  accordionEl.classList.add('is-open')

  const targetHeight = answerEl.scrollHeight
  requestAnimationFrame(() => {
    answerEl.style.height = `${targetHeight}px`
  })

  const onTransitionEnd = (e) => {
    if (e.target !== answerEl) return
    if (e.propertyName !== 'height') return
    answerEl.style.height = 'auto'
    answerEl.removeEventListener('transitionend', onTransitionEnd)
    answerEl[teardownKey] = null
  }
  answerEl.addEventListener('transitionend', onTransitionEnd)
  answerEl[teardownKey] = () => answerEl.removeEventListener('transitionend', onTransitionEnd)
}

export default function Faq() {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'Frequently Asked Questions | 0G'

    const containerEl = containerRef.current
    if (!containerEl) return

    const accordions = Array.from(containerEl.querySelectorAll('.faq_accordion'))
    const cleanupFns = []

    accordions.forEach((acc) => {
      setAccordionOpen(acc, false)

      const questionEl = acc.querySelector('.faq_question')
      if (!questionEl) return

      questionEl.setAttribute('role', 'button')
      questionEl.setAttribute('tabindex', '0')

      const onToggle = () => {
        const isOpen = acc.classList.contains('is-open')
        setAccordionOpen(acc, !isOpen)
      }

      const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }

      questionEl.addEventListener('click', onToggle)
      questionEl.addEventListener('keydown', onKeyDown)

      cleanupFns.push(() => {
        questionEl.removeEventListener('click', onToggle)
        questionEl.removeEventListener('keydown', onKeyDown)
      })
    })

    const onResize = () => {
      accordions.forEach((acc) => {
        if (!acc.classList.contains('is-open')) return
        const answerEl = acc.querySelector('.faq_answer')
        if (!answerEl) return
        answerEl.style.height = 'auto'
        const targetHeight = answerEl.scrollHeight
        answerEl.style.height = `${targetHeight}px`
      })
    }

    window.addEventListener('resize', onResize)
    cleanupFns.push(() => window.removeEventListener('resize', onResize))

    const mainEntity = accordions
      .map((acc) => {
        const q = acc.querySelector('.faq_question .text-size-medium')
        const a = acc.querySelector('.faq_answer .text-rich-text')
        return {
          '@type': 'Question',
          name: q?.textContent?.trim() || '',
          acceptedAnswer: {
            '@type': 'Answer',
            text: a?.textContent?.trim() || '',
          },
        }
      })
      .filter((x) => x.name)

    let schemaScriptEl = null
    if (mainEntity.length) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity,
      }
      schemaScriptEl = document.createElement('script')
      schemaScriptEl.type = 'application/ld+json'
      schemaScriptEl.text = JSON.stringify(schema)
      document.head.appendChild(schemaScriptEl)
    }

    return () => {
      cleanupFns.forEach((fn) => fn())
      if (schemaScriptEl?.parentNode) schemaScriptEl.parentNode.removeChild(schemaScriptEl)
    }
  }, [])

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
}

