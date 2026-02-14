import React, { useState } from 'react';
import './Foundation01.css';

export default function Foundation01() {
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
    const text = encodeURIComponent("0G Node Sale Results");
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
    <div className="f01_container">
      <div className="f01_page-wrapper">
<div className="f01_global-styles f01_w-embed">
        

        

        
    </div>
    <div fs-socialshare-element="content" className="f01_hide">
        <div>Check out this insightful blog post: </div>
        <div>0G Node Sale Results</div>
    </div>
    <main className="f01_main-wrapper">
        <section className="f01_section_hero f01_is-vertical">
            <div className="f01_padding-global">
                <div className="f01_container-large">
                    <div className="f01_hero_bg-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                            alt="" className="f01_hero_bg-image" /><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp" loading="lazy" alt="" className="f01_hero_bg-image f01_w-dyn-bind-empty" />
                        <div className="f01_hero_bg-gradient f01_is-blog"></div>
                    </div>
                    <div className="f01_hero_content-component f01_is-vertical">
                        <div className="f01_blog_meta-wrapper f01_is-white">
                            <div>Dec 20, 2024</div>
                            <div className="f01_icon-embed-custom f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                            <div>0G Foundation</div>
                        </div>
                        <div className="f01_spacer-small"></div>
                        <div className="f01_max-width-large f01_text-align-center">
                            <h1 className="f01_heading-style-h3">0G Node Sale Results</h1>
                        </div>
                        <div className="f01_spacer-small"></div>
                        <div className="f01_blog_button-wrapper">
                            <a onClick={handleCopy} href="#" className="f01_link-icon-light f01_is-static f01_w-inline-block">
                                <div className="f01_icon-embed-xsmall f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z" fill="currentColor"/>
</svg></div>
                            </a>
                            <a onClick={(e) => handleSocialShare('linkedin', e)} href="#" className="f01_link-icon-light f01_is-static f01_w-inline-block">
                                <div className="f01_icon-embed-xsmall f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z" fill="currentColor"/>
</svg></div>
                            </a>
                            <a onClick={(e) => handleSocialShare('x', e)} href="#" className="f01_link-icon-light f01_is-static f01_w-inline-block">
                                <div className="f01_icon-embed-xsmall f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M16.2511 0.25L11.1976 5.84192L6.82829 0.25H0.5L8.06131 9.82111L0.894939 17.75H3.9636L9.49461 11.6322L14.3284 17.75H20.5L12.6179 7.66285L19.318 0.25H16.2511ZM15.1748 15.9731L4.08133 1.93359H5.90492L16.8741 15.9731H15.1748Z" fill="currentColor"/>
</svg></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="f01_section_legal-content">
            <div className="f01_padding-global">
                <div className="f01_padding-section-medium">
                    <div className="f01_container-small">
                        <div>
                            <div className="f01_legal-content_component">
                                <div className="f01_blog-rich-text f01_w-richtext">
                                    <p>0G has raised over $250M through its Alignment Node Sale, marking a major milestone in our mission to build the world’s first Artificial Intelligence Layer (AIL) and decentralized AI operating system (deAIOS). </p>
                                    <p>With this financial foundation, 0G is accelerating the shift toward Infinite AI: an open, composable ecosystem for building verifiable, on-chain intelligence at scale.</p>
                                    <p>Here’s an overview of what we’ll cover:</p>
                                    <ul role="list">
                                        <li><strong>The Node Sale Results</strong>: Highlighting the number of launchpads, nodes sold, and funds raised.</li>
                                        <li><strong>Rebates and Commissions</strong>: Explaining the structure and benefits for participants post-sale.</li>
                                        <li><strong>How Funds Will Be Used</strong>: Detailing the roadmap for scaling 0G’s mission to decentralize AI.</li>
                                    </ul>
                                    <p><strong>Background on the Node Sale</strong></p>
                                    <p>0G is building the first AIL: a modular, infinitely scalable stack that supports decentralized storage, real-time inference, and data availability optimized for AI. At the heart of this stack is our deAIOS, which empowers
                                        developers to build and scale next-generation AI applications directly onchain.</p>
                                    <p>Decentralization and active community participation are critical to ensure the system’s long-term success, which is where our Node Sale comes in.</p>
                                    <p>Nodes are the backbone of blockchain networks, validating transactions, securing the system, and maintaining data integrity. 0G&#x27;s AI Alignment Nodes go further by monitoring other node types, identifying malicious
                                        or incorrect data, and ensuring accountability across the network. During the ongoing sale, NFTs representing node licenses are being offered at accessible price tiers, empowering the community to operate these
                                        nodes, earn rewards, and contribute to strengthening 0G’s decentralized AI infrastructure.</p>
                                    <p>Distributed across 32 tiers, starting at just 0.05 ETH, the sale has been designed to make participation accessible to a wide range of contributors, empowering them to play a vital role in decentralizing and strengthening
                                        the 0G ecosystem.</p>
                                    <p><strong>Node Sale Results</strong></p>
                                    <p>The response to the Node Sale has far exceeded expectations, with overwhelming interest from across the ecosystem. Since launching on November 11th, 0G has hit several major milestones:</p>
                                    <ul role="list">
                                        <li><strong>18 Launchpads</strong>: Partnerships with Mocalist, Fjord, Swissborg, NodeOps, and more helped drive massive visibility and momentum.</li>
                                        <li><strong>80,000+ Nodes Sold</strong>: Exceeding 54,000 in just the first five days—underscoring high conviction in 0G’s mission.</li>
                                        <li><strong>6,000+ Unique Wallets</strong>: A globally distributed community of buyers and operators.</li>
                                        <li><strong>$28M+ Raised</strong>: In addition to our $40M seed raise, this funding builds a robust foundation for 0G’s AIL.</li>
                                        <li><strong>Rebates and Commissions</strong>: A structured rebate system ensures that participants who contributed to node sales are rewarded, further incentivizing community involvement.</li>
                                    </ul>
                                    <p>This all coincided with our $40M seed round raise led by Hack VC, Delphi Ventures, and Animoca Brands.</p>
                                    <h3><strong>What Happens After the Node Sale?</strong></h3>
                                    <p>Participants in the Node Sale will benefit from a <strong>referral commission and discount structure</strong> designed to reward early supporters. Details include:</p>
                                    <ul role="list">
                                        <li><strong>Commission Incentives</strong>: Partners involved in the sale receive 10%  commission, encouraging ongoing collaboration and ecosystem growth. This attracts KOLs from around the globe to promote the node
                                            sale. </li>
                                        <li><strong>Discount for referral customers: </strong>For customers who were referred, they all received a 10% discount on the sale, as an incentive to participate. </li>
                                    </ul>
                                    <p>Additionally, the sale has laid the groundwork for a node operator ecosystem, where participants will earn token emissions for operating their licenses.</p>
                                    <p><strong>How Funds Will Be Used</strong></p>
                                    <p>The funding from the Node Sale will accelerate the growth of 0G’s modular stack, bringing together compute, storage, and data availability into a unified, decentralized AI layer. Key areas of investment include:</p>
                                    <ul
                                        role="list">
                                        <li><strong>Scaling Infrastructure</strong>: Enhancing server capacity, GPU availability, and overall infrastructure to support large-scale AI applications.</li>
                                        <li><strong>Security Enhancements</strong>: Implementing advanced cryptographic techniques, including MPC protocols and verifiability, to ensure data integrity and security.</li>
                                        <li><strong>Expanding Development Teams</strong>: Recruiting top-tier AI researchers, blockchain engineers, and data scientists to advance the ecosystem.</li>
                                        <li><strong>Ecosystem Incentives</strong>: Reward programs to drive participation from node operators, developers, and contributors.</li>
                                        <li><strong>Partnership Development</strong>: Collaborating with leading Web3 projects and enterprises to integrate 0G technology into diverse use cases.</li>
                                        </ul>
                                        <p>If any of the above sounds like a potential fit, <a href="https://discord.gg/bd8sZ3YG">please contact us via our Discord</a>.</p>
                                        <h3><strong>Join 0G in Making AI a Public Good</strong></h3>
                                        <p>0G is on a mission to make AI a public good. Whether you’re a developer, a node operator, or a community contributor, there’s a place for you in this movement.</p>
                                        <p><strong>Get started today by exploring our tiers and joining the 0G network!</strong></p>
                                        <p>Learn more by visiting <a href="http://0g.ai/">0G.ai</a> and together, let&#x27;s shape the future of decentralized AI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="f01_section_filter">
            <div className="f01_blog_more-blog">
                <h5>Related news:</h5>
            </div>
        </section>
        <div className="f01_w-dyn-list">
            <div fs-cmsfilter-element="list" role="list" className="f01_cms-grid_list f01_w-dyn-items">
                <div role="listitem" className="f01_cms-grid_item f01_w-dyn-item">
                    <a href="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" className="f01_cms-grid_content-wrapper f01_is-blog f01_w-inline-block">
                        <div className="f01_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif" loading="lazy" alt="" className="f01_cms-grid_image" />
                            <div className="f01_spacer-medium f01_hide-mobile-portrait"></div>
                            <div className="f01_blog_contnet-wrapper">
                                <div className="f01_blog_meta-wrapper">
                                    <div fs-list-field="category">0G Foundation</div>
                                    <div className="f01_icon-embed-custom f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                    <div>Oct 18, 2024</div>
                                </div>
                                <div className="f01_spacer-xmedium"></div>
                                <h3 className="f01_heading-style-h5">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div role="listitem" className="f01_cms-grid_item f01_w-dyn-item">
                    <a href="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" className="f01_cms-grid_content-wrapper f01_is-blog f01_w-inline-block">
                        <div className="f01_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b12172a418ac84b9f77_RobvMLasZpYsEsWKhddYWtsoE.avif" loading="lazy" alt="" className="f01_cms-grid_image" />
                            <div className="f01_spacer-medium f01_hide-mobile-portrait"></div>
                            <div className="f01_blog_contnet-wrapper">
                                <div className="f01_blog_meta-wrapper">
                                    <div fs-list-field="category">0G Foundation</div>
                                    <div className="f01_icon-embed-custom f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                    <div>Oct 22, 2024</div>
                                </div>
                                <div className="f01_spacer-xmedium"></div>
                                <h3 className="f01_heading-style-h5">0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div role="listitem" className="f01_cms-grid_item f01_w-dyn-item">
                    <a href="/blog/0g-node-sale-purchasing-guide" className="f01_cms-grid_content-wrapper f01_is-blog f01_w-inline-block">
                        <div className="f01_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b54_cuJhybFI6jVb7IhhZaQweZDv3JU.avif" loading="lazy" alt="" className="f01_cms-grid_image" />
                            <div className="f01_spacer-medium f01_hide-mobile-portrait"></div>
                            <div className="f01_blog_contnet-wrapper">
                                <div className="f01_blog_meta-wrapper">
                                    <div fs-list-field="category">0G Foundation</div>
                                    <div className="f01_icon-embed-custom f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                    <div>Nov 6, 2024</div>
                                </div>
                                <div className="f01_spacer-xmedium"></div>
                                <h3 className="f01_heading-style-h5">0G Node Sale Purchasing Guide</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div role="listitem" className="f01_cms-grid_item f01_w-dyn-item">
                    <a href="/blog/0g-node-sale-results" aria-current="page" className="f01_cms-grid_content-wrapper f01_is-blog f01_w-inline-block f01_w--current">
                        <div className="f01_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif" loading="lazy" alt="" className="f01_cms-grid_image" />
                            <div className="f01_spacer-medium f01_hide-mobile-portrait"></div>
                            <div className="f01_blog_contnet-wrapper">
                                <div className="f01_blog_meta-wrapper">
                                    <div fs-list-field="category">0G Foundation</div>
                                    <div className="f01_icon-embed-custom f01_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<circle cx="2" cy="2" r="2" fill="currentColor"/>
</svg></div>
                                    <div>Dec 20, 2024</div>
                                </div>
                                <div className="f01_spacer-xmedium"></div>
                                <h3 className="f01_heading-style-h5">0G Node Sale Results</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <div className={`f01_copy-toast ${showToast ? 'f01_show' : ''}`}>
        Link copied to clipboard!
    </div>
      </div>
    </div>
  );
}
