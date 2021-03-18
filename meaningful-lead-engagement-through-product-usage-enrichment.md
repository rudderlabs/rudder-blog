---
title: "Meaningful Lead Engagement Through Product Usage Enrichment"
siteMetadescription: "This post will highlight how placing customer usage data in the sales team’s hands unlocks their ability to have educated and well-timed conversations with potential customers - lead scoring."
date: 2021-03-18T00:00:00+05:30
featureImg: ../assets/markdown/warehousebasedleadscoring.png
category: 
author: Rachel Bradley-Haas
authorPic: ../assets/author/Rachel.jpg
authorPosition: 
authorDescription: "Rachel is co-founder at Big Time Data. Her background includes roles in Data Engineering, Go-to-Market Analytics and Operations, and Business Operations at companies like Heroku and Mattermost."
slug: "meaningful-lead-engagement-through-product-usage-enrichment"
weight: 1
---

With the rise of SaaS subscriptions, self-service trials, and usage-based monthly billing, the need for real-time customer data in the hands of Sales, Customer Success, and Product teams has skyrocketed. While democratizing product data across all areas of a company is important, this post will highlight how placing customer usage data in the sales team’s hands unlocks their ability to have educated and well-timed conversations with potential customers. 


## Traditional Model

In the past, lead to quote to close was a relatively straightforward experience for both the potential customer and Sales teams. It went a little something like this:



*   The potential customer becomes aware of a product that could alleviate a pain point.
*   The potential customer visits your website to educate themselves and request to be contacted.
*   Sales reaches out to understand the use case and needs of the potential customer.
*   Sales demos the product or deliver a handheld trial experience.
*   The potential customer sees the value of the product and chooses to purchase the product.


## Modern Product-led Growth

As products have evolved, so has the customer. Today we live in the age of self-service and product-led growth. We are educated and independent users who _don’t need no salesperson_. We want to explore the product, determine the potential impact, and find the pitfalls ourselves. 


### What we Don’t Want



*   A generic automated e-mail that tells us to do X and Y because it will enable us to do Z. What if I already did those last week, or maybe I’m stuck at A, business-critical, and I have no idea how to do X? 
*   A call with the sales team explaining we should be using a certain feature of a product. What if we have been there, done that already? Why am I even on this call?


### What we Want



*   A customized onboarding trial experience based on where we are in our journey. If I am stuck at A, send me information on how to get to B before asking me to do X.
*   A call with sales where they already understand our product utilization and come prepared with suggestions on how to fine-tune it to get the most of the product.


## Give the People What They Want: A Customized Journey Based on Product Usage

Most of you are probably thinking, “yeah, yeah, yeah we have heard that before, and it is easier said than done.” I don’t disagree that talking the talk is easier than walking the walk, but if you start putting one foot in front of the other, you’ll be walking before you know it.


### Before You Get Started: Make Sure You Have the Infrastructure to Deliver the Data You Need

Before you put one foot in front of the other, you need to make sure you have the right shoes on. In the context of data and infrastructure, that means having tools in place that can deliver the data you need in a scalable way. At a minimum, you’ll need event stream data representing user behavior in the product and reverse-ETL tooling that will allow you to sync that data from the warehouse to the tools that the sales team is using. 

Advanced use cases also leverage ETL/ELT to pull in additional information for lead enrichment (i.e., demographic traits) and leverage modeling tools (dbt or even Spark for ML) to prep the data for downstream destinations. 

We’ll cover a more basic use case that leverages product usage event stream data from the warehouse and reverse-ETL to send that data to downstream tools for today’s post. 


### Breaking it Down



*   Step 1: Determine what product data is needed to support the varying sales motions
*   Step 2: Figure out where the data needs to go for sales to engage with it effectively
*   Step 3: Put the data (in an automated way) where sales can make the most of it
*   Step 4: Teach sales where, when, what, and why
*   Step 5: Sales does their thing


### A Real-Life Example

A recent client of [Big Time Data](https://www.bigtimedata.io) launched a self-service freemium cloud version of their on-prem product and found themselves wondering how to generate actionable leads in Salesforce. In the past, their lead creation was straightforward. They used Marketo forms on the website for contact, quote, and trial requests. Those requests would then sync over to Salesforce for sales to act on. All of that is fine and dandy, but how does one move from solely marketing and sales-generated leads to supporting product leads?


#### Step 1: Determine What Product Data is Needed to Support the Varying Sales Motions



*   New cloud product signup
*   Cloud product utilization
    *   Users
    *   Feature adoption
    *   Activity in previous 1, 7, and 30 days


#### Step 2: Figure Out Where the Data Needs to go for Sales to Engage With it Effectively



*   Salesforce leads w/ MQL status for a sales rep to be assigned


#### Step 3: Put the Data (in an Automated Way) Where Sales Can Make the Most of it



1. Send data to your data warehouse for all new cloud product signups with relevant information (get that e-mail!!!!):
    *   New cloud product signup
        *   **Hint: Use RudderStack to send an identify and track calls from the signup page with additional context fields (such as e-mail)**
    *   Cloud product utilization
        *   **Hint: Use RudderStack to send track calls from the product with additional context fields (like users, adoption, and usage)**
2. Enrich and model data from Step 3a in your data warehouse to create a table at the cloud signup level that includes signup data and product utilization:
    *   For this situation, one cloud signup was related to a single e-mail, so we had a one-to-one relationship between lead and cloud signup. This means that one row should exist per cloud product instance.
    *   Relevant data from Step 1 should be in this table for the necessary upsert into Salesforce.
<table>
  <tr>
   <td>
<strong>Email</strong>
   </td>
   <td><strong>Workspace DNS</strong>
   </td>
   <td><strong>DAU</strong>
   </td>
   <td><strong>WAU</strong>
   </td>
   <td><strong>MAU</strong>
   </td>
   <td><strong>Last Active</strong>
   </td>
  </tr>
  <tr>
   <td>rachel@bigtimedata.io
   </td>
   <td>bigtimedata
   </td>
   <td>2
   </td>
   <td>2
   </td>
   <td>2
   </td>
   <td>2021-03-16
   </td>
  </tr>
  <tr>
   <td>eric@rudderstack.com
   </td>
   <td>rudderstack
   </td>
   <td>25
   </td>
   <td>34
   </td>
   <td>41
   </td>
   <td>2021-03-16
   </td>
  </tr>
  <tr>
   <td>cloud@gmail.com
   </td>
   <td>myworkspace
   </td>
   <td>0
   </td>
   <td>0
   </td>
   <td>10
   </td>
   <td>2021-03-01
   </td>
  </tr>
</table>




3. Send or enrich a lead in Salesforce:
*   Create a RudderStack Warehouse Action
    *   Source: Snowflake Table (see Step 3b)
    *   Destination: Salesforce
        *   Object: `Lead`
        *   External ID: `DWH_External_ID (uuid generated in DWH)`
    *   Mapping:
        *   `DAU -> Lead.Cloud_DAU__c`
        *   `MAU -> Lead.Cloud_MAU__c`
        *   `Last Active Date -> Lead.Cloud_Last_Active__c`
        *   You get it...


#### Step 4: Teach sales where, when, what, and why



*   Add the new cloud product data to the Lead layout in Salesforce
*   Create/Update documentation for sales to understand the definition of the data added to the lead view
*   Build reports that surface top adopters & new cloud users for sales to prioritize their engagement
*   The data points surfaced on the Lead will allow sales to have a solid understanding of customer adoption and usage when going into calls or sending e-mails





![Leads Report](../assets/markdown/leadscloudproductactivity.png)



## Bringing it Full Circle

Take a step back, model your product and GTM data, surface it in business-critical tools, and enable your sales team to engage in meaningful conversations. Remember, we’re in the age of self-service & product-led growth; don’t let your siloed data and disconnected tools stop you from providing the optimal customer experience.

Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack by signing up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today. [Subscribe to our blogs](https://rudderstack.com/blog/), join [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open-source repos on [GitHub](https://github.com/rudderlabs), and follow us on our socials: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](http://dev.to/), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
