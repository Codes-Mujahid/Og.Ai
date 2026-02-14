import React, { useState } from 'react'
import './News03.css'

export default function News03() {
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
      'Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes'
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
    <div className="n03_container">
      <div className="n03_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n03_hide hide">
          <div className="n03_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n03_socialshare-title">
            Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
          </div>
        </div>

        <main className="n03_main-wrapper main-wrapper">
          <section className="n03_section_hero section_hero n03_is-vertical is-vertical">
            <div className="n03_padding-global padding-global">
              <div className="n03_container-large container-large">
                <div className="n03_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n03_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n03_hero_bg-image hero_bg-image n03_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n03_hero_bg-gradient hero_bg-gradient n03_is-blog is-blog"></div>
                </div>

                <div className="n03_hero_content-component hero_content-component n03_is-vertical is-vertical">
                  <div className="n03_blog_meta-wrapper blog_meta-wrapper n03_is-white is-white">
                    <div className="n03_blog_meta-category">News</div>
                    <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                    <div className="n03_blog_meta-date">Jul 14, 2025</div>
                    <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                    <div className="n03_blog_meta-empty n03_w-dyn-bind-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="n03_spacer-small spacer-small"></div>

                  <div className="n03_max-width-large max-width-large n03_text-align-center text-align-center">
                    <h1 className="n03_heading-style-h3 heading-style-h3">
                      Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                    </h1>
                  </div>

                  <div className="n03_spacer-small spacer-small"></div>

                  <div className="n03_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n03_link-icon-light link-icon-light n03_is-static is-static n03_w-inline-block w-inline-block"
                    >
                      <div className="n03_icon-embed-xsmall icon-embed-xsmall n03_w-embed w-embed">
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
                      className="n03_link-icon-light link-icon-light n03_is-static is-static n03_w-inline-block w-inline-block"
                    >
                      <div className="n03_icon-embed-xsmall icon-embed-xsmall n03_w-embed w-embed">
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
                      className="n03_link-icon-light link-icon-light n03_is-static is-static n03_w-inline-block w-inline-block"
                    >
                      <div className="n03_icon-embed-xsmall icon-embed-xsmall n03_w-embed w-embed">
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

          <section className="n03_section_legal-content section_legal-content">
            <div className="n03_padding-global padding-global">
              <div className="n03_padding-section-medium padding-section-medium">
                <div className="n03_container-small container-small">
                  <div className="n03_legal-content_outer">
                    <div className="n03_legal-content_component legal-content_component">
                      <div className="n03_blog-rich-text blog-rich-text n03_w-richtext w-richtext">
                        <p>
                          From wellness to workshops, panels to prototypes, 0G
                          made its presence felt in full force at EthCC Cannes
                          2025.
                        </p>
                        <p>
                          Over nine days on the French Riviera, we hosted
                          keynotes, judged hackathons, showcased our ecosystem,
                          and carved out calm in the chaos with curated wellness
                          sessions. Whether we were on stage or on the mat, our
                          focus remained the same: scaling decentralized AI
                          infrastructure practically, globally, and in real-time.
                        </p>
                        <h2>June 27: Private Capital to Prototypes</h2>
                        <p>📍 Selini Summit</p>
                        <p>
                          0G’s Co-Founder and CEO, Michael, spoke at the{' '}
                          <a href="https://www.selinisummit.com/">
                            Selini Summit
                          </a>
                          , a private gathering of top allocators, fund managers,
                          and founders in the digital asset space. He shared 0G’s
                          vision for modular infrastructure and decentralized AI,
                          contributing to forward-looking conversations on
                          scaling real utility across web3.
                        </p>
                        <p>📍 Oz Builder Day</p>
                        <p>
                          At <a href="https://lu.ma/OzBuilderDay">Oz Builder Day</a>
                          , a 24-hour hackathon hosted by{' '}
                          <a href="https://x.com/buildozcity">The Oz city</a>, 0G’s
                          Developer Relations Lead, Udhaykumar, served as a judge
                          as teams built and refined AI x web3 projects with
                          support from hands-on mentors. The event brought
                          together early-stage builders and advanced teams alike
                          to prototype, benchmark, and push the limits of what’s
                          possible with onchain AI.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae79_AD_4nXeyQ_BsS_-bsE7ovjVNMKkUajqdFltk7ZVqQxKL0B-lWlZQe9-K9xyYs_ARqRWGLR9pminNZG5aABZLYW7Z095klciToZmWwwr27ZbxOSkl8JxxQe6srxK-7t-tEqZXC-2bvnQ.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h2>June 29: Breathwork and Agentic Frontiers</h2>
                        <p>📍 Breathe with 0G</p>
                        <p>
                          In the lead-up to the main conference, we hosted{' '}
                          <a href="https://lu.ma/5gcs0u9e">Breathe with 0G</a>, a
                          guided breathwork experience designed to help attendees
                          reset and recharge. The session provided a calming,
                          tech-free environment that focused on presence and
                          recovery, accompanied by takeaway nourishment packages
                          to keep the energy grounded throughout the week.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae88_AD_4nXcKeo32y6clnDuoMeNJjmzrNGBAYDhubgeYLBi7cyaIe-2yBVmMKowkkPotWNEBhYGD2FdZeQZFZ8-KirMWsYKYPWDFZJMM6TwnICVsCYkxOlCkrfVfk76TIapiC5ITVg_Ws2vQ.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>📍 Agents Day</p>
                        <p>
                          Later, we joined{' '}
                          <a href="https://lu.ma/AgentsDay-Cannes">
                            Agents Day,
                          </a>{' '}
                          a high-energy convergence of over 500 founders,
                          builders, and researchers. The program featured live
                          demos, workshops, and no-nonsense talks on agentic
                          design, DeFi x AI, and privacy-first coordination.
                          Michael delivered a keynote on 0G’s infrastructure
                          stack for onchain agents, capping off a day of serious
                          momentum in the decentralized intelligence space.
                        </p>
                        <h2>June 30: Flow, Multichain Momentum, then Stillness</h2>
                        <p>📍 Flow with 0G: Yoga by the Sea</p>
                        <p>
                          We started the day with{' '}
                          <a href="https://lu.ma/f8pqgkrt">Flow with 0G</a>, a
                          sunrise yoga session set against the backdrop of the
                          Mediterranean. Designed as a grounding prelude to the
                          conference, the event welcomed attendees of all
                          experience levels to reconnect with breath, body, and
                          nature before the buzz of EthCC took over.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae8b_AD_4nXe_CIUvygHT5I8aqvylgaQLasBSZDicP70srD7f1St4BR_MFS4xwRL-blt0eulw7ukTnjPm9Bg0K3AeoCFA8niaMH_LwmTbL0mMx9LRiVItNMJzaxKmTuInTPmAq1wAi30-EKms.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>📍 Multichain Day at EthCC</p>
                        <p>
                          Later in the day, we joined a packed{' '}
                          <a href="https://lu.ma/multichaindayethcc">
                            Multichain Day
                          </a>
                          , partnering with{' '}
                          <a href="https://x.com/wrappedxyz">Wrapped</a> to bring
                          together builders across the L1 and L2 landscape to
                          discuss composability, scalability, and real-world
                          multichain applications. 0G’s Strategic Partnerships
                          Lead George joined the speaker lineup to share 0G’s
                          perspective on modular data availability and the
                          infrastructure required to support increasingly
                          complex cross-chain systems.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae84_AD_4nXf25B01hAIdCV5bzjdSszw1y6dBOW392cRRGbd2js7VJOChAB1qVisZd5xi6ox2XpCScuWBFd_JRBgOK9GdUZBxHvVE_up1timXQxNst52-XyphD3_yYVZvQgAZodvgUBkqbzde.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>📍 Transcend: A Meditation Experience Curated by 0G</p>
                        <p>
                          We closed the day with{' '}
                          <a href="https://lu.ma/dvf1qq2v">Transcend</a>, a guided
                          meditation experience focused on presence, calm, and
                          clarity. This curated session introduced participants
                          to transcendental meditation as a tool for focus and
                          balance in high-stakes environments.
                        </p>
                        <h2>July 1: AI in Focus</h2>
                        <p>📍 AI Hacker Hub @ EthCC</p>
                        <p>
                          We kicked off the day by co-hosting the{' '}
                          <a href="https://lu.ma/qtl69vqt">AI Hacker Hub</a> with{' '}
                          <a href="https://x.com/akindo_io">AKINDO</a> for a
                          hands-on workshop series designed for developers
                          exploring the intersection of AI and blockchain.
                          Participants joined protocol-led sessions, DevRel
                          office hours, and live Q&amp;As to gain direct exposure
                          to tools, use cases, and grant programs.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae81_AD_4nXctZzhF10BJJ0dfkOKmAbmdyzEPYfvs8PHOj1L-avjBPI7KAlYbcU6oCPy0jmrd71owvd5_WUBF2-VriGmp-2HZ-Ik3oSbmqdfon7YoetBTxQ9YiqE8Y4BUhjEHDNFQ1H7IyI1n.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>📍 0G AI Summit</p>
                        <p>
                          That afternoon, we hosted the{' '}
                          <a href="https://lu.ma/p0qq63tu">AI Summit</a> at a
                          packed venue just off the Croisette. Michael opened
                          with a keynote on the future of decentralized
                          infrastructure and autonomous systems, followed by a
                          panel on AI agents in the wild moderated by{' '}
                          <a href="https://x.com/timccopeland">Tim Copeland</a>{' '}
                          and featuring leaders from{' '}
                          <a href="https://x.com/lagrangedev">LaGrange</a>,{' '}
                          <a href="https://x.com/Stake_Stone">Stakestone</a>,{' '}
                          <a href="https://x.com/OpenledgerHQ">OpenLedger</a>,
                          and <a href="https://x.com/SentientAGI">Sentient</a>.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae7d_AD_4nXf-Eep2nrhmDImEIx3WytafETFsrweBo2etZLGOMpuFur_ieUSUQLgV486lvSbSVrf0ZEIIVDDAg-9HRgGdr8JsRW8cYntnWxGEI_aByNySnt_3Ic9cN2GrjJFqckAO9H3c5KKI.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>
                          Catch a glimpse of the full AI x 0G experience at
                          Cannes{' '}
                          <a href="https://x.com/0G_labs/status/1944670954140950764">
                            here
                          </a>
                          .
                        </p>
                        <h2>July 2: Builders and High-Signal Conversations</h2>
                        <p>📍 0G Builders’ Brunch</p>
                        <p>
                          To kick off the EthGlobal Hackathon, we hosted a{' '}
                          <a href="https://lu.ma/0G_BuildersBrunch">
                            Builders’ Brunch
                          </a>{' '}
                          to connect directly with developers, answer technical
                          questions, and help teams get started with the 0G
                          stack. From inference and gaming to DePIN and
                          verifiable compute, we shared how our modular
                          infrastructure unlocks new possibilities for AI-native
                          applications.
                        </p>
                        <p>📍 EthCC Builders Showcase</p>
                        <p>
                          Later that day, three 0G ecosystem teams—Tingz, Zia,
                          and Mind Network—took the stage at the official{' '}
                          <a href="https://lu.ma/ethcc-showcase">
                            EthCC Builders Showcase
                          </a>
                          . Judged by top VCs and community members, the
                          showcase spotlighted 15 top projects shaping Ethereum’s
                          future. Mind Network and Tingz earned 3rd and 4th place
                          awards, validating the strength of the ecosystem and
                          the growing momentum around modular AI infrastructure.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae8e_AD_4nXf_iT2oacSAPfaY09p66IQ5uLs3VQjiDalVMQ2xU_l3-yw-PF10jXF-tm8C2Y5wNLu11sbVbg2WbMeBB-ZoMlqXkANFMXhVqn4sENvn3r77riJbOqICU6rvgcuwE9qW4ttvI-k.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>📍 MasterMinds' Boat Cruise</p>
                        <p>
                          In the evening, we partnered with SwissBorg to co-host
                          the{' '}
                          <a href="https://lu.ma/1jzz6amh">
                            MasterMinds' Boat Cruise
                          </a>
                          : a curated networking event aboard a catamaran off the
                          Côte d’Azur. Designed for C-level leaders, VCs, and
                          founders, the cruise mixed sunset views with good
                          music, sharp conversation, and great wine.
                        </p>
                        <figure className="n03_w-richtext-align-center w-richtext-align-center n03_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n03_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687528ae2f2b0a7cdd88ae74_AD_4nXcKsGrzJytCpCoMdpWC4wGloi9uHe1-ruDLOXaifl3wdvb7wSSAUoAv2ExFpX-jKe9cRrFd0VR0ysKSQwkkrwR25sEYISsYAkKBBdaJ0IKltVPB7YvWY8isc__NfdCslOAAIi1M.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h2>July 3: Builders by Day, Conversations by Night</h2>
                        <p>📍 EthGlobal</p>
                        <p>
                          With EthGlobal officially underway, the 0G team was
                          on-site throughout the day, supporting hackathon
                          participants building with our modular AI stack. From
                          helping teams integrate verifiable compute to answering
                          technical questions on our data layer, we stayed close
                          to the builders, bringing new ideas to life on testnet.
                        </p>
                        <p>📍 Huddle01 x Fenbushi Investor &amp; Partner Dinner</p>
                        <p>
                          That evening, George attended the Huddle01 x Fenbushi
                          Capital{' '}
                          <a href="https://lu.ma/2l6dr8ir">investor dinner</a> for
                          an intimate, invite-only gathering set against the
                          French Riviera. Over curated cuisine and conversation,
                          partners and investors explored shared priorities
                          around decentralized infra, AI innovation, and the
                          next wave of high-impact startups.
                        </p>
                        <h2>July 4-6: Hacking Onchain AI</h2>
                        <p>📍 EthGlobal Cannes Hackathon</p>
                        <p>
                          The final stretch of EthCC Cannes brought us deep into
                          the{' '}
                          <a href="https://ethglobal.com/events/cannes">
                            ETHGlobal Hackathon
                          </a>
                          , where 0G sponsored a $5,000 bounty for the most
                          innovative use of our ecosystem. The challenge called
                          on developers to build projects that couldn’t exist
                          without 0G.
                        </p>
                        <p>
                          From AI-powered dApps and onchain gaming to machine
                          learning protocols and DeFi primitives, teams submitted
                          working prototypes deployed on the 0G testnet. Each
                          entry was required to integrate at least one core
                          component of our stack and demonstrate real usage.
                        </p>
                        <h2>Looking Ahead</h2>
                        <p>
                          EthCC Cannes provided us with the opportunity to
                          demonstrate what 0G is building and why it matters.
                          Over the course of the week, we moved from morning
                          wellness to mainstage keynotes, from hands-on workshops
                          to high-level strategy sessions. Across every format,
                          one thing was clear: the demand for open, modular AI
                          infrastructure is growing, and the community is ready
                          to build it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="n03_section_filter section_filter">
            <div className="n03_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section> */}

          {/* <div className="n03_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n03_cms-grid_list cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="n03_cms-grid_item cms-grid_item w-dyn-item">
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n03_cms-grid_content-wrapper cms-grid_content-wrapper n03_is-blog is-blog w-inline-block"
                >
                  <div className="n03_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n03_cms-grid_image cms-grid_image"
                    />
                    <div className="n03_spacer-medium spacer-medium n03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n03_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n03_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n03_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                        <div className="n03_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n03_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n03_cms-grid_item cms-grid_item w-dyn-item">
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n03_cms-grid_content-wrapper cms-grid_content-wrapper n03_is-blog is-blog w-inline-block"
                >
                  <div className="n03_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n03_cms-grid_image cms-grid_image"
                    />
                    <div className="n03_spacer-medium spacer-medium n03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n03_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n03_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n03_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                        <div className="n03_blog_meta-date2">Sep 16, 2025</div>
                      </div>
                      <div className="n03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n03_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n03_cms-grid_item cms-grid_item w-dyn-item">
                <a
                  href="/blog/ethcc-cannes-recap"
                  aria-current="page"
                  className="n03_cms-grid_content-wrapper cms-grid_content-wrapper n03_is-blog is-blog w-inline-block w--current"
                >
                  <div className="n03_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n03_cms-grid_image cms-grid_image"
                    />
                    <div className="n03_spacer-medium spacer-medium n03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n03_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n03_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n03_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                        <div className="n03_blog_meta-date2">Jul 14, 2025</div>
                      </div>
                      <div className="n03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n03_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n03_cms-grid_item cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-art-contest"
                  className="n03_cms-grid_content-wrapper cms-grid_content-wrapper n03_is-blog is-blog w-inline-block"
                >
                  <div className="n03_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n03_cms-grid_image cms-grid_image"
                    />
                    <div className="n03_spacer-medium spacer-medium n03_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n03_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n03_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n03_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n03_icon-embed-custom icon-embed-custom n03_w-embed w-embed">
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
                        <div className="n03_blog_meta-date2">Jun 17, 2025</div>
                      </div>
                      <div className="n03_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n03_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`n03_copy-toast ${showToast ? 'n03_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
