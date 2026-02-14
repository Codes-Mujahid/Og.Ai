import React, { useEffect, useState } from 'react'
import './Tech38.css'

export default function Tech38() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t38-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t38-webflow', 'true')
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
    const text = encodeURIComponent("Check out this insightful blog post: 0G's Whitepaper: A Complete Breakdown")
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
    <div className="t38_container">
      <div className={`t38_copy-toast ${showToast ? 't38_show' : ''}`}>Link copied</div>

      <div className="t38_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t38_div002 hide">
          <div className="t38_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t38_div004">0G&apos;s Whitepaper: A Complete Breakdown</div>
        </div>

        <main className="t38_main-wrapper main-wrapper">
          <section className="t38_section_hero section_hero is-vertical">
            <div className="t38_div005 padding-global">
              <div className="t38_div006 container-large">
                <div className="t38_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t38_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t38_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t38_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t38_div009 hero_content-component is-vertical">
                  <div className="t38_div010 blog_meta-wrapper is-white">
                    <div className="t38_div011">Tech</div>
                    <div className="t38_div012 icon-embed-custom w-embed">
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
                    <div className="t38_div013">Sep 5, 2024</div>
                    <div className="t38_div014 icon-embed-custom w-embed">
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
                    <div className="t38_div015">0g</div>
                  </div>

                  <div className="t38_div016 spacer-small"></div>

                  <div className="t38_div017 max-width-large text-align-center">
                    <h1 className="t38_h1_001 heading-style-h3">0G&apos;s Whitepaper: A Complete Breakdown</h1>
                  </div>

                  <div className="t38_div018 spacer-small"></div>

                  <div className="t38_div019 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t38_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t38_div020 icon-embed-xsmall w-embed">
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
                      className="t38_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t38_div021 icon-embed-xsmall w-embed">
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
                      className="t38_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t38_div022 icon-embed-xsmall w-embed">
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

          <section className="t38_section_legal-content section_legal-content">
            <div className="t38_div023 padding-global">
              <div className="t38_div024 padding-section-medium">
                <div className="t38_div025 container-small">
                  <div className="t38_div026">
                    <div className="t38_div027 legal-content_component">
                      <div className="t38_div028 blog-rich-text w-richtext">
                        <p>
                          0G recently released its whitepaper—a deep dive into the foundational infrastructure powering
                          the world’s first Artificial Intelligence Layer (AIL). Designed to support the next wave of
                          decentralized AI applications, the paper outlines how 0G’s modular, infinitely scalable
                          system solves the critical bottleneck of high-performance data availability.
                        </p>
                        <p>
                          While{' '}
                          <a href="https://cdn.jsdelivr.net/gh/0glabs/0g-doc/static/whitepaper.pdf">
                            the whitepaper is viewable here
                          </a>
                          , this article will serve as a simplification and overview.
                        </p>
                        <p>For those wishing to navigate the whitepaper on their own, we recommend:</p>
                        <ul role="list">
                          <li>
                            <strong>Begin with the Abstract and Introduction. </strong>These sections provide a concise
                            summary of the data availability problem and 0G’s approach to solving it.
                          </li>
                          <li>
                            <strong>Explore the System Design: </strong>The “Overview of the System Design” section
                            provides a high-level view of how 0G’s architecture is structured, including the
                            relationships between 0G Storage, 0G DA, and 0G Consensus.
                          </li>
                          <li>
                            <strong>Dive into the Technical Details: </strong>For those interested in the technical
                            implementation, the sections on “0G Storage” and “Log System Protocol” break down how data
                            is stored, accessed, and validated.
                          </li>
                          <li>
                            <strong>Review the Incentive Mechanism: </strong>The “Incentive Mechanism” section is
                            particularly important for potential node operators and those interested in the economic
                            aspects of the network, covering 0G’s Proof-of-Random-Access consensus and associated
                            information.
                          </li>
                        </ul>
                        <p>
                          By following this roadmap, you can efficiently navigate the 0G Whitepaper and focus on
                          what’s most relevant to you—whether you’re building decentralized AI apps, designing
                          high-performance systems, or exploring new layers of crypto infrastructure as a potential
                          partner.
                        </p>
                        <p>
                          And if you’re interested in building with 0G, <a href="https://0g.ai/contact">reach out here</a>
                          .
                        </p>
                        <p>
                          <strong>Context: Why 0G?</strong>
                        </p>
                        <p>
                          The need for 0G arises from the rapidly growing volume of on-chain data and the increasing
                          demand for advanced applications, such as decentralized AI and high-frequency trading.
                          Current data availability solutions offer some relief but come with significant limitations,
                          including latency, throughput, interoperability, and cost inefficiencies. These limitations
                          hinder their ability to support the next generation of decentralized applications.
                        </p>
                        <p>
                          For instance, Celestia&apos;s approach, which broadcasts data to all consensus nodes, caps
                          throughput at 10 Mbps. Additionally, Celestia&apos;s light client model raises concerns about
                          profitability, and the existing codebase may require substantial updates to remain
                          competitive.
                        </p>
                        <p>
                          <strong>
                            0G addresses these challenges by offering an infinitely scalable AI operation system
                            through a modular and layered architecture design.&nbsp;
                          </strong>
                        </p>
                        <p>
                          This architecture not only provides robust data storage and availability solutions but also
                          scales to meet the demands of advanced use cases, many of which{' '}
                          <a href="https://0g.ai/blog/the-utility-of-0g#:~:text=Who%20can%20benefit,scale%20using%200G.">
                            we covered here.
                          </a>
                        </p>
                        <p>Now, with this context, let’s begin with 0G’s system design.</p>
                        <p>
                          <strong>Section 1: System Design</strong>
                        </p>
                        <p>
                          The design of 0G revolves around a modular and layered architecture, which forms the
                          backbone of its scalable and secure data availability layer, referred to as “0G DA.” This
                          architecture is built on top of a decentralized storage network known as “0G Storage.” The
                          modular approach allows each component to function independently yet cohesively, enabling
                          efficient querying and verification of data directly from 0G’s internal system, ensuring high
                          performance and reliability.
                        </p>
                        <p>
                          For 0G Storage to store the data, it is first erasure coded, meaning that it’s fragmented
                          into smaller pieces with redundant elements and distributed across multiple storage
                          locations. This enables fast recovery in the event of any storage node failures. A Merkle
                          tree is then formed with this data and submitted to 0G’s consensus layer (“0G Consensus”),
                          which cryptographically records the order of data entering the system and ensures fast and
                          accurate data retrieval. The chunks of data are then sent to various Storage Nodes, which are
                          covered below.
                        </p>
                        <p>The interaction between 0G Storage and 0G Consensus operates as follows:</p>
                        <ol role="list">
                          <li>Data is erasure-coded and stored in 0G Storage.</li>
                          <li>
                            0G Consensus manages the communication and synchronization of data through a specialized
                            data publishing lane, which ensures that only essential information flows through the
                            consensus process, optimizing performance and scalability.
                          </li>
                        </ol>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t38_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f73dc65fa89ac10dd0_L7wDKaaQDxNCd1hAIPKL8A6Vd70.avif"
                              loading="lazy"
                              className="t38_img003"
                            />
                          </div>
                        </figure>
                        <p>
                          <em>
                            Data is erasure-coded and then stored in 0G Storage, communicating with 0G Consensus via
                            the data publishing lane.
                          </em>
                        </p>
                        <p>
                          The architecture is highly scalable as 0G Consensus can have an arbitrary number of
                          independent consensus networks (e.g., 1, 100, or even 1,000). These consensus networks
                          operate in parallel, scaling with demand, and each is responsible for managing data
                          commitments and ensuring the integrity of stored data.&nbsp;
                        </p>
                        <p>
                          A major risk is that malicious Storage Nodes may exist and collude when interacting with 0G
                          Consensus. To mitigate this, a quorum design is used whereby a VRF randomly selects nodes to
                          prevent collusion.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t38_div030">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f73dc65fa89ac10dd6_I8Cubd4bnrvO2DmPENDuSQ98M.avif"
                              loading="lazy"
                              className="t38_img004"
                            />
                          </div>
                        </figure>
                        <p>
                          By distributing data across various partitions and allowing these partitions to be processed
                          simultaneously by different consensus networks, 0G achieves virtually infinite scalability.
                          This design ensures that the system can handle the growing demands of decentralized AI
                          platforms, such as providing massive volumes of data for model training in real time.
                        </p>
                        <p>
                          Furthermore, 0G incorporates a shared staking mechanism across all its consensus networks.
                          Validators stake funds on the Ethereum mainnet and subsequently validate across the various
                          0G Consensus networks. This shared staking approach ensures a consistent level of security
                          across all consensus networks while leveraging Ethereum’s security guarantees.
                        </p>
                        <p>This is illustrated below.</p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t38_div031">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f73dc65fa89ac10dd3_14oWyXOIQEGoQt1zLAiTBS8kg.avif"
                              loading="lazy"
                              className="t38_img005"
                            />
                          </div>
                        </figure>
                        <p>
                          <em>
                            Validators stake $0G on mainnet, simultaneously validate various 0G Chains, and burn $0G on
                            these networks in exchange for $0G on mainnet.
                          </em>
                        </p>
                        <p>
                          <strong>Section 2: The Log Layer</strong>
                        </p>
                        <p>
                          Next, we’ll cover 0G’s log system, which is an append-only system for unstructured data,
                          responsible for organizing and storing data efficiently within 0G Storage.
                        </p>
                        <p>
                          Data entries in the log system correspond to a transaction that is stored in a sequential,
                          append-only manner. This is akin to a traditional filesystem, where every log entry
                          functions like a file that can be easily accessed and verified by any participant in the
                          network. The result is that data is submitted to 0G Storage while kept readily available.
                        </p>
                        <p>
                          There is also a Key-Value (KV) runtime that operates on top of the log system, focused on
                          structured data that can be updated via new entries that are added to log entries. We’ll
                          cover this further in Section 4.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t38_div032">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f73dc65fa89ac10dd9_e2cDZChin4D1GI3izixXTAdZGNo.avif"
                              loading="lazy"
                              className="t38_img006"
                            />
                          </div>
                        </figure>
                        <p>
                          <em>
                            A Key-Value (KV) runtime operates on top of the Log Layer, which sends append-only updates
                            to 0G Storage.
                          </em>
                        </p>
                        <p>
                          <strong>Section 3: Incentivization</strong>
                        </p>
                        <p>
                          To effectively incentivize miners to store data within the 0G network, the Proof of Random
                          Access (PoRA) protocol is employed.
                        </p>
                        <p>
                          PoRA requires miners to respond to random queries related to specific chunks of archived
                          data. The process involves miners loading the requested data, computing a hash, and
                          determining whether the resulting output meets the target difficulty, defined by having a
                          sufficient number of leading zeros (similar to PoW systems like Bitcoin). Since the challenge
                          queries are random, miners can increase their chances of successfully mining rewards by
                          dedicating more computing power and storing more data. This approach ensures that the most
                          active and well-resourced nodes are appropriately rewarded for contributing to the network&apos;s
                          data availability.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t38_div033">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f73dc65fa89ac10dcd_WOO0kfPcnGsh7esN4Jq3HoooU.avif"
                              loading="lazy"
                              className="t38_img007"
                            />
                          </div>
                        </figure>
                        <p>
                          To maintain fairness among miners, particularly those with fewer resources, the mining range
                          is capped at 8 TB of data. This means that even single-machine miners can compete effectively
                          within a designated 8 TB data range, while larger operations with multiple machines can mine
                          across several data ranges simultaneously. This design ensures that smaller miners have a
                          fair opportunity to earn rewards, preventing larger operations from monopolizing the mining
                          process.
                        </p>
                        <p>
                          Incentivizing nodes to share data is inherently challenging, especially since much of this
                          activity occurs outside the direct oversight of the 0G Consensus. To address this, 0G has a
                          built-in royalty mechanism that rewards nodes for data sharing. When a new PoRA mining proof
                          is generated based on shared data, the original data provider receives a royalty. For
                          example, if Node A shares data with Node B, and Node B uses that data to create a valid
                          mining proof, Node A would be rewarded with a portion of the mining rewards.&nbsp;
                        </p>
                        <p>
                          <strong>Section 4: Key-Value Runtime</strong>
                        </p>
                        <p>
                          The Key-Value store provides a way to handle structured data that requires mutability (i.e.,
                          the ability to change or update data over time). This is essential for applications that
                          involve changing data, relevant to all use cases that 0G serves.
                        </p>
                        <p>
                          The KV store is built on top of the log layer, which is responsible for archiving unstructured
                          data in a decentralized and append-only manner. The log layer ensures that the data remains
                          consistent and immutable once written, while the KV store allows for the management of
                          mutable data within this structure.
                        </p>
                        <p>
                          The KV store also supports transactional processing, which ensures that operations on the
                          data are executed in a consistent manner, even when multiple users are making updates
                          simultaneously. This is crucial for applications like collaborative editing (e.g., on-chain
                          versions of Google Docs, Notion, and more). All KV store nodes in the network synchronize
                          their states by processing the log entries, ensuring that each node has an up-to-date and
                          consistent view of the data.
                        </p>
                        <p>
                          <strong>Conclusion</strong>
                        </p>
                        <p>
                          Throughout the Whitepaper, we&apos;ve explored key aspects of 0G’s architecture, including the
                          system design, the log layer, the incentive mechanisms, and the Key-Value runtime. Each of
                          these components plays a critical role in ensuring that 0G can deliver a decentralized
                          storage solution that is both efficient and reliable.&nbsp;
                        </p>
                        <p>
                          We encourage developers, researchers, and industry partners to dive deeper into the
                          whitepaper and to consider the opportunities for collaboration. As 0G continues to evolve,
                          ample opportunities exist to work together in making AI a public good.
                        </p>
                        <p>
                          If you would like to get involved, please join our{' '}
                          <a href="https://discord.com/invite/0glabs">Discord</a> or{' '}
                          <a href="https://0g.ai/contact" target="_blank" rel="noreferrer">
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

          <section className="t38_section_filter section_filter">
            <div className="t38_div034 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t38_div035 w-dyn-list t38_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t38_div036 cms-grid_list w-dyn-items">
              <div role="listitem" className="t38_div037 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  aria-current="page"
                  className="t38_a004 cms-grid_content-wrapper is-blog w-inline-block w--current"
                >
                  <div className="t38_div038 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t38_img008 cms-grid_image"
                    />
                    <div className="t38_div039 spacer-medium hide-mobile-portrait"></div>
                    <div className="t38_div040 blog_contnet-wrapper">
                      <div className="t38_div041 blog_meta-wrapper">
                        <div className="t38_div042">Tech</div>
                        <div className="t38_div043 icon-embed-custom w-embed">
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
                        <div className="t38_div044">Sep 5, 2024</div>
                      </div>
                      <div className="t38_div045 spacer-xmedium"></div>
                      <h3 className="t38_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t38_div046 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t38_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t38_div047 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t38_img009 cms-grid_image"
                    />
                    <div className="t38_div048 spacer-medium hide-mobile-portrait"></div>
                    <div className="t38_div049 blog_contnet-wrapper">
                      <div className="t38_div050 blog_meta-wrapper">
                        <div className="t38_div051">Tech</div>
                        <div className="t38_div052 icon-embed-custom w-embed">
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
                        <div className="t38_div053">Aug 25, 2025</div>
                      </div>
                      <div className="t38_div054 spacer-xmedium"></div>
                      <h3 className="t38_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t38_div055 cms-grid_item w-dyn-item">
                <a href="/blog/worlds-first-distributed-100b-parameter-ai" className="t38_a006 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t38_div056 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t38_img010 cms-grid_image"
                    />
                    <div className="t38_div057 spacer-medium hide-mobile-portrait"></div>
                    <div className="t38_div058 blog_contnet-wrapper">
                      <div className="t38_div059 blog_meta-wrapper">
                        <div className="t38_div060">Tech</div>
                        <div className="t38_div061 icon-embed-custom w-embed">
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
                        <div className="t38_div062">Aug 7, 2025</div>
                      </div>
                      <div className="t38_div063 spacer-xmedium"></div>
                      <h3 className="t38_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t38_div064 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t38_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t38_div065 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t38_img011 cms-grid_image"
                    />
                    <div className="t38_div066 spacer-medium hide-mobile-portrait"></div>
                    <div className="t38_div067 blog_contnet-wrapper">
                      <div className="t38_div068 blog_meta-wrapper">
                        <div className="t38_div069">Tech</div>
                        <div className="t38_div070 icon-embed-custom w-embed">
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
                        <div className="t38_div071">Jul 3, 2025</div>
                      </div>
                      <div className="t38_div072 spacer-xmedium"></div>
                      <h3 className="t38_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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
