---
title: "Why you Don’t Want a Customer Data Platform"
siteMetadescription: "Know everything about CDPs and the problems they solve. Also, know in which cases you should not go for a Customer Data Platform."

date: 2021-02-05T00:00:00+05:30

featureImg: ../assets/markdown/noCDP.png

category:

author: Gavin Johnson

authorPic: ../assets/author/Gavin-Johnson.png

authorPosition:

authorDescription: "Product Marketer at RudderStack. Ex-PMM at New Relic & AT&T. Ex-consultant at Deloitte. Ex-sys admin. (Sometimes) Ex-developer."

slug: "why-you-dont-want-a-customer-data-platform"
weight: 
---
It’s been almost a year since Segment and a group of their partners declared that [CRM is not enough](https://segment.com/crm-is-not-enough/). We agree with their assessment that you have to go far beyond CRM to connect the disparate channels through which Sales, Support, Marketing, and Product engage your customers. 

We also agree with the three market forces that drove their declaration: 

1) the demand for interoperability of customer tools; 

2) the resistance to vendor lock-in; and 

3) the preference for software that enables better customer experiences.

What we don’t agree with is the claim that you need a customer data platform (CDP) in addition to your CRM.

You don’t actually want a CDP; and here’s why...


## What is a CDP?

CDPs promise to do almost everything, depending on the vendor and their inclination towards exaggeration. However, these exaggerations and the “art of the possible” sold as reality don’t define what CDPs actually do.

The most widely accepted definition for a CDP comes from the [CDP Institute](https://www.cdpinstitute.org/). “A Customer Data Platform is packaged software that creates a persistent, unified customer database that is accessible to other systems.” The three cornerstones of this definition are:



*   **A CDP must be packaged software.** They are prebuilt systems that require less technical expertise to deploy and maintain than a standalone data warehouse project.
*   **A CDP must create a persistent, unified customer database.** Customer data is ingested from multiple systems and linked to create a comprehensive view of each customer that is stored and can be analyzed over time.
*   **A CDP must be accessible to other systems.** Customer data stored in a CDP needs to be accessible by other systems for analysis and activation.

The CDP Institute’s definition is primarily concerned with the technical aspects of a CDP. In use, CDPs are marketing tools and a less technical definition can tell us more about what a CDP is supposed to do. In this vein, [Gartner](https://www.gartner.com/smarterwithgartner/marketers-to-guide-customer-data-platforms/) gives a good definition of a CDP:

“_A CDP is a marketing system that unifies a company’s customer data from marketing and other channel_s”

Gartner also notes that CDPs overlap with many other related technologies, as we saw in the introduction. There is an overlap with CRMs and increasingly there’s a big overlap with data infrastructure technologies — like a data warehouse.

Having said that, what CDPs are _not_ is platforms. This is probably one of the reasons for the confusion around the term and the value of these products.

By [definition](https://en.wikipedia.org/wiki/Platform_as_a_service), a platform is a technology that allows customers to develop, run, and manage applications. 

Based on the above definition, a CDP is more of a piece of software — marketing software specifically — than a platform. And that’s totally fine, but using the term platform adds to the confusion around the purpose of these tools.  


### What Problems do CDPs Solve?

The [primary function](https://www.gartner.com/smarterwithgartner/marketers-to-guide-customer-data-platforms/) of a CDP is to enable customer modeling and optimize the timing and targeting of messaging and offers. 

To deliver that, it is important for a CDP to be able to consolidate customer data into one place, create customer profiles and finally create some kind of persistent concept of identity around the customers. 

To do the above, the primary technical problem that CDPs solve is identity resolution. You’ve probably seen tons of names for this — they vary based on the CDP. Frequently it will involve the term “customer 360,” a term so overused and loaded that just seeing it raises red flags about the utility of the software for us.

Once you get past all of the naming shenanigans, identity resolution is a pretty straightforward idea that is incredibly difficult to execute. CDPs ingest data from multiple disparate customer tools, convert it into a standardized form, and build an identity graph from it. This identity graph lets your applications identify customers in real-time and activate based on customer attributes that are either collected by your CDP or produced from some form of analysis.

This all sounds simple, except that building an identity graph is quite difficult. There are numerous methods and algorithmic approaches to building an identity graph, with the effectiveness of each being highly dependent on its implementation and the context of the data it is applied to. CDPs obscure this difficulty, which is nice for users, but it also obscures the effectiveness of their identity resolution. Is a CDP’s identity resolution approach good? It’s difficult to know.

Nearly all of the other CDP use cases are derived from identity resolution. Segmentation, personalization, recommendations, campaign optimization, etc. — these all rely on identity resolution. Having a unified customer profile that your customer tools can access gives you the ability to solve a lot of problems. There are use cases that don’t necessarily involve identity resolution, like sessionization and customer journey mapping, but most CDPs don’t support them.


## That all Sounds Really Great. So… Why Don’t I Want a CDP?

If a CDP resolves your customers’ identities, unifies your customer data, and helps solve a bunch of important, difficult customer experience problems, it seems like you’d want one. All of these promises CDPs make are why they have become a hot commodity.

However...CDPs suffer from a variety of problems, many of which are familiar to anyone in the[ data infrastructure industry](http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf). It makes sense, because at the end of the day a CDP has to solve many of the same problems a data warehouse is also traditionally trying to solve. Consolidating data, offering analytics, interoperating with other technologies — all of these are functions shared between the two. So, it’s not surprising that they also share some of the problems.


### Product Cost

A recurring complaint with CDPs is that they are too expensive. They are so expensive that companies frequently have to evaluate whether they should build their own solution, instead of buying a solution from a vendor. This isn’t a decision that should even be on the table. When was the last time you heard of somebody considering building their own CRM because there were no reasonable alternatives? How about marketing automation software? It doesn’t happen, because the difficulty and expense of building your own CRM or marketing automation solution would far outweigh the cost of paying a vendor for their solution. That isn’t the case for CDPs, very simply because CDPs are way too expensive.


### Total Cost of Ownership

Apart from the cost of the product itself, CDP users have to double the storage costs — since data has to be replicated to the CDP. This might be included in the price of the CDP; but still, keeping multiple copies of effectively the same data adds unnecessary cost. Include also the cost of building and operating ETL processes to ingest the data into the CDP, and the total cost of ownership increases even more.


### Data Lock-in

Data ownership defines who has control over data security, data access, and data privacy. Using a CDP lessens your ownership in a few ways, but most drastically in the area of data security. Since CDPs build and store your customer data warehouse in their infrastructure, you don’t have visibility and control over all accesses to your data — which means you can’t ensure data security. Third-party vendors are arguably the biggest risk to data security that companies have. If your vendor is storing your customer data and they have a security breach, you have a security breach too. You just can’t do anything about it. Your data is one of your biggest assets, so you should have total control and ownership over it.


### Data Staleness and Reliability

Is the data in the CDP accurate and up-to-date? How often can you sync the data into your CDP? Maintaining state accurately between different systems is a hard problem. By adding yet another data consumer (the CDP) to your overall data infrastructure, it just makes things even more complicated. So, you are either going to compromise the quality of your data — something that will cost you in terms of the effectiveness of your marketing campaigns — or you will invest money to ensure that your data infrastructure will reliably deliver the SLAs that your marketing teams need. In both cases, the total cost of ownership will increase.


### Limited to Vendor-Defined Problems

Some older, traditional CDPs provide tools to execute Marketing and Sales activities, like email campaigns and digital personalization. These solutions are limited to only solving the problems that they’ve built functionality for. If you step outside of their functional wheelhouse, effectively using your customer data will be a challenge. 

Modern CDPs, like Segment, don’t provide tools to execute Marketing and Sales activities. Instead they provide connections to best-of-breed tools for execution. These solutions are less limited in function than traditional CDPs, but they are still limited to which insights are derived and can be activated on. You can’t just build a model on your customer data, you are limited to the models they provide and run on your data in a black box. So while a feature like Segment’s Personas provides useful, powerful audiences that are easy to use, you can’t go much beyond it. If instead of activating based off of an audience, you wanted to activate based off of sessionized data or customer journey maps, then you’re out of luck.


### Lack of Advanced Analytics

The bread and butter of a CDP is to offer methods for segmenting your customers based on behavioral characteristics. From a data analytics perspective, these methodologies and queries are pretty simple. For this reason it’s also possible to offer very intuitive user interfaces to define user segments. We are living in an era of ML and AI though. The value of simple queries and intuitive interfaces, while very high for human users, is very low for these technologies. How can these new technologies be incorporated into your CDP? Again, this is not a problem unique to CDPs. Vendors like Snowflake and Google are augmenting their data warehouse solutions with ML algorithms that can be executed over your datasets and enrich your data inside the data warehouse. 


## A CDP Should be an Application Built on top of Your Existing Data Infrastructure.

A CDP is not a platform, but the best way to implement one is by building it on top of your existing data infrastructure or data platform — as a data application. 

The problems that CDPs have, plus several other issues CDP users run into frequently, are caused by CDPs trying to reimplement a complete data infrastructure to deliver their value. If a CDP didn’t store your customer data, your costs would be lower; you wouldn’t have to add the vendor’s security to your list of security concerns and you wouldn’t be limited to only solving the problems that the vendor defines.

Given the power of today’s modern cloud data warehouses, the solution is obvious. Your customer data warehouse and your identity graph should be built and stored on your data warehouse — not a CDP vendor’s. Then you can control your costs, improve your data security, and expand the problem set your data scientists can solve for.


## Instead of a CDP, you Need Smarter Customer Data Pipelines.

You need a tool that will make it easy to ingest customer data, route data to downstream customer tools, and build your customer data warehouse and identity graph on your data warehouse. You don’t need a platform. You need a pipeline — a pipeline that is designed for customer data, and that can automatically build your customer data warehouse and identity graph.

[RudderStack](https://rudderstack.com/) is the smart customer data pipeline. It is warehouse-first. It builds your customer data warehouse and your identity graph in your data warehouse, giving you complete control over your customer data. With RudderStack, you can easily build pipelines that connect your whole customer data stack and then make them smarter by ingesting and activating enriched data from your warehouse.

The warehouse-first approach eliminates the problems that CDP users frequently face. It solves the use cases associated with a CDP and enables many more that CDPs don’t address, all while being significantly more cost-effective, secure and accessible by other tools. Warehouse-first is a simple approach, but it’s a good one and one that we think will power the future of customer data tooling and analysis.



## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!

This blog was originally published at The New Stack [here](https://thenewstack.io/why-you-dont-want-a-customer-data-platform).
