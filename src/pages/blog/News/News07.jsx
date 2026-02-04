import React, { useState } from 'react'
import './News07.css'

export default function News07() {
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
    const text = encodeURIComponent(
      'Navigating 0G’s Tech: An Update On The Latest in 0G’s Products'
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
    <div className="n07_container">
      <div className="n07_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n07_hide hide">
          <div className="n07_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n07_socialshare-title">
            Navigating 0G’s Tech: An Update On The Latest in 0G’s Products
          </div>
        </div>

        <main className="n07_main-wrapper main-wrapper">
          <section className="n07_section_hero section_hero n07_is-vertical is-vertical">
            <div className="n07_padding-global padding-global">
              <div className="n07_container-large container-large">
                <div className="n07_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n07_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n07_hero_bg-image2 hero_bg-image n07_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n07_hero_bg-gradient hero_bg-gradient n07_is-blog is-blog"></div>
                </div>

                <div className="n07_hero_content-component hero_content-component n07_is-vertical2 is-vertical">
                  <div className="n07_blog_meta-wrapper blog_meta-wrapper n07_is-white is-white">
                    <div className="n07_blog_meta-category">News</div>
                    <div className="n07_icon-embed-custom1 icon-embed-custom n07_w-embed1 w-embed">
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
                    <div className="n07_blog_meta-date">Jan 27, 2025</div>
                    <div className="n07_icon-embed-custom2 icon-embed-custom n07_w-embed2 w-embed">
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
                    <div className="n07_blog_meta-author">0g</div>
                  </div>

                  <div className="n07_spacer-small spacer-small"></div>

                  <div className="n07_max-width-large max-width-large n07_text-align-center text-align-center">
                    <h1 className="n07_heading-style-h3 heading-style-h3">
                      Navigating 0G’s Tech: An Update On The Latest in 0G’s
                      Products
                    </h1>
                  </div>

                  <div className="n07_spacer-small2 spacer-small"></div>

                  <div className="n07_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n07_link-icon-light link-icon-light n07_is-static is-static n07_w-inline-block w-inline-block"
                    >
                      <div className="n07_icon-embed-xsmall1 icon-embed-xsmall n07_w-embed3 w-embed">
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
                      className="n07_link-icon-light2 link-icon-light n07_is-static2 is-static n07_w-inline-block2 w-inline-block"
                    >
                      <div className="n07_icon-embed-xsmall2 icon-embed-xsmall n07_w-embed4 w-embed">
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
                      className="n07_link-icon-light3 link-icon-light n07_is-static3 is-static n07_w-inline-block3 w-inline-block"
                    >
                      <div className="n07_icon-embed-xsmall3 icon-embed-xsmall n07_w-embed5 w-embed">
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

          <section className="n07_section_legal-content section_legal-content">
            <div className="n07_padding-global2 padding-global">
              <div className="n07_padding-section-medium padding-section-medium">
                <div className="n07_container-small container-small">
                  <div className="n07_legal-content_outer">
                    <div className="n07_legal-content_component legal-content_component">
                      <div className="n07_blog-rich-text blog-rich-text n07_w-richtext w-richtext">
                        <p>
                          0G Foundation and 0G Labs have already made immense
                          progress in decentralizing AI, raising a combined
                          $358M.
                        </p>
                        <p>
                          0G provides a comprehensive suite of decentralized AI
                          infrastructure, collectively referred to as a
                          decentralized AI Operating System (deAIOS), aiming to
                          replace black-box models with transparent, modular,
                          and interoperable solutions.
                        </p>
                        <p>
                          As the first Artificial Intelligence Layer (AIL), 0G
                          isn’t just another chain; it’s a new foundation for an
                          open, intelligent web. Our modular components work in
                          harmony to power what we call Infinite AI: an
                          ecosystem where developers can access compute,
                          storage, data availability, and services all in one
                          place.
                        </p>
                        <p>
                          The graphic below illustrates how these different
                          components work in tandem, creating a seamless stack
                          that powers decentralized AI innovation.&nbsp;
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e606686af_Erf8MsySVjRdhYez2ITifVwz4AQ.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>These components include:</p>
                        <ul role="list">
                          <li>
                            <strong>0G Chain:</strong> An EVM-compatible
                            blockchain with horizontal scalability that
                            supports Web3 growth and easy integrations for
                            cross-chain smart contract deployment.
                          </li>
                          <li>
                            <strong>0G Compute Network:</strong> A decentralized
                            marketplace for AI inference, RAG
                            (Retrieval-Augmented Generation), and model hosting.
                          </li>
                          <li>
                            <strong>0G Storage: </strong>A distributed data
                            storage system with on-chain incentives, similar to
                            an on-chain AWS.
                          </li>
                          <li>
                            <strong>0G Data Availability:</strong> Infinitely
                            scalable data availability infrastructure for fast,
                            low-cost data querying and verification.&nbsp;
                          </li>
                          <li>
                            <strong>0G Service Marketplace:</strong> A
                            comprehensive platform for registering, hosting,
                            and consuming AI services, built to fuel a
                            distributed AI economy.
                          </li>
                          <li>
                            <strong>0G Alignment Nodes:</strong> Related to{' '}
                            <a href="https://0g.ai/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate">
                              our node sale
                            </a>
                            , who monitor ecosystem participants such as storage
                            nodes and data availability nodes.
                          </li>
                        </ul>
                        <p>
                          We’ll also provide a sneak peek at the end as to
                          what’s ahead for 2025.
                        </p>
                        <h2>0G Compute Network</h2>
                        <p>
                          The 0G Compute Network serves as an open marketplace
                          that connects developers, startups, and enterprises
                          with service providers. This decentralized platform
                          enables these users to access various compute and
                          model services, such as GPUs, for tasks like inference
                          and RAG (Retrieval-Augmented Generation).
                        </p>
                        <p>
                          To that end, we’re already partnering with projects
                          like <a href="https://aethir.com/">Aethir</a>,{' '}
                          <a href="https://phala.network/">Phala</a>, and{' '}
                          <a href="https://akash.network/">Akash Network</a> who
                          will list their AI services, which anyone can then
                          permissionlessly lease and integrate into their
                          project, alongside any other 0G products.
                        </p>
                        <p>The two parties include:</p>
                        <ul role="list">
                          <li>
                            <strong>Service Providers:</strong> The owners of AI
                            models and hardware who offer their services for a
                            fee.
                          </li>
                          <li>
                            <strong>Users: </strong>Individuals or organizations
                            who use the services listed by Service Providers,
                            either using 0G’s AI services directly or building
                            applications on top of the API.
                          </li>
                        </ul>
                        <p>
                          As part of this, the framework is built to provide
                          permissionless settlement between AI users and AI
                          service providers in a fast and trustworthy manner,
                          as required by a fully distributed AI economy.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e606686bc_0gZuHhkl51jOs8GswK5fnpKLL8.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>The workflow looks as follows:</p>
                        <ol role="list">
                          <li>
                            <strong>Service Registration:</strong> Providers
                            list their service types, URLs, and pricing in a
                            smart contract.
                          </li>
                          <li>
                            <strong>Fee Staking and Requests:</strong> Users
                            stake fees in the smart contract and submit service
                            requests with metadata and signatures to the
                            provider.
                          </li>
                          <li>
                            <strong>Provider Response:</strong> Providers
                            validate user requests and respond, ensuring the
                            user’s balance is sufficient.
                          </li>
                          <li>
                            <strong>Settlement and Verification:</strong>{' '}
                            Providers submit ZK-proofs to the smart contract for
                            verification, and users verify the response,
                            halting requests if validation fails.
                          </li>
                        </ol>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e6066869d_NbXZFp0ZCEEV4TTzmRlmugseaQ.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Providers register their services (1), users
                          pre-deposit fees and submit requests (2,3), Provides
                          give confirmation (4), settlement and verification
                          occur (5,6).
                        </p>
                        <p>
                          To learn more, visit{' '}
                          <a href="https://docs.0g.ai/build-with-0g/compute-network/overview">
                            https://docs.0g.ai/build-with-0g/compute-network/overview
                          </a>
                          &nbsp;
                        </p>
                        <h2>0G Service Marketplace</h2>
                        <p>
                          The 0G Service Marketplace enables seamless access to
                          AI services, beginning with AI inference, and will
                          soon evolve into an <strong>Agent Marketplace</strong>
                          , where anyone can deploy their own AI agent without
                          needing to code.
                        </p>
                        <p>
                          The Agent Marketplace will feature a user-friendly
                          interface similar to existing platforms like Virtuals
                          or CreatorAI, but with a key differentiator: it
                          leverages 0G&apos;s decentralized tech stack,
                          including 0G Storage, 0G DA, verifiable inference, and
                          more. Additionally, the platform will implement the
                          EIP-7844 NFT standard for AI Agents, which{' '}
                          <a href="https://x.com/spark_ren/status/1874834973573964019">
                            0G’s CTO Ming Wu recently introduced
                          </a>
                          .
                        </p>
                        <p>
                          At a high-level, the ERC-7844 standard allows the
                          private and verifiable transfer of sensitive agent
                          metadata, ensuring that ownership of both the NFT and
                          its associated capabilities is securely transferred.
                          This is achieved through a proof-based mechanism
                          ensuring only the rightful NFT owner can securely
                          transfer, access, and operate AI agents in a
                          decentralized marketplace. We’ll cover it in-depth
                          shortly.
                        </p>
                        <p>
                          Other key features of the Agent Marketplace include:
                        </p>
                        <ul role="list">
                          <li>Deploying and improving your own agent</li>
                          <li>Discovering new agents</li>
                          <li>Managing your portfolio of agents</li>
                          <li>
                            Receiving payments and rewards when others use your
                            agent
                          </li>
                        </ul>
                        <p>
                          Unlike the 0G Compute Network, which provides raw
                          computational resources like GPUs for building
                          applications from scratch, the 0G Service Marketplace
                          focuses on delivering ready-to-use AI services. This
                          approach simplifies the integration process for
                          developers and projects needing specific AI
                          functionalities without managing the underlying
                          infrastructure or models.
                        </p>
                        <p>
                          Together, these platforms ensure that developers have
                          access to everything they need, such as scalable
                          compute power or sophisticated AI services, to
                          innovate and build in the decentralized AI ecosystem.
                        </p>
                        <h2>0G Chain</h2>
                        <p>
                          0G Chain is a high-performance, EVM-compatible,
                          Proof-of-Stake blockchain, which is why 0G can scale
                          at such an incredible rate. Although EVM-compatible,
                          it can interact with non-EVM networks thanks to our
                          extensive interoperability partnerships with top
                          projects like <a href="https://www.axelar.network/">Axelar</a>.
                        </p>
                        <p>
                          Notably, building on 0G Chain is incredibly
                          accessible, thanks to its developer-friendly design
                          and compatibility with widely used Ethereum tools like
                          web3.js and ethers.js. With seamless integration into
                          your 0G Chain node or RPC endpoint, developers can
                          quickly deploy smart contracts and focus on creating
                          innovative DApps or scalable decentralized AI
                          solutions, streamlining the development process and
                          driving impactful projects forward.
                        </p>
                        <p>
                          The current generation of 0G Chain is built on top of
                          Cosmos SDK and consists of only one blockchain. The
                          next generation, however, will be composed of multiple
                          independent consensus networks, rather than a single
                          linear network. These networks can expand dynamically
                          based on demand, ensuring that as data volumes grow
                          exponentially, 0G&apos;s throughput scales accordingly
                          (e.g., 1, 100, or even 1,000 networks). This will be
                          rolled out later this year.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner4">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e60668692_wFoMqJIh7cFdmgmtkfluYFF0Q.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          0G can add new chains. Validators stake $0G on mainnet
                          to validate, and receive $0G as rewards on various
                          networks, which they can burn and redeem back on
                          mainnet.
                        </p>
                        <p>
                          This works by having 0G Consensus collaborate with 0G
                          Storage to validate data. DA Nodes are randomly
                          queried (using a random function) and collectively
                          reach a consensus on the validity of the data. As the
                          amount of data to be confirmed grows exponentially,
                          the consensus networks (that in aggregate form 0G
                          Consensus) can expand.
                        </p>
                        <p>
                          This is possible using a shared staking model, whereby
                          validators stake their funds on the Ethereum mainnet,
                          providing security across all the 0G Consensus
                          networks they participate in. If a slashable event
                          occurs on any of the 0G networks, the validator&apos;s
                          stake on the Ethereum mainnet is subject to slashing.
                          This ensures that mainnet-level security is extended
                          to all of 0G&apos;s consensus networks simultaneously,
                          creating a unified and secure staking environment.
                        </p>
                        <p>
                          This means it’s very easy and secure to deploy smart
                          contracts on 0G Chain as it’s straightforward and
                          mirrors the familiar processes used on
                          Ethereum-compatible blockchains.&nbsp;
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner5">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e6066868c_mXhLObJg7aGRQVckzqhbs9BhooQ.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>At a high level, the process includes:</p>
                        <ul role="list">
                          <li>
                            <strong>Prepare Code &amp; Compile It: </strong>
                            Write your contract code as you would for any
                            EVM-compatible blockchain, and use a Solidity
                            compiler to compile your smart contract.&nbsp;
                          </li>
                          <li>
                            <strong>Deploy the Contract on 0G Chain: </strong>
                            Leverage Ethereum-compatible deployment tools such
                            as web3.js or ethers.js to deploy your compiled
                            contract, and connect to your 0G Chain node or RPC
                            endpoint.
                          </li>
                          <li>
                            <strong>Verify Deployment: </strong>Once deployed,
                            verify the transaction results on{' '}
                            <strong>0G Chain Scan</strong>, the block explorer
                            for 0G Chain.
                          </li>
                        </ul>
                        <p>
                          We provide{' '}
                          <a href="https://docs.0g.ai/build-with-0g/contracts">
                            a full guide here.
                            <br />
                          </a>
                        </p>
                        <h2>0G Storage &amp; 0G DA</h2>
                        <p>
                          These are our first two original products, which form
                          the foundation of the 0G ecosystem.&nbsp;
                        </p>
                        <p>
                          <strong>
                            0G Storage is our decentralized storage network
                            designed for cost-efficient, tamper-proof storage
                            of data
                          </strong>
                          , ranging from general files to AI models and datasets.
                          It ensures that data is distributed securely and can
                          be accessed reliably, making it a cornerstone for
                          applications requiring high data integrity.
                        </p>
                        <p>It works as follows:</p>
                        <ul role="list">
                          <li>
                            <strong>Data Upload and Erasure Coding</strong>: When
                            data is uploaded, it undergoes erasure coding, a
                            process that fragments the data into smaller,
                            redundant pieces and distributes them across
                            multiple storage nodes.
                          </li>
                          <li>
                            <strong>Dual-Lane System for Data Management: </strong>
                            A dual-lane system ensures data availability
                            guarantees through quick querying and verification
                            by the consensus network, while also facilitating
                            large-scale data transfers and secure storage for
                            vast amounts of data.
                          </li>
                        </ul>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n07_figure-inner6">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1a86fdf2e6066868f_8di3SUyINpph9jIJMmo8FPftAE.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Data is erasure-coded into 0G Storage and queried via
                          the data publishing lane.
                        </p>
                        <p>
                          This serves a key industry need for scalable, secure,
                          and efficient data solutions critical to advancing
                          decentralized applications. We have already partnered
                          with a wide range of leading projects across
                          verticals such as AI, gaming, DeFi, DePIN, and more,
                          showcasing the versatility and impact of 0G Storage.
                        </p>
                        <p>
                          We covered 0G Storage{' '}
                          <a href="https://0g.ai/blog/0g-storage">in-depth here</a>,
                          and provide{' '}
                          <a href="https://www.youtube.com/watch?v=a8ngGoatGDg&list=PLXzxQu4dYnw8s5DaPkxjfsXDF2Jeid21O&index=4">
                            a video demo
                          </a>{' '}
                          showing how quickly it is to upload or retrieve a
                          dataset using 0G Storage.
                        </p>
                        <p>
                          Meanwhile,{' '}
                          <strong>
                            0G DA complements this storage system by ensuring
                            that stored data is always verifiable and
                            accessible for high-performance use cases.&nbsp;
                          </strong>
                        </p>
                        <p>
                          The range of use cases is quite extensive, spanning
                          decentralized applications, rollups, and AI-driven
                          workloads, as evidenced by our ecosystem report, where
                          we highlighted its adoption by projects leveraging
                          fast data querying and verification for decentralized
                          AI, scalable app chains, and more.
                        </p>
                        <p>
                          By employing a quorum-based design, 0G ensures that
                          data is certified and readily available without
                          compromising decentralization.
                        </p>
                        <p>
                          We covered 0G DA{' '}
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            in-depth here.
                          </a>
                        </p>
                        <h2>0G Alignment Nodes</h2>
                        <p>
                          The 0G Alignment Network plays a critical role in
                          maintaining the integrity and efficiency of the 0G
                          ecosystem.&nbsp;
                        </p>
                        <p>
                          Alignment Nodes are responsible for monitoring and
                          coordinating activities across key components such as
                          storage nodes, data availability nodes, and compute
                          resources. The right to operate an Alignment Node was
                          introduced during the{' '}
                          <a href="https://0g.ai/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate">
                            0G node sale
                          </a>
                          , granting participants a critical role in shaping and
                          securing the ecosystem&apos;s decentralized
                          infrastructure.
                        </p>
                        <p>
                          Recently, the{' '}
                          <a href="https://claim.0gfoundation.ai/">
                            rebate/commission and NFT Claim portal
                          </a>{' '}
                          went live, and looking ahead, we are also planning to
                          launch{' '}
                          <strong>
                            one-click Node-as-a-Service (NaaS) provider
                            integrations.&nbsp;
                          </strong>
                          This will make it seamless for anyone to deploy and
                          manage an Alignment Node, lowering the barrier to
                          entry to 0G’s node ecosystem.
                        </p>
                        <h2>What’s Ahead?</h2>
                        <p>
                          As we move closer to 2025, 0G is gearing up to deliver
                          a suite of mainnet products and features while
                          refining and testing additional components on testnet.
                          Here’s a look at what’s coming.
                        </p>
                        <p>Here&apos;s a glimpse at what&apos;s on the horizon:</p>
                        <ul role="list">
                          <li>
                            <strong>Agent Network:</strong> This ambitious
                            initiative aims to create a decentralized ecosystem
                            of interoperable AI agents designed to handle
                            complex and diverse agentic AI use cases.
                          </li>
                          <li>
                            <strong>Developer Onboarding:</strong> We’ll focus
                            on building the next generation of dApps on top of
                            0G, where we believe that there is immense potential
                            for early builders.&nbsp;
                          </li>
                          <li>
                            <strong>New Products: </strong>While we can’t share
                            the details on these yet, we have some very exciting
                            products and services planned that will help to
                            further decentralize AI.
                          </li>
                        </ul>
                        <p>
                          Whether you’re building an inference layer, deploying
                          autonomous agents, or architecting novel AI networks,
                          0G gives you the tools to build your first app in
                          minutes and scale it infinitely.
                        </p>
                        <p>
                          Interesting in building with us?{' '}
                          <a href="https://discord.com/invite/0glabs">
                            Reach out via Discord.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n07_section_filter section_filter">
            <div className="n07_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n07_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n07_cms-grid_list cms-grid_list n07_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n07_cms-grid_item cms-grid_item n07_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n07_cms-grid_content-wrapper cms-grid_content-wrapper n07_is-blog2 is-blog n07_w-inline-block4 w-inline-block"
                >
                  <div className="n07_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n07_cms-grid_image cms-grid_image"
                    />
                    <div className="n07_spacer-medium spacer-medium n07_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n07_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n07_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n07_related_category">News</div>
                        <div className="n07_icon-embed-custom3 icon-embed-custom n07_w-embed6 w-embed">
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
                        <div className="n07_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n07_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n07_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n07_cms-grid_item2 cms-grid_item n07_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n07_cms-grid_content-wrapper2 cms-grid_content-wrapper n07_is-blog3 is-blog n07_w-inline-block5 w-inline-block"
                >
                  <div className="n07_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n07_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n07_spacer-medium2 spacer-medium n07_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n07_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n07_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n07_related_category2">News</div>
                        <div className="n07_icon-embed-custom4 icon-embed-custom n07_w-embed7 w-embed">
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
                        <div className="n07_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n07_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n07_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n07_cms-grid_item3 cms-grid_item n07_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n07_cms-grid_content-wrapper3 cms-grid_content-wrapper n07_is-blog4 is-blog n07_w-inline-block6 w-inline-block"
                >
                  <div className="n07_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n07_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n07_spacer-medium3 spacer-medium n07_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n07_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n07_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n07_related_category3">News</div>
                        <div className="n07_icon-embed-custom5 icon-embed-custom n07_w-embed8 w-embed">
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
                        <div className="n07_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n07_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n07_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n07_cms-grid_item4 cms-grid_item n07_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n07_cms-grid_content-wrapper4 cms-grid_content-wrapper n07_is-blog5 is-blog n07_w-inline-block7 w-inline-block"
                >
                  <div className="n07_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n07_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n07_spacer-medium4 spacer-medium n07_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n07_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n07_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n07_related_category4">News</div>
                        <div className="n07_icon-embed-custom6 icon-embed-custom n07_w-embed9 w-embed">
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
                        <div className="n07_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n07_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n07_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n07_copy-toast ${showToast ? 'n07_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
