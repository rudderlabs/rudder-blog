---
title: "RudderStack Releases Support For Customer.io, Slack, Webhooks, and Azure Event Hubs"
siteMetadescription:
date: 2020-06-12T00:00:00+05:30
featureImg: ../assets/12rs.blog_-750x355.png
category: Product Announcements
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition: 
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "rudderstack-releases-support-for-customer-io-slack-webhooks-and-azure-event-hubs"
weight: 1000
---
RudderStack is proud to announce its support for a new source – [Customer.io](https://rudderstack.com/sources/customerio/), as well as 3 new destinations namely [Slack](https://rudderstack.com/integration/slack/), [Webhooks](https://rudderstack.com/integration/webhooks/), and [Azure Event Hubs](https://rudderstack.com/integration/azure-event-hubs/).

While RudderStack already supports Customer.io as a [destination](https://rudderstack.com/integration/customerio/), we decided to add additional support for it as a source – where events captured by Customer.io are sent directly to RudderStack. You can then forward these events to your desired analytics destinations for useful insights.

RudderStack now also supports sending real-time customer event data to new destination platforms like Slack, Azure Event Hubs, and your configured webhook endpoints. This gives you complete flexibility and control over your event data. You get to choose the preferred analytics destination or event processing platform of your choice.

We encourage you to try these integrations and [contact us](https://rudderstack.com/contact/) in case you have any questions, feedback, or issues to report. You can also start a conversation on these integrations on our [Discord](https://discordapp.com/invite/xNEdEGw) channel. We will love to talk to you.

**Why we decided to support these integrations**
------------------------------------------------

One of the key promises of RudderStack is the seamless, reliable delivery of events from the specified sources to your preferred destinations.

Slack is a popular customer messaging platform used by many businesses today. Sending real-time event data to Slack has numerous advantages, and thus was a key integration for us. [Webhooks](https://developer.github.com/webhooks/), on the other hand, enable real-time communication and avoid constant polling by the client-side application. User-defined HTTP callbacks let your application know whenever an event occurs, in real-time. A webhook is essentially a URL endpoint. Thus, we decided to support it as it offers scalability and reliability to the API integration.

[Azure Event Hubs](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-about) is a popular Microsoft platform for Big Data streaming and event ingestion. As RudderStack specializes in routing customer event data securely, this is an important integration for us. You can now set up event hubs for Kafka and use your Kafka applications to communicate with the event hubs without the need to manage or configure your Kafka clusters. Thus, you can ingest, store, or buffer your event data streams in real-time and use them to get actionable insights.

**What’s next?**
----------------

RudderStack is an [open-source product](https://rudderstack.com/blog/rudderstack-an-open-source-customer-data-infrastructure-podcast-with-soumyadeb-mitra/). We are committed to developing a vast array of supported integrations to ease your day-to-day work. We are working diligently to add more destinations such as Lotame, Heap.io as well as PostgreSQL as a warehouse destination.  
Please check our [website](/) and the [GitHub](https://github.com/rudderlabs/rudder-server) repository to learn more about RudderStack.

You can also join [Discord](https://discordapp.com/invite/xNEdEGw) and start a conversation about these newly released integrations. If you want to get up and running with them, give our [platform a try](https://app.rudderlabs.com/signup) or browse through our [documentation](https://docs.rudderstack.com/destinations).