import React, { useState } from 'react'
import './Industry03.css'

export default function Industry03() {
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
    const text = encodeURIComponent('How Web3 and AI can work together')
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
    <div className="i03_container">
      <div className="i03_pageWrapper page-wrapper">
        <div fs-socialshare-element="content" className="i03_socialShareContent hide">
          <div className="i03_socialShareLead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="i03_socialShareTitle">
            How Web3 and AI can work together
          </div>
        </div>

        <main className="i03_mainWrapper main-wrapper">
          <section className="i03_sectionHero section_hero is-vertical">
            <div className="i03_paddingGlobal padding-global">
              <div className="i03_containerLarge container-large">
                <div className="i03_heroBgWrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="i03_heroBgImage hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="i03_heroBgImageDyn hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="i03_heroBgGradient hero_bg-gradient is-blog"></div>
                </div>

                <div className="i03_heroContentComponent hero_content-component is-vertical">
                  <div className="i03_blogMetaWrapper blog_meta-wrapper is-white">
                    <div className="i03_blogMetaDate">Sep 16, 2024</div>
                    <div className="i03_blogMetaDot icon-embed-custom w-embed">
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
                    <div className="i03_blogMetaCategory">Industry</div>
                  </div>

                  <div className="i03_spacerSmall spacer-small"></div>

                  <div className="i03_maxWidthLarge max-width-large text-align-center">
                    <h1 className="i03_heading heading-style-h3">
                      How Web3 and AI can work together
                    </h1>
                  </div>

                  <div className="i03_spacerSmall2 spacer-small"></div>

                  <div className="i03_blogButtonWrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="i03_linkIcon link-icon-light is-static w-inline-block"
                    >
                      <div className="i03_iconCopy icon-embed-xsmall w-embed">
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
                      className="i03_linkIcon link-icon-light is-static w-inline-block"
                    >
                      <div className="i03_iconLinkedin icon-embed-xsmall w-embed">
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
                      className="i03_linkIcon link-icon-light is-static w-inline-block"
                    >
                      <div className="i03_iconX icon-embed-xsmall w-embed">
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

          <section className="i03_sectionLegalContent section_legal-content">
            <div className="i03_paddingGlobal2 padding-global">
              <div className="i03_paddingSection padding-section-medium">
                <div className="i03_containerSmall container-small">
                  <div className="i03_legalContentOuter">
                    <div className="i03_legalContentComponent legal-content_component">
                      <div className="i03_blogRichText blog-rich-text w-richtext">
                        <p>
                          Web3 x AI has turned into quite a hot topic recently;
                          my inbox has been spammed with newsletters, event
                          invitations, and exciting updates from projects
                          building in the space. There are new visionaries
                          hosting podcasts promising us that this trend is real,
                          and here to stay.&nbsp;
                        </p>
                        <p>
                          All of this hype raises the question:{' '}
                          <strong>what is Crypto x AI?&nbsp;</strong>
                        </p>
                        <p>
                          This post is an attempt to answer that question, while
                          also covering three key trends we&apos;re bullish on:
                          &nbsp;
                        </p>
                        <ul role="list">
                          <li>Tokenization for improved data,&nbsp;</li>
                          <li>Decentralized compute networks, and&nbsp;</li>
                          <li>Anti-monopolization via decentralization.&nbsp;</li>
                        </ul>
                        <p>
                          The way we see it, Crypto x AI is the combination of
                          places where web3 can enable smarter, better, and
                          faster AI, the places where we in the blockchain world
                          can work with the AI world to build things that can’t
                          be achieved without Web3.&nbsp;
                        </p>
                        <p>
                          To see where this overlap exists, we should focus on
                          what Web3 enables: aligning financial incentives among
                          distributed and untrusted parties. With this, we can
                          refine our question: where does the AI world require
                          the trustless, transparent, or more aligned incentive
                          structures that we in Web3 can make possible?
                        </p>
                        <p>Well, to get an AI model to work, you need three things:</p>
                        <ul role="list">
                          <li>A model architecture,&nbsp;</li>
                          <li>Data to feed into that model, and&nbsp;</li>
                          <li>Compute (GPUs) to run that model on.&nbsp;</li>
                        </ul>
                        <p>
                          So, when we discuss enabling superior incentive
                          systems, we should aim to improve these three
                          categories. This is already becoming a reality in
                          three areas:
                        </p>
                        <ol role="list">
                          <li>Tokenization for improved data,&nbsp;</li>
                          <li>Decentralized compute networks, and&nbsp;</li>
                          <li>Anti-monopolization via decentralization.&nbsp;</li>
                        </ol>
                        <p>
                          We’ll explain why you should be working towards
                          improving this as well.
                        </p>
                        <h2>Tokenization For Improved Data</h2>
                        <p>
                          When we think about tokenization and AI, one of the
                          things we’re most bullish on is using tokenization to
                          boost the financial structures for acquiring quality
                          data. One of the most important ways to improve model
                          quality is by gathering more high-quality data.&nbsp;
                          This is where we believe that decentralized
                          data-gathering protocols have a decisive edge.
                          Collection and labeling tasks scale very well to
                          decentralized labor pools, and we see a world where
                          the data to train foundation models could come from a
                          collection of individuals rather than corporate data
                          vaults. When you think about what it takes to label
                          data, it’s fairly simple: anyone with a cell phone and
                          internet connection can start labeling.&nbsp;
                        </p>
                        <p>
                          Additionally, by using trustless incentive systems, it
                          becomes possible to reward data providers in a way
                          that is correlated with the value of the data that
                          they provide, which means that you can build datasets
                          that are not just big but also universally
                          high-quality, which leads to better models.
                        </p>
                        <p>
                          Several decentralized protocols are building out the
                          tech to have decentralized workforces solve these
                          problems while correlating their economic incentives
                          directly to the value added by their contributed data.
                          At 0G, we’re excited about this trend, and we’re
                          helping to accelerate it with our{' '}
                          <a href="https://0g.ai/blog/0g-storage">
                            next-generation data storage layer
                          </a>
                          . This infrastructure ensures that decentralized data
                          protocols can seamlessly deliver high-quality data to
                          AI companies, offering the speed and performance
                          required to build and train AI models effectively.
                        </p>
                        <h2>Decentralized Compute: Costs down, Capabilities Up</h2>
                        <p>
                          One of the highest costs of AI is the immense computing
                          power and energy required to train and serve
                          models.&nbsp;
                        </p>
                        <p>
                          For example, <a href="https://llama.meta.com/">Meta’s LLAMA3</a>{' '}
                          took 16,000 H100 GPUs 30 days to train. This is a $1B
                          investment in computing hardware (GPUs+Network chips),
                          and every month of training costs $20M in energy,
                          burning 1.6 billion kWh. That’s equivalent to using a
                          quarter of the power of the most powerful nuclear
                          reactor ever built for a month at a time to train a
                          single model. This is representative of a growing
                          problem that’s also backed by statistics. The{' '}
                          <a href="https://www.iea.org/">
                            International Energy Agency
                          </a>{' '}
                          (IEA) estimates that we’ll need about{' '}
                          <a href="https://www.forbes.com/sites/bethkindig/2024/06/20/ai-power-consumption-rapidly-becoming-mission-critical/">
                            10% of all energy produced in the U.S.
                          </a>{' '}
                          to meet the booming AI demand. This is a massive
                          increase in our electricity consumption, and we’re
                          not ready for it.&nbsp;
                        </p>
                        <p>
                          This is a massive problem, but it leads to a place
                          where the decentralization of AI compute can help,
                          both in terms of a) electricity and b) AI chips. In
                          fact, much of the additional energy that we need is
                          already out there: The University of Cambridge
                          estimates that annualized bitcoin mining uses{' '}
                          <a href="https://ccaf.io/cbnsi/cbeci">148 TWh</a>,
                          which is substantially more than the existing major
                          clouds. Best of all, it’s cheap: Bitcoin miners
                          typically have 4-10x lower costs for electricity than
                          their centralized counterparts.
                        </p>
                        <p>
                          On the chip supply side, there is room for growth:
                          experts estimate that NVIDIA made between one and ten
                          million enterprise-grade A100/H100 chips in the last 2
                          years, which is not enough to meet the existing demand,
                          let alone what is coming down the pipe. However, the
                          consumer cards miners favor are much more abundant,
                          with 8.1M produced in Q1 2024 alone. These cards in
                          general, have fewer matrix multiply units but can
                          still contribute meaningfully to collecting enough
                          cards to run AI at scale.&nbsp;
                        </p>
                        <p>
                          This adds up to how Web3 infrastructure can help with
                          AI’s massive computing problem: There are many
                          computing arbitrage opportunities out there that are
                          small enough that large companies can&apos;t take
                          advantage of them, but crypto miner-style operations
                          can. Many smaller strategies can scale to
                          $200k-10M/year of compute spend, but not above that.
                          This is perfect for protocols that find ways to
                          construct better incentive systems that bridge the gap
                          between Bitcoin miners and AI companies. We’re also
                          bullish on Proof of Useful Work as a possible
                          solution, which is what our inference serving platform
                          is building towards.&nbsp;
                        </p>
                        <h2>Better AI-Societal Alignment</h2>
                        <p>
                          There is a structural misalignment between the status
                          quo in AI, where a few centralized, monopolistic
                          players (OpenAI, Anthropic, Google, Microsoft)
                          currently control the flow of state-of-the-art models
                          and what is best for our society. Their stated goal is
                          to create Artificial Superintelligence (ASI), meaning
                          a robot that outperforms a human on arbitrary tasks.
                          If this centralized ASI becomes a reality, then it’s
                          a problem for the rest of us, as the robot’s economic
                          output will quickly outstrip our own, leaving the
                          people who run these organizations in a position of
                          incredible power and influence with few checks and
                          balances.&nbsp;
                        </p>
                        <p>
                          The fundamental barrier to competing with these
                          centralized players is economic – they can afford to
                          make multi-billion dollar investments to drive this
                          future, while other players are not able to do so. In
                          previous waves of the internet, a good idea was a good
                          idea; fixed costs to entry were not based on
                          investment in physical infrastructure. Google famously
                          started with{' '}
                          <a href="https://www.cnet.com/tech/services-and-software/take-a-trip-down-memory-lane-to-googles-first-data-center/">
                            servers hosted on laptops in the back of the office
                          </a>
                          . In current AI systems, infrastructure investment is
                          by far the dominant cost, which makes it very hard to
                          break into the market, and easy for incumbents to
                          conspire to suppress innovation.&nbsp;
                        </p>
                        <p>
                          Decentralization can offer a path out of this. We want
                          a future where many different users/ecosystem players
                          can have aligned interests and a way to contribute to
                          training and deploying a model and providing the data,
                          expertise, and compute power to make the best
                          foundation models and inference platforms all exist in
                          a crowdsourced, fairly distributed infrastructure.
                        </p>
                        <figure className="i03_richFigure w-richtext-align-center w-richtext-figure-type-image">
                          <div className="i03_richFigureInner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f6b2034bccd34cb083_8dKT1MYieMe30Jx8ARHKZJOPvnU.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="i03_sectionFilter section_filter">
            <div className="i03_moreBlog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="i03_relatedList w-dyn-list">
            <div role="list" className="i03_relatedItems cms-grid_list w-dyn-items">
              <div role="listitem" className="i03_relatedItem01 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/0g-origin-story"
                  className="i03_relatedLink cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i03_relatedContent01 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682127048db2a15bce078551_PJXpESYIRq7OTB3DRaoo2q18ds.avif"
                      loading="lazy"
                      alt=""
                      className="i03_relatedImage01 cms-grid_image"
                    />
                    <div className="i03_relatedSpacer01 spacer-medium hide-mobile-portrait"></div>
                    <div className="i03_relatedTextWrap01 blog_contnet-wrapper">
                      <div className="i03_relatedMeta01 blog_meta-wrapper">
                        <div className="i03_relatedCategory01">Industry</div>
                        <div className="i03_relatedDot01 icon-embed-custom w-embed">
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
                        <div className="i03_relatedDate01">Mar 26, 2024</div>
                      </div>
                      <div className="i03_relatedSpacerX01 spacer-xmedium"></div>
                      <h3 className="i03_relatedTitle01 heading-style-h5">
                        0G Origin Story
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i03_relatedItem02 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/navigate-web3-s-future-with-0g-key-concepts-and-innovations"
                  className="i03_relatedLink02 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i03_relatedContent02 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6821270465373596cc2f25ed_fo6W7M9bmWAcIxuu8BG3SGCj5Q.avif"
                      loading="lazy"
                      alt=""
                      className="i03_relatedImage02 cms-grid_image"
                    />
                    <div className="i03_relatedSpacer02 spacer-medium hide-mobile-portrait"></div>
                    <div className="i03_relatedTextWrap02 blog_contnet-wrapper">
                      <div className="i03_relatedMeta02 blog_meta-wrapper">
                        <div className="i03_relatedCategory02">Industry</div>
                        <div className="i03_relatedDot02 icon-embed-custom w-embed">
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
                        <div className="i03_relatedDate02">Apr 8, 2024</div>
                      </div>
                      <div className="i03_relatedSpacerX02 spacer-xmedium"></div>
                      <h3 className="i03_relatedTitle02 heading-style-h5">
                        Navigate Web3&apos;s Future with 0G: Key Concepts and
                        Innovations
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i03_relatedItem03 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/6-emerging-key-trends-in-blockchain-technology"
                  className="i03_relatedLink03 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i03_relatedContent03 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ff65373596cc2f2108_pgOLkOIAwPqcTVVofD35xrLYQ.avif"
                      loading="lazy"
                      alt=""
                      className="i03_relatedImage03 cms-grid_image"
                    />
                    <div className="i03_relatedSpacer03 spacer-medium hide-mobile-portrait"></div>
                    <div className="i03_relatedTextWrap03 blog_contnet-wrapper">
                      <div className="i03_relatedMeta03 blog_meta-wrapper">
                        <div className="i03_relatedCategory03">Industry</div>
                        <div className="i03_relatedDot03 icon-embed-custom w-embed">
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
                        <div className="i03_relatedDate03">May 23, 2024</div>
                      </div>
                      <div className="i03_relatedSpacerX03 spacer-xmedium"></div>
                      <h3 className="i03_relatedTitle03 heading-style-h5">
                        6 Emerging Key Trends in Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="i03_relatedItem04 cms-grid_item w-dyn-item">
                <a
                  href="https://0g.ai/blog/the-comprehensive-guide-to-data-availability-in-blockchain-technology"
                  className="i03_relatedLink04 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="i03_relatedContent04 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fe2d09deedb577d993_JUdhw2M9qC3h30iV8tWNNsPJgA.avif"
                      loading="lazy"
                      alt=""
                      className="i03_relatedImage04 cms-grid_image"
                    />
                    <div className="i03_relatedSpacer04 spacer-medium hide-mobile-portrait"></div>
                    <div className="i03_relatedTextWrap04 blog_contnet-wrapper">
                      <div className="i03_relatedMeta04 blog_meta-wrapper">
                        <div className="i03_relatedCategory04">Industry</div>
                        <div className="i03_relatedDot04 icon-embed-custom w-embed">
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
                        <div className="i03_relatedDate04">Jun 6, 2024</div>
                      </div>
                      <div className="i03_relatedSpacerX04 spacer-xmedium"></div>
                      <h3 className="i03_relatedTitle04 heading-style-h5">
                        The Comprehensive Guide to Data Availability in
                        Blockchain Technology
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </main>

        <div className={`i03_copy-toast ${showToast ? 'i03_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
