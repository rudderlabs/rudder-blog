---
title: "RudderStack JavaScript SDK Enhancements: Beacon Support"
siteMetadescription: "This post will talk about our latest enhancement to the JavaScript SDK - adding Beacon support making it more efficient, fast, and easy to use."
date: 2021-03-26T00:00:00+05:30
featureImg: ../assets/markdown/javascriptenhancementsbeacon.png
category:
author: Sayan Mitra
authorPic: ../assets/author/Sayan.jpg
authorPosition:
authorDescription: "Software Engineer in the Integration and SDK team at RudderStack. Developing client and server side SDKs for a living."
slug: "rudderstack-javascript-sdk-enhancements-beacon-support"
weight: 1
---

The [RudderStack Javascript SDK](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk), at its core, is built to provide guaranteed delivery of events. The main challenges around this are tracking event data on the server and network failure, page unloads, etc. This post will talk about our latest enhancement to the JS SDK - adding Beacon support making it more efficient, fast, and easy to use. 


## Different Mechanisms we Use to Mitigate Challenges Around Tracking Event Data

Until recently, we were only supporting sending event data to the server using `XMLHttpRequest` with a persistent queue. Whenever the SDK receives an event, it offloads it to the queue and returns immediately. The queue keeps on pulling event data and sends it to the server using `XMLHttpRequest`.

To keep in sync with other popular event tracking tags out there, we enhanced our SDK to support sending event data using the browser[ Beacon API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon). We have now added support for sending the event payload using `navigator.sendBeacon` browser utility, which asynchronously sends a small amount of data over HTTP to the RudderStack server.


## Pros and Cons of Using Beacon API


### Pros

1. With all the benefits it has over fetch and `XMLHttpRequest`, like being a more performant, Beacon queue to process sending events when the browser is less busy, etc.

2. Our SDK is sending event data as JSON, which allowed CORS optimization on the Beacon's part.

3. Lesser instrumentation code compared to other event sending mechanisms, leading to less compile time for the SDK. We wanted to drop our persistent queue further to reduce the SDK size further, but we are still using it due to the below-mentioned limitation; we can call it the wrapper queue. 


### Cons

1. Failed event retries are not possible with a Beacon request as it doesn't support getting the response code.

2. Beacon requests have a size limit.

3. The Beacon queue can get full (related to point 2 above). We wanted our SDK to support sending events for this scenario. When we failed to push event data to the Beacon queue, we kept our persistent queue to retry, pushing such failed events to the Beacon queue. Once some events are being sent to the server, Beacon can accept more events. This is required for sites that track more events/sec through our SDK than Beacon can dequeue.

Pushing events to the Beacon queue is faster compared to the **XHR instrumentation**. You may see some performance improvements in the JavaScript SDK. 

The Beacon requests are optimized because the browser waits until the CPU load is lower or until the network is free before making the actual requests. This can lead to better website performance.

Read more about other JavaScript SDK enhancements in our [documentation](https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/javascript-sdk-enhancements#why-use-sendbeacon-to-send-your-event-payload).


## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
