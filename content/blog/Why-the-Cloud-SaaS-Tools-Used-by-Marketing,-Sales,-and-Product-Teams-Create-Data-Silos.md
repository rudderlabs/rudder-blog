---
title: "Why the Cloud SaaS Tools Used by Marketing, Sales, and Product Teams Create Data Silos"
siteMetadescription:
date: 2020-10-08T00:00:00+05:30
featureImg: ../assets/2rs.blog_-750x355.png
category: Thoughts & Opinions
author: Eric Dodds
authorPic: ../assets/author/Eric-Dodds.png
authorPosition: 
authorDescription: "Eric leads our Customer Success team and has a long history of helping companies architect customer data stacks and use their data to grow."
slug: "heres-why-the-cloud-tools-used-by-marketing-sales-and-product-create-data-silos/"
---
Over the last 5 years, cloud SaaS tools have made the jobs of developers and data engineering teams much easier in many ways. One of the most profound improvements has been the ability for teams to ‘outsource’ the build and infrastructure management of core functionalities. 

It’s a good time to be building software when Stripe manages payments infrastructure, Okta takes care of SSO, Algolia provides robust search and so on. 

> **When it comes to customer data, though, cloud SaaS tooling often tells a different story.** 

There’s no shortage of powerful software for creating audiences, running user analytics and other use cases, all of which are valuable for downstream teams like marketing and product. The way most of the systems are built, though, creates an unintended consequence for data engineers: an additional data silo, which almost always means some sort of integration project or security discussion at some point, or, at the very least, a challenge around data disparity between platforms.

In this post we take a look at the causes behind the “cloud SaaS customer data silo” problem, then discuss the ways that many modern data engineering teams are architecting their data stacks to mitigate the challenge.  

How Cloud SaaS Tools for Customer Data Create Additional Data Silos
-------------------------------------------------------------------

Most cloud SaaS tools that leverage customer data are built for the end users, which are generally product, marketing or sales teams (which makes sense). The focus on those teams, though, means that ease of use around activating data _within the platform itself_ is the top priority. 

The result is that de-emphasized or legacy data structures, data collection methods and APIs make it cumbersome and time-consuming to get data in and out of the platforms. Any data engineer working with CRMs, marketing automation tools or 3rd-party CDPs has experienced this dynamic in the form of “integration hell.” 

Integration hell can take on many forms, but common complaints include overloading sites with JavaScript snippets from various tools, figuring out how to export and join data from disparate systems to create clean tables that drive reporting or the immense pain of migrations that require heavy munging of data because the schemas are so different. 

There is a significant contrast between tools intentionally designed to be integrated into existing data stacks and cloud tools used by downstream teams. For data engineers, the disparity can often make marketing and sales products seem archaic. 

Now, the good news is that there are tons of new tools making this much easier, but we’ll get to that point later in the post. 

First, it’s worth digging a little deeper into the issue—the pain of integrations is a symptom, but the true problem can be much more harmful to the organization.  

How Cloud SaaS Tools Can Limit the Quantity, Type, and Richness of Data
-----------------------------------------------------------------------

Before we cross the line of sounding like we’re downplaying the value of really amazing products, we want to make it clear that the systems that marketing, sales and product use today are truly incredible. From personalization to product analytics, these modern SaaS tools directly support the incredible growth and insights their users achieve. 

Most often, the problem isn’t with the tools themselves, the challenge for data engineers is that they are built to derive value from data, not provide integrated data infrastructure. 

Here are the various ways we see this challenge manifest itself for data engineers: 

### **Incomplete Data**

There is often internal data, much of which can be sensitive (i.e., transactional data), that isn’t shared with downstream tools, meaning that the picture is inherently incomplete. 

Adding to this challenge is the inability of many systems to handle various types of data. Tools that rely on event-based data structures don’t manage structure data and vice-versa. 

### **Trapped Data**

One of the other challenges with cloud tools is that the value they create is often ‘trapped’ in the tool. Take cohort analysis, for example: many tools enable amazing reporting, let you share dashboards and allow you to export groups of users, but the underlying data set and logic aren’t federated to the data stack as a whole, meaning the work has to be re-created in other areas. 

### **Vendor Lock-In**

Some cloud tools do have fairly robust integrations and even warehouse export, which is extremely convenient. Even then, though, the challenge for many data engineers is that there’s risk in leverating a cloud tool used by a downstream team for critical customer data infrastructure. Teams change the tools they use and if that tool also supports a key integration, that can send the data engineering team back to integration hell. 

### **Warehouse as a 2nd-Class Citizen**

Last but not the least, the integrations many tools offer treat data warehouses as 2nd-class citizens, prioritizing sync with other cloud tools. This makes sense for downstream teams, but is often a pain point for data engineers. 

The Solution: Warehouse-First Infrastructure
--------------------------------------------

Modern data engineering teams are solving problems around data silos and data collection by 1) re-thinking the role of the warehouse in their customer data stack and 2) separating cloud tools from data infrastructure and leveraging pipeline tools that don’t create additional silos. 

First, collecting _all_ of the data into the warehouse is a top priority. This is accomplished via ETL integrations or in the process of collection (as with event data), or leveraging tools that can do both well. 

Even if you accomplish ubiquitous data capture, though, the true power comes in also treating the warehouse as _a source_, effectively turning the warehouse into a customer data platform. 

Infrastructure tools that enable this functionality are intentionally built to solve the data silo problem. For example, [Hightouch](https://www.hightouch.io/) allows you to orchestrate robust marketing campaigns from your warehouse data. 

And we would be remiss not to mention [RudderStack](http://www.rudderstack.debugme.in): we’re designed to _not_ persist any data and can turn your warehouse into a source for your larger data pipeline directly. We’ve launched [RudderStack Cloud](https://resources.rudderstack.com/rudderstack-cloud) that lets you collect, transform and route your customer events data to not just data warehouses, but also your preferred real-time streaming services and cloud apps.

In this new paradigm, advanced data engineering teams are using developer-first tooling that is often open source to achieve non-siloed insights from their warehouse. ([Models on the DBT hub](https://hub.getdbt.com/) are a great example.) 

Looking Into a Bright Future
----------------------------

Data silos are still a major problem at most organizations, but the good news is that the importance of data teams is becoming much more apparent and as warehouse technology continues to advance, along with the tooling that supports owned, centralized data, it’s becoming easier—and more secure—to leverage cloud tools without the worry of creating additional data silos.
