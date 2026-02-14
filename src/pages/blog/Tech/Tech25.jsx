import React, { useEffect, useState } from 'react'
import './Tech25.css'

export default function Tech25() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t25-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t25-webflow', 'true')
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
      'Check out this insightful blog post: Clarifying 0G’s Token Allocation & Our Commitment to the Community'
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
    <div className="t25_container">
      <div className="t25_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t25_div002 hide">
          <div className="t25_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t25_div004">
            Clarifying 0G’s Token Allocation &amp; Our Commitment to the Community
          </div>
        </div>

        <main className="t25_main-wrapper main-wrapper">
          <section className="t25_section_hero section_hero is-vertical">
            <div className="t25_div005 padding-global">
              <div className="t25_div006 container-large">
                <div className="t25_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t25_div007 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t25_div008 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t25_div009 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t25_div010 hero_content-component is-vertical">
                  <div className="t25_div011 blog_meta-wrapper is-white">
                    <div className="t25_div012">Tech</div>
                    <div className="t25_div013 icon-embed-custom w-embed">
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
                    <div className="t25_div014">Mar 13, 2025</div>
                    <div className="t25_div015 icon-embed-custom w-embed">
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
                    <div className="t25_div016">0g</div>
                  </div>

                  <div className="t25_div017 spacer-small"></div>

                  <div className="t25_div018 max-width-large text-align-center">
                    <h1 className="t25_heading heading-style-h3">
                      Clarifying 0G’s Token Allocation &amp; Our Commitment to the Community
                    </h1>
                  </div>

                  <div className="t25_div019 spacer-small"></div>

                  <div className="t25_div020 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t25_div021 link-icon-light is-static w-inline-block"
                    >
                      <div className="t25_div022 icon-embed-xsmall w-embed">
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
                      className="t25_div023 link-icon-light is-static w-inline-block"
                    >
                      <div className="t25_div024 icon-embed-xsmall w-embed">
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
                      className="t25_div025 link-icon-light is-static w-inline-block"
                    >
                      <div className="t25_div026 icon-embed-xsmall w-embed">
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

          <section className="t25_section_legal-content section_legal-content">
            <div className="t25_div027 padding-global">
              <div className="t25_div028 padding-section-medium">
                <div className="t25_div029 container-small">
                  <div className="t25_div030">
                    <div className="t25_div031 legal-content_component">
                      <div className="t25_div032 blog-rich-text w-richtext">
                        <p>
                          <br />
                        </p>
                        <h1>
                          <strong>
                            Clarifying 0G’s Token Allocation &amp; Our Commitment to the
                            Community
                          </strong>
                        </h1>
                        <p>
                          Earlier today, we unveiled a preliminary version of our token
                          allocation plan. We appreciate your swift and clear feedback –
                          the 0G community’s perspective is essential to us. <br />
                          <br />
                          Our goal has always been to build for the long term while
                          uplifting those who actively support our ecosystem.{' '}
                          <strong>
                            We’re committed to proliferating decentralized AI as a public
                            good for decades to come through our technology, ecosystem,
                            and community.
                          </strong>
                        </p>
                        <p>
                          We understand that there may have been some lack of clarity
                          regarding ecosystem allocation and community rewards. Our
                          approach to token allocation is designed with sustainable and
                          strategic growth in mind. Ecosystem allocation plays a crucial
                          role in ensuring long-term development, partnerships, and the
                          continued expansion of 0G, all of which directly benefit the
                          community. At the same time, we remain deeply committed to
                          rewarding and empowering our most engaged supporters.
                        </p>
                        <p>
                          Taking your concerns to heart, we have refined our token
                          allocation plan to better reflect our shared vision. Here are
                          the key updates:
                        </p>
                        <h2>
                          <strong>Community Rewards - We are here for the long-term</strong>
                        </h2>
                        <figure className="t25_div033 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t25_div034">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed61e4643aad24f666_Rp5p5BR2ri9mlIrF8vpUoz6EtHY.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          To foster a thriving ecosystem, we will support not just
                          projects built on 0G technology but also the community that
                          has rallied around us. Thus, we want to clarify the distinction
                          between Ecosystem Growth and Community Rewards:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Community Rewards</strong> are dedicated to
                            recognizing and incentivizing those who actively contribute
                            to the 0G ecosystem. This may include but not limited to
                            participation in social campaigns, staking, running 0G nodes
                            (storage, DA, etc), engagement in past and future
                            testnet/mainnet activities, owning our genesis NFT collection
                            and grassroots community-driven initiatives and active
                            participation on Discord.
                          </li>
                        </ul>
                        <ul role="list">
                          <li>
                            <strong>Ecosystem Growth</strong>, on the other hand, is
                            focused on the long-term expansion of 0G’s network. This
                            includes grants and investments for builders and their
                            communities, fundamental AI research, infrastructure R&amp;D,
                            liquidity, and marketing to further drive ecosystem expansion.
                          </li>
                        </ul>
                        <p>
                          Both categories play crucial roles. Community Rewards strengthen
                          engagement, while Ecosystem Growth fuels innovation and
                          adoption. Our goal is to ensure that 0G thrives by supporting
                          both individual contributors and the broader infrastructure
                          that will sustain it for <strong>the long run.</strong>
                        </p>
                        <h2>
                          <strong>Community Rewards - A long-term vision</strong>
                        </h2>
                        <figure className="t25_div035 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t25_div036">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed61e4643aad24f663_PPNENrheMR8S1kQtUTukYNWrDq4.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          We are building for the long haul and want our community to
                          feel valued for their continuous commitment. That is why we
                          are distributing a percentage of the Community Rewards at TGE
                          with an additional rollout over 48 months for long-time
                          supporters and new contributors. This approach allows us to
                          celebrate ongoing contributions, foster long-term engagement,
                          and grow together as 0G evolves.
                        </p>
                        <p>
                          Regarding the team allocation, we have revised the language to
                          clearly stipulate the extent to which it will be distributed,
                          including team members, early contributors, and advisors. 0G is
                          building technology at the forefront of the AI and Web3
                          landscape; this requires extensive research into new ways to
                          build and apply artificial intelligence in the real world and
                          attract the next billion users to Web3. We’re committed to
                          fostering this research through various channels aided by token
                          allocation.
                        </p>
                        <h2>
                          <strong>Our Commitment to the 0G Community</strong>
                        </h2>
                        <p>
                          At 0G, we are steadfast in our mission to advance AI as a
                          public good—as demonstrated by our $88.88M ecosystem growth
                          program, Guild on 0G, our accelerator program, and more. The 0G
                          token is one of the many ways we are realizing this vision.
                        </p>
                        <p>
                          We’d like to reiterate our appreciation for the 0G community –
                          from AI Alignment Node holders to our Discord members, event
                          attendees, social followers, and silent supporters who believe
                          in our vision.
                        </p>
                        <p>
                          <strong>
                            0G is building the ultimate hub for on-chain AI. Building in
                            the AI landscape with a long-term vision requires deliberate
                            thinking to deal with the ever-changing nature of the AI
                            industry. We are confident that this plan complements our
                            long-term vision.
                          </strong>
                        </p>
                        <p>
                          Thank you for your commitment to 0G. We’re here to build,
                          together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t25_section_filter section_filter">
            <div className="t25_div037 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t25_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t25_div038 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t25_div039 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t25_div040 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t25_div041 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t25_div042 cms-grid_image"
                    />
                    <div className="t25_div043 spacer-medium hide-mobile-portrait"></div>
                    <div className="t25_div044 blog_contnet-wrapper">
                      <div className="t25_div045 blog_meta-wrapper">
                        <div className="t25_div046">Tech</div>
                        <div className="t25_div047 icon-embed-custom w-embed">
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
                        <div className="t25_div048">Sep 5, 2024</div>
                      </div>
                      <div className="t25_div049 spacer-xmedium"></div>
                      <h3 className="t25_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t25_div050 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t25_div051 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t25_div052 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t25_div053 cms-grid_image"
                    />
                    <div className="t25_div054 spacer-medium hide-mobile-portrait"></div>
                    <div className="t25_div055 blog_contnet-wrapper">
                      <div className="t25_div056 blog_meta-wrapper">
                        <div className="t25_div057">Tech</div>
                        <div className="t25_div058 icon-embed-custom w-embed">
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
                        <div className="t25_div059">Aug 25, 2025</div>
                      </div>
                      <div className="t25_div060 spacer-xmedium"></div>
                      <h3 className="t25_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1,
                        Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t25_div061 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t25_div062 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t25_div063 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t25_div064 cms-grid_image"
                    />
                    <div className="t25_div065 spacer-medium hide-mobile-portrait"></div>
                    <div className="t25_div066 blog_contnet-wrapper">
                      <div className="t25_div067 blog_meta-wrapper">
                        <div className="t25_div068">Tech</div>
                        <div className="t25_div069 icon-embed-custom w-embed">
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
                        <div className="t25_div070">Aug 7, 2025</div>
                      </div>
                      <div className="t25_div071 spacer-xmedium"></div>
                      <h3 className="t25_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed
                        100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t25_div072 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t25_div073 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t25_div074 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t25_div075 cms-grid_image"
                    />
                    <div className="t25_div076 spacer-medium hide-mobile-portrait"></div>
                    <div className="t25_div077 blog_contnet-wrapper">
                      <div className="t25_div078 blog_meta-wrapper">
                        <div className="t25_div079">Tech</div>
                        <div className="t25_div080 icon-embed-custom w-embed">
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
                        <div className="t25_div081">Jul 3, 2025</div>
                      </div>
                      <div className="t25_div082 spacer-xmedium"></div>
                      <h3 className="t25_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t25_copy-toast ${showToast ? 't25_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

