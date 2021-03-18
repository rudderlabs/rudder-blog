---
title: "Acquiring Data from Data Warehouse: An Overview"
siteMetadescription: "Basics to acquiring data from data warehouse and various steps involved in acquiring data from the warehouse."
date: 2021-03-18T00:00:00+05:30
featureImg: ../assets/markdown/acquiringdatafromdatawarehouse.png
category:
author: Savia Lobo
authorPic: ../assets/author/Savia-Lobo.png
authorPosition:
authorDescription: "Savia Lobo is a Content Writer at RudderStack. She is a techie at heart and loves to stay up to date with tech happenings across the globe. If she is not writing or reading, you will find her singing and composing songs."
slug: "acquiring-data-from-data-warehouse-an-overview"
weight: 
---

A data warehouse organizes and stores operational enterprise-wide data. Typically, a data warehouse is a mix of older ‘legacy’ application systems yet unintegrated. In this article, we will look into a typical data warehouse structure, the information stored in it, and the tools that enable users to both access and retrieve data from it. 
 
To make the best of a data warehouse, users first need to understand the importance of developing excellent 'communication’ skills with such a wealth of information.  
 
The information within a Data warehouse is usually accessed using an SQL query. The **SELECT** statement is in charge of querying the variety of tables and returning the previously requested results in a data warehouse environment. 


## Data Warehouse Structure

Data warehouses have a unique structure featuring former and recent data and various levels of specified vantage points and summary aspects.  
 
**A data warehouse serves as storage for four types of data as follows:**


### Older Detail Data 

Older detail data combines earlier used data, as old as five or ten years, or longer.  
This is a mass volume of data, typically stored on tape or similar mass storage options.  
However, expensive disk storage may also be used in older data.


### Current Detail Data

Current detail data consists of recently used data and, unlike older detail data, this one always comes with a shorter period. Even though it can be voluminous, current data is mostly stored on disks, thus granting faster access.


### Lightly Summarized data

Lightly summarized data uses data refined from _Current detail data_. This type always resides on a disk and is summarized per a certain unit of time.


### Highly Summarized Data 

This data presents information outsourced from _Lightly summarized data_. In this case, the data is disk-stored and compacted, making it easily accessible.

The last aspect of data warehouses is **metadata**, which can be best described as data about data. Metadata provides information about the data warehouse structure and its many algorithms used in data summarizations.


## Data Warehouse Administration

Tuning and administering data warehouse activities is many times necessary for improving both its performance and availability.  
 
Indexing makes a solid example of data administration, given the growing index numbers typically assigned to data, particularly in higher summarization levels, far better performing than low-level data.  
 
Generally, this is the result of the total data volume seen in lower levels.  
 
Assigning indexes at lower levels is simply not that much desirable. Processes such as those used in indexing operations often demand broader resources in low-level details, particularly when compared to high-level data summarization.   
 
Most times, data administration activities are reserved for high-level data summarization.  
 
As a result, lower-level detail data is usually left intact. 


## Getting Data Out of the Warehouse 

Users should simply request and examine data within the system as soon as the warehouse is set up.  
 
To optimize queries, users should put their focus on the six following subjects:


### #1 Tuning a Complex Query 

This section should cover the query run time, reduce the table size, and simplify joins.   
 
While the latter might lack accuracy, it comes quite handy in terms of the task duration.


### #2 Using an Execution Plan 

This plan should consist of a graphical representation of the many steps involved in the database tables fetching results. The two types of execution plans include **Estimated Execution Plan** and **Actual Execution Plan**.

### #3 Simplifying Join Mechanisms 

Further work will be much easier if users first make joins less complicated by reducing excess volumes of data.

### #4 Understand Disk / Memory / Io Usage Considerations

The standard volume within a data warehouse is I/O focused and features operations such as mass data loads, index builds, and developing queries and materialization of greater data amounts. 


### #5 Using Parallelism 

Parallelism will facilitate and accelerate the work by enabling several people to manage the same task simultaneously.


### #6 Writing Hierarchical Queries 

This one is self-explanatory and to the point. 


## Conclusion

Learning how to communicate smoothly and effortlessly with a data warehouse will bring huge business prospects and a variety of useful information for your enterprise.  
 
The SQL procedure offers a powerful and comprehensive set of tools indispensable to data retrieving as a whole.  
 
Overall, mastering this technological art will simplify your engagement while alleviating tasks and aiding users to experience a wide array of business benefits.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) group to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
