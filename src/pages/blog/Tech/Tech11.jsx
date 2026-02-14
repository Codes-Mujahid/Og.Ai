import React, { useEffect, useState } from 'react'
import './Tech11.css'

export default function Tech11() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t11-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t11-webflow', 'true')
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
      'Check out this insightful blog post: Revolutionizing AI Fine-Tuning with the 0G Compute Network'
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
    <div className="t11_container">
      <div className="t11_page-wrapper page-wrapper">
        <div fs-socialshare-element="content" className="t11_hide hide">
          <div className="t11_socialshare-lead">
            Check out this insightful blog post:&nbsp;
          </div>
          <div className="t11_socialshare-title">
            Revolutionizing AI Fine-Tuning with the 0G Compute Network
          </div>
        </div>

        <main className="t11_main-wrapper main-wrapper">
          <section className="t11_section_hero section_hero t11_is-vertical is-vertical">
            <div className="t11_padding-global padding-global">
              <div className="t11_container-large container-large">
                <div className="t11_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t11_hero_bg-image1 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t11_hero_bg-image2 hero_bg-image t11_w-dyn-bind-empty w-dyn-bind-empty"
                  />
                  <div className="t11_hero_bg-gradient hero_bg-gradient t11_is-blog is-blog"></div>
                </div>

                <div className="t11_hero_content-component hero_content-component t11_is-vertical2 is-vertical">
                  <div className="t11_blog_meta-wrapper blog_meta-wrapper t11_is-white is-white">
                    <div className="t11_blog_meta-category">Tech</div>
                    <div className="t11_icon-embed-custom1 icon-embed-custom t11_w-embed1 w-embed">
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
                    <div className="t11_blog_meta-date">Apr 29, 2025</div>
                    <div className="t11_icon-embed-custom2 icon-embed-custom t11_w-embed2 w-embed">
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
                    <div className="t11_blog_meta-author">0g</div>
                  </div>

                  <div className="t11_spacer-small spacer-small"></div>

                  <div className="t11_max-width-large max-width-large t11_text-align-center text-align-center">
                    <h1 className="t11_heading-style-h3 heading-style-h3">
                      Revolutionizing AI Fine-Tuning with the 0G Compute Network
                    </h1>
                  </div>

                  <div className="t11_spacer-small2 spacer-small"></div>

                  <div className="t11_blog_button-wrapper blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      onClick={handleCopy}
                      href="#"
                      className="t11_link-icon-light1 link-icon-light t11_is-static1 is-static t11_w-inline-block1 w-inline-block"
                    >
                      <div className="t11_icon-embed-xsmall1 icon-embed-xsmall t11_w-embed3 w-embed">
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
                      className="t11_link-icon-light2 link-icon-light t11_is-static2 is-static t11_w-inline-block2 w-inline-block"
                    >
                      <div className="t11_icon-embed-xsmall2 icon-embed-xsmall t11_w-embed4 w-embed">
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
                      className="t11_link-icon-light3 link-icon-light t11_is-static3 is-static t11_w-inline-block3 w-inline-block"
                    >
                      <div className="t11_icon-embed-xsmall3 icon-embed-xsmall t11_w-embed5 w-embed">
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

          <section className="t11_section_legal-content section_legal-content">
            <div className="t11_padding-global2 padding-global">
              <div className="t11_padding-section-medium padding-section-medium">
                <div className="t11_container-small container-small">
                  <div className="t11_legal-content_outer">
                    <div className="t11_legal-content_component legal-content_component">
                      <div className="t11_blog-rich-text blog-rich-text t11_w-richtext w-richtext">
                        <p>
                          AI models are pretrained on vast, generalized
                          datasets: books, websites, code repositories, and
                          more. That’s how they learn grammar, syntax, and
                          reasoning. But pretraining only gives you general
                          intelligence, not a specialist. If you want a model
                          that can conduct biotech research or write in your
                          brand’s voice, this will require fine-tuning: the
                          process of retraining a base model on a smaller,
                          domain-specific dataset to adapt it to a new task.
                        </p>
                        <p>
                          As AI models become more ubiquitous and sophisticated,
                          the demand for secure, cost-effective, and
                          high-performance fine-tuning solutions has
                          skyrocketed. Traditional approaches typically rely on
                          centralized providers or fragmented infrastructures.
                          However, these methods often lack transparency, can
                          limit flexibility, and may lead to uncertainty around
                          costs and data privacy.
                        </p>
                        <p>
                          <strong>Enter the 0G Compute Network</strong>—an
                          evolving ecosystem designed to bring customers and
                          providers together under a single, trustless, and
                          verifiable framework for fine-tuning (and in the
                          future, additional AI services).
                        </p>
                        <p> </p>
                        <figure className="t11_w-richtext-align-center w-richtext-align-center t11_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="t11_figure-inner">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ea603c679c2838305e_aXF1ny6xG2LYMNFnSTFXpGwZmaY.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p> </p>
                        <p>
                          The result is a programmable, open system that
                          empowers secure, efficient, and profitable model
                          training at scale. Let’s unpack how these features
                          converge to create a cutting-edge network for
                          fine-tuning AI models.
                        </p>
                        <h2>
                          <strong>Architectural Overview</strong>
                        </h2>
                        <p>
                          The 0G Compute Network’s integrated fine-tuning
                          framework redefines how customers and providers
                          collaborate in AI model training. By blending trusted
                          execution environments, robust on-chain settlement,
                          and flexible orchestration, we are creating a platform
                          where:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Customers</strong> can confidently upload
                            data and scripts, pay only for the services used,
                            and retrieve models securely.
                          </li>
                          <li>
                            <strong>Providers</strong> can offer transparent,
                            profitable, and scalable services without losing
                            time chasing down payments.
                          </li>
                        </ul>
                        <p>
                          Below is a high-level representation of how fine-tuning
                          is orchestrated within the 0G Compute Network:
                        </p>
                        <figure className="t11_w-richtext-align-center w-richtext-align-center t11_w-richtext-figure-type-image w-richtext-figure-type-image">
                          <div className="t11_figure-inner2">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ea603c679c28383061_SPLr6qWF37xiudBNpANzuaiFGXg.png"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h2>
                          <strong>How It Works</strong>
                        </h2>
                        <h3>
                          <strong>1. Providers Offer Secure Fine-Tuning Services</strong>
                        </h3>
                        <p>
                          Providers launch their servers in a Confidential
                          Virtual Machine (CVM) and publish their fine-tuning
                          offerings on the 0G Compute Network. Each server
                          generates a signing key pair at startup, which becomes
                          integral for verifiable, on-chain proof of execution.
                          Customers can download a Remote Attestation (RA)
                          report to verify that the provider is running securely
                          within a TEE. This ensures both parties have complete
                          confidence in the authenticity of any subsequent
                          computations.
                        </p>
                        <p>
                          <strong>Key Takeaways for Providers</strong>
                        </p>
                        <ul role="list">
                          <li>
                            Providers can customize quotas (CPU, memory, GPU)
                            and price structures.
                          </li>
                          <li>
                            The TEE-based system and on-chain contracts protect
                            provider fees and profitability.
                          </li>
                          <li>
                            Only one fine-tuning task can run at a time,
                            preventing resource over-allocation and performance
                            drops.
                          </li>
                        </ul>
                        <h3>
                          <strong>2. Customers Verify and Fund Tasks</strong>
                        </h3>
                        <p>
                          Customers verify a provider’s identity using the RA
                          report and signing public key. They create an account
                          in the 0G contract, depositing initial funds. This
                          ensures that the cost of any subsequent task is
                          covered, establishing a straightforward pay-as-you-go
                          model.
                        </p>
                        <p>
                          <strong>Key Steps for Customers</strong>
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Create an account on the contract</strong>{' '}
                            with the customer’s wallet key
                          </li>
                          <li>
                            <strong>Pre-deposit funds</strong> for future tasks.
                          </li>
                          <li>
                            <strong>Download &amp; verify the RA report</strong>{' '}
                            from the desired provider.
                          </li>
                        </ol>
                        <h3>
                          <strong>3. Task Creation &amp; Execution Occurs Through 0G</strong>
                        </h3>
                        <p>
                          When customers are ready to fine-tune a model, they
                          craft a signed task request specifying parameters such
                          as the dataset hash, pre-trained model hash,
                          fine-tuning script hash, and agreed-upon fee. The
                          provider then executes the fine-tuning job inside a
                          secure environment and signs the results with its TEE
                          keys.
                        </p>
                        <p>
                          <strong>Execution Process Highlights</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Signature Verification</strong>: The
                            provider validates the task request, ensuring
                            correctness and sufficient customer balance.
                          </li>
                          <li>
                            <strong>Dataset &amp; Model Check</strong>: The
                            provider downloads and verifies the model, dataset,
                            and script from 0G Storage.
                          </li>
                          <li>
                            <strong>Fine-Tuning</strong>: A specialized script
                            (provided by the 0G team or preset by the provider)
                            runs the training process.
                          </li>
                          <li>
                            <strong>Encryption &amp; Upload</strong>: Results
                            are encrypted, securely stored on 0G Storage, and
                            hashed for on-chain references.
                          </li>
                          <li>
                            <strong>TEE-Signed Settlement</strong>: The provider
                            generates a TEE signature with final metadata
                            (model root hash, encrypted secret, fees, etc.).
                          </li>
                        </ul>
                        <h3>
                          <strong>4. Secure Retrieval &amp; Settlement</strong>
                        </h3>
                        <p>
                          Once the job is completed, the encrypted model is made
                          available on 0G Storage. The customer downloads it,
                          confirms the integrity of the file using its root
                          hash, and calls the contract’s /acknowledge function.
                          At this point, settlement triggers, transferring the
                          previously agreed-upon fee to the provider. The
                          customer then decrypts the model using a key that the
                          provider stored on the contract during the settlement
                          process. This key is encrypted with the customer&apos;s
                          public key, ensuring that only the customer can
                          decrypt the model.
                        </p>
                        <p>
                          <strong>Why It Matters</strong>
                        </p>
                        <ul role="list">
                          <li>
                            <strong>No Payment Surprises</strong>: Fees are
                            locked upfront and released only upon successful
                            completion and verification.
                          </li>
                          <li>
                            <strong>Customer Control</strong>: Customers confirm
                            they’ve received the expected model before payment
                            is finalized.
                          </li>
                          <li>
                            <strong>Provider Protection</strong>: On-chain
                            settlement with TEE-proven authenticity eliminates
                            disputes and ensures fair compensation.
                          </li>
                        </ul>
                        <h2>
                          <strong>Contracts: Enabling Trust &amp; Transparency</strong>
                        </h2>
                        <p>
                          At the heart of the 0G Compute Network is a modular
                          trio of smart contracts, purpose-built to encode
                          financial, operational, and reputational logic around
                          fine-tuning tasks:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>serving:</strong> serves as the main entry
                            point and execution hub for creating tasks and
                            settling payments.
                          </li>
                          <li>
                            <strong>account:</strong> manages user balances,
                            nonces, and public keys. Tracks deliverables so
                            customers can easily retrieve their models.
                          </li>
                          <li>
                            <strong>service:</strong> stores provider details
                            like quotas, pricing, and general service
                            operations.
                          </li>
                        </ol>
                        <p>
                          Together, these contracts offer a programmable
                          substrate for trustless collaboration. Customer-provider
                          trust is encoded as logic and enforced at the protocol
                          level, meaning all involved parties have granular
                          control over financial transactions and can audit each
                          step of the fine-tuning lifecycle.
                        </p>
                        <h3>
                          <strong>Fine-Tuning Fee Calculation</strong>
                        </h3>
                        <p>
                          The fee model for fine-tuning is simple but
                          principled: you pay for what you use. That includes:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Dataset size</strong>
                          </li>
                          <li>
                            <strong>Number of epochs</strong>
                          </li>
                          <li>
                            <strong>GPU price</strong> (set by providers)
                          </li>
                          <li>
                            <strong>Storage costs</strong> for 0G Storage
                          </li>
                        </ul>
                        <p>
                          This model aligns incentives clearly and fairly.
                          Customers can optimize their costs by tuning only
                          what’s necessary, while providers can differentiate
                          based on compute throughput, efficiency, and
                          availability. And since all fees are held in escrow
                          and only released upon verifiable delivery, both sides
                          avoid ambiguity or risk.
                        </p>
                        <h2>
                          <strong>Customer Experience: Command-Line Interface (CLI)</strong>
                        </h2>
                        <p>
                          To make this infrastructure accessible, the 0G has
                          built a purpose-built command-line interface (CLI)
                          that serves as a frontend to the protocol’s logic
                          layer. CLI commands include:
                        </p>
                        <ul role="list">
                          <li>add-account</li>
                          <li>deposit-fund</li>
                          <li>create-task</li>
                          <li>get-log</li>
                          <li>download-model</li>
                        </ul>
                        <p>
                          The CLI also automatically handles file uploads to 0G
                          Storage, root hash retrieval, and secure downloads.
                          This one-stop tool enables customers to manage the
                          entire lifecycle of their fine-tuning tasks, from
                          account creation to final model decryption.
                        </p>
                        <h2>
                          <strong>Provider Experience: Execution &amp; Broker Images</strong>
                        </h2>
                        <p>
                          On the provider side, we offer a Provider Execution
                          Image for secure script execution and a Broker Image
                          for receiving, scheduling, and managing tasks. The
                          broker:
                        </p>
                        <ul role="list">
                          <li>
                            Validates incoming requests against the provider’s
                            resource limits.
                          </li>
                          <li>
                            Forwards tasks to a Serverless engine for
                            containerized execution.
                          </li>
                          <li>
                            Tracks task states and ensures only one fine-tuning
                            job runs at a time on each provider.
                          </li>
                          <li>
                            Integrates with the CVM interface so the provider
                            can offer verifiable services without managing
                            implementation details.
                          </li>
                        </ul>
                        <h2>
                          <strong>A Unified Network: Fine-Tuning &amp; Chatbot Services</strong>
                        </h2>
                        <p>
                          The 0G Compute Network doesn’t stop at fine-tuning.
                          It’s designed to support an entire ecosystem of AI
                          services within one unified protocol. In other words,
                          while fine-tuning and inference involve distinct
                          internal processes, both will be unified under the 0G
                          Compute Network, enabling:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Shared Account System</strong>: A
                            higher-level parent contract can manage user
                            balances across multiple child accounts, ensuring
                            each provider is compensated independently without
                            the user juggling multiple balances.
                          </li>
                          <li>
                            <strong>Single Point of Interaction</strong>:
                            Customers can tap into a consolidated interface—CLI
                            or SDK—to seamlessly switch between different
                            services (fine-tuning, chatbot inference, etc.).
                          </li>
                        </ol>
                        <p>
                          By consolidating these services, users benefit from a
                          cohesive experience and providers gain exposure to a
                          broader client base while retaining autonomous control
                          over pricing and configurations. This reduces
                          onboarding time for new services, and creates a
                          seamless experience for developers looking to build,
                          deploy and scale powerful AI applications within one
                          unified environment.
                        </p>
                        <h2>
                          <strong>Beyond Fine-Tuning</strong>
                        </h2>
                        <p>
                          Fine-tuning is just the beginning. 0G is evolving into
                          a full-stack operating system for decentralized AI,
                          and we will continue to refine our infrastructure and
                          user interfaces. The team is actively working to
                          expand the ecosystem with more robust features,
                          including:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Enhanced Preset Models</strong>: Providers
                            can publish standard or custom pre-trained models
                            for quick integration.
                          </li>
                          <li>
                            <strong>Extended Contract Functionality</strong>:
                            Additional settlement methods, partial refunds, and
                            more advanced billing cycles.
                          </li>
                          <li>
                            <strong>Developer SDKs</strong>: Beyond CLI, an SDK
                            is in progress to give developers programmatic
                            access for building integrated AI workflows.
                          </li>
                        </ul>
                        <p>
                          These developments will further empower everyone from
                          research labs to enterprise-grade ML teams, as they
                          unleash the next wave of fine-tuned intelligence on
                          0G.
                        </p>
                        <p>
                          A special thanks to the Phala team, whose work in TEE,
                          Confidential Virtual Machines (CVM), and verifiability
                          techniques has greatly supported the 0G Compute
                          Network. Their contributions enable high-level
                          security guarantees and transparent execution, ensuring
                          that all parties can trust 0G’s computational integrity
                          and authenticity.
                        </p>
                        <h3>
                          <strong>References &amp; Further Reading</strong>
                        </h3>
                        <ol role="list">
                          <li>
                            <a href="https://docs.0g.ai/build-with-0g/compute-network/fine-tuning-provider">
                              0G Compute Network Fine-tuning Provider
                            </a>
                          </li>
                          <li>
                            <a href="https://docs.0g.ai/build-with-0g/compute-network/cli">
                              0G Compute Network Fine-tuning CLI
                            </a>
                          </li>
                          <li>
                            <a href="https://docs.0g.ai/build-with-0g/compute-network/provider">
                              0G Compute Network Inference Provider
                            </a>
                          </li>
                          <li>
                            <a href="https://docs.0g.ai/build-with-0g/compute-network/sdk">
                              0G Compute Network Inference SDK
                            </a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t11_section_filter section_filter">
            <div className="t11_blog_more-blog blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t11_w-dyn-list w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              className="t11_cms-grid_list cms-grid_list t11_w-dyn-items w-dyn-items"
            >
              <div
                role="listitem"
                className="t11_cms-grid_item1 cms-grid_item t11_w-dyn-item1 w-dyn-item"
              >
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t11_cms-grid_content-wrapper1 cms-grid_content-wrapper t11_is-blog4 is-blog t11_w-inline-block4 w-inline-block"
                >
                  <div className="t11_blog_content1 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t11_cms-grid_image1 cms-grid_image"
                    />
                    <div className="t11_spacer-medium1 spacer-medium t11_hide-mobile-portrait1 hide-mobile-portrait"></div>
                    <div className="t11_blog_contnet-wrapper1 blog_contnet-wrapper">
                      <div className="t11_blog_meta-wrapper2 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="t11_related_category1"
                        >
                          Tech
                        </div>
                        <div className="t11_icon-embed-custom3 icon-embed-custom t11_w-embed6 w-embed">
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
                        <div className="t11_related_date1">Sep 5, 2024</div>
                      </div>
                      <div className="t11_spacer-xmedium1 spacer-xmedium"></div>
                      <h3 className="t11_heading-style-h51 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t11_cms-grid_item2 cms-grid_item t11_w-dyn-item2 w-dyn-item"
              >
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t11_cms-grid_content-wrapper2 cms-grid_content-wrapper t11_is-blog5 is-blog t11_w-inline-block5 w-inline-block"
                >
                  <div className="t11_blog_content2 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t11_cms-grid_image2 cms-grid_image"
                    />
                    <div className="t11_spacer-medium2 spacer-medium t11_hide-mobile-portrait2 hide-mobile-portrait"></div>
                    <div className="t11_blog_contnet-wrapper2 blog_contnet-wrapper">
                      <div className="t11_blog_meta-wrapper3 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="t11_related_category2"
                        >
                          Tech
                        </div>
                        <div className="t11_icon-embed-custom4 icon-embed-custom t11_w-embed7 w-embed">
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
                        <div className="t11_related_date2">Aug 25, 2025</div>
                      </div>
                      <div className="t11_spacer-xmedium2 spacer-xmedium"></div>
                      <h3 className="t11_heading-style-h52 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable
                        AI Layer 1, Hits 11,000 TPS with Parallel Consensus per
                        Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t11_cms-grid_item3 cms-grid_item t11_w-dyn-item3 w-dyn-item"
              >
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t11_cms-grid_content-wrapper3 cms-grid_content-wrapper t11_is-blog6 is-blog t11_w-inline-block6 w-inline-block"
                >
                  <div className="t11_blog_content3 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t11_cms-grid_image3 cms-grid_image"
                    />
                    <div className="t11_spacer-medium3 spacer-medium t11_hide-mobile-portrait3 hide-mobile-portrait"></div>
                    <div className="t11_blog_contnet-wrapper3 blog_contnet-wrapper">
                      <div className="t11_blog_meta-wrapper4 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="t11_related_category3"
                        >
                          Tech
                        </div>
                        <div className="t11_icon-embed-custom5 icon-embed-custom t11_w-embed8 w-embed">
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
                        <div className="t11_related_date3">Aug 7, 2025</div>
                      </div>
                      <div className="t11_spacer-xmedium3 spacer-xmedium"></div>
                      <h3 className="t11_heading-style-h53 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally
                        Distributed 100B+ Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div
                role="listitem"
                className="t11_cms-grid_item4 cms-grid_item t11_w-dyn-item4 w-dyn-item"
              >
                <a
                  href="/blog/0g-storage"
                  className="t11_cms-grid_content-wrapper4 cms-grid_content-wrapper t11_is-blog7 is-blog t11_w-inline-block7 w-inline-block"
                >
                  <div className="t11_blog_content4 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t11_cms-grid_image4 cms-grid_image"
                    />
                    <div className="t11_spacer-medium4 spacer-medium t11_hide-mobile-portrait4 hide-mobile-portrait"></div>
                    <div className="t11_blog_contnet-wrapper4 blog_contnet-wrapper">
                      <div className="t11_blog_meta-wrapper5 blog_meta-wrapper">
                        <div
                          fs-list-field="category"
                          className="t11_related_category4"
                        >
                          Tech
                        </div>
                        <div className="t11_icon-embed-custom6 icon-embed-custom t11_w-embed9 w-embed">
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
                        <div className="t11_related_date4">Jul 3, 2025</div>
                      </div>
                      <div className="t11_spacer-xmedium4 spacer-xmedium"></div>
                      <h3 className="t11_heading-style-h54 heading-style-h5">
                        0G Storage: Built for the AI Era
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className={`t11_copy-toast ${showToast ? 't11_show' : ''}`}>
          Link copied
        </div>
      </div>
    </div>
  )
}
