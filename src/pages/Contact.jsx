import React, { useEffect, useRef } from 'react';
import './Contact.css';
import contactBgDesktop from '../assets/images/contact_bg_desktop.avif';
import contactBgDesktop1080 from '../assets/images/contact_bg_desktop_1080.avif';
import contactBgDesktop1600 from '../assets/images/contact_bg_desktop_1600.avif';
import contactBgMobile from '../assets/images/contact_bg_mobile.avif';

const htmlContent = `
  <div class="faq_image-wrapper">
    <div class="contact_image">
      <img
        src="${contactBgDesktop}"
        loading="lazy"
        sizes="100vw"
        srcset="
          ${contactBgDesktop1080} 1080w,
          ${contactBgDesktop1600} 1600w,
          ${contactBgDesktop} 3024w
        "
        alt=""
        class="contact_bg-image hide-mobile-landscape"
      />
      <img
        src="${contactBgMobile}"
        loading="lazy"
        alt=""
        class="contact_bg-image show-mobile-landscape"
      />
      <div class="hero_bg is-contact"></div>
    </div>
    <section class="section_contact">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-large">
            <div class="contact_component">
              <div class="spacer-xhuge"></div>
              <div class="w-layout-grid contact_content">
                <div class="contact_content-left">
                  <div class="contact_heading-wrapper">
                    <h1 class="text-wrap-balance">Get in touch and contact us.</h1>
                    <div class="spacer-small"></div>
                    <p class="text-style-muted is-70">
                      Get in touch with us for any enquires and questions.
                    </p>
                  </div>
                  <div class="spacer-large"></div>
                  <div class="contact_contact-list">
                    <div class="contact_email-wrapper">
                      <div class="contact_eyebro">email</div>
                      <a href="mailto:contact@0g.ai" class="contact_email-link w-inline-block">
                        <div class="text-size-xlarge">contact@0g.ai</div>
                      </a>
                    </div>
                    <div class="spacer-xmedium"></div>
                    <div class="spacer-medium"></div>
                    <div class="contact_social-wrapper">
                      <div class="contact_eyebro">Socials</div>
                      <div
                        data-wf--social-icon--variant="white-flex"
                        class="footer_social-link-wrapper w-variant-940885fa-157f-97c9-e3eb-f718c47191a3"
                      >
                        <a
                          href="https://discord.com/invite/0glabs"
                          target="_blank"
                          class="footer_social-link w-inline-block"
                        >
                          <div class="footer_social-icon w-embed">
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
                          class="footer_social-link w-inline-block"
                        >
                          <div class="footer_social-icon w-embed">
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
                          class="footer_social-link w-inline-block"
                        >
                          <div class="footer_social-icon w-embed">
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
                  </div>
                </div>
                <div class="contact_form_component w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    class="contact_form"
                    data-wf-page-id="680b884d38733122a9237398"
                    data-wf-element-id="0c7af71f-35cf-7cef-67df-8fdab1578b4a"
                    data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"
                  >
                    <div
                      id="w-node-_487f6d5a-c150-d2e7-69e9-d0fd67ccc78b-a9237398"
                      class="max-width-medium"
                    >
                      <h2 class="heading-style-h4">
                        We&#x27;re always ready to help you and answer your questions.
                      </h2>
                    </div>
                    <div class="contact_field-wrapper">
                      <div class="form_group">
                        <label for="Contact-Name" class="form_field">Full Name</label>
                        <input
                          class="form_input w-input"
                          autofocus="true"
                          maxlength="256"
                          name="Contact-Name"
                          data-name="Contact Name"
                          placeholder="Full Name"
                          type="text"
                          id="Contact-Name"
                          required=""
                        />
                      </div>
                      <div class="form_group">
                        <label for="Contact-Email" class="form_field">Your Email</label>
                        <input
                          class="form_input w-input"
                          maxlength="256"
                          name="Contact-Email"
                          data-name="Contact Email"
                          placeholder="Your Email"
                          type="email"
                          id="Contact-Email"
                          required=""
                        />
                      </div>
                      <div class="form_group">
                        <label for="Contact-Subject" class="form_field">Subject</label>
                        <input
                          class="form_input w-input"
                          maxlength="256"
                          name="Contact-Subject"
                          data-name="Contact Subject"
                          placeholder="Subject"
                          type="text"
                          id="Contact-Subject"
                          required=""
                        />
                      </div>
                      <div class="form_group">
                        <label for="Contact-Message" class="form_field">Message</label>
                        <textarea
                          id="Contact-Message"
                          name="Contact-Message"
                          maxlength="5000"
                          data-name="Contact Message"
                          placeholder="Message"
                          required=""
                          class="form_input w-input"
                        ></textarea>
                      </div>
                    </div>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      id="w-node-_0c7af71f-35cf-7cef-67df-8fdab1578b5e-a9237398"
                      class="button is-white w-button"
                      value="Send a message"
                    />
                  </form>
                  <div class="form_message-success-wrapper w-form-done">
                    <div class="contact_form-susses">
                      <div class="form_success-text">Thank you!</div>
                      <p class="text-style-muted">
                        Your enquiry has been sent and someone from our team will be in
                        touch with you as soon as possible.
                      </p>
                    </div>
                  </div>
                  <div class="form_message-error-wrapper w-form-fail">
                    <div class="form_message-error">
                      <div class="error-text">
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="spacer-huge hide-mobile-landscape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fields = container.querySelectorAll('.form_group input, .form_group textarea');
    const fieldListeners = [];

    fields.forEach((field) => {
      const group = field.closest('.form_group');
      if (!group) return;
      const label = group.querySelector('label');
      if (!label) return;

      const updateOpacity = () => {
        label.style.opacity = field.value.trim() ? '0.4' : '0';
      };

      field.addEventListener('input', updateOpacity);
      field.addEventListener('blur', updateOpacity);
      fieldListeners.push({ field, updateOpacity });

      updateOpacity();
    });

    const form = container.querySelector('#wf-form-Contact-Form');
    const successWrapper = container.querySelector('.form_message-success-wrapper');
    const errorWrapper = container.querySelector('.form_message-error-wrapper');
    const submitButton = form?.querySelector('input[type="submit"]') ?? null;

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!form) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const previousValue = submitButton?.value;
      const waitText = submitButton?.getAttribute('data-wait') ?? null;
      if (submitButton && waitText) {
        submitButton.value = waitText;
        submitButton.disabled = true;
      }

      try {
        await new Promise((r) => setTimeout(r, 650));

        form.reset();

        if (form) form.style.display = 'none';
        if (errorWrapper) errorWrapper.style.display = 'none';
        if (successWrapper) successWrapper.style.display = 'block';
      } catch {
        if (successWrapper) successWrapper.style.display = 'none';
        if (errorWrapper) errorWrapper.style.display = 'block';
        if (submitButton && previousValue != null) {
          submitButton.value = previousValue;
        }
        if (submitButton) submitButton.disabled = false;
      }
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      fieldListeners.forEach(({ field, updateOpacity }) => {
        field.removeEventListener('input', updateOpacity);
        field.removeEventListener('blur', updateOpacity);
      });
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

