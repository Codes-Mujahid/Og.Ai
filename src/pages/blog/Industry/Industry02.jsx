import React, { useState } from 'react'
import './Industry02.css'

export default function Industry02() {
  const [showToast, setShowToast] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    })
  }

  const handleSocialShare = (platform, e) => {
    e.preventDefault()
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent('Top Areas of On-Chain AI')
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
    <div className="i02_container">
      <div className="i02_pageWrapper page-wrapper">
        <div className="i02_socialShareContent hide">
          <div className="i02_socialShareLead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="i02_socialShareTitle">Top Areas of On-Chain AI</div>
        </div>

        <main className="i02_mainWrapper main-wrapper">
          <section className="i02_sectionHero section_hero is-vertical">
            <div className="i02_paddingGlobalHero padding-global">
              <div className="i02_containerLargeHero container-large">
                <div className="i02_heroBgWrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="i02_heroBgImage hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="i02_heroBgImageDyn hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="i02_heroBgGradient hero_bg-gradient is-blog"></div>
                </div>

                <div className="i02_heroContent hero_content-component is-vertical">
                  <div className="i02_blogMetaWrapper blog_meta-wrapper is-white">
                    <div className="i02_blogMetaDate">Nov 8, 2024</div>
                    <div className="i02_blogMetaDot icon-embed-custom w-embed">
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
                    <div className="i02_blogMetaCategory">Industry</div>
                  </div>

                  <div className="i02_spacerSmallTop spacer-small"></div>

                  <div className="i02_titleWrapper max-width-large text-align-center">
                    <h1 className="i02_title heading-style-h3">
                      Top Areas of On-Chain AI
                    </h1>
                  </div>

                  <div className="i02_spacerSmallBottom spacer-small"></div>

                  <div className="i02_blogButtonWrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="i02_copyLink link-icon-light is-static w-inline-block"
                    >
                      <div className="i02_copyIcon icon-embed-xsmall w-embed">
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
                      onClick={(e) => handleSocialShare('linkedin', e)}
                      href="#"
                      className="i02_linkedinLink link-icon-light is-static w-inline-block"
                    >
                      <div className="i02_linkedinIcon icon-embed-xsmall w-embed">
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
                      onClick={(e) => handleSocialShare('x', e)}
                      href="#"
                      className="i02_xLink link-icon-light is-static w-inline-block"
                    >
                      <div className="i02_xIcon icon-embed-xsmall w-embed">
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

          <section className="i02_sectionLegal section_legal-content">
            <div className="i02_paddingGlobalLegal padding-global">
              <div className="i02_paddingSectionMedium padding-section-medium">
                <div className="i02_containerSmall container-small">
                  <div className="i02_legalOuter">
                    <div className="i02_legalComponent legal-content_component">
                      <div className="i02_blogRichText blog-rich-text w-richtext">
                        <p>
                          Crypto and Artificial Intelligence (AI) are reshaping
                          the digital landscape, and their convergence is giving
                          rise to an entirely new infrastructure category: the
                          Artificial Intelligence Layer (AIL). At 0G, we believe
                          this layer will power the next generation of open,
                          intelligent systems—where AI is modular, verifiable,
                          and on-chain by default.
                        </p>
                        <p>
                          <strong>Blockchain technology benefits AI </strong>by
                          providing a foundation for decentralized AI, which is
                          a core pillar of ours at 0G Labs. For example,
                          developers can be incentivized to collaborate globally
                          via a fully transparent AI infrastructure that has
                          enforced data rights, fair monetization, smart
                          contract automation, and much more.
                        </p>
                        <p>
                          Meanwhile,{' '}
                          <strong>AI benefits blockchain technology </strong>
                          by optimizing on-chain operations, such as intelligent
                          smart contract execution, liquidity optimization, and
                          AI-driven governance decisions. It can also provide
                          better data-driven insights, improve on-chain
                          security, and lay the foundation for new Web3-based
                          applications.
                        </p>
                        <p>
                          In this article, we will provide an overview of 4 of
                          the fastest-moving areas of Crypto AI that anyone
                          interested in the space should be aware of:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Decentralized Compute</strong>:
                            Crowdsourced computing for AI models.
                          </li>
                          <li>
                            <strong>AI Agents</strong>: Automating complex
                            on-chain operations.
                          </li>
                          <li>
                            <strong>Verifiable Inference</strong>: Trustless
                            verification for off-chain AI computations.
                          </li>
                          <li>
                            <strong>Data Infrastructure</strong>: New methods
                            for the permissionless trading and sharing of
                            valuable datasets.
                          </li>
                        </ol>
                        <p>
                          We’ll examine the current challenges in each category
                          and how 0G’s AIL and decentralized AI operating system
                          (deAIOS) offer the infrastructure needed to scale them
                          into reality. Together, these capabilities unlock the
                          future of Infinite AI: an open, composable ecosystem
                          for building intelligent applications on-chain.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Decentralized Compute</strong>
                          </li>
                        </ol>
                        <p>
                          AI relies on extensive datasets and substantial
                          computational resources to develop models that deliver
                          actionable insights. Traditionally, GPUs (graphics
                          processing units) have been the go-to for these tasks,
                          but they are expensive to purchase, deploy, and
                          maintain. Instead, they are typically rented from
                          centralized providers like Amazon Web Services or
                          Google Cloud.
                        </p>
                        <p>
                          <strong>Decentralized Compute</strong> distributes
                          this computing power globally. For example, platforms
                          like <a href="https://akash.network/">Akash</a> and{' '}
                          <a href="https://rendernetwork.com/">Render</a> allow
                          individuals or entities with idle resources (such as
                          GPUs or other forms of specialized hardware) to
                          contribute their computing power in a permissionless,
                          decentralized manner. This means that anyone can
                          instantly run AI models using computing resources from
                          any entity globally via an online marketplace for
                          buyers &amp; sellers that’s similar to Uber or Airbnb.
                        </p>
                        <p>The main benefits include:</p>
                        <ul role="list">
                          <li>
                            <strong>Permissionless access</strong>: Users can
                            access computing power without relying on
                            gatekeepers.
                          </li>
                          <li>
                            <strong>Increased resource availability</strong>:
                            Decentralized networks provide access to niche or
                            rare computing resources that centralized providers
                            may restrict.
                          </li>
                          <li>
                            <strong>Avoiding data lock-ins</strong>: No
                            restrictive contracts or hefty transfer fees when
                            switching providers, ensuring user autonomy.
                          </li>
                          <li>
                            <strong>Lower costs</strong>: Decentralization
                            reduces overhead, making it more cost-efficient
                            compared to traditional cloud services.
                          </li>
                        </ul>
                        <p>
                          That being said, Akash has{' '}
                          <a href="https://stats.akash.network/graph/active-leases">
                            ~700
                          </a>{' '}
                          active GPU leases at present, whereas centralized
                          entities have millions. It is a major Crypto AI use
                          case, but it will take time for adoption to grow to
                          rival Web2’s metrics.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>AI Agents</strong>
                          </li>
                        </ol>
                        <p>
                          Web3 is becoming increasingly complex, and it will be
                          impossible for humans to handle tasks like liquidity
                          optimization, complex workflows, AI-driven governance,
                          and more.
                        </p>
                        <p>
                          <strong>AI Agents </strong>are on-chain computer
                          programs that function autonomously, handling complex
                          tasks related to decision-making, planning, and task
                          execution. On the backend, they tend to leverage Large
                          Language Models (LLMs) like Chat-GPT or Llama 3 to
                          execute intelligent custom logic based on one’s needs,
                          though some projects like{' '}
                          <a href="https://www.assisterr.ai/">Assisterr</a> (a
                          partner of 0G) are focused on Small Language Models
                          (SLMs) or other AI model variations.
                        </p>
                        <p>The main benefits include:</p>
                        <ul role="list">
                          <li>
                            <strong>Automation</strong>: Advanced processes such
                            as liquidity management and governance decisions can
                            be automated with complex AI logic built in,
                            reducing the need for human intervention.
                          </li>
                          <li>
                            <strong>User Experience</strong>: AI agents can act
                            as user interfaces, translating user intent into
                            precise actions and also guiding users through
                            complex transactions, explaining risks, and
                            providing optimal strategies.
                          </li>
                          <li>
                            <strong>Scalability &amp; Continuous Learning</strong>
                            : As the Web3 ecosystem expands, AI agents can
                            easily scale and will improve over time by ingesting
                            more data, including niche datasets.
                          </li>
                        </ul>
                        <p>
                          At 0G, we anticipate exponential growth in this
                          sector, with institutions increasingly developing
                          proprietary AI agents to automate critical on-chain
                          functions.
                        </p>
                        <p>
                          0G is already working with{' '}
                          <a href="https://talus.network/">Talus</a>,{' '}
                          <a href="https://www.theoriq.ai/">Theoriq</a>, and more
                          to bring more AI Agents on-chain.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Verifiable Inference</strong>
                          </li>
                        </ol>
                        <p>
                          Due to the on-chain gas fees and the challenge in
                          storing and processing vast amounts of data on-chain,
                          AI computations primarily occur off-chain at present.
                        </p>
                        <p>
                          <strong>Verifiable inference</strong> allows AI model
                          computations to be permissionlessly validated on-chain
                          using privacy-preserving techniques like zkML, which
                          uses{' '}
                          <a href="https://blog.multichainmedia.xyz/index.php/2023/06/07/an-in-depth-look-at-zk-rollups-zero-knowledge-proofs-and-zkevms/">
                            zero-knowledge proofs
                          </a>
                          . This entails cryptographically proving on-chain that
                          the off-chain computations were done correctly (e.g.,
                          without the dataset being tampered with) while keeping
                          all data confidential.
                        </p>
                        <p>
                          Although 0G’s decentralized AI OS infrastructure is
                          helping to bring AI fully on-chain, there will always
                          be a need to validate off-chain computations. For
                          example, banks may wish to use the existing databases
                          to run complex models and have those results arrive
                          on-chain for tokenization-related processes such as
                          on-chain credit approval.
                        </p>
                        <p>
                          Many ZK rollups already incorporate zkML into their
                          workflow, including{' '}
                          <a href="https://zksync.io/">zkSync</a>,{' '}
                          <a href="https://www.starknet.io/">StarkNet</a>, and{' '}
                          <a href="https://scroll.io/">Scroll</a>. Meanwhile,
                          projects like <a href="https://www.zkml.systems/">ZKML</a>{' '}
                          are helping to provide this infrastructure to others.
                        </p>
                        <p>The main benefits include:</p>
                        <ul role="list">
                          <li>
                            <strong>Scalability: </strong>ZK Proofs can quickly
                            confirm a large number of off-chain computations.
                            Even as the number of transactions scales, a single
                            ZK Proof can validate all of them.
                          </li>
                          <li>
                            <strong>Privacy Preservation: </strong>Data and AI
                            model details are kept private while all parties can
                            verify that the data and models were not corrupted.
                          </li>
                          <li>
                            <strong>Trustlessness: </strong>Computations can be
                            confirmed without reliance on centralized parties.
                          </li>
                          <li>
                            <strong>Web2 Integrations: </strong>Web2 is, by
                            definition, off-chain, meaning that verifiable
                            inference can help bring their datasets and AI
                            computations on-chain. This helps to increase Web3
                            adoption.
                          </li>
                        </ul>
                        <ol role="list">
                          <li>
                            <strong>Data Marketplaces</strong>
                          </li>
                        </ol>
                        <p>
                          AI relies heavily on high-quality data for training
                          and fine-tuning models, but a few large corporations
                          often control access to such data.
                        </p>
                        <p>
                          <strong>Decentralized data marketplaces</strong> enable
                          individuals and organizations to securely sell and
                          share their data while maintaining privacy and
                          ownership. This means that AI projects can also access
                          datasets of any type without compromising user privacy
                          or security.
                        </p>
                        <p>
                          An interesting example includes{' '}
                          <a href="https://oceanprotocol.com/">Ocean Protocol</a>,
                          which has tokenized AI models and data and allows them
                          to be accessed via an open marketplace. A tokenized AI
                          model or dataset refers to using blockchain to
                          purchase their respective access rights.
                        </p>
                        <p>
                          While decentralized compute (discussed above)
                          facilitates the exchange of computing power between
                          providers and users, data marketplaces perform a
                          similar function for datasets.
                        </p>
                        <p>The main benefits include:</p>
                        <ul role="list">
                          <li>
                            <strong>Improved Monetization Methods: </strong>Any
                            individual or business with a niche dataset can
                            monetize it for new revenue streams. For example, a
                            food supplier could monetize their supply chain data
                            or consumer food trend data.
                          </li>
                          <li>
                            <strong>Permissionless Access: </strong>Global
                            participants can freely collaborate to develop
                            innovative products, build AI models, and generate
                            valuable insights, expanding access to data and
                            resources beyond traditional boundaries.
                          </li>
                          <li>
                            <strong>Lower Costs: </strong>A lot of data is hidden
                            behind expensive paywalls. Open data marketplaces
                            match buyers and sellers, leading to better pricing.
                          </li>
                        </ul>
                        <h2>
                          <strong>Decentralized AI Challenges</strong>
                        </h2>
                        <p>
                          Each of the above areas is moving extremely quickly
                          and holds immense promise. That being said, several
                          obstacles must be addressed to make decentralized AI a
                          widespread reality.
                        </p>
                        <p>
                          They are important to know as it will then become
                          clearer how 0G is solving each of the below, which was
                          a key reason that supported our{' '}
                          <a href="http://seed-announcement/">
                            $35M pre-seed raise.
                          </a>
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="i02_figureImageWrap">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4172a418ac8499587_KUWmTzfECLYH2QwRWgD3WEDhBcc.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>These include:</p>
                        <ol role="list">
                          <li>
                            <strong>Scalability: </strong>Right now, it’s very
                            hard to store and process large amounts of data
                            on-chain, as data availability solutions like
                            Celestia cannot handle the high-performance needs of
                            AI. Blockchains need faster throughput, more data
                            storage, and greater computational capacity for
                            large-scale AI operations to thrive. This is one of
                            the core challenges that 0G is solving.
                          </li>
                        </ol>
                        <ol role="list">
                          <li>
                            <strong>
                              Interoperability Between AI and Blockchain
                            </strong>
                            : There needs to be standardized protocols that
                            enable AI and blockchain to interact seamlessly,
                            making integration easy. For example, AI computations
                            often occur off-chain, but proving those computations
                            on-chain through cryptographic methods (let alone
                            doing these calculations on-chain) is still an
                            evolving area requiring more progress.
                          </li>
                        </ol>
                        <ol role="list">
                          <li>
                            <strong>Lack of AI Infrastructure and Tooling</strong>
                            : The infrastructure needed to support decentralized
                            AI is still in its infancy, with many projects
                            facing inherent tradeoffs. For example, decentralized
                            data storage solutions like Filecoin may only support
                            unstructured data or be prohibitively expensive, with
                            throughput too slow to support AI. As well, the
                            tooling to provide a world-class experience for
                            developers does not quite exist, limiting the amount
                            of talent in the space. 0G is also solving this.
                          </li>
                        </ol>
                        <ol role="list">
                          <li>
                            <strong>High Costs and Resource Limitations</strong>
                            : AI computation is expensive, and decentralized
                            networks still need to optimize the economics of
                            providing these services at scale. Until costs are
                            comparable to centralized solutions like AWS, it
                            will be hard to truly onboard the next massive wave
                            of users and applications.
                          </li>
                        </ol>
                        <ol role="list">
                          <li>
                            <strong>Data Fragmentation and Availability</strong>
                            : The decentralized nature of blockchain can lead to
                            fragmented data sources, making it difficult for AI
                            models to access the data they need for training and
                            inference. For example, data is dispersed across
                            countless Web2 databases and Web3 blockchains,
                            requiring a means for individuals and entities to
                            derive meaningful insights and actions using them.
                            0G’s infrastructure is designed from the ground up
                            to solve the foundational challenges of decentralized
                            AI, bringing together compute, storage, and data
                            availability in a one-stop, composable platform
                            purpose-built for on-chain intelligence.
                          </li>
                        </ol>
                        <p>
                          Solving these will help to make decentralized AI a
                          reality, which is what makes 0G’s role as a
                          decentralized AI Operating System (dAIOS) so powerful.
                          For example, 0G solves issues surrounding
                          interoperability, scalability, prohibitive costs, data
                          fragmentation and availability, and more. It’s
                          essentially an all-in-one system that makes on-chain
                          AI truly possible, which is why we’ve been busy
                          integrating with so many partners.
                        </p>
                        <p>
                          <a href="https://0g.ai/blog/reintroducing-0g-the-first-decentralized-ai-operating-system">
                            We covered how this works here
                          </a>
                          , but at a high level, 0G’s deAIOS infrastructure is
                          composed of three core modules:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>0G Storage: </strong>A decentralized network
                            that handles massive data loads efficiently and
                            securely.
                          </li>
                          <li>
                            <strong>0G DA (Data Availability): </strong>An
                            infinitely scalable and programmable data
                            availability layer that provides seamless access and
                            verification of data for end-users.
                          </li>
                          <li>
                            <strong>0G Serving:</strong> A framework that supports
                            AI model inference, data retrieval, and training
                            tasks, allowing real-time interaction with
                            decentralized AI applications.
                          </li>
                        </ol>
                        <p>
                          In combination, 0G provides a massively scalable
                          solution that makes crypto AI a reality.
                        </p>
                        <p>
                          For example, data marketplaces can utilize 0G Storage
                          to securely store all relevant datasets, while 0G DA
                          (Data Availability) verifies and manages access
                          permissions. This setup ensures that only eligible
                          parties can quickly access the required data and
                          provides the infrastructure for anyone else to launch
                          a custom data marketplace.
                        </p>
                        <h2>
                          <strong>0G is Making AI a Public Good</strong>
                        </h2>
                        <p>In this piece, we covered 4 critical areas of on-chain AI:</p>
                        <ul role="list">
                          <li>Decentralized Compute</li>
                          <li>AI Agents</li>
                          <li>Verifiable Inference</li>
                          <li>Data Marketplaces</li>
                        </ul>
                        <p>
                          From decentralized compute to verifiable inference,
                          the next era of AI won’t be built in silos. It will be
                          modular, composable, and on-chain, powered by a new
                          category of infrastructure: the Artificial Intelligence
                          Layer.
                        </p>
                        <p>
                          0G is building the foundation for this future. If
                          you're a developer, protocol founder, or researcher
                          working on the frontiers of crypto and AI, we'd love
                          to build with you.
                        </p>
                        <p>
                          To start building with us,{' '}
                          <a href="https://0g.ai/contact">please reach out here</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
{/* 
          <section className="i02_sectionFilter section_filter">
            <div className="i02_relatedHeader blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="i02_relatedListWrap w-dyn-list">
            <div className="i02_relatedList cms-grid_list w-dyn-items" role="list">
              <div className="i02_relatedItem01 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-origin-story"
                  className="i02_relatedLink01 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i02_relatedContent01 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682127048db2a15bce078551_PJXpESYIRq7OTB3DRaoo2q18ds.avif"
                      loading="lazy"
                      alt=""
                      className="i02_relatedImage01 cms-grid_image"
                    />
                    <div className="i02_relatedSpacer01 spacer-medium hide-mobile-portrait"></div>
                    <div className="i02_relatedTextWrap01 blog_contnet-wrapper">
                      <div className="i02_relatedMetaWrap01 blog_meta-wrapper">
                        <div className="i02_relatedCategory01">Industry</div>
                        <div className="i02_relatedDot01 icon-embed-custom w-embed">
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
                        <div className="i02_relatedDate01">Mar 26, 2024</div>
                      </div>
                      <div className="i02_relatedSpacerX01 spacer-xmedium"></div>
                      <h3 className="i02_relatedTitle01 heading-style-h5">
                        0G Origin Story
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="i02_relatedItem02 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/navigate-web3-s-future-with-0g-key-concepts-and-innovations"
                  className="i02_relatedLink02 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i02_relatedContent02 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270465373596cc2f25ed_fo6W7M9bmWAcIxuu8BG3SGCj5Q.avif"
                      loading="lazy"
                      alt=""
                      className="i02_relatedImage02 cms-grid_image"
                    />
                    <div className="i02_relatedSpacer02 spacer-medium hide-mobile-portrait"></div>
                    <div className="i02_relatedTextWrap02 blog_contnet-wrapper">
                      <div className="i02_relatedMetaWrap02 blog_meta-wrapper">
                        <div className="i02_relatedCategory02">Industry</div>
                        <div className="i02_relatedDot02 icon-embed-custom w-embed">
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
                        <div className="i02_relatedDate02">Apr 8, 2024</div>
                      </div>
                      <div className="i02_relatedSpacerX02 spacer-xmedium"></div>
                      <h3 className="i02_relatedTitle02 heading-style-h5">
                        Navigate Web3&apos;s Future with 0G: Key Concepts and Innovations
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="i02_relatedItem03 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/6-emerging-key-trends-in-blockchain-technology"
                  className="i02_relatedLink03 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i02_relatedContent03 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ff65373596cc2f2108_pgOLkOIAwPqcTVVofD35xrLYQ.avif"
                      loading="lazy"
                      alt=""
                      className="i02_relatedImage03 cms-grid_image"
                    />
                    <div className="i02_relatedSpacer03 spacer-medium hide-mobile-portrait"></div>
                    <div className="i02_relatedTextWrap03 blog_contnet-wrapper">
                      <div className="i02_relatedMetaWrap03 blog_meta-wrapper">
                        <div className="i02_relatedCategory03">Industry</div>
                        <div className="i02_relatedDot03 icon-embed-custom w-embed">
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
                        <div className="i02_relatedDate03">May 23, 2024</div>
                      </div>
                      <div className="i02_relatedSpacerX03 spacer-xmedium"></div>
                      <h3 className="i02_relatedTitle03 heading-style-h5">
                        6 Emerging Key Trends in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="i02_relatedItem04 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/the-comprehensive-guide-to-data-availability-in-blockchain-technology"
                  className="i02_relatedLink04 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i02_relatedContent04 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fe2d09deedb577d993_JUdhw2M9qC3h30iV8tWNNsPJgA.avif"
                      loading="lazy"
                      alt=""
                      className="i02_relatedImage04 cms-grid_image"
                    />
                    <div className="i02_relatedSpacer04 spacer-medium hide-mobile-portrait"></div>
                    <div className="i02_relatedTextWrap04 blog_contnet-wrapper">
                      <div className="i02_relatedMetaWrap04 blog_meta-wrapper">
                        <div className="i02_relatedCategory04">Industry</div>
                        <div className="i02_relatedDot04 icon-embed-custom w-embed">
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
                        <div className="i02_relatedDate04">Jun 6, 2024</div>
                      </div>
                      <div className="i02_relatedSpacerX04 spacer-xmedium"></div>
                      <h3 className="i02_relatedTitle04 heading-style-h5">
                        The Comprehensive Guide to Data Availability in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`i02_copy-toast ${showToast ? 'i02_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

