---
title: "RudderStack’s Licensing Explained"
siteMetadescription: "Six simple steps to send your event data from RudderStack from any source to any destination of your choice to gain business insights using customer data analytics."
date: 2021-02-23T00:00:00+05:30
featureImg: ../assets/markdown/rudderstacklicensing.png
category:
author: Gavin Johnson
authorPic: ../assets/author/Gavin-Johnson.png
authorPosition:
authorDescription: "Product Marketer at RudderStack. Ex-PMM at New Relic & AT&T. Ex-consultant at Deloitte. Ex-sys admin. (Sometimes) Ex-developer."
slug: "RudderStacks-licensing-explained"
weight: 1
---
Software licensing can be a tricky subject, especially when you are a commercial company building an open-source product like RudderStack.

We want to build RudderStack into a strong company, and we keep some of our features under our enterprise license to help with that. We also want to build the best product and distribute it in the most effective fashion, and that is under an open source license. We have to balance which parts of our software should be under our enterprise license and which should be under open source licenses.

From a customer’s viewpoint, we see how this could be confusing. In this post, we’ll explain how our software is licensed.


## Open Source


### [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

The core of RudderStack - the components that make up our Event Stream feature - is open source. It is in our [rudder-server](https://github.com/rudderlabs/rudder-server) repository.

We are the only open source customer event streaming software available (at least that we’ve been able to find). We have more than 2,000 stars on GitHub and approximately 300 open source users.

A simplified explanation of the AGPL-3.0 license is that you can use and modify rudder-server however you want, but if you distribute it in any way - including offering it as SaaS - you have to make all of the source code for the derivative software available under the AGPL-3.0 license.

The AGPL-3.0 license provides us the most protection against competition while still being open source. That’s the reason we have our core functionality, **rudder-server**, under it.


### [The MIT License](https://opensource.org/licenses/MIT)

A majority of RudderStack’s third-party destination integrations live in the [rudder-transformer](https://github.com/rudderlabs/rudder-transformer) repository. They are open source as well, licensed under the MIT License.

Almost all of our SDKs and instrumentation repos for tooling and utilities are open source too. We also have some of our data modeling repos - for use-cases like customer journey analysis and sessionization for data residing in your data warehouse - open sourced under the MIT license. You can find all these repos in our[ GitHub organization](https://github.com/rudderlabs).

A simplified explanation of the MIT License is that you can do whatever you want with the source code - including distributing and commercializing it - as long as you include the original copyright and license in any copy of the derivative software that you distribute.

The MIT License provides us very little protection from competition, but it allows a lot of flexibility and freedom for the developers using our code. That’s the reason we have our non-core functionality - things that _would not_ make sense for us to distribute or commercialize on their own - under it.

**Note: We have a few repositories that are forked from other repos and are under their licenses. Most are under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) license, but there are a few under various other licenses based on where they are forked from.**


## Enterprise License

All of our Pro and Enterprise features are under our enterprise license. The source code for this software isn’t publicly available and is a closed source, but any of our Enterprise customers that request it are given access to these repositories. So, even though our enterprise license is a closed source license, the repositories are code available for all our Enterprise customers.

Features licensed under our enterprise license include:



*   Warehouse Actions
*   Cloud Extract
*   Transformations
*   Event Replay
*   **SSO (Single Sign-On)**

A simplified explanation of our enterprise license is that you can only use the software under it as we specify. You can only use it in your RudderStack instance and only if you are an Enterprise customer. If you build anything on top of it or spin up your own instance, you cannot distribute or commercialize it and are not allowed to use it if you aren’t an Enterprise customer.

Our enterprise license provides us the highest level of protection from competition, but we try our best to keep our software transparent and the source code easy to access by making it source available to Enterprise customers. That’s the reason we have our core, differentiated functionality - things that _would_ make a lot of sense to distribute or commercialize on their own - under it.


## Licensing Can be Confusing. We Hope This Helped.

Hopefully, this post helps clarify RudderStack’s licensing. Open core products like ours frequently end up with complicated licensing that changes over time. We’re trying to avoid that by being intentional with how we license our software components and limiting the number of licenses we use, so customers and contributors don’t have to deal with that complexity. 

If better licensing options are available in the future, we will consider changing to them. As of today, this licensing configuration is the best we have found for our software and our business, and we will hopefully stick with it for a long time. 


## Try RudderStack Today

Start using a smarter customer data pipeline that builds your customer data lake on your data warehouse. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
