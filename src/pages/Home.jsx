import { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import homeHtml from './home.html?raw'
import dottedBg from '../assets/images/dotted_bg.png'
import dottedGradientBg from '../assets/images/dotted_gradient_bg.webp'
import ogOsMobileImage from '../assets/images/og_os_mobile_image.webp'
import riveChainFull from '../assets/animations/rive/6819fc401599b2a5ea2a2c13_01.chain_smaller.riv'
import riveComputeFull from '../assets/animations/rive/6819fc406c94548a98cfcf89_02._compute_network_smaller.riv'
import riveStorageFull from '../assets/animations/rive/681b5af2cb4064e31fa8665b_03._storage_small.riv'
import riveDataAvailabilityFull from '../assets/animations/rive/682c64bf7a0c618af6682627_04._data_availability_smaller (1).riv'
import riveMarketplaceFull from '../assets/animations/rive/6819fc40d392f94abce9a5dc_05._service_marketplace_smaller.riv'
import riveAlignmentNodesFull from '../assets/animations/rive/6819fc4004f353ae504fd7f5_06._aligment_nodes_smaller.riv'
import riveDappsFull from '../assets/animations/rive/681b5af19cd4af1ee3976b76_07._dapps_smaller.riv'
import './Home.css'

let splineViewerLoaderPromise

function ensureSplineViewerLoaded() {
  if (typeof window === 'undefined') return Promise.resolve(false)
  if (window.customElements?.get('spline-viewer')) return Promise.resolve(true)

  if (!splineViewerLoaderPromise) {
    splineViewerLoaderPromise = new Promise(resolve => {
      const existing = document.querySelector('script[data-spline-viewer-loader="true"]')
      if (existing) {
        existing.addEventListener('load', () => resolve(true), { once: true })
        existing.addEventListener('error', () => resolve(false), { once: true })
        return
      }

      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.69/build/spline-viewer.js'
      script.setAttribute('data-spline-viewer-loader', 'true')
      script.addEventListener('load', () => resolve(true), { once: true })
      script.addEventListener('error', () => resolve(false), { once: true })
      document.head.appendChild(script)
    })
  }

  return splineViewerLoaderPromise
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  return match ? match[1] : html
}

function RiveAnimation({ url, stateMachine, artboard, fit, alignment }) {
  const containerRef = useRef(null)
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
  })

  useEffect(() => {
    if (!rive || !stateMachine || typeof rive.stateMachineInputs !== 'function') return
    const inputs = rive.stateMachineInputs(stateMachine)
    if (!inputs) return
    inputs.forEach(input => {
      if (typeof input.value === 'boolean') {
        input.value = true
      }
    })
  }, [rive, stateMachine])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <RiveComponent style={{ width: '100%', height: '100%', pointerEvents: 'none' }} />
    </div>
  )
}

function LazyRiveAnimation(props) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      {isVisible ? <RiveAnimation {...props} /> : null}
    </div>
  )
}

export default function Home() {
  const bodyContent = useMemo(() => {
    let body = extractBody(homeHtml)
    body = body
      .replaceAll('/assets/images/dotted_bg.png', dottedBg)
      .replaceAll('/assets/images/dotted_gradient_bg.webp', dottedGradientBg)
      .replaceAll('/assets/images/og_os_mobile_image.webp', ogOsMobileImage)
      .replaceAll('/assets/rive/6819fc401599b2a5ea2a2c13_01.chain_smaller.riv', riveChainFull)
      .replaceAll('/assets/rive/6819fc406c94548a98cfcf89_02._compute_network_smaller.riv', riveComputeFull)
      .replaceAll('/assets/rive/681b5af2cb4064e31fa8665b_03._storage_small.riv', riveStorageFull)
      .replaceAll(
        '/assets/rive/682c64bf7a0c618af6682627_04._data_availability_smaller (1).riv',
        riveDataAvailabilityFull
      )
      .replaceAll(
        '/assets/rive/6819fc40d392f94abce9a5dc_05._service_marketplace_smaller.riv',
        riveMarketplaceFull
      )
      .replaceAll('/assets/rive/6819fc4004f353ae504fd7f5_06._aligment_nodes_smaller.riv', riveAlignmentNodesFull)
      .replaceAll('/assets/rive/681b5af19cd4af1ee3976b76_07._dapps_smaller.riv', riveDappsFull)
    return body
  }, [])
  const containerRef = useRef(null)
  useEffect(() => {
    const $ = window.$ || window.jQuery
    const gsap = window.gsap
    const Swiper = window.Swiper
    // Auto tabs progress + rotation
    try {
      const tabs = Array.from(document.querySelectorAll('.autotab_link'))
      const panes = Array.from(document.querySelectorAll('.autotab_pane'))
      let currentIndex = 0
      const duration = 10
      let progressTween
      let barTween
      const switchTab = () => {
        if (!tabs.length || !panes.length) return
        tabs.forEach(t => t.classList.remove('w--current'))
        panes.forEach(p => p.classList.remove('w--tab-active'))
        tabs[currentIndex]?.classList.add('w--current')
        panes[currentIndex]?.classList.add('w--tab-active')
        const video = panes[currentIndex]?.querySelector('video')
        if (video) {
          video.currentTime = 0
          video.play?.()
        }
        if (barTween) barTween.kill()
        gsap?.set('.autotab_progress-bar', { width: '0%' })
        barTween = gsap?.to('.autotab_progress-bar', { width: '100%', duration, ease: 'linear' })
        if (progressTween) progressTween.kill()
        progressTween = gsap?.delayedCall(duration, () => {
          currentIndex = (currentIndex + 1) % tabs.length
          switchTab()
        })
      }
      const handleTabClick = (event) => {
        const clickedIndex = tabs.indexOf(event.currentTarget)
        if (clickedIndex !== -1) {
          currentIndex = clickedIndex
          if (progressTween) progressTween.kill()
          if (barTween) barTween.kill()
          switchTab()
        }
      }
      tabs.forEach(tab => tab.addEventListener('click', handleTabClick))
      switchTab()
    } catch { void 0 }
    
    const roots = []
    if (containerRef.current) {
      const riveElements = containerRef.current.querySelectorAll('[data-rive-url]')
      riveElements.forEach(el => {
        el.innerHTML = ''
        const url = el.getAttribute('data-rive-url')
        const stateMachine = el.getAttribute('data-rive-state-machine')
        const artboard = el.getAttribute('data-rive-artboard')
        const fit = el.getAttribute('data-rive-fit')
        const alignment = el.getAttribute('data-rive-alignment')
        if (url) {
          const root = createRoot(el)
          root.render(
            <LazyRiveAnimation
              url={url}
              stateMachine={stateMachine}
              artboard={artboard}
              fit={fit}
              alignment={alignment}
            />
          )
          roots.push(root)
        }
      })
    }

    let splineTeardown = () => {}
    if (containerRef.current) {
      const splineHosts = Array.from(containerRef.current.querySelectorAll('[data-spline-url]'))
      if (splineHosts.length) {
        const splineViewerInstances = []
        ensureSplineViewerLoaded().then(loaded => {
          if (!loaded) return
          splineHosts.forEach(host => {
            const url = host.getAttribute('data-spline-url')
            if (!url) return

            host.removeAttribute('data-animation-type')
            host.textContent = ''

            const viewer = document.createElement('spline-viewer')
            viewer.setAttribute('url', url)
            viewer.style.width = '100%'
            viewer.style.height = '100%'
            viewer.style.pointerEvents = 'none'
            host.appendChild(viewer)
            splineViewerInstances.push({ host, viewer })
          })
        })

        splineTeardown = () => {
          splineViewerInstances.forEach(({ host, viewer }) => {
            if (viewer.parentNode === host) host.removeChild(viewer)
          })
        }
      }
    }

    // Feedback swiper
    try {
      $('.feedback_block').each(function () {
        const $this = $(this)
        const logoSwiperEl = $this.find('.swiper.is-feedback-logo')[0]
        const bgSwiperEl = $this.find('.swiper.is-feedback-bg')[0]
        if (!logoSwiperEl || !bgSwiperEl) return
        const logoSwiper = new Swiper(logoSwiperEl, {
          slidesPerView: 'auto',
          speed: 600,
          allowTouchMove: false,
          slideActiveClass: 'is-active',
        })
        const bgSwiper = new Swiper(bgSwiperEl, {
          slidesPerView: 1,
          speed: 600,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          thumbs: { swiper: logoSwiper },
        })
        bgSwiper.on('slideChange', function () {
          const activeIndex = bgSwiper.realIndex
          $(logoSwiper.slides).removeClass('is-active')
          $(logoSwiper.slides).eq(activeIndex).addClass('is-active')
        })
      })
    } catch { void 0 }
    // Connect swiper
    try {
      $('.connect_component').each(function () {
        const $this = $(this)
        const logoSwiperEl = $this.find('.swiper.is-connect')[0]
        const bgSwiperEl = $this.find('.swiper.is-connect-img')[0]
        if (!logoSwiperEl || !bgSwiperEl) return
        const logoSwiper = new Swiper(logoSwiperEl, {
          slidesPerView: 'auto',
          speed: 600,
          allowTouchMove: false,
          slideActiveClass: 'is-active',
        })
        const bgSwiper = new Swiper(bgSwiperEl, {
          slidesPerView: 1,
          speed: 600,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          loop: true,
          allowTouchMove: true,
          thumbs: { swiper: logoSwiper },
          breakpoints: {
            991: { loop: false, allowTouchMove: false },
          },
          navigation: {
            nextEl: $this.find('.swiper-button-next.is-connect')[0],
            prevEl: $this.find('.swiper-button-prev.is-connect')[0],
          },
        })
        bgSwiper.on('slideChange', function () {
          const activeIndex = bgSwiper.realIndex
          $(logoSwiper.slides).removeClass('is-active')
          $(logoSwiper.slides).eq(activeIndex).addClass('is-active')
        })
      })
    } catch { void 0 }
    // Partners GSAP movement
    try {
      const mm = gsap?.matchMedia()
      mm?.add('(min-width: 992px)', () => {
        document.querySelectorAll('.partners-side_block .partners-tag_wrap').forEach(tag => {
          const moveY = tag.getAttribute('data-move') || '160px'
          gsap.fromTo(tag, { y: 0 }, {
            y: moveY, duration: 12, ease: 'none', yoyo: true, repeat: -1,
            scrollTrigger: { trigger: '.section_partners', start: 'top bottom', end: 'bottom top', toggleActions: 'play pause resume pause' }
          })
        })
        document.querySelectorAll('.partners-tag_wrap.is-boxed').forEach(tag => {
          const moveX = tag.getAttribute('data-move') || '160px'
          gsap.fromTo(tag, { x: 0 }, {
            x: moveX, duration: 12, ease: 'none', yoyo: true, repeat: -1,
            scrollTrigger: { trigger: '.section_partners', start: 'top bottom', end: 'bottom top', toggleActions: 'play pause resume pause' }
          })
        })
      })
      mm?.add('(max-width: 991px)', () => {
        document.querySelectorAll('.partners-side_block .partners-tag_wrap').forEach(tag => {
          const speed = parseFloat(tag.getAttribute('data-duration')) || 15
          gsap.fromTo(tag, { xPercent: 100 }, { xPercent: -100, duration: speed, ease: 'linear', repeat: -1 })
        })
      })
    } catch { void 0 }
    
    return () => {
      // Cleanup roots
      roots.forEach(root => {
        setTimeout(() => root.unmount(), 0)
      })
      splineTeardown()
    }
  }, [])
  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: bodyContent }} />
}
