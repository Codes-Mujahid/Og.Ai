import React, { useState } from 'react'
import './News16.css'

export default function News16() {
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
      'FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster'
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
    <div className="n16_container">
      <div className={`n16_copy-toast ${showToast ? 'n16_show' : ''}`}>
        Link copied
      </div>

      <div
        fs-socialshare-element="content"
        className="n16_socialshare-content hide"
      >
        <div className="n16_socialshare-lead">
          Check out this insightful blog post:&nbsp;
        </div>
        <div className="n16_socialshare-title">
          FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster
        </div>
      </div>

      <div className="n16_page-wrapper page-wrapper">
        <main className="n16_main-wrapper main-wrapper">
          <section className="n16_section_hero section_hero is-vertical">
            <div className="n16_padding-global padding-global">
              <div className="n16_container-large container-large">
                <div className="n16_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n16_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n16_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="n16_hero_bg-gradient hero_bg-gradient is-blog"></div>
                </div>

                <div className="n16_hero_content-component hero_content-component is-vertical">
                  <div className="n16_blog_meta-wrapper blog_meta-wrapper is-white">
                    <div className="n16_blog_meta-category">News</div>
                    <div className="n16_blog_meta-dot icon-embed-custom w-embed">
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
                    <div className="n16_blog_meta-date">Jul 8, 2024</div>
                    <div className="n16_blog_meta-dot2 icon-embed-custom w-embed">
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
                    <div className="n16_blog_meta-author">0g</div>
                  </div>

                  <div className="n16_spacer-small spacer-small"></div>

                  <div className="n16_max-width-large max-width-large text-align-center">
                    <h1 className="n16_heading heading-style-h3">
                      FOCG Summer co-hosted by 0G Labs, Blade Games and
                      Blockbooster
                    </h1>
                  </div>

                  <div className="n16_spacer-small2 spacer-small"></div>

                  <div className="n16_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="n16_link-icon-light link-icon-light is-static w-inline-block"
                    >
                      <div className="n16_copy-icon icon-embed-xsmall w-embed">
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
                      className="n16_link-icon-light2 link-icon-light is-static w-inline-block"
                    >
                      <div className="n16_linkedin-icon icon-embed-xsmall w-embed">
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
                      className="n16_link-icon-light3 link-icon-light is-static w-inline-block"
                    >
                      <div className="n16_x-icon icon-embed-xsmall w-embed">
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

          <section className="n16_section_legal-content section_legal-content">
            <div className="n16_padding-global2 padding-global">
              <div className="n16_padding-section-medium padding-section-medium">
                <div className="n16_container-small container-small">
                  <div className="n16_legal-content_outer">
                    <div className="n16_legal-content_component legal-content_component">
                      <div className="n16_blog-rich-text blog-rich-text w-richtext">
                        <ul role="list" className="n16_list01">
                          <li className="n16_list01_item">
                            <em>
                              Social Quests will launch from July 1st to July
                              15th, Game and point system will launch from July
                              16th to August 16th
                            </em>
                          </li>
                        </ul>
                        <ul role="list" className="n16_list02">
                          <li className="n16_list02_item">
                            <em>
                              Details on how to participate in each game, as
                              well as rules will be posted in the following
                              blogs
                            </em>
                          </li>
                        </ul>
                        <p className="n16_p01">
                          Followed by a successful launch of Testnet v1 with
                          over 600,000 unique wallets, we launched the Testnet
                          Newton v2 one month ago. On our resolute path towards
                          the mainnet launch, we remain committed to bringing
                          more and better things to our community. Therefore,
                          we are glad to introduce the FOCG Summer Campaign.
                        </p>
                        <h3 className="n16_h3_01">
                          <strong>Introduce the FOCG Summer Campaign</strong>
                        </h3>
                        <p className="n16_p02">
                          Since the concept of Autonomous World and Onchain
                          Games was introduced by the Lattice team, we’ve seen a
                          variety of games and AWs being built on different
                          infrastructures. However, the user experience and
                          scalability remain as an issue. At 0G Labs, we have
                          always believed that a modular AI blockchain and a
                          high-performance DA layer are the fertile ground
                          needed for High-performance on-chain dApps, such as
                          fully onchain games, to thrive.
                        </p>
                        <p className="n16_p03">
                          In this upcoming on-chain gaming event, several
                          highly anticipated onchain gaming partners are invited
                          to deploy and open game testing on the 0G Testnet.
                          Leading players in the zkVM and rollup landscapes are
                          there to support our tech stacks and bring a better
                          and unprecedented gaming experience.
                        </p>
                        <p className="n16_p04">
                          Some of the games are powered by Blade Games’
                          trustless game engine, zkUnity, which is the first
                          modular ZK game engine to enable real-time gameplay
                          and trustless processes. zkUnity has also integrated
                          0G Labs’ high performance DA layer, to enable storage
                          and verification of ZK Proofs on-chain.
                        </p>
                        <p className="n16_p05">
                          This is one of the best opportunities to join 0G
                          Testnet, experience fun and engaging on-chain games,
                          witness the practical application of high data
                          availability in high data use cases and explore the
                          most cutting-edge blockchain technologies.
                        </p>
                        <h3 className="n16_h3_02">
                          <strong>Schedule</strong>
                        </h3>
                        <p className="n16_p06">
                          <strong>Tuesday July 9th (tentative)</strong>
                        </p>
                        <ul role="list" className="n16_list03">
                          <li className="n16_list03_item">
                            Galxe Quest Launch, join to win points in advance
                          </li>
                        </ul>
                        <p className="n16_p07">
                          <strong>Monday July 22nd</strong>
                        </p>
                        <ul role="list" className="n16_list04">
                          <li className="n16_list04_item">Galxe Quest End</li>
                        </ul>
                        <p className="n16_p08">
                          <strong>Tuesday July 23rd</strong>
                        </p>
                        <ul role="list" className="n16_list05">
                          <li className="n16_list05_item">
                            Point System Launch and Game Launch
                          </li>
                        </ul>
                        <p className="n16_p09">
                          <strong>
                            Wednesday August 7th - Thursday August 15th
                          </strong>
                        </p>
                        <ul role="list" className="n16_list06">
                          <li className="n16_list06_item">Wrap up</li>
                        </ul>
                        <h3 className="n16_h3_03">
                          <strong>Featured Partners</strong>
                        </h3>
                        <p className="n16_p10">
                          <a href="https://delphinuslab.com/">
                            <strong>Delphinus Lab</strong>
                          </a>
                          <strong> - Infrastructure Partner</strong>
                          <br />
                          <strong></strong>
                          Delphinus lab provides solutions for trustless
                          computation and application SDK based on the{' '}
                          <a href="https://zkwasmhub.com/">ZKWasm</a> virtual
                          machine. It is backed by Binance Labs, OKX ventures, 7x
                          ventures and other leading crypto VC funds.
                        </p>
                        <p className="n16_p11">
                          <a href="https://www.bladedao.games/">
                            <strong>Dune Factory</strong>
                          </a>
                          <strong> - Game Partner</strong>
                        </p>
                        <figure className="n16_figure01 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n16_figure01_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f92d09deedb577d80b_wfzpVRPq6f5emSGWnBZn4QLeGfk.avif"
                              loading="lazy"
                              className="n16_figure01_image"
                            />
                          </div>
                        </figure>
                        <p className="n16_p12">
                          <a href="https://x.com/BladeGamesHQ/status/1787426661434368338">
                            Gameplay Guide
                          </a>
                          <br />
                          Dune Factory is a tower defense strategy game built by
                          Blade Games, an on-chain game studio and
                          infrastructure provider built around the WebAssembly
                          and zkVM tech stack. It has raised $2.4 million from
                          PalmTreeCrew Crypto, IOSG Ventures, Mantle and Animoca
                          Brands.
                        </p>
                        <h3 className="n16_h3_04">
                          <strong>Co-hosts Introduction</strong>
                        </h3>
                        <p className="n16_p13">
                          <a href="https://0g.ai/">
                            <strong>0G Labs</strong>
                          </a>{' '}
                          is a leading Web3 infrastructure provider that is
                          building a leading modular AI blockchain and high
                          performance DA layer for Dapps. They raised over 35mm+
                          from leading VCs such as Hack VC, Alliance, Bankless,
                          Delphi, Gumi Crypto, OKX Ventures and others. The team
                          includes PhDs, gold medalists in the Informatics
                          Olympiads, as well as one of the world’s top
                          cryptographers.
                        </p>
                        <p className="n16_p14">
                          <a href="https://www.bladedao.games/">
                            <strong>Blade Games</strong>
                          </a>{' '}
                          is an on-chain game studio and infrastructure
                          provider, built around the WebAssembly and zkVM tech
                          stack. Games built with its ZK game engine can run
                          their game logic in a provable environment, and settle
                          game results as ZKP on L2s. The backers include PTC
                          Crypto, IOSG Ventures, Animoca Ventures, Mantle/Bybit
                          and others.
                        </p>
                        <p className="n16_p15">
                          <a href="https://blockbooster.io/">
                            <strong>BlockBooster</strong>
                          </a>{' '}
                          is a Web3 Venture Studio focused on the Asian market.
                          It collaborates with top-tier investors and ecosystem
                          partners to incubate and invest in quality Web3
                          projects, particularly in the Infra, DeFi, Gaming, and
                          Social sectors. BlockBooster is proudly backed by OKX
                          Ventures and other industry leaders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n16_section_filter section_filter">
            <div className="n16_blog_more-blog blog_more-blog">
              <h5 className="n16_related-heading">Related news:</h5>
            </div>
          </section>

          <div className="n16_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n16_cms-grid_list cms-grid_list n16_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n16_cms-grid_item cms-grid_item n16_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n16_cms-grid_content-wrapper cms-grid_content-wrapper n16_is-blog is-blog n16_w-inline-block w-inline-block"
                >
                  <div className="n16_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n16_cms-grid_image cms-grid_image"
                    />
                    <div className="n16_spacer-medium spacer-medium n16_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n16_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n16_blog_meta-wrapper2 blog_meta-wrapper">
                        <div
                          className="n16_blog_meta-category2"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n16_icon-embed-custom icon-embed-custom n16_w-embed w-embed">
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
                        <div className="n16_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n16_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n16_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n16_cms-grid_item2 cms-grid_item n16_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n16_cms-grid_content-wrapper2 cms-grid_content-wrapper n16_is-blog2 is-blog n16_w-inline-block2 w-inline-block"
                >
                  <div className="n16_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n16_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n16_spacer-medium2 spacer-medium n16_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n16_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n16_blog_meta-wrapper3 blog_meta-wrapper">
                        <div
                          className="n16_blog_meta-category3"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n16_icon-embed-custom2 icon-embed-custom n16_w-embed2 w-embed">
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
                        <div className="n16_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n16_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n16_heading-style-h5-2 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n16_cms-grid_item3 cms-grid_item n16_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n16_cms-grid_content-wrapper3 cms-grid_content-wrapper n16_is-blog3 is-blog n16_w-inline-block3 w-inline-block"
                >
                  <div className="n16_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n16_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n16_spacer-medium3 spacer-medium n16_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n16_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n16_blog_meta-wrapper4 blog_meta-wrapper">
                        <div
                          className="n16_blog_meta-category4"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n16_icon-embed-custom3 icon-embed-custom n16_w-embed3 w-embed">
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
                        <div className="n16_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n16_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n16_heading-style-h5-3 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n16_cms-grid_item4 cms-grid_item n16_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n16_cms-grid_content-wrapper4 cms-grid_content-wrapper n16_is-blog4 is-blog n16_w-inline-block4 w-inline-block"
                >
                  <div className="n16_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n16_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n16_spacer-medium4 spacer-medium n16_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n16_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n16_blog_meta-wrapper5 blog_meta-wrapper">
                        <div
                          className="n16_blog_meta-category5"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n16_icon-embed-custom4 icon-embed-custom n16_w-embed4 w-embed">
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
                        <div className="n16_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n16_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n16_heading-style-h5-4 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
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
