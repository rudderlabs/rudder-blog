---
title: "Part 1: The Evolution of Data Pipeline Architecture"
siteMetadescription: "This blog talks about ETL, ELT, and the history, present, and future of data pipelines. You will know the good and bad things about various data pipeline approaches."
date: 2021-03-24T00:00:00+05:30
featureImg: ../assets/markdown/evolutionofpipelinearchitecture.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "part-1-the-evolution-of-data-pipeline-architecture"
weight: 1
---
Data pipelines are the arteries of any modern data infrastructure. Their purpose is pretty simple: they are implemented and deployed to copy or move data from “System A” to “System B.”

To be a bit more formal (and abstract enough to justify our titles as engineers), a data pipeline is  a process responsible for replicating the state from “System A” to “System B.”

Some might consider the above definition incomplete or inaccurate, because traditionally in ETL, the state is not replicated. It can also change through the pipeline before it is stored at the destination. But the above definition of a data pipeline follows the ELT paradigm, where the pipeline is actually responsible for Extracting and Loading, and the state between the two systems remains intact.

In the context of traditional data infrastructure, “System A” is usually a system that captures or generates new data — like a cloud application or a database — and “System B” is a data warehouse or data lake.

Data pipelines were built because it was (and still is) super difficult to create a database system that can handle all of the possible workloads that we need. So, initially, data or ETL pipelines were created to copy data from OLTP (online transaction processing) database systems like PostgreSQL, to an OLAP (online analytical processing) system like Snowflake.

As computing moved more and more into the cloud, and SaaS became the new norm in how software is delivered, things got more complicated and interesting.

The systems that exist today and can generate valuable data have increased in number and complexity, in the following ways:



*   We still have OLTP databases that drive our applications, but now they live on the cloud, and the way we access them has changed.
*   OLAP still drives analytics in the form of data warehouses, but we are moving towards Cloud Data Platforms that are more open and support more use cases.
*   Streaming systems like Kafka and Kinesis have become an integral part of any modern data infrastructure architecture and for a good reason. Event Streaming and real-time inspection of data are becoming more important.
*   Finally, as cloud SaaS applications have been commoditized and turned into platforms, they have become an important source of data that every organization needs to access and consolidate.

In addition to the above complexity, we should also add the fact that it’s not enough anymore to just move data from the points of creation to a data warehouse. Data Pipelines today are built to also sync data from our analytical and processing storage, like the data warehouse and data lake, back to systems where actions can be taken.

Reality has changed a lot in the past two decades when it comes to the complexity of dealing with data — and this affects how data pipelines are architected. But before we see how we should build them today, let’s see how it was done up till now.


## Common Pipeline Architecture

My experience in building data pipelines started quite early in my life, but I really got into them when I built [Blendo](https://www.blendo.co/). At Blendo, our mission was to build data pipelines from cloud sources (mainly applications) to cloud data warehouses like Snowflake and BigQuery.

The way we built them was the following:

1. For each of the sources we wanted to pull data from, we mapped each entity to a table in the data warehouse.

An entity is every resource that is exposed through an API from the source cloud application. For example, Zendesk defines a resource called tickets. Which as you can imagine, represents the tickets we have created in our ticketing system.

All the tickets we can access through this resource will end up in a table named “tickets” on our data warehouse, where each attribute of the ticket resource will exist as a column of the “tickets” table.

2. The first time that we try to pull data from a source, we try to pull all the data that is available. For example, if we are building a pipeline with Zendesk as the source, at the end of the syncing process all the tickets should be visible in our data warehouse.

More importantly, the pipeline will keep some internal state where a timestamp representing the time the pipeline execution started will be stored.

This state will be persistent, so the pipeline can access it whenever it’s going to run again. Also, this state will be consistent, because if we mess it up we might end up with data loss or corrupted data.

3. In the future, we will always have access to the consistent state of the pipeline we described earlier. This state is called a checkpoint and we will use it to resume our pipeline and avoid syncing every piece of data again and again.

By using the checkpoint, we can check at the source what has been created or updated since the checkpoint was created, and sync only this data to the destination.

4. New data is appended to the tables in the data warehouse and updated data overwrites the old data. This is a very important design decision we made, as we will see in the second part of this series, and the one that we want to rethink.

5. Finally, we will be using some kind of scheduler to repeat the execution of the pipeline at predefined time intervals.


## The Good Things About This Approach

The above architecture was pretty successful and, as a high-level architecture of data pipelines, is used by most of the vendors out there — with some variations. It was successful for a few different reasons.



*   The destination, our data warehouse, was guaranteed to be synced to the latest state of the source. Of course, there was some latency, but the analyst knew that if everything went ok with the pipeline execution (and considering the lag of the latest checkpoint), that she would be working with an accurate and up-to-date state of the source data.
*   This fact simplified a lot of the analytics workloads and made it easy for the analyst to focus on the data. Also, if she was familiar with the source data, it was super easy for her to interpret the schema on the data warehouse, as it was almost identical to the original schema at the source.
*   By always updating the data to the latest state on the destination, we were optimizing the data warehouse for storage and processing. Thus reducing costs and query execution time.

In the past, this approach was important for data warehouses like Amazon Redshift, because resizing the data warehouse cluster was a pain and required substantial downtime for the data infrastructure.


## The Bad Things About This Approach ( Or the Opportunities for New Technology to be Built)

But everything in life is a trade-off and this is especially true for data infrastructure systems. So there were also some issues.

The biggest issue, and the most troubling one, was that changes to the data itself are also data — and, in some cases, are equally if not more important.

For example, consider a lead record on a CRM system. As salespeople interact with the lead, it moves from one stage to another of the sales pipeline. If we keep only the latest stage of the lead, it’s impossible to calculate the average time that leads remain in a pipeline stage.

Debugging and auditing of the data and the pipelines are almost impossible to perform. As we lose any historical information of how and when records change, it’s very hard to figure out when something goes wrong and for what reason.

As organizations mature, consequently their data infrastructure also matures, so these two functions become more and more important.

Finally, in a modern data infrastructure, you have to deal with both event and relational data. Events come naturally in a streaming nature and they behave like time-series data, where there’s no concept of state. How do you work with both types of data at the same time? They require different types of queries, with different complexity and in some cases even different storage technologies.

For example, dealing with time series data on Amazon Redshift was notoriously difficult. The proposed approach was to rotate tables that were emulating some type of time-based partitioning. You would access the data by time and when you had to do garbage collection, you would just drop the old table.


## What’s Next

As I was interacting with more customers at Blendo and today at [RudderStack](https://rudderstack.com/?utm_content=inline-mention), it became more and more clear that the bad things are actually opportunities to innovate and create a new type of data pipeline architecture.

As the market changes and becomes more demanding, and as technologies are maturing, new opportunities for rethinking our architectures arise.

In [Part 2](https://rudderstack.com/blog/part-2-the-evolution-of-data-pipeline-architecture), we go through the market and technology changes that allow us to redesign the architecture of data pipelines and how this new architecture will look.


## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!

This blog was originally published at The New Stack [here](https://thenewstack.io/part-1-the-evolution-of-data-pipeline-architecture/).
