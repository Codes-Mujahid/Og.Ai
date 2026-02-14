import React, { useState } from 'react'
import './News10.css'

export default function News10() {
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
      'Reintroducing 0G: The First Decentralized AI Operating System'
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
    <div className="n10_container">
      <div className="n10_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n10_hide hide">
          <div className="n10_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n10_socialshare-title">
            Reintroducing 0G: The First Decentralized AI Operating System
          </div>
        </div>

        <main className="n10_main-wrapper main-wrapper">
          <section className="n10_section_hero section_hero n10_is-vertical is-vertical">
            <div className="n10_padding-global padding-global">
              <div className="n10_container-large container-large">
                <div className="n10_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n10_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n10_hero_bg-image2 hero_bg-image n10_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n10_hero_bg-gradient hero_bg-gradient n10_is-blog is-blog"></div>
                </div>

                <div className="n10_hero_content-component hero_content-component n10_is-vertical2 is-vertical">
                  <div className="n10_blog_meta-wrapper blog_meta-wrapper n10_is-white is-white">
                    <div className="n10_blog_meta-category">News</div>
                    <div className="n10_icon-embed-custom1 icon-embed-custom n10_w-embed1 w-embed">
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
                    <div className="n10_blog_meta-date">Oct 1, 2024</div>
                    <div className="n10_icon-embed-custom2 icon-embed-custom n10_w-embed2 w-embed">
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
                    <div className="n10_blog_meta-author">0g</div>
                  </div>

                  <div className="n10_spacer-small spacer-small"></div>

                  <div className="n10_max-width-large max-width-large n10_text-align-center text-align-center">
                    <h1 className="n10_heading-style-h3 heading-style-h3">
                      Reintroducing 0G: The First Decentralized AI Operating
                      System
                    </h1>
                  </div>

                  <div className="n10_spacer-small2 spacer-small"></div>

                  <div className="n10_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n10_link-icon-light link-icon-light n10_is-static is-static n10_w-inline-block w-inline-block"
                    >
                      <div className="n10_icon-embed-xsmall1 icon-embed-xsmall n10_w-embed3 w-embed">
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
                      className="n10_link-icon-light2 link-icon-light n10_is-static2 is-static n10_w-inline-block2 w-inline-block"
                    >
                      <div className="n10_icon-embed-xsmall2 icon-embed-xsmall n10_w-embed4 w-embed">
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
                      className="n10_link-icon-light3 link-icon-light n10_is-static3 is-static n10_w-inline-block3 w-inline-block"
                    >
                      <div className="n10_icon-embed-xsmall3 icon-embed-xsmall n10_w-embed5 w-embed">
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

          <section className="n10_section_legal-content section_legal-content">
            <div className="n10_padding-global2 padding-global">
              <div className="n10_padding-section-medium padding-section-medium">
                <div className="n10_container-small container-small">
                  <div className="n10_legal-content_outer">
                    <div className="n10_legal-content_component legal-content_component">
                      <div className="n10_blog-rich-text blog-rich-text n10_w-richtext w-richtext">
                        <p>
                          0G is no longer just a modular AI blockchain—it’s the
                          world’s first Artificial Intelligence Layer (AIL): a
                          new category of infrastructure where compute, storage,
                          and intelligence are modular, verifiable, and onchain
                          by default.
                        </p>
                        <p>
                          AI infrastructure today is deeply centralized, raising
                          concerns around data ownership, opaque decision-making,
                          and misaligned incentives. 0G solves this by
                          coordinating decentralized compute, storage, and data
                          availability into a unified, verifiable platform—what
                          we call a Decentralized AI Operating System (dAIOS).
                        </p>
                        <p>
                          By leveraging blockchain to coordinate distributed
                          hardware resources through a modular architecture, 0G
                          delivers scalable, transparent, and auditable
                          infrastructure that can integrate with any AI
                          workflow, bringing decentralized intelligence onchain
                          at last.
                        </p>
                        <p>In this article, we will cover:</p>
                        <ul role="list">
                          <li>
                            <strong>The Importance of 0G as a dAIOS</strong>: 0G,
                            as the first decentralized AI Operating System,
                            manages AI workflows by efficiently coordinating
                            storage, data availability, and computation
                            resources across a permissionless network. This
                            provides the infrastructure needed to make
                            decentralized AI a reality.
                          </li>
                          <li>
                            <strong>0G&apos;s Unique Architecture</strong>: 0G&apos;s
                            modular components, including Storage, Data
                            Availability, and Serving, work in tandem to serve
                            any AI needs or use cases.
                          </li>
                          <li>
                            <strong>Ecosystem Growth &amp; Use Cases</strong>:
                            0G’s fast-growing ecosystem covers a range of areas
                            (AI, DeFi, gaming, and more), with countless use
                            cases beyond just AI.&nbsp;
                          </li>
                        </ul>
                        <h2>
                          <strong>
                            What Is a Decentralized AI Operating System?
                          </strong>
                        </h2>
                        <p>
                          An operating system (OS) is a critical piece of
                          software that manages a computer&apos;s hardware and
                          software. For example, Microsoft Windows, Linux,
                          macOS, and Android are the operating systems that
                          power the most successful technology companies in
                          existence.&nbsp;
                        </p>
                        <p>
                          Before operating systems, computers were manually
                          operated in a time-consuming and highly technical
                          process that severely restricted who could work with
                          them. The first OS was developed in 1956 for IBM
                          computers and was a game changer, allowing for task
                          automation, efficient memory management, batch
                          processing, and more.
                        </p>
                        <p>Until recently, Web3 lacked comparable infrastructure.</p>
                        <p>
                          0G is the first decentralized AI Operating System,
                          managing decentralized hardware resources such as
                          storage, computation, and data availability.
                        </p>
                        <p>
                          With this infrastructure, truly on-chain AI
                          applications have finally become possible, allowing
                          developers to address the limitations of centralized
                          AI. These include:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Ownership: </strong>Centralized AI often
                            sells or misuses personal data, with users having
                            little control or ownership over how their
                            information is collected, stored, or used.
                          </li>
                          <li>
                            <strong>Transparency &amp; Accountability</strong>:
                            Centralized AI operates as black boxes, with opaque
                            decision-making processes and no clear data
                            provenance. Users who provide training data rarely
                            receive adequate rewards for their contributions,
                            and the system lacks transparency in how value is
                            distributed.
                          </li>
                          <li>
                            <strong>Monetization</strong>: Centralized AI
                            monopolizes profits and leaves little incentive for
                            individual contributors.&nbsp;
                          </li>
                          <li>
                            <strong>Alignment</strong>: Centralized AI systems
                            lack oversight and governance processes, with a
                            select group having all authority.
                          </li>
                        </ul>
                        <p>
                          0G addresses all of the above. For instance, with 0G,
                          users can store and manage data on-chain via
                          decentralized storage networks. Meanwhile, there is
                          full data availability allowing for verifiable and
                          transparent AI models, and economic structures can be
                          created that encourage fair monetization and proper
                          goal alignment for all ecosystem participants.
                        </p>
                        <p>
                          This was only possible now, as existing Crypto AI
                          infrastructure lags significantly in terms of
                          throughput, latency, and cost. For example, 0G’s
                          throughput speeds of 50 GB/second per consensus layer
                          makes it 50,000x faster than competitors, at 100x
                          lower cost. Meanwhile, 0G also has a built-in data
                          storage system that makes storage 1000x faster.
                        </p>
                        <h2>
                          <strong>How Does This Work?</strong>
                        </h2>
                        <p>
                          This section provides an overview of the key
                          components that form the foundation of 0G’s
                          decentralized AI Operating System: 0G Storage, 0G DA,
                          and 0G Serving.&nbsp;
                        </p>
                        <p>
                          Each architectural component is designed to support
                          distinct aspects of AI workflows:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>0G Storage</strong>: A decentralized network
                            built to handle massive data loads efficiently and
                            securely.
                          </li>
                          <li>
                            <strong>0G DA (Data Availability)</strong>: An
                            infinitely scalable and programmable data
                            availability layer that provides seamless access and
                            verification of data for end-users.
                          </li>
                          <li>
                            <strong>0G Serving</strong>: A framework that
                            supports AI model inference, data retrieval, and
                            training tasks, allowing real-time interaction with
                            decentralized AI applications.
                          </li>
                        </ol>
                        <p>
                          Each component is modular, meaning it can flexibly
                          adapt to any AI workflows by decoupling different
                          functions such as data storage, availability, and
                          computation into specialized layers.
                        </p>
                        <figure className="n10_w-richtext-align-center w-richtext-align-center n10_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n10_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f5f666525258ad73b0_OVLDOwQ9bYX2xT3SZOgLbVXIo.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          While we provide a brief overview of each, we
                          recommend referring to the{' '}
                          <a href="https://4134984757-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsEYMfeKUqxaOUwhkw6AT%2Fuploads%2Fgit-blob-6f0538c70e09bf3180519342bfc516355c7a12c0%2F0g-whitepaper.pdf?alt=media">
                            0G whitepaper{' '}
                          </a>
                          or <a href="https://0g.ai/blog">recent blog posts</a>{' '}
                          to learn more.
                        </p>
                        <p>
                          <strong>0G Storage</strong>: 0G Storage: Modular,
                          performant, and built for scale. 0G Storage is a
                          decentralized data layer that supports both Web2 and
                          Web3-scale datasets.
                        </p>
                        <p>
                          By using erasure coding, the data is split into
                          smaller, redundant pieces, ensuring security and
                          accessibility even in the event of system failure. 0G
                          Storage is maintained by a network of miners who are
                          incentivized to store and manage data through a unique
                          consensus mechanism known as{' '}
                          <strong>Proof of Random Access (PoRA)</strong>. Miners
                          are periodically challenged to confirm that they
                          actively store specific data chunks.&nbsp;
                        </p>
                        <p>
                          <strong>0G DA</strong>: Infinitely scalable and
                          programmable. 0G’s data availability layer enables
                          fast, verifiable access to data with real-time
                          performance.
                        </p>
                        <p>
                          This works by leveraging randomly chosen Data
                          Availability Nodes through a Verifiable Random
                          Function (VRF), preventing any potential malicious
                          activity. These nodes come to consensus on the
                          availability of data and communicate with the 0G
                          Consensus network for final verification. By allowing
                          new networks to be added and managed by the same
                          validators, 0G enables infinite scalability while
                          maintaining efficiency and security, making it ideal
                          for decentralized applications that require reliable
                          data.&nbsp;
                        </p>
                        <p>
                          <strong>0G Serving</strong>: The AI services layer of
                          the stack. 0G Serving connects developers and model
                          providers in a peer-to-peer marketplace for real-time
                          inference, training, and more.
                        </p>
                        <p>
                          0G Serving allows AI service providers to connect with
                          users, publish their models, and transact through
                          smart contracts. This setup ensures secure, automated
                          payments for services like data processing or
                          computation, distributed across the network for
                          optimal efficiency. Through the decentralization of
                          both services and settlement, 0G Serving provides a
                          scalable and trustless alternative to centralized AI
                          platforms.
                        </p>
                        <h2>
                          <strong>What’s Next?</strong>
                        </h2>
                        <p>0G’s overarching mission is to make AI a public good.</p>
                        <p>
                          To this end, we’re readily supporting a wide range of
                          AI projects that are building at the forefront of the
                          decentralized AI space.
                        </p>
                        <p>
                          We’ve also received extensive interest in our
                          technology due to our overarching ability to provide
                          fast, low-cost, and highly scalable data storage and
                          data availability infrastructure for anyone in Web3.
                          To that end, we are building out{' '}
                          <a href="https://0g.ai/blog/the-0g-ecosystem-a-comprehensive-overview">
                            an extensive ecosystem
                          </a>{' '}
                          with partners across key players across Web3.&nbsp;
                        </p>
                        <figure className="n10_w-richtext-align-center2 w-richtext-align-center n10_w-richtext-figure-type-image2 w-richtext-figure-type-image">
                          <div className="n10_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f6f666525258ad73bd_yXth0dlyRNlH1PS5GaqKSFjCYxo.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Some of these include:</p>
                        <ul role="list">
                          <li>
                            <strong>Gaming: </strong>On-chain gaming requires
                            vast amounts of cryptographic proof-related data
                            that needs to be reliably stored on top of all
                            regular metadata, such as a given player’s assets,
                            points, actions, and more.
                          </li>
                          <li>
                            <strong>DeFi: </strong>0G’s quick and scalable DA
                            may support highly efficient DeFi on specific L2s
                            &amp; L3s, due to fast settlement and storage. For
                            example, on-chain order books are possible with 0G’s
                            high throughput and low latency.
                          </li>
                          <li>
                            <strong>L2s and L3s:</strong> Key rollup players like
                            Arbitrum, Optimism, Polygon, and more are partnered
                            with data availability and storage.
                          </li>
                        </ul>
                        <p>
                          The reason is that our modular, decentralized system
                          can distribute hardware resources that support any
                          on-chain use case, with AI being a priority. Being the
                          first{' '}
                          <strong>
                            Decentralized AI Operating System (dAIOS)
                          </strong>{' '}
                          is a role we do not take lightly, and we are committed
                          to advancing the industry as a whole.
                        </p>
                        <p>
                          If you would like to build alongside us, join our{' '}
                          <a href="https://discord.com/invite/0glabs">Discord</a>{' '}
                          or{' '}
                          <a href="https://0g.ai/contact" target="_blank">
                            reach out here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n10_section_filter section_filter">
            <div className="n10_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n10_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n10_cms-grid_list cms-grid_list n10_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n10_cms-grid_item cms-grid_item n10_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n10_cms-grid_content-wrapper cms-grid_content-wrapper n10_is-blog2 is-blog n10_w-inline-block4 w-inline-block"
                >
                  <div className="n10_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n10_cms-grid_image cms-grid_image"
                    />
                    <div className="n10_spacer-medium spacer-medium n10_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n10_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n10_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n10_related_category">News</div>
                        <div className="n10_icon-embed-custom3 icon-embed-custom n10_w-embed6 w-embed">
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
                        <div className="n10_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n10_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n10_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n10_cms-grid_item2 cms-grid_item n10_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n10_cms-grid_content-wrapper2 cms-grid_content-wrapper n10_is-blog3 is-blog n10_w-inline-block5 w-inline-block"
                >
                  <div className="n10_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n10_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n10_spacer-medium2 spacer-medium n10_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n10_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n10_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n10_related_category2">News</div>
                        <div className="n10_icon-embed-custom4 icon-embed-custom n10_w-embed7 w-embed">
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
                        <div className="n10_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n10_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n10_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n10_cms-grid_item3 cms-grid_item n10_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n10_cms-grid_content-wrapper3 cms-grid_content-wrapper n10_is-blog4 is-blog n10_w-inline-block6 w-inline-block"
                >
                  <div className="n10_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n10_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n10_spacer-medium3 spacer-medium n10_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n10_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n10_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n10_related_category3">News</div>
                        <div className="n10_icon-embed-custom5 icon-embed-custom n10_w-embed8 w-embed">
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
                        <div className="n10_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n10_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n10_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n10_cms-grid_item4 cms-grid_item n10_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n10_cms-grid_content-wrapper4 cms-grid_content-wrapper n10_is-blog5 is-blog n10_w-inline-block7 w-inline-block"
                >
                  <div className="n10_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n10_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n10_spacer-medium4 spacer-medium n10_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n10_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n10_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n10_related_category4">News</div>
                        <div className="n10_icon-embed-custom6 icon-embed-custom n10_w-embed9 w-embed">
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
                        <div className="n10_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n10_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n10_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n10_copy-toast ${showToast ? 'n10_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
