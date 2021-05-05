---
title: "Why Single-platform Analytics Tools Don’t Scale Well"
siteMetadescription: Why Single Platform analytics tools do not scale well? RuddertStack responds based on setups and power of insights causing future problems at the early stage.
date: 2020-07-02T00:00:00+05:30
featureImg: ../assets/10.blog_.rs_-750x355.png
category: Thoughts & Opinions
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "why-single-platform-analytics-tools-dont-scale-well"
weight: 
---
We recently came across this question on [Quora](https://www.quora.com/What-are-the-benefits-of-a-data-warehouse-for-a-web-startup-over-third-party-analytics-like-Google-Analytics-and-Mixpanel):  
**_What are the benefits of a data warehouse for a web startup over third party analytics tools like Google Analytics and Mixpanel?_**  
  
It’s a good question, and the answer isn’t necessarily simple, in large part due to the problem of scale. Your analytics needs in the early stages of your business are far different than when your business is much larger, and processes much more data. 

Popular analytics tools like Google Analytics, Mixpanel, and Amplitude are excellent products. In fact, we use many of them ourselves here at RudderStack. But that doesn’t mean their cost and functionality scales well. In the early stage of a business, though, the ease of setup and power of insight often obscures future problems. 

In this blog post, we take a look at a few specific examples of this.

Web Analytics Tools: Event Volume and User Tracking Limitations
---------------------------------------------------------------

In this section, we take a look at the limitations of using the popular web analytics tools.

### **Event Volume Limitations**

Google Analytics is the most widely used tool for web analytics in the world. It is free, and incredibly powerful. However, many people don’t know that the free version of Google Analytics only supports 10 Million events per month. After this limit is reached, they start sampling events. 

Sampled data might be okay for high-level optimization. However, it’s certainly not the data foundation you want to use for managing such a high volume of web events. A typical B2C Series A startup generally clocks more than 100 million events per month. Many companies thus find themselves wishing for raw data or exploring other solutions. 

### **User Tracking Limitations** 

User-level tracking is another limitation of Google Analytics. The entire system is built around anonymous web-behavior. Even though you can technically get a unique identifier (like customer ID) into the platform, you can’t do really anything with them. 

For scaling companies, though, user-level analysis is the key to both understanding product-market fit and achieving significant growth through customer segmentation and cohort analysis. 

Product Analytics Tools: Cost and Privacy Limitations
-----------------------------------------------------

In this section, we look at the drawbacks in the single-platform analytics tools with regards to the cost and privacy aspects.

### **Cost Limitations**

Companies use tools like Mixpanel, Amplitude, Pendo, and others for understanding user behavior in the context of a software product. This is in part due to the tools’ primary focus – they are built for product analytics—but also due to the way that their pricing scales. Many of these tools would be very valuable for analyzing both web and app behavior (and building a picture of the entire customer journey!). Still, the reality is that most companies can’t afford to pay a per-user cost for their non-monetized visitor and user traffic (as we wrote about in our [previous post](https://rudderstack.com/blog/why-event-based-or-mtu-based-pricing-is-broken/) on MTU pricing). 

At scale, sending a significant number of events can cost _hundreds of thousands of dollars_ for a single analytics tool, which is likely only used by one or two teams in the organization. 

We’re jumping ahead a bit, but as we’ll explain below, storing 100 million events on Amazon S3 or Snowflake is about ~$25 per month for storage plus the data loading cost of ~100$/month (which can be optimized by loading once a day which solutions like RudderStack allow).

### **Privacy Limitations**

As we’ve [written before](https://rudderstack.com/blog/protect-your-event-data-before-its-too-late/), privacy is increasingly becoming a concern for data engineering and security teams when it comes to customer data. Placing all of your customer data, including PII, in a single-platform cloud analytics tool poses significant risks and, for many organizations, violates data governance policies. 

Additional Limitations
----------------------

As mentioned before, every organization reaches a point where they need to combine data sets to achieve additional insights into the customer journey, especially relative to the ROI of growth initiatives. 

### **Portability and Integration Limitations**

Consider this example – To know which ad campaign or which blog post drives the most opportunities and conversions, you’ll have to join web analytics behavior with CRM data and, ideally, paid platform data. These platforms include Google Analytics, Salesforce, Google Ads, etc. 

The inability to join datasets affects cross-platform tracking significantly. This often results in making sacrifices in either the platform (inadequate reporting in either Google Analytics or Salesforce) or manually copying data to spreadsheets. Neither of these options are scalable or efficient.

### **Querying Limitations**

An additional challenge with the single-platform analytics tools is the limitation in running SQL queries on your data. These platforms offer an intuitive UI and give powerful insights. However, they often fall short as the requirement for joining various datasets becomes more acute. This is especially the case when working with different data types (i.e. paid platform data and event data). Single-platform analytics tools support neither of these.

### **Complex Machine Learning Use-Cases**

Earlier-stage companies benefit significantly from “AI as a Service” that runs in many single-platform analytics tools. For example, Mixpanel’s data science models are great for uncovering statistically significant correlation between user behaviors and finding outliers. 

Sooner or later, though, the needs of the organization won’t fit the pre-built models in single-platform analytics tools. This will require data scientists to run more complex machine learning models. A few examples include business-specific lead scoring across devices, predicting likelihood of conversion or predicting the likelihood of churn. More advanced teams will want to predict time to ROI from paid spend, leveraging historical data and trends in seasonality as indicators. 

While some of single-platform analytics tools give you access to data stream, it costs extra (e.g., for Google Analytics, you would have to upgrade to GA360, and that costs $150K per year). Furthermore, the delay in the dump (once per day) makes it hard to build real-time use cases.

### **Shared BI Limitations** 

Shared reporting is improving in many analytics tools, but when data needs expand beyond the single-platform solution, teams quickly turn to other solutions (including spreadsheets) to achieve an organization-wide view of business metrics. 

The Answer – Warehouse-driven Analytics Tools + Point Solutions
---------------------------------------------------------------

Let’s return to the question; **_What are the benefits of a data warehouse for a web startup over third party analytics tools?_**

One of the challenges in answering this question is that comparing a data warehouse to Mixpanel is similar to comparing apples and oranges. The real answer is, _**you will need both, starting with the warehouse**_.

### **Better Flexibility and Reduced Costs**

To support agile, high-scale growth, companies and their data engineering teams need to be freed from the limitations of single-solution platforms. The best way to manage the increasing volume and data complexity is to put it in a safe, cost-effective place. That is your own data warehouse. 

In a warehouse-first model, you can choose to use multiple analytics tools across multiple teams while maintaining a central repository of data from the entire customer journey. 

In addition to solving privacy concerns, leveraging your warehouse as the central hub for all your data helps control cost. As we mentioned above, storing 100 million events on Amazon S3 or Snowflake is about ~$25 per month. More importantly, you can send only the necessary data to various analytics tools (i.e. GA for web and Mixpanel for product). This way, you can ensure you only pay those platforms for the data you’re actually using. 

### **Complete Control and Better Collaboration**

With a warehouse-first model, you’re not locked into an analytics tool as the needs of your business change. As the tool runs on top of your warehouse, you can simply unplug it and plug a new one in. Thereby, you get full control of your data and how you want to analyze it. 

On the BI front, most organizations are leveraging tools like Tableau to review business metrics at an executive level. It makes far more sense to share marketing and product analytics dashboards on a centralized tool. Running your analytics on top of a warehouse makes it simple for your analytics teams to provide centralized insights to the entire company. 

How to Move to the Warehouse-first Model
----------------------------------------

A warehouse-first approach sounds appealing, but it is easier said than done without the right tooling. Building SDKs and routing tools to manage a pipeline is non-trivial, especially for teams busy building products for users.

We’ve felt the pain of trying to build these pipelines; both from an engineering standpoint and from the cost of delaying work on key features. We built [RudderStack](https://rudderstack.com/) to solve that very problem. Our mission is to make it easy for data engineering teams to build a warehouse-first foundation for their organization.

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!