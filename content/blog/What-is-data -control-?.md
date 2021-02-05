---
title: "What is Data Control?"
siteMetadescription:  The RudderStack offers vital information on Data control. They explain having authority over data. Along with the access aperture & security+privacy control.
date: 2020-12-31T00:00:00+05:30
featureImg: ../assets/markdown/rudderstack-blog-data-control-data-privacy-data-access.jpg
category: 
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "what-is-data-control"
weight: 1000
---



The concept of having “control over your customer data” has become a big topic in the last few years. We also covered it briefly in one of our [blogs](https://rudderstack.com/blog/rudderstack-it-is-time-to-take-back-control-of-your-data) in the past. Companies are increasingly discussing this often at the C-suite and board levels. 

Entire companies have been built on the value proposition of data control. But what exactly does it mean to have control over your data?  

As per the Thesaurus, _to have control_ (over anything) means _to have power over._ But what is having power over data? In this post, we argue that there are three aspects to having power or “authority” over data:   having full access to the data (access aperture), ensuring data security (security control), and data privacy (privacy control).  

To illustrate our point, we consider a concrete example of a company storing its customer data  (specifically, clickstream data from their app) in four different locations  1) Google Analytics, 2) Snowflake, 3) AWS S3, and 4) their own data center. We illustrate how each of these provides different levels of access, security, and privacy controls. 


## Data Access Aperture

Data access aperture defines the various methods you can use to access and work with your data. 

Consider the first three examples of data storage above: Google Analytics, Snowflake, S3.  In all these cases, the user stores the data to a cloud provider, but the level of control you have over _how you interact with the data_ varies significantly. 

The data stored in Google Analytics is only accessible through dashboards that Google provides. So, you are out of luck if you want something outside of the reporting they offer you. You won’t have access to something you might typically achieve with a custom SQL query (unless you want to pay Google a ridiculous amount of money for a dump of the data). 

When you store the data in a Snowflake warehouse, you can interact with it via complex SQL. As a result, you can leverage the unlimited computing power of a modern warehouse for advanced analysis. On the other hand, if you want to run a Spark job, you’re are out of luck (or more accurately, it would be relatively inefficient and costly to achieve via Snowflake).

In this example, S3 provides the _widest aperture of access_. Not only can you connect S3 to BI tools (like Tableau or Looker) and build analyses in SQL, but you can also load the data into Spark or your applications. 

This example also makes it clear that exposure of the data to other users and systems is, on some level, a function of access aperture: the wider the aperture, the higher the functionality around exposing the data. 

Data access control also defines how much control a company has over data portability. Asked another way, can they take their data elsewhere, to a different storage or SaaS system? S3 provides the highest portability support - you can easily move data from S3 to, say, Google Cloud by just paying the network transfer cost. At the other extreme, Google Analytics does not provide direct access to the raw event stream data.


## Security Control

To have **security control** means having visibility and control over ALL access to the data.

Security is a crucial aspect of data control, as evidenced by repeated headlines about data breaches in the past few years.

By storing the data in any cloud provider, whether it’s a SaaS application like Google Analytics or an Infrastructure SaaS like S3, you give up some security control level since you are limited to access control policies supported by the tools housing your data. For example, Google Analytics only supports user-based access, while S3 supports both user-based and IAM based access. Furthermore, you have to trust the cloud providers to implement those policies correctly.  

On the other hand, companies can set up arbitrary security control policies when storing the data in their own data center. How effectively they can enforce those controls is a different matter altogether. The compliance of the policies depends on the sophistication and bandwidth of their IT security teams.

Every company should think about what data they entrust to third-party SaaS vendors to ensure they have confidence in their security practices. The more comprehensive and critical the data is, the more stringent should be the security practices.

Data security control needs vary by industry and company. For example, a consumer gaming startup doesn’t collect much PII on their users and likely has a small user base, meaning they remain secure without significant effort. On the other hand, a big bank or a healthcare company might not even be comfortable storing data with a cloud provider like AWS. 


## Privacy Control

The relationship between aperture and exposure necessitates the third aspect of data control: data privacy control. Specifically, this relates to _for what do you use the data_. While there is a close relationship between this control vs. data security control (which defines who has access to the data), there is a well-defined distinction. Security control manages who has access to the data. In contrast, privacy control concerns for what you use the data and whether or not that usage meets the end user’s expectation of privacy and/or complies with legal standards (i.e., GDPR, CCPA, etc.).

Using the same example above with Google Analytics, Snowflake, and S3, all are cloud providers, so technically, someone inside those companies has access to your raw data, but what they can potentially do (or are already doing) with the data varies a lot. 

For example, at least some employees at Google can likely look at the same charts and reports you have set up in your account (the system automatically generates them from the clickstream data). More likely than not, Google uses that data to create a user profile and use it for marketing purposes. The fact that the user anonymizes the data before sending it to Google doesn’t help much if the end-user is logged into some Google property (Gmail, etc.) - Google can still target the users with cookies. (Cookie targeting is being addressed by many platforms, per Apple’s recent announcements, but won’t ever fully go away.)

In the case of Snowflake and S3, their employees probably have some level of access to your raw data, but for them to make sense of clickstream data, there would need to be some reverse engineering to understand event semantics, etc. Furthermore, they don’t have any way of tying data across customers and creating a user profile similar to Google. Also, in S3, you can store the data encrypted, which would make it even harder for someone inside of AWS to reverse engineer—they would need to understand your app, get the keys, and then make sense of the data. 

This spectrum highlights the challenge of balancing aperture and exposure. It’s clear that from a vendor standpoint, S3 provides far more data privacy control than Google Analytics. Every business’s practical challenge is that teams across the organization need tooling that requires data to do their jobs and improve the business. (It’s worth noting that there are an increasing number of options for ‘fully owned’ analytics and data tooling.)


## Conclusion

When companies consider data control as a topic, they tend to focus on one or two of the aspects mentioned above, depending on their industry, stage, and even company culture. 

At a bank, the security control aspect is paramount. At a fast-growing consumer startup with a sophisticated data science team, achieving more systems exposure is critical. 

Data privacy control has become an exciting topic over the last few years. While heavily influenced by industry regulations, there is significant growth in the number of developers passionate about full protection of customer data, refusing to send any data to vendors like Google. This awareness also comes from company culture—several of our customers at [RudderStack](http://www.rudderstack.com) have strict customer data requirements staying within their VPCs. 

There is no prescription for data control that fits every company. Differing needs, beliefs, and regulations dictate placing differing levels of emphasis on each of the three aspects of data control. It is the job of data leadership (and the data engineers who work with them) to navigate and manage this complexity. And, of course, we’re happy to be building RudderStack with these teams in mind, so our customers can simplify this complexity and confidently control their data across all three aspects.

Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack by signing up for[ RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today. Join our[ Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open-source repos on[ GitHub](https://github.com/rudderlabs), and follow us on our socials:[ Twitter](https://twitter.com/RudderStack),[ LinkedIn](https://www.linkedin.com/company/rudderlabs/),[ dev.to](https://dev.to/rudderstack),[ Medium](https://rudderstack.medium.com/),[ YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
