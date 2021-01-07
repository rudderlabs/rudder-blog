---
title: "Game Analytics for Mobile: Casino Game Case Study"
siteMetadescription:
date: 2020-03-26T00:00:00+05:30
featureImg: ../assets/106290165-750x355.jpg
category: Case Studies
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition: 
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "rudderstack-case-study-casino-game-analytics"
---
Wynn Casino, a mobile casino game, is one of the first enterprise customers of [RudderStack](/). Their spin wheel game is one of the most popular games in the casino game category. Their engagement numbers double every six months. In this post, we give you a brief overview of how Wynn Casino Game used RudderStack to optimize mobile game analytics.

How Wynn Casino Wanted to use Their Event Data for Game Analytics
-----------------------------------------------------------------

Wynn Casino was highly data-driven and wanted to track all their in-app activities using game analytics. Different teams within the organization used data to understand various metrics, summarized as below:

*   The **growth-hacking team** wanted **user-related information** such as their top users, churning users to run targeted campaigns, and so on. 
*   The **product** team wanted to know how people are using the app to improve the game.
*   Their **customer support** team wanted access to the customer event data. Their paid users complained about pay-outs after winning, so having the data around spins helped them to manage the payouts. 

All these use-cases required them to track granular events. These were more than 1 billion of them per month, and doubling every 6 months! While this was a really impressive milestone in itself, tracking that volume of events on SaaS-based analytics products such as Google Analytics, Amplitude, etc. would have cost them hundreds of thousands of dollars. This was not economically justifiable for a game where 90% of users were free. Besides, these SaaS analytics products were not flexible enough for running some of the rich SQL-driven queries.

Wynn Casino was looking for a solution that reduced their event budget on those platforms, as well as get the most out of their data. They used RudderStack to address these problems.

How RudderStack Solved Their Problem
------------------------------------

Wynn Casino embedded the **[RudderStack Unity SDK](https://github.com/rudderlabs/rudder-sdk-unity)** in their app to send events to RudderStack. As they did not have a dedicated DevOps team, they went with the RudderStack-managed hosted solution.

They also leveraged RudderStack’s **Transformation feature** to reduce the event budget on Google Analytics and Amplitude by:

*   **Sampling** the spin events and sending them to Google Analytics.
*   **Summing up** the spin events in a session and sending them to Amplitude. Their users would typically do multiple spins (20-30) in quick succession before closing the app, and this would constitute a single session.

Each one of the above solutions served a specific purpose:

*   Wynn Casino’s product team used Google Analytics for in-app game analytics. For that, a representative sample of the events was good enough, and they didn’t need all the events.
*   Their growth-hacking team used the Amplitude data to identify the high-value users, churning users, etc. and run targeted campaigns accordingly. Also, summing up the wins from multiple spin events before sending the data to Amplitude ensured that the rate limit was not breached. 

Open-Source Stack for in Game Analytics
---------------------------------------

In addition to the above purposes, Wynn Casino used Amazon Redshift to dump the raw events. They put together an open-source analytics stack on top of Redshift, using Apache SuperSet as the BI tool. Their game analytics team used this stack to generate complex engagement reports via running SQL commands. In addition, their customer support team used this data to address support cases around payments.

> You can check out our blog on [building an open-source data analytics stack](https://rudderstack.com/blog/open-source-analytics/) using RudderStack and Apache Superset, using the mobile game data metrics to generate intuitive and insightful reports.

Wynn Casino’s data science team worked in conjunction with the RudderStack data science team to generate revenue, LTV and churn models using the raw event data in Redshift. We will cover all of this in a future blog – stay tuned!

Summary
-------

This case study demonstrates how businesses are using RudderStack in interesting ways beyond the standard use-case of sending customer event data to multiple destinations.

If you want to know more about the features of RudderStack, we’re happy to talk to you! [Get in touch with us](https://rudderstack.com/contact/). You can also [request a free demo](https://rudderstack.com/request-a-demo/) to better understand how RudderStack can help you collect and route your customer event data securely.

> **Editor’s Note:** This post was originally published in December 2019 and has been completely revamped and updated for accuracy and comprehensiveness.