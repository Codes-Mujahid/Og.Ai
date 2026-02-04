import React, { useState } from 'react'
import './News13.css'

export default function News13() {
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
      'Hackathon Evolution: How Your Suggestions Shape Our Updates'
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
    <div className="n13_container">
      <div className="n13_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n13_hide hide">
          <div className="n13_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n13_socialshare-title">
            Hackathon Evolution: How Your Suggestions Shape Our Updates
          </div>
        </div>

        <main className="n13_main-wrapper main-wrapper">
          <section className="n13_section_hero section_hero n13_is-vertical is-vertical">
            <div className="n13_padding-global padding-global">
              <div className="n13_container-large container-large">
                <div className="n13_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n13_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n13_hero_bg-image2 hero_bg-image n13_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n13_hero_bg-gradient hero_bg-gradient n13_is-blog is-blog"></div>
                </div>

                <div className="n13_hero_content-component hero_content-component n13_is-vertical2 is-vertical">
                  <div className="n13_blog_meta-wrapper blog_meta-wrapper n13_is-white is-white">
                    <div className="n13_blog_meta-category">News</div>
                    <div className="n13_icon-embed-custom1 icon-embed-custom n13_w-embed1 w-embed">
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
                    <div className="n13_blog_meta-date">Jul 25, 2024</div>
                    <div className="n13_icon-embed-custom2 icon-embed-custom n13_w-embed2 w-embed">
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
                    <div className="n13_blog_meta-author">0g</div>
                  </div>

                  <div className="n13_spacer-small spacer-small"></div>

                  <div className="n13_max-width-large max-width-large n13_text-align-center text-align-center">
                    <h1 className="n13_heading-style-h3 heading-style-h3">
                      Hackathon Evolution: How Your Suggestions Shape Our Updates
                    </h1>
                  </div>

                  <div className="n13_spacer-small2 spacer-small"></div>

                  <div className="n13_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n13_link-icon-light link-icon-light n13_is-static is-static n13_w-inline-block w-inline-block"
                    >
                      <div className="n13_icon-embed-xsmall1 icon-embed-xsmall n13_w-embed3 w-embed">
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
                      className="n13_link-icon-light2 link-icon-light n13_is-static2 is-static n13_w-inline-block2 w-inline-block"
                    >
                      <div className="n13_icon-embed-xsmall2 icon-embed-xsmall n13_w-embed4 w-embed">
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
                      className="n13_link-icon-light3 link-icon-light n13_is-static3 is-static n13_w-inline-block3 w-inline-block"
                    >
                      <div className="n13_icon-embed-xsmall3 icon-embed-xsmall n13_w-embed5 w-embed">
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

          <section className="n13_section_legal-content section_legal-content">
            <div className="n13_padding-global2 padding-global">
              <div className="n13_padding-section-medium padding-section-medium">
                <div className="n13_container-small container-small">
                  <div className="n13_legal-content_outer">
                    <div className="n13_legal-content_component legal-content_component">
                      <div className="n13_blog-rich-text blog-rich-text n13_w-richtext w-richtext">
                        <p>
                          At 0G Labs, we actively listen to suggestions and
                          feedback from our community to enhance our
                          documentation, tutorials, contribution guidelines, and
                          GitHub. Our goal is to create valuable resources and
                          hands-on guides that streamline and simplify the
                          development process for hackathon participants.
                        </p>
                        <h2>
                          <strong>Hackathon Co-Hosting</strong>
                        </h2>
                        <p>
                          We have proudly co-hosted two major hackathons so far:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>
                              Hybrid AI+Web3 &amp; Social Hackathon:{' '}
                            </strong>
                            A 3-day hackathon focused on the intersection of AI
                            and Web3, that saw 867 participants form 133
                            separate teams.{' '}
                            <a href="https://0g.ai/blog/0g-x-onepiece-labs-x-camp-hackathon">
                              More information here
                            </a>
                            .
                          </li>
                          <li>
                            <strong>dAGI House Hackathon at ETHCC: </strong>A
                            decentralized AI hackathon that featured a
                            pre-conference series online and $87,500 in prizes.{' '}
                            <a href="https://www.dagihouse.com/#venue">
                              More details here.
                            </a>
                          </li>
                        </ol>
                        <p>
                          During these hackathons, we received numerous valuable
                          suggestions. Out of the 48 teams that participated, 25
                          submitted their projects leveraging 0G technology.
                          Here are some key improvements we have made based on
                          their feedback:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Documentation Updates: </strong>Enhanced
                            documentation now includes detailed architecture and
                            flowcharts for developers building on 0G.
                          </li>
                          <li>
                            <strong>YouTube Tutorials: </strong>New SDK tutorials
                            and developer onboarding workshops are now available
                            on our YouTube channel.
                          </li>
                          <li>
                            <strong>Repository Updates:</strong>&nbsp; Added a
                            demo application repository and updated the README
                            based on hackathon feedback.
                          </li>
                          <li>
                            <strong>New Community Initiatives:</strong> Launched
                            improved technical support and Discord Office Hours
                            for ongoing developer engagement.
                          </li>
                          <li>
                            <strong>Bug Fixes:</strong> Resolved gas estimation
                            issues, added file type metadata for security,
                            improved RPC stability, and optimized compilation
                            times for better efficiency.
                          </li>
                        </ol>
                        <p>We’ll expand on each of these below.</p>
                        <h2>
                          <strong>Documentation Updates</strong>
                        </h2>
                        <p>
                          Initially, our{' '}
                          <a href="https://docs.0g.ai/">documentation </a>focused
                          primarily on running a node and basic architecture
                          explanations. Now, we have added an improved developer
                          in our documentation.
                        </p>
                        <p>
                          This section includes detailed architecture for each
                          component:&nbsp;
                        </p>
                        <ul role="list">
                          <li>The 0G blockchain,&nbsp;</li>
                          <li>0G’s data storage,&nbsp;</li>
                          <li>Data availabiltiy,&nbsp;</li>
                          <li>Contract addresses, and&nbsp;</li>
                          <li>Testnet configuration.</li>
                        </ul>
                        <p>We also added flowcharts for improved legibility.</p>
                        <h2>
                          <strong>YouTube Tutorials</strong>
                        </h2>
                        <p>
                          DK Tutorials: We have added tutorials to our YouTube
                          channel on how to use the SDK. Watch the{' '}
                          <a href="https://youtu.be/USFGNeaO1b8?si=-Wtf4At63-BCf0TV">
                            0G SDK Tutorial
                          </a>{' '}
                          here.&nbsp;
                        </p>
                        <p>
                          We also participated in a workshop series on
                          &quot;Introduction and Developer Onboarding into the
                          0G Ecosystem.&quot; Watch the{' '}
                          <a href="https://youtu.be/pkvsqmywveM?si=PoNuULtaDxsEmHJu">
                            0G Onboarding Workshop
                          </a>{' '}
                          here.
                        </p>
                        <h2>
                          <strong>Repository Updates</strong>
                        </h2>
                        <p>
                          We’ve added a an application repository providing
                          examples of how to use the 0G SDK. Check it out here:{' '}
                          <a href="https://github.com/0glabs/0g-demo-app">
                            0G Demo App
                          </a>
                        </p>
                        <p>
                          We’ve also updated the README and addressed several
                          issues raised by hackathon participants. It can be
                          accessed here:{' '}
                          <a href="https://github.com/0glabs/0g-ts-sdk">
                            0G TS SDK
                          </a>
                          .
                        </p>
                        <h2>
                          <strong>Community Initiatives</strong>
                        </h2>
                        <p>
                          We have enhanced moderator support for technical
                          questions in{' '}
                          <a href="https://discord.com/invite/0glabs">
                            our Discord channel.
                          </a>
                          &nbsp;
                        </p>
                        <p>
                          We have also launched a Discord Office Hours for
                          developers to stay updated on ecosystem developments,
                          Fridays&nbsp; at 9AM EST beginning this week.
                        </p>
                        <h2>
                          <strong>Bug Fixes</strong>
                        </h2>
                        <p>
                          We’ve made several bug fixes that improve 0G’s
                          performance.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>File Uploads:</strong> Resolved issues with
                            test ETH gas estimate fees for medium-sized files
                            (&gt;50MB).
                          </li>
                          <li>
                            <strong>Download Segment Metadata: We’ve </strong>
                            addressed the absence of file type metadata stored
                            on-chain, which posed a security risk. We’ve also
                            updated documentation to clarify assumptions about
                            retrieved data, and enhanced the documentation for
                            the download part in the TS-SDK.
                          </li>
                          <li>
                            <strong>Gas Estimation Issues: </strong>We’ve fixed
                            incorrect gas estimates that led to transaction
                            failures, and implemented manual adjustments and
                            higher gas limits where necessary.
                          </li>
                          <li>
                            <strong>Unstable RPC and Deployment Issues: </strong>
                            Mitigated frequent instability with RPC interfaces
                            that caused deployment and runtime errors.
                          </li>
                          <li>
                            <strong>
                              Heavy Development Dependencies and Long
                              Compilation Times:{' '}
                            </strong>
                            We have reduced prolonged compilation times due to
                            heavy dependencies, improved troubleshooting
                            processes by integrating various components, and
                            addressed RPC instability and difficulties in
                            determining gas fees.
                          </li>
                        </ol>
                        <p>
                          We are committed to continuously improving our
                          resources and support based on community feedback.
                          Stay tuned for more updates and enhancements from 0G
                          Labs!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n13_section_filter section_filter">
            <div className="n13_blog_more-blog blog_more-blog">
              <h5 className="n13_related-title">Related news:</h5>
            </div>
          </section>

          <div className="n13_w-dyn-list w-dyn-list">
            <div
              role="list"
              className="n13_cms-grid_list cms-grid_list n13_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n13_cms-grid_item1 cms-grid_item n13_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n13_cms-grid_content-wrapper cms-grid_content-wrapper n13_is-blog2 is-blog n13_w-inline-block4 w-inline-block"
                >
                  <div className="n13_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n13_cms-grid_image1 cms-grid_image"
                    />
                    <div className="n13_spacer-medium1 spacer-medium n13_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="n13_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="n13_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n13_blog_meta-category2">News</div>
                        <div className="n13_icon-embed-custom3 icon-embed-custom n13_w-embed6 w-embed">
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
                        <div className="n13_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n13_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="n13_heading-style-h51 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n13_cms-grid_item2 cms-grid_item n13_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n13_cms-grid_content-wrapper2 cms-grid_content-wrapper n13_is-blog3 is-blog n13_w-inline-block5 w-inline-block"
                >
                  <div className="n13_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n13_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n13_spacer-medium2 spacer-medium n13_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n13_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n13_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n13_blog_meta-category3">News</div>
                        <div className="n13_icon-embed-custom4 icon-embed-custom n13_w-embed7 w-embed">
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
                        <div className="n13_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n13_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n13_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n13_cms-grid_item3 cms-grid_item n13_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n13_cms-grid_content-wrapper3 cms-grid_content-wrapper n13_is-blog4 is-blog n13_w-inline-block6 w-inline-block"
                >
                  <div className="n13_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n13_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n13_spacer-medium3 spacer-medium n13_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n13_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n13_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n13_blog_meta-category4">News</div>
                        <div className="n13_icon-embed-custom5 icon-embed-custom n13_w-embed8 w-embed">
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
                        <div className="n13_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n13_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n13_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n13_cms-grid_item4 cms-grid_item n13_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n13_cms-grid_content-wrapper4 cms-grid_content-wrapper n13_is-blog5 is-blog n13_w-inline-block7 w-inline-block"
                >
                  <div className="n13_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n13_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n13_spacer-medium4 spacer-medium n13_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n13_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n13_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n13_blog_meta-category5">News</div>
                        <div className="n13_icon-embed-custom6 icon-embed-custom n13_w-embed9 w-embed">
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
                        <div className="n13_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n13_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n13_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n13_copy-toast ${showToast ? 'n13_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
