---
title: "RudderStack Supports Segment as a Source Integration"
date: 2020-12-09T00:00:00+05:30
featureImg: ../assets/markdown/releasesupportsegment.blog.rs.png
category: 
author: Savia Lobo
authorPic: ../assets/author/Savia-Lobo.png
authorPosition: 
authorDescription: "Content Writer at RudderStack. Techie at heart and loves to stay up to date with tech happenings across the globe. Loves singing and composing songs."
slug: "rudderstack-supports-segment-as-a-source-integration"
---

RudderStack proudly announces a great addition to our Source[ integrations](https://rudderstack.com/integration/)<span style="text-decoration:underline;"> </span>- Segment. Segment is a popular **Customer Data Platform (CDP)**.  Businesses use Segment to capture and send their customer event data to different destinations for further analytics.


## **Why did we Build Segment as a Source?**

Many of our customers migrate from Segment to RudderStack and our goal is to make the transition as seamless as possible. With Segment as a Source you can: 



*   Maintain data flows throughout the entire transition with no interruption or data loss
*   Easily execute a step-by-step migration, source by source, sequentially turning off Segment sources that have been transitioned to RudderStack instrumentation
*   Maximize dev resources throughout the migration, focusing them on RudderStack SDK installation, not managing multiple streams of the same data

In other organizations, one team may want to leverage Segment for a particular use case (most commonly marketing), but the data engineering team manages the customer data pipeline and infrastructure via RudderStack. It allows engineers to ingest marketing data from Segment with a few simple clicks. 


## **How Does it Work?**


### **Segment API Compatibility**

RudderStack is Segment API compatible. So, if you are using Segment, you can simply point your data streams to RudderStack’s Segment webhook and everything will work, from cloud destinations to schemas in your data warehouse. 


## **How do our Customers use it?**

Here are a few common use cases for Segment as a Source: 

**Executing step-by-step migration plans to avoid data loss**. In this use case, all Segment sources are pointed to RudderStack only, which routes to end destinations, then, as RudderStack SDKs are implemented, the Segment source for that data is turned off. 

**Managing migration with multiple legacy app versions**. With Segment as a Source, customers migrating users across multiple app versions can maintain data flows from old app versions as part of a larger app update strategy, ensuring every install still sends data. 


## **Setting up Segment as a Source in RudderStack**

You can easily[ set up Segment as a Source](https://docs.rudderstack.com/sources/segment#getting-started) in RudderStack using the following steps:



*   From your[ RudderStack dashboard](https://app.rudderstack.com/signup?type=freetrial), click on Add Source. Select Segment from the list of sources. 
*   Enter the name of your source, click on **Next** and save your source.
*   Head over to your[ Segment Dashboard](https://app.segment.com/workspaces) and navigate to the Destinations page from the sidebar. 
*   Click on **Add Destination** and search for Webhooks on the destination catalog page
*   Configure the destination and connect it to your desired Segment source. On the destination settings screen, enter the RudderStack Webhook in the URL placeholder.

For detailed steps on how to migrate from Segment to RudderStack,[ read our documentation](https://docs.rudderstack.com/migration-guides/rudderstack-migration-guide). You can also easily migrate your warehouse destinations from Segment to RudderStack.[ Read the documentation](https://docs.rudderstack.com/migration-guides/how-to-migrate-warehouse-destination-from-segment-to-rudderstack) to learn how.

Visit us on our[ website](http://www.rudderstack.com/) or join our[ Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on[ GitHub](https://github.com/rudderlabs), and follow us on social:[ Twitter](https://twitter.com/RudderStack),[ LinkedIn](https://www.linkedin.com/company/rudderlabs/),[ dev.to](https://dev.to/rudderstack),[ Medium](https://rudderstack.medium.com/),[ YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw).
