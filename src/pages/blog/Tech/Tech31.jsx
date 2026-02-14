import React, { useEffect, useState } from 'react'
import './Tech31.css'

export default function Tech31() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    const existing = document.querySelector('link[data-t31-webflow="true"]')
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.059dedd86.min.css'
    link.integrity =
      'sha384-BZ3t2GTuSdMFeOYtu35XZrgjuq8Cdx87BxaUVGYZQQr5bby1lsz8LALH7SnvmwoJ'
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-t31-webflow', 'true')
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
    const text = encodeURIComponent('Check out this insightful blog post: 0G Introducing ERC-7857')
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
    <div className="t31_container">
      <div className={`t31_copy-toast ${showToast ? 't31_show' : ''}`}>Link copied</div>

      <div className="t31_div001 page-wrapper">
        <div fs-socialshare-element="content" className="t31_div002 hide">
          <div className="t31_div003">Check out this insightful blog post:&nbsp;</div>
          <div className="t31_div004">0G Introducing ERC-7857</div>
        </div>

        <main className="t31_main-wrapper main-wrapper">
          <section className="t31_section_hero section_hero is-vertical">
            <div className="t31_div005 padding-global">
              <div className="t31_div006 container-large">
                <div className="t31_hero_bg-wrapper hero_bg-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                    alt=""
                    className="t31_img001 hero_bg-image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp"
                    loading="lazy"
                    alt=""
                    className="t31_img002 hero_bg-image w-dyn-bind-empty"
                  />
                  <div className="t31_div007 hero_bg-gradient is-blog"></div>
                </div>

                <div className="t31_div008 hero_content-component is-vertical">
                  <div className="t31_div009 blog_meta-wrapper is-white">
                    <div className="t31_div010">Tech</div>
                    <div className="t31_div011 icon-embed-custom w-embed">
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
                    <div className="t31_div012">Jan 17, 2025</div>
                    <div className="t31_div013 icon-embed-custom w-embed">
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
                    <div className="t31_div014">0g</div>
                  </div>

                  <div className="t31_div015 spacer-small"></div>

                  <div className="t31_div016 max-width-large text-align-center">
                    <h1 className="t31_heading heading-style-h3">0G Introducing ERC-7857</h1>
                  </div>

                  <div className="t31_div017 spacer-small"></div>

                  <div className="t31_div018 blog_button-wrapper">
                    <a
                      copy-clipboard=""
                      href="#"
                      onClick={handleCopy}
                      className="t31_a001 link-icon-light is-static w-inline-block"
                    >
                      <div className="t31_div019 icon-embed-xsmall w-embed">
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
                      className="t31_a002 link-icon-light is-static w-inline-block"
                    >
                      <div className="t31_div020 icon-embed-xsmall w-embed">
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
                      className="t31_a003 link-icon-light is-static w-inline-block"
                    >
                      <div className="t31_div021 icon-embed-xsmall w-embed">
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

          <section className="t31_section_legal-content section_legal-content">
            <div className="t31_div022 padding-global">
              <div className="t31_div023 padding-section-medium">
                <div className="t31_div024 container-small">
                  <div className="t31_div025">
                    <div className="t31_div026 legal-content_component">
                      <div className="t31_div027 blog-rich-text w-richtext">
                        <p>
                          The 0G Labs team has recently introduced <strong>ERC-7857</strong>, a
                          groundbreaking NFT standard tailored specifically for AI agents that
                          brings <strong>Intelligent NFTs (iNFTs) </strong>to life.&nbsp;
                        </p>
                        <p>
                          <strong>iNFTs</strong> represent AI Agents as NFTs, providing numerous
                          advantages such as transferability, decentralization, complete asset
                          control, royalties, and more. While traditional fungible AI agents are a
                          good first step for the space, iNFTs are the future and present a major
                          leap forward by embedding unique metadata within the NFT framework.
                        </p>
                        <p>
                          As the AI agent space will continue to grow at an exponential rate,
                          traditional NFT standards like ERC-721 and ERC-1155 have several
                          limitations that make them ill-suited for AI agents.&nbsp;
                        </p>
                        <p>
                          ERC-7857 provides a key solution that addresses gaps in how these agents
                          are owned, traded, and used in Web3. Moreover, ERC-7857 directly
                          complements 0G’s decentralized AI Operating System (deAIOS), which includes{' '}
                          <a href="https://0g.ai/blog/0g-storage">0G Storage</a>,{' '}
                          <a href="https://0g.ai/blog/0g-s-data-availability-layer">
                            0G Data Availability (DA)
                          </a>
                          , <a href="https://0g.ai/blog/0g-serving">0G Services Marketplace</a>, and
                          more.
                        </p>
                        <p>In this article, we will explore:</p>
                        <ul role="list">
                          <li>
                            <strong>The concept of Intelligent NFTs (iNFTs) </strong>and how they
                            redefine AI agents.
                          </li>
                          <li>
                            <strong>The issues with existing NFT standards</strong> and why they
                            fall short for AI agents.
                          </li>
                          <li>
                            <strong>How ERC-7857 works in practice</strong>, from metadata
                            encryption to secure transfer.
                          </li>
                          <li>
                            <strong>Key applications of ERC-7857</strong>, including agent
                            marketplaces, AI-as-a-Service, and intellectual property monetization.
                          </li>
                          <li>
                            <strong>Why this matters for Web3 and AI developers</strong>, and how
                            to get started in building iNFTs with ERC-7857.
                          </li>
                        </ul>
                        <h3>
                          <strong>Intelligent NFTs (iNFTs)</strong>
                        </h3>
                        <p>
                          AI Agents grew exponentially throughout 2024 by all metrics, and are still
                          only scratching the surface of what’s to come.&nbsp;
                        </p>
                        <p>
                          <strong>
                            That being said, the future of AI agents lies in Intelligent NFTs, known
                            as iNFTs.
                          </strong>
                        </p>
                        <p>
                          These represent the next era of crypto AI and are a fusion of Artificial
                          Intelligence (AI) and NFTs. At present, on-chain AI agents are controlled
                          by centralized teams that control and monetize the agents.&nbsp;
                        </p>
                        <p>With iNFTs, AI agents are represented as NFTs which introduces several key advantages:</p>
                        <ul role="list">
                          <li>
                            <strong>Transferability: </strong>AI agents can be freely bought, sold,
                            or transferred between owners, with their value reflecting their
                            capabilities and earnings.
                          </li>
                          <li>
                            <strong>Full Decentralization:</strong> No longer owned and managed by a
                            single team, iNFTs ensure decentralized control over AI agents.
                          </li>
                          <li>
                            <strong>Asset Control:</strong> Owners have exclusive rights to manage
                            and claim all assets, earnings, and gains generated by their AI agents.
                          </li>
                          <li>
                            <strong>Royalties:</strong> Those creating AI-NFTs can earn a percentage
                            of revenue every time their AI agents are resold on secondary markets.
                          </li>
                        </ul>
                        <p>
                          Crucial to the above is that each Agent has its own metadata, which can be
                          thought of as the agent’s “intelligence”. This data must, in turn, be
                          securely encrypted, as it’s what differentiates each agent.
                        </p>
                        <p>
                          At present, existing NFT standards do not support this, which is why
                          ERC-7857 is significant.
                        </p>
                        <h3>
                          <strong>Issues with Existing Standards</strong>
                        </h3>
                        <p>
                          Representing AI agents as NFTs provides a means of tokenizing their
                          ownership and capabilities, making them fully composable within on-chain
                          ecosystems. However, existing NFT standards fall short in addressing the
                          specific requirements of AI agents, particularly around metadata privacy,
                          secure transfers, and dynamic functionality.
                        </p>
                        <p>
                          NFT standards have introduced golden ages of various on-chain assets, with
                          ERC-721 with{' '}
                          <a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-721/">
                            ERC-721
                          </a>{' '}
                          and{' '}
                          <a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/">
                            ERC-1155
                          </a>{' '}
                          being two of the most common standards used today.&nbsp;
                        </p>
                        <p>
                          <strong>ERC-721</strong> is widely adopted for representing unique,
                          non-fungible assets such as digital art, collectibles, and in-game items.
                          Each token is one-of-a-kind and tied to static metadata, such as a URI
                          that points to a JSON file. <strong>ERC-1155</strong>, on the other hand,
                          is a <strong>Multi-Token Standard</strong> that supports both fungible and
                          non-fungible tokens within the same smart contract. It’s commonly used in
                          gaming, where items may be fungible (e.g., potions or currency) or
                          non-fungible (e.g., rare swords or skins). This standard also allows for
                          batch operations, making it efficient for managing large collections of
                          tokens.
                        </p>
                        <p>
                          While these standards excel in their respective domains, they are
                          insufficient for AI agents, which introduce unique challenges:
                        </p>
                        <ol role="list">
                          <li>
                            <strong>Metadata is Static and Public</strong>
                          </li>
                        </ol>
                        <p>
                          With ERC-721, metadata is typically stored as a{' '}
                          <a href="https://blog.ueex.com/crypto-terms/uniform-resource-identifier-uri/">
                            URI
                          </a>
                          , which points to a JSON file on IPFS or in a centralized service. This
                          data is static and public, while AI agents have rapidly changing
                          information as they update their models using real-time data.
                        </p>
                        <p>
                          This is critical as metadata is essentially an agent’s intelligence and
                          personality, as it contains all the unique information and features that
                          make up an agent.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>No Secure Metadata Transfer</strong>
                          </li>
                        </ol>
                        <p>
                          When ERC-721 tokens are transferred, only the ownership of the TokenID is
                          transferred, rather than the underlying metadata. The recipient gains the
                          NFT but doesn’t automatically gain access to any associated private or
                          encrypted data.&nbsp;
                        </p>
                        <p>
                          With AI agents, the buyer must also transfer access to the agent&apos;s core
                          capabilities, such as its neural model, memory, or behavior, as well as its
                          metadata, which requires encryption and private handling. ERC-721 cannot
                          handle this.
                        </p>
                        <ol role="list">
                          <li>
                            <strong>No Native Support for Encryption or Privacy</strong>
                          </li>
                        </ol>
                        <p>
                          ERC-721 doesn’t natively support encryption or private storage for
                          sensitive metadata. This is problematic for AI agents, as many include
                          proprietary or sensitive data (e.g., a custom-trained neural network or
                          private user data) so they cannot be represented as iNFTs.
                        </p>
                        <p>To illustrate the above three challenges, let’s use an example.</p>
                        <p>
                          Imagine you own an iNFT on an ERC-721 platform. The agent is highly
                          valuable because it has been trained on proprietary datasets and has
                          learned to interact in a specific way. Now:
                        </p>
                        <ol role="list">
                          <li>You sell the NFT on a marketplace.</li>
                          <li>
                            The buyer receives the ERC-721 tokenId but has no access to the iNFT’s
                            metadata because it’s stored privately.
                          </li>
                          <li>
                            Even if the metadata were accessible, it’s unclear how to transfer it
                            securely and verifiably to the buyer while protecting its privacy.
                          </li>
                        </ol>
                        <p>
                          The result is that the buyer receives an incomplete agent and cannot use
                          it as intended, which is a major limitation to the advancement of crypto
                          AI.
                        </p>
                        <h4>
                          <strong>Key Features of ERC-7857</strong>
                        </h4>
                        <p>
                          Here, we’ll provide a brief overview of the advantages of ERC-7857, before
                          providing a walkthrough of how it works in practice.
                        </p>
                        <p>
                          ERC-7857 addresses the critical gaps in existing NFT standards, making it
                          uniquely suited for representing and transferring AI agents in
                          decentralized ecosystems. Here’s a brief overview of its advantages:
                        </p>
                        <ul role="list">
                          <li>
                            <strong>Privacy-Preserving Metadata: </strong>Unlike ERC-721 and
                            ERC-1155, ERC-7857 enables the secure storage and transfer of sensitive
                            metadata. iNFT metadata, which can be considered its “intelligence” and
                            is what differentiates them, can be encrypted and kept private, ensuring
                            proprietary data remains protected.
                          </li>
                          <li>
                            <strong>Secure Metadata Transfers: </strong>ERC-7857 facilitates the
                            transfer of both ownership and metadata in a privacy-preserving and
                            verifiable manner. This ensures the new owner receives the complete AI
                            agent, including its functional capabilities, without risking data
                            exposure.
                          </li>
                          <li>
                            <strong>Fast Data Management: </strong>AI agents quickly evolve over
                            time, with continuously updating models and behaviors. ERC-7857 supports
                            dynamic metadata, enabling the agent’s state to be updated and preserved
                            securely within the NFT framework.
                          </li>
                          <li>
                            <strong>Integration with Decentralized Storage: </strong>By integrating
                            with decentralized storage systems like 0G Storage, ERC-7857 ensures
                            that metadata is permanently and securely accessible. This allows for
                            tamper-proof data management while preserving accessibility for
                            authorized owners.
                          </li>
                          <li>
                            <strong>Verifiable Ownership and Control: </strong>ERC-7857 introduces
                            cryptographic proofs and oracles to validate metadata transfers. This
                            provides a layer of trust and ensures the integrity of both the metadata
                            and the transfer process.
                          </li>
                          <li>
                            <strong>AI-Specific Use Cases: </strong>ERC-7857 is purpose-built for AI
                            agents, enabling features like agent lifecycle management. Agents can
                            verify ownership before performing tasks, preventing unauthorized usage
                            and enhancing functionality in marketplaces, enterprise solutions, and
                            beyond.
                          </li>
                        </ul>
                        <p>
                          By addressing the limitations of existing standards, ERC-7857 provides a
                          robust, scalable framework for AI agents to thrive in decentralized
                          ecosystems. Let’s now dive into the technical details of how this standard
                          works in practice.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t31_div028">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f2201a0eea0f425491_MUV4PFX8PbdQTeCafaIpY3nFpg.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <h3>
                          <strong>How ERC-7857 Works in Practice</strong>
                        </h3>
                        <p>There are a few distinct steps to how this works.</p>
                        <h3>
                          <strong>Step 1: Metadata Encryption and Hash Commitment</strong>
                        </h3>
                        <p>
                          Each AI agent&apos;s metadata (e.g., neural network model, memory, character
                          traits) is stored in an encrypted form for privacy. A hash commitment is
                          generated from this encrypted metadata, which serves as proof of its
                          authenticity without exposing the actual content.&nbsp;
                        </p>
                        <p>
                          The sender (current owner of the agent NFT) has access to the encrypted
                          metadata and the corresponding hash.
                        </p>
                        <h3>
                          <strong>Step 2: AI Agent Transfer</strong>
                        </h3>
                        <p>
                          When the agent NFT is sold or transferred, the metadata must also change
                          hands securely. To facilitate this, a trusted oracle decrypts the original
                          metadata securely. It might use a Trusted Execution Environment (TEE), a
                          privacy-preserving technique, to keep data private.
                        </p>
                        <p>
                          The oracle generates a <strong>new encryption key</strong> for the metadata
                          and encrypts it again using this new key. The new encrypted metadata, along
                          with its new hash, is published to a decentralized storage system such as
                          0G Storage.
                        </p>
                        <h3>
                          <strong>Step 3: Receiver-Specific Key</strong>
                        </h3>
                        <p>
                          To ensure only the new owner can access the metadata, the{' '}
                          <strong>new encryption key</strong> is encrypted using the{' '}
                          <strong>public key</strong> of the receiver (the buyer or new NFT owner).
                        </p>
                        <p>
                          This encrypted key is sent to the <strong>sender</strong>, who provides it
                          as part of the NFT transfer process.
                        </p>
                        <p>
                          The <strong>receiver</strong> (new owner) acknowledges that they can
                          access the newly encrypted metadata by signing the metadata hash with their
                          private key. The oracle also provides <strong>proof</strong> verifying that
                          the new encrypted metadata was derived from the original metadata.
                        </p>
                        <p>
                          Together, these proofs (the receiver’s acknowledgment and the oracle’s
                          validation) form the proof parameter required for the NFT transfer&quot;
                          for clarity.
                        </p>
                        <h3>
                          <strong>Step 4: Finalizing the Transfer</strong>
                        </h3>
                        <p>
                          The <strong>transfer() interface</strong> in the ERC-7857 smart contract
                          is invoked with:
                        </p>
                        <ul role="list">
                          <li>The sender&apos;s proof of accessibility.</li>
                          <li>The oracle&apos;s proof of metadata validity.</li>
                          <li>The receiver&apos;s signature acknowledges accessibility.</li>
                          <li>
                            The encrypted key for the metadata (encrypted with the receiver’s public
                            key).
                          </li>
                        </ul>
                        <p>
                          The smart contract verifies all these proofs. If valid, the NFT transfer is
                          completed and the encrypted metadata key is published to the receiver.
                        </p>
                        <p>The receiver decrypts the metadata key using their private key.</p>
                        <p>
                          With the key, the receiver can now access the AI agent’s encrypted metadata
                          and fully utilize the agent.
                        </p>
                        <h3>
                          <strong>ERC-7857 In Application</strong>
                        </h3>
                        <p>
                          ERC-7857 provides AI developers with a powerful new standard for tokenizing,
                          trading, and securely managing AI agents as iNFTs. The ability to securely
                          transfer both ownership and private metadata makes it an essential tool for
                          advancing the Web3 AI space.
                        </p>
                        <figure className="w-richtext-align-center w-richtext-figure-type-image">
                          <div className="t31_div029">
                            <img
                              alt=""
                              src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f2201a0eea0f425494_ND1lJHZVHFeN0wD5yMw1cDQCT4Y.avif"
                              loading="lazy"
                            />
                          </div>
                        </figure>
                        <p>Some use cases that we find interesting include:</p>
                        <ol role="list">
                          <li>
                            <strong>Agent Marketplaces:</strong> Developers or creators can sell
                            trained iNFTs on decentralized marketplaces (like OpenSea for agents).
                            The ERC-7857 standard ensures that buyers receive the agent’s full
                            intelligence (metadata) securely and verifiably.
                          </li>
                          <li>
                            <strong>Personalized Automation Agents:</strong> Individuals can own AI
                            agents customized for personal workflows, such as automating on-chain
                            trading, claiming airdrops, or managing digital assets on their behalf.
                            The agents, trained with what they’ve learnt, can then be sold given
                            their status as an NFT.
                          </li>
                          <li>
                            <strong>Enterprise AI Ownership: </strong>Enterprises can build proprietary
                            AI agents tailored to internal needs (e.g., customer support bots, and
                            financial advisors) and securely transfer or lease these agents to
                            subsidiaries or clients.
                          </li>
                          <li>
                            <strong>AI-as-a-Service (AIaaS): </strong>AI agents can be tokenized and
                            leased on subscription models.
                          </li>
                          <li>
                            <strong>Agent Collaboration and Composability:</strong> AI agents can be
                            combined or traded between developers to enhance functionality, such as
                            combining the metadata and proprietary algorithms of a creative AI agent
                            and data analytics agent.
                          </li>
                          <li>
                            <strong>Intellectual Property Monetization: </strong>Tokenizing AI models
                            as NFTs enables developers to monetize their creations while retaining
                            control over how and when they are used.
                          </li>
                        </ol>
                        <p>
                          This is only scratching the surface of what’s possible, especially as the
                          quantity and variety of AI agents continue to expand.
                        </p>
                        <h3>
                          <strong>Want to Build with 0G?</strong>
                        </h3>
                        <p>
                          0G is primarily renowned for our work in bringing AI on-chain through our
                          various solutions, such as 0G Storage, 0G DA, and 0G Services Marketplace.
                          We’ve recently raised $325M to help us grow and are busy partnering with an
                          extensive range of top projects across every Web3 vertical.
                        </p>
                        <p>
                          Our introduction of ERC-7857 illustrates another step that we have taken to
                          advance the crypto AI space, and we consider it worthwhile for any ambitious
                          projects and developers to reach out to discuss how this standard could
                          support their growth.
                        </p>
                        <p>
                          If you are interested in learning how we can support your team,{' '}
                          <a href="https://discord.com/invite/0glabs">please reach out via Discord.</a>
                        </p>
                        <p>
                          To stay up-to-date, <a href="https://x.com/0G_labs">follow us on Twitter.</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="t31_section_filter section_filter">
            <div className="t31_div030 blog_more-blog">
              <h5>Related news:</h5>
            </div>
          </section>

          <div className="t31_div031 w-dyn-list t31_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="t31_div032 cms-grid_list w-dyn-items">
              <div role="listitem" className="t31_div033 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-s-whitepaper-a-complete-breakdown"
                  className="t31_a004 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t31_div034 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif"
                      loading="lazy"
                      alt=""
                      className="t31_img003 cms-grid_image"
                    />
                    <div className="t31_div035 spacer-medium hide-mobile-portrait"></div>
                    <div className="t31_div036 blog_contnet-wrapper">
                      <div className="t31_div037 blog_meta-wrapper">
                        <div className="t31_div038">Tech</div>
                        <div className="t31_div039 icon-embed-custom w-embed">
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
                        <div className="t31_div040">Sep 5, 2024</div>
                      </div>
                      <div className="t31_div041 spacer-xmedium"></div>
                      <h3 className="t31_h3_001 heading-style-h5">
                        0G&apos;s Whitepaper: A Complete Breakdown
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t31_div042 cms-grid_item w-dyn-item">
                <a
                  href="/blog/0g-hits-11k-tps-per-shard"
                  className="t31_a005 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t31_div043 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif 1147w"
                      className="t31_img004 cms-grid_image"
                    />
                    <div className="t31_div044 spacer-medium hide-mobile-portrait"></div>
                    <div className="t31_div045 blog_contnet-wrapper">
                      <div className="t31_div046 blog_meta-wrapper">
                        <div className="t31_div047">Tech</div>
                        <div className="t31_div048 icon-embed-custom w-embed">
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
                        <div className="t31_div049">Aug 25, 2025</div>
                      </div>
                      <div className="t31_div050 spacer-xmedium"></div>
                      <h3 className="t31_h3_002 heading-style-h5">
                        Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits
                        11,000 TPS with Parallel Consensus per Shard
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t31_div051 cms-grid_item w-dyn-item">
                <a
                  href="/blog/worlds-first-distributed-100b-parameter-ai"
                  className="t31_a006 cms-grid_content-wrapper is-blog w-inline-block"
                >
                  <div className="t31_div052 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif 1147w"
                      className="t31_img005 cms-grid_image"
                    />
                    <div className="t31_div053 spacer-medium hide-mobile-portrait"></div>
                    <div className="t31_div054 blog_contnet-wrapper">
                      <div className="t31_div055 blog_meta-wrapper">
                        <div className="t31_div056">Tech</div>
                        <div className="t31_div057 icon-embed-custom w-embed">
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
                        <div className="t31_div058">Aug 7, 2025</div>
                      </div>
                      <div className="t31_div059 spacer-xmedium"></div>
                      <h3 className="t31_h3_003 heading-style-h5">
                        Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+
                        Parameter AI Model
                      </h3>
                    </div>
                  </div>
                </a>
              </div>

              <div role="listitem" className="t31_div060 cms-grid_item w-dyn-item">
                <a href="/blog/0g-storage" className="t31_a007 cms-grid_content-wrapper is-blog w-inline-block">
                  <div className="t31_div061 blog_content">
                    <img
                      src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic-p-500.avif 500w, https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif 1147w"
                      className="t31_img006 cms-grid_image"
                    />
                    <div className="t31_div062 spacer-medium hide-mobile-portrait"></div>
                    <div className="t31_div063 blog_contnet-wrapper">
                      <div className="t31_div064 blog_meta-wrapper">
                        <div className="t31_div065">Tech</div>
                        <div className="t31_div066 icon-embed-custom w-embed">
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
                        <div className="t31_div067">Jul 3, 2025</div>
                      </div>
                      <div className="t31_div068 spacer-xmedium"></div>
                      <h3 className="t31_h3_004 heading-style-h5">0G Storage: Built for the AI Era</h3>
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

