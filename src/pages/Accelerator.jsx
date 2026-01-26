import React from 'react';
import './Accelerator.css';

const htmlContent = `
<main class="main-wrapper">
  <section class="section_hero is-large">
    <div class="padding-global">
      <div class="container-large">
        <div class="hero_bg-wrapper">
          <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min.avif" loading="lazy" sizes="(max-width: 3024px) 100vw, 3024px" srcset="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min-p-800.avif 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min-p-1080.avif 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min-p-1600.avif 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682afa0d46cc1be7dd9906f4_Accelerator%20Hero-min.avif 3024w" alt="" class="hero_bg-image hide-mobile-landscape" />
          <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682afaaa54dca6d6afdf34bf_Accelerator%20Hero%20Image.avif" loading="lazy" alt="" class="hero_bg-image is-accelerator show-mobile-landscape"/>
          <div class="hero_bg-gradient is-large"></div>
        </div>
        <div class="hero_content-component">
          <div class="max-width-xlarge">
            <h1>
              <div>Build Beyond Limits</div>
              <div class="mereg-heading_top">
                <div>with ØG</div>
                <div class="zero-gravity_text-wrap">
                  <div>(</div>
                  <div class="zero-gravity_text">Zero <br/>Gravity</div>
                  <div>)</div>
                </div>
              </div>
            </h1>
          </div>
          <div class="max-width-medium is-small">
            <div class="text-size-xlarge">Accelerate the Future of AI</div>
            <div class="spacer-small"></div>
            <div class="text-style-muted">The ØG Accelerator Program empowers the next wave of AI founders with funding, expert guidance, and go-to-market support.</div>
            <div class="spacer-small"></div>
            <div class="button-group">
              <a href="https://hub.0g.ai/portfolio/token" class="button is-white w-inline-block">
                <div>Apply Now</div>
              </a>
              <a href="/product" class="button is-secondary is-grey w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <header class="section_header-intend">
    <div class="padding-global">
      <div class="container-large">
        <div class="header-intend_component">
          <div class="spacer-huge"></div>
          <div data-wf--tagline--variant="base" class="text-style-tagline">
            <div class="text-style-tagline_dot"></div>
            <div>who we are</div>
          </div>
          <div class="spacer-medium"></div>
          <h3>Accelerate the Future of AI with ØG&#x27;s<span class="text-color-primary"> Artificial Intelligence Layer</span>. Purpose-Built for Infinite Scalability, Openness, and Web3 Integration.</h3>
          <div class="spacer-xmedium"></div>
          <div class="spacer-small"></div>
          <p class="cms-grid_date">The ØG Accelerator Advantage:</p>
          <div class="spacer-xmedium"></div>
        </div>
      </div>
    </div>
  </header>
  <section class="section_advantage">
    <div class="advantage_component">
      <div class="w-layout-grid advantage_content">
        <div class="border-line-wrap">
          <div class="advantage_item margin-left-auto">
            <div class="advantage_item-icon-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e8cf0c5490e5100cf11b5_Group%201171275686.svg" loading="lazy" alt="" /></div>
            <div class="spacer-small"></div>
            <div class="spacer-xmedium"></div>
            <h3 class="text-size-24">Technical Guidance:</h3>
            <div class="spacer-xsmall"></div>
            <div class="spacer-xxsmall"></div>
            <p class="text-style-muted">Access integration support, architecture review, and product roadmap alignment with ØG product team and domain experts—including early access to pre-release features and product launches.</p>
          </div>
        </div>
        <div class="border-line-wrap">
          <div class="advantage_item align-center">
            <div class="advantage_item-icon-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e8cf0138b8d02bcd4d12e_Group%201171275687.svg" loading="lazy" alt="" /></div>
            <div class="spacer-small"></div>
            <div class="spacer-xmedium"></div>
            <h3 class="text-size-24">Marketing Co-Activations:</h3>
            <div class="spacer-xsmall"></div>
            <div class="spacer-xxsmall"></div>
            <p class="text-style-muted">Coordinate marketing plans with the ØG Marketing Team; co-market integrations and thought leadership through blogs, social posts, PR and co-hosted events.</p>
          </div>
        </div>
        <div class="border-line-wrap">
          <div class="advantage_item">
            <div class="advantage_item-icon-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e8cf0c5490e5100cf11b1_Group%201171275688.svg" loading="lazy" alt="" /></div>
            <div class="spacer-small"></div>
            <div class="spacer-xmedium"></div>
            <h3 class="text-size-24">GTM and Fundraising Playbook:</h3>
            <div class="spacer-xsmall"></div>
            <div class="spacer-xxsmall"></div>
            <p class="text-style-muted">Develop ecosystem growth plans alongside the ØG Ecosystem Team, with introductions to top VC investors, leading Web3 projects, developer networks, and more.</p>
          </div>
        </div>
        <div class="border-line-wrap">
          <div class="advantage_item margin-left-auto">
            <div class="advantage_item-icon-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e8cf036d280526339b54e_Group%201171275689.svg" loading="lazy" alt="" /></div>
            <div class="spacer-small"></div>
            <div class="spacer-xmedium"></div>
            <h3 class="text-size-24">Partner Discounts:</h3>
            <div class="spacer-xsmall"></div>
            <div class="spacer-xxsmall"></div>
            <p class="text-style-muted">Access ØG’s Partner Network with pre-negotiated offers and discounted services, including smart contract auditing, cloud and AI compute credits, tokenomic design, legal support, and smart contract development.</p>
          </div>
        </div>
        <div class="border-line-wrap">
          <div class="advantage_item align-center">
            <div class="advantage_item-icon-wrapper"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680e8cf08d4fd6f40d5b937e_Group%201171275690.svg" loading="lazy" alt="" /></div>
            <div class="spacer-small"></div>
            <div class="spacer-xmedium"></div>
            <h3 class="text-size-24">Wellbeing Support:</h3>
            <div class="spacer-xsmall"></div>
            <div class="spacer-xxsmall"></div>
            <p class="text-style-muted">Opt in to transcendental meditation sessions and receive invitations to wellbeing events such as holotropic breathing, massage therapy, founder retreats, and more.</p>
          </div>
        </div>
        <div class="border-line-wrap">
          <div class="advantage_item">
            <h3 class="text-size-32">ØG redefines how decentralized intelligence is built, deployed, and scaled.</h3>
            <div class="spacer-xmedium"></div>
            <div class="button-group"><a href="https://x.com/0G_labs" target="_blank" class="button is-secondary w-button">Follow ØG on X</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="section_acc-perk">
    <div class="padding-global">
      <div class="padding-section-medium">
        <div class="container-large">
          <div class="acc-perk_component">
            <div class="acc-perk_left">
              <h2 class="heading-style-h3 text-wrap-balance">ØG × Web3Labs Global Accelerator</h2>
              <div class="spacer-xlarge half-mobile"></div>
              <img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68276e3c2f2a561ea451c7b2_Group%20(1).svg" loading="lazy" alt="" class="acc-perk_img" />
            </div>
            <div class="acc-perk_right">
              <p class="text-weight-normal">The ØG × Web3Labs Global Accelerator empowers the most dedicated and innovative minds in Web3xAI. The program combines capital, infrastructure and go-to-market firepower so you can build without limits.</p>
              <div class="acc-perk_item-wrap">
                <div class="acc-perk_item">
                  <h3 class="text-size-24 is-small-mobile">Leverage Cutting-Edge Tools and Infrastructure</h3>
                  <div class="spacer-small"></div>
                  <p class="text-weight-normal text-color-primary-down">Access advanced tools and infrastructure tailored for developing and scaling blockchain applications, ensuring your project is built on a solid foundation.</p>
                </div>
                <div class="acc-perk_item">
                  <h3 class="text-size-24 is-small-mobile">Connect with Expert Mentors</h3>
                  <div class="spacer-small"></div>
                  <p class="text-weight-normal text-color-primary-down">Gain direct access to experienced mentors who provide personalized advice and strategic insights, guiding you through every stage of your project.</p>
                </div>
                <div class="acc-perk_item">
                  <h3 class="text-size-24 is-small-mobile">Engage with a Thriving Community</h3>
                  <div class="spacer-small"></div>
                  <p class="text-weight-normal text-color-primary-down">Join a vibrant community of top developers, entrepreneurs, and investors within the ØG ecosystem. Collaborate, learn, and grow together to ensure your venture is well-funded and market-ready.</p>
                </div>
              </div>
              <a href="https://tally.so/r/3llDzB" target="_blank" class="button w-inline-block">
                <div>Apply Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section_social">
    <div class="padding-global">
      <div class="container-large">
        <div class="max-width-xlarge">
          <h2 class="heading-style-h3">Stay updated and <span class="text-color-primary">welcome to the community</span></h2>
        </div>
      </div>
    </div>
    <div class="social_component">
      <div class="border-line-wrap">
        <a href="https://github.com/0glabs/" target="_blank" class="social_item margin-left-auto w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c600a09560ac89b216_Github.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">Github</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Read the latest updates</p>
          </div>
        </a>
      </div>
      <div class="border-line-wrap">
        <a href="https://discord.com/invite/0glabs" target="_blank" class="social_item w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c6be8990e3bc0c83e9_Discord.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">Discord</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Get involved</p>
          </div>
        </a>
      </div>
      <div class="border-line-wrap">
        <a href="https://www.linkedin.com/company/0g-labs/" target="_blank" class="social_item w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c6e8603e7149989951_Linkedin.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">LinkedIn</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Read the latest updates</p>
          </div>
        </a>
      </div>
      <div class="border-line-wrap">
        <a href="https://t.me/web3_0glabs" target="_blank" class="social_item is-bottom-web margin-left-auto w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c62acb360f2a43f2be_Telegram.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">Telegram</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Chat with the community</p>
          </div>
        </a>
      </div>
      <div class="border-line-wrap">
        <a href="https://x.com/0G_labs" target="_blank" class="social_item is-bottom-web w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c61480cd4e7505cd07_Twitter.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">X</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Read the latest updates</p>
          </div>
        </a>
      </div>
      <div class="border-line-wrap">
        <a href="https://www.youtube.com/channel/UCp5nMw3iFhqVy9UpnGQ0hdQ" target="_blank" class="social_item is-bottom-web w-inline-block">
          <div class="social_icon-wrap"><img src="https://cdn.prod.website-files.com/680b884d38733122a923739b/6819d2c6e7185370b4b0b6a7_Youtube.svg" loading="lazy" alt="" /></div>
          <div>
            <h3 class="text-size-24 is-small-mobile">Youtube</h3>
            <div class="spacer-xsmall"></div>
            <p class="text-style-muted">Watch our content</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</main>
`;

export default function Accelerator() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

