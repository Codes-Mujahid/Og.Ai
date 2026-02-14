import React, { useState } from 'react'
import './Tech02.css'

export default function Tech02() {
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
      'Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model'
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
    <div className="t02_container">
      <div className="t02_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t02_hide hide">
          <div className="t02_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t02_socialshare-title">
            Beyond Centralized Limits: Unpacking the First Globally Distributed
            100B+ Parameter AI Model
          </div>
        </div>

        <main className="t02_main-wrapper main-wrapper">
          <section className="t02_section_hero section_hero t02_is-vertical is-vertical">
            <div className="t02_padding-global padding-global">
              <div className="t02_container-large container-large">
                <div className="t02_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t02_hero_bg-image1 hero_bg-image w-condition-invisible"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532b040d8a949034d5014_Tech%20Breakthrough_100B%20Paremeter%20model%20-%20MAIN.avif"
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532b040d8a949034d5014_Tech%20Breakthrough_100B%20Paremeter%20model%20-%20MAIN-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532b040d8a949034d5014_Tech%20Breakthrough_100B%20Paremeter%20model%20-%20MAIN-p-800.avif 800w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532b040d8a949034d5014_Tech%20Breakthrough_100B%20Paremeter%20model%20-%20MAIN-p-1080.avif 1080w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532b040d8a949034d5014_Tech%20Breakthrough_100B%20Paremeter%20model%20-%20MAIN.avif 3942w"
                    className="t02_hero_bg-image2 hero_bg-image"
                  />
                  <div className="t02_hero_bg-gradient hero_bg-gradient t02_is-blog is-blog"></div>
                </div>

                <div className="t02_hero_content-component hero_content-component t02_is-vertical2 is-vertical">
                  <div className="t02_blog_meta-wrapper blog_meta-wrapper t02_is-white is-white">
                    <div className="t02_blog_meta-category">Tech</div>
                    <div className="t02_icon-embed-custom1 icon-embed-custom w-embed">
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
                    <div className="t02_blog_meta-date">Aug 7, 2025</div>
                    <div className="t02_icon-embed-custom2 icon-embed-custom w-embed">
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
                    <div className="t02_blog_meta-empty w-dyn-bind-empty"></div>
                  </div>

                  <div className="t02_spacer-small spacer-small"></div>

                  <div className="t02_max-width-large max-width-large t02_text-align-center text-align-center">
                    <h1 className="t02_heading-style-h3 heading-style-h3">
                      Beyond Centralized Limits: Unpacking the First Globally
                      Distributed 100B+ Parameter AI Model
                    </h1>
                  </div>

                  <div className="t02_spacer-small2 spacer-small"></div>

                  <div className="t02_blog_button-wrapper blog_button-wrapper">
                    <a
                      onClick={handleCopy}
                      href="#"
                      className="t02_link-icon-light link-icon-light t02_is-static is-static w-inline-block"
                    >
                      <div className="t02_icon-embed-xsmall1 icon-embed-xsmall w-embed">
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
                      className="t02_link-icon-light2 link-icon-light t02_is-static2 is-static w-inline-block"
                    >
                      <div className="t02_icon-embed-xsmall2 icon-embed-xsmall w-embed">
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
                      className="t02_link-icon-light3 link-icon-light t02_is-static3 is-static w-inline-block"
                    >
                      <div className="t02_icon-embed-xsmall3 icon-embed-xsmall w-embed">
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

          <section className="t02_section_legal-content section_legal-content">
            <div className="t02_padding-global2 padding-global">
              <div className="t02_padding-section-medium padding-section-medium">
                <div className="t02_container-small container-small">
                  <div className="t02_legal-content_outer">
                    <div className="t02_legal-content_component legal-content_component">
                      <div className="t02_blog-rich-text blog-rich-text w-richtext">
                        <p>
                          While the world was still catching its breath from the
                          release of Intellect-1, a 10B parameter decentralized
                          model that made headlines earlier this year,{' '}
                          <a href="https://www.forbes.com/sites/digital-assets/2025/08/01/ai-training-gets-10x-faster-95-cheaper-with-decentralized-strategy/">
                            0G Labs raised the bar
                          </a>{' '}
                          by an order of magnitude.
                        </p>
                        <p>
                          This monumental achievement was based on{' '}
                          <a href="https://arxiv.org/pdf/2506.21263">
                            DiLoCoX
                          </a>
                          , a groundbreaking framework that has successfully
                          trained a 107B parameter foundation model under a
                          decentralized network environment with constrained
                          bandwidth (e.g., 1gbps across segregated clusters).
                          The training process achieves 357x greater
                          communication efficiency than legacy approaches like
                          AllReduce.
                        </p>
                        <p>
                          DiLoCoX is the brainchild of Michael Heinrich (0G
                          Co-Founder and CEO), Ming Wu (0G CTO), and other
                          leading experts in the fields of AI and distributed
                          networks. Here’s a rundown of our novel approach to
                          AI model training, and what it means for the future of
                          decentralized intelligence.
                        </p>
                        <h2>
                          DiLoCoX: A New Framework for Decentralized Model
                          Training
                        </h2>
                        <p>
                          Developed in collaboration with China Mobile, the
                          world’s largest mobile network operator by subscriber
                          count, our{' '}
                          <a href="https://arxiv.org/pdf/2506.21263">
                            new research paper
                          </a>{' '}
                          outlines DiLoCoX (short for Distributed
                          Low-Communication Exchange). This novel framework is
                          designed to solve one of the biggest barriers to
                          decentralized AI: the high communication overhead
                          required to train large models across fully
                          distributed infrastructure.
                        </p>
                        <p>
                          Instead of relying on centralized superclusters with
                          ultra-fast connectivity, DiLoCoX introduces a modular
                          architecture optimized for real-world bandwidth
                          constraints.
                        </p>
                        <p>Key innovations include:</p>
                        <ul role="list">
                          <li>
                            <strong>Pipeline Parallelism</strong>, which splits
                            models across nodes and overlaps computation with
                            communication to maximize utilization.
                          </li>
                          <li>
                            <strong>Dual Optimizer Policy</strong>, allowing
                            nodes to perform local updates while still aligning
                            with global model objectives.
                          </li>
                          <li>
                            <strong>One-Step-Delay Overlap</strong>, enabling
                            training to continue without waiting for all nodes
                            to sync, reducing idle time.
                          </li>
                          <li>
                            <strong>Adaptive Gradient Compression</strong>,
                            which reduces the size of transmitted updates while
                            preserving accuracy.
                          </li>
                        </ul>
                        <p>
                          These techniques make it possible to train a model at
                          a scale of over 100B parameters with minimal
                          degradation in convergence — all within an accessible,
                          bandwidth-limited environment.
                        </p>
                        <h2>From Private Models to Public Goods</h2>
                        <p>
                          When PrimeIntellect released Intellect-1 earlier this
                          year, it was rightly celebrated as a major step
                          forward for decentralized AI. But while it proved that
                          decentralized model training is possible, 0G’s work
                          with DiLoCoX shows just how far that concept can go in
                          terms of scale, performance, and in how these systems
                          can be owned and accessed.
                        </p>
                        <p>Here’s how the 0G model stands apart:</p>
                        <ul role="list">
                          <li>
                            <strong>Unrivaled performance at scale, </strong>
                            with DiLoCoX achieving 10x Intellect-1’s model size
                            and 357x more communication efficiency, setting a
                            new benchmark for decentralized AI training.
                          </li>
                          <li>
                            <strong>
                              Cutting-edge AI on everyday infrastructure,{' '}
                            </strong>
                            with DiLoCoX trained on standard 1gbps networks. By
                            combining compression, pipeline parallelism, and
                            asynchronous updates to unlock high-throughput
                            training, DiLoCoX proves that frontier-scale model
                            development no longer requires centralized
                            superclusters.
                          </li>
                          <li>
                            <strong>Verifiable, democratic model training</strong>{' '}
                            with full transparency into data, weights, and
                            convergence history. Even contributors with basic
                            bandwidth and compute can join training clusters and
                            shape the future of decentralized AI.
                          </li>
                          <li>
                            <strong>Composable, responsible AI models</strong>,
                            where agent developers can plug into open-source
                            models rather than rely on black-box APIs, with 0G
                            powering every layer of the AI stack.
                          </li>
                        </ul>
                        <p>
                          In short, with DiLoCoX 0G is proving that the future
                          of AI doesn’t belong to the few who control the
                          infrastructure, but to the global community that
                          chooses to build it together.
                        </p>
                        <h2>Help Build the Open AI Economy</h2>
                        <p>
                          By showing that it’s possible to train frontier-scale
                          models outside the walls of centralized infrastructure,
                          0G has set a new precedent for what open, verifiable
                          AI can look like in practice. DiLoCoX isn’t just a
                          framework for scaling; it’s a foundation for
                          participation, ownership, and composability. It gives
                          builders, researchers, and communities the tools to
                          create and coordinate AI in ways that were never
                          possible before.
                        </p>
                        <p>
                          As we move toward mainnet, the implications will only
                          grow. From community-funded training campaigns to
                          fully tokenized AI agents operating onchain, 0G is
                          laying the groundwork for a future where anyone can
                          help shape, own, and benefit from the AI they interact
                          with. The infrastructure is now ready, thanks to 0G.
                          The only question is what you’ll choose to build with
                          it.
                        </p>
                        <p>‍</p>
                        <p>
                          <em>Learn more about DiLoCoX </em>
                          <a href="https://arxiv.org/abs/2506.21263">
                            <em>here</em>
                          </a>
                        </p>
                        <p>
                          <em>Interested in building on 0G? Reach out here</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t02_section_filter section_filter">
            <div className="t02_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t02_w-dyn-list w-dyn-list">
            <div className="t02_cms-grid_list cms-grid_list w-dyn-items" role="list">
              <div className="t02_cms-grid_item1 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t02_cms-grid_content-wrapper1 cms-grid_content-wrapper t02_is-blog2 is-blog w-inline-block"
                >
                  <div className="t02_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t02_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t02_spacer-medium spacer-medium t02_hide-mobile-portrait hide-mobile-portrait"></div>
                    <div className="t02_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t02_blog_meta-wrapper2 blog_meta-wrapper">
                        <div className="t02_related_category1">Tech</div>
                        <div className="t02_icon-embed-custom3 icon-embed-custom w-embed">
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
                        <div className="t02_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t02_spacer-xmedium spacer-xmedium"></div>
                      <h3 className="t02_heading-style-h5 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t02_cms-grid_item2 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t02_cms-grid_content-wrapper2 cms-grid_content-wrapper t02_is-blog3 is-blog w-inline-block"
                >
                  <div className="t02_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t02_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t02_spacer-medium2 spacer-medium t02_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t02_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t02_blog_meta-wrapper3 blog_meta-wrapper">
                        <div className="t02_related_category2">Tech</div>
                        <div className="t02_icon-embed-custom4 icon-embed-custom w-embed">
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
                        <div className="t02_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t02_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t02_heading-style-h5 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t02_cms-grid_item3 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  aria-current="page"
                  className="t02_cms-grid_content-wrapper3 cms-grid_content-wrapper t02_is-blog4 is-blog w-inline-block w--current"
                >
                  <div className="t02_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t02_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t02_spacer-medium3 spacer-medium t02_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t02_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t02_blog_meta-wrapper4 blog_meta-wrapper">
                        <div className="t02_related_category3">Tech</div>
                        <div className="t02_icon-embed-custom5 icon-embed-custom w-embed">
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
                        <div className="t02_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t02_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t02_heading-style-h5 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div className="t02_cms-grid_item4 cms-grid_item w-dyn-item" role="listitem">
                <a
                  href="https://0g.ai/blog/0g-storage"
                  className="t02_cms-grid_content-wrapper4 cms-grid_content-wrapper t02_is-blog5 is-blog w-inline-block"
                >
                  <div className="t02_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t02_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t02_spacer-medium4 spacer-medium t02_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t02_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t02_blog_meta-wrapper5 blog_meta-wrapper">
                        <div className="t02_related_category4">Tech</div>
                        <div className="t02_icon-embed-custom6 icon-embed-custom w-embed">
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
                        <div className="t02_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t02_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t02_heading-style-h5 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t02_copy-toast ${showToast ? 't02_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}

