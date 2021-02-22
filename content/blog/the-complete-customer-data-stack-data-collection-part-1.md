---
title: "The Complete Customer Data Stack: Data Collection (Part 1)"
siteMetadescription: "Tackle problems while building data infrastructure for your organization - what data you are going collect, from where, and how to do it"
date: 2021-02-22T00:00:00+05:30
featureImg: ../assets/markdown/thecompletecustomerdatastack.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "the-complete-customer-data-stack-data-collection-part-1"
weight:1
---

# The Importance of Categories

Even the best possible data stack is completely useless without data. For this reason, the first problem we always face when building data infrastructure is what data we are going to be collecting, from where, and how we should do it. 

Of course, there are also other things we should keep in mind while trying to figure out the data we will be working with. For example, what kind of delivery semantics we need or how we will be processing the data later on.

In the end, the data we will be working with and the infrastructure we will be using are just different sides of the same coin. For this reason, we should always try to have a holistic view of both the data and the infrastructure.

But let’s start with the basics and build a practical taxonomy of the different data that can cover most use cases for most companies.

The data we will be working with can be categorized into a small set of categories, as we will see. Depending on the category, we need different infrastructure, and we can support different business objectives. This post will cover the first major category, event data, and how to collect it. In part two, we’ll cover relation data and note a few other commonly used sources of data. 


# Event Data

In this category, we are dealing mainly with clickstream data. We need the right infrastructure to capture, route, and deliver the data to various destinations. In most cases, this data represents some kind of behavior, with the most common one being customer behavior. 

Characteristics of event data:



*   Event data do not get updated.
*   Usually, they are coming in high volumes and velocity.
*   Relatively low dimensionality.
*   They share many characteristics with time-series data.

Event data is not immutable, and they can change but mainly by adding dimensions to the data or correcting something that went wrong during the capturing process. They rarely change, though, especially if we compare them with the rows of an OLTP database. 

This data is also coming in high volumes and velocity. It’s not uncommon for even moderately large companies to handle billions of events per month, especially in the B2C space. 

The dimensionality of the event data is also low. Most of this data can be represented in a database using one table, and their attributes are in most cases measured in the 10s. 

Finally, time is an important dimension of this data; that’s why they are sharing many characteristics with time-series data. Actually, they are multidimensional time-series data. 


## How to Collect Event Data

When it comes to event data, it’s all about streaming. You need infrastructure that can deal with streams of data in a reliable and scalable way.

You need reliability and high availability because when dealing with capturing data, it’s easy to end up with data loss. Networks tend to break, especially when you are collecting data from mobile devices. The infrastructure has to be built with reliability and high availability, starting from the point where the data is captured and ending with delivering the data to the final destination.

The good thing with event data, though, is that a small data loss is not going to kill you; customer behavioral data is not P&L report entries.

Working with event data starts at the point where they are captured. This usually happens by using some kind of SDK, which can be incorporated into your web app, mobile app, or website. Then you use the SDK to generate an event every time an action happens and enrich it with useful metadata, for example, who triggered the event. 

After the event is captured by the SDK, it will be pushed into the data infrastructure. The SDK needs to take care of any failures while respecting the resources of the host, e.g., you don’t want the SDK to blow up the CPU or memory of a mobile device. Keep in mind that guaranteeing that there will be zero data loss is impossible. For example, a mobile app has to push data to the infrastructure, the network is down, and the user decides to kill the app. 

After the data is delivered to the data infrastructure, it’s usually received into a queuing system that can maintain the ordering of the events. This is important, especially if the events drive some kind of behavior. This is the reason why systems like Kafka have very well-defined ordering semantics. 

After the event data is queued in such a system, they can be processed in a streaming fashion. In this case, it’s ideal to have a queuing system that can sustain high throughput, as these applications are usually real-time. 

Finally, the data can also be stored for batch processing or archiving.  


## Part Two

We’ll cover the other big, commonly used category of data, relational data, in our next post. We’ll outline how to collect it, and we’ll also briefly describe two other common sources of data. 

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, explore our open source repos on [GitHub](https://github.com/rudderlabs), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
