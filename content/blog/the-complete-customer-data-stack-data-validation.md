---
title: "The complete customer data stack: data validation"
siteMetadescription: "
In this post we’ll identify common challenges to data validation, and we’ll show you how RudderStack can make it a smooth step in your workflow. "
date: 2021-05-17T00:00:00+05:30
featureImg: ../assets/markdown/completestackdatavalidation.png
category:
author: Siva Shanmukh
authorPic: ../assets/author/Shanmukh.jpg
authorPosition:
authorDescription: "Technical Lead at RudderStack"
slug: "the-complete-customer-data-stack-data-validation"
weight: 1
---

## Dealing with messy customer data 

If you work with customer data, you know it’s messy. Not only are there many sources of the data (mobile, web, etc.), but as products grow and develop, customer data changes. While progress is good for the business, it creates unique challenges for the engineers responsible for delivering clean data to downstream teams and systems. 

When dirty data makes its way downstream, it wreaks havoc. Customers get the wrong emails, and marketing reports break. In 2017, [Gartner research](https://www.gartner.com/smarterwithgartner/how-to-create-a-business-case-for-data-quality-improvement/) determined that dirty data was responsible for annual losses of $15 million, and that number certainly hasn’t gone down since. 

The data engineer’s role is critical, but data validation is a hard problem, especially in the context of an increasingly complex data stack.

In this post we’ll identify common challenges to data validation, and we’ll show you how RudderStack can make it a smooth step in your workflow. 


## Breaking down the challenge   


### Changes to the predefined schema in event data

 
Data engineers must make sure the event data sent from all different components, platforms, and softwares that contribute to a single event model conform to a predefined schema. This ensures everything works as expected downstream. 

Often the analytics and data science teams who consume the data are expected to define this schema. Typically, they’ll maintain it using spreadsheets. They’ll share these spreadsheets with both data engineers and the developers who instrument the code for the event stream. 

That workflow is fine for simple, small-scale projects, but fast-growing or large companies have to deal with more complexity. Inevitably, decisions get made that produce data which doesn’t conform to the schema. Consider these scenarios:



*   **The business acquires another company.** The new companies schema for customer data is different, but sales, marketing and support still need the data in their tools ASAP. Often there simply isn’t enough time to re-work the entire validation workflow. 
*   **Marketing implements a new tool without involving data engineering**. Suddenly, the pipes are sending ‘invalid’ data that, in reality, is critical to a downstream team. 


### Sacrificing completeness for compatibility

If all event data lived in every downstream tool, it would simplify many things for data engineers. But in the real world every destination is different, and many downstream tools won’t accept every part of the payload. 

This means dealing with tradeoffs. Often you’ll have to drop properties or traits from a payload, or modify them, to successfully send them to a particular downstream destination. 

One major consideration here is preserving the original payload. In many scenarios, you’ll want to keep a copy of the original payload to refer back to as the ‘source of truth’ instead of looking to the version of the truth as interpreted by a downstream tool. 


### Identifying why dirty data doesn’t conform and fixing root issues

Perhaps the most challenging part of data validation is understanding why and how your data got dirty, then fixing the issue at its root. 

You need a mechanism for capturing dirty data, a schema-less store/dead-letter queue, that allows you to access and analyze it. Ideally, you’ll also leverage an alerting system to help you avoid pile ups. Because when data problems occur and events start to pile up, downstream consequences get worse and clean up time increases. 


## RudderStack’s APIs make data validation easier

We collaborated closely with our customers to build two APIs that make data validation easier. 

The first is our Data Governance API. It enables detailed observation of every schema passing through the pipeline. Soon, we’ll also release features that allow you to define schemas, validate events, and block or drop non-conforming payloads. 

Second is our Transformations API. It makes modifying payloads for downstream systems as simple as writing a JavaScript function. 

Both APIs are designed to fit into your existing CI/CD workflow and leverage git. Let’s dig into the details. 


### Data Governance API

RudderStack provides you different schema versions observed against each event model you pump through the system. We compute the event-schema of each event that passes through, and we compile them in a structured way that you can access through our[ Data Governance API](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api)<span style="text-decoration:underline;">.</span>

Whenever any of the problems mentioned above arise for a given event-model, a new schema version is generated along with various insights such as:



*   Total count against each schema 
*    A few sample events captured with the schema
*   Common values and their frequencies

This allows you to quickly identify issues and helps you make meta-data driven decisions.


#### For Example

Whenever there is a change in the name of your event_model, a new event model is generated and is available through the[ Event Models API](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api#schemas-event-models).

With the same name of your event_model, if you end up using a different case for a column from two different sources of instrumentation, a new schema version is generated and is available through the[ Event Versions API](https://docs.rudderstack.com/rudderstack-api-spec/rudderstack-data-governance-api#schemas-event-versions). 

_Pro tip: Set up an alert or a cron to report/track any new event-models or schema-versions observed by RudderStack by polling the Data Governance API, so you can stay on top of data changes observed. \
 
_Want to get all of your dataplanes' schema versions in one place to find out how many versions are currently active? Check out the [Rudderstack Schema Compare Sheet](https://github.com/isvictorious/rudderstack_master)_ _from [David Cook](https://github.com/davecook88). _ \
 
_For more on how the Data Governance API makes data validation easier, read our [deep dive here](https://rudderstack.com/blog/rudderstacks-data-governance-api).  


## Transformations API

RudderStack’s Transformations feature allows you to leverage custom JavaScript functions to transform events into a destination-specific format. With the Transformations API, you can perform various operations on your transformations via HTTP API calls. Use it to:



*   Version control your transformations, 
*   Store them in an org-wide sandbox before publishing,
*   Leverage Transformation libraries – modular, reusable JavaScript blocks which you can use in transformations, and
*   Check for successful compilation and execution of new transformations.

For more details on the Transformations API, read our [deep dive here](https://rudderstack.com/blog/rudderstacks-transformations-api). 


## Sign up for free and start sending data

Test out our event stream, ELT and reverse-ETL pipelines. Use our HTTP source to send data in less than 5 minutes, or install one of our 12 SDKs in your website or app.[ Get started](https://app.rudderlabs.com/signup?type=freetrial).
