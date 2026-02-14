import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar01() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="navbar01_nav nav">
      <div
        data-animation="default"
        className="navbar01_navbar_wrapper navbar_wrapper w-nav"
        data-easing2="ease"
        fs-scrolldisable-element="smart-nav"
        data-easing="ease"
        data-collapse="tiny"
        fs-scrolldisable-media="(max-width: 478px)"
        data-w-id="2cbc1b87-1717-ba2d-b7ce-9dff14129268"
        role="banner"
        data-duration="400"
      >
        <div className="navbar01_navbar_cover navbar_cover">
          <div className="navbar01_navbar_logo-bg navbar_logo" />
          <div className="navbar01_navbar_component navbar_component">
            <a href="/" className="navbar01_navbar_logo-link navbar_logo-link w-nav-brand">
              <div className="navbar01_navbar_logo navbar_logo w-embed">
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
              aria-expanded={isMenuOpen}
              className={`navbar01_navbar_menu-button navbar2_menu-button w-nav-button${isMenuOpen ? " w--open" : ""}`}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <div className="navbar01_menu-icon2 menu-icon2">
                <div className="navbar01_menu-icon2_line-top menu-icon2_line-top" />
                <div className="navbar01_menu-icon2_line-middle menu-icon2_line-middle">
                  <div className="navbar01_menu-icon2_line-middle-inner menu-icon2_line-middle-inner" />
                </div>
                <div className="navbar01_menu-icon2_line-bottom menu-icon2_line-bottom" />
              </div>
            </button>
          </div>
          <nav
            role="navigation"
            fs-scrolldisable-element="preserve"
            className="navbar01_navbar_menu navbar_menu w-nav-menu"
            data-nav-menu-open={isMenuOpen ? "" : undefined}
            onClick={(e) => {
              const link = e.target.closest("a");
              if (link) setIsMenuOpen(false);
            }}
          >
            <div className="navbar01_navbar_link-wrapper navbar_link-wrapper">
              <a
                href="/research"
                id="w-node-e4a9c897-ca2e-f1e5-9b44-3c43faf01c18-b9f1ccc8"
                className="navbar01_navbar_link navbar_link is-link"
              >
                Research
              </a>
              <div
                data-hover="true"
                data-delay="0"
                data-w-id="2cbc1b87-1717-ba2d-b7ce-9dff1412926e"
                className="navbar01_navbar_link-learn navbar_link w-dropdown"
              >
                <div className="navbar01_navbar_link-learn-toggle navbar_link w-dropdown-toggle">
                  <div className="navbar01_navbar_link-learn-text">Learn</div>
                </div>
                <nav className="navbar01_dropdown_list-learn dropdown_list w-dropdown-list">
                  <div className="navbar01_navbar_dropdown-wrapper-learn navbar_dropdown-wrapper">
                    <a href="/product" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      Product
                      <br />
                    </a>
                    <a href="/blog" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      Blog
                      <br />
                    </a>
                    <a href="/faq" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      FAQs
                      <br />
                    </a>
                    <a href="/contact" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      Contact us
                      <br />
                    </a>
                    <a
                      href="https://docs.0g.ai/whitepaper.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      Whitepaper
                      <br />
                    </a>
                  </div>
                </nav>
              </div>
              <div
                data-hover="true"
                data-delay="300"
                data-w-id="2cbc1b87-1717-ba2d-b7ce-9dff1412927d"
                className="navbar01_navbar_link-build navbar_link w-dropdown"
              >
                <div className="navbar01_navbar_link-build-toggle navbar_link w-dropdown-toggle">
                  <div className="navbar01_navbar_link-build-text">Build</div>
                </div>
                <nav className="navbar01_dropdown_list-build dropdown_list w-dropdown-list">
                  <div className="navbar01_navbar_dropdown-wrapper-build navbar_dropdown-wrapper">
                    <a href="/developers" className="navbar01_navbar_dropdown-link navbar_dropdown-link hide w-nav-link">
                      Developer
                      <br />
                    </a>
                    <a
                      href="https://docs.0g.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      Docs
                      <br />
                    </a>
                    <a
                      href="https://hub.0g.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      0G hub
                      <br />
                    </a>
                    <a
                      href="https://build.0g.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      Builder Hub
                    </a>
                    <a
                      href="https://storage.0g.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      0G storage
                    </a>
                  </div>
                </nav>
              </div>
              <div
                data-hover="true"
                data-delay="0"
                id="w-node-_2cbc1b87-1717-ba2d-b7ce-9dff1412928c-b9f1ccc8"
                data-w-id="2cbc1b87-1717-ba2d-b7ce-9dff1412928c"
                className="navbar01_navbar_link-ecosystem navbar_link w-dropdown"
              >
                <div className="navbar01_navbar_link-ecosystem-toggle navbar_link w-dropdown-toggle">
                  <div className="navbar01_navbar_link-ecosystem-text">Ecosystem</div>
                </div>
                <nav className="navbar01_dropdown_list-ecosystem dropdown_list w-dropdown-list">
                  <div className="navbar01_navbar_dropdown-wrapper-ecosystem navbar_dropdown-wrapper is-ecosystem">
                    <a href="/partners" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      partners
                      <br />
                    </a>
                    <a href="/accelerator" className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link">
                      accelerator
                      <br />
                    </a>
                    <a
                      href="https://0gfoundation.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      Ecosystem Growth Program
                      <br />
                    </a>
                    <a
                      href="https://0gfoundation.ai/node-sale"
                      target="_blank"
                      rel="noreferrer"
                      className="navbar01_navbar_dropdown-link navbar_dropdown-link w-nav-link"
                    >
                      Node Sale
                      <br />
                    </a>
                  </div>
                </nav>
              </div>
              <div
                id="w-node-_2cbc1b87-1717-ba2d-b7ce-9dff141292a0-b9f1ccc8"
                className="navbar01_show-mobile-portrait show-mobile-portrait"
              >
                <div className="navbar01_navbar_link-mobile-ecosystem navbar_link">Ecosystem</div>
                <div className="navbar01_footer_social-link-wrapper footer_social-link-wrapper w-variant-6596ccf1-18e6-5f51-cd4d-9dab83f798bd">
                  <a
                    href="https://discord.com/invite/0glabs"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar01_footer_social-link footer_social-link w-variant-6596ccf1-18e6-5f51-cd4d-9dab83f798bd w-inline-block"
                  >
                    <div className="navbar01_footer_social-icon footer_social-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 41 41"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          d="M28.9614 13.3126C27.4116 12.6038 25.7657 12.0872 24.0477 11.7988C23.8314 12.1713 23.5911 12.6759 23.4229 13.0723C21.5956 12.808 19.7814 12.808 17.9793 13.0723C17.8111 12.6759 17.5588 12.1713 17.3546 11.7988C15.6246 12.0872 13.9786 12.6038 12.4396 13.3126C9.32799 17.902 8.48701 22.3832 8.90751 26.8044C10.9739 28.3062 12.9683 29.2192 14.9278 29.82C15.4083 29.1712 15.8409 28.4743 16.2133 27.7415C15.5045 27.4772 14.8317 27.1528 14.1829 26.7684C14.3511 26.6483 14.5193 26.5161 14.6755 26.3839C18.5921 28.1741 22.8343 28.1741 26.7027 26.3839C26.8709 26.5161 27.0272 26.6483 27.1954 26.7684C26.5466 27.1528 25.8738 27.4772 25.165 27.7415C25.5375 28.4743 25.9699 29.1712 26.4505 29.82C28.4087 29.2192 30.4151 28.3062 32.4707 26.8044C32.9873 21.6865 31.6526 17.2412 28.9614 13.3126ZM16.7539 24.0772C15.5765 24.0772 14.6154 23.008 14.6154 21.6985C14.6154 20.3889 15.5525 19.3197 16.7539 19.3197C17.9433 19.3197 18.9164 20.3889 18.8924 21.6985C18.8924 23.008 17.9433 24.0772 16.7539 24.0772ZM24.6484 24.0772C23.471 24.0772 22.5086 23.008 22.5086 21.6985C22.5086 20.3889 23.447 19.3197 24.6484 19.3197C25.8378 19.3197 26.8109 20.3889 26.7868 21.6985C26.7868 23.008 25.8498 24.0772 24.6484 24.0772Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/0g-labs/"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar01_footer_social-link footer_social-link w-variant-6596ccf1-18e6-5f51-cd4d-9dab83f798bd w-inline-block"
                  >
                    <div className="navbar01_footer_social-icon footer_social-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 41 40"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          d="M15.685 13.1952C15.6846 13.9869 15.1986 14.6993 14.4562 14.9965C13.7137 15.2937 12.863 15.1164 12.3053 14.5481C11.7475 13.9799 11.5941 13.1342 11.9173 12.4098C12.2405 11.6855 12.9758 11.2271 13.7765 11.2509C14.84 11.2824 15.6855 12.1438 15.685 13.1952ZM15.744 16.5784H11.8091V28.75H15.744V16.5784ZM21.9612 16.5784H18.0459V28.75H21.9219V22.3628C21.9219 18.8046 26.6143 18.4741 26.6143 22.3628V28.75H30.5V21.0407C30.5 15.0424 23.5549 15.266 21.9219 18.2116L21.9612 16.5784Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://x.com/0G_labs"
                    target="_blank"
                    rel="noreferrer"
                    className="navbar01_footer_social-link footer_social-link w-variant-6596ccf1-18e6-5f51-cd4d-9dab83f798bd w-inline-block"
                  >
                    <div className="navbar01_footer_social-icon footer_social-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 41 40"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          d="M26.2511 11.25L21.1976 16.8419L16.8283 11.25H10.5L18.0613 20.8211L10.8949 28.75H13.9636L19.4946 22.6322L24.3284 28.75H30.5L22.6179 18.6629L29.318 11.25H26.2511ZM25.1748 26.9731L14.0813 12.9336H15.9049L26.8741 26.9731H25.1748Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <a
                href="https://docs.0g.ai/"
                target="_blank"
                rel="noreferrer"
                className="navbar01_button-docs button is-nav hide-mobile-landscape w-button"
              >
                Docs
              </a>
            </div>
          </nav>
          <div data-hover="false" data-delay="0" className="navbar01_dropdown-notification dropdown w-dropdown">
            <Link to="/login" className="navbar01_button-connect button is-primary hide-mobile-landscape w-button flex gap-2! bg-white! text-black! hover:bg-primary! hover:text-white! transition-none!">
              <i className="fa-regular fa-user"></i>Login
            </Link>
            {/* <div className="navbar01_dropdown-toggle-notification dropdown-toggle w-dropdown-toggle">
              <div className="navbar01_notifi-trigger notifi-trigger">
                <div className="navbar01_code-embed code-embed w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none">
                    <path
                      d="M 4.706 6.37 C 4.706 3.722 6.852 1.576 9.5 1.576 C 12.148 1.576 14.294 3.722 14.294 6.37 L 14.294 8.676 L 14.299 8.717 C 14.361 9.32 14.53 9.906 14.799 10.449 L 16.15 13.179 C 16.248 13.376 16.237 13.609 16.121 13.795 C 16.005 13.982 15.801 14.095 15.582 14.095 L 3.418 14.095 C 3.199 14.095 2.995 13.982 2.879 13.795 C 2.763 13.609 2.752 13.376 2.85 13.179 L 4.18 10.494 C 4.525 9.794 4.706 9.024 4.706 8.244 Z M 9.5 -0.008 C 6.02 -0.008 3.183 2.781 3.123 6.26 L 3.123 8.245 C 3.123 8.781 2.998 9.311 2.76 9.791 L 1.43 12.477 C 0.7 13.951 1.773 15.678 3.418 15.678 L 15.582 15.678 C 17.227 15.678 18.299 13.951 17.569 12.477 L 16.218 9.747 C 16.039 9.385 15.924 8.995 15.878 8.594 L 15.878 6.37 C 15.878 2.848 13.022 -0.008 9.5 -0.008 Z M 9.498 19 C 8.048 19 6.847 18.08 6.648 16.883 L 12.348 16.883 C 12.15 18.08 10.949 19 9.499 19 Z M 9.498 14.06 L 9.482 14.06 L 9.514 14.06 Z M 6.618 16.53 L 6.618 16.516 L 6.618 16.544 Z"
                      fill="rgb(255,255,255)"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
            {/* <nav className="navbar01_dropdown-list-notification dropdown-list w-dropdown-list">
              <div className="navbar01_notifi-panel div-block">
                <div className="navbar01_notifi-title text-block">
                  Notifications
                  <br />
                </div>
                <div className="navbar01_notifi-subtitle text-block-2">
                  See your activity and gain access to alerts
                  <br />
                </div>
                <div className="navbar01_notifi-options w-layout-blockcontainer container-2 w-container">
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      0G Announcements
                      <br />
                    </div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      Ecosystem Campaigns
                      <br />
                    </div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      New Asset Listings
                      <br />
                    </div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">Governance Proposals</div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      Mainnet Chain Updates
                      <br />
                    </div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">Testnet Chain Updates</div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      Indexer Upgrades
                      <br />
                    </div>
                  </section>
                  <section className="navbar01_notifi-option section">
                    <img
                      src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7d6f7b2d905cfafae4a1_check.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="navbar01_notifi-option-text text-block-3">
                      RPC Node Updates
                      <br />
                    </div>
                  </section>
                </div>
                <a
                  href="https://0g.notifi.network/"
                  target="_blank"
                  rel="noreferrer"
                  className="navbar01_notifi-cta link-block w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c7efc04eac518d0c8dd70_notifi-button.svg"
                    loading="lazy"
                    alt=""
                    className="navbar01_notifi-cta-image image"
                  />
                </a>
                <div className="navbar01_notifi-powered w-layout-blockcontainer container-3 w-container">
                  <div className="navbar01_notifi-powered-label text-block-4">Powered by</div>
                  <img
                    src="https://cdn.prod.website-files.com/680b884d38733122a923739b/689c80229a8cee7d5908f28f_notifi-logo.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </nav> */}
          </div>
        </div>
      </div>
      </div>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="navbar01_mobile-bottom-nav fixed bottom-0 left-0 right-0 bg-[#CB8AFF] shadow-lg md:hidden z-[99999] pointer-events-auto">
        <div className="navbar01_mobile-bottom-nav-inner flex justify-around items-center py-2 text-sm">
          <a href="/" className="navbar01_mobile-bottom-link flex flex-col items-center">
            <i className="fa-regular fa-house text-white"></i>
            <span className="text-white">Home</span>
          </a>

          <NavLink to="/blog" className="navbar01_mobile-bottom-link flex flex-col items-center">
            <i className="fa-regular fa-newspaper text-white"></i>
            <span className="text-white">Blog</span>
          </NavLink>

          <NavLink to="/contact" className="navbar01_mobile-bottom-link flex flex-col items-center">
            <i className="fa-regular fa-comment-dots text-white"></i>
            <span className="text-white">Contact</span>
          </NavLink>

          <NavLink to="/login" className="navbar01_mobile-bottom-link flex flex-col items-center">
            <i className="fa-regular fa-user text-white"></i>
            <span className="text-white">Login</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

