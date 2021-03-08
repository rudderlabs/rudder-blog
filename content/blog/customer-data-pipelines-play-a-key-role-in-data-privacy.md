---
title: "Customer Data Pipelines Play a Key Role in Data Privacy"
siteMetadescription: "How your customer data pipeline can help improve your data privacy and how to ensure your data privacy with RudderStack."
date: 2021-03-08T00:00:00+05:30
featureImg: ../assets/markdown//roleofcustomerdatapipeline.png
category:
author: Gavin Johnson
authorPic: ../assets/author/Gavin-Johnson.png
authorPosition:
authorDescription: "Product Marketer at RudderStack. Ex-PMM at New Relic & AT&T. Ex-consultant at Deloitte. Ex-sys admin. (Sometimes) Ex-developer."
slug: "customer-data-pipelines-play-a-key-role-in-data-privacy"
weight: 1
---



Customer data pipelines play a critical role in the privacy of your customer data. They are one of the primary and most expansive collectors of your customers’ personally identifiable information (PII). They are also one of the most expansive sharers of customer data - with one of the primary use cases being event streaming to frequently large libraries of destination integrations.

Due to their specialized role of collecting and sharing customer data, customer data pipelines can either help ensure your data privacy or wreak havoc on it.

In this post, we’ll explain how your customer data pipeline can help improve your data privacy and how to ensure your data privacy with [RudderStack](https://rudderstack.com/).


## Data Privacy vs. Data Security

To remove one common vector of confusion before we launch into this post, we want to make sure the difference between data privacy and data security is clear.

**Data privacy** - the focus of this post - is about what data is collected, stored, and for how long it is retained; and what customer data is shared. _What customer data are you collecting and storing, and how are you using that data?_

**Data security** is about how collected data is protected - where data is stored, who has access, whether data is encrypted, etc. _How are you keeping the customer data you store safe?_


## Your Customer Data Pipeline can Improve Your Data Privacy

Your customer data pipeline can give you fine-grained control over what data you are sending to which tools and what data you are storing. This can help you avoid data privacy issues before they ever occur.

The three processes below are designed to help you ensure that your customer data stays private. You can implement all of them with a robust customer data pipeline tool like RudderStack.


### Data Masking

Data masking is taking fields in your event data and obfuscating them. This is most frequently used to hide PII. Your customer data pipeline can mask your PII before it is ever sent to a destination or stored in your warehouse.

For example, if your event payload includes the following attributes...

`gist:Veenap/57f3de5b2567a07249c5fa2b929e61f8`


One level of data masking would remove the directly identifiable PII, like SSN and email address.



`gist:Veenap/5bda1a12fc089c6293e95aa391345ae3`


Another, more stringent level of data masking would remove all unnecessary attributes. Since most of the attributes in this payload are identifiers in one way or another, only the global identifier and event type would be unmasked.



`gist:Veenap/d34503bb4aaa9a2624e2491aa73a8510`



### Attribute Removal

Similar to data masking, attribute removal is selectively removing attributes from your event data. Not every application you send event data to needs all of the customer data you collect in your events. Attribute removal can be used to remove PII or to remove unnecessary customer data and reduce payload.

Using the same event example, if you wanted to activate that data by having it trigger an email send in your email/marketing automation tool, you would remove the unnecessary attributes for sending an email - userId and userSSN.



`gist:Veenap/bb4f61db0f01647cdcbc6e46b09796bc`




### Event Filtering

Not all of the tools you event stream to need every type of event. Event filtering is the process of removing events from an event stream based on filtering criteria. This ensures that only the events you want to activate on are ever shared with the tools that you activate in. So you don’t overshare your customer data with tools that only use a small portion of it.

Using the same event example, if you filtered to where `eventType = "newsletter-sign-up"`, the sample event would be included. If you filtered to where `eventType != "newsletter-sign-up"`, the sample event would be excluded.


## RudderStack Transformations Keeps Your Customer Data Private

RudderStack Transformations allows you to transform your event data in-flight - after collection, before delivery. Transformations are reusable functions - written in JavaScript - that can be applied to the data in your event streams prior to delivery to a destination tool or your data warehouse.

With RudderStack Transformations, you can implement all three of the data privacy processes detailed above, plus any other type of data transformation you can code in JavaScript. Transformations are applied on a destination-by-destination basis, so you can implement specific privacy processes for each tool you use and your data warehouse - only sharing the exact customer data you need to share. And they are reusable, so it’s easy to apply the same transformation to multiple destinations. Write it once and apply it everywhere.

We maintain an [open source repository](https://github.com/rudderlabs/sample-user-transformers) of Transformations templates that implement a wide variety of data transformations - from data masking, attribute removal, and event filtering to event enrichment. The JavaScript code for individual transformations is stored in this repo. You can copy it, edit it to work with your data, and paste it into RudderStack Transformations. 



*   [Data masking template](https://github.com/rudderlabs/sample-user-transformers/blob/master/PIIUserTransformation.js)
*   [Attribute removal template](https://github.com/rudderlabs/sample-user-transformers/blob/master/CleanWarehouseEventsUserTransformation.js)
*   [Event filtering template](https://github.com/rudderlabs/sample-user-transformers/blob/master/EmailDomainBasedFilteringNameSplitCampaignParameterUpdate.js)

_If you want more details about how to use RudderStack Transformations, read our [step-by-step guide on adding custom Transformations](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack)._

_If you want more details about how to mask PII with RudderStack Transformations, read our blog post [Protect Personally Identifiable Information (PII) in Your Apps Using RudderStack](https://rudderstack.com/blog/protect-personally-identifiable-information-pii-using-rudderstack)._


## Try RudderStack Today

Start using a smarter customer data pipeline that builds your customer data lake on your data warehouse. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for RudderStack Cloud Free today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!



