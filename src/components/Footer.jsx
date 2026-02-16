import { useEffect, useRef } from "react";
import "./Footer.css";
const Footer = () => {

const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // autoplay blocked silently
          });
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer_component">
      <div className="footer_background-video-wrapper">
        <div className="footer_background-video-spacer"></div>

        <div
          data-autoplay="true"
          data-loop="true"
          className="footer_background-video w-background-video w-background-video-atom"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            data-object-fit="cover"
          >
            <source src="https://cdn.prod.website-files.com/680b884d38733122a923739b%2F68472a74f675fac2540505e5_panda%20loop_v5-transcode.mp4" />
            <source src="https://cdn.prod.website-files.com/680b884d38733122a923739b%2F68472a74f675fac2540505e5_panda%20loop_v5-transcode.webm" />
          </video>
        </div>
      </div>

      <div className="footer_content">
        <div className="footer_bg"></div>

        <div className="padding-global is-full">
          <div className="container-large is-full">
            <div className="footer_wrapper">
              <div className="footer_top-wrapper">

                {/* Newsletter */}
                <div className="footer_newsletter-wrapper">
                  <h3 className="footer_newsletter-heading">
                    Sign up for our newsletter
                  </h3>

                  <div className="footer_form-block w-form">
                    <form
                      id="wf-form-Newsletter-Form"
                      name="wf-form-Newsletter-Form"
                      method="post"
                      className="form"
                    >
                      <input
                        className="text-field w-input"
                        maxLength="256"
                        name="Newsletter-Email"
                        placeholder="Your Email"
                        type="email"
                        id="Newsletter-Email"
                        required
                      />
                      <input
                        type="submit"
                        className="button is-newsletter w-button"
                        value="Subscribe"
                      />
                    </form>

                    <div className="footer_success w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>

                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>

                  <div className="hide-mobile-landscape">
                    <div className="text-color-white text-style-muted">
                      © 2025 ØG. All rights reserved.
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="footer_link-top-component">
                  <div className="footer_link-top-wrapper">

                    {/* Develop */}
                    <div className="footer_link-component">
                      <div className="footer_header">Develop</div>
                      <div className="footer_link-wrapper">
                        <a href="https://docs.0g.ai/developer-hub/testnet/testnet-overview" target="_blank" rel="noreferrer" className="footer_link">Testnet</a>
                        <a href="https://faucet.0g.ai/" target="_blank" rel="noreferrer" className="footer_link">Faucet</a>
                        <a href="https://docs.0g.ai/" target="_blank" rel="noreferrer" className="footer_link">Docs</a>
                        <a href="https://storagescan.0g.ai/" target="_blank" rel="noreferrer" className="footer_link">Storage Scan</a>
                        <a href="https://chainscan.0g.ai/" target="_blank" rel="noreferrer" className="footer_link">Chain Scan</a>
                        <a href="https://explorer.0g.ai/" target="_blank" rel="noreferrer" className="footer_link">Explorer</a>
                      </div>
                    </div>

                    {/* Learn */}
                    <div className="footer_link-component">
                      <div className="footer_header">Learn</div>
                      <div className="footer_link-wrapper">
                        <a href="/blog" className="footer_link">Blog</a>
                        <a href="/ama" className="footer_link">AMAs</a>
                        <a href="/faq" className="footer_link">FAQs</a>
                        <a href="https://cdn.jsdelivr.net/gh/0glabs/0g-doc/static/whitepaper.pdf" className="footer_link">Whitepaper</a>
                        <a href="/disclaimer" className="footer_link">Node Disclaimer</a>
                      </div>
                    </div>

                    {/* Ecosystem */}
                    <div className="footer_link-component">
                      <div className="text-4">Ecosystem</div>
                      <div className="footer_link-wrapper">
                        <a href="/accelerator" className="footer_link">Accelerator</a>
                        <a href="/press" className="footer_link">Press</a>
                        <a href="/contact" className="footer_link">Contact Us</a>
                        <a href="/brandkit" className="footer_link">Brand Kit</a>
                        <a href="https://0gfoundation.ai/" target="_blank" rel="noreferrer" className="footer_link">
                          Ecosystem Growth Fund
                        </a>
                      </div>
                    </div>

                    {/* Socials - Mobile (moved INSIDE footer_link-top-wrapper) */}
                    <div className="show-mobile-landscape">
                      <div className="footer_social-wrapper">
                        <div className="footer_header">Socials</div>
                        <div
                          data-wf--social-icon--variant="white-grid"
                          className="footer_social-link-wrapper"
                        >
                          <a href="https://discord.com/invite/0glabs" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                            <div className="footer_social-icon w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 41" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M28.9614 13.3126C27.4116 12.6038 25.7657 12.0872 24.0477 11.7988C23.8314 12.1713 23.5911 12.6759 23.4229 13.0723C21.5956 12.808 19.7814 12.808 17.9793 13.0723C17.8111 12.6759 17.5588 12.1713 17.3546 11.7988C15.6246 12.0872 13.9786 12.6038 12.4396 13.3126C9.32799 17.902 8.48701 22.3832 8.90751 26.8044C10.9739 28.3062 12.9683 29.2192 14.9278 29.82C15.4083 29.1712 15.8409 28.4743 16.2133 27.7415C15.5045 27.4772 14.8317 27.1528 14.1829 26.7684C14.3511 26.6483 14.5193 26.5161 14.6755 26.3839C18.5921 28.1741 22.8343 28.1741 26.7027 26.3839C26.8709 26.5161 27.0272 26.6483 27.1954 26.7684C26.5466 27.1528 25.8738 27.4772 25.165 27.7415C25.5375 28.4743 25.9699 29.1712 26.4505 29.82C28.4087 29.2192 30.4151 28.3062 32.4707 26.8044C32.9873 21.6865 31.6526 17.2412 28.9614 13.3126ZM16.7539 24.0772C15.5765 24.0772 14.6154 23.008 14.6154 21.6985C14.6154 20.3889 15.5525 19.3197 16.7539 19.3197C17.9433 19.3197 18.9164 20.3889 18.8924 21.6985C18.8924 23.008 17.9433 24.0772 16.7539 24.0772ZM24.6484 24.0772C23.471 24.0772 22.5086 23.008 22.5086 21.6985C22.5086 20.3889 23.447 19.3197 24.6484 19.3197C25.8378 19.3197 26.8109 20.3889 26.7868 21.6985C26.7868 23.008 25.8498 24.0772 24.6484 24.0772Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://www.linkedin.com/company/0g-labs/" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                            <div className="footer_social-icon w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 40" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M15.685 13.1952C15.6846 13.9869 15.1986 14.6993 14.4562 14.9965C13.7137 15.2937 12.863 15.1164 12.3053 14.5481C11.7475 13.9799 11.5941 13.1342 11.9173 12.4098C12.2405 11.6855 12.9758 11.2271 13.7765 11.2509C14.84 11.2824 15.6855 12.1438 15.685 13.1952ZM15.744 16.5784H11.8091V28.75H15.744V16.5784ZM21.9612 16.5784H18.0459V28.75H21.9219V22.3628C21.9219 18.8046 26.6143 18.4741 26.6143 22.3628V28.75H30.5V21.0407C30.5 15.0424 23.5549 15.266 21.9219 18.2116L21.9612 16.5784Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://x.com/0G_labs" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                            <div className="footer_social-icon w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 40" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M26.2511 11.25L21.1976 16.8419L16.8283 11.25H10.5L18.0613 20.8211L10.8949 28.75H13.9636L19.4946 22.6322L24.3284 28.75H30.5L22.6179 18.6629L29.318 11.25H26.2511ZM25.1748 26.9731L14.0813 12.9336H15.9049L26.8741 26.9731H25.1748Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Socials - Desktop */}
                  <div className="hide-mobile-landscape">
                    <div className="footer_social-wrapper">
                      <div className="footer_header">Socials</div>
                      <div
                        data-wf--social-icon--variant="white-grid"
                        className="footer_social-link-wrapper"
                      >
                        <a href="https://discord.com/invite/0glabs" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                          <div className="footer_social-icon w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 41" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                              <path d="M28.9614 13.3126C27.4116 12.6038 25.7657 12.0872 24.0477 11.7988C23.8314 12.1713 23.5911 12.6759 23.4229 13.0723C21.5956 12.808 19.7814 12.808 17.9793 13.0723C17.8111 12.6759 17.5588 12.1713 17.3546 11.7988C15.6246 12.0872 13.9786 12.6038 12.4396 13.3126C9.32799 17.902 8.48701 22.3832 8.90751 26.8044C10.9739 28.3062 12.9683 29.2192 14.9278 29.82C15.4083 29.1712 15.8409 28.4743 16.2133 27.7415C15.5045 27.4772 14.8317 27.1528 14.1829 26.7684C14.3511 26.6483 14.5193 26.5161 14.6755 26.3839C18.5921 28.1741 22.8343 28.1741 26.7027 26.3839C26.8709 26.5161 27.0272 26.6483 27.1954 26.7684C26.5466 27.1528 25.8738 27.4772 25.165 27.7415C25.5375 28.4743 25.9699 29.1712 26.4505 29.82C28.4087 29.2192 30.4151 28.3062 32.4707 26.8044C32.9873 21.6865 31.6526 17.2412 28.9614 13.3126ZM16.7539 24.0772C15.5765 24.0772 14.6154 23.008 14.6154 21.6985C14.6154 20.3889 15.5525 19.3197 16.7539 19.3197C17.9433 19.3197 18.9164 20.3889 18.8924 21.6985C18.8924 23.008 17.9433 24.0772 16.7539 24.0772ZM24.6484 24.0772C23.471 24.0772 22.5086 23.008 22.5086 21.6985C22.5086 20.3889 23.447 19.3197 24.6484 19.3197C25.8378 19.3197 26.8109 20.3889 26.7868 21.6985C26.7868 23.008 25.8498 24.0772 24.6484 24.0772Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/company/0g-labs/" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                          <div className="footer_social-icon w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 40" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                              <path d="M15.685 13.1952C15.6846 13.9869 15.1986 14.6993 14.4562 14.9965C13.7137 15.2937 12.863 15.1164 12.3053 14.5481C11.7475 13.9799 11.5941 13.1342 11.9173 12.4098C12.2405 11.6855 12.9758 11.2271 13.7765 11.2509C14.84 11.2824 15.6855 12.1438 15.685 13.1952ZM15.744 16.5784H11.8091V28.75H15.744V16.5784ZM21.9612 16.5784H18.0459V28.75H21.9219V22.3628C21.9219 18.8046 26.6143 18.4741 26.6143 22.3628V28.75H30.5V21.0407C30.5 15.0424 23.5549 15.266 21.9219 18.2116L21.9612 16.5784Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </a>
                        <a href="https://x.com/0G_labs" target="_blank" rel="noreferrer" className="footer_social-link w-inline-block">
                          <div className="footer_social-icon w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41 40" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                              <path d="M26.2511 11.25L21.1976 16.8419L16.8283 11.25H10.5L18.0613 20.8211L10.8949 28.75H13.9636L19.4946 22.6322L24.3284 28.75H30.5L22.6179 18.6629L29.318 11.25H26.2511ZM25.1748 26.9731L14.0813 12.9336H15.9049L26.8741 26.9731H25.1748Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="footer_bottom-wrapper">
                <div>Zero</div>
                <div className="footer_bottom-logo">
                  <div className="hide-mobile-landscape">(</div>
                  <div className="icon-embed-xlarge w-embed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 104 50" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                      <path d="M104 26.2362C103.344 39.4154 92.3289 49.9019 78.8372 49.9019C64.9233 49.9019 53.6436 38.7485 53.6436 24.9903C53.6436 11.2321 64.9233 0.0791016 78.8372 0.0791016C91.9013 0.0791016 102.643 9.91092 103.907 22.4994H92.4658C91.2808 16.1217 85.6298 11.2893 78.8376 11.2893C71.1845 11.2893 64.9808 17.4235 64.9808 24.9903C64.9808 32.5575 71.1845 38.6917 78.8376 38.6917C84.7128 38.6917 89.7333 35.0762 91.7493 29.9729H72.539V26.2362H104Z" fill="currentColor"/>
                      <path d="M8.29178 43.3855C18.1809 52.2457 33.4683 51.9592 43.0086 42.5264C52.8472 32.7977 52.8472 17.0249 43.0086 7.29627C33.1697 -2.43209 17.2179 -2.43209 7.37911 7.29627C-1.85849 16.4304 -2.42295 30.8925 5.68565 40.6779L13.7758 32.6786C10.0529 27.3405 10.5928 19.9723 15.3958 15.2233C20.8071 9.87253 29.5807 9.87253 34.9922 15.2233C40.4031 20.5739 40.4031 29.249 34.9922 34.5998C30.8376 38.7076 24.7016 39.6619 19.6266 37.4622L33.2105 24.0304L30.5383 21.3885L8.29178 43.3855Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="hide-mobile-landscape">)</div>
                </div>
                <div className="footer_text">Gravity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
