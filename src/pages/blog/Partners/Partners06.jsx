import React, { useState } from 'react'

export default function Partners06() {
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
      'User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster'
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
    <div className="partners06_root p06_div001">
      <style>{`
        .partners06_root .p06_copy-toast {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--purple-shade, #9200e1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-family: sans-serif;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 9999;
          pointer-events: none;
        }

        .partners06_root .p06_copy-toast.p06_show {
          opacity: 1;
        }

        .partners06_root .p06_section_hero {
          position: relative;
          overflow: hidden;
        }

        .partners06_root .p06_div008 {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .partners06_root .p06_hero_bg-image,
        .partners06_root .p06_hero_bg-image-2 {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .partners06_root .w-richtext ul {
          list-style-type: disc;
          padding-left: 2rem;
        }

        .partners06_root .w-richtext ol {
          list-style-type: decimal;
          padding-left: 2rem;
        }

        .partners06_root .w-richtext li {
          display: list-item;
        }
      `}</style>

      <div className={`p06_div002 p06_copy-toast ${showToast ? 'p06_show' : ''}`}>
        Link copied
      </div>

      <div fs-socialshare-element="content" className="p06_div003 hide">
        <div className="p06_div004">Check out this insightful blog post:&nbsp;</div>
        <div className="p06_div005">
          User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster
        </div>
      </div>

      <main className="p06_main main-wrapper">
        <section className="p06_section_hero section_hero is-vertical">
          <div className="p06_div006 padding-global">
            <div className="p06_div007 container-large">
              <div className="p06_div008 hero_bg-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                  alt=""
                  className="p06_hero_bg-image hero_bg-image"
                />
                <img
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                  loading="lazy"
                  alt=""
                  className="p06_hero_bg-image-2 hero_bg-image w-dyn-bind-empty"
                />
                <div className="p06_div009 hero_bg-gradient is-blog"></div>
              </div>

              <div className="p06_div010 hero_content-component is-vertical">
                <div className="p06_div011 blog_meta-wrapper is-white">
                  <div className="p06_div012">Partners</div>
                  <div className="p06_div013 icon-embed-custom w-embed">
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
                  <div className="p06_div014">Jul 23, 2024</div>
                  <div className="p06_div015 icon-embed-custom w-embed">
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
                  <div className="p06_div016">0g</div>
                </div>

                <div className="p06_div017 spacer-small"></div>

                <div className="p06_div018 max-width-large text-align-center">
                  <h1 className="p06_heading heading-style-h3">
                    User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and
                    Blockbooster
                  </h1>
                </div>

                <div className="p06_div019 spacer-small"></div>

                <div className="p06_div020 blog_button-wrapper">
                  <a
                    onClick={handleCopy}
                    href="#"
                    className="p06_link-icon-light link-icon-light is-static w-inline-block"
                  >
                    <div className="p06_div021 icon-embed-xsmall w-embed">
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
                    className="p06_link-icon-light-2 link-icon-light is-static w-inline-block"
                  >
                    <div className="p06_div022 icon-embed-xsmall w-embed">
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
                    className="p06_link-icon-light-3 link-icon-light is-static w-inline-block"
                  >
                    <div className="p06_div023 icon-embed-xsmall w-embed">
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

        <section className="p06_section_legal-content section_legal-content">
          <div className="p06_div024 padding-global">
            <div className="p06_div025 padding-section-medium">
              <div className="p06_div026 container-small">
                <div className="p06_div027">
                  <div className="p06_div028 legal-content_component">
                    <div className="p06_div029 blog-rich-text w-richtext">
                      <ul role="list">
                        <li>
                          <em>
                            Users can play a series of onchain games to win points
                          </em>
                        </li>
                        <li>
                          <em>
                            Games and point system will launch from Tuesday July
                            23rd
                          </em>
                        </li>
                        <li>
                          <em>The FOCG Summer will end at August 20th</em>
                        </li>
                      </ul>
                      <p>
                        On July 8, 0G{' '}
                        <a href="https://0g.ai/blog/focg-summer-co-hosted-by-0g-labs-blade-games-and-blockbooster">
                          announced
                        </a>{' '}
                        the FOCG Summer Campaign. Only 10 days after, we have
                        witnessed 25K participants joining our social quests and
                        getting ready for the Game Launch on Testnet.
                      </p>
                      <p>
                        On July 23rd, we will officially launch the points system,
                        and three collaborative games will go live on the test
                        network (Please see below for chain details).
                      </p>
                      <p>There are currently two primary ways to earn points:</p>
                      <ol role="list">
                        <li>
                          <strong>
                            Visit the points system website and play games
                          </strong>
                          . The point system website will be released on July
                          23rd, check in and bind your socials/wallets, share
                          your invitation code, and complete tasks. The best way
                          to earn points is to play games!
                        </li>
                      </ol>
                      <ol role="list">
                        <li>
                          <strong>
                            Participate in activities on the Social Quest
                            platform
                          </strong>{' '}
                          - follow the official X accounts of{' '}
                          <a href="https://x.com/0G_labs">0G</a>,{' '}
                          <a href="https://x.com/BladeGamesHQ">Blade Games</a>,
                          and{' '}
                          <a href="https://x.com/0xBlockBooster">Blockbooster</a>{' '}
                          or join our community to get the latest activities
                          information. We have currently released an event on
                          Galxe and{' '}
                          <a href="https://taskon.xyz/campaign/detail/591254625">
                            Taskon
                          </a>
                          , and all participants can earn points.
                        </li>
                      </ol>
                      <h3>
                        <strong>Introducing the Point System</strong>
                      </h3>
                      <p>
                        <strong>Adding the Arbitrum L3 to your wallet</strong>
                      </p>
                      <p>
                        RPC link:{' '}
                        <a href="https://rpc-nitro.0g.ai/">
                          https://rpc-nitro.0g.ai
                        </a>
                      </p>
                      <p>ChainID: 55213348826</p>
                      <p>Currency Symbol: A0GI</p>
                      <p>
                        <strong>Login and Identity Creation</strong>
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div030">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba51_mVZChi9PV6FAigDT6vsXm5Wjuyc.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        First, <strong>visit https://focg.0g.ai/</strong>
                      </p>
                      <p>
                        You can log in using either your crypto wallet or X, but
                        we strongly recommend that after logging in with either
                        method, you bind both to your account.
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div031">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba59_NFm1hjLBvdWuFQgEljORLEtUw4.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        <strong>Referral Code</strong>
                      </p>
                      <p>
                        Every time your referral code is used, you will earn 10
                        points, and another 5 points if you use a referral code
                        from someone else.
                      </p>
                      <p>
                        While accumulating points, you will get an opportunity
                        to refresh your referral code. However, the more your
                        referral codes are used, the more points you will earn
                        when your next code is used.
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div032">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba5f_Cvd05F1CH9MK84pwajwz8Fvt4PA.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        <strong>Daily Bonus</strong>
                      </p>
                      <p>
                        You can earn 10 points daily by checking in through the
                        Daily Bonus.
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div033">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fa23c440bb823eba6b_4vDbOLjFqjNtnJOmZc7dIdNUGM.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        <strong>Blade Games NFT</strong>
                      </p>
                      <p>
                        Click “Mint” to mint a Dune Factory Pioneer NFT. Note
                        that this will be on Arbitrum One Mainnet (which is
                        different from the network you’ll use to play onchain
                        games, you’ll get switched to the test network when
                        playing the games).
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div034">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fa23c440bb823eba6e_PC1N3UCCzwY3ymnHJbNYX0v0o.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        This NFT is only related to tasks and rewards associated
                        with Blade Games. Holding it may bring potential airdrops
                        from Blade Games, as well as additional points in some
                        Blade Games tasks.
                      </p>
                      <p>
                        To be able to mint, you have to complete any of the 5
                        tasks below In FOCG Summer.
                      </p>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div035">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba4e_SWmeIPGB1Sx0rGnkv5zquv0qYU.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <h3>
                        <strong>Game Guide (EN/CN): Dune Factory</strong>
                      </h3>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div036">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba5c_IRMItPuNDcp4lhSoAfo7kIg0y4.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        Dune Factory is an provable tower defense game powered
                        by ZKP, developed by{' '}
                        <a href="https://x.com/BladeGamesHQ">Blade Games</a>.
                      </p>
                      <p>
                        To better play Dune Factory, check out this{' '}
                        <a href="https://youtu.be/9W8o3XYQCYA">video guide</a>
                      </p>
                      <h3>
                        <strong>Game Guide (EN/CN) : Project Mirage</strong>
                      </h3>
                      <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div className="p06_div037">
                          <img
                            alt=""
                            src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f923c440bb823eba62_p0RxEryeoQzOxg9fe1uCqaq7Yrs.avif"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <p>
                        Project Mirage is an onchain island-building game,
                        developed by{' '}
                        <a href="https://x.com/mirage_game_">
                          DayDream Labs
                        </a>
                        .
                      </p>
                      <p>
                        To better play{' '}
                        <a href="https://www.projectmirage.xyz/">
                          Project Mirage
                        </a>
                        , check out this guide:
                      </p>
                      <p>
                        <a href="https://docs.google.com/document/d/1IyQOluOSx-DrfTYfYHp4Xk07mcNR896GdXkrcSS_N-Y/edit#heading=h.fmk3nzyw2vui">
                          https://docs.google.com/document/d/1IyQOluOSx-DrfTYfYHp4Xk07mcNR896GdXkrcSS_N-Y/edit#heading=h.fmk3nzyw2vui
                        </a>
                      </p>
                      <h3>
                        <strong>Game Guide (EN/CN) : Coinpups</strong>
                      </h3>
                      <p>
                        Coinpups is the first meme incentivized casual game on
                        telegram, where users can play earn memecoins and airdrop
                        rewards.
                      </p>
                      <p>Check out the game guide here:</p>
                      <p>
                        <a href="https://docs.google.com/document/d/1ZlR2RvGasB-u2arnjBR6ff3YBty5YAqzNMSqgtSDou4/edit#heading=h.187dysba96mq">
                          https://docs.google.com/document/d/1ZlR2RvGasB-u2arnjBR6ff3YBty5YAqzNMSqgtSDou4/edit#heading=h.187dysba96mq
                        </a>
                      </p>
                      <h3>
                        <strong>About FOCG Summer</strong>
                      </h3>
                      <p>
                        FOCG Summer is an on-chain game event co-hosted by{' '}
                        <a href="https://x.com/0G_labs">0G</a>,{' '}
                        <a href="https://x.com/BladeGamesHQ">Blade Games</a>, and{' '}
                        <a href="https://x.com/0xBlockBooster">Blockbooster</a>.
                      </p>
                      <p>
                        From Early July till August 2024, several highly
                        anticipated onchain gaming partners are invited to
                        deploy and open game testing on the 0G Testnet. Leading
                        players in the zkVM and rollup landscapes are there to
                        support our tech stacks and bring a better and
                        unprecedented gaming experience.
                      </p>
                      <p>
                        This is one of the best opportunities to join 0G Testnet,
                        experience fun and engaging on-chain games, witness the
                        practical application of high data availability in high
                        data use cases and explore the most cutting-edge
                        blockchain technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="p06_section_filter section_filter">
          <div className="p06_div038 blog_more-blog">
            <h5>Related news:</h5>
          </div>
        </section> */}

        {/* <div className="p06_div039 w-dyn-list">
          <div
            fs-cmsfilter-element="list"
            role="list"
            className="p06_div040 cms-grid_list w-dyn-items"
          >
            <div role="listitem" className="p06_div041 cms-grid_item w-dyn-item">
              <a
                href="/blog/0g-validators"
                className="p06_cms-grid_content-wrapper cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p06_div042 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png 1147w"
                    className="p06_cms-grid_image cms-grid_image"
                  />
                  <div className="p06_div043 spacer-medium hide-mobile-portrait"></div>
                  <div className="p06_div044 blog_contnet-wrapper">
                    <div className="p06_div045 blog_meta-wrapper">
                      <div className="p06_div046" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p06_div047 icon-embed-custom w-embed">
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
                      <div className="p06_div048">Sep 15, 2025</div>
                    </div>
                    <div className="p06_div049 spacer-xmedium"></div>
                    <h3 className="p06_heading-style-h5 heading-style-h5">
                      Announcing 0G’s World-class Validator Set
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p06_div050 cms-grid_item w-dyn-item">
              <a
                href="/blog/early-signals-0g-global-accelerator"
                className="p06_cms-grid_content-wrapper-2 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p06_div051 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif 1147w"
                    className="p06_cms-grid_image-2 cms-grid_image"
                  />
                  <div className="p06_div052 spacer-medium hide-mobile-portrait"></div>
                  <div className="p06_div053 blog_contnet-wrapper">
                    <div className="p06_div054 blog_meta-wrapper">
                      <div className="p06_div055" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p06_div056 icon-embed-custom w-embed">
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
                      <div className="p06_div057">Aug 14, 2025</div>
                    </div>
                    <div className="p06_div058 spacer-xmedium"></div>
                    <h3 className="p06_heading-style-h5-2 heading-style-h5">
                      Where Onchain AI is Headed: Early Signals from the 0G
                      Global Accelerator
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p06_div059 cms-grid_item w-dyn-item">
              <a
                href="/blog/builder-spotlight-gimo"
                className="p06_cms-grid_content-wrapper-3 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p06_div060 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif 1147w"
                    className="p06_cms-grid_image-3 cms-grid_image"
                  />
                  <div className="p06_div061 spacer-medium hide-mobile-portrait"></div>
                  <div className="p06_div062 blog_contnet-wrapper">
                    <div className="p06_div063 blog_meta-wrapper">
                      <div className="p06_div064" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p06_div065 icon-embed-custom w-embed">
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
                      <div className="p06_div066">Aug 13, 2025</div>
                    </div>
                    <div className="p06_div067 spacer-xmedium"></div>
                    <h3 className="p06_heading-style-h5-3 heading-style-h5">
                      0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid
                      Staking for the AI Economy
                    </h3>
                  </div>
                </div>
              </a>
            </div>

            <div role="listitem" className="p06_div068 cms-grid_item w-dyn-item">
              <a
                href="/blog/announcing-the-pond-and-0g-partnership"
                className="p06_cms-grid_content-wrapper-4 cms-grid_content-wrapper is-blog w-inline-block"
              >
                <div className="p06_div069 blog_content">
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270113a6fdaaadd5f1f5_GghwowvOpHAGN5weJoqongZYr54.avif"
                    loading="lazy"
                    alt=""
                    className="p06_cms-grid_image-4 cms-grid_image"
                  />
                  <div className="p06_div070 spacer-medium hide-mobile-portrait"></div>
                  <div className="p06_div071 blog_contnet-wrapper">
                    <div className="p06_div072 blog_meta-wrapper">
                      <div className="p06_div073" fs-list-field="category">
                        Partners
                      </div>
                      <div className="p06_div074 icon-embed-custom w-embed">
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
                      <div className="p06_div075">Apr 20, 2024</div>
                    </div>
                    <div className="p06_div076 spacer-xmedium"></div>
                    <h3 className="p06_heading-style-h5-4 heading-style-h5">
                      Announcing the Pond and 0G Partnership
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  )
}

