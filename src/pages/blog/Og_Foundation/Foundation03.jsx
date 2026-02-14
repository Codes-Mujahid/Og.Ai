import React, { useState } from 'react';
import './Foundation03.css';

export default function Foundation03() {
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
    const text = encodeURIComponent("0G Node Sale Purchasing Guide");
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
    <div className="f03_container">
      <div className="f03_page-wrapper">
        <div className="f03_global-styles f03_w-embed">
            {/* Styles are imported via CSS file */}
        </div>
        <div fs-socialshare-element="content" className="f03_hide">
            <div>Check out this insightful blog post: </div>
            <div>0G Node Sale Purchasing Guide</div>
        </div>
        <main className="f03_main-wrapper">
            <section className="f03_section_hero f03_is-vertical">
                <div className="f03_padding-global">
                    <div className="f03_container-large">
                        <div className="f03_hero_bg-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                                alt="" className="f03_hero_bg-image" /><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp" loading="lazy" alt="" className="f03_hero_bg-image f03_w-dyn-bind-empty" />
                            <div className="f03_hero_bg-gradient f03_is-blog"></div>
                        </div>
                        <div className="f03_hero_content-component f03_is-vertical">
                            <div className="f03_blog_meta-wrapper f03_is-white">
                                <div>Nov 6, 2024</div>
                                <div className="f03_icon-embed-custom f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                <div>0G Foundation</div>
                            </div>
                            <div className="f03_spacer-small"></div>
                            <div className="f03_max-width-large f03_text-align-center">
                                <h1 className="f03_heading-style-h3">0G Node Sale Purchasing Guide</h1>
                            </div>
                            <div className="f03_spacer-small"></div>
                            <div className="f03_blog_button-wrapper">
                                <a onClick={handleCopy} href="#" className="f03_link-icon-light f03_is-static f03_w-inline-block">
                                    <div className="f03_icon-embed-xsmall f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z" fill="currentColor"/>
</svg></div>
                                </a>
                                <a onClick={(e) => handleSocialShare('linkedin', e)} href="#" className="f03_link-icon-light f03_is-static f03_w-inline-block">
                                    <div className="f03_icon-embed-xsmall f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z" fill="currentColor"/>
</svg></div>
                                </a>
                                <a onClick={(e) => handleSocialShare('x', e)} href="#" className="f03_link-icon-light f03_is-static f03_w-inline-block">
                                    <div className="f03_icon-embed-xsmall f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M16.2511 0.25L11.1976 5.84192L6.82829 0.25H0.5L8.06131 9.82111L0.894939 17.75H3.9636L9.49461 11.6322L14.3284 17.75H20.5L12.6179 7.66285L19.318 0.25H16.2511ZM15.1748 15.9731L4.08133 1.93359H5.90492L16.8741 15.9731H15.1748Z" fill="currentColor"/>
</svg></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="f03_section_legal-content">
                <div className="f03_padding-global">
                    <div className="f03_padding-section-medium">
                        <div className="f03_container-small">
                            <div>
                                <div className="f03_legal-content_component">
                                    <div className="f03_blog-rich-text f03_w-richtext">
                                        <p>The <strong>0G Foundation</strong> is excited about its <strong>AI Alignment Node Sale,</strong> which will go live on November 11th for whitelisted members and November 13th for the general public.</p>
                                        <p>This is an essential step in building a decentralized AI ecosystem, and by participating in this sale, you&#x27;ll contribute to the future of AI as a public good. With <strong>175,500 nodes available across 32 tiers</strong>,
                                            each activated node helps to secure the 0G ecosystem while being rewarded in turn.</p>
                                        <p>Below we’ll provide an overview of:</p>
                                        <ul role="list">
                                            <li><strong>Node Sale Basics</strong>: Key information covering the purpose of the node sale and the value of AI Alignment Nodes in the 0G network.</li>
                                            <li><strong>Pricing &amp; Structure</strong>: Details on the 32-tier pricing model, availability per tier, and how early buyers benefit from favorable pricing. We’ll also cover <strong>the referral program</strong>,
                                                where you can earn discounts and rewards.</li>
                                            <li><strong>Buying a Node</strong>: A straightforward, step-by-step guide on how to complete your purchase, from eligibility checks to finalizing your node license.</li>
                                            <li><strong>FAQ</strong>: Answers to common questions on node operation, whitelist access, KYC requirements, and distribution, ensuring you have all the information needed for a smooth experience.</li>
                                        </ul>
                                        <h3><strong>Node Sale Basics</strong></h3>
                                        <p>We recently covered the AI Alignment Node Sale in <a href="https://0g.ai/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate">our previous blog post</a>, though in this section we’ll provide
                                            a recap of key details.</p>
                                        <p>A key component of democratizing AI entails having the 0G network highly decentralized. </p>
                                        <p>An <strong>0G AI Alignment Node</strong> plays a key role in this by serving as a special node type designed to monitor other 0G Nodes, including DA Nodes, Storage Nodes, Serving Nodes, and Validator Nodes. </p>
                                        <p>Those who purchase a node license will therefore contribute to the data integrity of 0G’s decentralized infrastructure and be rewarded through token emissions, with up to 15% of the total $0G token supply allocated
                                            to these operators.</p>
                                        <p>The <strong>Node Sale</strong> has two main phases:</p>
                                        <ol role="list">
                                            <li><strong>Whitelist Sale (Nov. 11th)</strong>: Reserved for loyal community members, launchpad participants, and select KOLs and will help 0g to tap into communities already deeply interested in Web3 and decentralized
                                                AI. </li>
                                            <li><strong>Public Sale (Nov. 13th)</strong>: Open to all eligible users.</li>
                                        </ol>
                                        <p><strong>70% </strong>of the nodes are available for whitelist participants, and <strong>30% </strong>are for the public sale. </p>
                                        <p>The NFTs are <strong>non-transferable for the first 12 months</strong>, and emissions from these nodes unlock over a 36-month period.</p>
                                        <p><strong>Pricing Structure &amp; Referrals</strong></p>
                                        <p>The below graphic provides an overview of the node sale, and includes 5 different columns:</p>
                                        <ol role="list">
                                            <li><strong>Tiers:</strong> There are 32 tiers, with buying starting at <strong>Tier 1</strong> and moving progressively to higher tiers as each tier sells out. </li>
                                            <li><strong>Number of Nodes:</strong> The number of nodes available at each tier.</li>
                                            <li><strong>Node License Price (ETH)</strong>: The price per node license in ETH for each tier. The sale starts at 0.05 ETH per node in Tier 1 and gradually increases to 0.97 ETH per node by Tier 32</li>
                                            <li><strong>Tier Implied FDV with 50% Participation</strong>: The implied Fully Diluted Valuation (FDV) for each tier if 50% of the available nodes are purchased at that tier&#x27;s price point.</li>
                                            <li><strong>Tier Implied FDV with 100% Participation</strong>: The implied Fully Diluted Valuation (FDV) if all nodes in each tier are fully purchased at the respective tier prices. </li>
                                            <li><strong>Reward Distribution: </strong></li>
                                        </ol>
                                        <p>The result is that early buyers receive better pricing, and that the FDV depends on the ultimate number of buyers.</p>
                                        <p>Participants can receive a further price discount rebate by applying a unique referral code. </p>
                                        <figure className="f03_w-richtext-align-center f03_w-richtext-figure-type-image">
                                            <div><img alt="" src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b41_H2j7hssRxXVVTUhKRO9OagmWU8.avif" loading="lazy" /></div>
                                        </figure>
                                        <h3><strong>Node Purchase Process</strong></h3>
                                        <p>Buying a Node is easy and below we’ll provide a walkthrough showing each step.</p>
                                        <p>To participate in the <strong>0G AI Alignment Node Sale</strong>, follow these steps:</p>
                                        <ol role="list">
                                            <li><strong>Visit the Node Sale Platform</strong>: Go to the official sale site https://0gfoundation.ai/</li>
                                            <li><strong>Confirm Eligibility</strong>: Check if you’re eligible to participate. (See the eligibility disclaimer <a href="https://0gfoundation.ai/disclaimer">https://0gfoundation.ai/disclaimer</a> for countries and
                                                requirements.)</li>
                                            <li><strong>Choose Sale Type</strong>:
                                                <ul role="list">
                                                    <li><strong>Whitelist Participants</strong>: Access the &quot;Private&quot; tab to view allocated tiers.</li>
                                                    <li><strong>Public Users</strong>: Access the &quot;Public&quot; tab on or after November 13.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Select Tier and Quantity</strong>: Choose the tier and number of nodes you wish to purchase. You may also have a cap on the quantity based on your tier.</li>
                                            <li><strong>Select Asset and Network</strong>: Currently, Arbitrum is the primary network (subject to confirmation), with wrapped ETH (WETH) or other tokens available for payments. If you prefer to pay in other tokens,
                                                go to “Bridge Asset” and we’ll convert your desired chain and token to wETH at the live rate. </li>
                                            <li><strong>Finalize the Purchase</strong>:
                                                <ul role="list">
                                                    <li>Enter any referral or discount codes for potential savings.</li>
                                                    <li>Confirm the transaction in your wallet.</li>
                                                </ul>
                                            </li>
                                            <li><strong>Receive NFT</strong>: Your node license NFT will be delivered to your wallet <strong>3-6 weeks post-purchase</strong>.</li>
                                        </ol>
                                        <h3><strong>FAQ</strong></h3>
                                        <p>If you have any questions or concerns, please begin by referencing the below FAQs. </p>
                                        <p>If your answer is still not resolved, <a href="https://discord.com/invite/0glabs">please reach out to us via Discord</a>.</p>
                                        <p>Commonly asked questions include:</p>
                                        <p><strong>Q: When Can I Operate My Node?</strong></p>
                                        <p>Nodes can be operated once the mainnet launches, projected for Q1 2025.</p>
                                        <p><strong>Q: Can I Run Multiple Nodes?</strong></p>
                                        <p>Yes, participants can run multiple nodes according to network capacity guidelines.</p>
                                        <p>However, tier caps limit the number of nodes per wallet, with lower tiers being more restrictive to enhance decentralization.</p>
                                        <p><strong>Q: How Do Rewards for Alignment Nodes Compare with Other Nodes?</strong></p>
                                        <p>Alignment Nodes generally offer higher rewards due to their specialized roles and responsibilities.</p>
                                        <p><strong>Q: How Will KYC Impact Reward Claims?</strong></p>
                                        <p>KYC is mandatory for claiming rewards. Please double check restricted jurisdictions.</p>
                                        <p><strong>Q: What is the Whitelist? Does It Guarantee a Purchase?</strong></p>
                                        <p>The whitelist is a pre-approved list of participants with exclusive access to certain privileges during the sale. These are parties who have demonstrated early support for 0G and who are aligned with us in making AI
                                            a public good.</p>
                                        <p>However, while Whitelist access guarantees an allocation during the whitelist sale period it doesn’t ensure a purchase if not completed within that timeframe.</p>
                                        <p>You can join the whitelist through community engagement on Discord, X, or <a href="https://docs.google.com/forms/d/e/1FAIpQLScZSiIn3WBEdztzCObFBnLa0c6f1YoRwlN_eI8NxGPuG4w-zg/viewform">by filling out this form</a>.</p>
                                        <p><strong>Q: How Will Node Licenses Be Distributed?</strong></p>
                                        <p>Node licenses will be issued as ERC-721 NFTs to the buyer’s wallet within 3-6 weeks after the sale period.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="f03_section_filter">
                <div className="f03_blog_more-blog">
                    <h5>Related news:</h5>
                </div>
            </section>
            <div className="f03_w-dyn-list">
                <div fs-cmsfilter-element="list" role="list" className="f03_cms-grid_list f03_w-dyn-items">
                    <div role="listitem" className="f03_cms-grid_item f03_w-dyn-item">
                        <a href="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" className="f03_cms-grid_content-wrapper f03_is-blog f03_w-inline-block">
                            <div className="f03_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif" loading="lazy" alt="" className="f03_cms-grid_image" />
                                <div className="f03_spacer-medium f03_hide-mobile-portrait"></div>
                                <div className="f03_blog_contnet-wrapper">
                                    <div className="f03_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f03_icon-embed-custom f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                        <div>Oct 18, 2024</div>
                                    </div>
                                    <div className="f03_spacer-xmedium"></div>
                                    <h3 className="f03_heading-style-h5">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f03_cms-grid_item f03_w-dyn-item">
                        <a href="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" className="f03_cms-grid_content-wrapper f03_is-blog f03_w-inline-block">
                            <div className="f03_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b12172a418ac84b9f77_RobvMLasZpYsEsWKhddYWtsoE.avif" loading="lazy" alt="" className="f03_cms-grid_image" />
                                <div className="f03_spacer-medium f03_hide-mobile-portrait"></div>
                                <div className="f03_blog_contnet-wrapper">
                                    <div className="f03_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f03_icon-embed-custom f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                        <div>Oct 22, 2024</div>
                                    </div>
                                    <div className="f03_spacer-xmedium"></div>
                                    <h3 className="f03_heading-style-h5">0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f03_cms-grid_item f03_w-dyn-item">
                        <a href="/blog/0g-node-sale-purchasing-guide" aria-current="page" className="f03_cms-grid_content-wrapper f03_is-blog f03_w-inline-block f03_w--current">
                            <div className="f03_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b54_cuJhybFI6jVb7IhhZaQweZDv3JU.avif" loading="lazy" alt="" className="f03_cms-grid_image" />
                                <div className="f03_spacer-medium f03_hide-mobile-portrait"></div>
                                <div className="f03_blog_contnet-wrapper">
                                    <div className="f03_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f03_icon-embed-custom f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                        <div>Nov 6, 2024</div>
                                    </div>
                                    <div className="f03_spacer-xmedium"></div>
                                    <h3 className="f03_heading-style-h5">0G Node Sale Purchasing Guide</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f03_cms-grid_item f03_w-dyn-item">
                        <a href="/blog/0g-node-sale-results" className="f03_cms-grid_content-wrapper f03_is-blog f03_w-inline-block">
                            <div className="f03_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif" loading="lazy" alt="" className="f03_cms-grid_image" />
                                <div className="f03_spacer-medium f03_hide-mobile-portrait"></div>
                                <div className="f03_blog_contnet-wrapper">
                                    <div className="f03_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f03_icon-embed-custom f03_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                        <div>Dec 20, 2024</div>
                                    </div>
                                    <div className="f03_spacer-xmedium"></div>
                                    <h3 className="f03_heading-style-h5">0G Node Sale Results</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <div className={`f03_copy-toast ${showToast ? 'f03_show' : ''}`}>
            Link copied to clipboard!
        </div>
      </div>
    </div>
  );
}
