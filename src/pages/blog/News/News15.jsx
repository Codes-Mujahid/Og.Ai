import React, { useState } from 'react'
import './News15.css'

export default function News15() {
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
    const text = encodeURIComponent('0G Ambassador Program: Cohort 1 Selection')
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
    <div className="n15_container">
      <div className="n15_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n15_hide hide">
          <div className="n15_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n15_socialshare-title">
            0G Ambassador Program: Cohort 1 Selection
          </div>
        </div>

        <main className="n15_main-wrapper main-wrapper">
          <section className="n15_section_hero section_hero n15_is-vertical is-vertical">
            <div className="n15_padding-global padding-global">
              <div className="n15_container-large container-large">
                <div className="n15_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n15_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n15_hero_bg-image2 hero_bg-image n15_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n15_hero_bg-gradient hero_bg-gradient n15_is-blog is-blog"></div>
                </div>

                <div className="n15_hero_content-component hero_content-component n15_is-vertical2 is-vertical">
                  <div className="n15_blog_meta-wrapper blog_meta-wrapper n15_is-white is-white">
                    <div className="n15_blog_meta-category">News</div>
                    <div className="n15_icon-embed-custom1 icon-embed-custom n15_w-embed1 w-embed">
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
                    <div className="n15_blog_meta-date">Jul 19, 2024</div>
                    <div className="n15_icon-embed-custom2 icon-embed-custom n15_w-embed2 w-embed">
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
                    <div className="n15_blog_meta-author">0g</div>
                  </div>

                  <div className="n15_spacer-small spacer-small"></div>

                  <div className="n15_max-width-large max-width-large n15_text-align-center text-align-center">
                    <h1 className="n15_heading-style-h3 heading-style-h3">
                      0G Ambassador Program: Cohort 1 Selection
                    </h1>
                  </div>

                  <div className="n15_spacer-small2 spacer-small"></div>

                  <div className="n15_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n15_link-icon-light link-icon-light n15_is-static is-static n15_w-inline-block1 w-inline-block"
                    >
                      <div className="n15_icon-embed-xsmall1 icon-embed-xsmall n15_w-embed3 w-embed">
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
                      className="n15_link-icon-light2 link-icon-light n15_is-static2 is-static n15_w-inline-block2 w-inline-block"
                    >
                      <div className="n15_icon-embed-xsmall2 icon-embed-xsmall n15_w-embed4 w-embed">
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
                      className="n15_link-icon-light3 link-icon-light n15_is-static3 is-static n15_w-inline-block3 w-inline-block"
                    >
                      <div className="n15_icon-embed-xsmall3 icon-embed-xsmall n15_w-embed5 w-embed">
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

          <section className="n15_section_legal-content section_legal-content">
            <div className="n15_padding-global2 padding-global">
              <div className="n15_padding-section-medium padding-section-medium">
                <div className="n15_container-small container-small">
                  <div className="n15_legal-content_outer">
                    <div className="n15_legal-content_component legal-content_component">
                      <div className="n15_blog-rich-text blog-rich-text n15_w-richtext w-richtext">
                        <p>
                          We were blown away by the overwhelming response to our
                          0G Ambassador Program! With over 900 applications, the
                          enthusiasm and eagerness shown by the community have
                          reaffirmed our mission and goals. Our chosen
                          ambassadors share our mission to make AI a public good
                          and will play a vital role in making it a reality.
                        </p>
                        <h3>
                          <strong>The Selection Process</strong>
                        </h3>
                        <p>
                          Choosing the first cohort was no easy task. Our team
                          meticulously reviewed each application, evaluating the
                          skills and experience of the applicants and their
                          proposed contributions. We were looking for
                          individuals who could bring a diverse range of talents
                          and a deep commitment to furthering 0G&#39;s mission.
                          Qualities like creativity, technical acumen, community
                          spirit, and a proactive approach made the selected
                          ambassadors stand out. Each application was evaluated
                          based on several criteria:
                        </p>
                        <ul role="list">
                          <li>
                            Content Creation: Proposals for translating content,
                            creating guides and tutorials, writing blog posts,
                            producing videos, and designing graphics.
                          </li>
                          <li>
                            Events and Meetups: Plans for organizing and hosting
                            0G-related events, both online and offline, and
                            strategies for recruiting Web3 enthusiasts to join
                            the 0G community.
                          </li>
                        </ul>
                        <h3>
                          <strong>Meet the Ambassadors</strong>
                        </h3>
                        <p>
                          We are excited to introduce the 19 ambassadors who
                          will play a crucial role in driving 0G’s community
                          engagement:
                        </p>
                        <ul role="list">
                          <li>ray.eth</li>
                          <li>adamtruong8668</li>
                          <li>aksanova</li>
                          <li>an_cp</li>
                          <li>anastese</li>
                          <li>jain_apurva24</li>
                          <li>blackowl</li>
                          <li>boruto__</li>
                          <li>web3enjoyer</li>
                          <li>cst_jeanpolat</li>
                          <li>m4lka</li>
                          <li>sixmiles</li>
                          <li>speedhall50</li>
                          <li>newera3</li>
                          <li>mj.gm</li>
                          <li>nickshakel</li>
                          <li>nightech</li>
                          <li>ruslansukhovii</li>
                          <li>saviourjay</li>
                          <li>slothify</li>
                        </ul>
                        <p>
                          These ambassadors bring a diverse set of skills and
                          perspectives that will enhance our community’s
                          engagement and understanding of 0G.
                        </p>
                        <h3>
                          <strong>Types of Contributions and Engagement</strong>
                        </h3>
                        <p>
                          Our ambassadors are expected to contribute in various
                          impactful ways. Here’s what they will be focusing on:
                        </p>
                        <p>Content Creation</p>
                        <ul role="list">
                          <li>
                            <strong>Translating Content: </strong>Ambassadors
                            will translate blog posts, technical documents, and
                            other content into multiple languages, ensuring that
                            non-English speaking communities can access and
                            understand 0G’s resources.
                          </li>
                          <li>
                            <strong>Creating Guides and Tutorials: </strong>
                            Developing step-by-step guides and tutorials to help
                            users navigate and utilize 0G’s tools and features
                            effectively.
                          </li>
                          <li>
                            <strong>Writing Blog Posts and Articles:</strong>{' '}
                            Crafting insightful articles about 0G and its
                            ecosystem, highlighting advantages and potential use
                            cases.
                          </li>
                          <li>
                            <strong>Producing Videos: </strong>Creating engaging
                            video content that showcases the benefits and
                            functionalities of 0G, making complex concepts more
                            accessible through visual storytelling.
                          </li>
                          <li>
                            <strong>Designing Graphics: </strong>Developing
                            visually appealing graphics, presentations, and
                            memes to promote 0G and simplify its technical
                            aspects for a broader audience.
                          </li>
                        </ul>
                        <p>Events &amp; Meetups</p>
                        <ul role="list">
                          <li>
                            <strong>Organizing Events: </strong>Hosting online
                            webinars, local meetups, and other events to foster
                            discussions about 0G, share knowledge, and build a
                            robust community network.
                          </li>
                          <li>
                            <strong>Recruiting Enthusiasts: </strong>Actively
                            identifying and inviting Web3 enthusiasts to join
                            the 0G community.
                          </li>
                        </ul>
                        <p>
                          The 0G Ambassador Program is designed to foster a
                          dynamic and engaged community where meaningful
                          contributions are recognized and valued. Ambassadors
                          are expected to be actively involved in their proposed
                          activities, and those who do not meet these
                          expectations may be removed from the program, creating
                          opportunities for other passionate community members
                          who are eager to contribute.
                        </p>
                        <h3>
                          <strong>Future Opportunities</strong>
                        </h3>
                        <p>
                          Huge thank you to everyone who applied, and
                          congratulations to the first cohort of ambassadors!
                          The enthusiasm and quality of applications were
                          outstanding. We are eager to see the positive impact
                          these individuals will have on our community and the
                          broader blockchain ecosystem. Our team is looking
                          forward to collaborating with the ambassadors to drive
                          forward 0G’s initiatives and to create a more
                          connected and informed community. We believe that
                          together, we can achieve significant advancements and
                          foster a more robust blockchain ecosystem.
                        </p>
                        <p>
                          For those who were not selected in this round, we
                          encourage you to reapply! We’ll continue to review
                          applications and have more spaces available in
                          upcoming rounds. Our commitment to an active and
                          engaged community means there will be plenty of
                          opportunities to get involved.
                        </p>
                        <h3>
                          <strong>Join the 0G Community</strong>
                        </h3>
                        <p>
                          The success of the 0G Ambassador Program relies
                          heavily on community involvement and these individuals
                          will play a crucial role in improving our engagement
                          and outreach efforts. We invite you to follow their
                          progress, participate in their initiatives, and stay
                          tuned for updates on the 0G Ambassador Program via{' '}
                          <a href="https://discord.com/invite/0glabs">Discord</a>
                          , <a href="https://twitter.com/0G_labs">X</a>, and{' '}
                          <a href="https://t.me/web3_0glabs">Telegram</a>.
                        </p>
                        <p>
                          Once again, congratulations to our first cohort of
                          ambassadors! We’re excited to see the exciting
                          contributions you’ll make to the 0G community. Thank
                          you for your dedication and enthusiasm!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n15_section_filter section_filter">
            <div className="n15_blog_more-blog blog_more-blog">
              <h5 className="n15_related-title">Related news:</h5>
            </div>
          </section>

          <div className="n15_w-dyn-list w-dyn-list">
            <div
              role="list"
              className="n15_cms-grid_list cms-grid_list n15_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n15_cms-grid_item1 cms-grid_item n15_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n15_cms-grid_content-wrapper1 cms-grid_content-wrapper n15_is-blog2 is-blog n15_w-inline-block4 w-inline-block"
                >
                  <div className="n15_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n15_cms-grid_image1 cms-grid_image"
                    />
                    <div className="n15_spacer-medium1 spacer-medium n15_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="n15_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="n15_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n15_blog_meta-category2">News</div>
                        <div className="n15_icon-embed-custom3 icon-embed-custom n15_w-embed6 w-embed">
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
                        <div className="n15_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n15_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="n15_heading-style-h51 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n15_cms-grid_item2 cms-grid_item n15_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n15_cms-grid_content-wrapper2 cms-grid_content-wrapper n15_is-blog3 is-blog n15_w-inline-block5 w-inline-block"
                >
                  <div className="n15_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n15_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n15_spacer-medium2 spacer-medium n15_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n15_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n15_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n15_blog_meta-category3">News</div>
                        <div className="n15_icon-embed-custom4 icon-embed-custom n15_w-embed7 w-embed">
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
                        <div className="n15_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n15_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n15_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n15_cms-grid_item3 cms-grid_item n15_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n15_cms-grid_content-wrapper3 cms-grid_content-wrapper n15_is-blog4 is-blog n15_w-inline-block6 w-inline-block"
                >
                  <div className="n15_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n15_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n15_spacer-medium3 spacer-medium n15_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n15_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n15_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n15_blog_meta-category4">News</div>
                        <div className="n15_icon-embed-custom5 icon-embed-custom n15_w-embed8 w-embed">
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
                        <div className="n15_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n15_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n15_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n15_cms-grid_item4 cms-grid_item n15_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n15_cms-grid_content-wrapper4 cms-grid_content-wrapper n15_is-blog5 is-blog n15_w-inline-block7 w-inline-block"
                >
                  <div className="n15_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n15_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n15_spacer-medium4 spacer-medium n15_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n15_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n15_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n15_blog_meta-category5">News</div>
                        <div className="n15_icon-embed-custom6 icon-embed-custom n15_w-embed9 w-embed">
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
                        <div className="n15_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n15_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n15_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n15_copy-toast ${showToast ? 'n15_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
