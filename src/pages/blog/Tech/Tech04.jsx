import React, { useState } from 'react'
import './Tech04.css'

export default function Tech04() {
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
      "A Recap of 0G's Global Builder Momentum at SuperAI"
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
    <div className="t04_container">
      <div className="t04_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t04_hide hide">
          <div className="t04_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t04_socialshare-title">
            A Recap of 0G&apos;s Global Builder Momentum at SuperAI
          </div>
        </div>

        <main className="t04_main-wrapper main-wrapper">
          <section className="t04_section_hero section_hero t04_is-vertical is-vertical">
            <div className="t04_padding-global padding-global">
              <div className="t04_container-large container-large">
                <div className="t04_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t04_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t04_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t04_hero_bg-gradient hero_bg-gradient t04_is-blog is-blog"></div>
                </div>

                <div className="t04_hero_content-component hero_content-component t04_is-vertical2 is-vertical">
                  <div className="t04_blog_meta-wrapper blog_meta-wrapper t04_is-white is-white">
                    <div className="t04_blog_meta-category">Tech</div>
                    <div className="t04_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t04_blog_meta-date">Jun 25, 2025</div>
                    <div className="t04_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t04_blog_meta-author"></div>
                  </div>

                  <div className="t04_spacer-small spacer-small"></div>

                  <div className="t04_max-width-large max-width-large t04_text-align-center text-align-center">
                    <h1 className="t04_heading-style-h3 heading-style-h3">
                      A Recap of 0G&apos;s Global Builder Momentum at SuperAI
                    </h1>
                  </div>

                  <div className="t04_spacer-small2 spacer-small"></div>

                  <div className="t04_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t04_link-icon-light1 link-icon-light t04_is-static is-static w-inline-block"
                    >
                      <div className="t04_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t04_link-icon-light2 link-icon-light t04_is-static2 is-static w-inline-block"
                    >
                      <div className="t04_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t04_link-icon-light3 link-icon-light t04_is-static3 is-static w-inline-block"
                    >
                      <div className="t04_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t04_section_legal-content section_legal-content">
            <div className="t04_padding-global2 padding-global">
              <div className="t04_padding-section-medium padding-section-medium">
                <div className="t04_container-small container-small">
                  <div className="t04_legal-content_outer">
                    <div className="t04_legal-content_component legal-content_component">
                      <div className="t04_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          <a href="https://www.superai.com/">SuperAI Singapore</a>{' '}
                          brought together the global frontier of artificial
                          intelligence, encompassing model labs and
                          infrastructure startups, research institutions, and
                          forward-looking investors. Of course, 0G was right in
                          the middle of it all.
                        </p>
                        <p>
                          Throughout the week, 0G had a major presence at the
                          event, anchoring conversations around scalable
                          infrastructure and verifiable compute.{' '}
                          <a href="https://x.com/0G_labs/status/1935580076810355131">
                            Our booth
                          </a>{' '}
                          drew in participants from across the spectrum:
                          builders curious about our full-stack modular design,
                          researchers exploring decentralized storage, and
                          investors eager to back the next wave of AI-native
                          projects.
                        </p>
                        <p>{'\u200d'}</p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t04_figure-inner1">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685b14db013d777dea756c9f_AD_4nXc4FuqT0sFyqzGur7AUT_5D3VNuM7ZuijDmzMGfI0CFJsMbuA0xOGY-4qMMssaS_L3i5MQPfwt7GF6QrqanuSl6RaMUogdDYC5t2V39ms1etmB059dS_6hJp37XmNs5GNCHC8s.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <p>{'\u200d'}</p>
                        <p>
                          But that was just the beginning. Across panels,
                          meetups, and invite-only gatherings, we connected with
                          the community, shaping the next generation of AI,
                          onchain, modular, and open by default.
                        </p>
                        <h2>From Panels to Private Lounges</h2>
                        <h3>📍 AgentFi: Can Crypto Unleash AI’s Full Financial Power?</h3>
                        <p>
                          At{' '}
                          <a href="https://x.com/amber_ac_/status/1934827541250105705?s=46">
                            BUIDL_QUESTS
                          </a>
                          , we dove into the rising wave of AgentFi: the
                          intersection of crypto-native infrastructure and
                          autonomous financial agents. Our APAC BD Lead, Vanessa,
                          represented 0G in a panel that asked: What would it
                          take to bring AI-native protocols fully onchain? The
                          energy in the room was serious, a mix of builders,
                          traders, and researchers ready to define the space
                          beyond the buzzwords.
                        </p>
                        <p>{'\u200d'}</p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t04_figure-inner2">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685b14db013d777dea756c88_AD_4nXfcJ182hLn04PbqzYFZKP2Lvq5yTMOADBm4QvAq4V_pVWuua_HTQqczysgXwqsYqd1lAprIqHmrbrfFuTVHMmVYftFQMeW0vg-ZNMLiII5QarcW252rbriEiznhyPC0iC6yk8s4.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h3>📍 Decentralize the World: AI Meets Web3 Revolution</h3>
                        <p>
                          This SuperAI{' '}
                          <a href="https://lu.ma/ubmhdqlk">spotlight event</a>{' '}
                          featured speakers from Harvard, Berkeley, NUS, and
                          Polyhedra, all of whom converged to discuss
                          decentralized AI, onchain agents, and
                          infrastructure-scale innovation. Vanessa once again
                          brought the 0G perspective to a global academic and
                          builder audience, highlighting how our modular
                          architecture is built for composable AI coordination.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t04_figure-inner3">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685b14da013d777dea756c80_AD_4nXdpcOrYtjeN9wsGfVA57Sff5Zqyl0V3s2XVz2HjPtRgjnBU-_I4ivrw3HcxIjYvKAM0LpVLXKkC41928OLAOm_rStUWOakLLa9bEaMVNjeMs43zy-9PE6zhk_aDnnIq2KHV3MnE.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h3>📍 The Scaling AI MeetUP @ SuperAI Singapore</h3>
                        <p>
                          Co-hosted by 0G, this was the largest{' '}
                          <a href="https://lu.ma/k6wf8guh">AI x Web3 meetup</a>{' '}
                          during SuperAI, drawing over 15 VCs and dozens of
                          frontier AI projects. Our Greater China Lead JT shared
                          insights on 0G’s infinite scalability and how our
                          network is uniquely positioned to power AI in
                          perpetuity. The meetup was a hotbed of cross-ecosystem
                          collaboration and a major milestone for our base in
                          Asia.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t04_figure-inner4">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685b14db013d777dea756c8b_AD_4nXceI531x6TwZhCUju4b-SGEzN29OqRhCzthqsx8hZ2z0LfUpihvyVa-9gY70wgTM-OEceCCGufgu9N47Aq7ZzyBUoZTu--mUTookuXjP3lWnKoXF2RzPTDoM6aqN_1IShBc4nhN.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h2>Cultivating Ecosystem Moments</h2>
                        <h3>📍 HumanLess Private Lounge</h3>
                        <p>
                          Held at the exclusive 33Club Singapore, this{' '}
                          <a href="https://lu.ma/aokvhrgt?tk=mUo8Zv">
                            invite-only gathering
                          </a>{' '}
                          brought together 100 handpicked founders, CEOs, and
                          investors. The format? AI agents handled the hosting
                          while builders discussed DePIN, new models, and the
                          future of decentralized coordination over modern
                          French and Asian fusion cuisine and Japanese whisky.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t04_figure-inner5">
                            <img
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685b14db013d777dea756c9c_AD_4nXd4TnHv67wteVHIcO0BkdvlKip-NWjdfpt9Cmxm-3EXMYmHB0gF97P6z_nXUoio-eugel5E4cw6Y8yy8yFytNnh30mpbdE4XWEFaQcbnun5peJZsjiCXfnm1fllE6DOgMoMGUdL.avif"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </figure>
                        <h3>📍 0G x SuperAI Private Dinner</h3>
                        <p>
                          To wrap the week, we hosted an intimate{' '}
                          <a href="https://lu.ma/p9x0kibz">VIP dinner</a> with
                          leaders across AI, crypto, and research. It was an
                          evening of meaningful conversation, strong
                          connections, and alignment on a shared mission: making
                          decentralized AI infrastructure not just possible, but
                          inevitable.
                        </p>
                        <h2>Looking Ahead</h2>
                        <p>
                          SuperAI further confirmed what we already knew: the
                          world is ready for decentralized AI infrastructure.
                          From protocol founders to first-time hackers, the
                          global demand for modular, open, scalable systems is
                          growing rapidly. As we approach mainnet, we’re not
                          just building infrastructure; we’re cultivating a
                          global community. See you at the next stop.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t04_section_filter section_filter">
            <div className="t04_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t04_w-dyn-list w-dyn-list">
            <div className="t04_cms-grid_list cms-grid_list w-dyn-items" role="list">
              <div className="t04_cms-grid_item1 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t04_cms-grid_content-wrapper1 cms-grid_content-wrapper t04_is-blog2 is-blog w-inline-block"
                >
                  <div className="t04_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t04_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t04_spacer-medium spacer-medium t04_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t04_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t04_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t04_related_category1">Tech</div>
                        <div className="t04_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t04_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t04_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t04_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t04_cms-grid_item2 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t04_cms-grid_content-wrapper2 cms-grid_content-wrapper t04_is-blog3 is-blog w-inline-block"
                >
                  <div className="t04_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t04_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t04_spacer-medium2 spacer-medium t04_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t04_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t04_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t04_related_category2">Tech</div>
                        <div className="t04_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t04_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t04_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t04_heading-style-h5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t04_cms-grid_item3 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t04_cms-grid_content-wrapper3 cms-grid_content-wrapper t04_is-blog4 is-blog w-inline-block"
                >
                  <div className="t04_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t04_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t04_spacer-medium3 spacer-medium t04_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t04_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t04_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t04_related_category3">Tech</div>
                        <div className="t04_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t04_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t04_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t04_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t04_cms-grid_item4 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-storage"
                  className="t04_cms-grid_content-wrapper4 cms-grid_content-wrapper t04_is-blog5 is-blog w-inline-block"
                >
                  <div className="t04_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t04_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t04_spacer-medium4 spacer-medium t04_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t04_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t04_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t04_related_category4">Tech</div>
                        <div className="t04_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t04_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t04_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t04_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t04_copy-toast ${showToast ? 't04_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
