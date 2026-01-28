import React, { useState } from 'react';
import './Foundation04.css';

export default function Foundation04() {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  const handleSocialShare = (platform, e) => {
    e.preventDefault();
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate");
    let shareUrl = "";

    if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'x') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="f04_container">
      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
          animation: 'fadeIn 0.3s, fadeOut 0.3s 1.7s'
        }}>
          Link copied to clipboard!
        </div>
      )}

      <main className="f04_main-wrapper">
        <section className="f04_section_hero f04_is-vertical">
          <div className="f04_padding-global">
            <div className="f04_container-large">
              <div className="f04_hero_bg-wrapper">
                <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w" alt="" className="f04_hero_bg-image" />
                <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp" loading="lazy" alt="" className="f04_hero_bg-image f04_w-dyn-bind-empty" />
                <div className="f04_hero_bg-gradient f04_is-blog"></div>
              </div>
              <div className="f04_hero_content-component f04_is-vertical">
                <div className="f04_blog_meta-wrapper f04_is-white">
                  <div>Oct 22, 2024</div>
                  <div className="f04_icon-embed-custom f04_w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <circle cx="2" cy="2" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>0G Foundation</div>
                </div>
                <div className="f04_spacer-small"></div>
                <div className="f04_max-width-large f04_text-align-center">
                  <h1 className="f04_heading-style-h3">0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate</h1>
                </div>
                <div className="f04_spacer-small"></div>
                <div className="f04_blog_button-wrapper">
                  <a href="#" onClick={handleCopy} className="f04_link-icon-light f04_is-static f04_w-inline-block">
                    <div className="f04_icon-embed-xsmall f04_w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" onClick={(e) => handleSocialShare('linkedin', e)} className="f04_link-icon-light f04_is-static f04_w-inline-block">
                    <div className="f04_icon-embed-xsmall f04_w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" onClick={(e) => handleSocialShare('x', e)} className="f04_link-icon-light f04_is-static f04_w-inline-block">
                    <div className="f04_icon-embed-xsmall f04_w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M16.2511 0.25L11.1976 5.84192L6.82829 0.25H0.5L8.06131 9.82111L0.894939 17.75H3.9636L9.49461 11.6322L14.3284 17.75H20.5L12.6179 7.66285L19.318 0.25H16.2511ZM15.1748 15.9731L4.08133 1.93359H5.90492L16.8741 15.9731H15.1748Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="f04_section_legal-content">
          <div className="f04_padding-global">
            <div className="f04_padding-section-medium">
              <div className="f04_container-small">
                <div>
                  <div className="f04_legal-content_component">
                    <div className="f04_blog-rich-text f04_w-richtext">
                      <p>The 0G Foundation is proud to announce its much-anticipated AI Alignment Node Sale, a critical step in decentralizing this critical AI infrastructure. These alignment nodes will play a pivotal role in supporting 0G’s vision of making AI a public good. The mission is to create a decentralized future where AI is controlled by the community and data remains secure, transparent, and contributes to the public good.</p>
                      <p>The 0G AI Alignment Node Sale is distributed across <strong>32 tiers</strong>, starting at <strong>0.05 ETH</strong>. Below, we’ll walk you through everything you need to know about the sale, including its significance, benefits, and how to participate.</p>
                      <h3><strong>What is a Node?</strong></h3>
                      <p>In a blockchain network, nodes are the backbone—servers or computers that validate transactions and maintain network security. Nodes ensure the integrity of the system by identifying and penalizing any dishonest actions, making them critical to the success of decentralized networks. </p>
                      <h3><strong>What is a 0G AI Alignment Node?</strong></h3>
                      <p>A 0G AI Alignment Node is a type of node which monitors the functionality of 0G’s nodes (DA, Storage, Serving, Validator nodes), identifies malicious data injection, and supports AI model training by reducing drift. </p>
                      <p>In the 0G Node Sale, NFTs containing node license will be sold to the 0G community in order to gain access to operate an AI alignment node and earn token emissions for helping to secure the network.</p>
                      <p>0G is introducing an innovative node sale mechanism aimed at true decentralization, departing from the typical low-float, high fully-diluted-valuation token sales. The goal is to decentralize the network's ownership while maximizing its utility and security. This fair sale approach prioritizes long-term involvement and shared ownership within the 0G ecosystem.</p>
                      <p>0G's nodes will offer real, evolving utility, rewarding participants with emissions for securing the network and contributing to the rapidly growing 0G ecosystem with over 300+ partners.</p>
                      <p>In line with our community-first ethos, we are allocating <strong>early tiers of the node sale </strong>to our loyal 0G community. </p>
                      <h3><strong>Why Run an 0G AI Alignment Node?</strong></h3>
                      <p>The AI space today is highly centralized, allowing AI systems to operate with limited transparency. By bringing AI on-chain, the 0G network makes the mechanics of AI much more transparent, enabling node operators to help ensure that AI and its operators behave honestly.</p>
                      <p>As the 0G ecosystem matures, AI Alignment Nodes will monitor <strong>AI model drift</strong> and ensure that AI remains accurate, unbiased, and secure. This includes addressing issues like <strong>bias</strong> in large language models (LLMs), and preventing the injection of <strong>inaccurate data into AI models and AI Agent networks</strong>.</p>
                      <p>By running a node, participants contribute to:</p>
                      <ul role="list">
                        <li><strong>Checker functionality: </strong>Ensuring other nodes (DA, storage, validator, serving,etc.) within 0G ecosystem are functioning properly.</li>
                        <li><strong>AI Model training: </strong>Detecting AI model drift which may occur during training. </li>
                        <li><strong>Decentralization:</strong> Ensuring the 0G network remains decentralized and resilient.</li>
                        <li><strong>Identification: </strong>Identifying corrupt or malicious data, AI agents/networks, API price feed mismatch so that timely intervention can occur prior to onchain execution. </li>
                        <li><strong>Security:</strong> Enhancing network security by verifying transactions and keeping AI accountable.</li>
                        <li><strong>AI Processing Power: </strong>Supporting AI computations and enabling on-chain AI services.</li>
                      </ul>
                      <p> The above mentioned functionalities will be instituted in phases to meet the requirements of the 0g ecosystem.</p>
                      <p>Up to 15% of the total $0G ecosystem supply is allocated to these operators to build and maintain the ecosystem. </p>
                      <h3><strong>How to Buy an 0G AI Alignment Node NFT</strong></h3>
                      <p>Purchasing an 0G AI Alignment Node NFT is a straightforward process that unlocks opportunities for community participation and long-term benefits within the 0G ecosystem. Follow these 7 simple steps to secure your node NFT:</p>
                      <ol role="list">
                        <li><strong>Confirm eligibility: </strong>Only persons from approved countries are eligible to participate. Please see<a href="https://0gfoundation.ai/disclaimer"> disclaimer</a>.  </li>
                        <li><strong>Go to the Node Sale Platform: </strong>The node sale platform is located at node.0g.ai and connect your crypto wallet.</li>
                        <li><strong>Choose Your Payment Method: </strong>Payments can be made in multiple tokens across various blockchain ecosystems.</li>
                        <li><strong>View Available Tiers: </strong>Check which node sale tiers are open. There are 32 tiers in total.  Price in tier 1 starts at 0.05 eth and  increases every tier.</li>
                        <li><strong>Select Quantity: </strong>Choose how many nodes NFTs you want to purchase. Early tiers have purchase limits to ensure fair access.</li>
                        <li><strong>Apply Referral or Discount Codes:</strong> Use any referral or discount codes you have during checkout. </li>
                        <li><strong>Complete Purchase: </strong>Confirm the price and approve the transaction in your wallet. After purchase, you’ll receive a confirmation notification.</li>
                      </ol>
                      <h3><strong>What happens after I purchase the NFT?</strong></h3>
                      <ol role="list">
                        <li><strong>NFT Airdrop: </strong>At a later date, after the node sale completion, an NFT will be airdropped to your wallet which will contain the 0G AI alignment node license. This NFT is non-transferable for 12 months.</li>
                        <li><strong>Node Activation:</strong> Node activation instructions will be communicated at a later date.</li>
                        <li><strong>Reward Claim: </strong>KYC verified users outside of the restricted territories will be eligible to claim their node rewards.</li>
                      </ol>
                      <h3><strong>Key Dates for the 0G Node Sale</strong></h3>
                      <ul role="list">
                        <li><strong>Whitelist Sale Launch:</strong> November 11th, 2024, at 12 PM UTC (available for 2 days).</li>
                        <li><strong>Community Sale Launch: </strong>November 13th, 2024, at 12 PM UTC (open to all eligible users).</li>
                      </ul>
                      <h3><strong>0G Node Sale Details</strong></h3>
                      <ul role="list">
                        <li><strong>Official Node Sale Landing Page: </strong><a href="https://0gfoundation.ai/" target="_blank">https://0gfoundation.ai/</a></li>
                        <li><strong>Node Sale Phases: </strong>Whitelist Sale (Nov 11), Community Sale (Nov 13)</li>
                        <li><strong>Transferability:</strong> Node NFTs are non-transferable for 12 months to ensure long-term commitment.</li>
                        <li><strong>Pricing: </strong>Prices increase with each tier, starting at 0.05 ETH per node.</li>
                        <li><strong>Node Activation:</strong> Estimated in Q4 2024. </li>
                        <li><strong>Detailed Node Sale Information: </strong><a href="https://docs.0g.ai/">https://docs.0g.ai/</a> </li>
                        <li><strong>Discord Whitelist Registration</strong> Closes on November 5th, 2024, at 12 PM UTC.</li>
                        <li><br/></li>
                      </ul>
                      <h3><strong>Important Considerations for Participants</strong></h3>
                      <ul role="list">
                        <li><strong>Eligibility/Disclaimer: </strong>The 0G Node Sale is limited to eligible participants in certain countries.  Please review all disclaimers and important details regarding the 0G Node Sale by visiting our disclaimer here: 0g.node/disclaimer. Only persons who meet the requirements for the sale are allowed to participate.</li>
                        <li><strong>Non-Transferability:</strong> Node licenses are non-transferable for the first 12 months to promote long-term commitment. Emissions will unlock over 36 months.</li>
                        <li><strong>Payment Options: </strong>Payments can be made across multiple blockchains, ensuring broad accessibility.</li>
                        <li><strong>KYC Requirements: </strong>All participants must complete KYC procedures before claiming and operating their nodes to ensure regulatory compliance.</li>
                      </ul>
                      <h3><strong>How to Get Whitelisted</strong></h3>
                      <p>To gain early access to the 0G AI Alignment Node Sale, you need to secure a spot on the whitelist. Here’s how you can do it:</p>
                      <ul role="list">
                        <li><strong>Community Participation: </strong>Stay active in 0G’s community channels (Discord, Telegram, Twitter) to participate in events, challenges, or giveaways.</li>
                        <li><strong>Whitelist Giveaways:</strong> Keep an eye on whitelist giveaways through launchpads, AMA’s, and KOLs.</li>
                        <li><strong>Whitelist Application Form</strong> <strong>for 0G Discord: </strong>Please apply for whitelist <a href="https://docs.google.com/forms/d/e/1FAIpQLScZSiIn3WBEdztzCObFBnLa0c6f1YoRwlN_eI8NxGPuG4w-zg/viewform">here</a>!
                          <br/><br/></li>
                      </ul>
                      <h3><strong>Join the AI Revolution</strong></h3>
                      <p>Whether you're a developer, investor, or blockchain enthusiast, the 0G AI Alignment Node Sale is your opportunity to play a pivotal role in shaping the future of decentralized AI. Don’t miss your chance to be part of the next wave of blockchain innovation—secure your node and contribute to the future of AI on the blockchain.</p>
                      <p>We highly recommend staying tuned via <a href="https://x.com/0G_labs">0G’s Twitter</a> and <a href="https://discord.com/invite/0glabs">Discord</a> for the latest updates!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="f04_section_filter">
          <div className="f04_blog_more-blog">
            <h5>Related news:</h5>
          </div>
        </section>
        <div className="f04_w-dyn-list">
          <div role="list" className="f04_cms-grid_list f04_w-dyn-items">
            <div role="listitem" className="f04_cms-grid_item f04_w-dyn-item">
              <a href="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" className="f04_cms-grid_content-wrapper f04_is-blog f04_w-inline-block">
                <div className="f04_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif" loading="lazy" alt="" className="f04_cms-grid_image" />
                  <div className="f04_spacer-medium f04_hide-mobile-portrait"></div>
                  <div className="f04_blog_contnet-wrapper">
                    <div className="f04_blog_meta-wrapper">
                      <div>0G Foundation</div>
                      <div className="f04_icon-embed-custom f04_w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <circle cx="2" cy="2" r="2" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>Oct 18, 2024</div>
                    </div>
                    <div className="f04_spacer-xmedium"></div>
                    <h3 className="f04_heading-style-h5">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h3>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="f04_cms-grid_item f04_w-dyn-item">
              <a href="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" aria-current="page" className="f04_cms-grid_content-wrapper f04_is-blog f04_w-inline-block f04_w--current">
                <div className="f04_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b12172a418ac84b9f77_RobvMLasZpYsEsWKhddYWtsoE.avif" loading="lazy" alt="" className="f04_cms-grid_image" />
                  <div className="f04_spacer-medium f04_hide-mobile-portrait"></div>
                  <div className="f04_blog_contnet-wrapper">
                    <div className="f04_blog_meta-wrapper">
                      <div>0G Foundation</div>
                      <div className="f04_icon-embed-custom f04_w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <circle cx="2" cy="2" r="2" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>Oct 22, 2024</div>
                    </div>
                    <div className="f04_spacer-xmedium"></div>
                    <h3 className="f04_heading-style-h5">0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate</h3>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="f04_cms-grid_item f04_w-dyn-item">
              <a href="/blog/0g-node-sale-purchasing-guide" className="f04_cms-grid_content-wrapper f04_is-blog f04_w-inline-block">
                <div className="f04_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b54_cuJhybFI6jVb7IhhZaQweZDv3JU.avif" loading="lazy" alt="" className="f04_cms-grid_image" />
                  <div className="f04_spacer-medium f04_hide-mobile-portrait"></div>
                  <div className="f04_blog_contnet-wrapper">
                    <div className="f04_blog_meta-wrapper">
                      <div>0G Foundation</div>
                      <div className="f04_icon-embed-custom f04_w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <circle cx="2" cy="2" r="2" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>Nov 6, 2024</div>
                    </div>
                    <div className="f04_spacer-xmedium"></div>
                    <h3 className="f04_heading-style-h5">0G Node Sale Purchasing Guide</h3>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="f04_cms-grid_item f04_w-dyn-item">
              <a href="/blog/0g-node-sale-results" className="f04_cms-grid_content-wrapper f04_is-blog f04_w-inline-block">
                <div className="f04_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif" loading="lazy" alt="" className="f04_cms-grid_image" />
                  <div className="f04_spacer-medium f04_hide-mobile-portrait"></div>
                  <div className="f04_blog_contnet-wrapper">
                    <div className="f04_blog_meta-wrapper">
                      <div>0G Foundation</div>
                      <div className="f04_icon-embed-custom f04_w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <circle cx="2" cy="2" r="2" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>Dec 20, 2024</div>
                    </div>
                    <div className="f04_spacer-xmedium"></div>
                    <h3 className="f04_heading-style-h5">0G Node Sale Results</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
