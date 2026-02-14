import React, { useEffect, useState } from 'react'
import './Tech32.css'

export default function Tech32() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t32-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t32-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: 0G Newton Testnet: RPC Integration Guide')
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
    <div className="t32_container">
      <div className={`t32_copy-toast ${showToast ? 't32_show' : ''}`}>Link copied</div>

      <div className="t32_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t32_div002 hide">
          <div className="t32_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t32_div004">0G Newton Testnet: RPC Integration Guide</div>
        </div>

        <main className="t32_main-wrapper main-wrapper">
          <section className="t32_section_hero section_hero is-vertical">
            <div className="t32_div005 padding-global">
              <div className="t32_div006 container-large">
                <div className="t32_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t32_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t32_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t32_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t32_div008 hero_content-component is-vertical">
                  <div className="t32_div009 blog_meta-wrapper is-white">
                    <div className="t32_div010">Tech</div>
                    <div className="t32_div011 icon-embed-custom w-embed">
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
                    <div className="t32_div012">Jan 16, 2025</div>
                    <div className="t32_div013 icon-embed-custom w-embed">
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
                    <div className="t32_div014">0g</div>
                  </div>

                  <div className="t32_div015 spacer-small"></div>

                  <div className="t32_div016 max-width-large text-align-center">
                    <h1 className="t32_heading heading-style-h3">0G Newton Testnet: RPC Integration Guide</h1>
                  </div>

                  <div className="t32_div017 spacer-small"></div>

                  <div className="t32_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t32_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t32_div019 icon-embed-xsmall w-embed">
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
                      className="t32_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t32_div020 icon-embed-xsmall w-embed">
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
                      className="t32_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t32_div021 icon-embed-xsmall w-embed">
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

          <section className="t32_section_legal-content section_legal-content">
            <div className="t32_div022 padding-global">
              <div className="t32_div023 padding-section-medium">
                <div className="t32_div024 container-small">
                  <div className="t32_div025">
                    <div className="t32_div026 legal-content_component">
                      <div className="t32_div027 blog-rich-text w-richtext">
                        <h3>
                          <strong>0G Newton Testnet: RPC Integration Guide&nbsp;</strong>
                        </h3>
                        <p>
                          Welcome to the <strong>0G Newton Testnet, the largest AI Layer 1 ecosystem</strong>, powered by 0G’s DeAIOS and backed by $325M in funding. 0G is the ultimate home for decentralized AI, providing on-chain infrastructure to build the next generation of highly-performant AI applications.
                        </p>
                        <p>
                          As the first Artificial Intelligence Layer (AIL), 0G introduces a new category of decentralized infrastructure purpose-built for open, intelligent systems. Together, its core modules power what we call Infinite AI: a future of composable, verifiable intelligence available to all.
                        </p>
                        <p>
                          Below, we’ll cover how to connect to the 0G Newton Testnet, so that you can begin interacting with decentralized AI applications or begin building the future of AI yourself.
                        </p>
                        <h3>
                          <strong>Why Build on the 0G Newton Testnet?</strong>
                        </h3>
                        <p>
                          On-chain AI currently suffers from a lack of scalable infrastructure, including inadequate data storage and data availability solutions. 0G is the ultimate ecosystem for decentralized AI innovation, providing a decentralized AI Operating System (deAIOS) that can power nearly any AI application imaginable.&nbsp;
                        </p>
                        <p>
                          As a one-stop platform, 0G combines compute, storage, data availability, and a service marketplace into a unified stack, making it dramatically easier for developers to build and scale decentralized AI applications.
                        </p>
                        <p>On the backend, the deAIOS includes:</p>
                        <ul role="list">
                          <li>
                            <strong>0G Storage</strong>: Secure, tamper-proof storage for AI models and datasets on decentralized infrastructure.
                          </li>
                          <li>
                            <strong>0G Data Availability</strong>: Fast and reliable data retrieval, powering real-time AI applications.
                          </li>
                          <li>
                            <strong>0G Services Marketplace</strong>: A hub to connect with specialized AI service providers for inference and fine-tuning.
                          </li>
                          <li>
                            <strong>0G Compute</strong>: Scalable on-chain computing to train and deploy AI models seamlessly.
                          </li>
                          <li>
                            <strong>0G Chain: </strong>A Layer 1 EVM-compatible network that relies upon a distributed system of multiple independent consensus networks for infinite scalability. As the amount of data to be confirmed grows exponentially, the consensus networks can also expand.
                          </li>
                        </ul>
                        <p>
                          Altogether, 0G is creating the largest AI application ecosystem that enables seamless integration with existing dApps and delivers unmatched scalability and performance.
                        </p>
                        <p>
                          <strong>Getting Started</strong>
                        </p>
                        <h4>To connect to the 0G Newton Testnet, there are 4 steps:</h4>
                        <ol role="list">
                          <li>
                            <strong>Install a Wallet: </strong>Download a compatible wallet like MetaMask or WalletConnect.
                          </li>
                          <li>
                            <strong>Configure the Network:</strong> Add the 0G Newton Testnet details to your wallet&apos;s network settings.
                          </li>
                          <li>
                            <strong>Connect Your Wallet: </strong>Switch to the 0G Newton Testnet within your chosen wallet.
                          </li>
                          <li>
                            <strong>Import Tokens: </strong>Add A0GI-based token contract addresses to manage assets
                          </li>
                        </ol>
                        <p>
                          <strong>1. Install a Wallet</strong>
                        </p>
                        <p>
                          Download a wallet, such as the MetaMask browser extension or mobile app from <a href="https://metamask.io/">metamask.io</a>.
                        </p>
                        <p>Create or import a wallet using your secret recovery phrase.</p>
                        <p>
                          <strong>2. Configure the Network</strong>
                        </p>
                        <p>
                          For MetaMask, this is done by going to <strong>Settings &gt; Network &gt; Add Network</strong>.
                        </p>
                        <p>Once ready, enter the following details:</p>
                        <ul role="list">
                          <li>
                            <strong>Network Name</strong>: 0G Newton Testnet
                          </li>
                          <li>
                            <strong>ChainID</strong>: 16600 (zgtendermint_16600-2)
                          </li>
                          <li>
                            <strong>Currency Symbol</strong>: A0GI
                          </li>
                        </ul>
                        <p>You must also enter an RPC Server Address.</p>
                        <p>
                          The default is <a href="https://www.quicknode.com/chains/0g">QuickNode’s RPC</a>, though more RPC links can be viewed <a href="https://docs.0g.ai/run-a-node/testnet-information">in our Docs</a>, and include community-built RPC’s as well as <a href="https://thirdweb.com/0g-newton-testnet">ThirdWeb’s RPC</a> and <a href="https://www.ankr.com/rpc/0g/">Ankr’s RPC.</a>
                        </p>
                        <p>
                          3. <strong>Connect Your Wallet</strong>
                        </p>
                        <p>
                          After saving the network details, switch to the <strong>0G Newton Testnet</strong> in your wallet.
                        </p>
                        <p>
                          If you&apos;re using <strong>MetaMask</strong>, follow these steps:
                        </p>
                        <ul role="list">
                          <li>Click on the network dropdown at the top of the MetaMask interface.</li>
                          <li>
                            Select <strong>0G Newton Testnet</strong> from the list of available networks.
                          </li>
                        </ul>
                        <p>
                          Your wallet is now successfully connected and ready to interact with decentralized AI applications on 0G.
                        </p>
                        <h4>
                          <strong>4. Import Tokens</strong>
                        </h4>
                        <p>
                          Locate the token contract address for any A0GI-based assets, which can be accessed via ChainScan:{' '}
                          <a href="https://chainscan-newton.0g.ai/">https://chainscan-newton.0g.ai/</a>&nbsp;
                        </p>
                        <p>
                          In MetaMask, click <strong>Import Tokens</strong>, paste the address, and confirm. This may be slightly different for another Web3 wallet.
                        </p>
                        <h3>
                          <strong>Build the Future of AI on 0G</strong>
                        </h3>
                        <p>
                          The 0G Newton Testnet isn’t just a blockchain, it’s the largest foundation for the next generation of AI applications. From secure data storage to cutting-edge compute capabilities, 0G empowers developers to build the future of AI in a decentralized and transparent way.
                        </p>
                        <h4>
                          <strong>Ready to get started?</strong>
                        </h4>
                        <ul role="list">
                          <li>
                            Visit <a href="https://0g.ai/">0G Labs</a> for more information.
                          </li>
                          <li>
                            Join our community on <a href="https://discord.com/invite/0G">Discord</a>.
                          </li>
                          <li>Explore developer resources and take the first step toward building with Infinite AI on the first-ever AIL.</li>
                        </ul>
                        <p>Let’s build the future - together.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t32_section_filter section_filter">
            <div className="t32_div028 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t32_div029 w-dyn-list t32_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t32_div030 cms-grid_list w-dyn-items">
              <div role="listitem" className="t32_div031 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t32_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t32_div032 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t32_img003 cms-grid_image"
                    />
                    <div className="t32_div033 spacer-medium hide-mobile-portrait"></div>
                    <div className="t32_div034 blog_contnet-wrapper">
                      <div className="t32_div035 blog_meta-wrapper">
                        <div className="t32_div036">Tech</div>
                        <div className="t32_div037 icon-embed-custom w-embed">
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
                        <div className="t32_div038">Sep 5, 2024</div>
                      </div>
                      <div className="t32_div039 spacer-xmedium"></div>
                      <h3 className="t32_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t32_div040 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t32_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t32_div041 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t32_img004 cms-grid_image"
                    />
                    <div className="t32_div042 spacer-medium hide-mobile-portrait"></div>
                    <div className="t32_div043 blog_contnet-wrapper">
                      <div className="t32_div044 blog_meta-wrapper">
                        <div className="t32_div045">Tech</div>
                        <div className="t32_div046 icon-embed-custom w-embed">
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
                        <div className="t32_div047">Aug 25, 2025</div>
                      </div>
                      <div className="t32_div048 spacer-xmedium"></div>
                      <h3 className="t32_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t32_div049 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t32_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t32_div050 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t32_img005 cms-grid_image"
                    />
                    <div className="t32_div051 spacer-medium hide-mobile-portrait"></div>
                    <div className="t32_div052 blog_contnet-wrapper">
                      <div className="t32_div053 blog_meta-wrapper">
                        <div className="t32_div054">Tech</div>
                        <div className="t32_div055 icon-embed-custom w-embed">
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
                        <div className="t32_div056">Aug 7, 2025</div>
                      </div>
                      <div className="t32_div057 spacer-xmedium"></div>
                      <h3 className="t32_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t32_div058 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t32_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t32_div059 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t32_img006 cms-grid_image"
                    />
                    <div className="t32_div060 spacer-medium hide-mobile-portrait"></div>
                    <div className="t32_div061 blog_contnet-wrapper">
                      <div className="t32_div062 blog_meta-wrapper">
                        <div className="t32_div063">Tech</div>
                        <div className="t32_div064 icon-embed-custom w-embed">
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
                        <div className="t32_div065">Jul 3, 2025</div>
                      </div>
                      <div className="t32_div066 spacer-xmedium"></div>
                      <h3 className="t32_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

