import React, { useEffect } from 'react';

const pressItems = [
  {
    source: "CoinMarketCap",
    date: "January 13, 2025",
    title: "0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC",
    description: "0G, the first decentralized AI operating system (dAIOS), is collaborating with Alibaba Cloud to drive decentralized AI infrastructure, Web3 innovation, and adoption across the Asia-Pacific region. By combining Alibaba Cloud’s industry-leading cloud computing and storage capabilities with 0G’s decentralized AI expertise, this partnership is setting the stage for scalable, efficient, and data-driven solutions. Together, they aim to accelerate Web3 growth in APAC, empowering developers, enterprises, and emerging talent to harness the potential of AI and blockchain technologies.",
    link: "https://coinmarketcap.com/community/articles/67854d89e0435e3ebb34b492/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "BlockchainReporter",
    date: "January 9, 2025",
    title: "0G Foundation Raises $30M+ From Public Node Sale to Boost Decentralized AI OS",
    description: "0G Foundation, the largest decentralized AI network, has completed its remarkable node sale. As per 0G Foundation, the 0G AI Alignment Public Node Sale has surpassed over $30M, indicating the 3rd-biggest fundraising in the decentralized AI sector’s history. This development reportedly denotes a significant achievement for the platform. The earliest operating system in the decentralized AI realm for on-chain apps has reportedly made a record-breaking move with this fundraising. This development contributes to its further advancement in offering innovative decentralized AI solutions.",
    link: "https://blockchainreporter.net/0g-foundation-raises-30m-from-public-node-sale-to-boost-decentralized-ai-os/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "CryptoTimes",
    date: "December 23, 2024",
    title: "How Blockchain x AI Is Transforming The Digital Landscape",
    description: "Over the past decade, two major technological paradigms have emerged: artificial intelligence (AI) and blockchain. While both technologies are incredibly useful on their own, they are starting to converge and drive a significant change in how people around the world process, secure, and utilize data. As a result, conservative estimates suggest that the global blockchain x AI market is set to propel from its 2022 valuation of $8.3 Billion to a sizable $335.8 billion by 2030, growing at a CAGR of 58% during the period as mentioned above.",
    link: "https://www.cryptotimes.io/2024/12/23/how-blockchain-x-ai-is-transforming-the-digital-landscape/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "CoinTelegraph",
    date: "December 12, 2024",
    title: "DeFi rug pull surge reveals more complex crypto scam strategies",
    description: "While the crypto industry has continued to reach new heights, recently hitting a market capitalization of $3.89 trillion, the decentralized finance (DeFi) landscape has witnessed a dramatic upsurge in the number of rug pull incidents. On Nov. 14, the number of rug pull incidents peaked at an alarming 31 in a single day, while their monthly cumulative losses amounted to a sizable $15 million, signaling the escalating sophistication of scammers.",
    link: "https://cointelegraph.com/news/defi-rug-pull-crypto-scam-strategies",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "The Block",
    date: "November 13, 2024",
    title: "Crypto-AI startup 0G Labs raises $40 million seed and receives $250 million token purchase commitment",
    description: "Zero Gravity Labs (0G Labs or 0GL), a crypto-AI startup developing infrastructure for a decentralized AI system, has announced $290 million in new funding. This includes a $40 million seed round raised by the Labs and a $250 million token purchase commitment received by the 0G Foundation, the independent governance body for the 0G Protocol.",
    link: "https://www.theblock.co/post/326241/crypto-ai-startup-0g-labs-funding-token-commitment?utm_source=twitter&utm_medium=social",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "Binance CN",
    date: "November 13, 2024",
    title: "0G Labs 获得 4000 万美元融资，用于推进去中心化 AI 操作系统",
    description: "Zero Gravity Labs (OG Labs) 是全球首个去中心化人工智能操作系统 (dAIOS) 的创造者，该公司已从多家领先的风险投资公司筹集了 4000 万美元的种子轮融资。此前，该公司已完成了 3500 万美元的种子前融资，总承诺资本达到 3.25 亿美元。最新一轮融资和 2.5 亿美元的流动资金支持 OG Labs 建立安全、去中心化的 AI 生态系统的使命。",
    link: "https://www.binance.com/zh-CN/square/post/16191072600817",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "CoinTelegraph Japan",
    date: "October 23, 2024",
    title: "AIの「正直さ」を監視｜0G Foundation、オンチェーンAIの安全な未来のために、初のAIアライメント・ノードセールを開始",
    description: "ケイマン諸島、2024年10月22日 - 世界初の分散型AIオペレーティングシステムを推進する「0G Foundation」は、2024年11月11日に待望のノードセール（ノード販売による資金調達）を開始する。AIが数世紀ぶりの産業革命を巻き起こしつつある現在、膨大なデータフローを処理可能であると同時に、AIシステムの整合性をも維持しうる、堅牢かつ分散型のインフラストラクチャの必要性が叫ばれている。かかる期待に応えて、0G Foundationは、オンチェーンアプリケーションのための完璧な分散型AIオペレーティングシステムの構築をめざす。今回の0G AI ノードセールは、安全かつ信頼性が高く、高性能なAIネットワークを構築するうえで、重要なステップとなるだろう。",
    link: "https://jp.cointelegraph.com/press-releases/keep-ai-honest-0g-foundation-launches-first-ai-alignment-node-sale",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "FinanceFeeds",
    date: "October 22, 2024",
    title: "0G Foundation Launches AI Alignment Node Sale for a Safer On-Chain Future",
    description: "0G Foundation launches AI Alignment Node Sale on November 11, 2024, aiming to create a secure, decentralized AI network for on-chain applications. 0G Foundation, a leader in developing a decentralized AI Operating System for on-chain applications, will launch its node sale on November 11, 2024. As artificial intelligence (AI) reshapes industries, the need for a secure and decentralized infrastructure to manage data integrity is more critical than ever. The 0G AI Alignment Node Sale is a key initiative toward building a safe, reliable, and high-performance AI network.",
    link: "https://financefeeds.com/0g-foundation-launches-ai-alignment-node-sale-for-a-safer-on-chain-future/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "CoinJournal",
    date: "October 4, 2024",
    title: "0G transforms into the world’s first Decentralized AI Operating System (dAIOS)",
    description: "On October 1, 2024, 0G announced a groundbreaking shift in its identity, evolving from a leading modular AI blockchain to the world’s first Decentralized AI Operating System (dAIOS). This transformation underscores 0G’s commitment to decentralizing artificial intelligence and providing users with complete control over their data while promoting transparency, monetization, and incentive alignment.",
    link: "https://coinjournal.net/news/0g-transforms-into-the-worlds-first-decentralized-ai-operating-system-daios/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "U.Today",
    date: "September 24, 2024",
    title: "0G Introduces Next-Gen Data Storage Solutions Powered by AI: Details",
    description: "By building the next generation of data storage solutions — which can bridge the gap between decentralized data protocols and AI companies — 0G ensures high-performance data delivery, which is essential for cost-effective LLMs training in 2024. 0G bridges gap between Web3, AI and Big Data for consumer apps.",
    link: "https://u.today/0g-introduces-next-gen-data-storage-solutions-powered-by-ai-details",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "Cointelegraph",
    date: "September 18, 2024",
    title: "AI faces ‘Immense’ risks without blockchain: 0G Labs CEO",
    description: "Michael Heinrich warns against centralized AI systems evolving without human input, advocating for blockchain-based decentralized governance to ensure transparency. In an interview with Cointelegraph at Token2049, Michael Heinrich, the CEO of 0G Labs, explained that artificial intelligence poses significant risks if it isn’t integrated with blockchain technology.",
    link: "https://cointelegraph.com/news/ai-risks-without-blockchain-0g-labs-ceo",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "Financefeeds",
    date: "August 19, 2024",
    title: "The High Price of Speed. How Transaction Fees are Throttling Blockchain’s Potential",
    description: "Despite the many innovations that have permeated the blockchain realm in recent years, some of the most advanced networks today still struggle to balance key aspects such as transaction speeds, network congestion, and low-fee structures. Therefore, as blockchain adoption has surged and decentralized applications (dApps) have continued to proliferate, the issue of high transaction fees and network latency is becoming increasingly pronounced.",
    link: "https://financefeeds.com/the-high-price-of-speed-how-transaction-fees-are-throttling-blockchains-potential/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "AI News",
    date: "August 9, 2024",
    title: "The merging of AI and blockchain was inevitable – but what will it mean?",
    description: "At first glance, AI and blockchain seem like completely disparate realms. For instance, blockchain emphasises decentralisation but suffers from constrained memory and throughput rates. On the other hand, AI thrives on massive datasets and demands high-performance computing. To elaborate, Machine learning (ML) models – especially deep learning networks – require enormous amounts of data to train effectively, often relying on powerful GPUs or specialised hardware to process this information quickly.",
    link: "https://www.artificialintelligence-news.com/news/the-merging-of-ai-and-blockchain-was-inevitable-but-what-will-it-mean/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "TechStartUps",
    date: "July 30, 2024",
    title: "0G Foundation and OnePiece Labs join forces to launch new incubator program for Web3 and AI startups",
    description: "With Web3 and AI technologies gaining increasing momentum, 0G Foundation announced today it has teamed up with One Piece Labs to launch its inaugural incubation program, targeting promising startup founders across various industries. This initiative seeks to provide these emerging entrepreneurs with advanced technological solutions, including 0G.ai’s decentralized architecture (DA), data storage, and serving layers, to drive innovation and growth in sectors such as Web3, AI, Gaming, DeFi, dePIN, deStorage, and deCompute.",
    link: "https://techstartups.com/2024/07/30/0g-foundation-and-onepiece-labs-join-forces-to-launch-new-incubator-program-for-web3-and-ai-startups/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "DL News",
    date: "July 11, 2024",
    title: "A conversation with Michael Heinrich, co-founder & CEO of 0G Labs",
    description: "What are some gaps between Web2 and Web3, and what is 0G Labs doing to address these? There is a significant gap in AI between Web2 and Web3. In Web2, AI is centralised and opaque, with data and models kept private. Conversely, Web3 is decentralised and transparent, but AI has been impractical due to infrastructure limitations.",
    link: "https://www.dlnews.com/research/a-conversation-with-michael-heinrich-co-founder-ceo-of-0g-labs/",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "HackerNoon",
    date: "July 11, 2024",
    title: "Redefining Data Availability for the Next Generation of Blockchain Applications with 0G Labs",
    description: "Today, we sit down with Michael to unravel the story behind 0G Labs, a company that's not just participating in the Web3 revolution but actively shaping its future. With groundbreaking solutions that promise to deliver unprecedented speed, scalability, and cost-effectiveness, 0G Labs is positioning itself at the forefront of the next generation of blockchain technology.",
    link: "https://hackernoon.com/redefining-data-availability-for-the-next-generation-of-blockchain-applications-with-0g-labs",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "Decrypt",
    date: "June 10, 2024",
    title: "Modular AI Blockchain 0G Releases V2 of Its Testnet",
    description: "Data availability network 0G has announced the release of Testnet Newton v2, marking a milestone in its mission to make AI services a public good. V2 introduces a host of new features, stability fixes, and security enhancements that advance the first iteration of the 0G testnet.",
    link: "https://decrypt.co/234598/modular-ai-blockchain-0g-releases-v2-of-its-testnet",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  },
  {
    source: "Business Insider",
    date: "June 10, 2024",
    title: "0G Labs raises $35 million to build the first decentralized AI operating system",
    description: "0G Labs has raised $35 million in pre-seed funding to build the first decentralized AI operating system. The round was led by Hack VC, with participation from Stanford Builders Fund, Alliance, Orange, and others. The funding will be used to scale the company's team and accelerate the development of its decentralized AI operating system.",
    link: "https://www.businessinsider.com/0g-labs-pitch-deck-ai-blockchain-startup-funding-2024-6",
    image: "https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a923740a_image%20278-1.png"
  }
];

export default function Press() {
  useEffect(() => {
    // Add external CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.prod.website-files.com/680b884d38733122a923739b/css/0g-ai.webflow.shared.87f49be73.min.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    // Optional: Add fonts if they are not already in the project
    // But usually CSS file handles font imports if they are relative, but here they are from CDN, so it might work.
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero_bg-wrapper">
                <img 
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%20group.webp" 
                  loading="lazy" 
                  sizes="(max-width: 3024px) 100vw, 3024px" 
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-500.webp 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-800.webp 800w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-1080.webp 1080w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-1600.webp 1600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-2000.webp 2000w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%2520group-p-2600.webp 2600w, https://cdn.prod.website-files.com/680b884d38733122a923739b/680b884d38733122a92373c8_Mask%20group.webp 3024w"
                  alt="" 
                  className="hero_bg-image hide-mobile-landscape" 
                />
                <img 
                  src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682af4ad870019d54a80fa76_Group1234.avif" 
                  loading="lazy" 
                  sizes="100vw" 
                  srcSet="https://cdn.prod.website-files.com/680b884d38733122a923739b/682af4ad870019d54a80fa76_Group1234-p-500.avif 500w, https://cdn.prod.website-files.com/680b884d38733122a923739b/682af4ad870019d54a80fa76_Group1234.avif 786w"
                  alt="" 
                  className="hero_bg-image show-mobile-landscape" 
                />
                <div className="hero_bg-gradient"></div>
              </div>
              <div className="hero_content-component">
                <div className="max-width-large">
                  <h1>ØG Press</h1>
                </div>
                <div className="max-width-xsmall">
                  <div className="text-style-muted short-width-para-7">Read the latest news and media stories from the ØG ecosystem.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_press">
          <div className="padding-global">
            <div className="container-large">
              <div role="list" className="press_list w-dyn-items">
                {pressItems.map((item, index) => (
                  <div key={index} role="listitem" className="press_item w-dyn-item">
                    <div className="padding-global">
                      <div className="container-large">
                        <div className="item_component">
                          <img src={item.image} loading="lazy" alt="" className="list_image w-dyn-bind-empty" />
                          <div className="press_content-wrapper">
                            <div className="press_title-wrapper">
                              <div className="press_meta-wrapper">
                                <div>{item.source}</div>
                                <div className="icon-embed-custom w-embed">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 4 4" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"/>
                                  </svg>
                                </div>
                                <div>{item.date}</div>
                              </div>
                              <h3 className="heading-style-h5">{item.title}</h3>
                            </div>
                            <p className="text-style-muted">{item.description}</p>
                          </div>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-icon is-static-press w-inline-block">
                            <div className="icon-embed-xsmall w-embed">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                                <path d="M18.3643 15.5354L16.9501 14.1212L18.3643 12.707C20.3169 10.7544 20.3169 7.5886 18.3643 5.63598C16.4117 3.68335 13.2458 3.68335 11.2932 5.63598L9.87898 7.05019L8.46477 5.63598L9.87898 4.22176C12.6127 1.48809 17.0448 1.48809 19.7785 4.22176C22.5122 6.95543 22.5122 11.3875 19.7785 14.1212L18.3643 15.5354ZM15.5358 18.3639L14.1216 19.7781C11.388 22.5117 6.9558 22.5117 4.22213 19.7781C1.48846 17.0444 1.48846 12.6122 4.22213 9.87862L5.63634 8.4644L7.05056 9.87862L5.63634 11.2928C3.68372 13.2454 3.68372 16.4112 5.63634 18.3639C7.58896 20.3165 10.7548 20.3165 12.7074 18.3639L14.1216 16.9496L15.5358 18.3639ZM14.8287 7.7573L16.243 9.17151L9.17188 16.2425L7.75766 14.8283L14.8287 7.7573Z" fill="currentColor"/>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
