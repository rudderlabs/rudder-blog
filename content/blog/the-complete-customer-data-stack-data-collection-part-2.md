---
title: "The Complete Customer Data Stack: Data Collection (Part 2)"
siteMetadescription: "Tackle problems while building data infrastructure for your organization - what data you are going collect, from where, and how to do it"
date: 2021-03-01T00:00:00+05:30
featureImg: ../assets/markdown/completestackdatacollection2.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "the-complete-customer-data-stack-data-collection-part-2"
weight: 1
---

## Relational Data and Beyond


[In part one](https://rudderstack.com/blog/the-complete-customer-data-stack-data-collection-part-1), we talked about the importance of taking a holistic view of both data and infrastructure when building a data stack. We highlighted the essential role that categories play in this holistic view, and we detailed the first of two major sources of data, event data. 

In this post, we’ll cover the other major source of data, relational data. We’ll outline how to collect relational data from both cloud applications and databases, and we’ll note two other lesser but still important sources of data.


## Relational Data

This is another big category of data that we almost always have to work with. The whole concept of ELT has been invented because of our need to work with such data. Traditionally this data comes from RDBMS systems, but with the rise of the Cloud, there are also new types of sources that expose similarly structured data, mainly Cloud Applications. Let’s see some characteristics of Relational Data and how they differ from Streaming Data:



*   They change frequently.
*   They usually don’t come in crazy volumes, although it might happen.
*   They have high dimensionality.

Relational data, regardless if it comes from cloud apps or databases, changes very frequently. It also can be deleted, something that we didn’t have to deal with streaming data, and that’s a huge difference in ensuring the consistency of your datasets. Think, for example, of an eCommerce basket; the customer, while buying something, might add and remove items many times. If we want to keep track of the basket on our data infra, we have to keep track of these changes. 

Most of the time, relational data does not come in the same volume as clickstream data. This is especially true for Cloud Applications; after all, even if you have millions of customers on your CRM, we just have to deal with millions of rows, not billions, as in the case of clickstream data. This is not that true with RDBMS, though, there we have larger volumes but still lower than clickstream data in most cases.

The final important characteristic, which is also a huge difference compared to streaming data, is dimensionality. CRMs can easily have hundreds of tables, while most cloud apps and databases have at least tens of tables. All these tables are related, and this adds a lot to the complexity of the data and the infrastructure that we need to work with such data.


## How to Collect Data from Cloud Applications

Cloud applications have quickly become overabundant. Today, almost every company is using Cloud applications for their operations. CRMs, Marketing platforms, Customer Success tools, all these applications are delivered on the Cloud.

What makes Cloud Applications different from RDBMS is that they are capturing a lot of important data, but we don’t own their backend infrastructure, so we can’t get just ETL data from their databases. 

In most cases, we can access the data through a REST API, while some of them might expose a mechanism for bulk exports.

The issue with the APIs is that they haven’t been designed and built for interacting with data. Their main purpose is to support applications. That means that interacting with them usually involves small quantities of data, and in the case where you want to pull a lot of data, a lot of latency is added. This means that from all the different categories of data we are dealing with, this is the slower of the data sources. Syncing data from them might literally take days for even relatively small amounts of data. Finally, add to all the above the strict rate limits that every vendor out there imposes on their APIs, and you can start understanding how slow of a process this is to access your cloud app data.

Another issue that is commonly found when collecting data from Cloud Applications is errors. Many different networks and backends are involved in the overall system when you interact with a cloud app. This means errors and network failures are inevitable. Add to this the fact that API errors are not well documented in most cases, and soon you will realize that you need a data collecting system with first-class error handling to pull data out from these systems.

Finally, a major difficulty with Cloud Apps is dealing with deletions. In the best-case scenario, the app is implementing soft deletes that you can sync to your data infrastructure. In the worst-case scenario, hard deletes are allowed. In this case, there’s no trivial and efficient way to deal with them.

The above are two of the important things that you have to keep in mind when you build or look to get a tool that will pull data out of cloud applications.

Having said that, most of the systems for collecting data from cloud applications are built with two main components:



1. A scheduler who is responsible for scheduling and orchestrating the execution of data collection jobs. These jobs are inherently batch processing jobs. 
2. A number of connectors, one for each cloud data source that we want to pull data from, which is responsible for connecting to the source and pulling the data out of it. 

Another important aspect of a cloud data collecting system is a way to maintain a global state that will be used for implementing delta syncs. You really need a way to pull only new and updated data from cloud sources. Otherwise, soon, you will end up with never-ending syncing jobs.


## How to Collect Data from Databases

RDBMS systems are one of the most important components of every software system out there. They are the systems that allow us to handle the state of our software and persist it for using it in the future. As these systems contain valuable and unique to our business data, we need to collect it and consistently store it on our data infrastructure. 

RDBMS systems have the benefit of living on our own infrastructure. That gives us the ability to have tighter integration with them and more control over the process. 

The risk with RDBMS systems, though, is that these systems are usually very critical. The last thing that you want to do is to make your production database non-responsive because you messed up with the queries you executed. There are ways to mitigate the risks, though, as we will see.

The first way to collect data from an RDBMS system is by connecting on it and executing queries that will return the data we want to store on our data infrastructure. These queries are usually pretty simple, one select query per table where we might also filter some columns. What might complicate these queries more is if we want to collect only updated data, then as in the case of Cloud Apps, our ETL tool needs to maintain some state to keep track of the last time records were synced and make sure it will continue from that point. 

This approach has a number of disadvantages.



*   It puts stress on your databases as the queries get more complicated and the responses longer.
*   Deletions are hard to deal with.

You can follow a few strategies to avoid extra stress to your database. The first and most obvious one is to perform your collection tasks during times that you know the database load is low. 

Another way of dealing with that and probably the most efficient one is to maintain a replica of the main database and execute collection jobs only on that database. In this way, even if something goes wrong, the only database affected will be the replica. The problem with this approach is that it adds complexity to the infrastructure and its management.

Deletions, on the other hand, are still hard to deal with, just as in the case of Cloud Apps. Soft deletes are probably a good strategy but not very efficient for the production database.

There’s another method for collecting data from databases which is becoming more and more popular. This method is based on the concept of **Change Data Capture (CDC)**. The way it works is by having your data collection application attaching to the replication log of your database. 

The purpose of this replication log is to allow replicas to follow the leader. To do that, the leader is maintaining a log with a series of commands that, when followed, the final state on the replica will be exactly the same with the leader. 

We can exploit this mechanism for collecting data from our database and store it into our data infrastructure for archiving and further analysis.

The good thing with this approach is that the stress we add to the database is minimal. Another benefit is that now we can also deal with deletions very effectively. The leader will just tell us when and what to delete, and we will just do it. 

The main issue with CDC is that working with the replication log might be complicated while its structure is not standardized among different databases. Each RDBMS pretty much follows its own architecture of a replication log. This fact also adds many edge cases that we have to take care of that probably are not that well documented as replication logs are quite esoteric tools that were never built as an interface to interact with external processes. 

Finally, as we are not dealing with the state but with commands that alter state, it might be more difficult to work with destinations that do not expose a typical RDBMS interface, for example, when the data has to be stored to S3 or Kafka. 

Regardless of the difficulties of implementing CDC, it’s probably the future when it comes to collecting data from RDBMS systems, so make sure to watch this space and its vendors closely.


## The Rest of the Data

We covered the most important sources of data that we have to deal with. There are plenty of other types of data that are generated, and we might want to work with it in one or another way. Data like log files can be consumed for cybersecurity purposes, and telemetry data from our infrastructure is also important. Nevertheless, these types of data are usually consumed in different ways than the data we talked about earlier and using different tools. So we won’t focus on these now.

There are a couple of other sources that are also important, though, with the following two being probably the most commonly found ones.


## Spreadsheets

These are very common types of data that every company generates. There’s also an important use case where sheets are super important - offline data. Think of data that has to be collected manually for whatever reason. The easiest way to work with it is by using sheets.

Sheets are easy to work with, though. Their volume is extremely low, they change very slowly, and their dimensionality is also low. Because of these characteristics, we can easily work with them; we can, for example, just drop a table where we store a sheet and pull all the data again every time we want to collect the data, without any major performance penalty. 

The mechanism that we’ll use to collect spreadsheet data is usually something similar to what we would do with Cloud Apps. Actually, a very common way of working with them is to store them as Google Sheets and pull them from the cloud as we would with any other cloud application.


## Cloud Object Storage

Services like S3 and Google Cloud Storage. More and more data is stored there, either because we want to build a data lake or because it’s convenient to share data using these services. 

The complexity with these services is that in the end, they are just filesystems, which means that any kind of file can be stored there. So the main issue when dealing with them is data serialization.

The good thing is that storing data on Cloud Object Storage services is becoming more and more standardized. With technologies like Apache Parquet, Apache Arrow, ORC, and Iceberg, there are efficient ways to store data on them while adding functionality like schema support. 

Today dealing with these sources is mainly a concern after the initial collection of data, but my feeling is that we will be working with them more and more in the near future. 

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!