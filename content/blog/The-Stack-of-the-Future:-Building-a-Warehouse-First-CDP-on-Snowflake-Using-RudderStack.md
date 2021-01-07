---
title: "The Stack of the Future: Building a Warehouse-First CDP on Snowflake Using RudderStack"
siteMetadescription:
date: 2020-11-04T00:00:00+05:30
featureImg: ../assets/integration5.blog_.rs_.png
category: 
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition: 
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "the-stack-of-the-future-building-a-warehouse-first-cdp-on-snowflake-using-rudderstack"
---
The customer data stack of the future makes the warehouse a first-class citizen, leveraging both advanced storage/compute functionality and additional tooling to turn the warehouse into a customer data platform (CDP). 

We’ll start by defining the problem with current solutions, explain the warehouse-first approach to building a CDP, explain why Snowflake is an ideal warehouse, and lastly look at a real example of a data engineering team that is using RudderStack and Snowflake to handle their high-scale customer data needs. 

**What is a warehouse-first CDP?** 
-----------------------------------

### Current CDPs create data silos and inhibit having a unified view of your customers.

The idea of a CDP is simple: collect all of your customer data so that you can get a unified view of both your customer’s journey and their complete profile, then take action on that data. The insights that flow from this combined data are increasingly mandatory for teams across your organization. 

From the perspective of your data engineers, collecting all of your customer data is a difficult, ever-evolving problem to solve, something you would expect a CDP to help you do. But the demand for activating your customer data often comes from other teams in your organization like Marketing and Product, which has driven most CDP products to focus on the activation components, _not_ data collection. 

So, while most CDPs have some level of functionality around unifying data, your data engineers face a few major problems. First, third-party CDPs often create additional data silos. From customer segments to customer journey touchpoints, the data lives in separate systems (e.g., Marketing has a CDP focused on activation, Product has customer journey tooling, etc.), and is ‘trapped’ in each. Second, because of the data silo problem, CDPs rarely have access to valuable internal data that lives in secure systems. 

Ultimately, these challenges limit the ability of your data engineers to provide your company with the richest possible customer data. 

### Warehouse-first CDPs build a unified view of your customers for use across your company.

A **warehouse-first** approach to your CDP places the _warehouse_ at the center of your customer data infrastructure, giving you full ownership, access to internal data, and maximum flexibility. It enables your data engineers to collect and deliver the richest, most comprehensive set of customer data to feed the entire system of teams and tools across your organization. 

Traditionally, the primary function of a warehouse in your customer data stack was to serve as a container for storing information from various sources. In other words, you used warehouses as a repository of data, primarily for storage and analytics use cases. 

Modern warehouses like Snowflake, though, have enabled teams to build interesting use cases far beyond data storage. For example, [Panther](https://runpanther.io/) enables you to use Snowflake as a robust security data lake. With [Tapad](https://www.tapad.com/), a cross-device advertising and content delivery platform, you can pipe your third-party data directly into Snowflake for enrichment. And [MessageGears](https://messagegears.com/products/integrations/snowflake/) is a customer marketing platform that runs on top of a brand’s Snowflake customer data environment, providing advanced customer data segmentation and activation capabilities.

RudderStack makes comprehensive data collection and routing to Snowflake easy for your data engineers, and also enables them to send the same data to downstream teams and tools for activation. (And soon, RudderStack will turn Snowflake into a data _source_ for the rest of the stack…more on that below.) 

Together, these tools enable your data engineering team to build and manage a fully owned, highly scalable, and incredibly flexible CDP. 

**Snowflake is an ideal data warehouse for your CDP**
-----------------------------------------------------

There are multiple data warehouse providers you can choose from, so why is Snowflake the ideal choice if you are building a warehouse-first CDP? 

First and foremost, Snowflake separates charges for storage, computing, and services, but integrates them natively. For the CDP use case, getting charged separately for your storage and computing greatly reduces overall cost, because your data engineers can carefully manage query needs from various teams without having to consider the cost of comprehensive storage at the same time. Further, when it comes to your event data specifically, the payload always includes the element of time. Even though companies generally store all historic data, teams usually work with more recent data. Separating your storage and compute charges significantly optimizes use cases around working with recent data, because you can load only the data you need without sacrificing long-term storage. 

Second, Snowflake offers advanced features, like support for semi-structured data and columnar storage of objects via their VARIANT data type, which are incredibly useful for data engineers managing and delivering customer data. 

Beyond CDP specifics, though, we wanted to list a few things we love about Snowflake as data engineers ourselves (because it serves purposes beyond the CDP as well): 

*   **Security** – Snowflake is fully GDPR- and CCPA-compliant, and uses cutting-edge encryption and data masking techniques for in-transit and at-rest data. Their in-platform data governance is also great. 
*   **Speed and performance** – The ability to use near-unlimited, dedicated compute resources to support concurrent data queries without any impact on speed is truly valuable for teams like ours that run at extremely high scale. 
*   **Ease of management** – Snowflake is simply easy to manage—the less time we have to spend worrying about infrastructure, the more we can focus on our product. 

**RudderStack + Snowflake – The perfect data stack to build your CDP**
----------------------------------------------------------------------

Once Snowflake is in place, building your warehouse-first CDP requires an additional layer of tooling for comprehensive collection and activation. This is where RudderStack comes into the picture. 

### Comprehensive data collection for a unified view of your customers

RudderStack offers 11 SDKs for event data, cloud sources for both structured data and event data, and HTTP-as-a-source, meaning you can populate Snowflake with customer data from all of your websites, apps, and even internal data sources. RudderStack’s collection and routing features serve as a fully managed pipeline for your data engineers. 

Along with querying directly in Snowflake for insights, a comprehensive data set enables analytics and BI use cases in tools on top of Snowflake at any level of complexity. 

### Activating data for downstream teams and tools 

In addition to making data collection easier for your data engineers, RudderStack also simplifies the activation functionality of your CDP, which requires syndication of the data to the tools used by Marketing, Product, and other teams across your company. RudderStack enables this in two primary ways: 

#### **Cloud, streaming, and webhook destinations**

Every piece of data that flows through RudderStack to Snowflake can also be routed to any number of other cloud destinations, streaming services, or webhooks. 

Cloud destinations often include analytics tools like Indicative, AppsFlyer, or Google Analytics, while streaming services like Kafka and Kinesis can ingest from RudderStack in real-time. Many destinations can be run optionally in Cloud or Device Mode. In Device Mode, RudderStack loads the native SDK in a wrapper and sends a copy of the event directly to the destination—this drastically simplifies use cases around things like Facebook and Google’s advertising scripts. 

For data engineers, this means they can keep every team, from Marketing to Data Science, happy by providing them consistent, high quality customer data that each team can use with the tools of their choice without creating additional data silos. 

#### **Coming soon: Warehouse-as-a-source**

In a few months, we’ll be launching features that turn Snowflake into a data _source_ for your customer data stack. Stay tuned for the announcement. 

_Learn how to build your CDP on Snowflake using RudderStack in our [step-by-step guide](https://rudderstack.com/blog/step-by-step-guide-how-to-set-up-a-warehouse-first-cdp-on-snowflake-using-rudderstack/)._

**Case Study: Mattermost**
--------------------------

Mattermost implemented RudderStack and Snowflake into their customer data stack to gain CDP functionality. Their core challenge was building a full picture of the customer journey and making that data available to Product teams. 

Alex Dovenmule, Mattermost’s lead data engineer, migrated their infrastructure to Snowflake, because he wanted to reduce costs by decoupling storage and compute resources. Through that process, he realized that achieving the same thing with their data collection and activation infrastructure could both reduce cost and add significant functionality—their previous vendor stored all of the customer data, which created an additional silo and drove up costs. 

Because of Snowflake, it didn’t make sense to pay a 3rd party to store a copy of the data in a silo, so Alex implemented RudderStack to decouple the data collection and storage functions (RudderStack doesn’t persist any data, so we don’t have to upcharge for storage space), resulting in a fully owned customer data pipeline with no silos. 

With the ability to collect and store _all_ customer data, Mattermost was able to see their entire customer journey for the first time. As Alex describes it, running RudderStack and Snowflake “has revolutionized the way product managers plan, launch, and measure feature adoption.” 

Learn more about how Mattermost built their warehouse-first CDP with Rudderstack and Snowflake in our [technical case study](https://rudderstack.com/blog/mattermosts-data-stack-explained-how-they-leverage-unlimited-data-for-customer-analytics/) and how teams across their company are benefitting from their newly unified customer data set in our [business case study](https://resources.rudderstack.com/case-studies/mattermost-roi).

**Get started today with RudderStack and Snowflake**
----------------------------------------------------

RudderStack and Snowflake combine to give you the data platform for a perfect CDP. [Sign up for a 14-day free trial](https://app.rudderstack.com/signup?type=freetrial) of RudderStack Cloud, and build the warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack.
