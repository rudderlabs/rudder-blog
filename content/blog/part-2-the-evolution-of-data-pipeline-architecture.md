---
title: "Part 2: The Evolution of Data Pipeline Architecture"
siteMetadescription: "In this part of a two-part series blog, you will explore the second half of a data pipeline - ETL to ELT, complex processing, presenting reports, and gaining insights."
date: 2021-04-01T00:00:00+05:30
featureImg: ../assets/markdown/evolutionofdatapipelinept2.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "part-2-the-evolution-of-data-pipeline-architecture"
weight: 1
---

In [Part 1](https://rudderstack.com/blog/part-1-the-evolution-of-data-pipeline-architecture) of this series, we described a high-level architecture for building data pipelines that is commonly used in the industry today. In this post, we will go through a number of changes that have happened, both in the market and in terms of the technologies that are available. Considering these changes, we will propose a new architecture that addresses the issues we mentioned in part 1.


## A New Paradigm

Certain things occurred in the past five years that have created an environment where data pipelines can be re-invented.

There are three main changes that we are interested in.


## The Separation of Computing and Storage

I’m not sure if [Snowflake](https://www.snowflake.com/) was the first to come up with this paradigm, but they definitely are the company that managed to make it mainstream and convince the market of its value.

By separating computing from storage, some amazing things happened.



*   We can scale storage almost indefinitely. We do not worry anymore about the size of our cluster and the downtime of resizing. Also, the cost for storing our data is associated only with storing and is thus much lower.
*   We can also scale our processing while we access only the data we need. In this way, processing also scales while costs remain low.

The impact of the above is tremendous on how we deal with data. We do not have to worry about the data we store anymore, and we have the flexibility to perform complex transformations on huge amounts of historical data when — and only when — we need it.


## The Transformation of ETL to EL(T)

The separation of computing and storage in data warehouses had, as a consequence, some changes to how ETL (extract, transform, load) is perceived.

Smart people quickly identified that now we don’t have to implement complicated ETL pipelines, where heavy transformations are applied to the data. Instead, we can simplify a complex engineering mechanism by removing the transformation and offloading it to the data warehouse.

Why is this important?



*   ETL, although it might sound like copying data around, is not as simple of an engineering problem as it sounds. Especially if you want to do it at scale and in distributed environments. By removing processing from ETL, we can focus on building super resilient and consistent data pipelines and solve that problem once and for all.
*   Now it’s possible to create a single source of truth of our data and perform as many and as destructive transformations as we want without losing the original data. We can always go back and change everything again.

We have the original data and the resources to do it inexpensively and at scale.


## Data Platforms are More Expressive Than Ever

I’m sure you have heard of [DBT](https://www.getdbt.com/) (data build tool) and how data engineers and analysts love it. What about [Materialize](https://materialize.com/)?

These tools are only a few of a new set of tools that data engineers, analysts, and data scientists have access to today.

These tools are also a testament to what data platforms are becoming. Data platforms started with simple SQL query engines. That’s not the case anymore. They have matured and become complex processing engines capable of deploying and executing extremely complex processing logic by conforming to all the best practices that engineering has developed for delivering products and practices like versioning and testing.


## Putting All the Pieces of the Puzzle Together

All the above points are signaling that it’s time to rethink how we develop and implement data pipelines and, most importantly, how we want to manage the state that data pipelines are responsible for replicating.

The paradigm of keeping only the latest state of data should be abandoned, and we should instead follow something closer to a pattern known in software engineering as “Event Sourcing.”

By doing this, instead of replicating the state between the source system and the data warehouse or data lake, the pipeline stores a sequence or stream of state-changing events.

This is not a new concept in data warehousing. In data warehouse architectures, it was always understood that keeping track of how data changes is important. People who have experience in data warehouses will be aware of the term [Slowly Changing Dimension](https://www.oracle.com/webfolder/technetwork/tutorials/obe/db/10g/r2/owb/owb10gr2_gs/owb/lesson3/slowlychangingdimensions.htm) (SCD)_._

There are different SCD strategies that have been invented. What we were describing earlier as the first architecture of Data Pipelines is actually an example of a Type 1 SCD strategy. This particular strategy dictates that old data is overwritten by the new data.

If you ever had to work with Salesforce, you might be aware of a companion object called “History” that every Salesforce object comes with. This is another example of SCD in action. This time it’s type 4 SCD that we see in practice. We keep the main object where we overwrite old data with new, and at the same time we keep a history table with all the changes of records. In Salesforce, as in most cases, there’s also a retention period for the historical data after which we delete older data and keep only the new data.


## Small Changes with Big Impact

The architecture of data pipelines doesn’t have to change a lot, but these small changes simplify their logic and have a big impact on how we work with the data.

All we have to do is to remove the logic the data pipelines had to keep track of — what is on System B already — and update it with any updates that have been observed on System A.

In this way, the pipelines become even simpler, and as we saw with ETL to ELT, we can focus even more on their resilience and consistency. This approach can also reduce latency a lot, as the complicated logic of deduplicating the data does not have to exist anymore.

At the same time, the separation of computing and processing on the destination storage systems allows us to keep an indefinite sequence of changes that our data has gone through. If we are smart with how we process the data, we will probably never have to delete old data.

On top of this sequence of state-changing events, we can use tools like DBT and Materialize to reconstruct the current final state of our data or transform our data completely and build data applications on top of it.

If we want to implement different SDC strategies, now we can do it. We can even change the strategies we implement if we want to in the future without losing any data.

We don’t have to deal with two different data models anymore. Instead, now everything can be handled as a stream of events. We can use processing systems to always reconstruct the final state and have it always available, but at the same time, we can use streaming processing frameworks to add even more use cases that are supported by our data infrastructure.

Most importantly, now we have access to all the data we need at any point in time, and we can support all the possible use cases we have. Our data analysts and data scientists will always be happy, and we can support them at scale and with predictable costs.


## Final Thoughts

We can apply small changes to our software architectures that can have a tremendous impact on what we can do and how we can do it.

This is also the case with the Data Pipeline as one of the pillars of modern data infrastructure. Just changing how we replicate the state from one system to the other, we can have an amazing impact on the performance and the capabilities of the systems we design.

Of course, for this to happen, huge changes had to happen in the industry. As we saw, we wouldn’t be able to rethink our architecture so easily without some major changes in the way we store and process data.

Not everything is solved, though. The complexity of the sources of data we have to deal with is increasing, and although we have solutions for some of them (e.g., CDC for databases), how we can interact effectively with other systems, including cloud applications, is still a work in progress.

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!

This blog was originally published at The New Stack [here](https://thenewstack.io/part-2-the-evolution-of-data-pipeline-architecture/).
