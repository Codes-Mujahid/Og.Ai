import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

// Blog posts data extracted from blog.html
const blogPosts = [
  {
    slug: 'builder-spotlight-flashback',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6983a7717eb24b9c1be4c5ac_hero%20image%20for%20blog%20site.png',
    alt: '0G Builder Spotlight: Flashback Privacy-First AI Memories',
    category: 'Builder Spotlight',
    date: 'Feb 5, 2026',
    title: '0G Builder Spotlight: Flashback Privacy-First AI Memories'
  },
  // {
  //   slug: 'alignment-node-license-migration',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/69416490ac1090ef17075bc1_License%20Migration.png',
  //   alt: 'AI Alignment Node License Migration',
  //   category: '',
  //   date: 'Dec 16, 2025',
  //   title: 'AI Alignment Node License Migration'
  // },
  // {
  //   slug: '0g-ecosystem-update-h22025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6940251036c60b5bd1243ee3_H2%20Update.png',
  //   alt: 'Building Infinite AI: H2 2025 0G Ecosystem Update',
  //   category: '',
  //   date: 'Dec 15, 2025',
  //   title: 'Building Infinite AI: H2 2025 0G Ecosystem Update'
  // },
  // {
  //   slug: 'builder-spotlight-jaine',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6931c23edec4b96a4a5ffaf2_Jaine%20Featured.png',
  //   alt: '0G Builder Spotlight: How Jaine Powers Agentic DeFi on 0G',
  //   category: '',
  //   date: 'Dec 4, 2025',
  //   title: '0G Builder Spotlight: How Jaine Powers Agentic DeFi on 0G'
  // },
  // {
  //   slug: 'builder-spotlight-kultgames',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/692e339b50bc544b3da4bbd5_Kult%20Games.png',
  //   alt: '0G Builder Spotlight: How Kult Games Is Building the Ultimate Gaming Browser',
  //   category: '',
  //   date: 'Dec 2, 2025',
  //   title: '0G Builder Spotlight: How Kult Games Is Building the Ultimate Gaming Browser'
  // },
  // {
  //   slug: 'tech-update-nov-2025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/692dd0e1b1bf14cbee9b4845_monthly%20tech%20update%20-%2082025%20(1).png',
  //   alt: '0G Monthly Tech Update: November 2025',
  //   category: '',
  //   date: 'Dec 1, 2025',
  //   title: '0G Monthly Tech Update: November 2025'
  // },
  // {
  //   slug: '0g-partners-with-ntu-singapore',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/691b1dc41ad526fe53467db4_institutional.png',
  //   alt: '0G Partners with NTU Singapore to Advance Decentralized AI Research',
  //   category: '',
  //   date: 'Nov 17, 2025',
  //   title: '0G Partners with NTU Singapore to Advance Decentralized AI Research'
  // },
  // {
  //   slug: 'tech-update-oct-2025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6908c7d294010c402a1e09c9_monthly%20tech%20update%20-%20Oct.png',
  //   alt: '0G Monthly Tech Update: October 2025',
  //   category: '',
  //   date: 'Nov 2, 2025',
  //   title: '0G Monthly Tech Update: October 2025'
  // },
  // {
  //   slug: 'introducing-0g-domain',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6901f99722b80e718c0b6d79_0G%20(2).png',
  //   alt: 'Introducing .0g: The Native Identity Layer for 0G Agents and Applications',
  //   category: '',
  //   date: 'Oct 29, 2025',
  //   title: 'Introducing .0g: The Native Identity Layer for 0G Agents and Applications'
  // },
  // {
  //   slug: 'guild-on-0g-09',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ed1b77ce35bb8b442bbdc3_Guild%209%20Featured.png',
  //   alt: 'Guild on 0G: Karum, Zer0Pulse, Tingz',
  //   category: '',
  //   date: 'Oct 14, 2025',
  //   title: 'Guild on 0G: Karum, Zer0Pulse, Tingz'
  // },
  // {
  //   slug: '0g-unstoppable-domains-launch-agi-and-robot',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68e6201532584667e2b1cb6a_Domains%20Launch%20(4).png',
  //   alt: '0G and Unstoppable Domains Launch .AGI and .robot',
  //   category: '',
  //   date: 'Oct 8, 2025',
  //   title: '0G and Unstoppable Domains Launch .AGI and .robot'
  // },
  // {
  //   slug: 'tech-update-sep-2025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68e530ff108319f5a94310ba_Sep%20Update.png',
  //   alt: '0G Monthly Tech Update: September 2025',
  //   category: '',
  //   date: 'Oct 7, 2025',
  //   title: '0G Monthly Tech Update: September 2025'
  // },
  // {
  //   slug: '0g-nodes',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68e3cf97655f2378717fb239_Know%20Your%20Nodes.png',
  //   alt: 'Know Your 0G Nodes: Requirements and Responsibilities',
  //   category: '',
  //   date: 'Oct 6, 2025',
  //   title: 'Know Your 0G Nodes: Requirements and Responsibilities'
  // },
  // {
  //   slug: 'guild-on-0g-08',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68d5a532b178bf409a7237ed_Guild%20on%200G%2008%20graphic.png',
  //   alt: 'Guild on 0G: Opus, Kult Games, Sc0pe',
  //   category: '',
  //   date: 'Sep 25, 2025',
  //   title: 'Guild on 0G: Opus, Kult Games, Sc0pe'
  // },
  // {
  //   slug: '0g-100-launch-partners',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68d1710c6638714e1c0ef710_Parntership_Blog_100partners%20(2).png',
  //   alt: '0G Launches With 100+ Partners to Build the Future of Decentralized AI',
  //   category: '',
  //   date: 'Sep 22, 2025',
  //   title: '0G Launches With 100+ Partners to Build the Future of Decentralized AI'
  // },
  // {
  //   slug: 'ai-alignment-node-rewards-extra-allocations-via-token-redistributions',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcc23117b13140dd2747_Node%203%20Extra%20Allocations%20graphic.png',
  //   alt: 'AI Alignment Node Rewards: Extra Allocations via Token Redistributions',
  //   category: '',
  //   date: 'Sep 21, 2025',
  //   title: 'AI Alignment Node Rewards: Extra Allocations via Token Redistributions'
  // },
  {
    slug: 'ai-alignment-node-rewards-distribution-schedule-eligibility',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffcae7a6cbec1fefb3043_Node%202%20Distr%20Schedule%20graphic.png',
    alt: 'AI Alignment Node Rewards: Distribution Schedule & Eligibility',
    category: 'News',
    date: 'Sep 21, 2025',
    title: 'AI Alignment Node Rewards: Distribution Schedule & Eligibility'
  },
  // {
  //   slug: 'ai-alignment-nodes-the-backbone-of-0gs-ai-verified-infrastructure',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cffc961ce82cd6aefb3e89_Node%201%20Backbone%20graphic.png',
  //   alt: 'AI Alignment Nodes: The Backbone of 0G\'s AI-Verified Infrastructure',
  //   category: '',
  //   date: 'Sep 21, 2025',
  //   title: 'AI Alignment Nodes: The Backbone of 0G\'s AI-Verified Infrastructure'
  // },
  // {
  //   slug: 'how-0g-unlocks-token-release-schedule-and-vesting-explained',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68cba13880a85dca1673d4c3_Tokenomics%20Blog%20header%20(1).png',
  //   alt: 'How $0G Unlocks: Token Release Schedule and Vesting Explained',
  //   category: '',
  //   date: 'Sep 18, 2025',
  //   title: 'How $0G Unlocks: Token Release Schedule and Vesting Explained'
  // },
  {
    slug: 'explaining-the-0g-token-airdrop',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c995bb9d6d268e1d7b10a0_%240G%20airdrop%20rewarding%20pioneers%20X%20graphic%20(2).png',
    alt: 'Explaining the 0G Token Airdrop',
    category: 'News',
    date: 'Sep 16, 2025',
    title: 'Explaining the 0G Token Airdrop'
  },
  {
    slug: '0g-validators',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68c87112a6ce0d7dfd32ec9d_0G%20Validator%20Announcement.png',
    alt: 'Announcing 0G\'s World-class Validator Set',
    category: 'Partners',
    date: 'Sep 15, 2025',
    title: 'Announcing 0G\'s World-class Validator Set'
  },
  // {
  //   slug: 'introducing-aiverse',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ba21404a900b1211483feb_AIverse%20featured.png',
  //   alt: 'Introducing AIverse: The Marketplace for iNFTs',
  //   category: '',
  //   date: 'Sep 4, 2025',
  //   title: 'Introducing AIverse: The Marketplace for iNFTs'
  // },
  // {
  //   slug: 'guild-on-0g-07',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b72aecbce3b5d2129736cc_Guild%20on%200G%2007%20blog%20graphic.png',
  //   alt: 'Guild on 0G: Space ID, Beacon Protocol, Flashback Labs',
  //   category: '',
  //   date: 'Sep 2, 2025',
  //   title: 'Guild on 0G: Space ID, Beacon Protocol, Flashback Labs'
  // },
  // {
  //   slug: 'tech-update-aug-2025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b5ae08ee9245c03c23eb6a_monthly%20tech%20update%20-%2082025.png',
  //   alt: '0G Monthly Tech Update: August 2025',
  //   category: '',
  //   date: 'Sep 1, 2025',
  //   title: '0G Monthly Tech Update: August 2025'
  // },
  {
    slug: '0g-hits-11k-tps-per-shard',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68ac78660d24bdc39540fcfe_TechBlog_%2011k%20tps_2.avif',
    alt: 'Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard',
    category: 'Tech',
    date: 'Aug 25, 2025',
    title: 'Breaking Barriers: 0G, the Largest, Infinitely Scalable AI Layer 1, Hits 11,000 TPS with Parallel Consensus per Shard'
  },
  // {
  //   slug: 'guild-on-0g-06',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68b5c5c88c5721eb982503ad_Guild%20on%200G%2006%20featured.png',
  //   alt: 'Guild on 0G: Dormint AI, Balkeum Labs, Haio',
  //   category: '',
  //   date: 'Aug 19, 2025',
  //   title: 'Guild on 0G: Dormint AI, Balkeum Labs, Haio'
  // },
  {
    slug: 'early-signals-0g-global-accelerator',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689e2902bf376df69c532cce_Guild%20on%200G%20blog%20Where%20onchain%20is%20headed%20Aug%2025.avif',
    alt: 'Where Onchain AI is Headed: Early Signals from the 0G Global Accelerator',
    category: 'Partners',
    date: 'Aug 14, 2025',
    title: 'Where Onchain AI is Headed: Early Signals from the 0G Global Accelerator'
  },
  {
    slug: 'builder-spotlight-gimo',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689c7dc79da21db4aec3cdf8_0G%20Builder%20Spotlight_Gimo%20Aug%2025%20(1).avif',
    alt: '0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy',
    category: 'Partners',
    date: 'Aug 13, 2025',
    title: '0G Builder Spotlight: How Gimo Finance Is Unlocking Liquid Staking for the AI Economy'
  },
  {
    slug: 'worlds-first-distributed-100b-parameter-ai',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/689532a44347fbbe2dd10ac5_Tech%20Breakthrough_100B%20Paremeter%20model.avif',
    alt: 'Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model',
    category: 'Tech',
    date: 'Aug 7, 2025',
    title: 'Beyond Centralized Limits: Unpacking the First Globally Distributed 100B+ Parameter AI Model'
  },
  // {
  //   slug: 'ethglobal-cannes-recap',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/687919de9e4dd6bce81a325b_EthGlobal%20Featured.avif',
  //   alt: 'Onchain AI, Built in a Weekend: 0G at ETHGlobal Cannes',
  //   category: '',
  //   date: 'Jul 17, 2025',
  //   title: 'Onchain AI, Built in a Weekend: 0G at ETHGlobal Cannes'
  // },
  // {
  //   slug: '0g-ecosystem-update-h12025',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68779cbdcec4b6d03b7c4fbb_BLOG_H1%2025%20Ecosystem%20update.avif',
  //   alt: 'Building Infinite AI: H1 2025 0G Ecosystem Update',
  //   category: '',
  //   date: 'Jul 16, 2025',
  //   title: 'Building Infinite AI: H1 2025 0G Ecosystem Update'
  // },
  {
    slug: 'ethcc-cannes-recap',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6875289e9123eb5da629f683_EthCC%20Recap.avif',
    alt: 'Flow, Build, Scale: Recapping 0G\'s Week at EthCC Cannes',
    category: 'News',
    date: 'Jul 14, 2025',
    title: 'Flow, Build, Scale: Recapping 0G\'s Week at EthCC Cannes'
  },
  {
    slug: '0g-storage',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6866b195840012e8c37ba481_0G%20Storage%20for%20AI%20era%20blog%20graphic.avif',
    alt: '0G Storage: Built for the AI Era',
    category: 'Tech',
    date: 'Jul 3, 2025',
    title: '0G Storage: Built for the AI Era'
  },
  // {
  //   slug: 'multi-consensus-model',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68626c52124fe65a6cb224e1_Multi-Consensus%20Model_1200x675.avif',
  //   alt: 'Advantages of 0G\'s Multi-Consensus Model',
  //   category: '',
  //   date: 'Jun 30, 2025',
  //   title: 'Advantages of 0G\'s Multi-Consensus Model'
  // },
  // {
  //   slug: 'road-to-mainnet-nigeria',
  //   image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685dbab4c7111a17785d9ea3_Lagos%20Recap%20Featured.avif',
  //   alt: 'Road to Mainnet: 0G Brings Decentralized AI to Lagos',
  //   category: '',
  //   date: 'Jun 27, 2025',
  //   title: 'Road to Mainnet: 0G Brings Decentralized AI to Lagos'
  // },
  {
    slug: 'superai-recap',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685c12ee2bce2721c6a1654b_Super%20AI%20Recap%20Featured.avif',
    alt: 'A Recap of 0G\'s Global Builder Momentum at SuperAI',
    category: 'Tech',
    date: 'Jun 25, 2025',
    title: 'A Recap of 0G\'s Global Builder Momentum at SuperAI'
  },
  {
    slug: 'galileo-early-adoption-report',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/685581bf5a5d55eba60d8c7e_Galileo%20Testnet%20Report.avif',
    alt: '0G\'s Galileo Testnet: Early Adoption Report',
    category: 'Tech',
    date: 'Jun 20, 2025',
    title: '0G\'s Galileo Testnet: Early Adoption Report'
  },
  {
    slug: '0g-art-contest',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/6851841e9bbe47c03fbd4c9c_The%20Panda%27s%20Call%20Featured.avif',
    alt: 'The Panda\'s Call: 0G Art Contest',
    category: 'News',
    date: 'Jun 17, 2025',
    title: 'The Panda\'s Call: 0G Art Contest'
  },
  {
    slug: '0g-global-accelerator',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99094ade4814352080_jjqcvYwqmeEQwxMAkih6Najd0k.avif',
    alt: '0G & Web3Labs Global Accelerator: A Launchpad for Decentralized AI',
    category: 'Tech',
    date: 'Jun 11, 2025',
    title: '0G & Web3Labs Global Accelerator: A Launchpad for Decentralized AI'
  },
  {
    slug: 'guild-on-0g-05',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9b966ce215e33faf06_P1iZMOgEkXYJKYVW0MI6c2Wxlc.avif',
    alt: 'Guild on 0G: Euclid, MeetLinkAI, QuillAI',
    category: 'Tech',
    date: 'Jun 9, 2025',
    title: 'Guild on 0G: Euclid, MeetLinkAI, QuillAI'
  },
  {
    slug: 'consensus-toronto-recap',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b99e666068baff42421_yUXgYX4xv8ge7LoBk2WjO8PpXhw.avif',
    alt: 'From Panels to Pizza: Inside 0G\'s Momentum at Consensus Toronto',
    category: 'Tech',
    date: 'May 26, 2025',
    title: 'From Panels to Pizza: Inside 0G\'s Momentum at Consensus Toronto'
  },
  {
    slug: 'token-2049-recap',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9d0ad3c8b73a600837_vX8zHUHT6PPqDqypUasZmevOnU.avif',
    alt: 'A Recap of 0G\'s Massive Week at TOKEN2049 Dubai',
    category: 'Tech',
    date: 'May 19, 2025',
    title: 'A Recap of 0G\'s Massive Week at TOKEN2049 Dubai'
  },
  {
    slug: '0g-latest-hackathon-highlights',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/684b4b9cb7d26e784609d852_eYzvUkyKJTvvfYn3dRWrtdQgCpU.avif',
    alt: 'Forging the Future of Onchain AI: 0G\'s Latest Hackathon Highlights',
    category: 'Tech',
    date: 'May 16, 2025',
    title: 'Forging the Future of Onchain AI: 0G\'s Latest Hackathon Highlights'
  },
  {
    slug: 'ai-fine-tuning-with-0g-compute',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ea603c679c283830a3_knMgI6dMT8EmjDoyTNr0EQBNM.avif',
    alt: 'Revolutionizing AI Fine-Tuning with the 0G Compute Network',
    category: 'Tech',
    date: 'Apr 29, 2025',
    title: 'Revolutionizing AI Fine-Tuning with the 0G Compute Network'
  },
  {
    slug: 'guild-on-0g-04',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec9a298d11ceace954_ZL36wmYygw7Z6pCGTZ5CfLes8.avif',
    alt: 'Guild on 0G: sightAI, xNomad, Cove',
    category: 'Tech',
    date: 'Apr 28, 2025',
    title: 'Guild on 0G: sightAI, xNomad, Cove'
  },
  {
    slug: 'introducing-v3-testnet-galileo',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ebf666525258ad6de9_e2UEHG5hq5iLBYXprhDguxa3iPw.avif',
    alt: 'Introducing 0G\'s V3 Testnet: Galileo',
    category: 'Tech',
    date: 'Apr 23, 2025',
    title: 'Introducing 0G\'s V3 Testnet: Galileo'
  },
  {
    slug: 'ai-ownership-vs-api-access',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ebe22f22c015723382_GLXuDlLmDgi10Zujo8zkr1gk.avif',
    alt: 'True AI Ownership vs API Access: Returning Power to the Builders',
    category: 'Tech',
    date: 'Apr 15, 2025',
    title: 'True AI Ownership vs API Access: Returning Power to the Builders'
  },
  {
    slug: 'how-ai-will-adapt-in-web3',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ece86c2903b2c62313_ZhzWnnUwIglbiFV5Geo9kBloZs.avif',
    alt: 'AI Evolution: How Intelligent Agents Will Learn, Adapt, and Compete in Web3',
    category: 'Tech',
    date: 'Apr 11, 2025',
    title: 'AI Evolution: How Intelligent Agents Will Learn, Adapt, and Compete in Web3'
  },
  {
    slug: 'guild-on-0g-03',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec253219358cff9b72_tqliI1iMy7gYQtSDusI5CYLEWU.avif',
    alt: 'Guild on 0G: Leea Labs, Unagi, Rivalz',
    category: 'Tech',
    date: 'Apr 10, 2025',
    title: 'Guild on 0G: Leea Labs, Unagi, Rivalz'
  },
  {
    slug: 'this-week-in-onchain-ai-ep-2',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ecca9ee8ebddb0aa61_Wb3Xw5zmFcaOWj8IfB8XiTJGc.avif',
    alt: 'This Week in Onchain AI - Ep.2 Recap',
    category: 'Tech',
    date: 'Apr 9, 2025',
    title: 'This Week in Onchain AI - Ep.2 Recap'
  },
  {
    slug: 'road-to-mainnet-china',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ecd9ea354b308007ba_vNKqamQszbtnyD9yLTloeiEAc.avif',
    alt: 'Road to Mainnet: Highlights from 0G\'s China Roadshow',
    category: 'Tech',
    date: 'Apr 1, 2025',
    title: 'Road to Mainnet: Highlights from 0G\'s China Roadshow'
  },
  {
    slug: 'h12025-update',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ec8ced6b222591b7cf_FVfZdOpRjYJif4qOdx80H5Jr0uo.avif',
    alt: 'H1 Update: 0G\'s Upcoming Milestones & Chain Upgrades',
    category: 'Tech',
    date: 'Mar 27, 2025',
    title: 'H1 Update: 0G\'s Upcoming Milestones & Chain Upgrades'
  },
  {
    slug: 'storagescan-miner-rewards-update',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ef9a298d11ceaceaac_cej1AJJVLF8KlBT1u6Cu1FUO7xo.avif',
    alt: 'StorageScan Update: Performance Tracking, Miner Rewards, and Leaderboard Are Live',
    category: 'Tech',
    date: 'Mar 26, 2025',
    title: 'StorageScan Update: Performance Tracking, Miner Rewards, and Leaderboard Are Live'
  },
  {
    slug: 'guild-on-0g-02',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed8ced6b222591b830_2vH137ZueTvo67hczUUB1vW6UJM.avif',
    alt: 'Guild on 0G: Newmoney.AI, Peony, Zia',
    category: 'Tech',
    date: 'Mar 25, 2025',
    title: 'Guild on 0G: Newmoney.AI, Peony, Zia'
  },
  {
    slug: 'ai-accelerator-cohort-2',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ed9bbb2cbe2aab3114_VYt60D4oSMy4UY8eI9zidQaZU.avif',
    alt: 'Announcing 0G and OnePiece Labs\' Second AI Accelerator Cohort',
    category: 'Tech',
    date: 'Mar 19, 2025',
    title: 'Announcing 0G and OnePiece Labs\' Second AI Accelerator Cohort'
  },
  {
    slug: 'partial-0g-deployment',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ede22f22c01572342e_72mJZecptgJ9NwvPFjCyZPKopIg.avif',
    alt: 'Building Decentralized AI? Here\'s Why 0G Should Be Part of Your Stack',
    category: 'Tech',
    date: 'Mar 18, 2025',
    title: 'Building Decentralized AI? Here\'s Why 0G Should Be Part of Your Stack'
  },
  {
    slug: 'guild-on-0g-01',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ef034820a8b9006de7_9CNfcOKG66ea6Aa1kxSRDxRr8Bk.avif',
    alt: 'Guild on 0G: Zer0, H1uman, Avinasi Labs',
    category: 'Tech',
    date: 'Mar 17, 2025',
    title: 'Guild on 0G: Zer0, H1uman, Avinasi Labs'
  },
  {
    slug: 'token-update-a-look-at-0g-s-upcoming-token-allocation',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f3de3fede4f62eb5b1_ozixQRwvwDRnoxBwshpgchEKA.avif',
    alt: 'Token Update: A Look at 0G\'s Upcoming Token Allocation',
    category: 'News',
    date: 'Mar 13, 2025',
    title: 'Token Update: A Look at 0G\'s Upcoming Token Allocation'
  },
  {
    slug: 'clarifying-0g-s-token-allocation-our-commitment-to-the-community',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ee61e4643aad24f68c_F9OFxBnNelfC37OFM8QtBfNkM.avif',
    alt: 'Clarifying 0G\'s Token Allocation & Our Commitment to the Community',
    category: 'Tech',
    date: 'Mar 13, 2025',
    title: 'Clarifying 0G\'s Token Allocation & Our Commitment to the Community'
  },
  {
    slug: 'decentralized-ai',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ef65a36dfb5fbf2d4e_2zQUwU2gHtyKidNz94tjsZofbcY.avif',
    alt: 'Why the World Needs Decentralized AI',
    category: 'Tech',
    date: 'Feb 20, 2025',
    title: 'Why the World Needs Decentralized AI'
  },
  {
    slug: 'this-week-in-onchain-ai-ep-1',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126efc58fb2187fe54d1e_nCHm4BdHmTX3GlEnUb1XMm0KQcI.avif',
    alt: 'This Week in Onchain AI Ep. 1 Recap',
    category: 'Tech',
    date: 'Feb 20, 2025',
    title: 'This Week in Onchain AI Ep. 1 Recap'
  },
  {
    slug: '0g-deep-dive',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f08310dc81b9739253_zpX8DW0w5DDPtJCj2jO1OWBrYys.avif',
    alt: '0G Deep Dive: Unpacking the World\'s First AI-Native L1',
    category: 'Tech',
    date: 'Feb 18, 2025',
    title: '0G Deep Dive: Unpacking the World\'s First AI-Native L1'
  },
  {
    slug: 'guild-on-0g',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ef599cd8e14724b105_0hiDOUOSjiAjkoDZgNmffKQLAAg.avif',
    alt: 'Guild on 0G: A New Frontier for Decentralized AI Builders',
    category: 'Tech',
    date: 'Feb 15, 2025',
    title: 'Guild on 0G: A New Frontier for Decentralized AI Builders'
  },
  {
    slug: 'introducing-0g-hub-your-gateway-to-the-0g-ecosystem',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1d9b8934078252e04_P0XT1rB8ivY2o8FHIi7e4sYOo.avif',
    alt: 'Introducing 0G Hub: Your Gateway to the 0G Ecosystem',
    category: 'News',
    date: 'Feb 7, 2025',
    title: 'Introducing 0G Hub: Your Gateway to the 0G Ecosystem'
  },
  {
    slug: 'agentic-ai-market-infra-2026',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/697dbe1bc78d2096a8f70d40_Blog_Infrastructure.png',
    alt: 'Agentic AI Market at $7.3B: Infrastructure Gaps Blocking Scale',
    category: 'Industry',
    date: 'Jan 30, 2026',
    title: 'Agentic AI Market at $7.3B: Infrastructure Gaps Blocking Scale'
  },
  {
    slug: '0g-ecosystem-program',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1539798c6ccaaa748_ycUz5RRwi1ZyYLQGi4CHOqNqDY.avif',
    alt: '0G Launches $88.88M Ecosystem Program to Accelerate AI Apps on 0G',
    category: 'Industry',
    date: 'Feb 5, 2025',
    title: '0G Launches $88.88M Ecosystem Program to Accelerate AI Apps on 0G'
  },
  {
    slug: 'navigating-0g-s-tech-an-update-on-the-latest-in-0g-s-products',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f2a86fdf2e606687e8_pUdv6ibcyQSmoAw5H90d4wY3vGw.avif',
    alt: 'Navigating 0G\'s Tech: An Update On The Latest in 0G\'s Products',
    category: 'News',
    date: 'Jan 27, 2025',
    title: 'Navigating 0G\'s Tech: An Update On The Latest in 0G\'s Products'
  },
  {
    slug: 'benchmarking-0g-performance-draft',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f1599cd8e14724b194_p9MiV3tXHoHTSBRm7kgILRFinG4.avif',
    alt: 'Benchmarking 0G Performance',
    category: 'Tech',
    date: 'Jan 21, 2025',
    title: 'Benchmarking 0G Performance'
  },
  {
    slug: '0g-introducing-erc-7857',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f3201a0eea0f4254cd_1ITs2esrpRc2k3esC5or9t5VCQ.avif',
    alt: '0G Introducing ERC-7857',
    category: 'Tech',
    date: 'Jan 17, 2025',
    title: '0G Introducing ERC-7857'
  },
  {
    slug: '0g-newton-testnet-rpc-integration-guide',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f0cf792ce1f9d83e4a_2Z2QpFcma5O9VxbKSymkrbBAazU.avif',
    alt: '0G Newton Testnet: RPC Integration Guide',
    category: 'Tech',
    date: 'Jan 16, 2025',
    title: '0G Newton Testnet: RPC Integration Guide'
  },
  {
    slug: 'the-0g-ecosystem',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f28a86dfe2440d7fee_SQc6Tg5ZuB4CSUe5lU8Tg6IJSBs.avif',
    alt: 'The 0G Ecosystem',
    category: 'News',
    date: 'Jan 15, 2025',
    title: 'The 0G Ecosystem'
  },
  {
    slug: '0g-ai-and-alibaba-cloud-to-advance-ai-and-web3-ecosystems-in-apac',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f2034820a8b9006f12_7fLCYlJrZW02dbXLjUTxCIPOgQ.avif',
    alt: '0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC',
    category: 'Partners',
    date: 'Jan 13, 2025',
    title: '0G.ai and Alibaba Cloud to Advance AI and Web3 Ecosystems in APAC'
  },
  {
    slug: '0g-s-2024-in-review-building-the-future-of-decentralized-ai',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f253e7576792b48b0f_Obz6EWWqHyjDaJaZUZfQrCiMYuk.avif',
    alt: '0G\'s 2024 in Review: Building the Future of Decentralized AI',
    category: 'Tech',
    date: 'Dec 31, 2024',
    title: '0G\'s 2024 in Review: Building the Future of Decentralized AI'
  },
  {
    slug: '0g-node-sale-results',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1f603c679c283a4296_tsHoRqypxrpFIcfhhYeayYdNQ.avif',
    alt: '0G Node Sale Results',
    category: '0G Foundation',
    date: 'Dec 20, 2024',
    title: '0G Node Sale Results'
  },
  {
    slug: '0g-demo-a-technical-walkthrough',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f5ef91b5c1f4f9bcfa_848X0gwxVawNeLhTGNNtIQvcA0.avif',
    alt: '0G Demo: A Technical Walkthrough',
    category: 'Tech',
    date: 'Nov 13, 2024',
    title: '0G Demo: A Technical Walkthrough'
  },
  {
    slug: '0g-ecosystem-receives-290m-in-financing-to-develop-world-s-first-decentralized-ai-operating-system',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b1fa937523ab8a83acd_RArkpnPKG0UvYPBoqjtIOse4CWs.avif',
    alt: '0G Ecosystem Receives $290M in Financing to Develop World\'s First Decentralized AI Operating System',
    category: '0G Foundation',
    date: 'Nov 13, 2024',
    title: '0G Ecosystem Receives $290M in Financing to Develop World\'s First Decentralized AI Operating System'
  },
  {
    slug: 'top-areas-of-on-chain-ai',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f5172a418ac84995eb_ZEtYFLR6S3bnXCfCwatJhsIqMDM.avif',
    alt: 'Top Areas of On-Chain AI',
    category: 'Industry',
    date: 'Nov 8, 2024',
    title: 'Top Areas of On-Chain AI'
  },
  {
    slug: '0g-node-sale-purchasing-guide',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b202d09deedb57a2b54_cuJhybFI6jVb7IhhZaQweZDv3JU.avif',
    alt: '0G Node Sale Purchasing Guide',
    category: '0G Foundation',
    date: 'Nov 6, 2024',
    title: '0G Node Sale Purchasing Guide'
  },
  {
    slug: '0g-serving',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f5ca9ee8ebddb0b127_uDCWU86ddHrZLleYhKV45UiZbY.avif',
    alt: '0G Serving',
    category: 'News',
    date: 'Oct 29, 2024',
    title: '0G Serving'
  },
  {
    slug: '0g-foundation-and-onepiece-labs-open-applications-for-ai-accelerator-cohort',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f4dcf93b25c314ebe5_HBPq3HO98DUaDMr5JsMGI17T65Y.avif',
    alt: '0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort',
    category: 'Tech',
    date: 'Oct 29, 2024',
    title: '0G Foundation and OnePiece Labs Open Applications for AI Accelerator Cohort'
  },
  {
    slug: '0g-foundation-ai-alignment-node-sale-101-key-details-and-how-to-participate',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b12172a418ac84b9f77_RobvMLasZpYsEsWKhddYWtsoE.avif',
    alt: '0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate',
    category: '0G Foundation',
    date: 'Oct 22, 2024',
    title: '0G Foundation AI Alignment Node Sale 101: Key Details and How to Participate'
  },
  {
    slug: 'introducing-the-0g-foundation-advancing-decentralized-ai-as-a-public-good',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/68212b278ced6b222593bc55_FI8dQM79KxsvUB37oAeRZ3EmQ.avif',
    alt: 'Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good',
    category: '0G Foundation',
    date: 'Oct 18, 2024',
    title: 'Introducing the 0G Foundation: Advancing Decentralized AI as a Public Good'
  },
  {
    slug: 'how-does-0g-da-compare-to-celestia-and-eigenlayer',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f6599cd8e14724b3fd_1GMtmByZLYEuumXtwirt7XLhlU.avif',
    alt: 'How Does 0G DA Compare to Celestia and EigenLayer?',
    category: 'Tech',
    date: 'Oct 17, 2024',
    title: 'How Does 0G DA Compare to Celestia and EigenLayer?'
  },
  {
    slug: 'overview-of-ai-agents',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f653e7576792b48cb8_DhZ7ZkoMBSYp1MKaJsAb8B7JcE.avif',
    alt: 'Overview of AI Agents',
    category: 'Tech',
    date: 'Oct 8, 2024',
    title: 'Overview of AI Agents'
  },
  {
    slug: 'reintroducing-0g-the-first-decentralized-ai-operating-system',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f6f666525258ad73df_LM4Q4IX4RuYeIjVdjFye05VNuEY.avif',
    alt: 'Reintroducing 0G: The First Decentralized AI Operating System',
    category: 'News',
    date: 'Oct 1, 2024',
    title: 'Reintroducing 0G: The First Decentralized AI Operating System'
  },
  {
    slug: 'announcing-lumoz-and-0g-partnership',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126ea61e4643aad24f52a_dUd2Qby9IZnOGGS6ohwtSYpSnic.avif',
    alt: 'Announcing Lumoz and 0G Partnership',
    category: 'Partners',
    date: 'Sep 24, 2024',
    title: 'Announcing Lumoz and 0G Partnership'
  },
  {
    slug: 'focg-summer-wrap-up',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f68db2a15bce077f46_WdhPbSZ15tDl6sZOobkHez6cNo.avif',
    alt: 'FOCG Summer Wrap-up',
    category: 'News',
    date: 'Sep 20, 2024',
    title: 'FOCG Summer Wrap-up'
  },
  {
    slug: 'how-web3-and-ai-can-work-together',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f7b2034bccd34cb0c1_HahO7HEdl6rPsVBXfjX9NFUI0UE.avif',
    alt: 'How Web3 and AI can work together',
    category: 'Industry',
    date: 'Sep 16, 2024',
    title: 'How Web3 and AI can work together'
  },
  {
    slug: '0g-s-whitepaper-a-complete-breakdown',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f93dc65fa89ac10ed1_7GRTxALCksL9fnNkMotxZC4CyY.avif',
    alt: '0G\'s Whitepaper: A Complete Breakdown',
    category: 'Tech',
    date: 'Sep 5, 2024',
    title: '0G\'s Whitepaper: A Complete Breakdown'
  },
  {
    slug: 'how-0g-can-power-better-web3-gaming',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f7599cd8e14724b533_TKH34NJd4xXjJApTF1PxpjjFQc.avif',
    alt: 'How 0G Can Power Better Web3 Gaming',
    category: 'Industry',
    date: 'Aug 19, 2024',
    title: 'How 0G Can Power Better Web3 Gaming'
  },
  {
    slug: 'the-evolution-of-data-availability-in-blockchain-and-what-s-next',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f880bf9f20026edb34_cyyuXOnOFO3XjKbI3GHJP6MSI60.avif',
    alt: 'The Evolution of Data Availability in Blockchain and What\'s Next',
    category: 'Tech',
    date: 'Aug 11, 2024',
    title: 'The Evolution of Data Availability in Blockchain and What\'s Next'
  },
  {
    slug: 'the-0g-ecosystem-a-comprehensive-overview',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f71dc76e83754a250f_94KcCjEDkqLXeO4FDzJ6ReGskg.avif',
    alt: 'The 0G Ecosystem: A Comprehensive Overview',
    category: 'Tech',
    date: 'Aug 6, 2024',
    title: 'The 0G Ecosystem: A Comprehensive Overview'
  },
  {
    slug: '0g-foundation-and-onepiece-labs-join-forces-to-launch-pioneering-incubation-program-for-web3-and-ai-innovators',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f8e922eefad3a6334d_7YUsZjkGQdshkX8v0Wj01VkAbi4.avif',
    alt: '0G Foundation and OnePiece Labs Join Forces to Launch Pioneering Incubation Program for Web3 and AI Innovators',
    category: 'News',
    date: 'Jul 30, 2024',
    title: '0G Foundation and OnePiece Labs Join Forces to Launch Pioneering Incubation Program for Web3 and AI Innovators'
  },
  {
    slug: 'hackathon-evolution-how-your-suggestions-shape-our-updates',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f812ff566e2d56a7d0_3fTZCilIhjy6iYBw9Ln5VydTGnM.avif',
    alt: 'Hackathon Evolution: How Your Suggestions Shape Our Updates',
    category: 'News',
    date: 'Jul 25, 2024',
    title: 'Hackathon Evolution: How Your Suggestions Shape Our Updates'
  },
  {
    slug: 'user-guide-focg-summer-co-hosted-by-0g-labs-blade-games-and-blockbooster',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fa23c440bb823ebb22_m3mzxyuQR3xw9THo3AgFOIxbA.avif',
    alt: 'User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster',
    category: 'Partners',
    date: 'Jul 23, 2024',
    title: 'User Guide: FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster'
  },
  {
    slug: 'ethcc-brussels-recap-og-lab-s-first-summit-path-to-dagi',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fcd973842c02d9bd25_5Dk8UxAoUTSf0D3YsD7bANlqmjs.avif',
    alt: 'EthCC Brussels Recap: OG Lab\'s First Summit - Path to dAGI',
    category: 'News',
    date: 'Jul 22, 2024',
    title: 'EthCC Brussels Recap: OG Lab\'s First Summit - Path to dAGI'
  },
  {
    slug: '0g-ambassador-program-cohort-1-selection',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fdd973842c02d9bde4_FctTwAf29KlJkwGgz4izZkcDYI.avif',
    alt: '0G Ambassador Program: Cohort 1 Selection',
    category: 'News',
    date: 'Jul 19, 2024',
    title: '0G Ambassador Program: Cohort 1 Selection'
  },
  {
    slug: 'focg-summer-co-hosted-by-0g-labs-blade-games-and-blockbooster',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f92d09deedb577d816_RZ3ch8lpCpw8OYcKkH0ZFCYaLRI.avif',
    alt: 'FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster',
    category: 'News',
    date: 'Jul 8, 2024',
    title: 'FOCG Summer co-hosted by 0G Labs, Blade Games and Blockbooster'
  },
  {
    slug: 'high-frequency-defi-on-0g-redefining-speed-and-efficiency',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126f913a6fdaaadd5ef2f_UyuBDGrAorhxyJ7J0yxwhbMgkcM.avif',
    alt: 'High-Frequency DeFi on 0G: Redefining Speed and Efficiency',
    category: 'Tech',
    date: 'Jul 2, 2024',
    title: 'High-Frequency DeFi on 0G: Redefining Speed and Efficiency'
  },
  {
    slug: '0g-partnership-with-assister',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fa97f4878ff124544b_mW7NbpZQU2k1ybhIraO8m9AfO8.avif',
    alt: '0G Partnership with Assister',
    category: 'Partners',
    date: 'Jun 29, 2024',
    title: '0G Partnership with Assister'
  },
  {
    slug: '0g-x-onepiece-labs-x-camp-hackathon',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fc61e4643aad24fddc_WdGbVXz8JsfmtRRfeu1hiyryxUY.avif',
    alt: '0G x OnePiece Labs x Camp Hackathon',
    category: 'News',
    date: 'Jun 27, 2024',
    title: '0G x OnePiece Labs x Camp Hackathon'
  },
  {
    slug: 'top-50-ai-projects',
    image: 'https://cdn.prod.website-files.com/680bf096cfee93035357a4c9/682126fb65373596cc2f1e58_I4J8rvtIahmbVuh1slxisuioqNc.avif',
    alt: 'Top 50 AI Projects',
    category: 'Industry',
    date: 'Jun 26, 2024',
    title: 'Top 50 AI Projects'
  }
]

const categories = ['view all', 'Builder Spotlight', '0G Foundation', 'Industry', 'Partners', 'News', 'Tech']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('view all')

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'view all') {
      return blogPosts
    }
    return blogPosts.filter(post => post.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="blog-page-wrapper">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-padding">
          <div className="blog-hero-container">
            <div className="blog-hero-bg-wrapper">
              <img 
                src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682af34c2c04847a9767c3f9_Mask%20group.avif" 
                loading="lazy" 
                alt="" 
                className="blog-hero-bg-image blog-hero-bg-desktop" 
              />
              <img 
                src="https://cdn.prod.website-files.com/680b884d38733122a923739b/682af3d033e82a5fc2aca059_Group%201171275674.avif" 
                loading="lazy" 
                alt="" 
                className="blog-hero-bg-image blog-hero-bg-mobile" 
              />
              <div className="blog-hero-gradient"></div>
            </div>
            <div className="blog-hero-content">
              <div className="blog-hero-title-wrapper">
                <h1 className="blog-hero-title">The ØG <br /> Newsroom</h1>
              </div>
              <div className="blog-hero-description-wrapper">
                <div className="blog-hero-description">
                  Explore the latest in onchain AI: ØG product <br /> updates, partnerships, and behind-the-scenes <br /> looks into the ØG ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="blog-filter-section">
        <div className="blog-filter-wrapper">
          <form className="blog-filter-menu">
            {categories.map((category) => (
              <label 
                key={category}
                className={`blog-filter-link ${selectedCategory === category ? 'blog-filter-active' : ''}`}
              >
                <input
                  type="radio"
                  name="blog-filter"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="blog-filter-input"
                />
                <div className={`blog-filter-dot ${selectedCategory === category ? 'blog-filter-dot-active' : ''}`}></div>
                <span className="blog-filter-text">{category}</span>
              </label>
            ))}
          </form>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-grid-section">
        <div className="blog-grid-list">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="blog-grid-item">
              <Link to={`/blog/${post.slug}`} className="blog-grid-card">
                <div className="blog-card-content">
                  <img 
                    src={post.image} 
                    loading="lazy" 
                    alt={post.alt} 
                    className="blog-card-image" 
                  />
                  <div className="blog-card-spacer"></div>
                  <div className="blog-card-text-wrapper">
                    <div className="blog-card-meta">
                      {post.category && (
                        <>
                          <div className="blog-card-category">{post.category}</div>
                          <div className="blog-card-dot">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                              <circle cx="2" cy="2" r="2" fill="currentColor"/>
                            </svg>
                          </div>
                        </>
                      )}
                      <div className="blog-card-date">{post.date}</div>
                    </div>
                    <div className="blog-card-title-spacer"></div>
                    <h3 className="blog-card-title">{post.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
