import React, { useState } from 'react'
import './News01.css'

export default function News01() {
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
      'AI Alignment Node Rewards: Distribution Schedule & Eligibility'
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
    <div className="n01_container">
      <div className="n01_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n01_hide hide">
          <div className="n01_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n01_socialshare-title">
            AI Alignment Node Rewards: Distribution Schedule &amp; Eligibility
          </div>
        </div>

        <main className="n01_main-wrapper main-wrapper">
          <section className="n01_section_hero section_hero n01_is-vertical is-vertical">
            <div className="n01_padding-global padding-global">
              <div className="n01_container-large container-large">
                <div className="n01_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n01_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n01_hero_bg-image hero_bg-image n01_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n01_hero_bg-gradient hero_bg-gradient n01_is-blog is-blog"></div>
                </div>

                <div className="n01_hero_content-component hero_content-component n01_is-vertical is-vertical">
                  <div className="n01_blog_meta-wrapper blog_meta-wrapper n01_is-white is-white">
                    <div className="n01_blog_meta-category">News</div>
                    <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                    <div className="n01_blog_meta-date">Sep 21, 2025</div>
                    <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                    <div className="n01_blog_meta-empty"></div>
                  </div>

                  <div className="n01_spacer-small spacer-small"></div>

                  <div className="n01_max-width-large max-width-large n01_text-align-center text-align-center">
                    <h1 className="n01_heading-style-h3 heading-style-h3">
                      AI Alignment Node Rewards: Distribution Schedule &amp;
                      Eligibility
                    </h1>
                  </div>

                  <div className="n01_spacer-small spacer-small"></div>

                  <div className="n01_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="n01_link-icon-light link-icon-light n01_is-static is-static n01_w-inline-block w-inline-block"
                    >
                      <div className="n01_icon-embed-xsmall icon-embed-xsmall n01_w-embed w-embed">
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
                      className="n01_link-icon-light link-icon-light n01_is-static is-static n01_w-inline-block w-inline-block"
                    >
                      <div className="n01_icon-embed-xsmall icon-embed-xsmall n01_w-embed w-embed">
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
                      className="n01_link-icon-light link-icon-light n01_is-static is-static n01_w-inline-block w-inline-block"
                    >
                      <div className="n01_icon-embed-xsmall icon-embed-xsmall n01_w-embed w-embed">
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

          <section className="n01_section_legal-content section_legal-content">
            <div className="n01_padding-global padding-global">
              <div className="n01_padding-section-medium padding-section-medium">
                <div className="n01_container-small container-small">
                  <div className="n01_legal-content_outer">
                    <div className="n01_legal-content_component legal-content_component">
                      <div className="n01_blog-rich-text blog-rich-text n01_w-richtext w-richtext">
                        <p>
                          The launch of 0G’s Mainnet marks the start of reward
                          distribution for AI Alignment Nodes.
                          <br />
                          This rewards program is designed to recognize the
                          earliest community members who are actively
                          safeguarding 0G’s AI-verified infrastructure.
                        </p>
                        <p>
                          If you are a node owner or operator, here’s everything
                          you need to know about your rewards, maximize their
                          value, and take part in building the future of
                          decentralized AI.
                        </p>
                        <h1>Total AI Alignment Node Rewards</h1>
                        <p>
                          0G’s AI Alignment Node sale was a successful event for
                          its ecosystem growth. There were a total of 175,500
                          node licenses, with 15% of the total 0G token supply
                          allocated to AI Alignment Node rewards. This means
                          150 million $0G tokens are allocated to AI Alignment
                          Node holders.
                        </p>
                        <p>
                          This translates to a minimum of 854.7 $0G tokens per
                          node license over the course of the program. On top of
                          those rewards, there will be{' '}
                          <a href="https://0g.ai/blog/ai-alignment-node-rewards-extra-allocations-via-token-redistributions">
                            additional rewards redistributed to node runners
                            from unsold nodes
                          </a>
                          .
                        </p>
                        <p>
                          In order to claim your AI Alignment Node rewards,
                          please{' '}
                          <a href="https://claim.0gfoundation.ai/kyc">
                            be sure to KYC
                          </a>{' '}
                          if you haven’t already done so.
                        </p>
                        <figure className="n01_w-richtext-align-center w-richtext-align-center n01_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n01_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cff0f151b8d50f578232fe_0ebc0195.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h1>Token Distribution Schedule</h1>
                        <p>
                          The 854.7 $0G tokens in AI Alignment Node rewards can
                          be claimed in two main parts, each with its own
                          mechanics and eligibility requirements.
                        </p>
                        <h2>
                          <strong>
                            Part 1: Initial Unlock and Milestone Vesting (33%
                            of rewards)
                          </strong>
                        </h2>
                        <p>
                          Part 1 rewards are exclusive to node owners. You
                          don’t need to run your node to access these tokens,
                          but when and how you claim will determine how much
                          you receive. As voted by the 0G Discord community in
                          November 2024, the vesting schedule will be as
                          follows:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>
                              Part 1: Total initial allocation per node (33%):
                            </strong>{' '}
                            282.05 $0G tokens <br />
                            <ul role="list">
                              <li>
                                <strong>
                                  Part 1A: Initial penalty-free unlock (10%):
                                </strong>{' '}
                                85.47 $0G tokens are claimable immediately at
                                TGE without any early withdrawal fee.
                              </li>
                              <li>
                                <strong>Part 1B: Milestone vesting (23%):</strong>{' '}
                                The longer you wait, the more tokens you can
                                unlock. Penalties reduce step by step until
                                they disappear entirely after one year. Here’s
                                how the schedule works:
                                <br />
                                <ul role="list">
                                  <li>
                                    <strong>TGE day</strong>: Claim 78.63 $0G
                                    tokens from this portion (60% early
                                    withdrawal fee)
                                  </li>
                                  <li>
                                    <strong>After 90 days</strong>: Claim 98.29
                                    $0G tokens (50% early withdrawal fee)
                                  </li>
                                  <li>
                                    <strong>After 180 days</strong>: Claim
                                    127.78 $0G tokens (35% early withdrawal
                                    fee)
                                  </li>
                                  <li>
                                    <strong>After 270 days</strong>: Claim
                                    157.26 $0G tokens (20% early witdrawal fee)
                                  </li>
                                  <li>
                                    <strong>After 365 days</strong>: Claim
                                    196.58 $0G tokens (0% early withdrawal fee)
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p>
                          <strong>
                            Combined with the initial unlock, this means the
                            maximum a node owner can claim on TGE is 164.10{' '}
                          </strong>
                          $0G tokens<strong> (85.47 + 78.63). </strong>Owners
                          who wait to claim their rewards will see higher
                          long-term rewards, while those who need immediate
                          liquidity can still claim earlier but are subject to
                          early withdrawal fees as mentioned above.
                        </p>
                        <figure className="n01_w-richtext-align-center w-richtext-align-center n01_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="n01_rich-figure-inner">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68d0fa00cf3842139f2c2e26_Claim%20Unlocked.png"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Part 2: Ongoing Rewards (67% of rewards)</strong>
                        </h3>
                        <p>
                          Both node owners and operators are eligible for
                          ongoing rewards from 0G’s token distribution schedule.
                          To qualify for these rewards, your node must be
                          running actively.&nbsp;
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Total remaining allocation per node:</strong>{' '}
                            minimum 572.65 $0G tokens
                          </li>
                          <li>
                            <strong>Vesting:</strong> Linear distribution over
                            36 months (averaging ~0.52 $0G tokens per day)
                          </li>
                        </ul>
                        <p>
                          Owners who delegate to Node-as-a-Service (NaaS)
                          providers will share rewards based on agreed terms.
                          Some node service providers may charge a commission,
                          while others may offer fixed-fee services. With the
                          option to use node service providers to operate nodes,
                          anyone, both technical and non-technical, can benefit
                          from the rewards program.
                        </p>
                        <p>
                          It’s important to note that active participation is
                          essential in order to receive your full rewards. If a
                          node is offline or non-compliant, rewards are reduced.
                          This ensures that the network remains healthy and
                          secure while providing steady and fair returns to our
                          community.
                        </p>
                        <h1>Your Node Rewards, Your Strategy</h1>
                        <p>
                          0G’s multi-layered AI Alignment Node reward system
                          ensures that AI Alignment Node owners receive
                          immediate rewards upon TGE, while providing ongoing
                          earning opportunities for node owners and operators
                          who continue to contribute to the stability of 0G. On
                          top of that, node owners are eligible to receive a
                          portion of the ~37 million tokens{' '}
                          <a href="https://0g.ai/blog/ai-alignment-node-rewards-extra-allocations-via-token-redistributions">
                            redistributed from unsold node licenses
                          </a>
                          .
                        </p>
                        <p>
                          Whether you choose to claim early, wait for
                          milestones, or stake for{' '}
                          <a href="https://0g.ai/blog/ai-alignment-node-rewards-extra-allocations-via-token-redistributions">
                            additional redistribution
                          </a>
                          , the system is designed to reward patience,
                          participation, and alignment with 0G’s long-term
                          vision for decentralized AI.
                        </p>
                        <p>
                          Complete{' '}
                          <a href="https://claim.0gfoundation.ai/kyc">KYC</a> if
                          you haven’t already, and log in to the{' '}
                          <a href="https://claim.0gfoundation.ai/">
                            AI Alignment Node Portal
                          </a>{' '}
                          to view and claim your rewards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="n01_section_filter section_filter">
            <div className="n01_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section> */}

          {/* <div className="n01_w-dyn-list w-dyn-list">
            <div className="n01_cms-grid_list cms-grid_list n01_w-dyn-items w-dyn-items" role="list">
              <div className="n01_cms-grid_item cms-grid_item n01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  aria-current="page"
                  className="n01_cms-grid_content-wrapper cms-grid_content-wrapper n01_is-blog is-blog n01_w-inline-block w-inline-block n01_w--current w--current"
                >
                  <div className="n01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n01_cms-grid_image cms-grid_image"
                    />
                    <div className="n01_spacer-medium spacer-medium n01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div fs-list-field="category">News</div>
                        <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                        <div>Sep 21, 2025</div>
                      </div>
                      <div className="n01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n01_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp; Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="n01_cms-grid_item cms-grid_item n01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n01_cms-grid_content-wrapper cms-grid_content-wrapper n01_is-blog is-blog n01_w-inline-block w-inline-block"
                >
                  <div className="n01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n01_cms-grid_image cms-grid_image"
                    />
                    <div className="n01_spacer-medium spacer-medium n01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div fs-list-field="category">News</div>
                        <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                        <div>Sep 16, 2025</div>
                      </div>
                      <div className="n01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n01_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="n01_cms-grid_item cms-grid_item n01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n01_cms-grid_content-wrapper cms-grid_content-wrapper n01_is-blog is-blog n01_w-inline-block w-inline-block"
                >
                  <div className="n01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n01_cms-grid_image cms-grid_image"
                    />
                    <div className="n01_spacer-medium spacer-medium n01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div fs-list-field="category">News</div>
                        <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                        <div>Jul 14, 2025</div>
                      </div>
                      <div className="n01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n01_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="n01_cms-grid_item cms-grid_item n01_w-dyn-item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-art-contest"
                  className="n01_cms-grid_content-wrapper cms-grid_content-wrapper n01_is-blog is-blog n01_w-inline-block w-inline-block"
                >
                  <div className="n01_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n01_cms-grid_image cms-grid_image"
                    />
                    <div className="n01_spacer-medium spacer-medium n01_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n01_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n01_blog_meta-wrapper2 blog_meta-wrapper">
                        <div fs-list-field="category">News</div>
                        <div className="n01_icon-embed-custom icon-embed-custom n01_w-embed w-embed">
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
                        <div>Jun 17, 2025</div>
                      </div>
                      <div className="n01_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n01_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`n01_copy-toast ${showToast ? 'n01_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

