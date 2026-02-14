import React, { useState } from 'react'
import './News02.css'

export default function News02() {
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
    const text = encodeURIComponent('Explaining the 0G Token Airdrop')
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
    <div className="n02_container">
      <div className="n02_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n02_hide hide">
          <div className="n02_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n02_socialshare-title">
            Explaining the 0G Token Airdrop
          </div>
        </div>

        <main className="n02_main-wrapper main-wrapper">
          <section className="n02_section_hero section_hero n02_is-vertical is-vertical">
            <div className="n02_padding-global padding-global">
              <div className="n02_container-large container-large">
                <div className="n02_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n02_hero_bg-image hero_bg-image n02_w-condition-invisible w-condition-invisible"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                    className="n02_hero_bg-image hero_bg-image"
                  />
                  <div className="n02_hero_bg-gradient hero_bg-gradient n02_is-blog is-blog"></div>
                </div>

                <div className="n02_hero_content-component hero_content-component n02_is-vertical is-vertical">
                  <div className="n02_blog_meta-wrapper blog_meta-wrapper n02_is-white is-white">
                    <div className="n02_blog_meta-category">News</div>
                    <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                    <div className="n02_blog_meta-date">Sep 16, 2025</div>
                    <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                    <div className="n02_blog_meta-empty n02_w-dyn-bind-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="n02_spacer-small spacer-small"></div>

                  <div className="n02_max-width-large max-width-large n02_text-align-center text-align-center">
                    <h1 className="n02_heading-style-h3 heading-style-h3">
                      Explaining the 0G Token Airdrop
                    </h1>
                  </div>

                  <div className="n02_spacer-small spacer-small"></div>

                  <div className="n02_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="n02_link-icon-light link-icon-light n02_is-static is-static n02_w-inline-block w-inline-block"
                    >
                      <div className="n02_icon-embed-xsmall icon-embed-xsmall n02_w-embed w-embed">
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
                      className="n02_link-icon-light link-icon-light n02_is-static is-static n02_w-inline-block w-inline-block"
                    >
                      <div className="n02_icon-embed-xsmall icon-embed-xsmall n02_w-embed w-embed">
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
                      className="n02_link-icon-light link-icon-light n02_is-static is-static n02_w-inline-block w-inline-block"
                    >
                      <div className="n02_icon-embed-xsmall icon-embed-xsmall n02_w-embed w-embed">
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

          <section className="n02_section_legal-content section_legal-content">
            <div className="n02_padding-global padding-global">
              <div className="n02_padding-section-medium padding-section-medium">
                <div className="n02_container-small container-small">
                  <div className="n02_legal-content_outer">
                    <div className="n02_legal-content_component legal-content_component">
                      <div className="n02_blog-rich-text blog-rich-text n02_w-richtext w-richtext">
                        <p>
                          Since our inception, the 0G Foundation has been on a
                          mission to build the largest Layer 1 for AI, creating
                          a decentralized AI Operating System with unmatched
                          performance. Over the past two years, we have been
                          building this ambitious vision alongside a dedicated
                          community of pioneers who have been with us from day
                          one. This community is the bedrock of our project, and
                          we are excited to announce our airdrop to thank and
                          reward the real members who have actively contributed
                          to our growth.
                        </p>
                        <p>
                          That’s why we are thrilled to announce the details of
                          0G’s token airdrop — a once-in-a-lifetime event for any
                          onchain project, and something the 0G team has designed
                          specifically to reward genuine contributors and
                          long-term supporters of what we are co-creating.
                        </p>
                        <p>Let’s dive in.</p>
                        <h2>
                          ‍<strong>Rewarding Our Active Contributors</strong>
                        </h2>
                        <p>
                          0G’s TGE and mainnet launch have been eagerly
                          anticipated for over a year. This loyalty and trust
                          have not gone unnoticed, and while the 0G team has
                          shipped countless updates and onboarded hundreds of
                          partners and validators in recent months, we chose to
                          hold off on 0G’s TGE until everything was in the right
                          place.
                        </p>
                        <p>
                          That moment is now. This airdrop is more than just a
                          token distribution; it is a central feature of our
                          ecosystem that allows us to decentralize the network
                          and empower our most valued supporters. In short, this
                          airdrop is our way of celebrating our journey together
                          and signaling our commitment to the individuals who
                          have helped us reach this milestone.
                        </p>
                        <p>
                          0G’s TGE rewards will be allocated based on
                          participation in various community initiatives:
                        </p>
                        <h3>
                          <strong>The 0G Discord Community</strong>
                        </h3>
                        <p>
                          Long-time supporters who hold specific Discord roles
                          will be granted exclusive rewards, in recognition of
                          their consistent community contributions and
                          engagement.
                        </p>
                        <p>
                          And these rewards are just the start. We plan to
                          continue rewarding our active community members who
                          hold these exclusive Discord roles, while presenting
                          fresh onramps for newer members who have what it takes
                          to shape the future of decentralized intelligence with
                          0G.
                        </p>
                        <p>Eligible 0G Discord roles include:</p>
                        <ul role="list">
                          <li>Galactic Guardian</li>
                          <li>Galactic Mechanics</li>
                          <li>Navigator</li>
                          <li>0Gurus</li>
                          <li>Ambassadors Cohort 1</li>
                          <li>Ambassadors Cohort 2</li>
                          <li>Creators</li>
                          <li>Threadoors</li>
                          <li>Pioneer</li>
                          <li>Triumphant</li>
                          <li>Memeoors</li>
                        </ul>
                        <h3>
                          <strong>Social and Quest-based Contributions</strong>
                        </h3>
                        <p>
                          We are also rewarding members who have participated in
                          key social campaigns and quests designed to grow our
                          ecosystem.
                        </p>
                        <p>This includes contributions through:</p>
                        <ul role="list">
                          <li>Galxe quests</li>
                          <li>Intract</li>
                          <li>Social tasks</li>
                        </ul>
                        <p>
                          Like every aspect of 0G’s TGE rewards system, these
                          rewards are designed to recognise the genuine,
                          long-term contributions of our community members. We
                          have taken significant steps to ensure these rewards
                          go to those who truly deserve them, including
                          implementing strict{' '}
                          <strong> </strong>anti-sybil and anti-farmer
                          mechanisms.
                        </p>
                        <p>
                          Beyond automated community quality checks, we&#x27;ve
                          dedicated a considerable amount of time and team
                          resources to manually sift through data to filter out
                          fraudulent accounts. We have also partnered with
                          third-party companies to help us identify and exclude
                          sybil and farmer accounts. The end result was
                          predictable: massive amounts of botted sybil accounts,
                          which we have since blacklisted so that 0G’s tokens
                          reach our most loyal community members.
                        </p>
                        <h3>
                          <strong>Kaito Yappers and Kaito Ecosystem</strong>
                        </h3>
                        <p>
                          At 0G, we believe that information is the lifeblood of
                          decentralized intelligence — and communities,
                          contributors like our Kaito Yappers show how powerful
                          aligned voices can be in shaping that future.
                        </p>
                        <p>
                          That’s why we’ve expanded the scope of Yapper rewards
                          to not only retroactively recognize the contributions
                          of those active over the past six months (
                          <strong>
                            <em>
                              snapshot: 25th Feb, 00:00 AM UTC+0 - 25th Aug,
                              11:59 PM UTC+0 August 25
                            </em>
                          </strong>
                          ), but also to include members captured across three
                          interim snapshots for the 0GYapper Role. Together,
                          they represent the collective voice of 0G.
                        </p>
                        <p>
                          For the Yap To Defy Gravity campaign (
                          <strong>
                            <em>26th Aug UTC+0 to 5th September 23:59 UTC+0</em>
                          </strong>
                          ), we’ve increased the number of eligible Yappers from
                          888 to 1,000 community voices, resulting in more than
                          2,000 contributors being eligible for the 0G Yapper
                          Rewards at TGE. This is only the beginning: we are
                          continually building new InfoFi mechanisms designed
                          to reward active knowledge sharing and create a
                          sustainable economy centred on information itself.
                        </p>
                        <p>
                          Finally, we’ve extended rewards to the broader Kaito
                          ecosystem in appreciation of its long-term support for
                          the 0G ecosystem.
                        </p>
                        <p>
                          The message is simple: in the era of DeAI, information
                          isn’t just power — it’s value. And those who
                          contribute to its circulation are building the
                          foundation for the next internet of intelligence.
                        </p>
                        <h3>
                          <strong>One Gravity NFT Holders</strong>
                        </h3>
                        <p>
                          One Gravity marked the first NFT collection created
                          for the DeAI ecosystem and a defining milestone for
                          0G’s community. With only 1,888 NFTs minted,{' '}
                          <strong>
                            One Gravity represents the earliest believers who
                            chose to Defy Gravity alongside us
                          </strong>
                          .
                        </p>
                        <p>
                          <strong>
                            NFT holders will receive allocations displayed in
                            the airdrop portal, with portion claimable at TGE
                            and the rest distributed progressively through
                            random snapshots.
                          </strong>{' '}
                          The first snapshot was already taken on September 1 at
                          00:00 UTC+0.
                        </p>
                        <p>
                          Alongside the airdrop, One Gravity holders will be the
                          first to mint iNFTs on AIverse, turning their NFTs
                          into onchain intelligent agents from Day 1 of mainnet.
                          This early access transforms One Gravity from a
                          symbol of belief into a living part of 0G’s tokenized
                          intelligence economy.
                        </p>
                        <p>
                          The One Gravity collection will continue to unlock
                          utility beyond TGE. Holders can expect protocol-level
                          rewards, access to ecosystem initiatives, and
                          potential future airdrops from leading 0G dApps from
                          JAINE, Zerrow, Gimo Finance, and beyond. In short,{' '}
                          <strong>
                            this is both a reward for conviction and a
                            foundation for long-term participation in 0G’s
                            decentralized AI culture.
                          </strong>
                        </p>
                        <p>
                          It’s been said before, but it’s worth saying again —
                          this airdrop is a testament to our core philosophy:
                          building a truly decentralized network by putting the
                          power in the hands of the people who believe in our
                          mission.
                        </p>
                        <p>Thank you for being a part of the 0G journey.</p>
                        <p>
                          <strong>
                            More information about how we intend to recognize
                            Testnet participants will be made available in the
                            coming weeks. This airdrop is just the tip of the
                            iceberg, with more incentives planned for mainnet
                            activity.
                          </strong>
                        </p>
                        <p>
                          <strong>
                            <em>
                              *Remember, do not undertake KYC if you are not
                              eligible.
                              <br />
                              <br />
                            </em>
                            Register for the airdrop here:{' '}
                          </strong>
                          <a href="https://airdrop.0gfoundation.ai">
                            <strong>https://airdrop.0gfoundation.ai</strong>
                          </a>
                        </p>
                        <p>‍</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="n02_section_filter section_filter">
            <div className="n02_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section> */}

          {/* <div className="n02_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n02_cms-grid_list cms-grid_list n02_w-dyn-items w-dyn-items"
            >
              <div role="listitem" className="n02_cms-grid_item cms-grid_item n02_w-dyn-item w-dyn-item">
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n02_cms-grid_content-wrapper cms-grid_content-wrapper n02_is-blog is-blog n02_w-inline-block w-inline-block"
                >
                  <div className="n02_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n02_cms-grid_image cms-grid_image"
                    />
                    <div className="n02_spacer-medium spacer-medium n02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n02_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n02_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n02_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                        <div className="n02_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n02_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n02_cms-grid_item cms-grid_item n02_w-dyn-item w-dyn-item">
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  aria-current="page"
                  className="n02_cms-grid_content-wrapper cms-grid_content-wrapper n02_is-blog is-blog n02_w-inline-block w-inline-block n02_w--current w--current"
                >
                  <div className="n02_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n02_cms-grid_image cms-grid_image"
                    />
                    <div className="n02_spacer-medium spacer-medium n02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n02_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n02_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n02_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                        <div className="n02_blog_meta-date2">Sep 16, 2025</div>
                      </div>
                      <div className="n02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n02_heading-style-h5 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n02_cms-grid_item cms-grid_item n02_w-dyn-item w-dyn-item">
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n02_cms-grid_content-wrapper cms-grid_content-wrapper n02_is-blog is-blog n02_w-inline-block w-inline-block"
                >
                  <div className="n02_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n02_cms-grid_image cms-grid_image"
                    />
                    <div className="n02_spacer-medium spacer-medium n02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n02_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n02_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n02_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                        <div className="n02_blog_meta-date2">Jul 14, 2025</div>
                      </div>
                      <div className="n02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n02_heading-style-h5 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="n02_cms-grid_item cms-grid_item n02_w-dyn-item w-dyn-item">
                <a
                  href="/blog/0g-art-contest"
                  className="n02_cms-grid_content-wrapper cms-grid_content-wrapper n02_is-blog is-blog n02_w-inline-block w-inline-block"
                >
                  <div className="n02_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n02_cms-grid_image cms-grid_image"
                    />
                    <div className="n02_spacer-medium spacer-medium n02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n02_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n02_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n02_blog_meta-category2" fs-list-field="category">
                          News
                        </div>
                        <div className="n02_icon-embed-custom icon-embed-custom n02_w-embed w-embed">
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
                        <div className="n02_blog_meta-date2">Jun 17, 2025</div>
                      </div>
                      <div className="n02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n02_heading-style-h5 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`n02_copy-toast ${showToast ? 'n02_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
