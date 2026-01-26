import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="nav">
      <div
        data-animation="default"
        className="navbar_wrapper w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="tiny"
        fs-scrolldisable-media="(max-width: 478px)"
        role="banner"
        data-duration="400"
      >
        <div className="navbar_cover">
          <div className="navbar_logo"></div>

          <div className="navbar_component">
            <a
              href="/"
              aria-current="page"
              className="navbar_logo-link w-nav-brand w--current"
            >
              <div className="navbar_logo w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 50 24"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M50.0009 12.6136C49.6855 18.9497 44.3897 23.9913 37.9033 23.9913C31.214 23.9913 25.791 18.6291 25.791 12.0146C25.791 5.40009 31.214 0.0380859 37.9033 0.0380859C44.1841 0.0380859 49.3483 4.76491 49.956 10.8171H44.4555C43.8858 7.75086 41.169 5.42761 37.9035 5.42761C34.2241 5.42761 31.2416 8.37672 31.2416 12.0146C31.2416 15.6527 34.2241 18.6018 37.9035 18.6018C40.7281 18.6018 43.1418 16.8636 44.111 14.4101H34.8753V12.6136H50.0009Z"
                    fill="currentColor"
                  />
                  <path
                    d="M3.98642 20.8584C8.74078 25.1181 16.0905 24.9803 20.6772 20.4453C25.4072 15.7681 25.4072 8.18505 20.6772 3.50781C15.9469 -1.16927 8.27782 -1.16927 3.54764 3.50781C-0.893505 7.8992 -1.16488 14.8521 2.73348 19.5567L6.62297 15.7108C4.83311 13.1445 5.09269 9.60205 7.40183 7.31886C10.0034 4.7464 14.2215 4.7464 16.8231 7.31886C19.4245 9.89129 19.4245 14.062 16.8231 16.6345C14.8257 18.6094 11.8757 19.0682 9.43583 18.0106L15.9665 11.5531L14.6819 10.2829L3.98642 20.8584Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className="navbar2_menu-button w-nav-button md:hidden"
              onClick={() => setOpen(!open)}
             >
              <div className="menu-icon2">
                <div className="menu-icon2_line-top"></div>
                <div className="menu-icon2_line-middle">
                  <div className="menu-icon2_line-middle-inner"></div>
                </div>
                <div className="menu-icon2_line-bottom"></div>
              </div>
            </button>
          </div>

          <nav
            role="navigation"
            fs-scrolldisable-element="preserve"
            className="navbar_menu w-nav-menu hidden md:block"
            onClick={() => setOpen(false)}>
            <div className="navbar_link-wrapper">
              <div className="hidden md:block">
                <a href="/research" className="navbar_link is-link">
                  Research
                </a>
              </div>

              <div data-hover="true" data-delay="0" className="navbar_link w-dropdown">
                <div className="navbar_link w-dropdown-toggle">
                  <div>Learn</div>
                </div>
                <nav className="dropdown_list w-dropdown-list">
                  <div className="navbar_dropdown-wrapper">
                    <a href="/product" className="navbar_dropdown-link w-nav-link">Product<br /></a>
                    <a href="/blog" className="navbar_dropdown-link w-nav-link">Blog<br /></a>
                    <a href="/faq" className="navbar_dropdown-link w-nav-link">FAQs<br /></a>
                    <a href="/contact" className="navbar_dropdown-link w-nav-link">Contact us<br /></a>
                    <a href="https://docs.0g.ai/whitepaper.pdf" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">
                      Whitepaper<br />
                    </a>
                  </div>
                </nav>
              </div>

              <div data-hover="true" data-delay="300" className="navbar_link w-dropdown">
                <div className="navbar_link w-dropdown-toggle">
                  <div>Build</div>
                </div>
                <nav className="dropdown_list w-dropdown-list">
                  <div className="navbar_dropdown-wrapper">
                    <a href="https://docs.0g.ai/" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">Docs<br /></a>
                    <a href="https://hub.0g.ai" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">0G hub<br /></a>
                    <a href="https://build.0g.ai/" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">Builder Hub</a>
                    <a href="https://storage.0g.ai/" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">0G storage</a>
                  </div>
                </nav>
              </div>

              <div data-hover="true" data-delay="0" className="navbar_link w-dropdown">
                <div className="navbar_link w-dropdown-toggle">
                  <div>Ecosystem</div>
                </div>
                <nav className="dropdown_list w-dropdown-list">
                  <div className="navbar_dropdown-wrapper is-ecosystem">
                    <a href="/partners" className="navbar_dropdown-link w-nav-link">partners<br /></a>
                    <a href="/accelerator" className="navbar_dropdown-link w-nav-link">accelerator<br /></a>
                    <a href="https://0gfoundation.ai/" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">
                      Ecosystem Growth Program<br />
                    </a>
                    <a href="https://0gfoundation.ai/node-sale" target="_blank" rel="noreferrer" className="navbar_dropdown-link w-nav-link">
                      Node Sale<br />
                    </a>
                  </div>
                </nav>
              </div>

              <div className="block md:hidden ">
                <a href="/research" className="navbar_link is-link text-[#B75FFF]!">
                  Research
                </a>
              </div>

              <a
                href="https://docs.0g.ai/"
                target="_blank"
                rel="noreferrer"
                className="button is-nav hide-mobile-landscape w-button"
              >
                Docs
              </a>
            </div>
          </nav>

          {/* 🔔 Notification dropdown — FULL */}
          <div data-hover="false" data-delay="0" className="dropdown w-dropdown">
            <div className="dropdown-toggle w-dropdown-toggle">
              <div className="notifi-trigger">
                <div className="code-embed w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none">
                    <path
                      d="M 4.706 6.37 C 4.706 3.722 6.852 1.576 9.5 1.576 C 12.148 1.576 14.294 3.722 14.294 6.37 L 14.294 8.676 L 14.299 8.717 C 14.361 9.32 14.53 9.906 14.799 10.449 L 16.15 13.179 C 16.248 13.376 16.237 13.609 16.121 13.795 C 16.005 13.982 15.801 14.095 15.582 14.095 L 3.418 14.095 C 3.199 14.095 2.995 13.982 2.879 13.795 C 2.763 13.609 2.752 13.376 2.85 13.179 L 4.18 10.494 C 4.525 9.794 4.706 9.024 4.706 8.244 Z M 9.5 -0.008 C 6.02 -0.008 3.183 2.781 3.123 6.26 L 3.123 8.245 C 3.123 8.781 2.998 9.311 2.76 9.791 L 1.43 12.477 C 0.7 13.951 1.773 15.678 3.418 15.678 L 15.582 15.678 C 17.227 15.678 18.299 13.951 17.569 12.477 L 16.218 9.747 C 16.039 9.385 15.924 8.995 15.878 8.594 L 15.878 6.37 C 15.878 2.848 13.022 -0.008 9.5 -0.008 Z M 9.498 19 C 8.048 19 6.847 18.08 6.648 16.883 L 12.348 16.883 C 12.15 18.08 10.949 19 9.499 19 Z"
                      fill="rgb(255,255,255)"
                    />
                  </svg>
                </div>
              </div>
            </div>


            <nav className="dropdown-list w-dropdown-list">
              <div className="div-block">
                <div className="text-block">Notifications<br /></div>
                <div className="text-block-2">
                  See your activity and gain access to alerts<br />
                </div>


                <div className="w-layout-blockcontainer container-2 w-container">
                  {[
                    "0G Announcements",
                    "Ecosystem Campaigns",
                    "New Asset Listings",
                    "Governance Proposals",
                    "Mainnet Chain Updates",
                    "Testnet Chain Updates",
                    "Indexer Upgrades",
                    "RPC Node Updates",
                  ].map((item, i) => (
                    <section className="section" key={i}>
                      <img
                        src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div className="text-block-3">{item}</div>
                    </section>
                  ))}
                </div>


                <a
                  href="https://0g.notifi.network/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-block w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7efc04eac518d0c8dd70_notifi-button.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>


                <div className="w-layout-blockcontainer container-3 w-container">
                  <div className="text-block-4">Powered by</div>
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c80229a8cee7d5908f28f_notifi-logo.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
