import React, { useState } from 'react';
import './Foundation02.css';

export default function Foundation02() {
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
    const text = encodeURIComponent("0G Ecosystem Receives $290M in Financing to Develop World's First Decentralized AI Operating System");
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
    <div className="f02_container">
      <div className="f02_page-wrapper">
        <div className="f02_global-styles f02_w-embed">
            {/* Embedded styles would go here if needed, but we use the CSS file */}
        </div>
        <div fs-socialshare-element="content" className="f02_hide">
            <div>Check out this insightful blog post: </div>
            <div>0G Ecosystem Receives $290M in Financing to Develop World's First Decentralized AI Operating System</div>
        </div>
        <main className="f02_main-wrapper">
            <section className="f02_section_hero f02_is-vertical">
                <div className="f02_padding-global">
                    <div className="f02_container-large">
                        <div className="f02_hero_bg-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321-p-2000.avif 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275de562894590925d9b7e_Frame%202147256321.avif 3024w"
                                alt="" className="f02_hero_bg-image" /><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e11ed1b1cb01796ba4ed5_Groupnew.webp" loading="lazy" alt="" className="f02_hero_bg-image f02_w-dyn-bind-empty" />
                            <div className="f02_hero_bg-gradient f02_is-blog"></div>
                        </div>
                        <div className="f02_hero_content-component f02_is-vertical">
                            <div className="f02_blog_meta-wrapper f02_is-white">
                                <div>Nov 13, 2024</div>
                                <div className="f02_icon-embed-custom f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    </svg></div>
                                <div>0G Foundation</div>
                            </div>
                            <div className="f02_spacer-small"></div>
                            <div className="f02_max-width-large f02_text-align-center">
                                <h1 className="f02_heading-style-h3">0G Ecosystem Receives $290M in Financing to Develop World's First Decentralized AI Operating System</h1>
                            </div>
                            <div className="f02_spacer-small"></div>
                            <div className="f02_blog_button-wrapper">
                                <a onClick={handleCopy} href="#" className="f02_link-icon-light f02_is-static f02_w-inline-block">
                                    <div className="f02_icon-embed-xsmall f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <path d="M4.4998 4V1C4.4998 0.44772 4.94752 0 5.4998 0H17.4998C18.0521 0 18.4998 0.44772 18.4998 1V15C18.4998 15.5523 18.0521 16 17.4998 16H14.4998V18.9991C14.4998 19.5519 14.0499 20 13.493 20H1.50666C0.95059 20 0.5 19.5554 0.5 18.9991L0.5026 5.00087C0.5027 4.44811 0.95264 4 1.50942 4H4.4998ZM6.4998 4H14.4998V14H16.4998V2H6.4998V4Z" fill="currentColor"/>
    </svg></div>
                                </a>
                                <a onClick={(e) => handleSocialShare('linkedin', e)} href="#" className="f02_link-icon-light f02_is-static f02_w-inline-block">
                                    <div className="f02_icon-embed-xsmall f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <path d="M4.68498 2.19523C4.68461 2.98688 4.19862 3.69927 3.45616 3.99648C2.7137 4.29369 1.86303 4.11636 1.30529 3.54813C0.747541 2.97988 0.594098 2.1342 0.917303 1.40985C1.24052 0.685501 1.97584 0.227131 2.77654 0.250881C3.84002 0.282428 4.68546 1.14377 4.68498 2.19523ZM4.744 5.5784H0.809073V17.75H4.744V5.5784ZM10.9612 5.5784H7.04593V17.75H10.9219V11.3628C10.9219 7.80465 15.6143 7.47411 15.6143 11.3628V17.75H19.5V10.0407C19.5 4.04236 12.5549 4.26596 10.9219 7.21162L10.9612 5.5784Z" fill="currentColor"/>
    </svg></div>
                                </a>
                                <a onClick={(e) => handleSocialShare('x', e)} href="#" className="f02_link-icon-light f02_is-static f02_w-inline-block">
                                    <div className="f02_icon-embed-xsmall f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <path d="M16.2511 0.25L11.1976 5.84192L6.82829 0.25H0.5L8.06131 9.82111L0.894939 17.75H3.9636L9.49461 11.6322L14.3284 17.75H20.5L12.6179 7.66285L19.318 0.25H16.2511ZM15.1748 15.9731L4.08133 1.93359H5.90492L16.8741 15.9731H15.1748Z" fill="currentColor"/>
    </svg></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="f02_section_legal-content">
                <div className="f02_padding-global">
                    <div className="f02_padding-section-medium">
                        <div className="f02_container-small">
                            <div>
                                <div className="f02_legal-content_component">
                                    <div className="f02_blog-rich-text f02_w-richtext">
                                        <p>Zero Gravity Labs (0G Labs or 0GL), a core contributor to the world’s first Artificial Intelligence Layer (AIL) and decentralized AI operating system (deAIOS), has announced over $325M in committed funding to accelerate
                                            the future of open, verifiable AI. This includes a newly completed $40M seed round led by Hack VC, with participation from Delphi Ventures, OKX Ventures, Samsung Next, Animoca Brands, and others, alongside a $250M
                                            token purchase and liquid capital commitment secured by the 0G Foundation.</p>
                                        <p>This milestone positions 0G as a leading force in the development of Infinite AI: an open, composable ecosystem where compute, storage, and intelligence are modular, decentralized, and accessible to all. It also underscores
                                            the growing global demand for transparent infrastructure capable of powering real-time AI workloads onchain.</p>
                                        <p>Participants in the rounds included Hack VC, Delphi Ventures, OKX Ventures, Samsung Next, Bankless Ventures, Yat Siu and Animoca Brands, Blockchain Builders Fund, Awaken Finance, dao5, Coin Bureau, Santiago R. Santos,
                                            Alchemy, Gumi, No Limits Holdings, Alumni Ventures, Master Ventures, LongHash, IBC Group, Polygon and Sandeep Nailwal, Daedalus, NGC Ventures, Nonce Classic, Kudasai, Blockdaemon, Adrian Cheng, and Foresight Ventures.
                                            Hack VC’s LPs—such as Blue Pool Capital, Bolts, Orange DAO, and Alliance DAO—also participated, with the highest SAFE valuation cap exceeding $2 billion.</p>
                                        <p>The 0G ecosystem now includes over 200 backers, including traditional AI investors like Abstract VC, Emad Mostaque, Ed Roman, Joanne Chen, and LifeX. This diverse investor base reflects 0G’s commitment to long-term
                                            decentralization and carefully aligned strategic growth.</p>
                                        <p>The liquid line gives the Foundation on-demand access to capital for supporting product development and ecosystem growth.</p>
                                        <p>Michael Heinrich, co-founder and CEO of Zero Gravity Labs (0GL), said: “AI is transforming every facet of our lives, but its development has been largely centralized, raising concerns about transparency and control.
                                            With dAIOS, we're building an open and decentralized AI Operating System that ensures security, transparency, and accessibility. This funding will allow us to accelerate our mission.”</p>
                                        <p>Ed Roman, Managing Partner at Hack VC, said: “We are thrilled to deepen our partnership with Zero Gravity Labs by leading their seed round. We're doubling down on our investment because 0GL’s innovative approach
                                            to building a decentralized AI Operating System aligns perfectly with our vision for the future of technology. By addressing the critical gaps in current blockchain infrastructure, 0GL is positioned to impact the
                                            industry significantly.” </p>
                                        <p>As the world’s first decentralized AI operating system, dAIOS will operate at the intersection of Web3 and artificial intelligence. 0G’s solution will be optimized for data availability, ensuring accessible and efficiently
                                            managed data for AI processes through infinite scalability without bottlenecks.</p>
                                        <p>0G’s deAIOS—part of its unified modular stack—will provide a decentralized, secure environment for massive datasets and real-time inference. This one-stop platform for decentralized AI combines compute, storage, and
                                            data availability, delivering throughput of up to 50 GB/second and reducing infrastructure costs by orders of magnitude.</p>
                                        <p>The need for decentralized AI solutions has been reinforced by growing concerns over data privacy, security breaches, and the monopolization of AI technologies. 0GL’s decentralized AI Operating System aims to address
                                            these issues by providing an infrastructure where AI applications can run securely and transparently onchain.</p>
                                        <p>With funding in place, 0GL and the 0G Foundation are accelerating the path toward a decentralized future for AI. Over the coming months, the team will expand R&amp;D efforts, deepen academic partnerships, and continue
                                            growing the developer ecosystem behind the first-ever Artificial Intelligence Layer.</p>
                                        <p>0G Foundation plans to cultivate a community of developers, such as 0GL and other ecosystem participants who share its vision. </p>
                                        <h3><strong>About 0G Foundation</strong></h3>
                                        <p>The 0G Foundation is an organization dedicated to driving innovation and growth by maintaining the world’s first decentralized AI Operating System. Focused on creating an open, transparent, and scalable infrastructure,
                                            the 0G Foundation is committed to fostering a vibrant, decentralized ecosystem where AI can operate as a public good. Through strategic collaborations, community initiatives, and innovative technology, the 0G Foundation
                                            strives to ensure the long-term sustainability and integrity of the 0G network.</p>
                                        <h3><strong>Zero Gravity Labs (0GL)</strong></h3>
                                        <p>Zero Gravity Labs is helping develop the software that will underlie the first decentralized AI Operating System, offering unparalleled infrastructure to power the next generation of decentralized AI applications. Unlike
                                            traditional closed AI systems that centralize control, the 0G Protocol empowers users with full autonomy, ensuring privacy, verifiability, and censorship resistance. With breakthrough speeds of 50 GB/second—50,000x
                                            faster and 100x more cost-effective than competitors, 0G’s infinitely scalable DA, storage, and verifiable AI service framework are making fully on-chain AI a reality. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="f02_section_filter">
                <div className="f02_blog_more-blog">
                    <h5>Related news:</h5>
                </div>
            </section>
            <div className="f02_w-dyn-list">
                <div fs-cmsfilter-element="list" role="list" className="f02_cms-grid_list f02_w-dyn-items">
                    <div role="listitem" className="f02_cms-grid_item f02_w-dyn-item">
                        <a href="/blog/introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good" className="f02_cms-grid_content-wrapper f02_is-blog f02_w-inline-block">
                            <div className="f02_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif" loading="lazy" alt="" className="f02_cms-grid_image" />
                                <div className="f02_spacer-medium f02_hide-mobile-portrait"></div>
                                <div className="f02_blog_contnet-wrapper">
                                    <div className="f02_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f02_icon-embed-custom f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    </svg></div>
                                        <div>Oct 18, 2024</div>
                                    </div>
                                    <div className="f02_spacer-xmedium"></div>
                                    <h3 className="f02_heading-style-h5">Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f02_cms-grid_item f02_w-dyn-item">
                        <a href="/blog/0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate" className="f02_cms-grid_content-wrapper f02_is-blog f02_w-inline-block">
                            <div className="f02_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b12172a418ac84b9f77_RobvMLasZpYsEsWKhddYWtsoE.avif" loading="lazy" alt="" className="f02_cms-grid_image" />
                                <div className="f02_spacer-medium f02_hide-mobile-portrait"></div>
                                <div className="f02_blog_contnet-wrapper">
                                    <div className="f02_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f02_icon-embed-custom f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    </svg></div>
                                        <div>Oct 22, 2024</div>
                                    </div>
                                    <div className="f02_spacer-xmedium"></div>
                                    <h3 className="f02_heading-style-h5">0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f02_cms-grid_item f02_w-dyn-item">
                        <a href="/blog/0g-node-sale-purchasing-guide" className="f02_cms-grid_content-wrapper f02_is-blog f02_w-inline-block">
                            <div className="f02_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b54_cuJhybFI6jVb7IhhZaQweZDv3JU.avif" loading="lazy" alt="" className="f02_cms-grid_image" />
                                <div className="f02_spacer-medium f02_hide-mobile-portrait"></div>
                                <div className="f02_blog_contnet-wrapper">
                                    <div className="f02_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f02_icon-embed-custom f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    </svg></div>
                                        <div>Nov 6, 2024</div>
                                    </div>
                                    <div className="f02_spacer-xmedium"></div>
                                    <h3 className="f02_heading-style-h5">0G Node Sale Purchasing Guide</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="f02_cms-grid_item f02_w-dyn-item">
                        <a href="/blog/0g-node-sale-results" className="f02_cms-grid_content-wrapper f02_is-blog f02_w-inline-block">
                            <div className="f02_blog_content"><img src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif" loading="lazy" alt="" className="f02_cms-grid_image" />
                                <div className="f02_spacer-medium f02_hide-mobile-portrait"></div>
                                <div className="f02_blog_contnet-wrapper">
                                    <div className="f02_blog_meta-wrapper">
                                        <div fs-list-field="category">0G Foundation</div>
                                        <div className="f02_icon-embed-custom f02_w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
    <circle cx="2" cy="2" r="2" fill="currentColor"/>
    </svg></div>
                                        <div>Dec 20, 2024</div>
                                    </div>
                                    <div className="f02_spacer-xmedium"></div>
                                    <h3 className="f02_heading-style-h5">0G Node Sale Results</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        {showToast && (
          <div className="copy-toast" style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--purple-shade, #7b16ff)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            zIndex: 9999,
          }}>
            Link copied
          </div>
        )}
      </div>
    </div>
  );
}
