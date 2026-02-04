import React, { useState } from 'react'
import './News17.css'

export default function News17() {
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
    const text = encodeURIComponent('0G x OnePiece Labs x Camp Hackathon')
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
    <div className="n17_container">
      <div className={`n17_copy-toast ${showToast ? 'n17_show' : ''}`}>
        Link copied
      </div>

      <div
        fs-socialshare-element="content"
        className="n17_socialshare-content hide"
      >
        <div className="n17_socialshare-lead">
          Check out this insightful blog post:&nbsp;
        </div>
        <div className="n17_socialshare-title">
          0G x OnePiece Labs x Camp Hackathon
        </div>
      </div>

      <div className="n17_page-wrapper page-wrapper">
        <main className="n17_main-wrapper main-wrapper">
          <section className="n17_section_hero section_hero is-vertical">
            <div className="n17_padding-global padding-global">
              <div className="n17_container-large container-large">
                <div className="n17_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="n17_hero_bg-image hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="n17_hero_bg-image2 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="n17_hero_bg-gradient hero_bg-gradient is-blog"></div>
                </div>

                <div className="n17_hero_content-component hero_content-component is-vertical">
                  <div className="n17_blog_meta-wrapper blog_meta-wrapper is-white">
                    <div className="n17_blog_meta-category">News</div>
                    <div className="n17_blog_meta-dot icon-embed-custom w-embed">
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
                    <div className="n17_blog_meta-date">Jun 27, 2024</div>
                    <div className="n17_blog_meta-dot2 icon-embed-custom w-embed">
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
                    <div className="n17_blog_meta-author">0g</div>
                  </div>

                  <div className="n17_spacer-small spacer-small"></div>

                  <div className="n17_max-width-large max-width-large text-align-center">
                    <h1 className="n17_heading heading-style-h3">
                      0G x OnePiece Labs x Camp Hackathon
                    </h1>
                  </div>

                  <div className="n17_spacer-small2 spacer-small"></div>

                  <div className="n17_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="n17_link-icon-light link-icon-light is-static w-inline-block"
                    >
                      <div className="n17_copy-icon icon-embed-xsmall w-embed">
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
                      className="n17_link-icon-light2 link-icon-light is-static w-inline-block"
                    >
                      <div className="n17_linkedin-icon icon-embed-xsmall w-embed">
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
                      className="n17_link-icon-light3 link-icon-light is-static w-inline-block"
                    >
                      <div className="n17_x-icon icon-embed-xsmall w-embed">
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

          <section className="n17_section_legal-content section_legal-content">
            <div className="n17_padding-global2 padding-global">
              <div className="n17_padding-section-medium padding-section-medium">
                <div className="n17_container-small container-small">
                  <div className="n17_legal-content_outer">
                    <div className="n17_legal-content_component legal-content_component">
                      <div className="n17_blog-rich-text blog-rich-text w-richtext">
                        <p className="n17_p01">Mountain View, CA - June 19, 2024</p>

                        <figure className="n17_fig01 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig01_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fd04_asmYubnV8GOGCnJd9SJaZQr4s24.avif"
                              loading="lazy"
                              className="n17_img01"
                            />
                          </div>
                        </figure>

                        <p className="n17_p02">
                          0G Labs is thrilled to announce the successful conclusion of the
                          global hybrid AI+Web3 &amp; Social Hackathon, a landmark event
                          that we proudly co-hosted with OnePiece Labs and Camp Network.
                          Over the course of three days, this event brought together some
                          of the brightest minds in technology and innovation, both online
                          and on-site in Mountain View, to push the boundaries of what&apos;s
                          possible in the realms of AI and Web3.
                        </p>

                        <h2 className="n17_h2_01">Event Format</h2>
                        <p className="n17_p03">
                          The hackathon was conducted in a hybrid format, allowing
                          participants from around the globe to join online or on-site in
                          Mountain View. This inclusive approach enabled global
                          participation, fostering a diverse and vibrant community of
                          innovators, all eager to leverage 0G technology in their
                          projects.
                        </p>

                        <h2 className="n17_h2_02">Event Statistics</h2>
                        <ul role="list" className="n17_list01">
                          <li className="n17_list01_item01">
                            <strong>Registrations</strong>: 827
                          </li>
                          <li className="n17_list01_item02">
                            <strong>Teams Formed</strong>: 133
                          </li>
                          <li className="n17_list01_item03">
                            <strong>Projects Submitted</strong>: 48
                          </li>
                        </ul>

                        <p className="n17_p04">
                          To ensure a smooth and enjoyable experience for on-site hackers,
                          we provided an array of amenities, including food and drinks,
                          swag bags, blankets, mouthwash, toothpaste and brushes,
                          sanitizers, power supplies, raffle prizes, and more. These
                          efforts ensured that participants could focus on their projects
                          without any distractions.
                        </p>

                        <figure className="n17_fig02 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig02_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fcdd_Uj7R6Xq3EeUHDU5FmolbBOQsGU.avif"
                              loading="lazy"
                              className="n17_img02"
                            />
                          </div>
                        </figure>

                        <h2 className="n17_h2_03">Hackathon Track Overview</h2>
                        <p className="n17_p05">
                          The hackathon featured two primary tracks: AI+Web3 (0G) and Web3
                          Social (Camp Network), each showcasing a remarkable array of
                          innovative projects.
                        </p>

                        <h3 className="n17_h3_01">AI+Web3 Track</h3>
                        <p className="n17_p06">
                          The AI+Web3 track saw participation from 25 teams, all leveraging
                          0G technology and deploying their solutions on the 0G platform.
                          This track highlighted the creative and collaborative spirit of
                          the participants, demonstrating the potential of AI-integrated
                          blockchain applications.
                        </p>

                        <h3 className="n17_h3_02">Web3 Social Track</h3>
                        <p className="n17_p07">
                          The Web3 Social track attracted 23 teams, all of which built and
                          deployed their projects on the Camp Network. This track
                          emphasized the creative and collaborative spirit of the
                          participants, showcasing the potential of social applications
                          within the Web3 ecosystem.
                        </p>

                        <h2 className="n17_h2_04">Technical Support</h2>
                        <p className="n17_p08">
                          Leading up to the hackathon, 0G organized insightful workshops
                          focused on deploying on our platform, which proved to be
                          immensely beneficial for the participants. Throughout the event,
                          our technical support teams were highly responsive and
                          effectively addressed the hackers&apos; technical queries, ensuring
                          a smooth and productive experience.
                        </p>

                        <h2 className="n17_h2_05">Final Demo Day</h2>
                        <p className="n17_p09">
                          On the final demo day, 20 selected teams presented their projects
                          to a panel of judges. Ultimately, 10 teams emerged as winners in
                          the AI+Web3 and Social tracks. These teams were selected for
                          their compelling use cases and effective utilization of 0G&apos;s
                          decentralized application layer (DA layer) and storage nodes, or
                          Camp Network’s decentralized social infrastructure and community
                          engagement tools.
                        </p>

                        <h3 className="n17_h3_03">Winners</h3>
                        <p className="n17_p10">
                          <strong>AI+Web3 Track (0G):</strong>
                        </p>

                        <ul role="list" className="n17_list02">
                          <li className="n17_list02_item01">
                            <a href="https://devfolio.co/projects/smarter-contract-c5a2">
                              <strong>Smarter Contract</strong>
                            </a>{' '}
                            - <strong>$20,000</strong>
                          </li>
                          <li className="n17_list02_item02">
                            Revolutionizing smart contracts with AI integration for enhanced
                            security and efficiency.
                          </li>
                        </ul>

                        <figure className="n17_fig03 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig03_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fd0f_7rFiVnNZQZfTMAK1DlNLU25Mn54.avif"
                              loading="lazy"
                              className="n17_img03"
                            />
                          </div>
                        </figure>

                        <ul role="list" className="n17_list03">
                          <li className="n17_list03_item01">
                            <a href="https://devfolio.co/projects/usopp-9e42">
                              <strong>Usopp</strong>
                            </a>{' '}
                            - <strong>$12,000</strong>
                          </li>
                          <li className="n17_list03_item02">
                            An innovative AI-driven platform for decentralized storytelling
                            and content creation.
                          </li>
                        </ul>

                        <figure className="n17_fig04 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig04_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fce0_rhwKsJw2X38dl76hVAC5VyYcIM.avif"
                              loading="lazy"
                              className="n17_img04"
                            />
                          </div>
                        </figure>

                        <ul role="list" className="n17_list04">
                          <li className="n17_list04_item01">
                            <a href="https://devfolio.co/projects/blockchain-of-health-d1f0">
                              <strong>BlockchainHealth</strong>
                            </a>{' '}
                            - <strong>$8,000</strong>
                          </li>
                          <li className="n17_list04_item02">
                            Leveraging blockchain and AI for secure and transparent health
                            data management.
                          </li>
                        </ul>

                        <figure className="n17_fig05 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig05_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fce3_s8uYJuGCcZTMOlV9qB4LI61x3E.avif"
                              loading="lazy"
                              className="n17_img05"
                            />
                          </div>
                        </figure>

                        <ul role="list" className="n17_list05">
                          <li className="n17_list05_item01">
                            <a href="https://devfolio.co/projects/pmnetwork-f979">
                              <strong>2PM.Network</strong>
                            </a>{' '}
                            - <strong>$6,000</strong>
                          </li>
                          <li className="n17_list05_item02">
                            A cutting-edge AI platform for predictive market analysis and
                            blockchain insights.
                          </li>
                        </ul>

                        <figure className="n17_fig06 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig06_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fd07_sdLFl21Da5eppmt7KZFGdcq6GM.avif"
                              loading="lazy"
                              className="n17_img06"
                            />
                          </div>
                        </figure>

                        <ul role="list" className="n17_list06">
                          <li className="n17_list06_item01">
                            <a href="https://devfolio.co/projects/xchange-e16c">
                              <strong>XChange</strong>
                            </a>{' '}
                            - <strong>$4,000</strong>
                          </li>
                          <li className="n17_list06_item02">
                            Simplifying cross-border transactions using AI and blockchain
                            technology.
                          </li>
                        </ul>

                        <figure className="n17_fig07 w-richtext-align-center w-richtext-figure-type-image">
                          <div className="n17_fig07_inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb61e4643aad24fd12_DB4oAAE0EE1thtQVygK8nlrlBJA.avif"
                              loading="lazy"
                              className="n17_img07"
                            />
                          </div>
                        </figure>

                        <ul role="list" className="n17_list07">
                          <li className="n17_list07_item01">
                            <br />
                          </li>
                        </ul>

                        <p className="n17_p11">
                          <strong>Social Track (Camp):</strong>
                        </p>

                        <ul role="list" className="n17_list08">
                          <li className="n17_list08_item01">
                            <a href="https://devfolio.co/projects/etherwheels-9b5c">
                              <strong>EtherWheels</strong>
                            </a>{' '}
                            - <strong>$20,000</strong>
                          </li>
                          <li className="n17_list08_item02">
                            Creating a decentralized ride-sharing platform powered by
                            blockchain.
                          </li>
                          <li className="n17_list08_item03">
                            <a href="https://devfolio.co/projects/myxosaitmc-89a8">
                              <strong>MyXosAI</strong>
                            </a>{' '}
                            - <strong>$12,000</strong>
                          </li>
                          <li className="n17_list08_item04">
                            An AI-powered social network focusing on personalized user
                            experiences and privacy.
                          </li>
                          <li className="n17_list08_item05">
                            <a href="https://devfolio.co/projects/monetizado-9221">
                              <strong>Monetizado</strong>
                            </a>{' '}
                            - <strong>$8,000</strong>
                          </li>
                          <li className="n17_list08_item06">
                            A platform enabling content creators to monetize their work
                            through blockchain and AI.
                          </li>
                          <li className="n17_list08_item07">
                            <a href="https://devfolio.co/projects/innohunt-8472">
                              <strong>InnoHunt</strong>
                            </a>{' '}
                            - <strong>$6,000</strong>
                          </li>
                          <li className="n17_list08_item08">
                            A community-driven platform for discovering and funding
                            innovative social projects.
                          </li>
                          <li className="n17_list08_item09">
                            <a href="https://devfolio.co/projects/healthchain-f71b">
                              <strong>HealthChain</strong>
                            </a>{' '}
                            - <strong>$4,000</strong>
                          </li>
                          <li className="n17_list08_item10">
                            Improving healthcare accessibility and transparency through
                            decentralized technology.
                          </li>
                        </ul>

                        <h3 className="n17_h3_04">Community Award</h3>
                        <ul role="list" className="n17_list09">
                          <li className="n17_list09_item01">
                            <a href="https://devfolio.co/projects/ngpu-3042">
                              <strong>NGPU</strong>
                            </a>{' '}
                            - A Web3 decentralized AI computing power network and a DEPIN
                            dApp in tech architecture.
                          </li>
                        </ul>

                        <p className="n17_p12">
                          Besides all the winners above, 0G also prepared specific roles
                          ‘<em>0gwizards</em>’ for hackers joining their Discord. We would
                          like to extend our heartfelt thanks to all our hosts, sponsors,
                          and community partners for making this hackathon possible. Your
                          support was invaluable in creating an environment where
                          innovation could thrive.
                        </p>

                        <p className="n17_p13">
                          Thank you to everyone who joined us in this incredible journey.
                          We are excited to continue building something amazing together.
                          Stay tuned for future events and innovations!
                        </p>

                        <h2 className="n17_h2_06">About the Hosts</h2>

                        <h3 className="n17_h3_05">0G</h3>
                        <p className="n17_p14">
                          0G is a leader in Web3 technology, building decentralized
                          applications that empower users and creators with innovative
                          solutions.
                        </p>
                        <ul role="list" className="n17_list10">
                          <li className="n17_list10_item01">
                            <strong>X</strong>: <a href="https://twitter.com/0G_labs">@0G_labs</a>
                          </li>
                          <li className="n17_list10_item02">
                            <strong>Discord</strong>:{' '}
                            <a href="https://discord.com/invite/0glabs">Join 0G Labs Discord</a>
                          </li>
                        </ul>

                        <h3 className="n17_h3_06">OnePiece Labs</h3>
                        <p className="n17_p15">
                          OnePiece Labs is dedicated to fostering innovation and growth in
                          the blockchain and AI sectors. Through their comprehensive
                          support system, they help startups navigate from ideation to
                          scaling.
                        </p>
                        <ul role="list" className="n17_list11">
                          <li className="n17_list11_item01">
                            <strong>X</strong>:{' '}
                            <a href="https://twitter.com/OnePieceLabs">@OnePieceLabs</a>
                          </li>
                          <li className="n17_list11_item02">
                            <strong>TG</strong>: OnePieceLabs
                          </li>
                        </ul>

                        <h3 className="n17_h3_07">Camp Network</h3>
                        <p className="n17_p16">
                          Camp Network connects and supports tech communities globally,
                          providing a platform for collaboration, learning, and growth.
                        </p>
                        <ul role="list" className="n17_list12">
                          <li className="n17_list12_item01">
                            <strong>X</strong>: <a href="https://twitter.com/Camp_L2">@Camp_L2</a>
                          </li>
                          <li className="n17_list12_item02">
                            <strong>Discord</strong>:{' '}
                            <a href="https://t.co/3KhSq90Xc7">Join Camp Network Discord</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="n17_section_filter section_filter">
            <div className="n17_blog_more-blog blog_more-blog">
              <h5 className="n17_related-heading">Related news:</h5>
            </div>
          </section>

          <div className="n17_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="n17_cms-grid_list cms-grid_list n17_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="n17_cms-grid_item cms-grid_item n17_w-dyn-item w-dyn-item"
              >
                <a
                  href="/blog/ai-alignment-node-rewards-distribution-schedule-eligibility"
                  className="n17_cms-grid_content-wrapper cms-grid_content-wrapper n17_is-blog is-blog n17_w-inline-block w-inline-block"
                >
                  <div className="n17_blog_content blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png 1147w"
                      className="n17_cms-grid_image cms-grid_image"
                    />
                    <div className="n17_spacer-medium spacer-medium n17_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="n17_blog_contnet-wrapper blog_contnet-wrapper">
                      <div className="n17_blog_meta-wrapper2 blog_meta-wrapper">
                        <div
                          className="n17_blog_meta-category2"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n17_icon-embed-custom icon-embed-custom n17_w-embed w-embed">
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
                        <div className="n17_blog_meta-date2">Sep 21, 2025</div>
                      </div>
                      <div className="n17_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="n17_heading-style-h5 heading-style-h5">
                        AI Alignment Node Rewards: Distribution Schedule &amp;
                        Eligibility
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n17_cms-grid_item2 cms-grid_item n17_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/explaining-the-0g-token-airdrop"
                  className="n17_cms-grid_content-wrapper2 cms-grid_content-wrapper n17_is-blog2 is-blog n17_w-inline-block2 w-inline-block"
                >
                  <div className="n17_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png 1920w"
                      className="n17_cms-grid_image2 cms-grid_image"
                    />
                    <div className="n17_spacer-medium2 spacer-medium n17_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="n17_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="n17_blog_meta-wrapper3 blog_meta-wrapper">
                        <div
                          className="n17_blog_meta-category3"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n17_icon-embed-custom2 icon-embed-custom n17_w-embed2 w-embed">
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
                        <div className="n17_blog_meta-date3">Sep 16, 2025</div>
                      </div>
                      <div className="n17_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="n17_heading-style-h5-2 heading-style-h5">
                        Explaining the 0G Token Airdrop
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n17_cms-grid_item3 cms-grid_item n17_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/ethcc-cannes-recap"
                  className="n17_cms-grid_content-wrapper3 cms-grid_content-wrapper n17_is-blog3 is-blog n17_w-inline-block3 w-inline-block"
                >
                  <div className="n17_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif 1920w"
                      className="n17_cms-grid_image3 cms-grid_image"
                    />
                    <div className="n17_spacer-medium3 spacer-medium n17_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="n17_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="n17_blog_meta-wrapper4 blog_meta-wrapper">
                        <div
                          className="n17_blog_meta-category4"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n17_icon-embed-custom3 icon-embed-custom n17_w-embed3 w-embed">
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
                        <div className="n17_blog_meta-date4">Jul 14, 2025</div>
                      </div>
                      <div className="n17_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="n17_heading-style-h5-3 heading-style-h5">
                        Flow, Build, Scale: Recapping 0G’s Week at EthCC Cannes
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="n17_cms-grid_item4 cms-grid_item n17_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-art-contest"
                  className="n17_cms-grid_content-wrapper4 cms-grid_content-wrapper n17_is-blog4 is-blog n17_w-inline-block4 w-inline-block"
                >
                  <div className="n17_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif 1200w"
                      className="n17_cms-grid_image4 cms-grid_image"
                    />
                    <div className="n17_spacer-medium4 spacer-medium n17_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="n17_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="n17_blog_meta-wrapper5 blog_meta-wrapper">
                        <div
                          className="n17_blog_meta-category5"
                          fs-list-field="category"
                        >
                          News
                        </div>
                        <div className="n17_icon-embed-custom4 icon-embed-custom n17_w-embed4 w-embed">
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
                        <div className="n17_blog_meta-date5">Jun 17, 2025</div>
                      </div>
                      <div className="n17_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="n17_heading-style-h5-4 heading-style-h5">
                        The Panda’s Call: 0G Art Contest
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

