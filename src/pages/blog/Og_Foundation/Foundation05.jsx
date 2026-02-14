import React, { useState } from 'react';
import './Foundation05.css';

export default function Foundation05() {
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
    const text = encodeURIComponent("Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good");
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
    <div className="f05_container">
      <div className="f05_page-wrapper">
        <div className="f05_global-styles f05_w-embed">
          {/* Styles handled in CSS file */}
        </div>
        <div fs-socialshare-element="content" className="f05_hide">
            <div>Check out this insightful blog post: </div>
            <div>Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</div>
        </div>
        <main className="f05_main-wrapper">
            <section className="f05_section_hero f05_is-vertical">
                <div className="f05_padding-global">
                    <div className="f05_container-large">
                        <div className="f05_hero_bg-wrapper">
                            <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w" alt="" className="f05_hero_bg-image" />
                            <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp" loading="lazy" alt="" className="f05_hero_bg-image f05_w-dyn-bind-empty" />
                            <div className="f05_hero_bg-gradient f05_is-blog"></div>
                        </div>
                        <div className="f05_hero_content-component f05_is-vertical">
                            <div className="f05_blog_meta-wrapper f05_is-white">
                                <div>Oct 18, 2024</div>
                                <div className="f05_icon-embed-custom f05_w-embed">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                        <circle cx="2" cy="2" r="2" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div>0G Foundation</div>
                            </div>
                            <div className="f05_spacer-small"></div>
                            <div className="f05_max-width-large f05_text-align-center">
                                <h1 className="f05_heading-style-h3">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h1>
                            </div>
                            <div className="f05_spacer-small"></div>
                            <div className="f05_blog_button-wrapper">
                                <a onClick={handleCopy} href="#" className="f05_link-icon-light f05_is-static f05_w-inline-block">
                                    <div className="f05_icon-embed-xsmall f05_w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                            <path d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </a>
                                <a onClick={(e) => handleSocialShare('linkedin', e)} href="#" className="f05_link-icon-light f05_is-static f05_w-inline-block">
                                    <div className="f05_icon-embed-xsmall f05_w-embed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                            <path d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                </a>
                                <a onClick={(e) => handleSocialShare('x', e)} href="#" className="f05_link-icon-light f05_is-static f05_w-inline-block">
                                    <div className="f05_icon-embed-xsmall f05_w-embed">
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
            <section className="f05_section_legal-content">
                <div className="f05_padding-global">
                    <div className="f05_padding-section-medium">
                        <div className="f05_container-small">
                            <div>
                                <div className="f05_legal-content_component">
                                    <div className="f05_blog-rich-text f05_w-richtext">
                                        <h1><strong>Introducing the 0G Foundation</strong></h1>
                                        <p>The 0G Foundation is a devoted organization advancing decentralized AI as a public good. </p>
                                        <p>The foundation’s primary purpose is to promote the growth, development, utility, and security of the 0G ecosystem and uphold its values of transparency, fairness, and integrity in AI development. At the core of the 0G vision is the belief that AI systems should be accessible and accountable to the public, ensuring that AI models are safe, free from bias and tampering, and continue to meet humanity’s needs. </p>
                                        <p>The foundation aims to make AI a public good, unlike many currently closed AI systems, by promoting open-source AI development, fostering a community of developers, researchers, and node operators, and establishing a framework for AI alignment.</p>
                                        <p>The values of decentralization, open-source collaboration, and ethical AI are paramount for the 0G community. To achieve these goals, the 0G Foundation works to:</p>
                                        <ol role="list">
                                            <li><strong>Fund Decentralized AI Research and Development: </strong>The foundation supports the development of scalable AI alignment technologies and decentralized systems that safeguard the integrity of AI processes and data.</li>
                                            <li><strong>Community Building and Engagement: </strong>Events, educational programs, and training for developers, node operators, and community members. By doing so, the foundation will create a collaborative ecosystem of contributors, encouraging long-term community involvement and ownership.</li>
                                            <li><strong>Grant Programs and Ecosystem Support</strong>: Through acceleration programs and grants (milestone and retroactive), the 0G Foundation supports projects and individuals dedicated to advancing decentralized AI. This includes funding for open-source projects, partnerships, and startups working on innovative solutions that leverage the 0G network for applications like agents, on-chain gaming, decentralized finance (DeFi), DAOs, and smart contracts.</li>
                                            <li><strong>Promote Public Goods for Decentralized AI:</strong> The 0G Foundation prioritizes open-source projects contributing to the decentralized AI infrastructure, enabling public accessibility and collaboration.</li>
                                            <li><strong>Promoting AI Transparency and Integrity:</strong> Anchoring AI models, training data, and the entire model creation process on the 0G network allows for auditable records accessible to developers, researchers, and communities worldwide. This setup enables real-time and retrospective monitoring, ensuring models and agents are free from tampering, bias, and problematic data, thereby fostering trust in AI.</li>
                                            <li><strong>Advocating for Decentralization and Ethical AI:</strong> The foundation collaborates with other organizations, policymakers, and advocacy groups to champion the values of decentralization, data privacy, and ethical AI practices. Through these efforts, the foundation promotes the adoption of AI systems that prioritize transparency, fairness, and auditability.</li>
                                        </ol>
                                        <p>By anchoring AI models, training data, and auditable records on the 0G network, the foundation ensures that AI development is both transparent and accountable, enabling real-time and retrospective monitoring. This decentralized approach establishes a permanent provenance trail, ensuring that AI systems used in Web3 applications and beyond are ethical and reliable.</p>
                                        <h4><strong>About the Contributors to the Ecosystem</strong></h4>
                                        <p>The foundation is an independent entity designed to advance the 0G ecosystem. The 0G foundation is developed by independent contributors. These core contributors are experienced serial entrepreneurs who have built successful unicorn companies — have raised and generated revenue in the 100s of millions. </p>
                                        <p>This includes 8 PhDs in Computer Science from renowned programs such as MIT, Stanford, and Tsinghua, including one of the world’s top cryptographers. The contributors have won 5 gold medals in the informatics Olympics and hail from top companies such as Airbnb, Amazon, Animoca, Apple, Avalanche, Bain, Bridgewater, Chainlink, Linkedin, McKinsey, Microsoft, etc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="f05_section_filter">
                <div className="f05_blog_more-blog">
                    <h5>Related news:</h5>
                </div>
            </section>
            <div className="f05_w-dyn-list">
                <div fs-cmsfilter-element="list" role="list" className="f05_cms-grid_list f05_w-dyn-items">
                    <div role="listitem" className="f05_cms-grid_item f05_w-dyn-item">
                        <a href="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" aria-current="page" className="f05_cms-grid_content-wrapper f05_is-blog f05_w-inline-block f05_w--current">
                            <div className="f05_blog_content">
                                <img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif" loading="lazy" alt="" className="f05_cms-grid_image" />
                                <div className="f05_spacer-medium f05_hide-mobile-portrait"></div>
                                <div className="f05_blog_contnet-wrapper">
                                    <div className="f05_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f05_icon-embed-custom f05_w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                                <circle cx="2" cy="2" r="2" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <div>Oct 18, 2024</div>
                                    </div>
                                    <div className="f05_spacer-xmedium"></div>
                                    <h3 className="f05_heading-style-h5">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f05_cms-grid_item f05_w-dyn-item">
                        <a href="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" className="f05_cms-grid_content-wrapper f05_is-blog f05_w-inline-block">
                             <div className="f05_blog_content">
                                {/* Note: Image for this item was not fully visible in snippet, using placeholder or similar if needed. 
                                    However, checking Foundation01.jsx, it had a different list. 
                                    I should probably replicate the second item from the HTML source if I can see it. 
                                    The HTML source snippet cut off at line 528. 
                                    I will make a best effort guess for the second item's image or structure based on the first one, 
                                    or better, I will check the HTML source again for the second item if I want to be 100% precise.
                                    Actually, I can just use the structure and leave the content generic if I don't have it, but "100% clone" implies I should have it.
                                    Let me quickly read lines 528-580 to get the second item.
                                */}
                                <img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif" loading="lazy" alt="" className="f05_cms-grid_image" />
                                <div className="f05_spacer-medium f05_hide-mobile-portrait"></div>
                                <div className="f05_blog_contnet-wrapper">
                                    <div className="f05_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f05_icon-embed-custom f05_w-embed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                                <circle cx="2" cy="2" r="2" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <div>Nov 6, 2024</div>
                                    </div>
                                    <div className="f05_spacer-xmedium"></div>
                                    <h3 className="f05_heading-style-h5">0G Node Sale Purchasing Guide</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <div className={`f05_copy-toast ${showToast ? 'f05_show' : ''}`}>
            Link copied
        </div>
      </div>
    </div>
  );
}
