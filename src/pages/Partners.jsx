import { useState, useMemo, useEffect } from 'react'
import './Partners.css'

const partners = [
  {
    name: 'Aethir',
    categories: ['AI - Compute & Execution'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488e7e16afcc1f34297e26_Aethir_logo.png',
    alt: 'Aethir',
    description: 'Aethir is a decentralized cloud computing platform designed to support Web3, blockchain applications, and the metaverse. They offer ultra low latency, scalable GPU compute solutions for dynamic enterprise use cases, making it easier for GPU infrastructure providers to scale and buyers to access GPU worldwide. Aethir\'s SDKs and seamless node onboarding enable developers to cut costs, scale quickly, and penetrate the market effectively, maximizing game reach and enabling cost-efficient game porting.',
    website: 'https://aethir.com',
    twitter: 'https://x.com/AethirCloud'
  },
  {
    name: 'Aizel Network',
    categories: ['DePIN', 'AI - Agents', 'AI - Compute & Execution', 'AI - Inference & Models'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498b7c32b6078e79aade3e_AizelNetwork_logo.avif',
    alt: 'Aizel Network',
    description: 'Aizel Network is the fastest and most scalable modular network dedicated to verifiable and private intelligence.',
    website: 'http://aizelnetwork.com',
    twitter: 'https://twitter.com/aizel_network'
  },
  {
    name: 'Alchemy',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488e8740a126cb0a0ca082_Alchemy_logo.png',
    alt: 'Alchemy',
    description: 'Alchemy is a web3 development platform that provides a powerful set of web3 APIs for building and scaling decentralized applications. It offers services such as NFT APIs, webhooks, blockchain connections, subgraphs, and token APIs, making it faster, more reliable, and scalable than other solutions. Alchemy empowers companies to build decentralized applications without managing blockchain infrastructure in-house, with top projects like Augur, Cryptokitties, and OpenSea relying on its services.',
    website: 'https://www.alchemy.com/',
    twitter: 'https://x.com/Alchemy'
  },
  {
    name: 'Alibaba Cloud',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488e408483139e404c5dde_AlibabaCloud_logo.avif',
    alt: 'Alibaba Cloud',
    description: 'Alibaba Cloud provides a comprehensive suite of scalable and secure cloud computing and data management services to businesses in the USA and Canada, enabling them to digitalize and meet their IT needs effectively.',
    website: 'https://www.alibabacloud.com/',
    twitter: 'https://www.twitter.com/alibaba_cloud?spm=a3c0i.259011.9135018350.3.237e3870dCsYDT'
  },
  {
    name: 'Alliance DAO',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498b8ad0e02d59a15b4120_Alliance_logo.avif',
    alt: 'Alliance DAO',
    description: 'Alliance is the top crypto accelerator & founder community, providing mentorship, funding, and a global network for Web3 innovation.',
    website: 'https://alliance.xyz/',
    twitter: 'https://twitter.com/alliancedao'
  },
  {
    name: 'Altlayer',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488e9a5865f8fd9b017447_AltLayer_logo.png',
    alt: 'Altlayer',
    description: 'AltLayer is a Rollups as a Service provider for Web3. They offer Restaked Rollups and Rollups as a Service to accelerate scaling for Web3 applications. AltLayer is backed by prominent investors and has collaborated with various projects in the blockcha...',
    website: 'http://altlayer.io',
    twitter: 'https://x.com/alt_layer'
  },
  {
    name: 'Anchorage Digital',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498bce23d6e1bc0b7fe7af_Anchorage%20Digital_logo.avif',
    alt: 'Anchorage Digital',
    description: 'Anchorage Digital is a regulated crypto platform that provides institutions with integrated financial services and infrastructure solutions. With the only federally chartered crypto bank in the US, as well as Anchorage Digital Singapore, which offers equivalent security and service standards, Anchorage Digital delivers an unparalleled combination of secure custody, regulatory compliance, and platform capabilities. Founded in 2017, Anchorage Digital is valued at over $3 billion with funding from leading institutions including Andreessen Horowitz, GIC—Singapore\'s sovereign wealth fund, Goldman Sachs, KKR, and Visa. The company offers a range of financial services in the digital assets space, ensuring security and compliance for institutional clients.',
    website: 'https://www.anchorage.com/',
    twitter: 'https://twitter.com/Anchorage'
  },
  {
    name: 'Ankr',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498bdc085a6e99c8de696e_Ankr_logo.avif',
    alt: 'Ankr',
    description: 'Ankr provides Web3 infrastructure solutions with fast and reliable blockchain nodes, ANKR electronic devices for item tracking, and developer tools for creating decentralized applications with Liquid Staking integration.',
    website: 'https://www.ankr.com/',
    twitter: 'https://twitter.com/ankr'
  },
  {
    name: 'Arbitrium',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498be5eed22c602f5079ef_Arbitrum_logo.avif',
    alt: 'Arbitrium',
    description: 'Arbitrum is the leading Layer 2 technology that empowers users to explore and build within the Ethereum ecosystem. With a focus on decentralization, security, and growth, Arbitrum offers innovative solutions like Arbitrum One, Nova, and Nitro Stack to enhance scalability and reduce transaction costs while maintaining compatibility with Ethereum.',
    website: 'https://arbitrum.io',
    twitter: 'https://twitter.com/arbitrum'
  },
  {
    name: 'Assisster',
    categories: ['AI - Inference & Models'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488eab2f06d638b8cd1cca_Assisterr_logo.png',
    alt: 'Assisster',
    description: 'Data Provenance Protocol & Marketplace of domain-specific Small Language Models (SLMs) owned by the community',
    website: 'https://www.assisterr.ai',
    twitter: 'https://x.com/assisterr'
  },
  {
    name: 'Atti',
    categories: ['AI - Compute & Execution'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498c03d05e4df2396428bf_AttiAI_logo.png',
    alt: 'Atti',
    description: 'Redefining the paradigms of decentralized robotic training by harnessing spatial intelligence technology, powered by atti™',
    website: 'http://atti.ai',
    twitter: 'https://x.com/Atti_ai'
  },
  {
    name: 'Aurora',
    categories: ['L1/L2', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498c0e0af53b63774afaa6_Aurora_logo.avif',
    alt: 'Aurora',
    description: 'Aurora is a next generation Ethereum compatible blockchain and ecosystem that runs on the NEAR Protocol, and powers the innovations behind Aurora Cloud—the fastest path for Web2 businesses to capture the value of Web3. Aurora provides the Ethereum deve...',
    website: 'https://aurora.dev/',
    twitter: 'https://twitter.com/auroraisnear'
  },
  {
    name: 'Bagel',
    categories: ['AI - Training & Finetuning'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488eb26caf71bf079ba0a6_Bagel_logo.png',
    alt: 'Bagel',
    description: 'Bagel is an open machine learning ecosystem focused on the coordination of data sets, AI models, and more, with 0G Storage provided as a data storage solution for Bagel developers.',
    website: 'http://bagel.net',
    twitter: 'https://x.com/BagelOpenAI'
  },
  {
    name: 'Banza',
    categories: ['AI - Data & Datasets', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488eb7c585d6bd9ac2bc9a_Banza_logo.avif',
    alt: 'Banza',
    description: 'Verifiably compute & consume private user data and distribute liquid, tokenised rewards for incentivised data sharing economy',
    website: 'https://banza.xyz/',
    twitter: 'https://x.com/banzaofficial'
  },
  {
    name: 'BladeGame',
    categories: ['Gaming'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ebb11de2382675c77a8_Blade_logo.avif',
    alt: 'BladeGame',
    description: 'A Fully On-chain Game Studio and ZK Infrastructure Provider, First To Propose Verifiable Game In 2023. Beta Test Live!',
    website: 'https://www.bladedao.games',
    twitter: 'https://x.com/BladeGamesHQ'
  },
  {
    name: 'BlockBooster',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498c276645ac590fbfbc41_BlockBooster_logo.avif',
    alt: 'BlockBooster',
    description: 'BlockBooster is a Hong Kong-based Venture Studio focused on developing next-generation protocols and software infrastructure in Web3. They provide a unique video viewing platform that aims to revolutionize entertainment. With expertise, mentorship, and a vast network, BlockBooster nurtures incubated projects in Infrastructure, Social, and Web3 Gaming.',
    website: 'https://www.blockbooster.io',
    twitter: 'https://twitter.com/0xBlockBooster'
  },
  {
    name: 'Blockdaemon',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68498c36358dca12cec1ecc2_BlockDaemon_logo.png',
    alt: 'Blockdaemon',
    description: 'Blockdaemon is a leading independent blockchain node infrastructure provider, offering wallet, node management, staking solutions, and institutional-grade support. With a complete node stack supporting 60+ blockchain networks, Blockdaemon serves top financial institutions, crypto companies, and exchanges, simplifying node deployment and enabling scalable blockchain solutions.',
    website: 'http://www.blockdaemon.com',
    twitter: 'https://twitter.com/BlockdaemonHQ'
  },
  {
    name: 'Blockjoy',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f218b6c4ccb95b2e1980_BlockJoy_logo.avif',
    alt: 'Blockjoy',
    description: 'BlockJoy is a company that provides node infrastructure for deploying and managing enterprise-scale blockchain nodes on any infrastructure, offering cost savings of up to 80% compared to cloud services. They empower Web3 infrastructure, enabling users to transition from web 2.0 to web3 technologies. Founded by @chrisabruce & @densone, BlockJoy facilitates the deployment and operation of blockchain nodes for software development in the blockchain and Web3 space.',
    website: 'https://www.blockjoy.com',
    twitter: 'https://x.com/BlockJoyWeb3'
  },
  {
    name: 'Caldera',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ec616afcc1f3429a37d_Caldera_logo.png',
    alt: 'Caldera',
    description: 'Caldera is a customizable rollup provider. Deploy an app rollup in one click. Build your web3 application without compromises. Production ready, running on mainnet. Caldera makes it easy to launch performant, customizable Arbitrum Orbit and OP Stack ro...',
    website: 'http://caldera.xyz',
    twitter: 'https://twitter.com/Calderaxyz'
  },
  {
    name: 'Capx AI',
    categories: ['AI - Agents', 'AI - Apps'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f2401c42643bc8e0ac44_capx_logo.avif',
    alt: 'Capx AI',
    description: 'Our mission is to simplify and reduce the cost of building AI agents while unlocking capital formation opportunities for both Builders and Users.',
    website: 'http://capx.ai',
    twitter: 'https://x.com/0xCapx'
  },
  {
    name: 'Carv',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ecf5a7f427033d560e0_Carv_logo.avif',
    alt: 'Carv',
    description: 'CARV is a platform that provides gamers with the ability to bind web2 and web3 gaming activities in one place. It offers achievement display, semantic social features, and access to gaming premiums. CARV aims to build a user-owned gaming identity that ...',
    website: 'http://carv.io',
    twitter: 'https://x.com/carv_official'
  },
  {
    name: 'Chainbase',
    categories: ['AI - Data & Datasets', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ed416afcc1f3429b20d_Chainbase_logo.png',
    alt: 'Chainbase',
    description: 'Chainbase operates as a comprehensive omnichain data network, providing extensive data solutions that facilitate seamless interoperability across multiple blockchain ecosystems.',
    website: 'https://chainbase.com',
    twitter: 'https://x.com/ChainbaseHQ'
  },
  {
    name: 'Chasm Network',
    categories: ['AI - Agents', 'AI - Inference & Models'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488edc025096ef4c3148e1_Chasm_logo.avif',
    alt: 'Chasm Network',
    description: 'Chasm aims to collaborate with anyone interested in advancing decentralized AI. We hold the view that this endeavor isn\'t about determining the best deAI project, but rather about how we collectively combat centralization. Let\'s work together to expand the deAI community.',
    website: 'https://www.chasm.net',
    twitter: 'https://x.com/ChasmNetwork'
  },
  {
    name: 'CheckerChain',
    categories: ['Community', 'AI - Apps', 'AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f255a1d027e86b69aa95_CheckerChain_logo.avif',
    alt: 'CheckerChain',
    description: 'CheckerChain is a next-gen AI-powered crypto review platform that powers trustless review consensus mechanism (tRCM).',
    website: 'https://checkerchain.com',
    twitter: 'https://twitter.com/checker_chain'
  },
  {
    name: 'Clique',
    categories: ['Launchpad', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f26312fb175785b3dafc_Clique_logo.avif',
    alt: 'Clique',
    description: 'Clique is pioneering a new paradigm for building dApps and consumer applications with our TEE coprocessor, which you can think of as an off-chain AWS Lambda system. It offers confidentiality and verifiability for on-chain applications while being highly versatile, cost-effective, and secure.',
    website: 'https://www.clique.tech/',
    twitter: 'https://twitter.com/Clique2046'
  },
  {
    name: 'Codatta',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ee0c585d6bd9ac2d352_codatta_logo.avif',
    alt: 'Codatta',
    description: 'Codatta is a universal annotation and labeling platform that turns your intelligence into AI. Our mission is to lower the barrier for AI development teams by providing inclusive access to quality data, facilitating AI advancement, and to empower individuals to contribute to AI development and enjoy long-lasting rewards for their critical contributions. We tackle challenges across various verticals, including crypto (account and user annotation), healthcare, and robotics. Our user-contributed data is on the right track to commercialization in areas like web3 ads, AML, and healthcare.',
    website: 'http://codatta.io',
    twitter: 'https://x.com/codatta_io'
  },
  {
    name: 'Coinlist',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ee6e3f34fee872d9f1f_Coinlist_logo.avif',
    alt: 'Coinlist',
    description: 'CoinList is a leading platform for new token issuance and crypto investment services, connecting top blockchain projects with investors worldwide.',
    website: 'https://coinlist.co/',
    twitter: 'https://twitter.com/coinlist'
  },
  {
    name: 'Conduit',
    categories: ['DePIN'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849fff4c0d1dad3c7abef72_conduit.avif',
    alt: 'Conduit',
    description: 'A suite of hardware, operating systems, and protocols with military-grade security, allowing participants to fully own the value generated in the new decentralized internet',
    website: 'http://cndt.io',
    twitter: 'https://twitter.com/conduit_network'
  },
  {
    name: 'Conflux',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f2c1a3ccc5c7ccb5f87b_Conflux_logo.png',
    alt: 'Conflux',
    description: 'Conflux Network is a multi-chain ecosystem that enables creators, communities, and markets to connect globally across borders and protocols. As the only regulatory compliant chain in China, Conflux facilitates entry to the Asian market for other global...',
    website: 'http://confluxnetwork.org',
    twitter: 'https://twitter.com/Conflux_Network'
  },
  {
    name: 'Conwai',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f2ce75d5de5004c43b9f_Conwai_logo.avif',
    alt: 'Conwai',
    description: 'One chain covering the full Artificial Intelligence lifecycle. From data collection, labeling and preprocessing to model training, evaluation, fine-tuning, inference, RAG, RLHF and autonomous agents.',
    website: 'http://conwai.net',
    twitter: 'https://twitter.com/conwainet'
  },
  {
    name: 'Crestal',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f2de75313653cbd92613_Crestal_logo.avif',
    alt: 'Crestal',
    description: 'Discover, Design, Deploy. Crestal is the Web3 Infrastructure Lego Platform. Build optimized architecture for your app—from 0 to Mainnet.',
    website: 'https://www.crestal.network',
    twitter: 'https://x.com/crestalnetwork'
  },
  {
    name: 'Cygnus',
    categories: ['DeFi'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684a0085b6a4bf493c7bdee1_CygnusFinance_logo.avif',
    alt: 'Cygnus',
    description: 'Cygnus Finance is a leading decentralized finance (DeFi) platform that offers the #1 RWA interest bearing stablecoin protocol on Base Mainnet. With Cygnus Finance, users can deposit any amount of USDC and receive daily rebasing rewards. The platform\'s ...',
    website: 'https://www.cygnus.finance/',
    twitter: 'https://x.com/CygnusFi'
  },
  {
    name: 'D3X',
    categories: ['DeFi', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f1d2818ecc5af8204ff_DexExchange_logo.png',
    alt: 'D3X',
    description: 'DΞX is the first NFT Decentralized Exchange (DEX) and aggregator Infrastructure that provides ultimate liquidity to new NFT projects',
    website: 'http://d3x.xyz',
    twitter: 'https://x.com/d3x_xyz'
  },
  {
    name: 'Dappad',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f325c55b738674bb16b7_dappad_logo.avif',
    alt: 'Dappad',
    description: 'Dappad Launchpad offers a seamless account abstraction experience with easy signup through Gmail, providing a user friendly onboarding process. Join token sales at Zksync Network securely, unlocking simplified participation in cryptocurrency projects. ...',
    website: 'https://dappad.app/',
    twitter: 'https://twitter.com/Dappadofficial'
  },
  {
    name: 'DataHive',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f0d9b3b3a282cfb8077_DataHive_logo.avif',
    alt: 'DataHive',
    description: 'DataHive is an AI platform enabling fair and efficient personal information economy through identity, data, and consent ownership, governed by a data trust DAO.',
    website: 'https://www.datahive.network/',
    twitter: 'https://x.com/getDataHive'
  },
  {
    name: 'DeNet',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f3335bb36a559785b7ab_Denet_logo.avif',
    alt: 'DeNet',
    description: 'DeNet is a decentralized storage protocol that enables the utilization of spare storage capacities all over the globe. It offers mutually beneficial conditions for network participants, free from any third-party access or censorship. DeNet is also the ...',
    website: 'http://denet.pro',
    twitter: 'https://twitter.com/DeNetPro'
  },
  {
    name: 'Dfusion AI',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f3402c7a3e18cef40ce2_DFusionAI_logo.avif',
    alt: 'Dfusion AI',
    description: 'dFusion AI is a protocol to create community-driven knowledge base backbone for the Agentic Web.',
    website: 'http://dfusion.ai',
    twitter: 'https://twitter.com/dFusionAI'
  },
  {
    name: 'Easynode',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f349206f2fa83285b71c_EasyNode_logo.avif',
    alt: 'Easynode',
    description: 'EasyNode Simplify your entry into the blockchain space with our one-click node deployment, Fast and secure',
    website: 'https://app.easy-node.xyz/',
    twitter: 'https://x.com/easynodexyz'
  },
  {
    name: 'Emmet Finance',
    categories: ['Interoperability'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f3770779df5cf7ea7f36_EmmetFinance_logo.avif',
    alt: 'Emmet Finance',
    description: 'Emmet Finance is a cross-chain DeFi hub securely decentralized by the Emmet Interchain Network (EIN) based on the Proof-of-Stake mechanism.',
    website: 'https://emmet.finance/',
    twitter: 'https://twitter.com/Emmet_Finance'
  },
  {
    name: 'Entrova (GamesPlus)',
    categories: ['Gaming'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f31392b41baaa988d15_Entrova_logo.avif',
    alt: 'Entrova (GamesPlus)',
    description: 'Entrova is pioneering a decentralized AI engine focused on consumer agents, tools, and user-behavioral data. We wil allow users and developers to create Al agents, enhanced by user-contributed data, to empower businesses and customers to create more personalized, and behavior-driven experiences.',
    website: 'https://entrova.ai/',
    twitter: 'https://x.com/Entrova_ai'
  },
  {
    name: 'Euclid',
    categories: ['DeFi'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68710d6518a8639088e09e13_euclid%20logo-01.avif',
    alt: 'Euclid',
    description: 'Euclid is building the first liquidity consensus layer which helps any dApp or network bootstrop liquidity instantly and without bridging.',
    website: 'https://www.euclidprotocol.io/',
    twitter: 'https://x.com/Euclidprotocol'
  },
  {
    name: 'Exponent AI',
    categories: ['AI - Apps', 'Others', 'AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f38ab760e1da442ffe30_Exponent_logo.avif',
    alt: 'Exponent AI',
    description: 'We are building the natural language layer for all of web3, made for humans and AI agents.',
    website: 'http://Exponent.ai',
    twitter: 'https://x.com/Exponent_AI'
  },
  {
    name: 'Fireblocks',
    categories: ['DeFi', 'Gaming', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f3a00066848b3ef11ec6_Fireblocks_logo.avif',
    alt: 'Fireblocks',
    description: 'Fireblocks is a top institutional digital asset custody, transfer, and settlement platform with MPC CMP wallet technology. It offers a comprehensive suite of tools for managing and securing digital assets, enabling secure tokenized asset management and...',
    website: 'https://www.fireblocks.com/',
    twitter: 'https://twitter.com/FireblocksHQ'
  },
  {
    name: 'Fluent',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f4029a6f40ed11a0390d_Fluent_logo.png',
    alt: 'Fluent',
    description: 'Fluent is an Ethereum L2 that enables real-time composable apps built with Solidity and Rust - a unified environment with interoperable smart contracts regardless of which VM they were built for. All accessible through a single wallet. No bridging, no friction.',
    website: 'http://fluent.xyz',
    twitter: 'https://twitter.com/fluentxyz'
  },
  {
    name: 'Fogworks',
    categories: ['DePIN'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f412b6c4ccb95b2f8e23_FogWorks_logo.avif',
    alt: 'Fogworks',
    description: 'At Fog Works, we believe the best custodian of your data is you. We\'re leveraging the power of Web3 to help you manage, control, and protect your data. We believe the best custodian of your data is you. So we\'re leveraging the power of Web3 to help you manage, control, and protect your own data. Fog Works has assembled a world-class team with a unique combination of P2P networking, blockchain, and entrepreneurial experience. We make Web3 work for you. At Fog Works, we\'re leveraging the power of Web3 to help you manage, protect, and control your own data. We\'re led by a world-class team with a highly unique blend of P2P networking experience, blockchain expertise, and entrepreneurship, bringing years of relevant experience to our next-gen technology. We\'re launching several apps and devices shortly, so stay tuned for more news shortly.',
    website: 'https://fogworks.io',
    twitter: 'https://twitter.com/fogworksinc'
  },
  {
    name: 'Fraction',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f495865f8fd9b01cbfc_FractionAI_logo.png',
    alt: 'Fraction',
    description: 'Perpetual Datasets for AI',
    website: 'http://fractionai.xyz',
    twitter: 'https://x.com/FractionAI_xyz'
  },
  {
    name: 'GR1D',
    categories: ['Gaming', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f4246184fe5c27c075fc_GR1D_logo.avif',
    alt: 'GR1D',
    description: 'The GR1D is a modular, multichain network engineered to expand tomorrow\'s mass-market interoperable consumer-facing applications',
    website: 'https://gr1d.network/',
    twitter: 'https://twitter.com/GR1Dnetwork'
  },
  {
    name: 'GT Protocol',
    categories: ['AI - Compute & Execution'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f8d025096ef4c318ecd_GTProtocol_logo.png',
    alt: 'GT Protocol',
    description: 'GT-Protocol offers a conversational Web3 Crypto AI execution technology that enables users to access and manage CeFi, DeFi, and NFT markets through an integrated AI interface, while also providing tools for systematic cryptocurrency risk management.',
    website: 'http://gt-protocol.io',
    twitter: 'https://twitter.com/gt_protocol'
  },
  {
    name: 'Gaib',
    categories: ['DePIN'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f6c392b41baaa98a3ca_Gaib_logo.avif',
    alt: 'Gaib',
    description: 'GAIB AI focuses on creating an economic framework for artificial intelligence by tokenizing graphics processing units (GPUs) and their output, thereby transforming computational power into a new asset class and making the expansive AI and compute market accessible to a broader audience.',
    website: 'https://www.gaib.ai',
    twitter: 'https://x.com/gaib_ai'
  },
  {
    name: 'Gaimin',
    categories: ['Gaming', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f4361ae5900053675d69_Gaimin_logo.avif',
    alt: 'Gaimin',
    description: 'Gaimin is a base layer for game developers to build NFTs, blockchain functionality, and white label gaming tokens into their games. It is a web3 gaming platform and game launcher that offers true game asset ownership and passive rewards for gamers. Gai...',
    website: 'http://gaimin.io',
    twitter: 'https://twitter.com/GaiminIo'
  },
  {
    name: 'Galxe',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f71bcbd645d2a8010f8_Galxe_logo.png',
    alt: 'Galxe',
    description: 'Galxe provides a decentralized super app that serves as the largest on-chain distribution platform in Web3, facilitating seamless experiences through a combination of AI, digital identity, and blockchain solutions.',
    website: 'https://galxe.com',
    twitter: 'https://x.com/Galxe'
  },
  {
    name: 'Gevulot',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f815865f8fd9b01e9c3_Gevulot_logo.png',
    alt: 'Gevulot',
    description: 'Gevulot is a pioneering company that is leading the way in the next era of innovation in distributed systems with its internet scale compute network for zero knowledge proofs. By focusing on privacy, scalability, and compatibility, Gevulot is at the forefront of revolutionizing the digital landscape.',
    website: 'https://gevulot.com',
    twitter: 'https://x.com/thezkcloud'
  },
  {
    name: 'Google Cloud',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488f85025096ef4c318788_GoogleCloud_logo.png',
    alt: 'Google Cloud',
    description: 'Google specializes in organizing and providing access to the world\'s information through its highly regarded search services, catering to both individual users and corporate clients with innovative advertising and revenue-generating solutions.',
    website: 'https://cloud.google.com/',
    twitter: 'https://x.com/googlecloud'
  },
  {
    name: 'Hemera',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ff2c585d6bd9ac33c70_Hemera_logo.png',
    alt: 'Hemera',
    description: 'Hemera Protocol: Decentralized programmable indexing network empowering web2 and web3 projects to grow sustainably by fostering authentic communities.',
    website: 'https://www.thehemera.com',
    twitter: 'https://twitter.com/HemeraProtocol'
  },
  {
    name: 'Heph AI',
    categories: ['AI - Apps', 'AI - Data & Datasets', 'Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ff5025096ef4c31a233_hephai_logo.avif',
    alt: 'Heph AI',
    description: 'Decentralized scale AI',
    website: 'http://heph.ai',
    twitter: 'heph.ai'
  },
  {
    name: 'Hooked',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488ffaa3c15f188e94e09a_Hooked_logo.avif',
    alt: 'Hooked',
    description: 'World\'s 1st Web3 social learning platform, transforming over 10,000,000+ users',
    website: 'http://hooked.io',
    twitter: 'https://twitter.com/HookedProtocol'
  },
  {
    name: 'Humanity',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890119b3b3a282cfbffa7_humanityprotocol_logo.avif',
    alt: 'Humanity',
    description: 'The Humanity Initiative is a partnership of international development consultants, UK NHS medics, and media practitioners offering support services to charities, international NGOs, and UK health links. Their main areas of focus include project design ...',
    website: 'https://humanity.org',
    twitter: 'https://twitter.com/Humanityprot'
  },
  {
    name: 'Hyperbolic',
    categories: ['AI - Compute & Execution', 'DePIN', 'AI - Inference & Models', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f5b375f54d643a90faa0_Hyperbolic_logo.avif',
    alt: 'Hyperbolic',
    description: 'Hyperbolic is pioneering the open access AI cloud, designed to democratize access to high-performance computing by leveraging underutilized GPUs from data centers, mining farms, and individual machines around the world. Think of us as the Airbnb for GPUs—unlocking idle computational power and making it available to everyone, from developers and startups to enterprises. We\'re solving the GPU shortage, ensuring that AI can scale efficiently, affordably, and securely.',
    website: 'hyperbolic.xyz',
    twitter: 'https://twitter.com/hyperbolic_labs'
  },
  {
    name: 'Impossible Finance',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f5c0d6044cc614906720_ImpossibleFinance_logo.avif',
    alt: 'Impossible Finance',
    description: 'Impossible Finance simplifies participation in decentralized finance (DeFi) by conducting thorough due diligence on early-stage investments, enabling users to engage confidently and access better investment terms typically reserved for venture capitalists.',
    website: 'https://impossible.finance/',
    twitter: 'https://twitter.com/ImpossibleFi'
  },
  {
    name: 'InfStones',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6848901e11de2382675d06ec_Infstones_logo.avif',
    alt: 'InfStones',
    description: 'InfStones is the world\'s leading blockchain infrastructure provider. Unlock the future of technology with InfStones\' user friendly blockchain infrastructure. Create agile, reliable, and scalable Web3 apps on 80+ leading protocols. The Ultimate Web3 Inf...',
    website: 'https://infstones.com/',
    twitter: 'https://x.com/infstones'
  },
  {
    name: 'Inference Labs',
    categories: ['AI - Inference & Models'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68489025fa9e4f090aca71ce_Inference_logo.png',
    alt: 'Inference Labs',
    description: 'AI hyperscale on decentralized networks',
    website: 'inferencelabs.com',
    twitter: 'https://x.com/inference_labs'
  },
  {
    name: 'Inferium',
    categories: ['AI - Inference & Models'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6848902bbcbd645d2a809332_Inferium_logo.avif',
    alt: 'Inferium',
    description: 'Inferium: ML-driven AI inference store & aggregator, offering innovative solutions for machine learning applications.',
    website: 'https://www.inferium.io',
    twitter: 'https://x.com/InferiumAI'
  },
  {
    name: 'Intract',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68488e071327b1baa64e5ffc_Intract_logo.avif',
    alt: 'Intract',
    description: 'Intract Quests: Exclusive web3 community with on-chain analytics & marketing tools for high ROI campaigns.',
    website: 'https://intract.io/',
    twitter: 'https://x.com/IntractCampaign'
  },
  {
    name: 'Ionet',
    categories: ['DePIN', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6848903f2f06d638b8ce3007_Ionet_logo.avif',
    alt: 'Ionet',
    description: 'io.net is a decentralized distributed compute network that enables ML engineers to deploy a GPU cluster of any scale within seconds at a fraction of the cost of centralized cloud providers. io.net sources compute resources from multiple locations and deploys them into a single cluster at massive scale. io.net has successfully supported training, fine tuning, and inference for a wide range of ML models.',
    website: 'https://io.net',
    twitter: 'https://x.com/ionet'
  },
  {
    name: 'Iotex',
    categories: ['DePIN'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68489043c585d6bd9ac3520a_IoTeX_logo.avif',
    alt: 'Iotex',
    description: 'IoTeX provides a modular infrastructure platform designed for decentralized physical infrastructure networks (DePIN), enabling projects to deploy fully or integrate modules into existing frameworks, thereby enhancing resilience and efficiency in connecting smart devices to blockchain applications.',
    website: 'iotex.io',
    twitter: 'https://twitter.com/iotex_io'
  },
  {
    name: 'JoJo World',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f5d14ba51edeb8d3c980_JoJo%20World_logo.avif',
    alt: 'JoJo World',
    description: 'JoJoWorld focuses on 3D datasets and utilizes decentralized methods to acquire data, serving both institutional and individual clients in web2 and web3. Based in New York, JoJoWorld is part of the NVIDIA Global Acceleration Program and has received investments from Google Cloud, Hashkey Group, and Franklin Templeton (top5 US asset management firm), among others.',
    website: 'jojoworld.com',
    twitter: 'https://x.com/JoJoWorld2022'
  },
  {
    name: 'Kindred',
    categories: ['Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890532ac15e210a5396ff_KindredAI_logo.png',
    alt: 'Kindred',
    description: 'Bringing Iconic Characters to Life as Emotional AI',
    website: 'https://www.kindredlabs.ai/',
    twitter: 'https://twitter.com/kindred_ai/'
  },
  {
    name: 'Lumoz',
    categories: ['AI - Compute & Execution', 'L1/L2', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6848906bad324afaeabd417f_Lumoz_logo.avif',
    alt: 'Lumoz',
    description: 'Modular Compute layer for ZK & AI',
    website: 'http://lumoz.org',
    twitter: 'https://twitter.com/LumozOrg'
  },
  {
    name: 'Manta Network',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890a379eef5517aa8a5b4_Manta_logo.avif',
    alt: 'Manta Network',
    description: 'Manta Network develops a modular blockchain specifically designed for zero-knowledge applications, enhancing programmable privacy in the Web3 ecosystem, particularly within decentralized finance (DeFi) through its innovative privacy-focused solutions.',
    website: 'https://manta.network/',
    twitter: 'https://twitter.com/mantanetwork'
  },
  // {
  //   name: 'Me Protocol (MiniMe)',
  //   categories: ['AI - Inference & Models', 'AI - Compute & Execution'],
  //   logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890acc4a8bbef8296f3a5_Me%20Protocol_logo.avif',
  //   alt: 'Me Protocol (MiniMe)',
  //   description: 'Me Protocol is a loyalty rewards system that provides a foundational infrastructure for a new type of loyalty reward called Frictionless Open Rewards. These rewards can be instantly redeemed across any brand or app connected to the Me Protocol. The Me ...',
  //   website: 'meprotocol.io',
  //   twitter: 'https://x.com/MeProtocol'
  // },
  {
    name: 'Mind Network',
    categories: ['Community', 'Interoperability', 'DeFi'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f5eac23f22e1430925a4_MindNetwork_logo.avif',
    alt: 'Mind Network',
    description: 'Mind Network is a company that provides web3 infrastructure for decentralized knowledge graph IT services and consulting.',
    website: 'https://mindnetwork.io',
    twitter: 'https://x.com/mindnetwork_xyz'
  },
  {
    name: 'Mintair',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890bd92704c4dd6e52e56_Mintar_logo.avif',
    alt: 'Mintair',
    description: 'Streamline your node setup with our seamless deployment process. We handle VPS acquisition and node configuration, so you can focus on your tasks worry-free.',
    website: 'https://www.mintair.xyz/',
    twitter: 'https://twitter.com/mintairxyz'
  },
  {
    name: 'Mizu',
    categories: ['AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890c8bcbd645d2a8110c2_Mizu_logo.avif',
    alt: 'Mizu',
    description: 'MIZU is building the world\'s largest open AI data collection, providing a fast, comprehensive, affordable, and safe data solution for global AI communities. By developing a DePIN network, MIZU will continuously engage a diverse range of contributors, from mobile users to professional GPU cloud operators, to collaboratively build its data collection.',
    website: 'https://mizu.global/',
    twitter: 'https://x.com/0xmizu_ai'
  },
  {
    name: 'Mocaverse',
    categories: ['Launchpad', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890d0d9af68e39efa01de_Mocaverse_logo.avif',
    alt: 'Mocaverse',
    description: 'Mocaverse is the Animoca Brands membership NFT collection of 8,888 unique beings: The Mocas. Join the Mocas in the realms to Learn, Play, Do Good, and Build together as we champion our Web3 values! An @animocabrands membership NFT collection of 8888 unique Mocas. Join us in the realms to Learn, Play, Do Good, and Build together as we share our Web3 values!',
    website: 'https://www.mocaverse.xyz/',
    twitter: 'https://x.com/Moca_Network'
  },
  {
    name: 'Mode Network',
    categories: ['AI - Agents', 'L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890d5d9af68e39efa0310_Mode_logo.avif',
    alt: 'Mode Network',
    description: 'Mode L2 scales DeFi to billions of users through onchain agents and AI-powered financial applications. Mode is building the AI agents economy.',
    website: 'https://www.mode.network/',
    twitter: 'https://twitter.com/modenetwork'
  },

  {
    name: 'Moralis',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890f41e4764772593f1d9_Moralisdevelopers_logo.avif',
    alt: 'Moralis',
    description: 'Moralis Web3 is a company that provides enterprise-grade Web3 APIs to bridge the development gap between Web2 and Web3. Their powerful APIs make scalable web3 development fast and easy. Moralis APIs power crypto and blockchain applications for millions...',
    website: 'moralis.io',
    twitter: 'https://x.com/moralisdevs'
  },
  {
    name: 'Moso',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684890fcbc8343fe0da49cca_Moso_logo.png',
    alt: 'Moso',
    description: 'Moso offers a platform that allows users to shop online at over 2,000 stores while earning cryptocurrency rewards through a cashback system.',
    website: 'moso.xyz',
    twitter: 'https://x.com/mosohq'
  },
  {
    name: 'Move',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684891066de74cec6eddc3ab_Movement_logo.avif',
    alt: 'Move',
    description: 'Movement Labs is a global community of Move builders improving security, performance, and user experience in decentralized networks with M2, the fastest Layer Two solution.',
    website: 'https://movementlabs.xyz',
    twitter: 'https://twitter.com/movementlabsxyz'
  },
  {
    name: 'Mowi',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f3f2a2083e49485c862e_Mawi_logo.avif',
    alt: 'Mowi',
    description: 'Mowi ASA, formerly known as Marine Harvest ASA,, is a Norwegian seafood company with operations in a number of countries around the world.',
    website: 'https://mowi.com/',
    twitter: 'https://x.com/mowiglobal'
  },
  {
    name: 'NTU',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f61abdd10cf5140cd66c_NanyangTechUni_logo.avif',
    alt: 'NTU',
    description: 'Nanyang Technological University Singapore is a leading research-intensive university in Singapore that provides a comprehensive range of undergraduate and postgraduate programs across various disciplines, including engineering, business, science, humanities, arts, social sciences, education, and medicine.',
    website: 'https://www.ntu.edu.sg/',
    twitter: 'https://twitter.com/ntusg'
  },
  {
    name: 'Nektar Network',
    categories: ['DeFi', 'AI - Compute & Execution', 'Others', 'Community'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f6225a042ef4ee2107e4_Nektar_logo.avif',
    alt: 'Nektar Network',
    description: 'The project aims to build a Decentralized Infrastructure Marketplace that allows participants to interact in a seamless manner. The platform will be designed to distribute rewards and facilitate access to a wide range of decentralized infrastructure services. The marketplace will enable efficient and transparent interactions within the ecosystem, ensuring users can access decentralized infrastructure while being incentivized to participate in the network.',
    website: 'https://nektar.network/',
    twitter: 'https://x.com/nektarnetwork'
  },
  {
    name: 'Neon Machine (Shrapnel / Mercury)',
    categories: ['Gaming', 'Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f6433a95309520c90a8c_Shrapnel_logo.png',
    alt: 'Neon Machine (Shrapnel / Mercury)',
    description: 'SHRAPNEL is a pioneering company in the gaming industry, known for developing the 1st moddable extraction shooter using UE5 and blockchain technology. With a team of BAFTA & Emmy Award winners, SHRAPNEL focuses on creating a platform that empowers glob...',
    website: 'https://shrapnel.com',
    twitter: 'https://twitter.com/playShrapnel'
  },
  {
    name: 'NetMind',
    categories: ['DePIN'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6848919fd9af68e39efa507a_NetMind_logo.avif',
    alt: 'NetMind',
    description: 'NetMind.AI is an AI solutions company that provides cutting-edge AI solutions and products to revolutionize businesses. They offer an inference platform to take AI development to the next level, a conversational AI chatbot for seamless interactions, an...',
    website: 'netmind.ai',
    twitter: 'https://x.com/NetMindAi'
  },
  {
    name: 'Nexus',
    categories: ['L1/L2'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/686f2200638a9a7352f21b16_nexus_logo%2Bwordmark_horizontal.avif',
    alt: 'Nexus',
    description: 'The World Supercomputer. An EVM Layer 1 for the AI era.',
    website: 'https://nexus.xyz/',
    twitter: 'https://x.com/NexusLabs'
  },
  {
    name: 'Nine Suns',
    categories: ['AI - Inference & Models', 'Others', 'Interoperability', 'AI - Data & Datasets'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684891a56de74cec6ede14f5_Nine%20suns_logo.png',
    alt: 'Nine Suns',
    description: 'Nine Suns\' 20-minute to integrate SDK gives blockchain developers and applications superpowers for handling private user data, keys, and funds. Nine Suns is more than just a secure data exchange, it\'s a distribution unlock to larger enterprise grade entities with stricter security and compliance requirements. Nine Suns isn\'t just built for the crypto of today, but the crypto of tomorrow, as our ZK-intents engine is equally optimized to handle AI models (inferencing), embeddings, and vector DB\'s.',
    website: 'ninesuns.io',
    twitter: 'https://twitter.com/ninesunsai'
  },
  {
    name: 'NodeOps',
    categories: ['Launchpad'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684891aae3f34fee872e4074_NodeOps_logo.avif',
    alt: 'NodeOps',
    description: 'NodeOps provides a user-friendly platform for purchasing, deploying, and managing blockchain nodes, streamlining the complexities of Web3 infrastructure through a decentralized and incentivized orchestration layer.',
    website: 'https://nodeops.xyz/',
    twitter: 'https://x.com/NodeOpsHQ'
  },

  // {
  //   name: 'Noders',
  //   categories: ['Launchpad'],
  //   logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f65c85df77866e803b42_Noders_logo.png',
  //   alt: 'Noders',
  //   description: 'Noders is a community of developers focused on Node.js and JavaScript in Latin America. They offer free courses, workshops, and talks to generate a community around the Node.js ecosystem.',
  //   website: 'https://noders.com',
  //   twitter: 'https://twitter.com/NodersJS'
  // },
  {
    name: 'Notaku',
    categories: ['AI - Compute & Execution'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f5d7d6044cc614906e87_Notaku_logo.avif',
    alt: 'Notaku',
    description: 'Notaku is a platform that allows users to create essential websites using Notion as a CMS. It enables users to build knowledge bases, blogs, changelogs, roadmaps, and help desks easily. Notaku aims to make companies more productive by providing intuiti...',
    website: 'https://notaku.so',
    twitter: 'https://twitter.com/NotakuHQ'
  },
  {
    name: 'Numbers Protocol',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684891b9bcbd645d2a81d2f6_Numbers_logo.avif',
    alt: 'Numbers Protocol',
    description: 'Numbers Protocol is an open and decentralized network that ensures provenance for all types of digital media created by humans and AI. The company aims to address the challenges of centralized platforms that decide what content users see and allow anyo...',
    website: 'http://numbersprotocol.io',
    twitter: 'https://twitter.com/numbersprotocol'
  },
  {
    name: 'OKX',
    categories: ['Others'],
    logo: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6849f6aa26b9d3e66e63cd3a_Wallet_logo.avif',
    alt: 'OKX',
    description: 'OKX Wallet is a multi-chain wallet that currently supports both EVM and non-EVM networks, making it easier for you to access DApps on different networks without having to switch wallets. With OKX Wallet, you have complete control over your private keys and crypto assets.',
    website: 'https://web3.okx.com/wallet',
    twitter: 'https://x.com/wallet'
  }
]

const categories = [
  'all',
  'AI - Compute & Execution',
  'AI - Agents',
  'AI - Apps',
  'AI - Inference & Models',
  'AI - Training & Finetuning',
  'AI - Data & Datasets',
  'L1/L2',
  'Interoperability',
  'Gaming',
  'Others',
  'Community',
  'DePIN',
  'DeFi',
  'Launchpad'
]

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPartners = useMemo(() => {
    if (selectedCategory === 'all') {
      return partners
    }
    return partners.filter(partner => 
      partner.categories.includes(selectedCategory)
    )
  }, [selectedCategory])

  useEffect(() => {
    // Register GSAP ScrollTrigger if available
    if (window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger)
    }

    // Handle filter "all" prepending logic (from original script)
    const allFilter = document.querySelector('[filter-all]')
    const filterList = document.querySelector('[filter-list]')
    if (allFilter && filterList) {
      filterList.prepend(allFilter)
    }
  }, [])

  return (
    <div className="partners-page-wrapper">
      {/* Hero Section */}
      <section className="partners-hero-section">
        <div className="partners-hero-padding">
          <div className="partners-hero-container">
            {/* <div className="partners-hero-bg-wrapper">
              <img 
                src="https://cdn.prod.website-files.com/680b884d38733122a923739b/68215342ca9ee8ebddc5884d_Mask%20group-1425.webp" 
                alt="" 
                className="partners-hero-bg-image" 
              />
              <div className="partners-hero-gradient"></div>
            </div> */}
            <div className="partners-hero-content">
              <div className="partners-hero-title-wrapper">
                <h1>Explore the <span className="one-line">ØG Ecosystem</span></h1>
              </div>
              <div className="partners-hero-stats-wrapper">
                <div className="partners-stats-wrapper">
                  <div className="partners-stats-meta">
                    <div className="partners-stats-number">300+</div>
                    <div className="partners-stats-label">Projects</div>
                  </div>
                  <div className="partners-stats-meta">
                    <div className="partners-stats-number">450+</div>
                    <div className="partners-stats-label">Integrations</div>
                  </div>
                </div>
                <div className="partners-hero-spacer"></div>
                <div className="partners-hero-description">
                  The latest projects leveraging <br />ØG technology, all in one place.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="partners-filter-section">
        <div className="partners-filter-wrapper">
          <form className="partners-filter-menu">
            {categories.map((category) => (
              <label 
                key={category}
                className={`partners-filter-link ${selectedCategory === category ? 'partners-filter-active' : ''}`}
              >
                <input
                  type="radio"
                  name="partners-filter"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="partners-filter-input"
                />
                <div className={`partners-filter-dot ${selectedCategory === category ? 'partners-filter-dot-active' : ''}`}></div>
                <span className="partners-filter-text">{category === 'all' ? 'all' : category}</span>
              </label>
            ))}
          </form>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="partners-grid-section">
        <div className="partners-grid-list">
          {filteredPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partners-grid-item">
              <div className="partners-grid-content-wrapper">
                <div className="partners-grid-content">
                  <img 
                    src={partner.logo} 
                    loading="lazy" 
                    alt={partner.alt} 
                    className="partners-grid-logo" 
                  />
                  <div className="partners-spacer-medium"></div>
                  <h3 className="partners-grid-title">{partner.name}</h3>
                  <div className="partners-spacer-small"></div>
                  <div className="partners-grid-description">
                    <p>{partner.description}</p>
                  </div>
                  <div className="partners-spacer-xmedium"></div>
                  <div className="partners-grid-icon-wrapper">
                    {partner.website && (
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="partners-link-icon">
                        <div className="partners-icon-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M18.3643 15.5354L16.9501 14.1212L18.3643 12.707C20.3169 10.7544 20.3169 7.5886 18.3643 5.63598C16.4117 3.68335 13.2458 3.68335 11.2932 5.63598L9.87898 7.05019L8.46477 5.63598L9.87898 4.22176C12.6127 1.48809 17.0448 1.48809 19.7785 4.22176C22.5122 6.95543 22.5122 11.3875 19.7785 14.1212L18.3643 15.5354ZM15.5358 18.3639L14.1216 19.7781C11.388 22.5117 6.9558 22.5117 4.22213 19.7781C1.48846 17.0444 1.48846 12.6122 4.22213 9.87862L5.63634 8.4644L7.05056 9.87862L5.63634 11.2928C3.68372 13.2454 3.68372 16.4112 5.63634 18.3639C7.58896 20.3165 10.7548 20.3165 12.7074 18.3639L14.1216 16.9496L15.5358 18.3639ZM14.8287 7.7573L16.243 9.17151L9.17188 16.2425L7.75766 14.8283L14.8287 7.7573Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </a>
                    )}
                    {partner.twitter && (
                      <a href={partner.twitter} target="_blank" rel="noopener noreferrer" className="partners-link-icon">
                        <div className="partners-icon-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M15.6874 0.0625L10.6907 5.77425L6.37045 0.0625H0.113281L7.58961 9.8387L0.503781 17.9375H3.53795L9.0068 11.6886L13.7863 17.9375H19.8885L12.095 7.6342L18.7198 0.0625H15.6874ZM14.6232 16.1225L3.65436 1.78217H5.45745L16.3034 16.1225H14.6232Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
