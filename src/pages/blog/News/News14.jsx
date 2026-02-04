import React, { useState } from 'react'
import './News14.css'

export default function News14() {
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
      "EthCC Brussels Recap: OG Lab's First Summit - Path to dAGI"
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
    <div className="n14_container">
      <div className="n14_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="n14_hide hide">
          <div className="n14_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="n14_socialshare-title">
            EthCC Brussels Recap: OG Lab&#39;s First Summit - Path to dAGI
          </div>
        </div>

        <main className="n14_main-wrapper main-wrapper">
          <section className="n14_section_hero section_hero n14_is-vertical is-vertical">
            <div className="n14_padding-global padding-global">
              <div className="n14_container-large container-large">
                <div className="n14_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n14_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n14_hero_bg-image2 hero_bg-image n14_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="n14_hero_bg-gradient hero_bg-gradient n14_is-blog is-blog"></div>
                </div>

                <div className="n14_hero_content-component hero_content-component n14_is-vertical2 is-vertical">
                  <div className="n14_blog_meta-wrapper blog_meta-wrapper n14_is-white is-white">
                    <div className="n14_blog_meta-category">News</div>
                    <div className="n14_icon-embed-custom1 icon-embed-custom n14_w-embed1 w-embed">
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
                    <div className="n14_blog_meta-date">Jul 22, 2024</div>
                    <div className="n14_icon-embed-custom2 icon-embed-custom n14_w-embed2 w-embed">
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
                    <div className="n14_blog_meta-author">0g</div>
                  </div>

                  <div className="n14_spacer-small spacer-small"></div>

                  <div className="n14_max-width-large max-width-large n14_text-align-center text-align-center">
                    <h1 className="n14_heading-style-h3 heading-style-h3">
                      EthCC Brussels Recap: OG Lab&#39;s First Summit - Path to dAGI
                    </h1>
                  </div>

                  <div className="n14_spacer-small2 spacer-small"></div>

                  <div className="n14_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="n14_link-icon-light link-icon-light n14_is-static is-static n14_w-inline-block w-inline-block"
                    >
                      <div className="n14_icon-embed-xsmall1 icon-embed-xsmall n14_w-embed3 w-embed">
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
                      className="n14_link-icon-light2 link-icon-light n14_is-static2 is-static n14_w-inline-block2 w-inline-block"
                    >
                      <div className="n14_icon-embed-xsmall2 icon-embed-xsmall n14_w-embed4 w-embed">
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
                      className="n14_link-icon-light3 link-icon-light n14_is-static3 is-static n14_w-inline-block3 w-inline-block"
                    >
                      <div className="n14_icon-embed-xsmall3 icon-embed-xsmall n14_w-embed5 w-embed">
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

          <section className="n14_section_legal-content section_legal-content">
            <div className="n14_padding-global2 padding-global">
              <div className="n14_padding-section-medium padding-section-medium">
                <div className="n14_container-small container-small">
                  <div className="n14_legal-content_outer">
                    <div className="n14_legal-content_component legal-content_component">
                      <div className="n14_blog-rich-text blog-rich-text n14_w-richtext w-richtext">
                        <p>
                          EthCC Brussels marked a significant milestone for OG
                          Labs as we hosted our first event out of stealth on
                          July 11th, 2024 at The Hotel Brussels. The Ethereum
                          Community Conference (EthCC) is the largest annual
                          European Ethereum event focused on technology and
                          community, and we were met with major enthusiasm and
                          interest over Web3 and AI’s intersection. Despite 300+
                          side events at ETHCC, we were met with a major turnout
                          of over 1,500 registrations and over 500 attendees
                          across our events during the week.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div1">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc4e_yH3cM9LlfdbApER0QtNX4qvTM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc54_WDexCzIhgeP8j7xMUX3fNTDw0.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>Keynote Highlights</strong>
                        </h3>
                        <p>
                          Besides panels highlighting topics in the intersection
                          of Web3/AI, the summit featured an array of
                          enlightening keynote presentations from prominent
                          figures in the industry:&nbsp;
                        </p>
                        <p>
                          <strong>
                            Michael Heinrich, Co-founder and CEO of OG Labs:
                          </strong>{' '}
                          Michael&#39;s presentation, &quot;The Future of
                          On-Chain AI,&quot; covered some major upcoming plans
                          for OG Labs and how we are leading the way in
                          developing on-chain AI solutions.&nbsp;
                        </p>
                        <p>
                          <strong>Matt Sorg, VP of Technology at Solana: </strong>
                          In his keynote, &quot;Accelerating AI with
                          Solana,&quot; Matt highlighted the synergies between
                          AI and blockchain, showcasing the vibrant DePIN
                          ecosystem on Solana. He discussed how AI projects like
                          Hivemapper, Proto, and Antbit are working together to
                          further the Solana ecosystem.&nbsp;
                        </p>
                        <p>
                          <strong>
                            Illia Polosukhin, Co-Founder of Near Protocol:{' '}
                          </strong>
                          Illia&#39;s talk, &quot;Why the World Needs User-Owned
                          AI,&quot; delved into how decentralizing AI ownership
                          is ensuring fairness, transparency, and innovation.&nbsp;
                        </p>
                        <p>
                          <strong>Mark Rydon, Founder of Aethir:</strong> Mark
                          introduced the audience to Aethir and the Aethir Edge
                          Ecosystem, including how edge computing can
                          revolutionize AI and blockchain applications. After
                          garnering $36 million in annual recurring revenue
                          (ARR) this past year, we’re excited to see Aethir’s
                          continued growth in the space.&nbsp;
                        </p>
                        <p>
                          <strong>
                            Eefy Lin, Web3 Solutions Architect at Google Cloud:{' '}
                          </strong>
                          In his session, &quot;Google Cloud Shaping Web3 +
                          AI,&quot; Eefy discussed Google Cloud’s close focus on
                          Web3 and AI.&nbsp;
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div3">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc45_SuQzZ9a1rlgPC28MSvKQkLt0kQ.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div4">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc48_csrjhPtMUcd42k5hASLd7beY24.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div5">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc42_CBapAZd9VlpKx4IakNT1Mw32l0.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div6">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc3f_2WRTZPTrME0BmcjVdEuGvFYQw.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div7">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc3c_mbobnGDGrbj9WLlviNFr5HuJO0w.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>
                            First In-person Meeting for Many of the Team
                          </strong>
                        </h3>
                        <p>
                          As a fully decentralized company, in-person meetings
                          are rare and cherished occasions. EthCC Brussels
                          provided the perfect opportunity for our BD,
                          Ecosystem, and Community teams to gather, share ideas,
                          align on upcoming goals, and introduce the exciting
                          developments at OG Labs to attendees of EthCC and our
                          summit. The energy and synergy among the team members
                          were incredible, reinforcing our commitment to our
                          mission and vision.
                        </p>
                        <p>
                          With over 300 side events and more than 2
                          AI/blockchain-focused side events each day throughout
                          the week, EthCC Brussels was a tiring but incredibly
                          fruitful week for OG Labs. The connections made, the
                          ideas shared, and the enthusiasm generated have set a
                          strong foundation for our future endeavors. We are
                          excited to host more in-person meetups and events in
                          the coming months. Stay tuned for more updates and
                          developments from OG Labs as we continue our path to
                          decentralized AGI (dAGI).
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div8">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc39_Fjwk7nM4LeY6BwQSrOCvLJPmNLM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          We would like to extend our heartfelt thanks to all of
                          our partners, especially our sponsors, who made this
                          event possible. Special gratitude goes to our cohost,
                          Aethir, our Gold Partners, Sentient and Theoriq, and
                          our Silver Partners, Arcium, Bagel, and Gaib Nillion.
                          Your support and collaboration have been invaluable
                          in making our first summit a resounding success.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div9">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc51_NIY5bdVRrj8tQnIK0zPKfMdmYrY.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div10">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc57_hI94Z2o4EjTxudx8o0IrjREToM.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div11">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc5a_dtgyfDcEMNXQA3pAZaJr4ekcNA.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div12">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc5d_zy1sl6wd5fkMEqF4hOzPEe73vrg.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div13">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc77_PxqgE9QrXGIWiVFOJnSNSni34QQ.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n14_richtext-figure-div14">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fbd973842c02d9bc4b_Aq6axQIDULA62QSfRWAVbbTP4.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Thank you for being a part of our journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n14_section_filter section_filter">
            <div className="n14_blog_more-blog blog_more-blog">
              <h5 className="n14_related-title">Related news:</h5>
            </div>
          </section>

          <div className="n14_w-dyn-list w-dyn-list">
            <div
              role="list"
              className="n14_cms-grid_list cms-grid_list n14_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n14_cms-grid_item1 cms-grid_item n14_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n14_cms-grid_content-wrapper cms-grid_content-wrapper n14_is-blog2 is-blog n14_w-inline-block4 w-inline-block"
                >
                  <div className="n14_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n14_cms-grid_image1 cms-grid_image"
                    />
                    <div className="n14_spacer-medium1 spacer-medium n14_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="n14_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="n14_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="n14_blog_meta-category2">News</div>
                        <div className="n14_icon-embed-custom3 icon-embed-custom n14_w-embed6 w-embed">
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
                        <div className="n14_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n14_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="n14_heading-style-h51 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n14_cms-grid_item2 cms-grid_item n14_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n14_cms-grid_content-wrapper2 cms-grid_content-wrapper n14_is-blog3 is-blog n14_w-inline-block5 w-inline-block"
                >
                  <div className="n14_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n14_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n14_spacer-medium2 spacer-medium n14_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n14_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n14_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="n14_blog_meta-category3">News</div>
                        <div className="n14_icon-embed-custom4 icon-embed-custom n14_w-embed7 w-embed">
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
                        <div className="n14_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n14_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n14_heading-style-h52 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n14_cms-grid_item3 cms-grid_item n14_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n14_cms-grid_content-wrapper3 cms-grid_content-wrapper n14_is-blog4 is-blog n14_w-inline-block6 w-inline-block"
                >
                  <div className="n14_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n14_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n14_spacer-medium3 spacer-medium n14_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n14_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n14_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="n14_blog_meta-category4">News</div>
                        <div className="n14_icon-embed-custom5 icon-embed-custom n14_w-embed8 w-embed">
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
                        <div className="n14_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n14_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n14_heading-style-h53 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n14_cms-grid_item4 cms-grid_item n14_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n14_cms-grid_content-wrapper4 cms-grid_content-wrapper n14_is-blog5 is-blog n14_w-inline-block7 w-inline-block"
                >
                  <div className="n14_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n14_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n14_spacer-medium4 spacer-medium n14_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n14_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n14_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="n14_blog_meta-category5">News</div>
                        <div className="n14_icon-embed-custom6 icon-embed-custom n14_w-embed9 w-embed">
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
                        <div className="n14_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n14_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n14_heading-style-h54 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`n14_copy-toast ${showToast ? 'n14_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
