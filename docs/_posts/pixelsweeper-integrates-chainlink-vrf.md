---
title: PixelSweeper Integrates Chainlink VRF
date: 2022-06-11T06:00:00.000+02:00
featuredimg: "/assets/img/partnership-announcement-template-800-x-418-px.png"
summary: PixelSweeper Integrates Chainlink VRF To Help Power Player and Staker Lucky
  Draws
canonicalUrl: https://blog.pixelsweeper.com/2022/11/06/pixelsweeper-integrates-chainlink-vrf/
link_preview_img: "/assets/img/partnership-announcement-template-800-x-418-px.png"
link_preview_description: PixelSweeper Integrates Chainlink VRF To Help Power Player
  and Staker Lucky Draws
category: integrations

---
# **PixelSweeper Integrates Chainlink VRF To Help Power Player and Staker Lucky Draws**

We’re excited to announce that PixelSweeper—a collection of ERC721 3D NFTs—has integrated [Chainlink Verifiable Random Function (VRF)](https://chain.link/solutions/chainlink-vrf) on BNB Chain mainnet.

By integrating the industry-leading decentralized oracle network, we have access to a tamper-proof and auditable source of randomness needed to help select the weekly winners of the PixelSweeper Player and Staker Pot drawings. Rewards include NFTs from Pancake Squad and other BNB Chain NFT collections.

Ultimately this creates a more exciting and transparent user experience, as users can independently verify the random selection process from each week's drawings for high assurances that winners were decided in a provably fair manner.

PixelSweeper is a collection of 10,000 ERC721 3D NFTs on BNB Chain. The collection launched on April 26, 2022, and sold out within 24 hours, and has garnered over 9,000 BNB in total sales volume since that time.

Every week, PixelSweeper holders can stake their NFTs for a chance to win a Pancake Squad NFT from the lucky draw. The rarity of staked Sweepers and the length of time they are staked for all factor into the chances of winning.

In addition, holders can purchase up to 100 tickets for each PixelSweeper they have staked. These tickets enter holders into the weekly Player Pot drawings, which gives them an additional chance at winning one or more Pancake Squad NFTs. The more tickets that are sold, the more Pancake Squad NFTs that are swept that week, meaning more prizes are given away in that week’s Player Pot drawing.

Sales from the initial PixelSweeper mint and all ongoing ticket sales are allocated as follows:

* 90% used to sweep the Pancake Squad floor
* 5% used to sweep the floor of other BNB Chain collections as voted on by PixelSweeper holders
* 5% for the team

![](/assets/img/bnft-banner_1440x460_2x.png)

## **Why Choose Chainlink**

In order to fairly select the winners for our Player and Staker Pot drawings in a verifiable and transparent manner, we needed access to a secure random number generator (RNG) that any user could independently audit.

However, RNG solutions for [smart contracts](https://chain.link/education/smart-contracts) require several security considerations to prevent manipulation and ensure system integrity. For instance, RNG solutions derived from blockchain data like block hashes can be exploited by miners/validators, while off-chain RNG solutions derived from off-chain APIs are opaque and don’t provide users with definitive proof about the integrity of the process.

After reviewing various solutions, we selected Chainlink VRF because it’s based on cutting-edge academic research, supported by a time-tested [oracle network](https://chain.link/education/blockchain-oracles), and secured through the generation and on-chain verification of cryptographic proofs that prove the integrity of each random number supplied to smart contracts.

Chainlink VRF works by combining block data that is still unknown when the request is made with the oracle node's pre-committed private key to generate both a random number and a cryptographic proof.

The PixelSweeper smart contract will only accept the random number input if it has a valid cryptographic proof, and the cryptographic proof can only be generated if the VRF process is tamper-proof. This provides our users with automated and verifiable assurances directly on-chain that the randomness underpinning Player and Staker Pot drawings is provably fair and was not tampered with by the oracle, outside entities, or the PixelSweeper team.

![](/assets/img/screenshot-2022-06-10-105141.png)

“Choosing Chainlink VRF for our random number generation needs was an easy decision. Chainlink is the undisputed market leader in oracles and has proven itself to have a high degree of reliability and security. The integration itself was simple, painless, and the cost and architecture VRF makes it the best solution to access a constant source of random numbers.” – Fab, lead developer at PixelSweeper.

## **About Chainlink**

Chainlink is the industry standard for building, accessing, and selling oracle services needed to power hybrid smart contracts on any blockchain. Chainlink oracle networks provide smart contracts with a way to reliably connect to any external API and leverage secure off-chain computations for enabling feature-rich applications. Chainlink currently secures tens of billions of dollars across DeFi, insurance, gaming, and other major industries, and offers global enterprises and leading data providers a universal gateway to all blockchains.

Learn more about Chainlink by visiting [chain.link](https://chain.link/) or reading the developer documentation at [docs.chain.link](http://docs.chain.link/). To discuss an integration, [reach out to an expert](https://chainlinkcommunity.typeform.com/to/OYQO67EF?page=announcement).

## **About PixelSweeper**

PixelSweepers is a set of 10,000 ERC721 3D NFTs on BNB Chain. 95% of the proceeds generated from mint will be used to sweep the floor of other BNB Chain NFT collections, with 90% of the funds being used to sweep the Pancake Squad floor, and 5% being used to sweep the floor of other BNB Chain collections as voted on by PixelSweeper holders.

The swept NFTs will be redistributed back to PixelSweeper holders through two weekly drawing mechanisms: Staker Pot and Player Pot.

Learn more about PixelSweeper by visiting [pixelsweeper.com](https://pixelsweeper.com/)