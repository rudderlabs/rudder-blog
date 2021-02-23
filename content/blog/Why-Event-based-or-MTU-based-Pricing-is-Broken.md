---
title: "Why Event-based or MTU-based Pricing is Broken"
siteMetadescription: RudderStack clarifies why using events or MTUs as a proxy can become complex when aligning with costs and avoid seeing a whole view of a user’s behavior.
date: 2020-06-24T00:00:00+05:30
featureImg: ../assets/11rs.blog_-750x355.png
category: Thoughts & Opinions
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "why-event-based-or-mtu-based-pricing-is-broken"
weight: 
---
At [RudderStack](https://rudderstack.com/), we believe in sharing ways to build quality customer data infrastructure. Sharing an open-source product is at the heart of what we do. We also offer a premium and paid tier for a hosted enterprise feature. This includes advantages such as SSO, high availability, and dedicated support. After team discussions and evaluations about the most effective pricing structure and the disadvantages of event-based or MTU-based pricing models, we concluded that applying a fixed platform fee for our customers was the best solution.

In any industry or business, prices and costs are paramount to a customer engaging with a product. If the product is free to use, more people will naturally like using it and recommend it. However, this may not be a sustainable business option.

In this blog, we’re going to justify why using events or MTUs as a proxy can become complicated when aligning with costs and may stop companies from seeing a complete view of a user’s behavior.

**Why is an Event/MTU-based Pricing Not Feasible?**
---------------------------------------------------

We’ve listed the top two common issues when it comes to not so great pricing models:

### **1.**  **Event-based Pricing Models**

No developer can predict how many events their app will generate next month; many won’t even know how many were generated the previous month! When you build an app and launch it, you can monitor how many people have downloaded it through standard Apple Store/Play Store reporting. However, it’s more complex to monitor the number of clicks on a particular button, or which specific part of the app users landed on before exiting. It’s these sorts of events that need to be collected and accounted for from the start.

Future events are even harder to predict. However, without any disrespect, the typical responses you might hear for this case are ‘Maybe next month, people will be more active on the app and generate more events.’

 Without a good baseline of the number of events, it becomes tough to predict cost when tied to the event volume. Further, when costs are tied to the event volume, the customers will be inclined to collect fewer events to minimize their costs. This could result in them missing out on valuable insights. 

At RudderStack, the costs (of running the infrastructure) scale with event volumes, but these costs are only a small fraction of the costs that customers face. 

### **2.**  **MTU-based Pricing Model: Number of Monthly Unique Users**

This approach is not as detrimental as the events-based pricing model, but engineers still do not have control over it. A typical argument for MTU-based pricing is that higher MTUs mean more successful business and so customers should pay more. However, the user’s value varies significantly between different businesses and how these businesses place values on their users. 

The lifetime value of a user for a large global company such as Uber can be hundreds of thousands of dollars. On the other hand, for an ad-supported, free to play app game, the LTV would be zero. We are comparing Uber – with more than 15 million active users and being a 100 billion dollar company – with many app-based games with 10-20 million active users, which are valued at a penny. It does not make sense to charge the same amount to Uber as well as a free-to-play game. 

For any company, the number of active users can change widely over time. Let’s say your marketing team runs a crazy campaign. You experience a massive spike in the number of users. Or imagine that your visitor traffic increased 100x because a blog you wrote went to the first page on [HackerNews](https://news.ycombinator.com/)! In this case, the number of users arriving at your app/website becomes very unpredictable. You may receive a lot of visitors, but they may not be paid users. If RudderStack were to price its model per user, then customer’s costs would increase without any immediate value. 

**How We Believe You Should Price – Fixed Pricing and its Advantages**
----------------------------------------------------------------------

Connecting to a community of engineers means starting a broader conversation on the related topic on the right products and pricing. From these discussions, we learned that the real value of RudderStack is based around ‘reducing the engineering efforts,’ for in-house development of an alternative product. This effort to build in-house doesn’t scale with the events or MTUs the system has to handle.  

For example, a system that handles 10 million events is similar to a system that handles 100 million events. The effort changes only when there is a significant increase in volume, e.g., scaling from 1M to 1 billion events. This is similar to moving from a start-up to a Google-like organization.

Most companies between a start-up and a large-scale organization use off-the-shelf technologies to handle the scaling aspect of their growth. The same applies to effort, and ultimately the value when selling to engineers doesn’t scale with the value of users or Events. For this reason, **FIXED PRICE** is a better representation of the value delivered.

For a business user (Marketing/Sales), the value of the data collected by RudderStack comes from the increase in business metrics. This includes increased sales, better product experience, reduced churn, and so on. These are some of the applications we are building using RudderStack, and these would be priced-aligned with the value they deliver.