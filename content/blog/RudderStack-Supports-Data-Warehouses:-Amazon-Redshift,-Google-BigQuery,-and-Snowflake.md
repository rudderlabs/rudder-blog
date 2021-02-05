---
title: "RudderStack Supports Data Warehouses: Amazon Redshift, Google BigQuery, and Snowflake"
siteMetadescription:
date: 2020-02-14T00:00:00+05:30
featureImg: ../assets/mike-benson-_8bMP04RFio-unsplash-750x355.jpg
category: Product Announcements
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition: 
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "rudderstack-supports-data-warehouses-redshift-bigquery-snowflake"
weight: 1000
---
We are happy to announce that [RudderStack](https://rudderstack.com/) now supports the delivery of event data to the most advanced and popular data warehouses. This is an important release towards RudderStack’s vision of providing a secure, scalable, and consistent cloud event data pipeline. The cloud version of RudderStack can now route your event data securely and consistently to Amazon Redshift, Google BigQuery, and Snowflake. Also, we have released the support for these technologies as part of the open-source version of the platform. Please find this on our [GitHub](https://github.com/rudderlabs/rudder-server) page.

We encourage you to clone the Git repository and use the integrations. Furthermore, bugs, suggestions, and pull requests are more than welcome, as always!

Why we decided to support data warehouses as destinations for RudderStack
-------------------------------------------------------------------------

We believe that data warehouses, in their modern cloud form, are pivotal for realizing the vision of the data-driven enterprises. Many companies will build and operate [dedicated applications such as CDPs](https://rudderstack.com/blog/building-customer-data-platform-on-your-data-warehouse/) on top of data warehouses and data lakes.

Companies need to build reliable, scalable, and secure event data pipelines. These pipelines must feed data warehouses and data lakes with clean and reliable data. Hence, this is precisely what we are building at RudderStack.

RudderStack allows you to store all your customer and application events in your data warehouse. We store events and all their metadata in a [well-defined and scalable schema](https://docs.rudderstack.com/destinations/warehouse-schemas). Data warehouses have always had a difficult time storing and querying time series data. Hence, RudderStack optimizes how data is stored and represented and makes playing with the data easier.  

What can you do with your event data stored in your data warehouse?
-------------------------------------------------------------------

Having your events stored in Amazon Redshift, Google BigQuery, or Snowflake is just the beginning of an endless number of use cases. You can use your events data as fact tables of different star schemas that can drive your BI initiatives. These BI initiatives can be building customer journeys, calculating the CAC and Life Time Value of your customers, and so on.

You can build triggers on top of your events that execute custom logic or send notifications to your teams when an action happens. Having a robust event data pipeline like RudderStack ensures that your data will always be up to date. Notifications will always arrive on time to your team, and triggers will be fired according to your product SLAs.

Having all your data in your data warehouse, along with event replay, is beneficial to your data science teams. This allows them to have access to all the facts and dimensions they need. It is easier to investigate and build robust ML models with this approach. Especially with products such as Amazon SageMaker and BigQueryML, this process is becoming even more accessible. 

What’s next?
------------

Amazon Redshift, Google BigQuery, and Snowflake are powerful and scalable columnar data systems that keep enriching themselves with new features. So, RudderStack’s goal is to build the most robust event data pipelines that will enhance these technologies and allow businesses to utilize all features of warehouses. RudderStack aims to ensure that data will always be available to everyone inside an enterprise.

With the current release, we have set the foundation to achieve this. However, we are committed to building a lot more optimization and many new features. 

Please check our [](https://github.com/rudderlabs/rudder-server) GitHub repository, try the RudderStack platform, and take a look at our new integrations. Pull requests, issues, comments, and suggestions are more than welcome. Join us on [Discord](https://discordapp.com/invite/xNEdEGw) to discuss the Salesforce integration, browse our [documentation](https://docs.rudderstack.com/), or give [the platform a try](https://app.rudderlabs.com/signup).