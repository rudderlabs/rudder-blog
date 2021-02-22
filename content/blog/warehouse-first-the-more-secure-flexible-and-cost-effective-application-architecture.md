---
title: "Warehouse-First, the More Secure, Flexible, and Cost-Effective Application Architecture"
siteMetadescription: "Know what is warehouse-first architecture, how it works, and whether warehouse-first is the way to go for your data stack."

date: 2021-02-16T00:00:00+05:30

featureImg: ../assets/markdown/warehousefirstblog.png

category:

author: Gavin Johnson

authorPic: ../assets/author/Gavin-Johnson.png

authorPosition:

authorDescription: "Product Marketer at RudderStack. Ex-PMM at New Relic & AT&T. Ex-consultant at Deloitte. Ex-sys admin. (Sometimes) Ex-developer."

slug: "warehouse-first-the-more-secure-flexible-and-cost-effective-application-architecture"
weight: 8
---

Last year may well have been the year of the cloud data warehouse (CDW). Snowflake had the [biggest software IPO ever](https://www.cnn.com/2020/09/16/investing/snowflake-ipo/index.html) (at the time) and a [blistering growth rate](https://www.cnbc.com/2020/12/02/snowflake-snow-earnings-q3-2021.html) to go with it. It became a household name in IT and tech. This year looks to continue that trend, with [Databricks raising $1B in funding at a $28B valuation](https://www.cnbc.com/2020/12/02/snowflake-snow-earnings-q3-2021.html) already. CDWs have become a huge, growing business.

A cohort of applications built on top of CDWs has risen from this huge, growing business. This trend was included as one of the most impactful ideas of 2020 in [Kleiner Perkins’ A 2020 Perspective](https://www.kleinerperkins.com/perspectives/a-2020-perspective/). Applications such as [Observe](https://www.observeinc.com/blog/welcome-to-observe/) use Snowflake to process all of their data and as their central data store, driving down the cost of storage to “[little more than the cost of Amazon S3](https://www.observeinc.com/blog/welcome-to-observe/).”

In part one of this two-part series, we’ll define warehouse-first architecture and its benefits. Next month our Friends at Message Gears will publish part two, diving deeper into warehouse-first applications.


## What is the Warehouse-First Architecture?

Building on top of Snowflake is certainly something we will see more of, but a new crop of modern cloud companies is taking it a step further and enabling _their customers_ to build on top of _their own_ CDWs and data lakes. 

At Rudderstack, we take the warehouse-first approach, building your customer data lake on your data warehouse, but the architecture’s value applies across the data stack. For example, our friends at [Panther](https://runpanther.io/), who build SIEM tooling for cloud-focused security teams, use the warehouse-first approach in the security space. On the other end of the spectrum, [MessageGears](https://messagegears.com/) is a customer marketing platform that is warehouse-first, running on their customers’ CDWs. 

This is the warehouse-first architecture: instead of providing (and charging) for storage infrastructure and running features in black boxes, warehouse-first tools are architected to build the data lake in the _user’s_ CDW. 


## What are the Benefits of Warehouse-First Software?

Warehouse-first may seem like a minor difference in the way applications operate compared to the traditional model where SaaS providers store their customers’ data in their own (often proprietary) databases, but the implications are huge. 


### Improved Data Control

The data lake that warehouse-first applications build and operate on top of is stored in their customers’ data warehouses. So, if you use warehouse-first tools, you don’t have to rely on the vendor to protect your sensitive data. It’s in your data warehouse, and you have control of its security and privacy. 

Additionally, you don’t have to deal with black boxes that use your data in ways you can’t access. Identity resolution is a great example: 3rd-party vendors make assumptions about how to resolve identities using a copy of your data that they store. If your use case doesn’t match their assumptions, you won’t get as much value out of the tool. With warehouse-first tools, though, you can see _and modify_ functionality around things like the identity graph because it lives on your owned CDW. 


### Increased Flexibility with no Duplicated Data

Many customers want the flexibility to use the data from data-intensive applications for analysis and activation in other tools. This flexibility isn’t possible with traditional vendors because most don’t allow direct access to their data lake. So if you want to perform analysis on your data or enrich it and use it for activation in another tool, you have to export it to your data warehouse first. This data duplication is expensive, inefficient, and unnecessary.

Warehouse-first applications give you this flexibility without requiring you to duplicate your data. The data lakes these applications build are already in your warehouse. So you can analyze your data, enrich it, and connect it to other tools without any data duplication.

From a pipeline management standpoint, you don’t have to create and manage infrastructure whose only purpose is moving data from a proprietary vendor database to your CDW—it’s already there and ready to use. 


### Lower Costs

Since warehouse-first applications don’t store their customer’s data, they can’t charge for it. This has resulted in significantly lower pricing compared to traditional vendors.

You have to pay a bill to your CDW; however, as your data is in your warehouse, you know how much you’re storing and its costs. This means you can make your own decisions on data retention and more accurately forecast expenses.

The resulting cost savings are substantial. At RudderStack, customers frequently tell us they save up to 66% when compared to Segment!


## Choose Warehouse-First Applications

Data silos and inflated bills from vendors of data-intensive applications are an artifact of design decisions made before CDWs were a viable option for their data lakes. Engineering teams had to build their own data stores, but that isn’t the case anymore. The capabilities and low cost of CDWs make them the perfect foundation to build modern applications.

That’s why you should search for and choose warehouse-first applications. It’s a modern design decision based on modern technology that makes applications more secure, flexible, and cost-effective.


Check back next month for more on warehouse-first architecture from our friends at [MessageGears](https://messagegears.com/). They’ll take the baton and elaborate on the results you can drive by adopting warehouse-first applications.


## Try RudderStack Today

Start using a smarter customer data pipeline that builds your customer data lake on your data warehouse. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join us on [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, explore our open source repos on<span style="text-decoration:underline;"> [GitHub](https://github.com/rudderlabs)</span>, subscribe to [our blog](https://rudderstack.com/blog/), and follow us on our socials: [Twitter](https://twitter.com/RudderStack)<span style="text-decoration:underline;">, [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/)</span>, [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
