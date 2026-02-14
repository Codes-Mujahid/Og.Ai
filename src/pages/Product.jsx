import React, { useEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import productHeroImageMin from '../assets/images/product_hero_image_min.avif';
import productHeroImage1 from '../assets/images/product_hero_image_1.avif';
import dottedGradientBg from '../assets/images/dotted_gradient_bg.webp';
import groupImage from '../assets/images/group.svg';
import riveChain from '../assets/animations/rive/01.chain_smaller.riv';
import riveChainMobile from '../assets/animations/rive/01.chain_smaller_mobile.riv';
import riveCompute from '../assets/animations/rive/02.compute_network_smaller.riv';
import riveComputeMobile from '../assets/animations/rive/02.compute_network_smaller_mobile.riv';
import riveStorage from '../assets/animations/rive/03.storage_small.riv';
import riveDataAvailability from '../assets/animations/rive/04.data_availability_smaller.riv';
import './Product.css'

const RiveAnimation = ({ url, stateMachine, artboard, fit, alignment }) => {
  const { rive, RiveComponent } = useRive({
    src: url,
    stateMachines: stateMachine || undefined,
    artboard: artboard,
    autoplay: true,
    layout: new Layout({
      fit: fit === 'cover' ? Fit.Cover : Fit.Contain,
      alignment:
        alignment === 'center'
          ? Alignment.Center
          : alignment === 'bottomCenter'
            ? Alignment.BottomCenter
            : Alignment.TopCenter,
    }),
  });

  useEffect(() => {
    if (!rive || !stateMachine || typeof rive.stateMachineInputs !== 'function') return;
    const inputs = rive.stateMachineInputs(stateMachine);
    if (!inputs) return;
    inputs.forEach((input) => {
      if (typeof input.value === 'boolean') {
        input.value = true;
      }
    });
  }, [rive, stateMachine]);

  return <RiveComponent style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />;
};

const htmlContent = `
<main class="main-wrapper">
    <section class="section_hero is-large">
        <div class="padding-global">
            <div class="container-large">
                <div class="hero_bg-wrapper"><img src="${productHeroImageMin}" loading="lazy" sizes="(max-width: 3024px) 100vw, 3024px" srcset="${productHeroImageMin} 500w, ${productHeroImageMin} 800w, ${productHeroImageMin} 3024w" alt="" class="hero_bg-image hide-mobile-landscape" /><img src="${productHeroImage1}" loading="lazy" sizes="100vw" srcset="${productHeroImage1} 500w, ${productHeroImage1} 786w" alt="" class="hero_bg-image is-product show-mobile-landscape" />
                    <div class="hero_bg-gradient is-large"></div>
                </div>
                <div class="hero_content-component">
                    <div class="max-width-xlarge">
                        <h1>Decentralized AI Operating System</h1>
                    </div>
                    <div class="max-width-medium">
                        <div class="ecosystem-stats_wrapper">
                            <div class="heading-style-h5 text-wrap-balance">The largest AI-first blockchain</div>
                        </div>
                        <div class="spacer-small"></div>
                        <div class="text-style-muted short-width-para-7">0G features an infinitely scalable data availability layer, a modular storage system, and a flexible serving framework. Scale your AI and unlock new onchain use cases—50,000x faster and 100x cheaper.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section_product-grid">
        <div class="padding-section-large bottom-none">
            <div class="padding-global">
                <div class="container-large">
                    <div class="section-header_center">
                        <h2 class="heading-style-h3">Frictionless transactions and data exchanges. <span class="text-color-primary">Build without limits </span>with Zero Gravity (0G)<span class="text-color-primary">.</span></h2>
                    </div>
                </div>
            </div>
            <div class="product-grid_component">
                <div data-w-id="189e0c2d-46bd-4f0b-3544-fda9f5a56f28" class="w-layout-grid product-grid_content">
                    <div class="border-line-wrap">
                        <div class="product-grid_item margin-left-auto">
                            <div class="text-align-center">
                                <h3 class="text-size-24">0G Chain:</h3>
                                <div class="spacer-xsmall"></div>
                                <div class="spacer-xxsmall"></div>
                                <p class="text-style-muted">EVM-compatible L1 designed for any use case, with a focus on data-intensive AI workloads that were previously impossible onchain.</p>
                                <div class="spacer-xmedium"></div>
                                <div class="button-group is-center z-index-2">
                                    <a href="https://docs.0g.ai/developer-hub/getting-started" target="_blank" class="button w-inline-block">
                                        <div>Build with us</div>
                                    </a><a href="https://docs.0g.ai/concepts/chain" target="_blank" class="button is-secondary w-button">Learn about 0G Chain</a></div>
                                <div class="spacer-medium"></div>
                                <div class="spacer-rive"></div>
                                <div class="animation is-product show-tablet" data-rive-url="/assets/rive/01.chain_smaller.riv" data-rive-state-machine="HoverMachine" data-rive-artboard="Artboard 2" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="topCenter" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                                <div class="animation is-product hide-tablet" data-rive-url="/assets/rive/01.chain_smaller_mobile.riv" data-rive-state-machine="HoverMachine" data-rive-artboard="Artboard 2" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="topCenter" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                            </div><img sizes="(max-width: 942px) 100vw, 942px" srcset="/assets/images/dotted_gradient_bg.webp 500w, /assets/images/dotted_gradient_bg.webp 942w" alt="" src="/assets/images/dotted_gradient_bg.webp" loading="lazy" class="white-dotted-bg" /></div>
                    </div>
                    <div class="border-line-wrap">
                        <div class="product-grid_item">
                            <div class="text-align-center">
                                <h3 class="text-size-24">Compute Network:</h3>
                                <div class="spacer-xsmall"></div>
                                <div class="spacer-xxsmall"></div>
                                <p class="text-style-muted">Connects service providers and end users. AI is now a public good with 0G's versatile framework for data retrieval, AI inference, and model training. </p>
                                <div class="spacer-xmedium"></div>
                                <div class="button-group is-center z-index-2">
                                    <a href="https://docs.0g.ai/developer-hub/getting-started" target="_blank" class="button w-inline-block">
                                        <div>Build with us</div>
                                    </a><a href="https://docs.0g.ai/concepts/compute" target="_blank" class="button is-secondary w-button">Learn about Compute</a></div>
                                <div class="spacer-rive"></div>
                                <div class="animation is-2 show-tablet" data-rive-url="/assets/rive/02.compute_network_smaller.riv" data-rive-state-machine="Compute Static to Looping" data-rive-artboard="Compute Network 2" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="topCenter" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                                <div class="animation is-product hide-tablet" data-rive-url="/assets/rive/02.compute_network_smaller_mobile.riv" data-rive-state-machine="0x - 1x" data-rive-artboard="Nested" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="topCenter" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                            </div><img sizes="(max-width: 942px) 100vw, 942px" srcset="/assets/images/dotted_gradient_bg.webp 500w, /assets/images/dotted_gradient_bg.webp 942w" alt="" src="/assets/images/dotted_gradient_bg.webp" loading="lazy" class="white-dotted-bg" /></div>
                    </div>
                    <div class="border-line-wrap">
                        <div class="product-grid_item margin-left-auto">
                            <div class="text-align-center">
                                <h3 class="text-size-24">Storage:</h3>
                                <div class="spacer-xsmall"></div>
                                <div class="spacer-xxsmall"></div>
                                <p class="text-style-muted">A distributed storage network optimized for massive data loads. 2 GB/second throughput, at a fraction of the cost of traditional solutions.</p>
                                <div class="spacer-xmedium"></div>
                                <div class="button-group is-center z-index-2">
                                    <a href="https://docs.0g.ai/developer-hub/getting-started" target="_blank" class="button w-inline-block">
                                        <div>Build with us</div>
                                    </a><a href="https://docs.0g.ai/concepts/storage" target="_blank" class="button is-secondary w-button">Learn about Storage</a></div>
                                <div class="spacer-medium"></div>
                                <div class="spacer-rive"></div>
                                <div class="animation is-product hide-tablet" data-rive-url="/assets/rive/03.storage_small.riv" data-rive-state-machine="Hovering" data-rive-artboard="Artboard" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="center" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                                <div class="animation is-product show-tablet" data-rive-url="/assets/rive/03.storage_small.riv" data-rive-state-machine="Hovering" data-rive-artboard="Artboard" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="center" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                            </div><img sizes="(max-width: 942px) 100vw, 942px" srcset="/assets/images/dotted_gradient_bg.webp 500w, /assets/images/dotted_gradient_bg.webp 942w" alt="" src="/assets/images/dotted_gradient_bg.webp" loading="lazy" class="white-dotted-bg" /></div>
                    </div>
                    <div class="border-line-wrap">
                        <div class="product-grid_item">
                            <div class="text-align-center">
                                <h3 class="text-size-24">Data Availability:</h3>
                                <div class="spacer-xsmall"></div>
                                <div class="spacer-xxsmall"></div>
                                <p class="text-style-muted">Enables Web3 to reach Web2 performance speeds and cost parity via an infinitely scalable and programmable data availability layer.</p>
                                <div class="spacer-xmedium"></div>
                                <div class="button-group is-center z-index-2">
                                    <a href="https://docs.0g.ai/developer-hub/getting-started" target="_blank" class="button w-inline-block">
                                        <div>Build with us</div>
                                    </a><a href="https://docs.0g.ai/concepts/da" target="_blank" class="button is-secondary w-button">Learn about DA</a></div>
                                <div class="spacer-rive"></div>
                                <div class="spacer-medium"></div>
                                <div class="animation is-product show-tablet" data-rive-url="/assets/rive/04.data_availability_smaller.riv" data-rive-state-machine="HoverMachine" data-rive-artboard="Artboard 2" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="center" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                                <div class="animation is-product hide-tablet" data-rive-url="/assets/rive/04.data_availability_smaller.riv" data-rive-state-machine="HoverMachine" data-rive-artboard="Artboard 2" data-rive-autoplay="true" data-rive-is-touch-scroll-enabled="false" data-rive-automatically-handle-events="false" data-rive-fit="contain" data-rive-alignment="center" data-animation-type="rive"><canvas style="height:100%;width:100%"></canvas></div>
                            </div><img sizes="(max-width: 942px) 100vw, 942px" srcset="/assets/images/dotted_gradient_bg.webp 500w, /assets/images/dotted_gradient_bg.webp 942w" alt="" src="/assets/images/dotted_gradient_bg.webp" loading="lazy" class="white-dotted-bg" /></div>
                    </div>
                </div>
                <div class="press-vertical_component">
                    <div id="w-node-de258b64-d14a-d0af-18c8-66beed0c66eb-680a4b03" class="border-line-wrap">
                        <div class="produc-event_wrap margin-left-auto">
                            <div class="header-eyebrow">
                                <div class="header-eyebrow_dot"></div>
                                <div class="header-eyebrow_text">Weightless</div>
                            </div>
                            <div class="max-width-medium">
                                <h2 class="heading-style-h3 is-40">Catch the latest ØG news and updates</h2>
                            </div>
                            <div class="button-group">
                                <a href="/blog" class="button w-inline-block">
                                    <div>Read the Blog</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_6eee297f-a733-3fc3-39a1-532cf9714a8f-680a4b03" class="width-100 w-dyn-list">
                        <div role="list" class="press-featured_component w-dyn-items">
                            <div role="listitem" class="press-vertical_item w-dyn-item">
                                <div class="border-line-wrap"><a href="/blog/builder-spotlight-flashback" class="press-vertical_content-wrap w-inline-block"><img class='custom-img' src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site.png"/><div class="press_title-wrapper mobile-gap-4"><div class="press_meta-wrapper"><div class="w-dyn-bind-empty"></div><div class="icon-embed-custom w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img"><circle cx="2" cy="2" r="2" fill="currentColor"/></svg></div><div>Feb 05, 2026</div></div><div class="spacer-xsmall"><h3 class="text-size-24 mobile-18">0G Builder Spotlight: Flashback Privacy-First AI Memories</h3></div></div></a></div>
                            </div>
                            <div role="listitem" class="press-vertical_item w-dyn-item">
                                <div class="border-line-wrap"><a href="/blog/agentic-ai-market-infra-2026" class="press-vertical_content-wrap w-inline-block"><img class='custom-img' src="https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/697dbe1bc78d2096a8f70d40_Blog_Infrastructure.png"/><div class="press_title-wrapper mobile-gap-4"><div class="press_meta-wrapper"><div class="w-dyn-bind-empty"></div><div class="icon-embed-custom w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img"><circle cx="2" cy="2" r="2" fill="currentColor"/></svg></div><div>Jan 30, 2026</div></div><div class="spacer-xsmall"><h3 class="text-size-24 mobile-18">Agentic AI Market at $7.3B: Infrastructure Gaps Blocking Scale</h3></div></div></a></div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-de258b64-d14a-d0af-18c8-66beed0c66eb-680a4b03" class="border-line-wrap">
                        <div class="produc-event_wrap margin-left-auto">
                            <div class="header-eyebrow">
                                <div class="header-eyebrow_dot"></div>
                                <div class="header-eyebrow_text">White Paper</div>
                            </div>
                            <div class="max-width-medium">
                                <h2 class="heading-style-h3 is-40">The Backbone ØG's Decentralized AI Operating System</h2>
                            </div>
                            <div class="button-group">
                                <a href="https://cdn.jsdelivr.net/gh/0glabs/0g-doc/static/whitepaper.pdf" target="_blank" class="button w-inline-block">
                                    <div>Read the White Paper</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-bd04927c-4aff-f615-43ca-ced3da61486d-680a4b03" class="border-line-wrap mobile-top-none">
                        <div class="whitepaper_content-wrap"><img src="/assets/images/group.svg" loading="lazy" alt="" class="whitepaper_img" /><img src="/assets/images/dotted_gradient_bg.webp" loading="lazy" sizes="(max-width: 942px) 100vw, 942px" srcset="/assets/images/dotted_gradient_bg.webp 500w, /assets/images/dotted_gradient_bg.webp 942w" alt="" class="white-dotted-bg is-pull-down" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
`;

export default function Product() {
  const containerRef = useRef(null);
  const processedHtml = useMemo(
    () =>
      htmlContent
        .replaceAll('/assets/images/dotted_gradient_bg.webp', dottedGradientBg)
        .replaceAll('/assets/images/group.svg', groupImage)
        // .replaceAll('/assets/images/blog/License_Migration.png', blogImageLicenseMigration)
        // .replaceAll('/assets/images/blog/H2_Update.png', blogImageH2Update)
        .replaceAll('/assets/rive/01.chain_smaller.riv', riveChain)
        .replaceAll('/assets/rive/01.chain_smaller_mobile.riv', riveChainMobile)
        .replaceAll('/assets/rive/02.compute_network_smaller.riv', riveCompute)
        .replaceAll('/assets/rive/02.compute_network_smaller_mobile.riv', riveComputeMobile)
        .replaceAll('/assets/rive/03.storage_small.riv', riveStorage)
        .replaceAll('/assets/rive/04.data_availability_smaller.riv', riveDataAvailability),
    []
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const riveElements = containerRef.current.querySelectorAll('[data-rive-url]');
    const roots = [];

    riveElements.forEach((el) => {
      // Clear existing content (e.g., empty canvas from HTML)
      el.innerHTML = '';

      const url = el.getAttribute('data-rive-url');
      const stateMachine = el.getAttribute('data-rive-state-machine');
      const artboard = el.getAttribute('data-rive-artboard');
      const fit = el.getAttribute('data-rive-fit');
      const alignment = el.getAttribute('data-rive-alignment');

      if (url) {
        const root = createRoot(el);
        root.render(
          <RiveAnimation
            url={url}
            stateMachine={stateMachine}
            artboard={artboard}
            fit={fit}
            alignment={alignment}
          />
        );
        roots.push(root);
      }
    });

    return () => {
      roots.forEach(root => root.unmount());
    };
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: processedHtml }} />;
}
