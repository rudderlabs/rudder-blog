---
title: "Why IT Needs to own the CDP"
siteMetadescription: "The history of CDPs and logical argument on why IT and the engineers should own the implementation and management of the Customer Data Platform at any organization."

date: 2021-02-03T00:00:00+05:30

featureImg: ../assets/markdown/whyITshouldownCDP.png

category:

author: Eric Dodds

authorPic: ../assets/author/Eric-Dodds.png

authorPosition:

authorDescription: "Eric leads our Customer Success team and has a long history of helping companies architect customer data stacks and use their data to grow."

slug: "why-it-needs-to-own-the-cdp"
---

**CDP (Customer Data Platform)** has become a broad, confusing term in the world of software, but that hasn’t slowed down the adoption of tools claiming the label. 

In a [recent survey](http://customerexperiencematrix.blogspot.com/2020/09/when-cdps-fail-insights-from-cdp.html), 75 percent of respondents said they had already deployed a CDP, were in the process, or were planning on deployment in the next 12 months. VCs have poured over a billion dollars into new CDP startups while the legacy companies try to catch up by rebranding as CDPs to increase their valuations. 

CDPs, though, are primarily leveraged by marketing departments, which is why the term isn’t familiar to many IT organizations. IT may be brought in to discuss security issues or potential technical impacts, but they are rarely part of CDPs’ strategic conversation. 

The fact that IT isn’t a key voice in the CDP conversation is unfortunate. In my past experience, one of the primary reasons that many CDP projects don’t meet expectations or even fail completely. 

Despite mass adoption, CDPs aren’t a panacea for an organization’s customer data needs (though the marketing might make you think otherwise). The customer data conversation is much larger than a single software vendor. Furthermore, as we argued in a recent post on The New Stack, this requires technical discussions around the infrastructure and pipelines that connect the entire customer data stack. 

While we believe the most advanced companies build an owned CDP on top of their warehouse, there is a place for third-party CDP functionality in marketing as a component of the stack for many companies. 

In this post, we make the case that when the need for a CDP implementation does arise, IT organizations should not only be part of the conversation but should own the implementation and management. 


## Looking Back: Quick History on Customer Data Platforms and IT Organizations

_Note: if you want a full history of these trends, check out our post called [The Data Engineering Megatrend: A Brief History](https://rudderstack.com/blog/the-data-engineering-megatrend-a-brief-history)_.

To understand how this incredible demand for customer data platforms came about, it is helpful to think about customer data itself and how IT organizations have related to it. At a high level, any data associated with your customers is customer data. This concept predates the internet and even computers. 


### Digitization and On-Prem Beginnings

Prior to the age of computers, businesses used to keep a ledger book of all transactions, mostly for accounting purposes. With the advent of computers, the ledger was digitized and expanded with things like personalized loyalty programs at scale (where each customer was assigned a unique loyalty card). The transaction data was stored at an individual customer level and leveraged for use cases like mail-in coupons personalized based on one’s past product purchases or for retail shelf placement optimization (via market basket analysis of items that are commonly bought together). 

As companies went through this digitization process, IT was the team building and managing the technology and systems, which was all on-prem in the early days. Companies at scale achieved incredible results using systems from Oracle, IBM, and HP, along with ERP products like SAP. In this age, IT was the hero of the organization. 


### The Internet Changes Everything

When the Internet achieved critical mass in distribution and adoption, enabling world-changing business models like eCommerce, everything changed, especially the customer experience. 

Not only could you more easily track transactions, but because the experience was digital, you could also track all sorts of granular data points, from product searches to clicks to browsing behavior. That kind of data is a treasure trove for anyone trying to optimize the customer experience. 

Still though, even though tracking was technically possible, it was extremely complex and expensive to implement. The promise was real but out of reach for most companies. 


### Then SaaS and Cloud Change Everything Again

The internet also forced the “SaaS-ification” of business models and mass migration from on-prem to the cloud. Legacy systems from SAP, IBM, Oracle, and others not only became too costly in relation to new vendors, but they simply weren’t designed to handle the complexity and scale of the use cases demanded by businesses undergoing digital transformation. 

During this process, IT went from being the heroes of the organization, implementing and developing innovative technology, to overburdened teams desperately trying to catch up as organizations underwent seismic changes in digitization. From being business enablers, IT became known as business blockers and big cost centers. 

Business leaders impatient with IT fueled the SaaS and cloud movement. The VP of Sales didn’t have to wait a few years for IT to provision a clunky CRM; they could just swipe a credit card and get state of the art software from the cloud now. Every department, from marketing to sales to customer support to finance, was “SaaS-ified,” and for a good reason: these systems were state of the art, much cheaper than developing in house and much more stable. 


## Data Silos: The Dark Side of a SaaS-ified World

SaaS made life so great in so many ways, but there was a big problem from a customer data perspective: data silos. In the pre-SaaS days, all of the customer data lived in the company’s internal database. Transactional data lived in table A, and support ticket data was right next door in table B, which meant easily developing analytics and apps that used both sets of data. 

With SaaS, though, all of this data got locked into individual vendor ecosystems. Getting data in or out of those ecosystems was very hard. Many vendors lacked APIs, and ones that did provide them often weren’t easy to use because the data schema was messy, inflexible, or both. Specialized products (like cloud ETL/ELT vendors) were built to pull that data and get it into databases and warehouses, which was only useful for the analytics use case. Even simple applications for tasks like sending personalized emails based on purchase behavior became complex. Development involved multiple API calls and data pipelines, and even then, the execution was far from real-time. Think about how many times you’ve received a coupon after having purchased the product...this is still common today! 


### CDP to the Rescue? 

The pain marketers felt due to data silos helped birth the customer data platform and fuel the frenzy around it. CDP vendors promised that they would bring customer data from all of these SaaS systems into a single place. After this, they would give marketers the tools they needed to activate campaigns on different channels based on that data (think personalized email journeys, paid ad campaigns, etc.). 

Even better, these solutions were cloud SaaS tools, so marketers could bypass IT to avoid slowdowns. Marketing teams spent huge amounts of money to purchase and deploy CDPs. 

Still, though, customers continued to get ads and emails out of order and out of context. 

How did this happen? 


## The Disconnect Between CDPs and IT

Well, it turns out that the IT organizations that marketing wanted to bypass still controlled key business systems like mobile and web experiences, eCommerce applications, backend systems, and the databases that power all of those components. 

While IT couldn’t innovate inside of their companies as fast as venture-backed software startups, they were still responsible for huge amounts of technical infrastructure. They were also responsible for the core applications of the business. Most of these responsibilities were directly related to the customer experience, which of course is directly related to customer data. In many cases, this infrastructure was a mix of legacy tech and new cloud tech. 

The cloud CDP vendors were good at pulling data from other cloud applications, but they fell short when it came to interfacing with infrastructure. Infrastructure and core apps often live behind corporate firewalls and don’t require well-defined APIs. 

But the marketing teams went ahead and purchased the CDPs without getting IT involved, which was part of the whole CDP marketing pitch in the first place. And that’s where the problems started. 

First, even though CDPs were functionally powerful, they missed a key ingredient: integration with core infrastructure and apps. Second, when marketing did come to IT for critical data, like transactional data, IT rightly raised serious concerns about sending sensitive internal data to multiple third-party systems. 

And, of course, few people thought about what would happen when a team other than marketing wanted access to the data that lived within the CDP. What if support wanted to integrate CDP data into their processes and tech? In many cases, that wasn’t possible, so support purchased their solution. Rinse and repeat this for product and other teams, and you have a big data silo mess—a state many companies are still sorting through today. 


## And This is why IT Needs to Take Control

While marketing was following the CDP frenzy, IT was busy re-inventing every piece of tech in the organization, leveraging both SaaS and the cloud and, in many cases, inventing new technologies as cloud SaaS solutions (think about projects from Google, Netflix, Facebook, etc.). 

No longer a blocker, IT can now provision infinitely scalable infrastructure (compute and storage) on cloud providers like AWS, Google, and Azure. They can centralize all customer data in modern warehouses and lakes like Snowflake. From an integrations standpoint, IT can connect every tool in the stack, and even enable real-time use cases. 

When you look at all of those capabilities, they sound surprisingly similar to the marketing pitch that CDPs promised but couldn’t fully deliver. 

The reality is that the engagement features offered by most customer data platforms today are one piece of a much more complex and comprehensive customer data stack. IT owns this stack. Said another way, the larger data stack is the true customer data platform, not the CDP marketing uses to send customers messages. 

The most innovative companies are positioning IT (and specifically data engineering) to be a strategic partner with every other team across the organization. Together, they can achieve real innovation and competitive advantage, while businesses that keep IT in the wings will continue running on a treadmill powered by data silos.

Start building a better, warehouse-first customer data lake that delivers complete, unified data to every part of your marketing and analytics stack by signing up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today. Subscribe to our [blog](https://rudderstack.com/blog/), join [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open-source repos on GitHub, and follow us on our socials: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](http://dev.to/), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!

 
