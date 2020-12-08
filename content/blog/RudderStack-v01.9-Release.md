---
title: "RudderStack v0.1.9 Release"
date: 2020-05-06T00:00:00+05:30
featureImg: ../assets/Release-Notes-750x355.jpg
category: Product Announcements
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition: 
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "rudderstack-v0-1-9-release"
---
We are pleased to announce a new major release for [RudderStack](http://www.rudderstack.com). Make sure you check out our [Github Repository](https://github.com/rudderlabs/rudder-server) for our RudderStack v0.1.9 release.

RudderStack v0.1.9 release includes some new features as well as critical bug fixes. Overall, it focuses on the enhancement of already existing features for increased control and performance.

Integrations
------------

This release features one new integration, but it’s quite an important one. It is now possible to integrate with AWS Kinesis as a destination. This is a major update to our product and part of our commitment to support the whole data infrastructure of our customers on RudderStack. 

With the Kinesis integration, it is now possible to easily ingest events data that RudderStack collects and routes into your existing Kinesis infrastructure. In this way, you can enable your existing data infrastructure with event data from your customers. 

For more information on our new Kinesis integration, you can refer to the documentation [here](https://docs.rudderstack.com/destinations/amazon-kinesis).

We have done a lot of work to improve the stability and performance of our integrations, especially the data warehouses. The following are some of the most important new features in this regard:  

*   When RudderStack detects incompatible data types between the data warehouse tables and the incoming stream of events, it stores the new data in new, separate tables. In this way, the streams can continue delivering data while your data models remain intact.
*   You can now schedule loads into the data warehouses. This way, it is possible to have much better control over your data infrastructure and more predictable data payloads. 

This release also includes support for Azure object storage and Google Cloud storage for Snowflake staging. Our customers using Snowflake on any of these two cloud platforms can now enjoy better performance with reduced costs. 

Core Product
------------

We have released a number of features and enhancements to increase the reliability and performance of the core product.

We have started investing heavily in testing our code. As part of this release, we have introduced [Ginkgo](https://onsi.github.io/ginkgo/) for integration testing. Testing is crucial for a project like RudderStack as we integrate with a large number of different services. Our aim is to ensure that these integrations operate predictably.

We also introduced a **Live Destination Event Debugger**, where a user can debug the events that are flowing through RudderStack in real-time. Debugging streams of data that end up at different destinations is notoriously tricky. The real-time nature of the data makes it difficult to point out what and when it has happened. With the Debugger, it is now possible to view and debug live streams of events as they flow into your destinations.

Finally, this release includes features such as Heartbeat statistics and Stats telemetry to improve the monitoring of the infrastructure. They also allow for the collection of information that can help improve the product. You can disable Stats Telemetry through the project configuration files.  

Summary
-------

We are quite excited about this new RudderStack v0.1.9 release, as it includes several enhancements and new features that are a sign of a maturing product. Some bug fixes have also been released, with the most notable being a bug that could cause the router to crash together with fixes related to our support of Data Warehouses.   

The above are just some of the features and fixes that we are excited about; there are more included in this release. Please have a look at the complete release notes [here](https://github.com/rudderlabs/rudder-server/releases) for more information.  
If you have any questions, please join our community on [Discord](https://discordapp.com/invite/xNEdEGw), we will be happy to hear from you.