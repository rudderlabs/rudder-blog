---
title: "RudderStack Releases Support for Salesforce Integration"
siteMetadescription:
date: 2020-02-09T00:00:00+05:30
featureImg: ../assets/bill-oxford-fGqsewtsJY-unsplash-750x355.jpg
category: Product Announcements
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition: 
authorDescription: "Head of Product at RudderStack."
slug: "rudderstack-releases-support-for-salesforce-integration"
---
RudderStack is happy to announce that we now support Salesforce as an integration. We are releasing Salesforce for the managed version of [RudderStack](https://rudderstack.com). We are also including it in the open-source version of our stack that can be found on our [GitHub Repo](https://github.com/rudderlabs/rudder-server). RudderStack encourages you to clone the Git repository and use the integration. Bugs, suggestions, and pull requests are more than welcome!

**Why we decided to build the Salesforce integration**
------------------------------------------------------

We all know that marketing has to be data-driven to succeed but we often tend to overlook the data needs of sales teams. Getting new leads inside your pipeline and engaging with the potential customer earliest possible is important to build a healthy sales pipeline. One can capture leads on different touchpoints including product signups, mobile app downloads, and whitepaper downloads, etc. Sales teams should be able to get all the information for these leads in the CRM in a secure and consistent way from any of these touchpoints.

SalesOps teams in the industry work hard to make sure that all the required data is delivered to the CRM securely and consistently. These are the teams that will benefit from this RudderStack release.

**What you can do with the RudderStack Salesforce integration**
---------------------------------------------------------------

In this release, we have implemented the basic infrastructure for communicating and pushing events into Salesforce. We have also released the functionality of identifying and creating new leads inside Salesforce as soon as a lead generates an event on your product. This also works wherever you have added the RudderStack SDKs.

RudderStack can track new or existing leads and accordingly create new leads inside Salesforce. In case the lead has already been identified and created, it will be updated.

In addition, RudderStack’s rich transformation support allows doing many things with your leads. This includes excluding specific fields for compliance reasons, mapping values for consistency, and enriching your leads with data from external sources such as ClearBit.

From here, you can interact with leads using the rich platform that Salesforce provides. You can create methods to automatically score your leads and assign them to your SDRs. You can even execute completely automated workflows that your SalesOps teams have created. 

RudderStack allows you to focus on creating additional logic over your Salesforce instance. This saves the extra time spent in taking care of complicated and fragile pipelines that capture and push customer-related data from your customer touchpoints to your CRM.

**What’s next**
---------------

We believe that RudderStack being an [open-source product](https://github.com/rudderlabs/rudder-server) is ideal to support your SalesOps teams. The release might be minimal in terms of the interactions with SFDC. However, it’s built on top of the data infrastructure that RudderStack provides. This means you can extend its functionality and stay worry-free about delivery semantics and data pipeline maintenance.

Please check our [GitHub repository](https://github.com/rudderlabs/rudder-server), try the RudderStack Platform and any pull requests are more than welcome. Join us on [Discord](https://discordapp.com/invite/xNEdEGw) to discuss the Salesforce integration, browse our [documentation](https://docs.rudderstack.com/destinations/salesforce), or give a [try to the platform directly](https://app.rudderlabs.com/signup).