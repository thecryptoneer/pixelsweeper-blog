---
title: Staker Pot Upgrade
date: 2022-05-27 15:14:00 +0200
featuredimg: "/assets/img/forestry-graphics-5.png"
summary: This article explains why we had to upgrade the Staker Pot, what’s changing
  and what will happen in the next week.
canonicalUrl: https://blog.pixelsweeper.com/2022/05/27/staker-pot-upgrade/
link_preview_img: "/assets/img/forestry-graphics-5.png"
link_preview_description: This article explains why we had to upgrade the Staker Pot,
  what’s changing and what will happen in the next week.
category: Overview

---
# **Staker Pot Upgrade**

Today’s Staker Pot draw will be delayed for one hour, while we implement an Upgrade.

This article explains why we had to upgrade the Staker Pot, what’s changing and what will happen in the next week.

Here’s an overview of the timeline for the upgrade, you can stake and unstake - and buy Player Pot tickets - as normal up until the Player Pot draw at 14:00 UTC.

**14:00 UTC Player Pot draw**

During the draw we will pause the sale of new Player Pot ticket sales, and they will not be on sale again until the upgrade is complete.

**14:15 UTC Upgrade Begins**

From 14:15 UTC, you will not be able to stake or unstake your Sweepers until the upgrade is complete

**15:00 UTC Delayed Staker Pot draw**

After today’s delayed Staker Pot draw is complete you will be able to stake and unstake your Sweepers as normal.

Please note, shortly after the upgrade begins the staked Sweepers from your wallet will change. They’ll be replaced with a Ghost Sweeper.

Your staked Sweepers are completely SAFU and will be re-staked automatically into our new upgraded Staker Pot. The entire process will take around one hour, and staking and unstaking will be opened again after the delayed draw.

This action will not cost you any BNB for transaction fees. All of the transactions to unstake and restake everyone’s staked Sweepers will be paid for out of the team’s BNB.

Also, your Player Pot tickets are not affected, and you have the same chance to win in today’s Player Pot with the tickets you bought this week.

## **So what happened?**

Someone in the community approached us to let us know that they thought that the rarity of their Sweeper was not influencing their chances of winning the Staker Pot correctly.

After some investigation by our Dev team, we realised they were correct. And we were able to identify the reason why:

The formula that we had implemented for identifying each Sweeper’s RS+S score, to calculate that Sweeper’s chances of winning, was incorrect by one digit.

This meant, for example, that:

Sweeper ID: 1000, which has an RS+S score of 7323

was actually treated as

Sweeper ID: 999, which has an RS+S score of 6809

## **How bad was this?**

Kind of bad.

Because the issue impacted every single Sweeper, the distribution of the problem was random and in general had a similar impact on everyone’s chances for winning in the first three Staker Pot draws.

Some chances per Sweeper increased, and some chances per Sweeper decreased.

However, as some of you may have already worked out, this did have a negative impact on people with rare Sweepers.

Take the example of our good friend Mogwai:

Sweeper ID: 9898, which has an RS+S score of 4

Mogwai was actually treated as

Sweeper ID: 9897, which has an RS+S score of 3177

This shows that rare sweepers were really at lower power than they should have been for the first three Staker Pot draws.

Since the distribution of rarity across Sweeper IDs was random, on average the impact was canceled out for minters - some sweepers got more weight, some got less. It was only really an issue for holders who went on to collect a large proportion of rare sweepers in the first few weeks.

Fear not, today’s delayed Staker Pot draw will already have this issue fixed.

## **What else is the PixelSweeper team going to do about this?**

First of all, we spent some time working on a solution that would allow us to restake your Sweepers in an upgraded Staker Pot, without any action or cost on your part.

That’s why today you will get a Ghost Sweeper in your wallet for all your staked Sweepers, and why your Sweepers will be restaked automatically into the upgraded Staker Pot for today’s delayed draw.

Secondly, we are going to run three extra retroactive Staker Pot draws next week.

One on Tuesday 7 June

One on Wednesday 8 June

One on Thursday 9 June

These retroactive Staker Pot draws will be based on snapshots taken at the exact block of each of the draws which had the incorrect rarity power formula, but this time with the correct formula implemented.

## **How the retroactive Staker Pot Draws will work**

You don’t need to do anything.

We have all the on-chain data to allow us to retroactively run these three extra draws.

The draw on Tuesday 7 June, will use the snapshot taken for the Staker Pot draw on May 6.

The draw on Wednesday 8 June, will use the snapshot taken for the Staker Pot draw on May 13.

The draw on Thursday 9 June, will use the snapshot taken for the Staker Pot draw on May 20.

Each retroactive Staker Pot draw will use the same Chainlink VRF process, and will be verifiable onchain. We will exclude team member wallets from all three of the retroactive draws, so that we cannot be accused of foul play.

## **Who is eligible to win the Retroactive Staker Pot Draws?**

In essence, if you had a Sweeper staked in any of the previous Staker Pot draws (even if you have since sold it) you are in with a chance to win a Pancake Squad NFT, from the Prize Vault, in the Retroactive Staker Pot Draws; with the correct rarity power formula now in place.

If you were not staked for any of these previous Staker Pot draws - or you have only bought Sweepers since the first three draws, that were staked by someone else at the time of the draws - you won’t be eligible to win these retroactive draws.

The prize will go to the wallet that had staked those Sweepers at the time of the previous snapshots.

## **What are the Ghost Sweepers in my wallet?**

The ghost sweepers are NFTs that you can not move or trade from your wallet. It’s not technically possible for us to remove them for you either.

This is why our artists came up with a ghost sweeper image for all the sweepers that were staked in the old Staker Pot. It’s a little on-chain reminder of the upgrade, and we hope you don’t mind this memento too much.

![](/assets/img/photo_2022-05-24_09-16-40.jpg)

You will soon see your restaked sweeper NFTs with the familiar Staked watermark on them. These will function exactly the same way that the old staked NFTs did, meaning if you unstake from the new Staker Pot in the future, the watermarked NFTs will be replaced with your original NFT.

Your restaked Sweepers will automatically be at full power for next Friday’s Time Bonus and Voting Power snapshot.

## **Did we fix anything else?**

Yes, as well as fixing the rarity power issue, we took the opportunity to make Staker Pot contracts more efficient.

This means it will cost less BNB gas for staking and unstaking your Sweepers going forward. The gas savings are between 30 and 50%, depending on how many Sweepers you stake or unstake at a time.