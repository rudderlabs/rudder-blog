---
title: "Build or Buy? Lessons From Ten Years Building Customer Data Pipelines"
siteMetadescription: "This article summarizes what RudderStack CEO Soumyadeb Mitra learned both building and buying customer data pipelines over the last ten years and how he would approach the challenge today."
date: 2020-11-20T00:00:00+05:30
featureImg: ../assets/buildvsbuy.blog_.rs_-750x355.png
category: 
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "build-or-buy-lessons-from-ten-years-building-customer-data-pipelines"
weight: 1
---

_Before RudderStack, I tried to build customer data pipelines inside a large enterprise using homegrown and vendor solutions. This article summarizes what I learned both building and buying customer data pipelines over the last ten years and how I would approach the challenge today._

A major initiative for all modern companies is aligning every team around driving a better experience for their users or customers across every touchpoint. This makes sense: happy, loyal users increase usage, business growth, and ultimately revenue. 

Creating powerful experiences for each user, especially when it comes to use case personalization, is easier said than done. 

To drive great experiences across every team and technology, you must: 



*   Collect every touchpoint each customer has with your business
*   Unify that data in a centralized, accessible repository
*   Enrich and deliver that data to every downstream tool (product, marketing, data science, sales, etc.) 

Overlooking any of these measures makes eliminating bad user experiences nearly impossible. Your marketing and product teams will continue to send email promotions for products your customers have already bought, and data science won’t be able to produce models that increase lifetime value. 

With customer expectations higher than ever, failing to unify and activate your customer data means slower growth and higher churn. 


## The Big Decision: Build or Buy? 

As a technical leader supporting data-driven growth initiatives, your biggest decision regarding customer data pipelines is whether or not to buy a solution from a vendor or work with your engineering team to build your own. 

I’m an engineer by trade, and before starting RudderStack, I spent years at a large enterprise trying to unify and activate customer data with both homegrown and vendor pipeline solutions. 

Over the last two years, I’ve worked with 20+ engineers to build customer data pipeline solutions, and based on those ten years of experience, here’s why I think trying to build your solution is a mistake. 


## The Challenges I Faced in Building

As engineers, we like to build things. Also, in many cases, the idea of building things has advantages. In my previous role at an enterprise company, building our own customer data pipelines seemed like a more tailored and less expensive choice for our needs, especially because we had the engineering talent. 

As is often the case, though, the idea of building something is different from reality. Here are the things I wish I considered before going down the build path: 


### Scaling is a Challenge

One of the characteristics of customer data is that initial use cases always seem manageable (send page view data to marketing, feature usage to product, etc.), but the more data you have, the more use cases you enable. This is a virtuous cycle that can be very powerful for teams, such as marketing and product, but from a technical standpoint, it’s rare that your initial set of requirements reflects the system’s long-term needs at scale. 

Ultimately, you want to track _every_ action your users take, from clicks to searches to transactions. That event volume for even a mid-sized B2C company can easily get into millions of events per day. 

First, building any system to handle that scale isn’t trivial from a collection and processing standpoint, and because the data is driving actual experiences, latency can cause major problems. 

Event volume peaks are another major issue. Planning for average usage is one thing, but the system needs to handle significant spikes in volume without any additional configuration or infrastructure management. (Otherwise, the engineering team is always putting out fires whenever the business has a big event like a sale, peak season, etc.). 

If you don’t build the system for efficiency at scale from the outset, costs can also become a major problem. 

Managing these considerations while ensuring low latency and minimal performance overhead almost always means engineering resources are being used simply to collect and route data instead of working on the actual product and product-related infrastructure. 


### Building and Managing Data Source Integrations is an Annoying, Never-Ending Problem 

Customer data is spread across multiple different data sources. Think about even a simple business with one website and one app: 



*   Website
*   App
*   Cloud tools 
*   Payment/transaction data
*   Messaging data (email, push, SMS) 
*   Advertising data (Google, Facebook, etc.) 
*   Cloud apps (CRM, marketing automation, etc.) 

Building integrations for every data source is not only a huge amount of work but requires knowledge of a diverse set of programming languages, libraries, and application architectures. Worse yet, the integrations are constantly evolving with new features and API versions. 

Another major challenge is that there are different categories of pipelines. Event data comes from the website and app and needs to be delivered in real-time, but customer data from cloud sources is often tabular and needs to be loaded in batches. 

Keeping an engineering team motivated to keep messy integrations up to date is a huge challenge, not to mention concerns around the value of using expensive, smart resources just to maintain base-line functionality. 


### Unifying Data Isn’t as Easy as Dumping Customer Events Into Your Data Warehouse / Data Lake

At face value, it doesn’t seem hard to take an event stream and dump it into a data warehouse like BigQuery or Snowflake or a data like (or “lakehouse”) like Databricks Delta Lake.

Well, it turns out that it is hard. You must: 



*   Handle millions of events per hour while managing warehouse performance and cost
*   Manage schema changes as your event structures change (which happens all of the time with customer data) 
*   Dedupe events
*   Maintain event ordering
*   Automatically handle failures (during warehouse maintenance, for example) 

There are other challenges, but even that small list shows you how complex the actual architecture is. 


### Every Downstream Team Wants Data Integrated Into Their Tools, Too

Even though it is the customer data stack’s central piece, the warehouse isn’t the only destination where you need to send your event stream. Every downstream team wants customer data in their tools. 

For example, your product team will want event stream data in analytics tools such as Amplitude or Mixpanel. The marketing team will want those events in Google Analytics, and Marketo and the data science team will want it delivered to their infrastructure. 

As I said above, managing these integrations is a full-time engineering function. 

More importantly, event stream connections (source-destination) aren’t the only pipeline you have to manage. Downstream teams are increasingly requiring data enriched in the warehouse for use cases like lead scoring, winback campaigns for customers likely to churn, and maintaining a single view of the customer in each tool. Building pipelines from your warehouse to each downstream tool is a significant engineering problem in and of itself. 


### Dealing With Privacy Regulations is Complex When There are So Many Sources and Destinations

As an engineer, the last thing you want to deal with is figuring out how to suppress or delete all records related to a user from your warehouse or cloud destinations because your legal team requires it. 

Not only is the exercise hard and boring, but deciding to build that functionality into your internal pipeline product significantly increases the complexity and extends the project into building internal tooling. 

Unfortunately, you don’t have a choice on this one—in the era of GDPR, CCPA, and other regulatory measures being put in place, non-compliance can lead to millions of dollars of fines. 


### The Complexity of Error Handling Scales With the Number of Integrations

Normally you would think about error handling in the context of the integrations themselves (sources and destinations). However, after dealing with the actual problem, I learned that it deserves its mention. 

The summary is that error handling is hard. Think about it: any of your sources, destinations, or warehouses can be down for any length of time. (Keep in mind many tools, like the warehouse, are sources _and_ destinations!) 

The reality, though, is that your system needs to ensure you don’t lose events in any circumstance and that you maintain the event order for future delivery when there is a problem. 


## The Challenges I Faced With Buying 

If you know that building isn’t the right path (which I discovered the hard way), should you just buy a vendor solution? Well, I tried that too, and there were problems. 


### It’s Not Just Vendor Lock-in Anymore; it’s Data Lock-in

Data lock-in is a huge problem. Sure, a vendor can give you a CSV dump or API access to all of your data if you ask, but their systems are fundamentally designed to store a copy of your data, which inherently means you are tied not only to their features but are limited in your ability to leverage the data fully. 

Vendors who store data leverage it to drive a few specific features well, but that never serves every need you have to fill for downstream teams. For example, pipelines built for enterprise-scale don’t enable real-time use cases, while pipelines that serve marketing teams fail when ingesting tabular data from cloud sources. Neither serves data science well. 

Lastly, and this is a personal pet-peeve, paying a vendor to store a copy of data you’re already storing in your warehouse is an unnecessary cost in an already expensive system. 


### Most Vendors Simply Don’t Support Complex Customer Data Stacks

As I mentioned above, the modern customer data stack is far more complex than an event stream and cloud tools. You need to ingest tabular data. You need to deliver enriched data from your warehouse and interact with data from internal systems behind a firewall, all while dealing with privacy requirements from InfoSec. 

Central management would be great, but buying a solution for each part of the pipeline means managing multiple vendors. Also, there are challenges of varying data formats and the lack of system-wide control for both data governance. Furthermore, it is difficult to suffice even more complex needs such as identity resolution. 


### The Cost Outweighs the Benefits

Ironically, when you look at the cost that many vendors charge, it increases the attractiveness of building your solution. 

When a vendor manages both the processing _and_ storage of your customer data, they up-charge you on their costs. Even for a moderately sized business (a few million users or a few billion events per month),  to operationalize the tool, the cost could be $250,000 - $500,000 annually plus all of your internal costs. 

Building yourself has massive hidden internal costs, but paying a vendor half a million dollars a year is a hard investment to justify, especially when it takes a while to get results. 


## What I Would do Today: Implement Warehouse-First Customer Data Pipelines

Given the difficulties I experienced trying to build pipelines internally and the pitfalls and costs that come with buying a solution off the shelf, I’m fully convinced that the right solution is actually the best of both worlds. This requires what I call a “warehouse-first” approach, and it’s the foundation of RudderStack’s solution for customer data pipelines. 

A [warehouse-first](https://rudderstack.com/blog/step-by-step-guide-how-to-set-up-a-warehouse-first-cdp-on-snowflake-using-rudderstack/) approach puts your owned infrastructure (warehouse, systems, etc.) at the center of the stack, so you own and have full control over all your data but _outsources_ the parts that don’t make sense to build with internal engineering resources. Importantly, warehouse-first pipelines don’t store any data; they simply ingest, process, and deliver it. 

Said another way, warehouse-first customer data pipelines allow you to build an integrated customer data lake _on your warehouse_. You don’t have to build the plethora of source and destination integrations or deal with peak volume or error handling. Instead, you retain full control over your data and the flexibility to enable any possible use case. 

There are many benefits to the warehouse-first approach, but here are the top 3 based on my experience: 



*   **You can build for any use case**: Instead of being limited to vendor-specific use cases, owning your data with flexible pipelines means you can enable all sorts of valuable use cases. You own everything, from driving real-time personalization on your website to delivering enriched lead profiles from your warehouse to your sales team.
*   **You can deliver better data products**: If you have flexible schemas, event stream pipelines, tabular pipelines, and warehouse → SaaS pipelines managed for you, your team can leverage the power of unified data in your warehouse to build creative and valuable data products for the entire company (instead of building and managing infrastructure).
*   **You don’t have to deal with vendor security concerns**: Because your warehouse is the central repository for data and the vendor doesn’t store any data, you can eliminate most security concerns common among 3rd-party vendors who store your customer data. 
*   **You can decrease costs**: Quite simply, you don’t have to pay a vendor a premium to store data that already lives in your warehouse. 


## I Built RudderStack to Make it Easier For You to Build Better Customer Data Pipelines

RudderStack was built from the beginning with the warehouse-first approach in mind. We don’t store any customer data, solve the headache of managing integrations and provide the infrastructure for the different types of customer data pipelines required by the modern stack (learn more about [Event Stream](https://resources.rudderstack.com/rudderstack-cloud), [Cloud Extract](https://rudderstack.com/blog/rudderstack-cloud-extract-makes-cloud-to-warehouse-pipelines-easy), and [Warehouse Actions](https://rudderstack.com/blog/rudderstack-warehouse-actions-unlocks-the-data-in-your-warehouse)). 

[Sign up](https://app.rudderstack.com/signup) today to see how RudderStack can simplify your customer data pipelines. 

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). 
