import React, { useState, useEffect } from 'react';

const Ama = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Inject Webflow CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.87f49be73.min.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    // Inject Custom Styles
    const style = document.createElement('style');
    style.innerHTML = `
      /* Remove grey background on mobile when links get clicked */
      a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
      }
      /* Make text look crisper and more legible in all browsers */
      body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
      }
      *[tabindex]:focus-visible,
      input[type="file"]:focus-visible {
          outline: 0.125rem solid #4d65ff;
          outline-offset: 0.125rem;
      }
      .inherit-color * {
          color: inherit;
      }
      .w-richtext> :not(div):first-child,
      .w-richtext>div:first-child> :first-child {
          margin-top: 0 !important;
      }
      .w-richtext>:last-child,
      .w-richtext ol li:last-child,
      .w-richtext ul li:last-child {
          margin-bottom: 0 !important;
      }
      .container-medium,
      .container-small,
      .container-large {
          margin-right: auto !important;
          margin-left: auto !important;
      }
      a,
      .w-tab-link,
      .w-nav-link,
      .w-dropdown-btn,
      .w-dropdown-toggle,
      .w-dropdown-link {
          color: inherit;
          text-decoration: inherit;
          font-size: inherit;
      }
      .text-style-3lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
      }
      .text-style-2lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
      }
      .hide {
          display: none !important;
      }
      @media screen and (max-width: 991px) {
          .hide,
          .hide-tablet {
              display: none !important;
          }
      }
      @media screen and (max-width: 767px) {
          .hide-mobile-landscape {
              display: none !important;
          }
      }
      @media screen and (max-width: 479px) {
          .hide-mobile {
              display: none !important;
          }
      }
      .margin-0 { margin: 0rem !important; }
      .padding-0 { padding: 0rem !important; }
      .spacing-clean { padding: 0rem !important; margin: 0rem !important; }
      .margin-top { margin-right: 0rem !important; margin-bottom: 0rem !important; margin-left: 0rem !important; }
      .padding-top { padding-right: 0rem !important; padding-bottom: 0rem !important; padding-left: 0rem !important; }
      .margin-right { margin-top: 0rem !important; margin-bottom: 0rem !important; margin-left: 0rem !important; }
      .padding-right { padding-top: 0rem !important; padding-bottom: 0rem !important; padding-left: 0rem !important; }
      .margin-bottom { margin-top: 0rem !important; margin-right: 0rem !important; margin-left: 0rem !important; }
      .padding-bottom { padding-top: 0rem !important; padding-right: 0rem !important; padding-left: 0rem !important; }
      .margin-left { margin-top: 0rem !important; margin-right: 0rem !important; margin-bottom: 0rem !important; }
      .padding-left { padding-top: 0rem !important; padding-right: 0rem !important; padding-bottom: 0rem !important; }
      .margin-horizontal { margin-top: 0rem !important; margin-bottom: 0rem !important; }
      .padding-horizontal { padding-top: 0rem !important; padding-bottom: 0rem !important; }
      .margin-vertical { margin-right: 0rem !important; margin-left: 0rem !important; }
      .padding-vertical { padding-right: 0rem !important; padding-left: 0rem !important; }
      
      html { font-size: calc(0.625rem + 0.41666666666666663vw); }
      @media screen and (max-width:1920px) { html { font-size: calc(0.625rem + 0.41666666666666674vw); } }
      @media screen and (max-width:1440px) { html { font-size: 1rem; } }
      @media screen and (max-width:440px) { html { font-size: calc(0.7494305239179955rem + 0.9111617312072892vw); } }

      .filters_menu-link.is-list-active .filters_link-dot {
          margin-right: 0px;
          opacity: 1;
          background-color: var(--purple-1);
      }
      .filters_menu-link.is-list-active {
          background-color: rgba(183, 95, 255, 0.15);
          color: var(--purple-1);
      }
      /* Custom active state for React implementation */
      .filters_menu-link.active .filters_link-dot {
          margin-right: 0px;
          opacity: 1;
          background-color: var(--purple-1);
      }
      .filters_menu-link.active {
          background-color: rgba(183, 95, 255, 0.15);
          color: var(--purple-1);
      }

      @media screen and (min-width: 1024px) { .cms-grid_list { grid-template-columns: repeat(3, 1fr); } }
      @media screen and (min-width: 1440px) { .cms-grid_list { grid-template-columns: repeat(4, 1fr); } }
      @media screen and (min-width: 2048px) { .cms-grid_list { grid-template-columns: repeat(5, 1fr); } }
      @media screen and (min-width: 3048px) { .cms-grid_list { grid-template-columns: repeat(7, 1fr); } }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  const amaData = [
    {
      date: "Jul 16, 2024",
      title: "0G Talks: Consumer Crypto and Onchain Summer",
      description: "Listen in on some exciting news between Blade Games and 0G this summer.",
      link: "https://x.com/BladeGamesHQ/status/1813407289321423150",
      category: "Partners"
    },
    {
      date: "Jul 2, 2024",
      title: "Exploring AI x Blockchain Use Cases",
      description: "Join us as we discuss about AI and blockchain with Subsquid and Guru Network.",
      link: "https://x.com/subsquid/status/1808161161944137991?s=46&t=qKny7KbachjTaQGl64L4vA",
      category: "Partners"
    },
    {
      date: "Jun 27, 2024",
      title: "Tokenizing Models and Modular AI with MagnetAI and 0G Labs",
      description: "MagnetAI and 0G explore tokenized, modular AI systems, potentially aiming to create more flexible and composable ML systems.",
      link: "https://x.com/i/spaces/1jMJgmBLBbXKL/peek",
      category: "Partners"
    },
    {
      date: "Jun 24, 2024",
      title: "AI x Web3 Social Convergence",
      description: "0G participates in Zo AMA about AI and Web3 social convergence.",
      link: "https://x.com/i/spaces/1PlJQDbrBlYGE/peek",
      category: "Partners"
    },
    {
      date: "Jun 20, 2024",
      title: "0G & TinTinLand AMA",
      description: "0G participates in TinTinLand AMA to answer questions on what we are building and how you can be on the path to dAGI with us.",
      link: "https://x.com/0G_labs/status/1803956441239458169",
      category: "Partners"
    },
    {
      date: "Jun 17, 2024",
      title: "0G & Theoriq AMA",
      description: "0G is excited to announce its partnership with Theoriq the Agentic Base Layer.",
      link: "https://x.com/i/spaces/1lDxLPLjPWvxm/peek",
      category: "Partners"
    },
    {
      date: "Jun 6, 2024",
      title: "0G & Ten AMA",
      description: "The partnership between TEN and 0G Labs combines advanced encryption and modular blockchain storage to enable secure, scalable on-chain gaming and private AI applications.",
      link: "https://x.com/i/spaces/1vAxRvwjXMvxl/peek",
      category: "Partners"
    },
    {
      date: "May 29, 2024",
      title: "0G & Ora: What is the Future Unlocked",
      description: "0G is working with Ora to advance decentralized on-chain AI with verifiable inference and DA.",
      link: "https://x.com/i/spaces/1BdxYrQerWyKX/peek",
      category: "Partners"
    },
    {
      date: "May 28, 2024",
      title: "0G & Hooked: Pioneering Modular AI Chains for Infinite Scalability",
      description: "0G is thrilled to collaborate with Hooked, Web3's top social learning platform.",
      link: "https://x.com/i/spaces/1nAJEaAlpLlJL/peek",
      category: "Partners"
    },
    {
      date: "Apr 27, 2024",
      title: "0G Testnet Q&A",
      description: "The 0G founders answered community questions about the Newton Testnet.",
      link: "https://x.com/i/spaces/1nAKEaezPqXKL/peek",
      category: "0G Team"
    },
    {
      date: "Apr 27, 2024",
      title: "0G & Talus: Enhancing Web3 Smart AI Agents and More",
      description: "0G is excited to collaborate with Talus network, the AI Smart Agent Hub, as a decentralized storage provider.",
      link: "https://x.com/i/spaces/1dRKZEOYgZrxB/peek",
      category: "Partners"
    },
    {
      date: "Apr 27, 2024",
      title: "0G & Gevulot Partnership",
      description: "Our collaboration with Gevulot's zkCloud represents a significant stride forward in DAS samplings for ZKPs.",
      link: "https://x.com/i/spaces/1mrxmyvEYagxy/peek",
      category: "Partners"
    },
    {
      date: "Apr 2, 2024",
      title: "0G AMA: Post Pre-Seed Fundraising",
      description: "Michael Heinrich, Fan Long, and Ming Wu answer questions about 0G’s record fundraising round.",
      link: "https://x.com/i/spaces/1dRKZEAkBeAxB/peek",
      category: "0G Team"
    }
  ];

  const filteredData = filter === 'all' 
    ? amaData 
    : amaData.filter(item => item.category === filter);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_bg-wrapper">
                <img 
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9).avif" 
                  loading="lazy" 
                  sizes="100vw" 
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9)-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9)-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9)-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9)-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/68275d0491b8788215a3cd68_Mask%20group%20(9).avif 3024w"
                  alt="" 
                  className="hero_bg-image hide-mobile-landscape" 
                />
                <img 
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0eda9fa1fed463c21b68_Group%201171275674.avif" 
                  loading="lazy" 
                  sizes="100vw" 
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0eda9fa1fed463c21b68_Group%201171275674-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682b0eda9fa1fed463c21b68_Group%201171275674.avif 786w"
                  alt="" 
                  className="hero_bg-image show-mobile-landscape" 
                />
                <div className="hero_bg-gradient"></div>
              </div>
              <div className="hero_content-component">
                <div className="max-width-large">
                  <h1>Ask Me Anything</h1>
                </div>
                <div className="max-width-xsmall">
                  <div className="text-style-muted short-width-para-7">Discover the future of AI and Web3—modular AI, on-chain infra, and next-gen decentralized systems.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_filter">
          <div className="filters_category-wrapper w-form">
            <div className="filters_category-menu">
              
              <label 
                className={`filters_menu-link w-radio ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                <div className={`w-form-formradioinput w-form-formradioinput--inputType-custom filters_radio-button w-radio-input ${filter === 'all' ? 'w--redirected-checked' : ''}`}></div>
                <input type="radio" style={{opacity:0, position:'absolute', zIndex:-1}} />
                <div className="filters_link-dot"></div>
                <span className="text-weight-medium w-form-label">view all</span>
              </label>

              <div className="w-dyn-list">
                <div role="list" className="filters_category-menu w-dyn-items">
                  
                  <div role="listitem" className="w-dyn-item">
                    <label 
                      className={`filters_menu-link w-radio ${filter === '0G Team' ? 'active' : ''}`}
                      onClick={() => setFilter('0G Team')}
                    >
                      <input type="radio" className="w-form-formradioinput hide w-radio-input" />
                      <div className="filters_link-dot"></div>
                      <span className="text-weight-medium w-form-label">0G Team</span>
                    </label>
                  </div>

                  <div role="listitem" className="w-dyn-item">
                    <label 
                      className={`filters_menu-link w-radio ${filter === 'Partners' ? 'active' : ''}`}
                      onClick={() => setFilter('Partners')}
                    >
                      <input type="radio" className="w-form-formradioinput hide w-radio-input" />
                      <div className="filters_link-dot"></div>
                      <span className="text-weight-medium w-form-label">Partners</span>
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_cms-grid">
          <div className="w-dyn-list">
            <div role="list" className="cms-grid_list w-dyn-items">
              {filteredData.map((item, index) => (
                <div role="listitem" className="cms-grid_item w-dyn-item" key={index}>
                  <div className="cms-grid_content-wrapper">
                    <div className="hide w-dyn-list">
                      <div role="list" className="w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div>{item.category}</div>
                        </div>
                      </div>
                    </div>
                    <div className="cms-grid_content">
                      <div className="cms-grid_date">{item.date}</div>
                      <div className="spacer-xmedium"></div>
                      <h3 className="text-size-large">{item.title}</h3>
                      <div className="spacer-small"></div>
                      <p className="text-style-muted">{item.description}</p>
                      <div className="spacer-xmedium"></div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-icon w-inline-block">
                        <div className="icon-embed-xsmall w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M18.3643 15.5354L16.9501 14.1212L18.3643 12.707C20.3169 10.7544 20.3169 7.5886 18.3643 5.63598C16.4117 3.68335 13.2458 3.68335 11.2932 5.63598L9.87898 7.05019L8.46477 5.63598L9.87898 4.22176C12.6127 1.48809 17.0448 1.48809 19.7785 4.22176C22.5122 6.95543 22.5122 11.3875 19.7785 14.1212L18.3643 15.5354ZM15.5358 18.3639L14.1216 19.7781C11.388 22.5117 6.9558 22.5117 4.22213 19.7781C1.48846 17.0444 1.48846 12.6122 4.22213 9.87862L5.63634 8.4644L7.05056 9.87862L5.63634 11.2928C3.68372 13.2454 3.68372 16.4112 5.63634 18.3639C7.58896 20.3165 10.7548 20.3165 12.7074 18.3639L14.1216 16.9496L15.5358 18.3639ZM14.8287 7.7573L16.243 9.17151L9.17188 16.2425L7.75766 14.8283L14.8287 7.7573Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ama;
