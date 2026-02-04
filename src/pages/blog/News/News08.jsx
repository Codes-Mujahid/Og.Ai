import React, { useState } from 'react'
import './News08.css'

export default function News08() {
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
    const text = encodeURIComponent('The 0G Ecosystem')
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
    <div className="n08_container">
      <div className="n08_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n08_hide hide">
          <div className="n08_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n08_socialshare-title">The 0G Ecosystem</div>
        </div>

        <main className="n08_main-wrapper main-wrapper">
          <section className="n08_section_hero section_hero n08_is-vertical is-vertical">
            <div className="n08_padding-global padding-global">
              <div className="n08_container-large container-large">
                <div className="n08_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n08_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n08_hero_bg-image2 hero_bg-image n08_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n08_hero_bg-gradient hero_bg-gradient n08_is-blog is-blog"></div>
                </div>

                <div className="n08_hero_content-component hero_content-component n08_is-vertical2 is-vertical">
                  <div className="n08_blog_meta-wrapper blog_meta-wrapper n08_is-white is-white">
                    <div className="n08_blog_meta-category">News</div>
                    <div className="n08_icon-embed-custom1 icon-embed-custom n08_w-embed1 w-embed">
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
                    <div className="n08_blog_meta-date">Jan 15, 2025</div>
                    <div className="n08_icon-embed-custom2 icon-embed-custom n08_w-embed2 w-embed">
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
                    <div className="n08_blog_meta-author">0g</div>
                  </div>

                  <div className="n08_spacer-small spacer-small"></div>

                  <div className="n08_max-width-large max-width-large n08_text-align-center text-align-center">
                    <h1 className="n08_heading-style-h3 heading-style-h3">
                      The 0G Ecosystem
                    </h1>
                  </div>

                  <div className="n08_spacer-small2 spacer-small"></div>

                  <div className="n08_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n08_link-icon-light link-icon-light n08_is-static is-static n08_w-inline-block w-inline-block"
                    >
                      <div className="n08_icon-embed-xsmall1 icon-embed-xsmall n08_w-embed3 w-embed">
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
                      className="n08_link-icon-light2 link-icon-light n08_is-static2 is-static n08_w-inline-block2 w-inline-block"
                    >
                      <div className="n08_icon-embed-xsmall2 icon-embed-xsmall n08_w-embed4 w-embed">
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
                      className="n08_link-icon-light3 link-icon-light n08_is-static3 is-static n08_w-inline-block3 w-inline-block"
                    >
                      <div className="n08_icon-embed-xsmall3 icon-embed-xsmall n08_w-embed5 w-embed">
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

          <section className="n08_section_legal-content section_legal-content">
            <div className="n08_padding-global2 padding-global">
              <div className="n08_padding-section-medium padding-section-medium">
                <div className="n08_container-small container-small">
                  <div className="n08_legal-content_outer">
                    <div className="n08_legal-content_component legal-content_component">
                      <div className="n08_blog-rich-text blog-rich-text n08_w-richtext w-richtext">
                        <p>
                          0G may still be relatively young, but we’ve rapidly
                          become a cornerstone of the Web3 landscape. Throughout
                          2024, we’ve forged partnerships and integrations with
                          top projects across every major Web3 vertical,
                          consistently pushing the boundaries of what
                          decentralized AI infrastructure can achieve.
                        </p>
                        <p>
                          Things have evolved rapidly since{' '}
                          <a href="https://0g.ai/blog/the-0g">
                            our first ecosystem report
                          </a>
                          . We’ve not only expanded our partner network but have
                          also entered exciting new domains within Web3. For
                          example, on the demand side, we are now integrating
                          with projects in DePIN, cross-chain infrastructure,
                          and AI-powered gaming, showcasing the versatility of
                          our technology.
                        </p>
                        <p>
                          As the first Artificial Intelligence Layer (AIL), 0G
                          introduces a new category of modular infrastructure
                          purpose-built for the age of decentralized
                          intelligence. Together, 0G’s core technologies unlock
                          what we call Infinite AI—an open, composable ecosystem
                          where any project can build, scale, and monetize
                          intelligent applications.
                        </p>
                        <p>
                          In this report, we’ll explore how projects across AI,
                          gaming, and more are actively leveraging 0G&apos;s
                          AIL—also referred to as our{' '}
                          <a
                            href="https://0g.ai/blog/reintroducing-0g-the-first-decentralized-ai-operating-system"
                            target="_blank"
                            rel="noreferrer"
                          >
                            decentralized AI Operating System (deAIOS)
                          </a>
                          —demonstrating the adaptability and impact of our
                          technology.
                        </p>
                        <p>It is split into two sections:</p>
                        <ul role="list">
                          <li>
                            <strong>Why the Exceptional Growth? </strong>A
                            detailed exploration of 0G’s transformation into
                            the world’s first deAIOS, highlighting the unique
                            modular infrastructure and decentralized solutions
                            driving widespread adoption across Web3.
                          </li>
                          <li>
                            <strong>Projects Powered by 0G:</strong> An overview
                            of projects leveraging 0G’s deAIOS for storage, data
                            availability, AI resources, and more, across every
                            Web3 vertical.&nbsp;
                          </li>
                          <li>
                            <strong>0G’s Ecosystem Backbone:</strong> The
                            foundational technologies enabling 0G’s success,
                            including GPUs, indexing tools, oracles, ZK tech,
                            interoperability infrastructure, and more.
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Unpacking 0G’s Momentum: The Key to Our Success
                          </strong>
                        </p>
                        <p>
                          Today’s AI infrastructure is highly centralized,
                          leading to issues around data ownership, transparency,
                          monetization, and incentive alignment. Until now,
                          decentralizing AI has been largely unfeasible due to
                          limitations in scalability, latency, and the
                          coordination of distributed systems for
                          high-performance workloads.
                        </p>
                        <p>
                          0G redefines what’s possible by serving as the
                          foundational layer for decentralized AI, empowering
                          users with full control over their data alongside
                          transparent decision-making and equitable
                          monetization. At the heart of this transformation is
                          our ability to orchestrate distributed hardware
                          resources, such as storage, computational power, and
                          data availability, via our deAIOS.
                        </p>
                        <p>
                          By leveraging an integrated modular system with
                          advanced technology, 0G’s AI infrastructure can
                          integrate with any project or workflow to bring
                          decentralized AI on-chain at last.
                        </p>
                        <p>
                          This includes various architectural components
                          designed to support distinct aspects of AI
                          workflows:&nbsp;
                        </p>
                        <ul role="list">
                          <li>
                            <strong>0G Storage:</strong> A decentralized network
                            built to handle massive data loads efficiently and
                            securely.&nbsp;
                          </li>
                          <li>
                            <strong>0G DA (Data Availability):</strong> An
                            infinitely scalable and programmable data
                            availability layer that provides seamless access
                            and verification of data for end-users.&nbsp;
                          </li>
                          <li>
                            <strong>0G Service Marketplace: </strong>An AI
                            services marketplace platform for inference, with
                            more, such as AI models and datasets, to be added
                            shortly in 2025.
                          </li>
                          <li>
                            <strong>0G Compute: </strong>An AI services
                            marketplace for computing resources such as GPUs by
                            partners of ours like Aethir and Akash Network.
                          </li>
                        </ul>
                        <p>
                          Any project interested in on-chain data storage, fast
                          and low-cost data availability, access to any form of
                          computational resource, and more can leverage 0G as a
                          one-stop platform—a unified stack that includes
                          compute, storage, data availability, and services.
                          This dramatically reduces the integration overhead
                          that most Web3 projects face when assembling
                          decentralized AI infrastructure.
                        </p>
                        <p>
                          For instance, 0G empowers gaming projects to operate
                          entirely on-chain without compromising performance or
                          cost efficiency. Meanwhile, DePIN projects rely on 0G
                          for secure metadata storage and rapid data retrieval,
                          enabling seamless communication between decentralized
                          systems.
                        </p>
                        <p>
                          <strong>Projects using 0G</strong>
                        </p>
                        <h3>
                          <strong>AI Projects</strong>
                        </h3>
                        <p>
                          An existing issue for AI projects is that they
                          struggle to store their data fully on-chain and to
                          retrieve it quickly. Even if they use an existing
                          on-chain database, it’s likely disconnected from AI
                          systems, which introduces interoperability issues and
                          processing delays.
                        </p>
                        <p>
                          0G presents an all-in-one AI system where any AI
                          system can not only store their vast datasets using
                          0G, but also access other datasets and have built-in
                          access to highly scalable data availability and
                          access to GPU computational resources as needed.
                        </p>
                        <p>
                          The AI projects that 0G supports can be classified
                          into a few different verticals:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Inference &amp; Models</strong>: Provide
                            real-time, on-chain AI inference capabilities and
                            access to pre-trained AI models for efficient
                            deployment. For example,{' '}
                            <a href="https://cryptopond.xyz/">Pond</a> is
                            creating a hub of community-generated AI models,
                            which{' '}
                            <a href="https://www.assisterr.ai/">Assisterr</a> is
                            focused on bringing small language models (SLMs)
                            on-chain for niche applications.
                          </li>
                          <li>
                            <strong>Training &amp; Finetuning</strong>: Enable
                            developers to train and fine-tune AI models
                            securely using decentralized storage and
                            computational resources. For example,{' '}
                            <a href="https://www.bagel.net/">Bagel</a>{' '}
                            coordinates data storage for fine-tuning AI models,
                            so that developers can efficiently manage and
                            retrieve datasets.
                          </li>
                          <li>
                            <strong>Applications</strong>: Support diverse
                            AI-powered applications, including analytics tools,
                            recommendation systems, and more. This includes{' '}
                            <a href="https://www.capx.ai/">Capx</a>, which will
                            leverage 0G Storage for their vector databases.
                          </li>
                          <li>
                            <strong>Agents</strong>: Facilitate the creation and
                            deployment of autonomous AI agents with secure
                            access to on-chain datasets and compute resources,
                            such as{' '}
                            <a href="https://talus.network/">Talus</a> and{' '}
                            <a href="https://www.theoriq.ai/">Theoriq</a>.
                          </li>
                        </ul>
                        <p>
                          Many of these projects are also leveraging 0G DA and
                          0G Service Marketplace, such as Talus, which uses 0G
                          DA to access and query data across supported
                          networks.
                        </p>
                        <p>
                          <strong>Gaming</strong>
                        </p>
                        <p>
                          Games have historically faced significant challenges
                          in operating on-chain due to scalability issues, high
                          transaction costs, and the complexity of managing
                          decentralized data in real time. These limitations
                          made it difficult for developers to create games with
                          Web2-like performance, let alone with the integration
                          of AI-driven features that require large-scale
                          computation and data availability.
                        </p>
                        <p>
                          Using 0G, gaming projects can now overcome these
                          barriers by leveraging 0G Storage for secure and
                          decentralized game data, 0G DA for scalable data
                          availability, and 0G Compute for integrating
                          AI-powered gaming mechanics. This infrastructure
                          allows games to operate with real-time responsiveness,
                          verifiable outcomes, and lower development costs, all
                          while providing players with true asset ownership and
                          transparency.
                        </p>
                        <p>
                          For example,{' '}
                          <a href="https://www.bladedao.games/">Blade Games</a>{' '}
                          stores on-chain game state using 0G, including storing
                          their ZK Proofs that anyone can then verify, as well
                          as task IDs (unique identifiers for in-game actions)
                          and more.
                        </p>
                        <p>
                          Similarly, Neon Machine (Founders of{' '}
                          <a href="https://www.shrapnel.com/">Shrapnel</a>) will
                          integrate 0G Storage to ensure the integrity of game
                          assets in its shooter game, while{' '}
                          <a href="https://www.gaimin.io/">Gaimin</a> is
                          leveraging 0G DA to stream rewards to its players and
                          0G DA to store metadata, such as user ownership of
                          in-game assets.
                        </p>
                        <h4>
                          <strong>Zero-Knowledge</strong>
                        </h4>
                        <p>
                          Zero-knowledge proofs (ZK proofs) have emerged as a
                          transformative technology in Web3, enabling trustless
                          verification without revealing sensitive information.
                          However, implementing ZK-based solutions at scale
                          remains a challenge for many projects, due to the
                          computational intensity of generating proofs, managing
                          secure environments, and ensuring efficient
                          integration with decentralized systems.
                        </p>
                        <p>
                          Projects like{' '}
                          <a href="https://www.gevulot.com/">Gevulot</a> and{' '}
                          <a href="https://orochi.network/">Orochi Network</a>{' '}
                          rely on 0G to support ZK-proof generation and secure
                          computational environments, such as Orochi storing
                          their zkDatabase data on 0G and optimizing their
                          zkMemory’s AI model, deploying using 0G DA.
                        </p>
                        <p>
                          <strong>Cross-Chain and Web3 Infrastructure</strong>
                        </p>
                        <p>
                          Existing AI infrastructure solutions are fragmented
                          and operate across only select networks, such as
                          select Layer 2 networks. 0G’s network itself is
                          compatible with other networks, and 0G DA can help to
                          bridge assets and information securely across
                          networks.
                        </p>
                        <p>
                          That’s why 0G is supporting rollups-as-a-service like{' '}
                          <a href="https://www.altlayer.io/">AltLayer</a>,{' '}
                          <a href="https://www.caldera.xyz/">Caldera</a>, and{' '}
                          <a href="https://www.rome.builders/">Rome Protocol</a>
                          .
                        </p>
                        <p>
                          Seamless interoperability is essential to scaling
                          Web3. 0G has partnered with infrastructure projects
                          like Rome Protocol and AltLayer, enabling scalable
                          data solutions for app chains and cross-chain
                          services. Platforms like Hemera and Redstone enhance
                          data indexing and oracle functionality, while leaders
                          such as Galxe integrate 0G across AI, storage, and
                          marketing applications.
                        </p>
                        <p>
                          <strong>L1s, L2s, and Rollups-as-a-Service</strong>
                        </p>
                        <p>
                          Web3 will have a focus on app-chains suited for every
                          purpose, but to make this a reality, they require
                          robust data availability and secure interoperability
                          to function effectively. 0G not only provides this,
                          but also native access to other products and
                          services, including 0G Storage, as well as 0G Service
                          Marketplace, so that anyone may access AI resources
                          like GPUs.
                        </p>
                        <p>
                          This means that any Layer 1, Layer 2, or
                          Rollup-as-a-Service can automatically offer all
                          builders on their network access to AI resources and
                          tooling.
                        </p>
                        <p>
                          This is critical, as it’s a key differentiator for
                          builders seeking where to build, and provides them
                          with an all-in-one solution rather than requiring
                          them to integrate with various fragmented components
                          (e.g., a storage solution and a different data
                          availability solution) and piece them together.
                        </p>
                        <p>
                          AltLayer, Caldera, and{' '}
                          <a href="https://www.rome.builders/">Rome Protocol</a>{' '}
                          are prominent RaaS providers who are using 0G to
                          ensure high-performance, scalable, and decentralized
                          infrastructure for their app chains. Meanwhile,
                          leading Layer 1s and Layer 2s, including{' '}
                          <a href="https://arbitrum.io/">Arbitrum</a>,{' '}
                          <a href="https://www.optimism.io/">Optimism</a>, and
                          others, also use 0G to enhance scalability,
                          interoperability, and access to AI resources.
                        </p>
                        <p>
                          <strong>DePin</strong>
                        </p>
                        <p>
                          Decentralized Physical Infrastructure Networks (DePIN)
                          face significant hurdles in bridging the gap between
                          real-world data and on-chain applications. These
                          challenges include secure and efficient data
                          collection, high costs associated with scaling, and
                          the complexity of maintaining decentralized
                          communication infrastructure. Additionally, accessing
                          affordable and scalable computational resources for
                          real-time applications remains a bottleneck for many
                          DePIN projects.
                        </p>
                        <p>0G addresses these issues head-on by providing a robust foundation for DePIN networks.&nbsp;</p>
                        <p>For example:</p>
                        <ul role="list">
                          <li>
                            <a href="https://iotex.io/">IoTeX</a> and{' '}
                            <a href="https://mizu.global/">Mizu</a>: Leverage 0G
                            for secure, decentralized data collection and
                            communication across devices, ensuring reliable
                            integration between physical and on-chain systems.
                          </li>
                          <li>
                            <a href="https://hyperbolic.xyz/">Hyperbolic</a>:
                            Democratizes access to GPU power using 0G, enabling
                            more equitable and cost-efficient computational
                            infrastructure for DePIN projects.
                          </li>
                          <li>
                            <a href="https://huddle01.com/">Huddle01</a> and{' '}
                            <a href="https://www.netmind.ai/">NetMind</a>:
                            utilize 0G for decentralized storage and
                            communication infrastructure to power real-time
                            applications.&nbsp;
                          </li>
                        </ul>
                        <p>
                          By providing the tools and infrastructure needed to
                          overcome these challenges, 0G is enabling DePIN
                          networks to build the next generation of connected,
                          decentralized systems.
                        </p>
                        <p>
                          <strong>Other Projects</strong>
                        </p>
                        <p>
                          0G serves a diverse range of projects, showcasing the
                          versatility of its infrastructure across nearly every&nbsp;
                        </p>
                        <p>
                          One example is 0G supporting decentralized identity
                          (DID) projects like{' '}
                          <a href="https://www.humanity.org/">Humanity Protocol</a>,
                          a decentralized identity project using 0G Storage to
                          store metadata and 0G DA to quickly query and verify
                          it.
                        </p>
                        <p>
                          Meanwhile, <a href="https://app.galxe.com/">Galxe</a>{' '}
                          is a decentralized super app that’s highly prominent
                          in the industry and is supported by 0G Serving, DA,
                          and Storage for scalable and secure operations.
                        </p>
                        <p>
                          <strong>Projects 0G is Leveraging</strong>
                        </p>
                        <p>
                          0G has also partnered with some critical projects to
                          advance its own technology.
                        </p>
                        <p>
                          For example, 0G uses GPUs to accelerate erasure coding
                          (used by 0G Storage to split up data into chunks and
                          disperse them). To that end, 0G is leveraging projects
                          like <a href="https://aethir.com/">Aethir</a>,{' '}
                          <a href="https://www.spheron.network/">Spheron</a>,
                          and <a href="https://www.zeeve.io/">Zeeve</a> for this
                          computational power.
                        </p>
                        <p>
                          0G also must stream data to those building with 0G,
                          meaning that working with leading Oracle providers
                          like <a href="https://www.thehemera.com/">Hemera</a>{' '}
                          and <a href="https://quex.tech/">Quex</a> is critical.
                          This enables projects built on 0G to customize their
                          data sources, expanding the breadth and diversity of
                          available data points while enhancing fault tolerance.
                        </p>
                        <p>
                          We’re also partnering with{' '}
                          <a href="https://www.eigenlayer.xyz/">EigenLayer</a>{' '}
                          and <a href="https://babylonlabs.io/">Babylon</a> to
                          provide restaking solutions that improve network
                          security, which our partners may leverage or that we
                          are considering integrating into future products of
                          ours.
                        </p>
                        <h3>
                          <strong>2025: What’s Ahead?</strong>
                        </h3>
                        <p>
                          As we enter 2025, 0G is poised to deepen its
                          integrations with leading projects across every Web3
                          vertical, solidifying our position as a key enabler
                          of decentralized AI innovation.
                        </p>
                        <p>
                          Building on this momentum, we’re expanding our suite
                          of products, including the newly launched{' '}
                          <strong>Compute Network</strong>, which offers a
                          decentralized marketplace for AI services such as
                          inference, RAG, and model hosting.
                        </p>
                        <p>
                          We have other products that will be announced and
                          will share more information about soon.
                        </p>
                        <p>
                          The reality is clear: nearly any project can unlock
                          new opportunities by building on 0G—whether that’s
                          through verifiable AI agents, fast data availability,
                          or GPU-powered compute.
                        </p>
                        <p>
                          If you’re ready to join the future of Infinite AI,{' '}
                          <a
                            href="https://discord.com/invite/0glabs"
                            target="_blank"
                            rel="noreferrer"
                          >
                            join our Discord
                          </a>{' '}
                          or explore{' '}
                          <a
                            href="https://docs.0g.ai/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            the docs
                          </a>{' '}
                          to start integrating with 0G today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n08_section_filter section_filter">
            <div className="n08_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n08_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n08_cms-grid_list cms-grid_list n08_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n08_cms-grid_item cms-grid_item n08_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n08_cms-grid_content-wrapper cms-grid_content-wrapper n08_is-blog2 is-blog n08_w-inline-block4 w-inline-block"
                >
                  <div className="n08_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n08_cms-grid_image cms-grid_image"
                    />
                    <div className="n08_spacer-medium spacer-medium n08_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n08_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n08_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n08_related_category">News</div>
                        <div className="n08_icon-embed-custom3 icon-embed-custom n08_w-embed6 w-embed">
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
                        <div className="n08_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n08_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n08_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n08_cms-grid_item2 cms-grid_item n08_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n08_cms-grid_content-wrapper2 cms-grid_content-wrapper n08_is-blog3 is-blog n08_w-inline-block5 w-inline-block"
                >
                  <div className="n08_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n08_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n08_spacer-medium2 spacer-medium n08_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n08_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n08_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n08_related_category2">News</div>
                        <div className="n08_icon-embed-custom4 icon-embed-custom n08_w-embed7 w-embed">
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
                        <div className="n08_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n08_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n08_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n08_cms-grid_item3 cms-grid_item n08_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n08_cms-grid_content-wrapper3 cms-grid_content-wrapper n08_is-blog4 is-blog n08_w-inline-block6 w-inline-block"
                >
                  <div className="n08_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n08_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n08_spacer-medium3 spacer-medium n08_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n08_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n08_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n08_related_category3">News</div>
                        <div className="n08_icon-embed-custom5 icon-embed-custom n08_w-embed8 w-embed">
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
                        <div className="n08_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n08_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n08_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n08_cms-grid_item4 cms-grid_item n08_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n08_cms-grid_content-wrapper4 cms-grid_content-wrapper n08_is-blog5 is-blog n08_w-inline-block7 w-inline-block"
                >
                  <div className="n08_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n08_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n08_spacer-medium4 spacer-medium n08_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n08_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n08_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n08_related_category4">News</div>
                        <div className="n08_icon-embed-custom6 icon-embed-custom n08_w-embed9 w-embed">
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
                        <div className="n08_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n08_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n08_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n08_copy-toast ${showToast ? 'n08_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
