import React, { useEffect, useState } from 'react'
import './Builder01.css'

export default function Builder01() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-b01-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-b01-webflow', 'true')
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
      '0G Builder Spotlight: Flashback Privacy-First AI Memories'
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
    <div className="b01_container">
      <div className="b01_div001 page-wrapper">
        <div fs-socialshare-element="content" className="b01_div002 hide">
          <div className="b01_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="b01_div004">0G Builder Spotlight: Flashback Privacy-First AI Memories</div>
        </div>

        <main className="b01_mainWrapper main-wrapper">
          <section className="b01_sectionHero section_hero b01_isVertical is-vertical">
            <div className="b01_div005 padding-global">
              <div className="b01_div006 container-large">
                <div className="b01_div007 hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="b01_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="b01_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="b01_div008 hero_bg-gradient is-blog"></div>
                </div>

                <div className="b01_div009 hero_content-component b01_isVertical2 is-vertical">
                  <div className="b01_div010 blog_meta-wrapper is-white">
                    <div className="b01_div011">Builder Spotlight</div>
                    <div className="b01_div012 icon-embed-custom w-embed">
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
                    <div className="b01_div013">Feb 5, 2026</div>
                    <div className="b01_div014 icon-embed-custom w-embed">
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
                    <div className="b01_div015">0G Labs Research Team</div>
                  </div>

                  <div className="b01_div016 spacer-small"></div>

                  <div className="b01_div017 max-width-large text-align-center">
                    <h1 className="b01_h1 heading-style-h3">
                      0G Builder Spotlight: Flashback Privacy-First AI Memories
                    </h1>
                  </div>

                  <div className="b01_div018 spacer-small"></div>

                  <div className="b01_div019 blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="b01_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="b01_div020 icon-embed-xsmall w-embed">
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
                      className="b01_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="b01_div021 icon-embed-xsmall w-embed">
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
                      className="b01_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="b01_div022 icon-embed-xsmall w-embed">
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

          <section className="b01_sectionLegal section_legal-content">
            <div className="b01_div023 padding-global">
              <div className="b01_div024 padding-section-medium">
                <div className="b01_div025 container-small">
                  <div className="b01_div026">
                    <div className="b01_div027 legal-content_component">
                      <div className="b01_div028 blog-rich-text w-richtext">
                        <blockquote>
                          <strong>TL;DR:</strong> Flashback is a voice-based memory preservation app
                          running entirely on 0G&apos;s decentralized stack. Since launching in January
                          2026, it has onboarded 802 wallets, stored 3,300+ files on-chain, and cut
                          infrastructure costs by ~70% compared to its previous setup on IO.NET.
                        </blockquote>
                        <p>
                          Decentralized AI can&apos;t scale without infrastructure, and infrastructure is
                          only as strong as the builders behind it. Which is why we launched the{' '}
                          <strong>0G Builder Spotlight</strong>, a series showcasing{' '}
                          <a href="https://0g.ai/blog/builder-spotlight-jaine">
                            projects building at the intersection of AI and blockchain
                          </a>{' '}
                          on 0G.
                        </p>
                        <p>
                          This edition features <a href="https://flashbackai.xyz">Flashback</a>, a
                          privacy-first AI platform that lets users capture, preserve, and relive
                          voice-based memories with true ownership. The team migrated their entire
                          stack from IO.NET to 0G in January 2026, and the early results speak for
                          themselves (more on those numbers below).
                        </p>
                        <p>Flashback wants to make sure your memories stay yours, permanently. That&apos;s where 0G comes in.</p>
                        <figure className="b01_fig001 w-richtext-align-fullwidth w-richtext-figure-type-image">
                          <div className="b01_div029">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a79a9a4f3c1436ba2e8f_df9171e2.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h2>What Is Flashback? Voice AI for Memory Preservation</h2>
                        <p>
                          <a href="https://flashbacklabs.com">Flashback</a> is building a privacy-first platform for AI-powered memory capture. The app combines voice-based recording, AI processing, and decentralized storage so users can preserve memories they actually own.
                        </p>
                        <p>
                          Unlike traditional memory apps that store data on centralized servers, Flashback gives users full control over their memories. Every user creates a 0G wallet by default, and all their data (voice recordings, AI-generated datasets, and Memory Orbs) is stored directly on 0G Storage, fully owned by the user.
                        </p>
                        <figure className="b01_fig002 w-richtext-align-fullwidth w-richtext-figure-type-image">
                          <div className="b01_div030">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a79a9a4f3c1436ba2e86_b80c66d8.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          Here&apos;s how it works: you open the app, start talking, and MeeMaw (Flashback&apos;s AI guide) walks you through recalling a memory step by step. No typing needed. Just a guided conversation. When you&apos;re done, the AI organizes everything automatically and turns it into a &quot;Memory Orb&quot; you can revisit anytime. The whole process takes a few minutes on mobile or web.
                        </p>
                        <blockquote>
                          &quot;0G is a single destination for Storage and Compute to create a pure de-AI experience, which is not possible elsewhere.&quot; - <strong>Vinay Kumar, CEO &amp; Co-Founder, Flashback Labs</strong>
                        </blockquote>
                        <h2>Why Flashback Chose 0G for Decentralized Storage and Compute</h2>
                        <p>
                          Before integrating with 0G, Flashback was using IO.NET for computing. While functional, this setup couldn&apos;t deliver on the team&apos;s core vision: a fully decentralized, user-owned AI experience. Storage and compute were separate, making true data ownership difficult to achieve.
                        </p>
                        <p>
                          Memory preservation presents unique infrastructure challenges. Personal voice recordings and AI-processed memories are sensitive. Think family stories, private reflections, moments people don&apos;t usually share publicly. Traditional cloud storage means trusting a third party with this intimate data, with no guarantees about privacy, access, or permanence.
                        </p>
                        <p>Flashback needed infrastructure that could deliver:</p>
                        <ul role="list">
                          <li>True user ownership of data (not just promises)</li>
                          <li>Unified storage and compute in a single stack</li>
                          <li>Long-term storage guarantees without centralized dependencies</li>
                          <li>Cost efficiency without sacrificing decentralization</li>
                        </ul>
                        <p>
                          0G&apos;s modular architecture addressed each of these requirements. As the team puts it: &quot;Having storage and compute stacked together helped us have a single stack, saving resources and time.&quot;
                        </p>
                        <h2>How Is Flashback Integrating 0G?</h2>
                        <figure className="b01_fig003 w-richtext-align-fullwidth w-richtext-figure-type-image">
                          <div className="b01_div031">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a79a9a4f3c1436ba2e89_46855f5e.jpeg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          Flashback is built on three core 0G layers: Chain,{' '}
                          <a href="https://docs.0g.ai/build-with-0g/storage-sdk">Storage</a>, and{' '}
                          <a href="https://docs.0g.ai/build-with-0g/compute-network">Compute</a>. The team plans to expand into{' '}
                          <a href="https://docs.0g.ai/build-with-0g/da-integration">Data Availability</a> and ERC-7857 intelligent NFTs.
                        </p>
                        <p>
                          <strong>0G Chain: Native Wallet Integration</strong>
                        </p>
                        <p>
                          Every Flashback user creates a 0G wallet by default. Users pay for storage and compute operations directly in 0G tokens. Since launch, Flashback has processed over 9,900 on-chain transactions through 0G Chain.
                        </p>
                        <p>
                          <strong>0G Storage: User-Owned Memory Infrastructure</strong>
                        </p>
                        <p>All user data and AI Twin datasets are stored on 0G Storage, so users own their data outright. Key storage metrics:</p>
                        <ul role="list">
                          <li>3,300+ files stored on-chain</li>
                          <li>519 MB of memory data preserved</li>
                          <li>50%+ cost reduction compared to centralized alternatives</li>
                          <li>Partnership with Beacon for on-chain encryption</li>
                        </ul>
                        <p>
                          <strong>0G Compute: Decentralized AI Processing</strong>
                        </p>
                        <p>
                          Flashback uses 0G Compute to analyze user input and create flashbacks and datasets from user sessions. This includes MeeMaw&apos;s conversational guidance and emotional tagging, all running on decentralized infrastructure. The team reports 90% cost savings on inference compared to their previous setup.
                        </p>
                        <p>
                          <strong>Why This Architecture Matters</strong>
                        </p>
                        <p>
                          With decentralized storage and verifiable compute, AI processes your personal data without any single company having access to it. Or as Flashback puts it: &quot;AI that&apos;s actually entirely yours.&quot;
                        </p>
                        <blockquote>
                          &quot;0G Hot Storage will help us eliminate AWS for storage and compute for real-time AI experiences.&quot; - <strong>Vinay Kumar, CEO &amp; Co-Founder, Flashback Labs</strong>
                        </blockquote>
                        <h2>Impact Since Building on 0G</h2>
                        <figure className="b01_fig004 w-richtext-align-fullwidth w-richtext-figure-type-image">
                          <div className="b01_div032">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a79a9a4f3c1436ba2e8c_4763594f.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          Since migrating to 0G and launching in January 2026, Flashback has put up solid numbers in its first month (source: <a href="https://www.flashbacklabs.com">flashbacklabs.com</a>, January 2026):
                        </p>
                        <ul role="list">
                          <li>
                            <strong>802 wallets</strong> created on 0G Chain
                          </li>
                          <li>
                            <strong>498 monthly active users</strong>
                          </li>
                          <li>
                            <strong>9,933 on-chain transactions</strong> processed
                          </li>
                          <li>
                            <strong>3,300+ files</strong> stored on 0G Storage (519 MB)
                          </li>
                          <li>
                            <strong>~70% overall cost savings</strong> versus previous infrastructure
                          </li>
                          <li>
                            <strong>90% cheaper inference</strong> costs via 0G Compute
                          </li>
                          <li>
                            <strong>50%+ cheaper storage</strong> versus centralized alternatives
                          </li>
                          <li>
                            <strong>First fully decentralized launch</strong>, something that &quot;wasn&apos;t possible before&quot; on their previous stack
                          </li>
                        </ul>
                        <p>
                          The team also integrated Beacon, a 0G ecosystem partner, for on-chain encryption. Users control who can access their memory data, and when.
                        </p>
                        <h2>What&apos;s Next for Flashback</h2>
                        <p>With the 0G integration now live across mobile and web, Flashback is working on what comes next:</p>
                        <ul role="list">
                          <li>
                            <strong>AI Twins with iNFTs</strong> - ERC-7857 intelligent NFTs will let users create AI Twins that evolve with each new memory
                          </li>
                          <li>
                            <strong>0G Hot Storage</strong> - Real-time AI experiences that can fully replace AWS for both storage and compute
                          </li>
                          <li>
                            <strong>Expanded Compute Usage</strong> - More sophisticated memory processing through deeper 0G Compute integration
                          </li>
                          <li>
                            <strong>Data Availability Integration</strong> - Support for higher-frequency operations as the platform scales
                          </li>
                        </ul>
                        <p>
                          The team has also identified areas where 0G can help them grow further: native on-chain encryption with access control, and a gas payer for sponsored transactions to enable a gasless user experience.
                        </p>
                        <p>
                          <em>This article is for informational purposes only and does not constitute financial advice.</em>
                        </p>
                        <h3>More from the Builder Spotlight Series</h3>
                        <ul role="list">
                          <li>
                            <a href="https://0g.ai/blog/builder-spotlight-jaine">
                              JAINE: AI-Powered Legal Research on 0G
                            </a>
                          </li>
                          <li>
                            <a href="https://0g.ai/blog/builder-spotlight-kult-games">
                              Kult Games: On-Chain Gaming Infrastructure on 0G
                            </a>
                          </li>
                        </ul>
                        <p>&nbsp;</p>
                        <p>
                          <strong>Learn more about </strong>
                          <a href="https://flashbacklabs.com">
                            <strong>Flashback</strong>
                          </a>
                        </p>
                        <p>
                          <strong>Try </strong>
                          <a href="https://flashbackai.xyz">
                            <strong>Flashback</strong>
                          </a>
                        </p>
                        <p>
                          <strong>Explore the </strong>
                          <a href="https://0g.ai/partners">
                            <strong>0G partner ecosystem</strong>
                          </a>
                        </p>
                        <p>
                          <strong>Read more </strong>
                          <a href="https://0g.ai/blog">
                            <strong>Builder Spotlights</strong>
                          </a>
                        </p>
                        <h2>Frequently Asked Questions</h2>
                        <p>
                          <strong>What is Flashback?</strong>
                        </p>
                        <p>
                          Flashback is a privacy-first web3 memory app for voice-based memory preservation. Users record memories through guided conversation with an AI assistant called MeeMaw, and all data is stored on 0G&apos;s decentralized storage - fully owned by the user.
                        </p>
                        <p>
                          <strong>How does Flashback use 0G?</strong>
                        </p>
                        <p>
                          Flashback uses three 0G layers: Chain (wallet creation + transactions), Storage (on-chain memory files), and Compute (AI inference for memory processing). This unified stack replaced their previous setup on IO.NET and centralized cloud services.
                        </p>
                        <p>
                          <strong>Is memory data on Flashback private?</strong>
                        </p>
                        <p>
                          Yes. All files are stored on 0G Storage with on-chain encryption provided through Beacon, a 0G ecosystem partner. Users control access to their own data - no centralized server has custody of their memories.
                        </p>
                        <p>
                          <strong>How much does Flashback save by using 0G?</strong>
                        </p>
                        <p>
                          Flashback reports ~70% overall infrastructure cost savings, 90% cheaper AI inference costs, and 50%+ cheaper storage compared to centralized alternatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="b01_sectionFilter section_filter">
            <div className="b01_div033 blog_more-blog">
              <h5 className="b01_h5">Related news:</h5>
            </div>
          </section>

          <div className="b01_div034 w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="b01_div035 cms-grid_list w-dyn-items">
              <div role="listitem" className="b01_div036 cms-grid_item w-dyn-item">
                <a
                  href="/blog/builder-spotlight-flashback"
                  aria-current="page"
                  className="b01_a004 cms-grid_content-wrapper is-blog w-inline-block w--current"
                >
                  <div className="b01_div037 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site.png 1147w"
                      className="b01_img003 cms-grid_image"
                    />
                    <div className="b01_div038 spacer-medium hide-mobile-portrait"></div>
                    <div className="b01_div039 blog_contnet-wrapper">
                      <div className="b01_div040 blog_meta-wrapper">
                        <div className="b01_div041">Builder Spotlight</div>
                        <div className="b01_div042 icon-embed-custom w-embed">
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
                        <div className="b01_div043">Feb 5, 2026</div>
                      </div>
                      <div className="b01_div044 spacer-xmedium"></div>
                      <h3 className="b01_h3 heading-style-h5">
                        0G Builder Spotlight: Flashback Privacy-First AI Memories
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`b01_copy-toast ${showToast ? 'b01_show' : ''}`}>Link copied</div>
      </div>
    </div>
  )
}

