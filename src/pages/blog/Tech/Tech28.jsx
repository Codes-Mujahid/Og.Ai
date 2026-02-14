import React, { useEffect, useState } from 'react'
import './Tech28.css'

export default function Tech28() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t28-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t28-webflow', 'true')
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
      "Check out this insightful blog post: 0G Deep Dive: Unpacking the World's First AI-Native L1"
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
    <div className="t28_container">
      <div className={`t28_copy-toast ${showToast ? 't28_show' : ''}`}>Link copied</div>

      <div className="t28_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t28_div002 hide">
          <div className="t28_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t28_div004">0G Deep Dive: Unpacking the World&apos;s First AI-Native L1</div>
        </div>

        <main className="t28_main-wrapper main-wrapper">
          <section className="t28_section_hero section_hero is-vertical">
            <div className="t28_div005 padding-global">
              <div className="t28_div006 container-large">
                <div className="t28_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t28_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t28_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t28_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t28_div008 hero_content-component is-vertical">
                  <div className="t28_div009 blog_meta-wrapper is-white">
                    <div className="t28_div010">Tech</div>
                    <div className="t28_div011 icon-embed-custom w-embed">
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
                    <div className="t28_div012">Feb 18, 2025</div>
                    <div className="t28_div013 icon-embed-custom w-embed">
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
                    <div className="t28_div014">0g</div>
                  </div>

                  <div className="t28_div015 spacer-small"></div>

                  <div className="t28_div016 max-width-large text-align-center">
                    <h1 className="t28_heading heading-style-h3">
                      0G Deep Dive: Unpacking the World&apos;s First AI-Native L1
                    </h1>
                  </div>

                  <div className="t28_div017 spacer-small"></div>

                  <div className="t28_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t28_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t28_div019 icon-embed-xsmall w-embed">
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
                      className="t28_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t28_div020 icon-embed-xsmall w-embed">
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
                      className="t28_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t28_div021 icon-embed-xsmall w-embed">
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

          <section className="t28_section_legal-content section_legal-content">
            <div className="t28_div022 padding-global">
              <div className="t28_div023 padding-section-medium">
                <div className="t28_div024 container-small">
                  <div className="t28_div025">
                    <div className="t28_div026 legal-content_component">
                      <div className="t28_div027 blog-rich-text w-richtext">
                        <p>
                          The world is racing to integrate artificial intelligence (AI) into
                          everything—from finance and entertainment to new methods of scientific
                          discovery. But there’s a problem: most AI today is centralized, opaque,
                          and expensive. Whether you’re relying on OpenAI’s black-box models or
                          running AI inferences on traditional blockchains, builders are forced to
                          trust centralized providers, face sky-high costs, and contend with
                          scalability limitations.
                        </p>
                        <p>
                          <strong>
                            But what if AI could be decentralized, verifiable, and scalable—without
                            sacrificing cost-effectiveness or performance?
                          </strong>
                        </p>
                        <p>
                          That’s exactly what 0G is building: the world’s first Artificial
                          Intelligence Layer (AIL), designed from the ground up to power
                          decentralized AI applications at scale. With a fully modular architecture,
                          verifiable inference, and AI-specific execution layers, 0G provides the
                          missing infrastructure to bring AI fully onchain—without the bottlenecks
                          that plague today’s solutions.
                        </p>
                        <p>
                          Let’s take a closer look at 0G’s design approach, including its primary
                          architecture, key subsystems, and how core onchain processes function.
                        </p>
                        <h2>0G’s Design Philosophy: The Modular, Artificial Intelligence Layer</h2>
                        <p>
                          Imagine trying to build a high-performance AI application using today’s
                          decentralized tools. You’d need a separate layer for compute, another for
                          storage, a rollup for scalability, and yet another layer for data
                          availability. Each of these solutions comes with its own trade-offs,
                          making it expensive and operationally cumbersome to deploy a seamless,
                          high-performance AI-powered experience in one go.
                        </p>
                        <p>
                          0G fixes this fragmentation by providing a unified AIL blockchain where
                          all components work together by design. Instead of patching together
                          separate tools to deploy a final product, developers can leverage 0G’s
                          fully optimized, infinitely scalable Decentralized AI Operating System
                          (deAIOS) to achieve everything in one spot. This system is underpinned by
                          a robust ecosystem of specialized, interconnected technologies built for
                          real-world AI workloads at scale.&nbsp;
                        </p>
                        <h3>
                          <strong>0G’s Core Components</strong>
                        </h3>
                        <p>
                          Each core component of 0G is designed to address a specific bottleneck in
                          decentralized AI, ensuring that applications can run at scale, at low
                          cost, and with full trustless verification.
                        </p>
                        <p>These components include:</p>
                        <figure
                          style={{ maxWidth: '1458px' }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t28_div028">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f08310dc81b97391ca_L2ju3KvT83XHuFPMaIjwYzGvJTM.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The graphic below illustrates how these different components work in
                          tandem, creating a seamless stack that powers decentralized AI innovation.&nbsp;
                        </p>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t28_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f08310dc81b97391d6_x7RHn0pT8hqPqFAT14kyHuAigI.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          With this modular design, 0G drastically reduces the technical burden for
                          developers, businesses, and web3 projects by providing a fully integrated
                          AI operating system right out of the box. Instead of stitching together
                          multiple siloed solutions, teams can build, deploy, and scale AI
                          applications seamlessly on 0G, reducing development time and cutting
                          operational costs.
                        </p>
                        <p>
                          Zoom in on 0G’s core components and latest offerings{' '}
                          <a
                            href="https://0g.ai/blog/navigating-0g-s-tech-an-update-on-the-latest-in-0g-s-products"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          .
                        </p>
                        <h2>What Makes 0G Different?</h2>
                        <p>
                          0G isn’t just a collection of AI tools—it&apos;s the first deAIOS,
                          seamlessly integrating compute, storage, and data availability to empower
                          developers in building the future of Infinite AI. The resulting solution
                          is greater than the sum of its parts, and unlocks powerful, open-ended
                          capabilities.
                        </p>
                        <h3>
                          <strong>Infinite Scalability</strong>
                        </h3>
                        <p>
                          Most blockchains process transactions in a sequential execution model,
                          where each transaction must be completed before the next one begins. This
                          causes bottlenecks when running AI inference models, which require
                          parallel computation across large datasets. Solana and Ethereum’s smart
                          contract execution environments, for instance, are optimized for financial
                          transactions, not AI workloads.
                        </p>
                        <p>
                          Additionally, existing blockchains have fixed scalability constraints.
                          When network activity increases, users compete for limited block space,
                          resulting in higher costs and slower processing speeds. AI models require
                          constant data retrieval, state updates, and dynamic memory allocation,
                          none of which are optimized in current blockchain environments.
                        </p>
                        <p>0G eliminates these bottlenecks by introducing</p>
                        <ul role="list">
                          <li>
                            <strong>Multi-consensus Validation</strong>: Instead of forcing all
                            transactions through a single consensus model, 0G applies different
                            validation methods depending on the task. This includes a dynamic mix
                            of:
                            <ul role="list">
                              <li>
                                <strong>Proof-of-Stake</strong> mechanisms to secure network
                                operations
                              </li>
                              <li>
                                <strong>Proof-of-Inference</strong> for verifying AI-generated
                                outputs before they interact with smart contracts
                              </li>
                              <li>
                                <strong>Proof-of-Random-Access</strong> to ensure that AI models
                                and datasets stored on 0G remain available and tamper-proof.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Scalable Execution &amp; Sharding</strong>: 0G’s execution
                            environment dynamically distributes AI workloads across multiple
                            shards, allowing onchain tasks to run concurrently.
                          </li>
                          <li>
                            <strong>AI-specific Compute Layer</strong>: Unlike general-purpose smart
                            contract platforms, 0G optimizes execution for inference-heavy workloads
                            without compromising on performance elsewhere within the system.
                          </li>
                        </ul>
                        <p>
                          Whether you’re running complex AI-powered trading strategies or powering
                          large-scale model inferences, 0G ensures limitless AI scalability and
                          efficiency at every level.
                        </p>
                        <figure
                          style={{ maxWidth: '1616px' }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t28_div030">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f08310dc81b97391c4_XrVJxBNqGPkv5Nx9TxrWM2RrNC0.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Verifiable, Onchain AI Outputs</strong>
                        </h3>
                        <p>
                          Today&apos;s centralized AI models are black boxes, and users are forced to
                          trust that their outputs are accurate and unaltered. Even decentralized
                          AI compute networks like Bittensor and Gensyn distribute AI inference
                          across multiple nodes, but they do not cryptographically verify inference
                          results. This means that AI-generated outputs can still be manipulated,
                          without any way to independently verify their outputs.&nbsp;
                        </p>
                        <p>
                          By contrast, 0G ensures that every AI output is cryptographically
                          verifiable and trustless via:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Proof-of-Inference (PoI):</strong> AI models must cryptographically
                            sign their outputs before they can be used in smart contracts or
                            decision-making applications.
                          </li>
                          <li>
                            <strong>Decentralized Inference Execution:</strong> AI models run on 0G’s
                            permissionless compute network, allowing anyone to access and leverage
                            our AI offerings.
                          </li>
                          <li>
                            <strong>Onchain AI Output Validation:</strong> 0G’s decentralized
                            inference service ensures verifiability through transparent, onchain
                            validation of computation results. This allows users to independently
                            verify the integrity and accuracy of each inference task.
                          </li>
                        </ul>
                        <p>
                          With this, 0G makes AI-generated decisions tamper-proof and fully
                          auditable. This is critical for advanced financial AI models, AI-powered
                          DAOs, and any other protocol where trust in AI decision-making is
                          essential.
                        </p>
                        <h3>
                          <strong>Forward-Optimized, With Backwards Compatibility</strong>
                        </h3>
                        <p>
                          AI workloads are among the most resource-intensive computational processes,
                          and as their complexity and user volume increase, their infrastructural
                          demands likewise grow.
                        </p>
                        <p>
                          This presents a fundamental problem: AI needs a blockchain that can handle
                          the most advanced use cases—such as high-frequency trading models, real-time
                          machine learning, and fully onchain AI agents—without compromising
                          efficiency, decentralization, or cost-effectiveness. At the same time, any
                          viable decentralized AI solution must also be compatible with the broader
                          web3 landscape, including older systems like Ethereum and Solana.
                        </p>
                        <p>
                          0G eliminates this friction by combining cutting-edge AI infrastructure
                          with full backwards compatibility across major legacy chains:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Full EVM Compatibility</strong>: Despite being purpose-built for
                            AI, 0G is fully EVM-compatible, ensuring that developers familiar with
                            Solidity can deploy smart contracts on 0G without learning a new language.
                            This means that existing DeFi, NFT, and web3 applications can incorporate
                            AI-driven features with minimal modifications to their code.
                          </li>
                          <li>
                            <strong>Modular Infrastructure Beyond 0G</strong>: Even developers who
                            are not ready to fully deploy on 0G can still benefit from its
                            framework-agnostic tech stack. 0G’s modular and abstracted functionality
                            lets builders selectively leverage individual components—such as AI
                            inference, storage, or data availability—without migrating their entire
                            stack, regardless of where they are deployed.
                          </li>
                        </ul>
                        <p>
                          By combining AI-specific optimizations with broad compatibility across web3,
                          0G ensures that developers don’t have to choose between innovation and
                          interoperability
                        </p>
                        <h3>
                          <strong>ERC-7857: A New Standard for AI-Powered Assets</strong>
                        </h3>
                        <p>
                          AI is transforming how users interact with digital assets, but existing
                          token standards fail to capture the dynamic, evolving nature of AI-driven
                          content. Traditional NFTs (ERC-721, ERC-1155) are static by design—incapable
                          of changing dynamically based on AI processing and lacking native support
                          for encryption or privacy. These limitations stifle innovation for AI
                          applications that require intelligent, adaptable, and secure digital
                          assets&nbsp;
                        </p>
                        <p>
                          0G is solving this problem with ERC-7857, a new token standard that brings
                          verifiable capabilities to the tokenized asset landscape. With ERC-7857, AI
                          models can be natively embedded into onchain assets in the form of
                          Intelligent NFTs (iNFTs), unlocking more composable, verifiable interactions
                          across the entire growing universe of AI-powered dApps.
                        </p>
                        <figure
                          style={{ maxWidth: '1600px' }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div className="t28_div031">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f08310dc81b97391c7_XxQTuHyw90ntsZxkXeEOPyzTbM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          Learn more about 0G’s new ERC-7857 token standard{' '}
                          <a
                            href="https://0g.ai/blog/0g-introducing-erc-7857"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          .
                        </p>
                        <h2>AI Without Limits, Powered by 0G</h2>
                        <p>
                          The race to bring AI onchain is already underway, but most solutions today
                          fail to meet the core requirements of scalable, verifiable, and
                          cost-efficient AI infrastructure. Traditional blockchains were never
                          designed for AI workloads, and while new decentralized AI solutions have
                          emerged, they suffer from scalability bottlenecks, high inference costs,
                          and unverifiable execution.
                        </p>
                        <p>
                          With a modular, high-performance architecture and breakthrough innovations
                          in scalability, data availability, and compute, 0G is set to redefine how AI
                          operates onchain. As a one-stop platform for decentralized AI—combining
                          compute, storage, and a service marketplace—0G dramatically simplifies the
                          development pipeline for crypto AI applications. And with $325M+ raised and
                          300+ projects already partnered with us (including major players like
                          Alibaba, Ora, OP, and more), 0G is not a solo AI project—we’re leading the
                          revolution.
                        </p>
                        <p>
                          In short, we are not alone. To that point, 0G recently announced an{' '}
                          <a
                            href="https://0gfoundation.ai/community-grants"
                            target="_blank"
                            rel="noreferrer"
                          >
                            $88M Ecosystem Growth Program
                          </a>
                          , which is kicking off with a $8.88M prize pool for builders who join our
                          Guild on 0G initiative.
                        </p>
                        <p>
                          <a
                            href="https://app.deform.cc/form/d0326680-f45e-4fe1-9578-4a9e3769e313/?page_number=0"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <strong>Apply for Guild on 0G today</strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t28_section_filter section_filter">
            <div className="t28_div032 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t28_div033 w-dyn-list t28_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t28_div034 cms-grid_list w-dyn-items">
              <div role="listitem" className="t28_div035 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t28_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t28_div036 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t28_img003 cms-grid_image"
                    />
                    <div className="t28_div037 spacer-medium hide-mobile-portrait"></div>
                    <div className="t28_div038 blog_contnet-wrapper">
                      <div className="t28_div039 blog_meta-wrapper">
                        <div className="t28_div040">Tech</div>
                        <div className="t28_div041 icon-embed-custom w-embed">
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
                        <div className="t28_div042">Sep 5, 2024</div>
                      </div>
                      <div className="t28_div043 spacer-xmedium"></div>
                      <h3 className="t28_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t28_div044 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t28_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t28_div045 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t28_img004 cms-grid_image"
                    />
                    <div className="t28_div046 spacer-medium hide-mobile-portrait"></div>
                    <div className="t28_div047 blog_contnet-wrapper">
                      <div className="t28_div048 blog_meta-wrapper">
                        <div className="t28_div049">Tech</div>
                        <div className="t28_div050 icon-embed-custom w-embed">
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
                        <div className="t28_div051">Aug 25, 2025</div>
                      </div>
                      <div className="t28_div052 spacer-xmedium"></div>
                      <h3 className="t28_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits
                        11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t28_div053 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t28_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t28_div054 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t28_img005 cms-grid_image"
                    />
                    <div className="t28_div055 spacer-medium hide-mobile-portrait"></div>
                    <div className="t28_div056 blog_contnet-wrapper">
                      <div className="t28_div057 blog_meta-wrapper">
                        <div className="t28_div058">Tech</div>
                        <div className="t28_div059 icon-embed-custom w-embed">
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
                        <div className="t28_div060">Aug 7, 2025</div>
                      </div>
                      <div className="t28_div061 spacer-xmedium"></div>
                      <h3 className="t28_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+
                        Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t28_div062 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t28_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t28_div063 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t28_img006 cms-grid_image"
                    />
                    <div className="t28_div064 spacer-medium hide-mobile-portrait"></div>
                    <div className="t28_div065 blog_contnet-wrapper">
                      <div className="t28_div066 blog_meta-wrapper">
                        <div className="t28_div067">Tech</div>
                        <div className="t28_div068 icon-embed-custom w-embed">
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
                        <div className="t28_div069">Jul 3, 2025</div>
                      </div>
                      <div className="t28_div070 spacer-xmedium"></div>
                      <h3 className="t28_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

