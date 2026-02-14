import React, { useState } from 'react'
import './News04.css'

export default function News04() {
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
    const text = encodeURIComponent('The Panda’s Call: 0G Art Contest')
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
    <div className="n04_container">
      <div className="n04_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n04_hide hide">
          <div className="n04_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n04_socialshare-title">
            The Panda’s Call: 0G Art Contest
          </div>
        </div>

        <main className="n04_main-wrapper main-wrapper">
          <section className="n04_section_hero section_hero n04_is-vertical is-vertical">
            <div className="n04_padding-global padding-global">
              <div className="n04_container-large container-large">
                <div className="n04_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n04_hero_bg-image hero_bg-image n04_w-condition-invisible w-condition-invisible"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851a949db367afdea5d64cb_Panda%27s%20Call%201_week%20(1).avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851a949db367afdea5d64cb_Panda%27s%20Call%201_week%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851a949db367afdea5d64cb_Panda%27s%20Call%201_week%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851a949db367afdea5d64cb_Panda%27s%20Call%201_week%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851a949db367afdea5d64cb_Panda%27s%20Call%201_week%20(1).avif 1920w"
                    className="n04_hero_bg-image hero_bg-image"
                  />
                  <div className="n04_hero_bg-gradient hero_bg-gradient n04_is-blog is-blog"></div>
                </div>

                <div className="n04_hero_content-component hero_content-component n04_is-vertical is-vertical">
                  <div className="n04_blog_meta-wrapper blog_meta-wrapper n04_is-white is-white">
                    <div className="n04_blog_meta-category">News</div>
                    <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                    <div className="n04_blog_meta-date">Jun 17, 2025</div>
                    <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                    <div className="n04_blog_meta-empty n04_w-dyn-bind-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="n04_spacer-small spacer-small"></div>

                  <div className="n04_max-width-large max-width-large n04_text-align-center text-align-center">
                    <h1 className="n04_heading-style-h3 heading-style-h3">
                      The Panda’s Call: 0G Art Contest
                    </h1>
                  </div>

                  <div className="n04_spacer-small spacer-small"></div>

                  <div className="n04_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n04_link-icon-light link-icon-light n04_is-static is-static n04_w-inline-block w-inline-block"
                    >
                      <div className="n04_icon-embed-xsmall icon-embed-xsmall n04_w-embed w-embed">
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
                      className="n04_link-icon-light link-icon-light n04_is-static is-static n04_w-inline-block w-inline-block"
                    >
                      <div className="n04_icon-embed-xsmall icon-embed-xsmall n04_w-embed w-embed">
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
                      className="n04_link-icon-light link-icon-light n04_is-static is-static n04_w-inline-block w-inline-block"
                    >
                      <div className="n04_icon-embed-xsmall icon-embed-xsmall n04_w-embed w-embed">
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

          <section className="n04_section_legal-content section_legal-content">
            <div className="n04_padding-global padding-global">
              <div className="n04_padding-section-medium padding-section-medium">
                <div className="n04_container-small container-small">
                  <div className="n04_legal-content_outer">
                    <div className="n04_legal-content_component legal-content_component">
                      <div className="n04_blog-rich-text blog-rich-text n04_w-richtext w-richtext">
                        <p>
                          2025 has been a massive year for 0G so far. As we push
                          toward mainnet, the community has become a global
                          movement, with 575k+ Discord members and 643k+ followers
                          on 0G Labs’ X – up 321k since the start of this year!
                        </p>
                        <p>
                          With the{' '}
                          <a href="https://0g.ai/blog/introducing-v3-testnet-galileo">
                            Galileo testnet
                          </a>{' '}
                          now live and a steady stream of dApp integrations, IRL
                          activations, and technical updates rolling out, 0G is
                          taking on a life of its own. Momentum like this
                          demands culture, not just code, so we’re opening the
                          floor to creative community members who can visualize
                          the mythos behind 0G’s beloved mascot.
                        </p>
                        <h2>Defy Gravity with the 0G Panda</h2>
                        <p>
                          The 0G Panda began as a wide-eyed cub, happily
                          tweaking toy models in a bamboo grove of closed-source
                          tools. At first, it was dazzled by the glossy labs
                          promising “AI for everyone”, but each step closer
                          revealed higher paywalls, black box models, and
                          half-measures disguised as progress. The grove felt
                          smaller by the day, until the Panda embraced the pull
                          of Zero Gravity.
                        </p>
                        <p>
                          No one knows how the Panda got admin access, but here
                          it is: drifting in perpetual zero gravity, pawing
                          through protocols, and peeking out from behind
                          mountains of user proposals. Gravity leads to
                          centralisation, and the 0G Panda refuses both.
                        </p>
                        <p>
                          Your mission is to bring the 0G Panda’s story to life
                          on canvas, screen, or storyboard.
                        </p>
                        <h2>
                          <strong>Contest Details</strong>
                        </h2>
                        <p>
                          This competition is open to still images
                          (illustrations, posters, concept art), animations and
                          video shorts, and comics or narrative panels – so feel
                          free to let your imagination run wild. Everything from
                          hand-drawn illustrations to AI-generated pieces are
                          welcome, and each participant can submit a max of three
                          entries.
                        </p>
                        <p>Some ideas to get your creative juices flowing:</p>
                        <ul role="list">
                          <li>
                            The Panda’s office: floating scrolls, grant
                            dashboards, weird snacks
                          </li>
                          <li>
                            The Panda’s home: a sanctuary of decentralized
                            dreams
                          </li>
                          <li>
                            The Panda’s daily tasks: reviewing dApps, debating
                            compute standards, petting a robot companion,
                            maintaining 0G Storage, hanging out with Galileo and
                            Newton, supporting Guild on 0G projects.
                          </li>
                          <li>
                            The Panda’s downtime: AI karaoke, memecoin farming,
                            low-orbit meditation, space exploration
                          </li>
                        </ul>
                        <p>
                          <strong>How to enter:</strong>
                        </p>
                        <ol role="list">
                          <li>
                            Follow <a href="https://x.com/0G_labs">@0G_Labs</a>{' '}
                            and{' '}
                            <a href="https://x.com/0g_foundation">
                              @0G_Foundation
                            </a>{' '}
                            on X
                          </li>
                          <li>Post your art on X and tag both accounts</li>
                          <li>
                            Drop the X link in the <strong>#panda-art</strong>{' '}
                            channel{' '}
                            <a href="https://discord.com/invite/0glabs">
                              in Discord
                            </a>
                          </li>
                          <li>
                            Add both links (X post + Discord message) to the{' '}
                            <a href="https://app.deform.cc/form/02b2aff1-131e-4279-9edb-3ab80e88317d/?page_number=0">
                              Megaphone form here
                            </a>{' '}
                            (also pinned in Discord)
                          </li>
                        </ol>
                        <p>
                          <strong>Contest Duration: </strong>June 17 - 23
                        </p>
                        <p>
                          <strong>Judging criteria:</strong> Quality, creativity,
                          and originality. Extra kudos for strong social
                          engagement.
                        </p>
                        <p>
                          <strong>Prizes:</strong> The top ten creators will
                          receive a custom 0G merch box and a coveted Creator
                          role on Discord.
                        </p>
                        <h2>Ready to Answer the Call?</h2>
                        <p>
                          When it comes to onchain AI development and utility,
                          the center of mass is shifting fast. And the panda
                          that started it all has something creative in mind for
                          the next jump.
                        </p>
                        <p>
                          Fire up your favourite design tool, ignore the laws of
                          physics, and show us what the Panda represents to you.
                          We will feature standout pieces across 0G’s socials
                          and future community events, and this is your chance
                          to leave a permanent mark on 0G lore.
                        </p>
                        <p>Entries are now open. The Panda is watching.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n04_section_filter section_filter">
            <div className="n04_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="n04_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n04_cms-grid_list cms-grid_list n04_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n04_cms-grid_item cms-grid_item n04_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n04_cms-grid_content-wrapper cms-grid_content-wrapper n04_is-blog is-blog n04_w-inline-block w-inline-block"
                >
                  <div className="n04_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n04_cms-grid_image cms-grid_image"
                    />
                    <div className="n04_spacer-medium spacer-medium n04_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n04_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n04_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n04_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                        <div className="n04_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n04_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n04_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n04_cms-grid_item cms-grid_item n04_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n04_cms-grid_content-wrapper cms-grid_content-wrapper n04_is-blog is-blog n04_w-inline-block w-inline-block"
                >
                  <div className="n04_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n04_cms-grid_image cms-grid_image"
                    />
                    <div className="n04_spacer-medium spacer-medium n04_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n04_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n04_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n04_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                        <div className="n04_blog_meta-date2">Sep 16, 2025</div>
                      </div>
                      <div className="n04_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n04_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n04_cms-grid_item cms-grid_item n04_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n04_cms-grid_content-wrapper cms-grid_content-wrapper n04_is-blog is-blog n04_w-inline-block w-inline-block"
                >
                  <div className="n04_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n04_cms-grid_image cms-grid_image"
                    />
                    <div className="n04_spacer-medium spacer-medium n04_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n04_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n04_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n04_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                        <div className="n04_blog_meta-date2">Jul 14, 2025</div>
                      </div>
                      <div className="n04_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n04_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n04_cms-grid_item cms-grid_item n04_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  aria-current="page"
                  className="n04_cms-grid_content-wrapper cms-grid_content-wrapper n04_is-blog is-blog n04_w-inline-block w-inline-block n04_w--current w--current"
                >
                  <div className="n04_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n04_cms-grid_image cms-grid_image"
                    />
                    <div className="n04_spacer-medium spacer-medium n04_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n04_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n04_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n04_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n04_icon-embed-custom icon-embed-custom n04_w-embed w-embed">
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
                        <div className="n04_blog_meta-date2">Jun 17, 2025</div>
                      </div>
                      <div className="n04_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n04_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n04_copy-toast ${showToast ? 'n04_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
