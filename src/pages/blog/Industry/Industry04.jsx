import React, { useState } from 'react'
import './Industry04.css'

export default function Industry04() {
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
    const text = encodeURIComponent('How 0G Can Power Better Web3 Gaming')
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
    <div className="i04_container">
      <div className="i04_pageWrapper page-wrapper">
        <div fs-socialshare-element="content" className="i04_socialShareContent hide">
          <div className="i04_socialShareLead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="i04_socialShareTitle">How 0G Can Power Better Web3 Gaming</div>
        </div>

        <main className="i04_mainWrapper main-wrapper">
          <section className="i04_sectionHero section_hero is-vertical">
            <div className="i04_paddingGlobalHero padding-global">
              <div className="i04_containerLargeHero container-large">
                <div className="i04_heroBgWrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="i04_heroBgImage hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="i04_heroBgImageDyn hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="i04_heroBgGradient hero_bg-gradient is-blog"></div>
                </div>

                <div className="i04_heroContent hero_content-component is-vertical">
                  <div className="i04_blogMetaWrapper blog_meta-wrapper is-white">
                    <div className="i04_blogMetaDate">Aug 19, 2024</div>
                    <div className="i04_blogMetaDot icon-embed-custom w-embed">
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
                    <div className="i04_blogMetaCategory">Industry</div>
                  </div>

                  <div className="i04_spacerSmallTop spacer-small"></div>

                  <div className="i04_titleWrap max-width-large text-align-center">
                    <h1 className="i04_title heading-style-h3">
                      How 0G Can Power Better Web3 Gaming
                    </h1>
                  </div>

                  <div className="i04_spacerSmallBottom spacer-small"></div>

                  <div className="i04_blogButtonWrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="i04_shareLink link-icon-light is-static w-inline-block"
                    >
                      <div className="i04_shareIcon icon-embed-xsmall w-embed">
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
                      className="i04_shareLink i04_shareLinkLinkedIn link-icon-light is-static w-inline-block"
                    >
                      <div className="i04_shareIcon icon-embed-xsmall w-embed">
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
                      className="i04_shareLink i04_shareLinkX link-icon-light is-static w-inline-block"
                    >
                      <div className="i04_shareIcon icon-embed-xsmall w-embed">
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

          <section className="i04_sectionLegal section_legal-content">
            <div className="i04_paddingGlobalContent padding-global">
              <div className="i04_paddingSectionMedium padding-section-medium">
                <div className="i04_containerSmall container-small">
                  <div className="i04_legalOuter">
                    <div className="i04_legalComponent legal-content_component">
                      <div className="i04_richText blog-rich-text w-richtext">
                        <p>
                          Picture a plain with dozens of troops fighting in a
                          massively multiplayer online game (
                          <a href="https://www.pcmag.com/encyclopedia/term/mmorpg">
                            MMORPG
                          </a>
                          . Thousands of complex interactions are happening at
                          once – spells, blocks, critical strikes, deaths,
                          revivals. Each character is controlled by a gamer,
                          plus there are non-playable characters. Now, zoom out
                          to the whole world of battles, quests, loot, chats,
                          and everything else happening in that game’s
                          universe. Fully on-chain gaming must capture each of
                          these movements at a sub-second level, which is
                          currently infeasible.
                        </p>
                        <p>
                          How could a blockchain possibly manage Web3 gaming
                          fully on-chain?
                        </p>
                        <p>
                          The answer: <a href="https://0g.ai/blog/introduction">0G</a>.&nbsp;
                        </p>
                        <p>Blockchain games require:</p>
                        <ul role="list">
                          <li>High throughput</li>
                          <li>Massive scalability</li>
                          <li>Low fees</li>
                          <li>Large databases</li>
                          <li>Interoperability, and</li>
                          <li>AI integrations</li>
                        </ul>
                        <figure className="i04_richFigure w-richtext-align-center w-richtext-figure-type-image">
                          <div className="i04_richFigureInner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f7599cd8e14724b4ec_hyZhFg8dvHk5nND20UOT0kVePu4.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          0G is the only solution capable of delivering on all
                          of the above fronts, providing the technical
                          foundation that Web3 gaming needs.&nbsp;
                        </p>
                        <h2>Existing DA Solutions Cannot Serve Web3 Gaming</h2>
                        <p>
                          Web3 gaming currently exists primarily off-chain as
                          the infrastructure available to support on-chain
                          gaming does not exist.&nbsp;
                        </p>
                        <p>
                          Existing data availability (DA) solutions are
                          inadequate in terms of speed and throughput, unable
                          to support next-gen gaming that require thousands of
                          players and AI agents simultaneously interacting in
                          complex digital worlds. Not only must they store vast
                          amounts of data (game information, user positions,
                          items, etc), but this data must be quickly queried
                          and updated as the game evolves.
                        </p>
                        <p>
                          Doing this on-chain is not realistic given throughput
                          and latency constraints.
                        </p>
                        <p>
                          For example, Celestia (considered a DA pioneer) has
                          throughput limited to{' '}
                          <a href="https://near.org/data-availability">
                            6.67 mb/second
                          </a>
                          . In contrast, based on testnet testing, 0G can reach
                          the unprecedented DA throughput of 50 GB/second at
                          any given moment in time (~7,600x greater).
                        </p>
                        <p>
                          How so? 0G has{' '}
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            completely rearchitectured DA
                          </a>{' '}
                          to support smooth gameplay, providing a much faster
                          and cheaper solution.
                        </p>
                        <h2>Scalability, Throughput, and Storage</h2>
                        <p>
                          Think about an open-world game, strategy game, or
                          even a turn-based battle card game. Bringing these
                          games on-chain at scale means thousands of
                          transactions per second (each!), at a minimum.
                        </p>
                        <p>
                          This is why Web3 games require{' '}
                          <a href="https://0g.ai/blog/the-utility-of-0g">
                            fast, scalable blockchain infrastructure
                          </a>
                          .&nbsp;
                        </p>
                        <p>
                          0G gives blockchains and the Web3 games built on them
                          fast, scalable infrastructure. To support this, 0G
                          has a massively scalable storage network (“
                          <a href="https://0g.ai/blog/0g-storage">0G Storage</a>”)
                          that can be quickly queried for data retrieval or
                          data verification. This means that everything related
                          to a game is quickly retrievable (assets, positions,
                          gameplay history, etc) and with high throughput. As
                          mentioned above, throughput is estimated at ~7,600x
                          greater than a leading DA solution.
                        </p>
                        <p>
                          Meanwhile, the system verifying this data (“
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            0G DA
                          </a>
                          ”) is infinitely scalable and can therefore quickly
                          query or verify data regardless of network demand.
                        </p>
                        <p>This means that gaming with 0G is:</p>
                        <ul role="list">
                          <li>Highly scalable</li>
                          <li>Extremely fast throughput</li>
                          <li>Deep interconnected data storage</li>
                        </ul>
                        <p>
                          On a small scale these might be deemed irrelevant,
                          but it’s the technology truly necessary to bring
                          gaming on-chain.
                        </p>
                        <h2>Blockchain Gaming With Low Fees</h2>
                        <p>
                          Open-world games have a massive amount of possible
                          scenarios that could unfold, with each action
                          resulting in a unique outcome that must be recorded.
                          If transaction fees are high, Web3 games become too
                          expensive. In fact, if fees are anything but
                          microscopic, Web3 games become unplayable.&nbsp;
                        </p>
                        <p>
                          Even Layer 2 transaction fees are too high to support
                          on-chain gaming, instead requiring reliance upon
                          Layer 3 architectures such as Arbitrum’’s{' '}
                          <a href="https://xai.games/">Xai Games</a> (with
                          Arbitrum being a partner than can use 0G for DA).
                        </p>
                        <p>
                          While high-throughput networks can be valid options
                          for Web3 gaming, it’s around storage where 0G really
                          differentiates itself. Its storage system is already
                          built-in and massively scalable, meaning greater
                          storage capacity and faster throughput. This provides
                          a far superior architecture to networks relying upon
                          data availability systems with no built-in data
                          storage.
                        </p>
                        <h2>Web3 Gaming Interoperability</h2>
                        <p>
                          Interoperability is one of Web3’s key advantages,
                          referring to the ability to move items, characters,
                          and other tokenized elements between games and
                          networks.
                        </p>
                        <p>
                          Without 0G, there is a challenge in communicating
                          between various EVM and non-EVM networks, as well as
                          general latency issues around fast communication
                          between networks.
                        </p>
                        <p>
                          0G is built for interoperability, with its{' '}
                          <a href="https://techcrunch.com/2024/03/26/0g-labs-launches-with-whopping-35m-pre-seed-to-build-a-modular-ai-blockchain/">
                            modular architecture
                          </a>{' '}
                          capable of being seamlessly integrated into a wide
                          array of legacy and upcoming blockchain networks.
                          This means that any building with 0G can communicate
                          with other projects built using 0G, as well as various
                          external networks (using 0G’s interoperability
                          partners such as{' '}
                          <a href="https://www.axelar.network/">Axelar</a>).
                        </p>
                        <h2>Artificial Intelligence in On-Chain Games</h2>
                        <p>
                          Artificial Intelligence (AI) is making games more
                          complex, interoperable, and endless. AI can
                          continually design lush landscapes and dungeons,
                          making games more varied and extending them beyond
                          the point they would end if made by only human
                          designers. AI agents can even exist as NPCs within
                          games, and these AI agents could be ownable by
                          players.&nbsp;
                        </p>
                        <p>
                          0G supports on-chain AI models. This allows Web3
                          games to harness AI features.&nbsp;
                        </p>
                        <p>
                          Further, with its ultra-high throughput, scaling, low
                          fees, and interoperability, 0G can power blockchain
                          games with AI far much more smoothly than any other
                          DA layer.&nbsp;
                        </p>
                        <h2>The Future of Web3 Games</h2>
                        <p>
                          Web3 games need infrastructure that can support
                          countless players battling in lush spaces across vast
                          digital worlds. Especially for fully on-chain games
                          and games with intensive AI features, performant
                          infrastructure is a basic requirement.&nbsp;
                        </p>
                        <p>
                          That’s exactly what 0G is doing for{' '}
                          <a href="https://www.bladedao.games/">Blade Games</a>,
                          an on-chain gaming infrastructure provider using
                          zero-knowledge proofs to store game state on-chain.
                          Blade does this in real-time, letting players verify
                          their game process and settle results – marking a
                          huge step in the growth toward fully on-chain gaming.
                        </p>
                        <p>
                          0G is designed to smoothly power the most intensive
                          Web3 games. It has been meticulously built for speed
                          and efficient data retrieval, thriving even in the
                          most data-heavy use cases.
                        </p>
                        <p>
                          Games we can hardly imagine today can be built on
                          blockchains that use 0G.&nbsp;
                        </p>
                        <p>Want to start building on 0G?&nbsp;</p>
                        <p>
                          Visit <a href="https://0g.ai/">0G’s website</a> to
                          learn more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="i04_sectionFilter section_filter">
            <div className="i04_moreBlog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="i04_relatedList w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="i04_relatedItems cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="i04_relatedItem01 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-origin-story"
                  className="i04_relatedLink01 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i04_relatedContent01 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682127048db2a15bce078551_PJXpESYIRq7OTB3DRaoo2q18ds.avif"
                      loading="lazy"
                      alt=""
                      className="i04_relatedImage01 cms-grid_image"
                    />
                    <div className="i04_relatedSpacer01 spacer-medium hide-mobile-portrait"></div>
                    <div className="i04_relatedTextWrap01 blog_contnet-wrapper">
                      <div className="i04_relatedMeta01 blog_meta-wrapper">
                        <div className="i04_relatedCategory01">Industry</div>
                        <div className="i04_relatedDot01 icon-embed-custom w-embed">
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
                        <div className="i04_relatedDate01">Mar 26, 2024</div>
                      </div>
                      <div className="i04_relatedSpacerX01 spacer-xmedium"></div>
                      <h3 className="i04_relatedTitle01 heading-style-h5">
                        0G Origin Story
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i04_relatedItem02 cms-grid_item w-dyn-item">
                <a
                  href="/blog/navigate-web3-s-future-with-0g-key-concepts-and-innovations"
                  className="i04_relatedLink02 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i04_relatedContent02 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270465373596cc2f25ed_fo6W7M9bmWAcIxuu8BG3SGCj5Q.avif"
                      loading="lazy"
                      alt=""
                      className="i04_relatedImage02 cms-grid_image"
                    />
                    <div className="i04_relatedSpacer02 spacer-medium hide-mobile-portrait"></div>
                    <div className="i04_relatedTextWrap02 blog_contnet-wrapper">
                      <div className="i04_relatedMeta02 blog_meta-wrapper">
                        <div className="i04_relatedCategory02">Industry</div>
                        <div className="i04_relatedDot02 icon-embed-custom w-embed">
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
                        <div className="i04_relatedDate02">Apr 8, 2024</div>
                      </div>
                      <div className="i04_relatedSpacerX02 spacer-xmedium"></div>
                      <h3 className="i04_relatedTitle02 heading-style-h5">
                        Navigate Web3&apos;s Future with 0G: Key Concepts and Innovations
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i04_relatedItem03 cms-grid_item w-dyn-item">
                <a
                  href="/blog/6-emerging-key-trends-in-blockchain-technology"
                  className="i04_relatedLink03 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i04_relatedContent03 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ff65373596cc2f2108_pgOLkOIAwPqcTVVofD35xrLYQ.avif"
                      loading="lazy"
                      alt=""
                      className="i04_relatedImage03 cms-grid_image"
                    />
                    <div className="i04_relatedSpacer03 spacer-medium hide-mobile-portrait"></div>
                    <div className="i04_relatedTextWrap03 blog_contnet-wrapper">
                      <div className="i04_relatedMeta03 blog_meta-wrapper">
                        <div className="i04_relatedCategory03">Industry</div>
                        <div className="i04_relatedDot03 icon-embed-custom w-embed">
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
                        <div className="i04_relatedDate03">May 23, 2024</div>
                      </div>
                      <div className="i04_relatedSpacerX03 spacer-xmedium"></div>
                      <h3 className="i04_relatedTitle03 heading-style-h5">
                        6 Emerging Key Trends in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i04_relatedItem04 cms-grid_item w-dyn-item">
                <a
                  href="/blog/the-comprehensive-guide-to-data-availability-in-blockchain-technology"
                  className="i04_relatedLink04 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i04_relatedContent04 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fe2d09deedb577d993_JUdhw2M9qC3h30iV8tWNNsPJgA.avif"
                      loading="lazy"
                      alt=""
                      className="i04_relatedImage04 cms-grid_image"
                    />
                    <div className="i04_relatedSpacer04 spacer-medium hide-mobile-portrait"></div>
                    <div className="i04_relatedTextWrap04 blog_contnet-wrapper">
                      <div className="i04_relatedMeta04 blog_meta-wrapper">
                        <div className="i04_relatedCategory04">Industry</div>
                        <div className="i04_relatedDot04 icon-embed-custom w-embed">
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
                        <div className="i04_relatedDate04">Jun 6, 2024</div>
                      </div>
                      <div className="i04_relatedSpacerX04 spacer-xmedium"></div>
                      <h3 className="i04_relatedTitle04 heading-style-h5">
                        The Comprehensive Guide to Data Availability in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`i04_copy-toast ${showToast ? 'i04_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

