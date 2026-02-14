import React, { useEffect, useState } from 'react'
import './Tech27.css'

export default function Tech27() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t27-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t27-webflow', 'true')
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
      'Check out this insightful blog post: This Week in Onchain AI Ep. 1 Recap'
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
    <div className="t27_container">
      <div className={`t27_copy-toast ${showToast ? 't27_show' : ''}`}>Link copied</div>

      <div className="t27_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t27_div002 hide">
          <div className="t27_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t27_div004">This Week in Onchain AI Ep. 1 Recap</div>
        </div>

        <main className="t27_main-wrapper main-wrapper">
          <section className="t27_section_hero section_hero is-vertical">
            <div className="t27_div005 padding-global">
              <div className="t27_div006 container-large">
                <div className="t27_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t27_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t27_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t27_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t27_div008 hero_content-component is-vertical">
                  <div className="t27_div009 blog_meta-wrapper is-white">
                    <div className="t27_div010">Tech</div>
                    <div className="t27_div011 icon-embed-custom w-embed">
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
                    <div className="t27_div012">Feb 20, 2025</div>
                    <div className="t27_div013 icon-embed-custom w-embed">
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
                    <div className="t27_div014">0g</div>
                  </div>

                  <div className="t27_div015 spacer-small"></div>

                  <div className="t27_div016 max-width-large text-align-center">
                    <h1 className="t27_heading heading-style-h3">
                      This Week in Onchain AI Ep. 1 Recap
                    </h1>
                  </div>

                  <div className="t27_div017 spacer-small"></div>

                  <div className="t27_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t27_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t27_div019 icon-embed-xsmall w-embed">
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
                      className="t27_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t27_div020 icon-embed-xsmall w-embed">
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
                      className="t27_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t27_div021 icon-embed-xsmall w-embed">
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

          <section className="t27_section_legal-content section_legal-content">
            <div className="t27_div022 padding-global">
              <div className="t27_div023 padding-section-medium">
                <div className="t27_div024 container-small">
                  <div className="t27_div025">
                    <div className="t27_div026 legal-content_component">
                      <div className="t27_div027 blog-rich-text w-richtext">
                        <p>
                          Yesterday we launched{' '}
                          <a
                            href="https://x.com/0G_labs/status/1892024949851717738"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <em>This Week on Onchain AI</em>
                          </a>
                          , a new X Space series where we dive deep into the world of
                          Decentralized AI (DeAI) with industry leaders.&nbsp;
                        </p>
                        <p>
                          In our first episode,{' '}
                          <a href="https://x.com/jaxxdwyer" target="_blank" rel="noreferrer">
                            Jax Dwyer
                          </a>{' '}
                          and{' '}
                          <a href="https://x.com/ghcryptoguy" target="_blank" rel="noreferrer">
                            Elisha Owusu Akyaw
                          </a>{' '}
                          led an insightful discussion on AI agents, open vs. closed-source
                          AI, geopolitics, and how 0G is innovating at the forefront of DeAI
                          infrastructure.
                        </p>
                        <p>Here’s a recap of the biggest takeaways.</p>
                        <h2>AI: The Open vs. Closed-Source Debate</h2>
                        <p>
                          Despite the connotation that names like “OpenAI” convey, the current
                          AI landscape is dominated by closed-source models developed by major
                          tech firms. Lately, many have been asking if this is truly the best
                          approach for long-term growth in the sector.
                        </p>
                        <p>
                          Jax and Elisha started off the space by talking about the prominent
                          LLMs currently available on the market, including ChatGPT, Copilot,
                          Claude, and more—addressing the ongoing debate over open-source vs.
                          closed-source AI. Here’s what they touched on:
                        </p>
                        <ul role="list">
                          <li>
                            Open-source AI fosters transparency, accessibility, and innovation,
                            allowing for broader contributions and community-driven
                            improvements.
                          </li>
                          <li>
                            Closed-source models, on the other hand, offer controlled
                            environments with strict security measures.
                          </li>
                          <li>The key question: How do we get to full open-source AI?</li>
                        </ul>
                        <p>
                          <strong>Elisha</strong>: We are talking about accessibility. We&apos;re
                          talking about control. We&apos;re talking about innovation and
                          security… There&apos;s “open,” which means everyone can read the code,
                          see the data, and understand how things work and not necessarily
                          contribute. Then there’s the “open” that starts with that and also
                          involves the contribution of the general public… Then there&apos;s
                          closed source, where people are treating the software that they
                          create as their property that they don&apos;t want to share. I&apos;m on
                          the side of open, but there are some good reasons and some good
                          arguments on the other side, like the AI war that is currently going
                          on with the U.S. vs. China.
                        </p>
                        <h2>The Future of AI Agents: Only Up from Here</h2>
                        <p>
                          One sentiment from the conversation stood out, articulated by Jax:
                          the idea that “AI as we currently know it is the worst it will ever
                          be.” That’s a bold way of saying that AI is evolving at an
                          unprecedented pace, and the technology will only get better.
                        </p>
                        <ul role="list">
                          <li>
                            The next wave of AI agents will be more autonomous, adaptive, and
                            capable of personalizing experiences for users.
                          </li>
                          <li>
                            These agents won’t just respond to prompts—they’ll be able to
                            proactively complete tasks, make decisions, and optimize workflows
                            in real-time.
                          </li>
                          <li>
                            Blockchain-based AI, like what 0G is developing, could enable more
                            trustless, verifiable, and secure AI agents in the future.
                          </li>
                        </ul>
                        <p>
                          <strong>Jax</strong>: The AI agents we see in terms of their
                          predictive capabilities, in terms of their ability to write on
                          Twitter, they&apos;re only going to get better. And it&apos;s not
                          linearly. They&apos;re not just going to step by step, by step, get a
                          little better every single day—there&apos;s going to be big step
                          functions. I don&apos;t know if you guys can remember this, but the
                          difference in the GPT model 3.5 versus the 4.0 and some of the later
                          models, is absolutely insane.
                        </p>
                        <h2>ChatGPT vs. Deepseek</h2>
                        <p>
                          With the recent buzz around Deepseek, an AI model claiming to rival
                          ChatGPT while being cheaper and open-source, the conversation shifted
                          to whether building high-quality AI models is becoming more
                          accessible.
                        </p>
                        <ul role="list">
                          <li>
                            Deepseek’s emergence suggests that affordable, open-source
                            alternatives are gaining ground.
                          </li>
                          <li>
                            But is building an AI model really that easy? The biggest barriers
                            remain: compute power, data access, and funding.
                          </li>
                        </ul>
                        <p>
                          <strong>Elisha</strong>: The Deepseek situation has opened up a very
                          important conversation about the AI race and about what nation-states
                          need to do to put their companies in a position where they&apos;re the
                          most competitive and what nation-states themselves ought to do to be
                          competitive.
                        </p>
                        <h2>Could the US Ban Foreign AI Models?</h2>
                        <p>
                          During the conversation about ChatGPT vs. Deepseek, Jax and Elisha
                          shifted the topic to the AI race between nations. Specifically, the
                          two addressed the fact that AI is growing beyond technology and
                          becoming a geopolitical battleground.
                        </p>
                        <p>
                          Concerns over data privacy, cybersecurity, and adversarial AI attacks
                          have led some to wonder whether the U.S. government could start
                          restricting or banning AI models built in other countries.
                        </p>
                        <ul role="list">
                          <li>
                            Fears include bad actors injecting malicious scripts into AI models,
                            potentially exposing sensitive data or compromising security.
                          </li>
                          <li>
                            If governments start restricting foreign AI models, what does that
                            mean for global innovation and open-source AI?
                          </li>
                          <li>
                            A key takeaway is that regulation and AI geopolitics could shape
                            the future of AI access, especially for decentralized and
                            permissionless systems.
                          </li>
                        </ul>
                        <p>
                          <strong>Jax</strong>: I don&apos;t know if you guys have ever seen this
                          meme where it&apos;s like, “me uploading the most controversial
                          documents in my company into ChatGPT.” Well, one, know that a lot of
                          employees will end up uploading sensitive documents into these LLMs,
                          and two, they could be a huge risk factor in terms of injecting
                          nefarious scripts to take data. People are probably already uploading
                          their personal data there.
                        </p>
                        <h2>How Do We Create Sustainable Decentralized AI?</h2>
                        <p>
                          The conversation then shifted from governmental response to privacy
                          and security to the potential benefits of decentralized AI in
                          achieving these pillars. Jax and Elisha explored potential solutions,
                          including:
                        </p>
                        <ul role="list">
                          <li>
                            <a href="https://node.0gfoundation.ai/" target="_blank" rel="noreferrer">
                              Alignment nodes
                            </a>{' '}
                            for ensuring decentralized models align with ethics and security
                            principles.
                          </li>
                          <li>0G’s infrastructure and how it supports a decentralized AI ecosystem.</li>
                          <li>
                            The importance of economic incentives in keeping DeAI networks
                            functional and secure.
                          </li>
                        </ul>
                        <p>
                          <strong>Elisha</strong>: There are so many reasons why trusting the
                          various (LLM developer) stakeholders could be an issue. I think
                          that&apos;s exactly why the decentralized approach is important. For
                          0G, the AI alignment nodes ensure that no one is doing something crazy
                          on-chain when it comes to AI.
                        </p>
                        <h2>0G Milestones</h2>
                        <p>
                          To close out, Jax and Elisha touched on their enjoyment of working in
                          the weeds with 0G and being a part of its active and growing
                          community. To highlight the current state of 0G affairs, Elish
                          highlighted how:
                        </p>
                        <ul role="list">
                          <li>
                            0G’s{' '}
                            <a href="https://lu.ma/aiagentday_chk" target="_blank" rel="noreferrer">
                              AI Agent Day
                            </a>{' '}
                            @ Consensus Hong Kong was a massive success, with standing room only
                            for programming that brought together top minds in AI and blockchain.
                          </li>
                          <li>
                            Something called AIverse, which Elisha told listeners to keep an eye
                            out for on 0G
                          </li>
                          <li>
                            And, of course, the big question: Will 0G be the first to successfully
                            merge blockchain and AI? We’re certainly aiming for it.
                          </li>
                        </ul>
                        <p>
                          <strong>Elisha</strong>: I think it&apos;s bold for any of us to say
                          that this platform or that platform would play the biggest role in
                          reaching AGI (Artificial General Intelligence). But I think it&apos;s
                          important for us to build the ecosystems that nudge developers toward
                          the right path and provide evidence and some sort of foundation of what
                          the right thing ought to be.
                        </p>
                        <h2>Join the Conversation</h2>
                        <p>
                          Missed the space? Listen to the full recording{' '}
                          <a
                            href="https://x.com/i/spaces/1OdKrDPYkgqJX"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          , and be sure to follow{' '}
                          <a href="https://x.com/0G_labs" target="_blank" rel="noreferrer">
                            0G on X
                          </a>{' '}
                          and join our{' '}
                          <a href="https://discord.com/invite/0glabs" target="_blank" rel="noreferrer">
                            Discord
                          </a>{' '}
                          for updates and announcements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t27_section_filter section_filter">
            <div className="t27_div028 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t27_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t27_div029 cms-grid_list w-dyn-items"
            >
              <div role="listitem" className="t27_div030 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t27_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t27_div031 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t27_img003 cms-grid_image"
                    />
                    <div className="t27_div032 spacer-medium hide-mobile-portrait"></div>
                    <div className="t27_div033 blog_contnet-wrapper">
                      <div className="t27_div034 blog_meta-wrapper">
                        <div className="t27_div035">Tech</div>
                        <div className="t27_div036 icon-embed-custom w-embed">
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
                        <div className="t27_div037">Sep 5, 2024</div>
                      </div>
                      <div className="t27_div038 spacer-xmedium"></div>
                      <h3 className="t27_heading2 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t27_div039 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t27_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t27_div040 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t27_img004 cms-grid_image"
                    />
                    <div className="t27_div041 spacer-medium hide-mobile-portrait"></div>
                    <div className="t27_div042 blog_contnet-wrapper">
                      <div className="t27_div043 blog_meta-wrapper">
                        <div className="t27_div044">Tech</div>
                        <div className="t27_div045 icon-embed-custom w-embed">
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
                        <div className="t27_div046">Aug 25, 2025</div>
                      </div>
                      <div className="t27_div047 spacer-xmedium"></div>
                      <h3 className="t27_heading3 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1,
                        Hits 11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t27_div048 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t27_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t27_div049 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t27_img005 cms-grid_image"
                    />
                    <div className="t27_div050 spacer-medium hide-mobile-portrait"></div>
                    <div className="t27_div051 blog_contnet-wrapper">
                      <div className="t27_div052 blog_meta-wrapper">
                        <div className="t27_div053">Tech</div>
                        <div className="t27_div054 icon-embed-custom w-embed">
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
                        <div className="t27_div055">Aug 7, 2025</div>
                      </div>
                      <div className="t27_div056 spacer-xmedium"></div>
                      <h3 className="t27_heading4 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed
                        100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t27_div057 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-storage"
                  className="t27_a007 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t27_div058 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t27_img006 cms-grid_image"
                    />
                    <div className="t27_div059 spacer-medium hide-mobile-portrait"></div>
                    <div className="t27_div060 blog_contnet-wrapper">
                      <div className="t27_div061 blog_meta-wrapper">
                        <div className="t27_div062">Tech</div>
                        <div className="t27_div063 icon-embed-custom w-embed">
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
                        <div className="t27_div064">Jul 3, 2025</div>
                      </div>
                      <div className="t27_div065 spacer-xmedium"></div>
                      <h3 className="t27_heading5 heading-style-h5">
                        0G Storage: Built for the AI Era
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

