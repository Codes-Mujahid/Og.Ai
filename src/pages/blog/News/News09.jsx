import React, { useState } from 'react'
import './News09.css'

export default function News09() {
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
    const text = encodeURIComponent('0G Serving')
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
    <div className="n09_container">
      <div className="n09_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n09_hide hide">
          <div className="n09_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n09_socialshare-title">0G Serving</div>
        </div>

        <main className="n09_main-wrapper main-wrapper">
          <section className="n09_section_hero section_hero n09_is-vertical is-vertical">
            <div className="n09_padding-global padding-global">
              <div className="n09_container-large container-large">
                <div className="n09_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n09_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n09_hero_bg-image2 hero_bg-image n09_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n09_hero_bg-gradient hero_bg-gradient n09_is-blog is-blog"></div>
                </div>

                <div className="n09_hero_content-component hero_content-component n09_is-vertical2 is-vertical">
                  <div className="n09_blog_meta-wrapper blog_meta-wrapper n09_is-white is-white">
                    <div className="n09_blog_meta-category">News</div>
                    <div className="n09_icon-embed-custom1 icon-embed-custom n09_w-embed1 w-embed">
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
                    <div className="n09_blog_meta-date">Oct 29, 2024</div>
                    <div className="n09_icon-embed-custom2 icon-embed-custom n09_w-embed2 w-embed">
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
                    <div className="n09_blog_meta-author">0g</div>
                  </div>

                  <div className="n09_spacer-small spacer-small"></div>

                  <div className="n09_max-width-large max-width-large n09_text-align-center text-align-center">
                    <h1 className="n09_heading-style-h3 heading-style-h3">
                      0G Serving
                    </h1>
                  </div>

                  <div className="n09_spacer-small2 spacer-small"></div>

                  <div className="n09_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n09_link-icon-light link-icon-light n09_is-static is-static n09_w-inline-block w-inline-block"
                    >
                      <div className="n09_icon-embed-xsmall1 icon-embed-xsmall n09_w-embed3 w-embed">
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
                      className="n09_link-icon-light2 link-icon-light n09_is-static2 is-static n09_w-inline-block2 w-inline-block"
                    >
                      <div className="n09_icon-embed-xsmall2 icon-embed-xsmall n09_w-embed4 w-embed">
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
                      className="n09_link-icon-light3 link-icon-light n09_is-static3 is-static n09_w-inline-block3 w-inline-block"
                    >
                      <div className="n09_icon-embed-xsmall3 icon-embed-xsmall n09_w-embed5 w-embed">
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

          <section className="n09_section_legal-content section_legal-content">
            <div className="n09_padding-global2 padding-global">
              <div className="n09_padding-section-medium padding-section-medium">
                <div className="n09_container-small container-small">
                  <div className="n09_legal-content_outer">
                    <div className="n09_legal-content_component legal-content_component">
                      <div className="n09_blog-rich-text blog-rich-text n09_w-richtext w-richtext">
                        <p>
                          0G is building the world’s first Artificial
                          Intelligence Layer (AIL)—a new category of modular
                          infrastructure designed to bring verifiable,
                          composable intelligence onchain. At the heart of this
                          AIL is 0G’s decentralized AI Operating System (deAIOS),
                          a unified platform that combines compute, storage, and
                          data availability.
                        </p>
                        <p>This infrastructure has three different components:</p>
                        <ol role="list">
                          <li>
                            <strong>0G Storage:</strong> For decentralized data
                            storage.
                          </li>
                          <li>
                            <strong>0G DA: </strong>A decentralized data
                            availability layer.
                          </li>
                          <li>
                            <strong>0G Serving: </strong>A decentralized
                            marketplace for AI services.
                          </li>
                        </ol>
                        <p>
                          Together, these form a unified, one-stop platform for
                          decentralized AI, enabling developers to build, serve,
                          and verify intelligent applications—all onchain. This
                          is what we call Infinite AI: a future of modular,
                          verifiable, and open intelligence.. Notably, we’ve
                          already covered{' '}
                          <a href="https://0g.ai/blog/0g-storage">0G Storage</a>{' '}
                          and{' '}
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            0G DA
                          </a>{' '}
                          in-depth in other blog posts.
                        </p>
                        <p>
                          In this article, we focus on 0G Serving, the AI
                          services layer of our AIL. 0G Serving is a decentralized
                          peer-to-peer marketplace where users can access
                          inference, fine-tuning, and other model-serving
                          capabilities—and where providers can permissionlessly
                          list and monetize AI services.
                        </p>
                        <p>
                          0G Serving is not live yet, but will be released
                          shortly with updates coming{' '}
                          <a href="https://x.com/0G_labs">via our Twitter.</a>
                        </p>
                        <p>In this piece, we will cover:</p>
                        <ul role="list">
                          <li>AI Workload Management and Service Interaction</li>
                          <li>Scalability and Incentive Structure</li>
                          <li>Integration with dAIOS</li>
                          <li>Getting Started</li>
                        </ul>
                        <h3>
                          <strong>
                            AI Workload Management and Service Interaction
                          </strong>
                        </h3>
                        <p>
                          0G Serving handles various AI tasks, from model
                          inference to data retrieval and training. It enables
                          real-time interaction with decentralized AI
                          applications while ensuring transparency and user
                          control. This framework is essential for AI models
                          that require constant updates and large-scale
                          computations.
                        </p>
                        <p>
                          A key advantage of the 0G platform is its ability to
                          efficiently manage &quot;hot data&quot;, meaning data
                          that is frequently accessed or rapidly processed, such
                          as financial market feeds, user activity logs, or
                          dynamically evolving datasets. 0G incentivizes data
                          storage providers (whether 0G Storage or external
                          on-chain storage) to minimize latency, a critical
                          factor for real-time AI processing where rapid data
                          retrieval is crucial.&nbsp;
                        </p>
                        <p>
                          This low-latency environment supports applications
                          that rely on fast AI processing, such as AI-driven
                          trading algorithms, on-chain AI Agents, high-performance
                          dApps, or real-time user interaction analytics.
                        </p>
                        <p>Sellers who are providing these AI services can:</p>
                        <ul role="list">
                          <li>
                            <strong>Set Pricing</strong>: Charging for AI
                            services based on demand, the type of GPUs used, and
                            more.
                          </li>
                          <li>
                            <strong>Specify Task Verification Methods</strong>:
                            Implementing custom validation processes to confirm
                            accurate task completion. For example, automated
                            smart contract checks or “proofs of completion” could
                            verify that the model selected is the one that&apos;s
                            actually being used to generate the response. This
                            compares with most of AI, which is a black box and
                            cannot be held accountable.
                          </li>
                          <li>
                            <strong>Accept Payments in $0G</strong>: Pre-payments
                            in $0G tokens are held in smart contracts and
                            released once tasks are completed and verified.
                          </li>
                        </ul>
                        <p>
                          For example, an AI model provider might set a dynamic
                          price based on the complexity of the inference task,
                          charging higher fees for more resource-intensive
                          requests.&nbsp;
                        </p>
                        <p>
                          Users pre-charge their accounts via smart contracts
                          when they request services.&nbsp;
                        </p>
                        <p>
                          The interaction between users and service providers is
                          governed by signatures attached to each request and
                          response. Users verify the results of their requests,
                          and once satisfied, providers can submit a trace of
                          the transaction to the smart contract for fee
                          settlement.
                        </p>
                        <p>
                          0G has already partnered with an{' '}
                          <a href="https://0g.ai/blog/the-0g-ecosystem-a-comprehensive-overview">
                            extensive number of projects
                          </a>{' '}
                          that will benefit from listing their services via 0G
                          Serving once it goes live.
                        </p>
                        <h3>
                          <strong>Scalability and Incentive Structure</strong>
                        </h3>
                        <p>
                          0G is designed for infinite scalability, utilizing two{' '}
                          <a
                            href="https://0g.ai/blog/0g-s-data-availability-layer#:~:text=0G%20Consensus%20can%20be,as%20shared%20staking."
                            target="_blank"
                            rel="noreferrer"
                          >
                            types of sharding{' '}
                          </a>
                          for optimal performance:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Data Sharding</strong>: Large datasets are
                            split into data chunks and stored redundantly across
                            0G Storage, ensuring fault tolerance and fast
                            access.
                          </li>
                          <li>
                            <strong>Consensus Sharding</strong>: Data
                            Availability (DA) nodes communicate with the
                            consensus network, 0G Consensus, which allows for an
                            arbitrary number of parallel networks managed by the
                            same validators. Validators only stake once on
                            Ethereum mainnet but engage in{' '}
                            <strong>shared staking</strong> across networks. This
                            means that new consensus networks can be added
                            quickly and managed by the same set of validators
                            without having to bootstrap a new validator set.
                          </li>
                        </ol>
                        <p>
                          This dual-sharding approach, at both the data and
                          consensus levels, enables 0G to scale while managing
                          vast datasets. In turn, a range of high-performance AI
                          applications can thrive fully on-chain.
                        </p>
                        <p>
                          0G Serving operates within{' '}
                          <strong>an open-fee market,</strong> allowing service
                          providers to set competitive pricing for their AI
                          offerings based on market conditions. This structure
                          aims to outperform centralized AI systems in terms of
                          pricing while delivering the key benefits of
                          decentralized AI: data ownership, enhanced
                          transparency, and more equitable monetization.&nbsp;
                        </p>
                        <h3>
                          <strong>Integration with dAIOS</strong>
                        </h3>
                        <p>
                          0G Serving integrates with 0G’s storage and data
                          availability layers, creating a complete dAIOS that
                          handles all aspects of AI workflows efficiently.
                        </p>
                        <p>
                          We covered{' '}
                          <a href="https://0g.ai/blog/reintroducing-0g-the-first-decentralized-ai-operating-system">
                            0G’s role as a dAIOS in-depth here.
                          </a>
                        </p>
                        <p>At a high level:</p>
                        <ul role="list">
                          <li>
                            0G is the world’s first Decentralized AI Operating
                            System (dAIOS), providing scalable, transparent
                            infrastructure for AI through decentralized storage,
                            data availability, and service components.
                          </li>
                          <li>
                            The system consists of <strong>0G Storage</strong>{' '}
                            for data storage, <strong>0G DA</strong> for scalable
                            data availability, and <strong>0G Serving</strong>{' '}
                            for AI services, ensuring end-to-end support for AI
                            workflows.
                          </li>
                          <li>
                            0G addresses key issues in centralized AI, such as
                            data ownership, transparency, and fair monetization,
                            offering a decentralized alternative with better
                            incentive structures.
                          </li>
                        </ul>
                        <p>
                          All in all, 0G is bringing decentralized AI to
                          life—and we want you to join us!
                        </p>
                        <p>
                          Whether you’re a developer, a Web3 project, or an AI
                          service provider, 0G can help you build, scale, and
                          monetize AI solutions in a decentralized environment.
                          If you’re ready to be a part of the future of AI,{' '}
                          <a href="https://0g.ai/contact">please reach out</a>.
                        </p>
                        <p>
                          We’d love to explore partnership opportunities and
                          help you start building with us today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n09_section_filter section_filter">
            <div className="n09_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n09_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n09_cms-grid_list cms-grid_list n09_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n09_cms-grid_item cms-grid_item n09_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n09_cms-grid_content-wrapper cms-grid_content-wrapper n09_is-blog2 is-blog n09_w-inline-block4 w-inline-block"
                >
                  <div className="n09_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n09_cms-grid_image cms-grid_image"
                    />
                    <div className="n09_spacer-medium spacer-medium n09_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n09_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n09_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n09_related_category">News</div>
                        <div className="n09_icon-embed-custom3 icon-embed-custom n09_w-embed6 w-embed">
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
                        <div className="n09_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n09_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n09_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n09_cms-grid_item2 cms-grid_item n09_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n09_cms-grid_content-wrapper2 cms-grid_content-wrapper n09_is-blog3 is-blog n09_w-inline-block5 w-inline-block"
                >
                  <div className="n09_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n09_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n09_spacer-medium2 spacer-medium n09_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n09_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n09_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n09_related_category2">News</div>
                        <div className="n09_icon-embed-custom4 icon-embed-custom n09_w-embed7 w-embed">
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
                        <div className="n09_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n09_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n09_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n09_cms-grid_item3 cms-grid_item n09_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n09_cms-grid_content-wrapper3 cms-grid_content-wrapper n09_is-blog4 is-blog n09_w-inline-block6 w-inline-block"
                >
                  <div className="n09_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n09_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n09_spacer-medium3 spacer-medium n09_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n09_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n09_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n09_related_category3">News</div>
                        <div className="n09_icon-embed-custom5 icon-embed-custom n09_w-embed8 w-embed">
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
                        <div className="n09_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n09_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n09_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n09_cms-grid_item4 cms-grid_item n09_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n09_cms-grid_content-wrapper4 cms-grid_content-wrapper n09_is-blog5 is-blog n09_w-inline-block7 w-inline-block"
                >
                  <div className="n09_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n09_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n09_spacer-medium4 spacer-medium n09_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n09_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n09_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n09_related_category4">News</div>
                        <div className="n09_icon-embed-custom6 icon-embed-custom n09_w-embed9 w-embed">
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
                        <div className="n09_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n09_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n09_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n09_copy-toast ${showToast ? 'n09_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
