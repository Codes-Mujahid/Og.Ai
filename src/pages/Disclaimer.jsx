import React from 'react'

const styles = `
html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: sans-serif;
}
body {
  margin: 0;
}
main, 
section {
  display: block;
}
a {
  background-color: #0000;
}
a:active, 
a:hover {
  outline: 0;
}
strong {
  font-weight: 700;
}
h1 {
  margin: 0.67em 0;
  font-size: 2em;
}
img {
  border: 0;
}

@font-face {
  font-family: webflow-icons;
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYA)
    format("truetype");
  font-weight: 400;
  font-style: normal;
}
html {
  height: 100%;
}
body {
  color: #333;
  background-color: #fff;
  min-height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}
img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}
h1 {
  margin-bottom: 10px;
  font-weight: 700;
}
h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}
p {
  margin-top: 0;
  margin-bottom: 10px;
}
ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-richtext:before, 
.w-richtext:after {
  content: " ";
  grid-area: 1/1/2/2;
  display: table;
}
.w-richtext:after {
  clear: both;
}

.w-richtext ol {
  overflow: hidden;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@font-face {
  font-family: Geistmono;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b4_GeistMono-Medium.woff2)
    format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Geistmono;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b3_GeistMono-Light.woff2)
    format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Geistmono;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b5_GeistMono-SemiBold.woff2)
    format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Geistmono;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b6_GeistMono-Regular.woff2)
    format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b0_Regola%20Pro%20Bold%20Oblique.woff2)
    format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373ad_Regola%20Pro%20Regular%20Oblique.woff2)
    format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373ac_Regola%20Pro%20Regular.woff2)
    format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373ae_Regola%20Pro%20Bold.woff2)
    format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b2_Regola%20Pro%20Medium.woff2)
    format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373ab_Regola%20Pro%20Medium%20Oblique.woff2)
    format("woff2");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373b1_Regola%20Pro%20Book.woff2)
    format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Regola Pro;
  src: url(https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373af_Regola%20Pro%20Book%20Oblique.woff2)
    format("woff2");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
:root {
  --purple-1: #b75fff;
  --background-color--background-primary: var(--purple-1);
  --text-color--text-alternate: var(--base-color-neutral--white);
  --text-color--text-secondary: var(--base-color-neutral--neutral-darker);
  --background-color--background-success: var(
    --base-color-system--success-green
  );
  --text-color--text-success: var(--base-color-system--success-green-dark);
  --purple-2: #cb8aff;
  --border-color--border-primary: var(--purple-1);
  --background-color--background-alternate: var(--base-color-neutral--white);
  --background-color--background-secondary: var(--purple-2);
  --base-color-neutral--white: #fff;
  --link-color--link-primary: var(--purple-3);
  --background-color--background-tertiary: var(--purple-3);
  --background-color--background-error: var(--base-color-system--error-red);
  --text-color--text-error: var(--base-color-system--error-red-dark);
  --black: #000;
  --purple-shade: #9200e1;
  --purple-5: #f3e6fe;
  --base-color-neutral--black: #000;
  --purple-4: #e3c1ff;
  --transparent: #fff0;
  --background-color--background-warning: var(
    --base-color-system--warning-yellow
  );
  --text-color--text-warning: var(--base-color-system--warning-yellow-dark);
  --text-color--text-primary: var(--base-color-neutral--black);
  --gray-02: #e5e5e5;
  --text-color--text-primary-down: #0006;
  --divider: #d9d9d9;
  --purple-3: #d5a3ff;
  --base-color-neutral--neutral-lightest: #eee;
  --base-color-neutral--neutral-lighter: #ccc;
  --base-color-neutral--neutral-light: #aaa;
  --base-color-neutral--neutral: #666;
  --base-color-neutral--neutral-dark: #444;
  --base-color-neutral--neutral-darker: #222;
  --base-color-neutral--neutral-darkest: #111;
  --base-color-system--success-green: #cef5ca;
  --base-color-system--success-green-dark: #114e0b;
  --base-color-system--warning-yellow: #fcf8d8;
  --base-color-system--warning-yellow-dark: #5e5515;
  --base-color-system--error-red: #f8e4e4;
  --base-color-system--error-red-dark: #3b0b0b;
  --base-color-system--focus-state: #2d62ff;
  --border-color--border-secondary: var(--purple-2);
  --border-color--border-alternate: var(--base-color-neutral--neutral-darker);
  --link-color--link-secondary: var(--base-color-neutral--black);
  --link-color--link-alternate: var(--base-color-neutral--white);
  --text-color--text-white-down: #ffffff80;
  --border-color--border-grey: #e5e5e5;
}
body {
  color: #000;
  letter-spacing: -0.01em;
  background-color: #fefefe;
  font-family:
    Regola Pro,
    Arial,
    sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
}
h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-family:
    Regola Pro,
    Arial,
    sans-serif;
  font-size: 5rem;
  font-weight: 300;
  line-height: 1.1;
}
p {
  margin-bottom: 0;
}
a {
  color: var(--purple-1);
  text-decoration: none;
}
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 1.5rem;
}
li {
  margin-bottom: 0.25rem;
}
img {
  max-width: 100%;
  display: inline-block;
}
strong {
  font-weight: 700;
}
.text-rich-text h1 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.text-rich-text p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.4;
}
.text-rich-text ol {
  margin-bottom: 1.5rem;
  list-style-type: decimal;
  padding-left: 2rem;
}
.text-rich-text a {
  color: var(--purple-2);
  text-underline-offset: 5px;
  text-decoration: underline;
}
.text-rich-text li {
  margin-bottom: 0.3rem;
  margin-left: 0.6rem;
}
.container-small {
  width: 100%;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}
.padding-global {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.container-large {
  width: 100%;
  max-width: 89.5rem;
  margin-left: auto;
  margin-right: auto;
}
.padding-section-medium {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.show-mobile-landscape {
  display: none;
}
.section_hero {
  color: var(--base-color-neutral--white);
  padding-top: 15rem;
  padding-bottom: 4rem;
  position: relative;
}
.section_hero.is-vertical {
  padding-top: 8.75rem;
  padding-bottom: 5rem;
}
.hero_bg-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.hero_content-component {
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
}
.hero_content-component.is-vertical {
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.hero_bg-wrapper {
  z-index: -1;
  position: absolute;
  inset: 0%;
}
.hero_bg-gradient {
  z-index: 2;
  background-image: linear-gradient(#32007100, #320071 76%);
  height: 20%;
  position: absolute;
  inset: auto 0% 0%;
}
@media screen and (max-width: 991px) {
h1 {
    line-height: 1;
  }
.padding-section-medium {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
.hero_content-component {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
  }
.hero_bg-gradient {
    height: 30%;
  }
}
@media screen and (max-width: 767px) {
h1 {
    font-size: 3rem;
    line-height: 1.1;
  }
.hide-mobile-landscape {
    display: none;
  }
.padding-global {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
.padding-section-medium {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
.show-mobile-landscape {
    display: block;
  }
.section_hero.is-vertical {
    padding-top: 8rem;
    padding-bottom: 2.5rem;
  }
  .hero_bg-image.is-brandkit {
    object-position: 50% 0%;
  }
.hero_content-component {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }
.hero_bg-gradient {
    height: 40%;
  }
.hero_bg-gradient.is-brandkit {
    background-image: linear-gradient(#32007133, #320071 81%);
    height: 100%;
  }
}
@media screen and (max-width: 479px) {
h1 {
    font-size: 2.5rem;
  }
.section_hero.is-vertical {
    text-align: center;
    padding-top: 6.25rem;
  }
.hero_bg-gradient {
    height: 80%;
  }
}
.w-richtext > :not(div):first-child, 
.w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
.w-richtext > :last-child, 
.w-richtext ol li:last-child {
  margin-bottom: 0 !important;
}
.container-small, 
.container-large {
  margin-right: auto !important;
  margin-left: auto !important;
}
a {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
@media screen and (max-width: 767px) {
.hide-mobile-landscape {
    display: none !important;
  }
}
html {
  font-size: calc(0.625rem + 0.41666666666666663vw);
}
@media screen and (max-width: 1920px) {
html {
    font-size: calc(0.625rem + 0.41666666666666674vw);
  }
}
@media screen and (max-width: 1440px) {
html {
    font-size: 1rem;
  }
}
@media screen and (max-width: 440px) {
html {
    font-size: calc(0.7494305239179955rem + 0.9111617312072892vw);
  }
}
`;

export default function Disclaimer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <main className="main-wrapper">
        <section className="section_hero is-vertical">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_bg-wrapper">
                <img
                  sizes="(max-width: 3024px) 100vw, 3024px"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit.avif 3024w"
                  alt=""
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afcb462b17387d303c6d5_Brand%20Kit.avif"
                  loading="lazy"
                  className="hero_bg-image hide-mobile-landscape"
                />
                <img
                  sizes="100vw"
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afced99a3542764413342_brandkit%20phone-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afced99a3542764413342_brandkit%20phone.avif 786w"
                  alt=""
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afced99a3542764413342_brandkit%20phone.avif"
                  loading="lazy"
                  className="hero_bg-image is-brandkit show-mobile-landscape"
                />
                <div className="hero_bg-gradient is-brandkit"></div>
              </div>
              <div className="hero_content-component is-vertical">
                <h1>Node Disclaimer</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section_legal-content">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small">
                <div className="legal-content_component">
                  <div className="text-rich-text w-richtext">
                    <p>
                      <strong>PLEASE READ THE ENTIRETY OF THIS &quot;LEGAL DISCLAIMER&quot; SECTION CAREFULLY. NOTHING HEREIN CONSTITUTES LEGAL, FINANCIAL, BUSINESS, OR TAX ADVICE AND YOU ARE STRONGLY ADVISED TO CONSULT YOUR OWN LEGAL, FINANCIAL, TAX, OR OTHER PROFESSIONAL ADVISOR(S) BEFORE ENGAGING IN ANY ACTIVITY IN CONNECTION HEREWITH. NEITHER  0G FOUNDATION (“THE COMPANY”), ANY OF THE PROJECT CONTRIBUTORS WHO HAVE WORKED ON THE ZEROGRAVITY NETWORK (AS DEFINED HEREIN) OR ANY PROJECT TO DEVELOP THE ZEROGRAVITY NETWORK IN ANY WAY WHATSOEVER, ANY DISTRIBUTOR AND/OR VENDOR OF NODE LICENSE (OR SUCH OTHER RE-NAMED OR SUCCESSOR TICKER CODE OR NAME OF SUCH TOKENS) (THE “DISTRIBUTOR”), NOR ANY RELATED SERVICE PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR INDIRECT DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN CONNECTION WITH ACCESSING ANY MATERIAL RELATING TO NODE LICENSE NFT (THE TOKEN DOCUMENTATION) AVAILABLE ON THE WEBSITE AT </strong>
                      <a href="https://0g.ai/node-sale">
                        <strong>https://0g.ai/node-sale</strong>
                      </a>
                      <strong> (THE WEBSITE, INCLUDING ANY SUB-DOMAINS THEREON) OR ANY OTHER WEBSITES OR MATERIALS PUBLISHED OR COMMUNICATED BY THE COMPANY OR ITS REPRESENTATIVES FROM TIME TO TIME.</strong>
                    </p>
                    <ol role="list">
                      <li>
                        <strong>Project purpose:</strong> You agree that you are acquiring Node License NFT to participate in the ZeroGravity Network and to obtain services on the ecosystem thereon. The Company, the Distributor, and their respective affiliates would develop and contribute to the underlying source code for the ZeroGravity Network. The Company is acting solely as an arms’ length third party in relation to the Node License NFT distribution and is not acting in the capacity as a financial advisor or fiduciary of any person with regard to the distribution of Node License NFT.
                      </li>
                      <li>
                        <strong>Eligibility:</strong> To be eligible to use the Website (including services thereon) or participate in the Node License NFT distribution you must be at least eighteen (18) years of age or older. The Website, interface and services thereon is strictly NOT offered to persons or entities who reside in, are citizens of, are incorporated in, or have a registered office in any Restricted Territory, as defined below (any such person or entity from a Restricted Territory shall be a Restricted Person). If you are a Restricted Person, then do not attempt to access or use the Website. Use of a virtual private network (e.g., a VPN) or other means by Restricted Persons to access or use the Website, interface or services is prohibited. For the purpose of these Terms, Restricted Territory shall mean Belarus, the Central African Republic, The Democratic Republic of Congo, the Democratic People&#x27;s Republic of Korea, the Crimea, Donetsk People’s Republic, Kherson, Luhansk People’s Republic, and Zaporizhia regions of Ukraine, Cuba, Iran, Libya, Russia, Somalia, Sudan, South Sudan, Venezuela, Yemen, Zimbabwe.
                      </li>
                      <li>
                        <strong>Validity of Token Documentation and Website:</strong> Nothing in the Token Documentation or the Website constitutes any offer by the Company, the Distributor, or the the ZeroGravity Network team to sell any Node License NFT (as defined herein) nor shall it or any part of it nor the fact of its presentation form the basis of, or be relied upon in connection with, any contract or purchase decision. Nothing contained in the Token Documentation or the Website is or may be relied upon as a promise, representation or undertaking as to the future performance of the ZeroGravity Network. The agreement between the Distributor (or any third party) and you, in relation to any distribution or transfer of Node License NFT, is to be governed only by the separate terms and conditions of such agreement.
                      </li>
                      <li>
                        <strong>Deemed Representations and Warranties:</strong> By accessing the Token Documentation or the Website (or any part thereof), you shall be deemed to represent and warrant to the Company, the Distributor, their respective affiliates, and the ZeroGravity Network team as follows:
                        <br />‍
                        <ol role="list">
                          <li>in any decision to acquire any Node License NFT, you have not relied and shall not rely on any statement set out in the Token Documentation or the Website.</li>
                          <li>you shall at your own expense ensure compliance with all laws, regulatory requirements, and restrictions applicable to you (as the case may be).</li>
                          <li>you acknowledge, understand and agree that Node License NFT may have no value, there is no guarantee or representation of value or liquidity for Node License NFT, and Node License NFT is not an investment product nor is it intended for any investment purposes, speculative or otherwise.</li>
                          <li>none of the Company, the Distributor, their respective affiliates, and/or the the ZeroGravity Network team shall be responsible for or liable for the value of Node License NFT, the transferability and/or liquidity of Node License NFT, and/or the availability of any market for Node License NFT through third parties or otherwise.</li>
                        </ol>
                      </li>
                      <li>
                        The Company, the Distributor, and the ZeroGravity Network team do not and do not purport to make, and hereby disclaims, all representations, warranties or undertaking to any entity or person (including without limitation warranties as to the accuracy, completeness, timeliness, or reliability of the contents of the Token Documentation or the Website, or any other materials published by the Company or the Distributor). To the maximum extent permitted by law, the Company, the Distributor, their respective affiliates, and service providers shall not be liable for any indirect, special, incidental, consequential, or other losses of any kind, in tort, contract, or otherwise (including, without limitation, any liability arising from default or negligence on the part of any of them, or any loss of revenue, income or profits, and loss of use or data) arising from the use of the Token Documentation or the Website, or any other materials published, or its contents (including without limitation any errors or omissions) or otherwise arising in connection with the same. Prospective acquirors of Node License NFT should carefully consider and evaluate all risks and uncertainties (including financial and legal risks and uncertainties) associated with the distribution of Node License NFT, the Company, the Distributor, and the ZeroGravity Network team.
                      </li>
                      <li>
                        <strong>Node License NFT:</strong> Node License NFT are designed to be utilized, and that is the goal of the Node License NFT distribution. In particular, it is highlighted that Node License NFT:
                        <br />‍
                        <ol role="list">
                          <li>does not have any tangible or physical manifestation and does not have any intrinsic value/pricing (nor does any person make any representation or give any commitment as to its value).</li>
                          <li>is non-refundable, not redeemable for any assets of any entity or organization, and cannot be exchanged for cash (or its equivalent value in any other digital asset) or any payment obligation by the Company, the Distributor, or any of their respective affiliates.</li>
                          <li>does not represent or confer on the token holder any right of any form with respect to the Company, the Distributor (or any of their respective affiliates), or their revenues or assets, including without limitation any right to receive future dividends, revenue, shares, ownership right or stake, share or security, any voting, distribution, redemption, liquidation, proprietary (including all forms of intellectual property or license rights), right to receive accounts, financial statements or other financial data, the right to requisition or participate in shareholder meetings, the right to nominate a director, or other financial or legal rights, equivalent rights, or intellectual property rights, or any other form of participation in or relating to the ZeroGravity Network, the Company, the Distributor, and/or their service providers.</li>
                          <li>is not intended to represent any rights under a contract for differences or under any other contract the purpose or intended purpose of which is to secure a profit or avoid a loss.</li>
                          <li>is not intended to be a representation of money (including electronic money), payment instrument, security, commodity, bond, debt instrument, unit in a collective investment, managed investment scheme, or any other kind of financial instrument or investment.</li>
                          <li>is not a loan to the Company, the Distributor or any of their respective affiliates, is not intended to represent a debt owed by the Company, the Distributor, or any of their respective affiliates, and there is no expectation of profit nor interest payment.</li>
                          <li>does not provide the token holder with any ownership or other interest in the Company, the Distributor, or any of their respective affiliates.</li>
                        </ol>
                      </li>
                      <li>
                        Notwithstanding the Node License NFT distribution, users have no economic or legal right over or beneficial interest in the assets of the Company, the Distributor, or any of their affiliates after the token distribution.To the extent any secondary market or exchange for trading Node License NFT does develop, it would be run and operated wholly independently of the Company, the Distributor, and the distribution of Node License NFT. Neither the Company nor the Distributor will create such secondary markets nor will either entity act as an exchange for Node License NFT.
                      </li>
                      <li>
                        <strong>English language:</strong> The Token Documentation and the Website may be translated into a language other than English for reference purpose only and in the event of conflict or ambiguity between the English language version and translated versions of the Token Documentation or the Website, the English language versions shall prevail. You acknowledge that you have read and understood the English language version of the Token Documentation and the Website.
                      </li>
                    </ol>
                    <p>
                      <strong>No Distribution:</strong> No part of the Token Documentation or the Website is to be copied, reproduced, distributed, or disseminated in any way without the prior written consent of the Company or the Distributor. By attending any presentation on this Token Documentation or by accepting any hard or soft copy of the Token Documentation, you agree to be bound by the foregoing limitations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
