---
title: "Identity Resolution is More Valuable When it’s on Your Warehouse"
siteMetadescription: "Most CDPs access sensitive customer data while performing identitiy resolution. RudderStack allows you to perform identity resolution while saving all the data on YOUR warehouse- this blog explains how."
date: 2021-04-06T00:00:00+05:30
featureImg: ../assets/markdown/idresolutionblackboxvswarehouse.png
category:
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition:
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "identity-resolution-is-more-valuable-when-its-on-your-warehouse"
weight: 
---

Identity resolution lets you combine unique identifiers across your digital touchpoints to identify users in real-time. With it, you can create a unified, omnichannel view of your customers. By leveraging an identity graph - a database that houses these identifiers - you can identify and connect details related to different aspects of your customers’ journies and stitch them all together in one customer profile.


## RudderStack Builds Your Identity Graph on Your Data Warehouse. Other Customer Data Tools Don’t.

While many customer data tools offer identity resolution, they build and store these identity graphs in their CDP tool infrastructure. To the user, building the identity graph is opaque, and the data that composes the identity graph is unknown. RudderStack doesn’t do any of that black-box magic, though.

One of RudderStack’s most prominent features is its **warehouse-first architecture**. RudderStack treats your data warehouse as a first-class citizen. So you can send all your cross-platform data to your warehouse in real-time. More importantly, RudderStack lets you build important data structures - like your identity graph - in your data warehouse. This means you can leverage all the cross-platform customer data residing in your warehouse to stitch together comprehensive user profiles using the identity graph.


## How Businesses use Identity Resolution

Before we jump into the advantages of performing identity resolution on your warehoused customer data, let’s take a quick look at how companies leverage identity resolution in traditional CDP tools - ones that store your identity graph on their infrastructure.


### Cross-Device Identity Stitching

While a user may use one browser on a particular device for all their work-related activities, they may use another device or browser for their personal tasks. User behavior differs between devices, browsers, and even the time of day. Your sites and applications generate data that you can use to derive valuable, detailed insights such as what users are more likely to do in their free time, what their search history looks like on their tablet, and so much more. Combining all of this information lets businesses get a complete picture of who the consumer is on more than one device.

By connecting different unique identifiers across platforms and devices in real-time, businesses can enable efficient targeting and personalization.


### Real-Time Identification of Users in Downstream Tools

Businesses often collect event data from multiple, disparate digital properties and stream that data to downstream tools. Identity resolution allows them to link together all the user IDs and the anonymous IDs - IDs assigned to a user before they login or if they don’t log in - across digital properties for a given user. This process involves combining a user’s device ID, offline ID, cookie information, etc., into a single anonymous identifier, allowing brands to identify unique users.

By leveraging the identity graph residing in a data warehouse, you can easily identify, aggregate, and unify customer profiles from various data silos.


### Building and Activating Segmented Audiences Inside the CDP

Identity resolution lets marketers de-duplicate unique users and also monitor their entire customer journey across all digital touchpoints. It also allows them to build behavior-based cohorts depending on the customer’s product interaction between user sessions and devices, as well as various real-time traits.

You can use these audiences for various downstream activation use-cases, such as analytics, spend optimization, targeted marketing, personalized messaging, cutting-edge customer support, and delivering unique customer experiences.


## Additional Benefits of Building Your Identity Graph on Your Data Warehouse

When you build your identity graph on a data warehouse, you get all the advantages of traditional identity resolution plus more.


### Easier, More Scalable Cross-Device Identity Stitching

In modern, digital businesses, the graph used for cross-device identity stitching can be quite large - consisting of tens or even hundreds of millions of nodes. This number keeps scaling rapidly as you gather more data across different touchpoints. In such a scenario, storing the identity graph on your data warehouse - and not on the CDP infrastructure - makes a lot of sense. Cloud data warehouses are infinitely scalable, and data storage is cheap.

RudderStack lets you achieve efficient and seamless identity mapping in your data warehouse. It does this by storing the graph on the warehouse as a table, associating a virtual ID with all the device IDs (user or anonymous ID), and mapping the association between them. It builds the identity graph for all of your event data and updates it continuously as new event data comes into your warehouse.


### Enrichment of Your Identity Graph with Data from Non-Event Tools

Apart from your customer event data, your warehouse also stores data from different non-event tools like CRM and customer support platforms, email marketing and advertising tools, analytics platforms, etc. 

An identity graph built on your warehouse can leverage all of this data to stitch together a more comprehensive, enriched user profile, giving you a more accurate and real-time view of your customers.

An enriched identity graph built on your warehouse also lets you build more effective user cohorts by bringing together information from various event and non-event tools - all in real-time.


### Creating a Unified Customer Profile

If your data warehouse is the single source of truth for your customers, it only makes sense to have your identity graph built on top of this warehoused data.

With RudderStack, you can build a customer identity graph that leverages your enriched warehoused data in real-time to provide a single, unified view of all your customers. It links identifiers such as device IDs, cookies, email addresses, IP addresses, etc., to a known or anonymous profile while following the required privacy-compliant methods.

You can then leverage this rich identity graph to enable identity resolution and get a complete, 360-degree view of your customers. You can also use the identity graph to implement other use-cases such as lead scoring, creating custom cohorts and audience segments for your personalization use cases, and much more.


## Try RudderStack Today

Start using a smarter customer data pipeline that builds your customer data lake on your data warehouse. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for RudderStack Cloud Free today.

[Sign Up](https://app.rudderlabs.com/signup?type=freetrial) (button style)

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
