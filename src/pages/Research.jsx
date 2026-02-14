import React from 'react';
import HeroBg from '../assets/images/research/HeroBg.avif';
import HeroBgMobile from '../assets/images/research/HeroBgMobile.avif';
import IconComm from '../assets/images/research/IconComm.svg';
import IconLocal from '../assets/images/research/IconLocal.svg';
import IconPerf from '../assets/images/research/IconPerf.svg';
import IconDyn from '../assets/images/research/IconDyn.svg';
import AccPerkImg from '../assets/images/research/AccPerkImg.avif';
import ChatGptImg1 from '../assets/images/research/ChatGptImg1.avif';
import Img278 from '../assets/images/research/Img278.avif';
import Img278_2 from '../assets/images/research/Img278_2.avif';
import Img278_3 from '../assets/images/research/Img278_3.avif';
import Img278_1 from '../assets/images/research/Img278.avif';
import ChatGptImg2 from '../assets/images/research/ChatGptImg1.avif';
import MultiAgentImg from '../assets/images/research/MultiAgentImg.avif';
import IconSmartContract from '../assets/images/research/IconSmartContract.svg';
import IconAnomaly from '../assets/images/research/IconAnomaly.svg';

const Research = () => {
  return (
    <div className="page-wrapper">
      <div className="global-styles w-embed">
        <style>
          {`
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
            .margin-0 {
                margin: 0rem !important;
            }
            .padding-0 {
                padding: 0rem !important;
            }
            .spacing-clean {
                padding: 0rem !important;
                margin: 0rem !important;
            }
            .margin-top {
                margin-right: 0rem !important;
                margin-bottom: 0rem !important;
                margin-left: 0rem !important;
            }
            .padding-top {
                padding-right: 0rem !important;
                padding-bottom: 0rem !important;
                padding-left: 0rem !important;
            }
            .margin-right {
                margin-top: 0rem !important;
                margin-bottom: 0rem !important;
                margin-left: 0rem !important;
            }
            .padding-right {
                padding-top: 0rem !important;
                padding-bottom: 0rem !important;
                padding-left: 0rem !important;
            }
            .margin-bottom {
                margin-top: 0rem !important;
                margin-right: 0rem !important;
                margin-left: 0rem !important;
            }
            .padding-bottom {
                padding-top: 0rem !important;
                padding-right: 0rem !important;
                padding-left: 0rem !important;
            }
            .margin-left {
                margin-top: 0rem !important;
                margin-right: 0rem !important;
                margin-bottom: 0rem !important;
            }
            .padding-left {
                padding-top: 0rem !important;
                padding-right: 0rem !important;
                padding-bottom: 0rem !important;
            }
            .margin-horizontal {
                margin-top: 0rem !important;
                margin-bottom: 0rem !important;
            }
            .padding-horizontal {
                padding-top: 0rem !important;
                padding-bottom: 0rem !important;
            }
            .margin-vertical {
                margin-right: 0rem !important;
                margin-left: 0rem !important;
            }
            .padding-vertical {
                padding-right: 0rem !important;
                padding-left: 0rem !important;
            }
            .wf-design-mode [href="#"] {
                background-color: red;
            }
            .navbar_wrapper {
                pointer-events: auto;
            }
            [data-add-quote]::before {
                content: '”';
            }
            [data-add-quote]::after {
                content: '"';
            }
            html {
                font-size: calc(0.625rem + 0.41666666666666663vw);
            }
            @media screen and (max-width:1920px) {
                html {
                    font-size: calc(0.625rem + 0.41666666666666674vw);
                }
            }
            @media screen and (max-width:1440px) {
                html {
                    font-size: 1rem;
                }
            }
            @media screen and (max-width:440px) {
                html {
                    font-size: calc(0.7494305239179955rem + 0.9111617312072892vw);
                }
            }
          `}
        </style>
      </div>
      <main className="main-wrapper">
        <section className="section_hero is-large">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_bg-wrapper">
                <img
                  src={HeroBg}
                  loading="lazy"
                  alt=""
                  className="hero_bg-image hide-mobile-landscape"
                />
                <img
                  src={HeroBgMobile}
                  loading="lazy"
                  alt=""
                  className="hero_bg-image is-accelerator show-mobile-landscape"
                />
                <div className="hero_bg-gradient is-large"></div>
              </div>
              <div className="hero_content-component">
                <div className="max-width-xlarge">
                  <h1>
                    <div>Welcome to the ØG Research</div>
                  </h1>
                </div>
                <div className="max-width-medium is-small">
                  <div className="text-style-muted">
                    At ØG, we connect advanced AI with Web3, driving innovation in decentralized AI through cutting-edge research and collaboration across blockchain ecosystems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <header className="section_header-intend">
          <div className="padding-global">
            <div className="container-large">
              <div className="spacer-huge"></div>
              <div className="header-intend_component">
                <div data-wf--tagline--variant="base" className="text-style-tagline">
                  <div className="text-style-tagline_dot"></div>
                  <div>who we are</div>
                </div>
                <div className="show-mobile-landscape">
                  <div className="spacer-medium"></div>
                </div>
                <div className="spacer-medium"></div>
                <h3 className="header-intend_heading">
                  Optimizing Model Training in <span className="text-color-primary">Decentralized AI Systems</span> with Scalable Frameworks and Algorithms for Efficient and Collaborative <span className="text-color-primary">Global Learning.</span>
                </h3>
                <div className="spacer-xlarge"></div>
              </div>
            </div>
          </div>
        </header>
        <section className="section_research">
          <div className="research_component">
            <div className="border-line-wrap">
              <div className="research_item margin-left-auto">
                <div className="advantage_item-icon-wrapper">
                  <img src={IconComm} loading="lazy" alt="" />
                </div>
                <div className="spacer-small"></div>
                <div className="spacer-xmedium"></div>
                <h3 className="text-size-24">Communication Optimization:</h3>
                <div className="spacer-xsmall"></div>
                <div className="spacer-xxsmall"></div>
                <p className="text-style-muted">
                  Decentralized learning requires frequent sharing of intermediate results, which becomes costly with large models and data. To reduce communication overhead, we will explore advanced techniques like lossless gradient compression and quantization.
                </p>
              </div>
            </div>
            <div className="border-line-wrap is-bottom">
              <div className="research_item">
                <div className="advantage_item-icon-wrapper">
                  <img src={IconLocal} loading="lazy" alt="" />
                </div>
                <div className="spacer-small"></div>
                <div className="spacer-xmedium"></div>
                <h3 className="text-size-24">Local Computation Optimization:</h3>
                <div className="spacer-xsmall"></div>
                <div className="spacer-xxsmall"></div>
                <p className="text-style-muted">
                  Training at scale imposes heavy computation loads, especially on edge devices. We aim to ease this by integrating efficient training pipelines, parallelization methods, and model pruning to enable faster and lighter training.
                </p>
              </div>
            </div>
            <div id="w-node-b421f1a2-deed-5e85-e85b-d107334ed969-c2e992b6" className="border-line-wrap">
              <div className="research_item margin-left-auto">
                <div className="advantage_item-icon-wrapper">
                  <img src={IconPerf} loading="lazy" alt="" />
                </div>
                <div className="spacer-small"></div>
                <div className="spacer-xmedium"></div>
                <h3 className="text-size-24">Performance Optimization with Heterogeneous Data:</h3>
                <div className="spacer-xsmall"></div>
                <div className="spacer-xxsmall"></div>
                <p className="text-style-muted">
                  Variations in local data can cause model drift and reduce accuracy. We plan to develop algorithms that adapt learning rates per neuron and use smart round selection to improve training and aggregation under heterogeneous data conditions.
                </p>
              </div>
            </div>
            <div id="w-node-b421f1a2-deed-5e85-e85b-d107334ed979-c2e992b6" className="border-line-wrap">
              <div className="research_item">
                <div className="advantage_item-icon-wrapper">
                  <img src={IconDyn} loading="lazy" alt="" />
                </div>
                <div className="spacer-small"></div>
                <div className="spacer-xmedium"></div>
                <h3 className="text-size-24">Performance Optimization with Dynamic Environment:</h3>
                <div className="spacer-xsmall"></div>
                <div className="spacer-xxsmall"></div>
                <p className="text-style-muted">
                  In real-world decentralized systems, nodes join and leave unpredictably. We will design asynchronous protocols and schedulers to predict node behavior and prioritize high-quality updates, ensuring stable and accurate model training.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="section_acc-perk">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="acc-perk_component">
                  <div id="w-node-_22ca1cba-a044-920b-4655-551ff0b1dd2b-c2e992b6" className="acc-perk_left is-spread">
                    <h2 className="heading-style-h3 text-wrap-balance">Model Alignment in Decentralized AI Systems</h2>
                    <div className="spacer-xlarge half-mobile"></div>
                    <img src={AccPerkImg} loading="lazy" alt="" />
                  </div>
                  <div id="w-node-e0bd40f4-a208-41ed-b803-8b5bb394c947-c2e992b6" className="acc-perk_right">
                    <p className="text-weight-normal">
                      Contemporary large language models demonstrate exceptional text interpretation and generation capabilities. However, they also raise ethical risks as they could inadvertently generate inappropriate, biased, harmful, or non-factual content. These risks are exacerbated in decentralized AI ecosystems, where each node’s training data is neither controllable nor filtered. It is important to perform model alignment, ensuring the model output aligns with human values. We will make several efforts toward this task.
                    </p>
                    <div className="acc-perk_item-wrap">
                      <div className="acc-perk_item">
                        <h3 className="text-size-24 is-small-mobile">01. Enhanced Learning Algorithms with Human Preference</h3>
                        <div className="spacer-small"></div>
                        <p className="text-weight-normal text-color-primary-down">
                          The most common solution for alignment is to integrate human preferences as human values in model optimization, e.g., Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO). We aim to apply these strategies to decentralized settings and make them more efficient. Possible improvements include the construction of higher-quality preference datasets, design of advanced reward functions, and distributed sharing of human feedback across different participating nodes.
                        </p>
                      </div>
                      <div className="acc-perk_item">
                        <h3 className="text-size-24 is-small-mobile">02. Self-Regulation and Correction</h3>
                        <div className="spacer-small"></div>
                        <p className="text-weight-normal text-color-primary-down">
                          In social psychology, perspective taking is an important emotional intelligence skill, inspiring individuals to leverage self-awareness for behavior regulation. Inspired by this principle, we will propose new alignment strategies, which guide the model to automatically inspect its output responses, identify any content misaligned with human values, and rectify it. A new end-to-end regulation and correction pipeline with advanced prompts will be established to achieve this goal.
                        </p>
                      </div>
                      <div className="acc-perk_item">
                        <h3 className="text-size-24 is-small-mobile">03. Decentralized Debating for Alignment</h3>
                        <div className="spacer-small"></div>
                        <p className="text-weight-normal text-color-primary-down">
                          Debating is another popular alignment method, where multiple models (or agents) debate with each other to produce the most accurate and valuable content. This approach is a natural fit for decentralized AI, where there are multiple models from different nodes ready for debate. We will implement this strategy in real-world, large-scale decentralized scenarios and make adaptations to enhance alignment efficiency and effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_research-listing">
          <div className="hide w-embed">
            <style>
              {`
                .research-list_item:nth-child(6n+1) .research_image:nth-child(1) { display: block; }
                .research-list_item:nth-child(6n+2) .research_image:nth-child(2) { display: block; }
                .research-list_item:nth-child(6n+3) .research_image:nth-child(3) { display: block; }
                .research-list_item:nth-child(6n+4) .research_image:nth-child(4) { display: block; }
                .research-list_item:nth-child(6n+5) .research_image:nth-child(5) { display: block; }
                .research-list_item:nth-child(6n+6) .research_image:nth-child(6) { display: block; }
              `}
            </style>
          </div>
          <div 
            className="padding-section-medium"
            style={{ 
              backgroundImage: 'url(https://cdn.prod.website-files.com/680b884d38733122a923739b/68af4b15aafe1b62b24fa678_Group%201171275835.avif)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="padding-global">
              <div className="spacer-small hide-mobile-landscape"></div>
              <div className="container-large">
                <div className="max-width-xlarge">
                  <h2 className="heading-style-h3 text-color-white">Technical Breakthroughs from the ØG Research Lab</h2>
                </div>
              </div>
              <div className="spacer-xlarge half-mobile"></div>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="research_list w-dyn-items">
                {/* Item 1 */}
                <div role="listitem" className="research-list_item w-dyn-item">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="research-item_component">
                        <div className="research_image-wrapper">
                          <img src={ChatGptImg1} loading="lazy" alt="" className="research_image" />
                          <img src={Img278} loading="lazy" alt="" className="research_image" />
                          <img src={Img278_2} loading="lazy" alt="" className="research_image" />
                          <img src={Img278_3} loading="lazy" alt="" className="research_image" />
                          <img src={Img278_1} loading="lazy" alt="" className="research_image" />
                          <img src={ChatGptImg2} loading="lazy" alt="" className="research_image" />
                        </div>
                        <div className="research_content-wrapper">
                          <div id="w-node-defe9fd1-d3b8-0cc0-1ff7-63f52c74f9b3-c2e992b6" className="research_title-wrapper">
                            <h3 className="heading-style-h5">Detecting Communication Deadlocks in Deep Learning Jobs</h3>
                            <div className="text-style-muted">June 23, 2025</div>
                          </div>
                        </div>
                        <div id="w-node-bcc164a6-f7b0-7e12-1110-cc99c2586f87-c2e992b6" className="button-group is-align-left">
                          <a href="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b518045dcbd53b99359d15_dl2-fse2025.pdf" className="button is-border w-inline-block">
                            <div>Download</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 10.9763L15.8926 5.91707L17.0711 7.09559L10 14.1667L2.92893 7.09559L4.10744 5.91707L9.16667 10.9763V1.66666H10.8333V10.9763Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://conf.researchr.org/details/fse-2025/fse-2025-industry-papers/1/dl-Detecting-Communication-Deadlocks-in-Deep-Learning-Jobs" className="button is-white w-inline-block">
                            <div>Learn More</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div role="listitem" className="research-list_item w-dyn-item">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="research-item_component">
                        <div className="research_image-wrapper">
                            <img src={ChatGptImg1} loading="lazy" alt="" className="research_image" />
                            <img src={Img278} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_2} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_3} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_1} loading="lazy" alt="" className="research_image" />
                            <img src={ChatGptImg2} loading="lazy" alt="" className="research_image" />
                        </div>
                        <div className="research_content-wrapper">
                          <div id="w-node-defe9fd1-d3b8-0cc0-1ff7-63f52c74f9b3-c2e992b6" className="research_title-wrapper">
                            <h3 className="heading-style-h5">Reduction Fusion for Optimized Distributed Data-Parallel Computations via Inverse Recomputation</h3>
                            <div className="text-style-muted">June 25, 2025</div>
                          </div>
                        </div>
                        <div id="w-node-bcc164a6-f7b0-7e12-1110-cc99c2586f87-c2e992b6" className="button-group is-align-left">
                          <a href="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b51954c6bc26fb513fe1aa_reduction-fusion-fse2025.pdf" className="button is-border w-inline-block">
                            <div>Download</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 10.9763L15.8926 5.91707L17.0711 7.09559L10 14.1667L2.92893 7.09559L4.10744 5.91707L9.16667 10.9763V1.66666H10.8333V10.9763Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://conf.researchr.org/details/fse-2025/fse-2025-ideas-visions-and-reflections/6/Reduction-Fusion-for-Optimized-Distributed-Data-Parallel-Computations-via-Inverse-Rec" className="button is-white w-inline-block">
                            <div>Learn More</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div role="listitem" className="research-list_item w-dyn-item">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="research-item_component">
                        <div className="research_image-wrapper">
                            <img src={ChatGptImg1} loading="lazy" alt="" className="research_image" />
                            <img src={Img278} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_2} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_3} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_1} loading="lazy" alt="" className="research_image" />
                            <img src={ChatGptImg2} loading="lazy" alt="" className="research_image" />
                        </div>
                        <div className="research_content-wrapper">
                          <div id="w-node-defe9fd1-d3b8-0cc0-1ff7-63f52c74f9b3-c2e992b6" className="research_title-wrapper">
                            <h3 className="heading-style-h5">A Low-Communication Large-Scale Training Framework for Decentralized Cluster</h3>
                            <div className="text-style-muted">June 26, 2025</div>
                          </div>
                        </div>
                        <div id="w-node-bcc164a6-f7b0-7e12-1110-cc99c2586f87-c2e992b6" className="button-group is-align-left">
                          <a href="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b5141056d5157f362f08f1_2506.21263v1.pdf" className="button is-border w-inline-block">
                            <div>Download</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 10.9763L15.8926 5.91707L17.0711 7.09559L10 14.1667L2.92893 7.09559L4.10744 5.91707L9.16667 10.9763V1.66666H10.8333V10.9763Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://arxiv.org/abs/2506.21263" className="button is-white w-inline-block">
                            <div>Learn More</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* Item 4 */}
                 <div role="listitem" className="research-list_item w-dyn-item">
                  <div className="padding-global">
                    <div className="container-large">
                      <div className="research-item_component">
                        <div className="research_image-wrapper">
                            <img src={ChatGptImg1} loading="lazy" alt="" className="research_image" />
                            <img src={Img278} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_2} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_3} loading="lazy" alt="" className="research_image" />
                            <img src={Img278_1} loading="lazy" alt="" className="research_image" />
                            <img src={ChatGptImg2} loading="lazy" alt="" className="research_image" />
                        </div>
                        <div className="research_content-wrapper">
                          <div id="w-node-defe9fd1-d3b8-0cc0-1ff7-63f52c74f9b3-c2e992b6" className="research_title-wrapper">
                            <h3 className="heading-style-h5">Backdoor Attack against Scaffold Federated Learning</h3>
                            <div className="text-style-muted">June 26, 2025</div>
                          </div>
                        </div>
                        <div id="w-node-bcc164a6-f7b0-7e12-1110-cc99c2586f87-c2e992b6" className="button-group is-align-left">
                          <a href="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b51707a6dae8bd34258ef8_2411.16167v3.pdf" className="button is-border w-inline-block">
                            <div>Download</div>
                            <div className="icon-embed-xxsmall w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M2.5 15.8333H17.5V17.5H2.5V15.8333ZM10.8333 10.9763L15.8926 5.91707L17.0711 7.09559L10 14.1667L2.92893 7.09559L4.10744 5.91707L9.16667 10.9763V1.66666H10.8333V10.9763Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                          <a href="https://arxiv.org/abs/2411.16167" className="button is-white w-inline-block">
                            <div>Learn More</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-global">
              <div className="container-large">
                <div className="spacer-xlarge half-mobile"></div>
                <div className="research-contact_component">
                  <div className="research-contact_content">
                    <h4>Have an innovative idea you’d like us to consider?</h4>
                    <div className="research-contact_divider"></div>
                    <div>We’re open to fresh perspectives—share your concept or proposal with us.</div>
                  </div>
                  <div className="button-group">
                    <a href="/contact" className="button is-white w-inline-block">
                      <div>Reach out to ØG</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section_research">
            <div className="research_component">
                <div id="w-node-_159661d5-8b80-dacf-6352-0ebb2677a596-c2e992b6" className="research_left">
                    <div id="w-node-_580b6e63-e654-4980-f94d-e95d5de5c566-c2e992b6" className="padding-vertical padding-medium">
                        <h2 className="heading-style-h3 text-wrap-balance">New Blockchain System Empowered by Multi-Agent Technology</h2>
                        <div className="spacer-small"></div>
                        <div className="max-width-xmedium">
                            <p>LLM-based multi-agent systems are rising in popularity for managing complex tasks through coordinated AI agents. Their structure aligns well with blockchain, where each node can act as an agent. We will explore key applications of this integration to enhance functionality and efficiency.</p>
                        </div>
                        <div className="spacer-xlarge half-mobile"></div>
                        <img src={MultiAgentImg} loading="lazy" alt="" className="max-width-small" />
                    </div>
                </div>
                <div id="w-node-eb0f4650-7578-7285-b326-889c8f5db6d3-c2e992b6" className="border-line-wrap">
                    <div className="research_item align-bottom-web">
                        <div className="advantage_item-icon-wrapper"><img src={IconSmartContract} loading="lazy" alt="" /></div>
                        <div className="spacer-small"></div>
                        <div className="spacer-xmedium"></div>
                        <h3 className="text-size-24">Smart Contract Management:</h3>
                        <div className="spacer-xsmall"></div>
                        <div className="spacer-xxsmall"></div>
                        <p className="text-style-muted">Smart contracts are a critical component in blockchain to automate transaction execution. It is promising to analyze, manage, and optimize this software in a distributed manner. We could implement a multi-agent solution in the blockchain, with each agent focusing on different functionalities. Their collaboration could significantly augment the blockchain with comprehensive smart contract services.</p>
                    </div>
                </div>
                <div id="w-node-eb0f4650-7578-7285-b326-889c8f5db6df-c2e992b6" className="border-line-wrap">
                    <div className="research_item">
                        <div className="advantage_item-icon-wrapper"><img src={IconAnomaly} loading="lazy" alt="" /></div>
                        <div className="spacer-small"></div>
                        <div className="spacer-xmedium"></div>
                        <h3 className="text-size-24">Anomaly Detection:</h3>
                        <div className="spacer-xsmall"></div>
                        <div className="spacer-xxsmall"></div>
                        <p className="text-style-muted">During blockchain execution, malicious entities may attempt to interfere with transactions, consensus mechanisms, or cross-node communications. It is thus vital to introduce security schemes to monitor the system and detect any anomalies. We will design and develop multi-agent systems to achieve this goal. By encouraging different agents to focus on various aspects of events and coordinating their decisions, the trustworthiness of the blockchain environment will be greatly enhanced.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Research;