import React, { useEffect, useState } from 'react'
import './Tech34.css'

export default function Tech34() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t34-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t34-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: 0G Demo: A Technical Walkthrough')
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
    <div className="t34_container">
      <div className={`t34_copy-toast ${showToast ? 't34_show' : ''}`}>Link copied</div>

      <div className="t34_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t34_div002 hide">
          <div className="t34_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t34_div004">0G Demo: A Technical Walkthrough</div>
        </div>

        <main className="t34_main-wrapper main-wrapper">
          <section className="t34_section_hero section_hero is-vertical">
            <div className="t34_div005 padding-global">
              <div className="t34_div006 container-large">
                <div className="t34_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t34_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t34_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t34_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t34_div008 hero_content-component is-vertical">
                  <div className="t34_div009 blog_meta-wrapper is-white">
                    <div className="t34_div010">Tech</div>
                    <div className="t34_div011 icon-embed-custom w-embed">
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
                    <div className="t34_div012">Nov 13, 2024</div>
                    <div className="t34_div013 icon-embed-custom w-embed">
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
                    <div className="t34_div014">0g</div>
                  </div>

                  <div className="t34_div015 spacer-small"></div>

                  <div className="t34_div016 max-width-large text-align-center">
                    <h1 className="t34_heading heading-style-h3">0G Demo: A Technical Walkthrough</h1>
                  </div>

                  <div className="t34_div017 spacer-small"></div>

                  <div className="t34_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t34_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t34_div019 icon-embed-xsmall w-embed">
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
                      className="t34_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t34_div020 icon-embed-xsmall w-embed">
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
                      className="t34_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t34_div021 icon-embed-xsmall w-embed">
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

          <section className="t34_section_legal-content section_legal-content">
            <div className="t34_div022 padding-global">
              <div className="t34_div023 padding-section-medium">
                <div className="t34_div024 container-small">
                  <div className="t34_div025">
                    <div className="t34_div026 legal-content_component">
                      <div className="t34_div027 blog-rich-text w-richtext">
                        <p>
                          0G is building the world’s first Artificial Intelligence Layer (AIL)—a modular, decentralized
                          infrastructure designed to bring composable, verifiable intelligence onchain. At the heart of
                          this AIL is 0G’s decentralized AI Operating System (deAIOS), a unified platform that combines
                          compute, storage, and data availability to enable fast, secure, and transparent AI
                          development.
                        </p>
                        <p>
                          <strong>0G’s dAIOS brings decentralized AI to life. </strong>
                          Traditional AI systems often lack transparency, security, and user control, essential for an
                          open and trustworthy AI ecosystem. By providing the infrastructure to bring AI on-chain, 0G
                          addresses these issues and empowers developers to build, scale, and monetize AI solutions
                          without relying on centralized providers.
                        </p>
                        <p>
                          By eliminating reliance on centralized AI infrastructure, 0G is ushering in a new era of
                          Infinite AI—a fully onchain AI ecosystem where anyone can build, scale, and monetize
                          intelligent applications with speed and trust.
                        </p>
                        <p>
                          0G&apos;s AIL architecture has three components: <strong>Service Marketplace, Compute Network, and Storage Network</strong>.
                        </p>
                        <p>In this article, we will cover:</p>
                        <ul role="list">
                          <li>A brief overview of our Service Network and how anyone can build decentralized AI applications using it.</li>
                          <li>
                            Three demos illustrating how easy it is to use
                            <ul role="list">
                              <li>
                                <strong>Demo 1: Uploading and Downloading AI Models on 0G Storage</strong>
                              </li>
                              <li>
                                <strong>Demo 2: Registering as a GPU Provider with 0G Serving</strong>
                              </li>
                              <li>
                                <strong>Demo 3: Selecting a Model and Provider for Verifiable Inference</strong>
                              </li>
                            </ul>
                          </li>
                          <li>How to get started</li>
                        </ul>
                        <p>
                          <strong>The 0G Service Marketplace</strong>
                        </p>
                        <p>
                          <strong>The 0G Service Marketplace</strong> connects developers and AI service providers in a
                          decentralized peer-to-peer marketplace. Here, <strong>“Service Providers”</strong> list their
                          offerings, from model inference and fine-tuning to data processing, while developers or{' '}
                          <strong>&quot;Users&quot;</strong> can browse and select the best options for their AI
                          applications.
                        </p>
                        <p>
                          Service providers have the flexibility to configure their listings, setting dynamic prices
                          based on factors like model complexity, resource demand, and verification requirements.&nbsp;
                        </p>
                        <p>
                          Users benefit from a range of available models and datasets, as well as the choice of
                          verifiability methods such as OPML, TeeML, or ZKML (with more options like FHEML shortly),
                          allowing them to select the best option for their trust and performance needs.
                        </p>
                        <p>Apart from the 0G Service Marketplace, two other important components of 0G include:</p>
                        <ul role="list">
                          <li>
                            <strong>0G Storage: </strong>A high-performance decentralized storage solution optimized for
                            large datasets and AI models, featuring advanced sharding and erasure coding for speed,
                            scalability, and data reliability.
                          </li>
                          <li>
                            <strong>0G DA: </strong>An infinitely scalable data availability layer that ensures
                            distributed access and verification for on-chain data, supporting the transparency and
                            reliability of AI applications in a decentralized environment.
                          </li>
                        </ul>
                        <p>
                          Together, 0G’s Service Marketplace, Storage, and Data Availability layers form the foundation
                          of the deAIOS, enabling a full-stack experience for developers building decentralized AI
                          applications.
                        </p>
                        <p>
                          <strong>Demo 1: Retrieving an AI Model from 0G Storage for Finetuning</strong>
                        </p>
                        <p>
                          Demo #1 highlights <strong>0G Storage</strong>, our decentralized storage network engineered
                          for AI&apos;s high-performance demands. Unlike traditional on-chain storage solutions, 0G
                          Storage is optimized for exceptional speed and scalability, seamlessly handling large
                          datasets, intricate AI models, and AI-generated assets.
                        </p>
                        <p>
                          This brief demo highlights how, with just a few lines of code, anyone can quickly and easily
                          upload or download the{' '}
                          <a href="https://huggingface.co/meta-llama/Meta-Llama-3-70B">
                            <strong>Llama-70B model</strong>
                          </a>
                          , a large-scale AI model. This showcases the capability of 0G Storage to manage extremely
                          large files seamlessly, which is essential for high-performance AI workloads. Built for
                          exceptional throughput, our infrastructure can achieve download speeds of up to 5GB/s, making
                          it ideal for demanding AI applications.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t34_div028">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4ef91b5c1f4f9bb71_pYkCh2rCIs2Gr0yIrHA5cZzWGAg.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The Storage SDK is a CLI Code that is easy to get started with, using just a few lines of
                          code.
                        </p>
                        <p>
                          One key enabler of this is that we use <strong>data sharding for accelerated speed</strong>,
                          breaking down the file into 4 shards. This is covered in{' '}
                          <a href="https://0g.ai/blog/0g-storage">our article on 0G Storage.</a>
                        </p>
                        <p>
                          This demo also provides a <strong>code walkthrough of the 0G Storage SDKs</strong>. This
                          includes closely examining our <strong>Go SDK</strong> functions, with upcoming support for
                          TypeScript and Python SDKs, enabling developers to interact with the storage network
                          efficiently. A CLI option is available for testing, and the open-source repository allows
                          developers to customize and contribute by building their own client interfaces.
                        </p>
                        <p>
                          <strong>Demo 2: Registering as a GPU Provider with 0G Service</strong>
                        </p>
                        <p>
                          In this Demo #2, we walk through the process for a TeeML provider setting up an AI inference
                          service on 0G’s decentralized marketplace, highlighting the ease of deployment and
                          verification steps required for service registration.
                        </p>
                        <p>Here&apos;s what’s covered:</p>
                        <ol role="list">
                          <li>
                            <strong>GPU Verification</strong>: We begin by verifying that the Service Provider’s GPU is,
                            in fact, an NVIDIA H200. This ensures compatibility and performance standards for the
                            inference service.
                          </li>
                        </ol>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t34_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4ef91b5c1f4f9bb74_IweNM8ddS5RO15ePMgxb6AiE2A.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>The nvidia-smi command confirms the presence of a NVIDIA H200 GPU.</p>
                        <ol role="list">
                          <li>
                            <strong>Running the Llama Model Image</strong>: Next, the Llama inference image is launched,
                            with ports exposed to accept external calls. This setup allows the Provider to serve
                            inference requests directly through the 0G platform.
                          </li>
                        </ol>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t34_div030">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4ef91b5c1f4f9bb68_7QKe0rhh3crLmlqf8U7VGCvh5Mk.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The “docker run ... llama-inference-image” command runs the Llama inference image on the
                          NVIDIA GPU.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Broker Service Setup</strong>: The GPU Provider identifies the relevant Docker
                            images for the provider-broker service and activates it, exposing the necessary ports for
                            interaction. This broker acts as an intermediary between the marketplace and the AI model.
                          </li>
                        </ol>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t34_div031">
                            <img
                              alt="Uploaded image"
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4ef91b5c1f4f9bb6e_JbQCua0fEjEXA8hZVRRDpgfTUz0.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>
                          The “docker compose -f provider-broker/docker-compose.yml up -d” command starts specified
                          Docker containers to begin running, with confirmations confirming this.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Service Registration</strong>: The provider sends a POST request with key
                            parameters for their service: pricing, URL, provider name, model, and verification method.
                            This information registers the service on the 0G Service Marketplace, making it visible to
                            potential users.
                          </li>
                          <li>
                            <strong>Verification and Marketplace Listing</strong>: Finally, the provider pings the
                            marketplace to confirm that their service is listed. After verifying the registration, the
                            inference service is live and ready to be accessed by developers on the marketplace.
                          </li>
                        </ol>
                        <p>
                          On the developer side, users currently have three verifiability options: <strong>OPML, TeeML, and ZKML</strong>.
                          In the future, additional verification methods like <strong>secure multi-party ML (spML)</strong> and{' '}
                          <strong>fully homomorphic encryption ML (FHEML)</strong> will be supported, expanding options
                          for developers seeking verified and secure AI services.
                        </p>
                        <p>
                          <strong>Demo 3: Selecting a Model and Provider for Verifiable Inference with 0G Service</strong>
                        </p>
                        <p>
                          In <strong>Demo #3</strong>, we walk through the process of verifiable inference on 0G’s
                          Service Marketplace.
                        </p>
                        <p>
                          In this example, developers start by selecting from a range of AI models, including popular
                          open-source options and proprietary models exclusive to 0G’s decentralized AI Operating
                          System (dAIOS).
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t34_div032">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4ef91b5c1f4f9bb6b_juNUCcI9DaJKfOW6wU0Yi9xXiU.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Demo 3 shows available Service Providers, alongside information such as the Uptime %.</p>
                        <p>
                          The 0G Service Marketplace shows details such as the GPU device used, geolocation, uptime
                          rate, and verifiability type (like ZKML, TeeML, and OpML). For this demo, we choose a model
                          verified with TeeML, ensuring trusted execution through a TEE (Trusted Execution
                          Environment).&nbsp;
                        </p>
                        <p>
                          Verified providers are marked with a green check, signaling that 0G has confirmed the
                          integrity of their setup. Once the model and provider are selected, the developer is taken
                          to an interactive playground where they can test the model, such as by prompting it to
                          generate a Haiku. This walkthrough highlights the ease and security that 0G’s marketplace
                          provides for developers looking to build reliable, transparent AI applications.
                        </p>
                        <p>
                          <strong>Get Started with 0G</strong>
                        </p>
                        <p>The above demos show how easy it is for any developer to get started:</p>
                        <ul role="list">
                          <li>
                            <strong>Easy Integrations</strong>: Developers can easily access 0G’s decentralized storage
                            and 0G’s Service Marketplace to upload, retrieve, and manage large datasets and AI models.
                          </li>
                          <li>
                            <strong>Fast Deployment</strong>: A straightforward setup process means providers can
                            register AI inference services on the marketplace, making their offerings available to
                            developers within minutes.
                          </li>
                          <li>
                            <strong>Flexible Verifiability Options</strong>: Developers have access to multiple
                            verifiability options, such as OPML, TeeML, and ZKML, ensuring secure and transparent
                            interactions with AI services on the platform.
                          </li>
                        </ul>
                        <p>
                          Whether you’re uploading models, registering GPU capacity, or selecting verifiable inference
                          providers, 0G offers a one-stop platform for decentralized AI development, with fast
                          integration, modular design, and real-time execution built in.
                        </p>
                        <p>
                          To get started, <a href="https://discord.com/invite/0glabs">join our Discord and reach out!</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t34_section_filter section_filter">
            <div className="t34_div033 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t34_div034 w-dyn-list t34_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t34_div035 cms-grid_list w-dyn-items">
              <div role="listitem" className="t34_div036 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t34_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t34_div037 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t34_img003 cms-grid_image"
                    />
                    <div className="t34_div038 spacer-medium hide-mobile-portrait"></div>
                    <div className="t34_div039 blog_contnet-wrapper">
                      <div className="t34_div040 blog_meta-wrapper">
                        <div className="t34_div041">Tech</div>
                        <div className="t34_div042 icon-embed-custom w-embed">
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
                        <div className="t34_div043">Sep 5, 2024</div>
                      </div>
                      <div className="t34_div044 spacer-xmedium"></div>
                      <h3 className="t34_h3_001 heading-style-h5">0G&apos;s Whitepaper: A Complete Breakdown</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t34_div045 cms-grid_item w-dyn-item">
                <a href="/blog/0g-hits-11k-tps-per-shard" className="t34_a005 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t34_div046 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t34_img004 cms-grid_image"
                    />
                    <div className="t34_div047 spacer-medium hide-mobile-portrait"></div>
                    <div className="t34_div048 blog_contnet-wrapper">
                      <div className="t34_div049 blog_meta-wrapper">
                        <div className="t34_div050">Tech</div>
                        <div className="t34_div051 icon-embed-custom w-embed">
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
                        <div className="t34_div052">Aug 25, 2025</div>
                      </div>
                      <div className="t34_div053 spacer-xmedium"></div>
                      <h3 className="t34_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel
                        Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t34_div054 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t34_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t34_div055 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t34_img005 cms-grid_image"
                    />
                    <div className="t34_div056 spacer-medium hide-mobile-portrait"></div>
                    <div className="t34_div057 blog_contnet-wrapper">
                      <div className="t34_div058 blog_meta-wrapper">
                        <div className="t34_div059">Tech</div>
                        <div className="t34_div060 icon-embed-custom w-embed">
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
                        <div className="t34_div061">Aug 7, 2025</div>
                      </div>
                      <div className="t34_div062 spacer-xmedium"></div>
                      <h3 className="t34_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t34_div063 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t34_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t34_div064 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t34_img006 cms-grid_image"
                    />
                    <div className="t34_div065 spacer-medium hide-mobile-portrait"></div>
                    <div className="t34_div066 blog_contnet-wrapper">
                      <div className="t34_div067 blog_meta-wrapper">
                        <div className="t34_div068">Tech</div>
                        <div className="t34_div069 icon-embed-custom w-embed">
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
                        <div className="t34_div070">Jul 3, 2025</div>
                      </div>
                      <div className="t34_div071 spacer-xmedium"></div>
                      <h3 className="t34_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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
