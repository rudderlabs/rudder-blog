---
title: "Modern Companies Need a Customer Data Platform. Should You Build or Buy?"
siteMetadescription: RudderStack clears out the confusion of whether to buy or build a Customer Data Platform. The CDP helps to feed all sorts of downstream marketing & tools.
date: 2020-11-20T00:00:00+05:30
featureImg: ../assets/buildvsbuy.blog_.rs_-750x355.png
category: 
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "modern-companies-need-a-customer-data-platform-should-you-build-or-buy"
---
Each of your customers should feel like they are in a continual one-to-one conversation with your brand. You can only make that possible if you collect data from every touchpoint each customer has with your brand and unify that data in a single **Customer Data Platform** **(CDP)**. CDP feeds all of your downstream marketing and product tools with this rich, precise customer data. Ask your engineering team to do this though, and you’ll soon discover that collecting data from every customer touchpoint and unifying it is a significant technical challenge.  

Until that happens, though, marketing and product teams will continue to send email promotions for products your customers have already bought. They may also send push notifications for things the customers didn’t like and have returned. Even if you have the most tolerant customers, this is an outdated and risky way to operate in 2020.

Your bigger decision comes down to whether or not to buy a CDP platform from a vendor or work with your engineers to build your own. After the last two years of building a customer data platform with over 20 engineers, here’s why we think developing your own CDP from scratch is a mistake.

Why Buy Instead of Build?
-------------------------

Building a customer data platform may sound like a more tailored and less expensive choice when you have a team of engineers. However, is it always the right choice? Here are a few questions to consider before going down the build path.

### Scaling is a Challenge

If you want to track every action that your customer takes — from clicks to searches to transactions — the event volume for even a mid-sized B2C company can easily get into millions of events per day. Building any system to handle that scale isn’t trivial. Putting together a scalable infrastructure that can process large data volumes is likely to cost a lot of money. Also, your system should be able to handle event volume peaks without any additional configuration or infrastructure management. All of this, while ensuring low latency and minimal performance overhead.

### Customer Data Comes From a Lot of Sources.

Customer data is often spread over various data sources, from in-app/in-web events to cloud apps like Salesforce, Stripe, etc. Building integrations with all of these data sources is difficult. They are a lot of work to build. Furthermore, building integrations require knowledge of a diverse set of programming languages, libraries, and application architectures. Also, these sources continue to evolve with new features and API versions. Hence maintaining these integrations can be a big tax on your engineering team.

### It’s Not as Easy as Dumping Your Customer Events in a Data Warehouse.

How hard can it be to take an event-stream and dump it into a data-warehouse like RedShift or Snowflake? Well, it turns out that tasks like handling millions of events per hour while managing warehouse performance & cost, managing schema changes as your event structure changes, de-duping events and keeping event ordering, automatically handling failures (e.g during warehouse maintenance), etc., all require significant engineering effort and complex architecture.

### Customer Data is Needed by a Lot of Different Teams and Tools.

The warehouse is only one of the destinations where you want to send your event stream. More often than not, various teams in your organization will have different needs. For example, your product team will want the same customer event data in some kind of analytics tools like Amplitude or MixPanel, whereas your marketing team will want it in Customer.io, and other teams across your company will want it in their tool of choice. Like data sources, you have to integrate with all of them, and managing these integrations can be a full-time effort.

### New and Emerging Data Privacy Regulations are Complex to Implement When you Have so Many Data Sources and Destinations.

As an engineer, the last thing you want to do is figure out how to suppress or delete all records of a user from your warehouse or cloud destinations because your legal team requires it. That exercise is both hard and boring. However, in this era of GDPR or CCPA, non-compliance can lead to millions of dollars of fines.

### Error Handling Becomes Increasingly Challenging as you Integrate With More Systems.

While this should ideally fall under the managing sources, destinations, or warehouses categories, it deserves a separate mention because error handling is hard. Any of your sources, destinations, or warehouses can be down for any length of time. However, your system needs to ensure you don’t lose events, retain event ordering, etc.

So, Should You Just Buy an Off-the-Shelf CDP?
---------------------------------------------

If you know building it yourself isn’t the right path for you and are considering buying a CDP, here are some points to consider.

### It’s not Just Vendor Lock-In Anymore. It’s Data Lock-In now too.

Data lock-in is a big problem. Sure, a vendor can give you a CSV dump or API access to all of your data if you ask. But is it accessible and ready-to-use for your analytics team? Can you process the customer data in real-time? Can your data science team use the myriad of AI/ML tools from vendors like Amazon or Google for training a recommendation engine on top of this data? Wait, you don’t have a data science team yet? Trust me, you will have it sooner than later. Most modern engineering and marketing teams at scale have one already.

### Your Customer Data Stack is More Complex Than Most CDPs Support. It’s not Just Apps and Cloud Tools.

The complexity of data sources is another issue. You probably have customer data in internal databases or applications behind a firewall already that a third-party vendor won’t be able to pull from. What’s the point of building a customer data platform which can only bring only a subset of your customer data, typically only from the web and mobile applications and SaaS tools?

A related problem is introduced by the internal marketing and sales tools used in most enterprises. Off the shelf cloud-hosted CDPs are not customizable enough to integrate with these internal systems. Even if they are, they would require you to open firewall ports to connect to your internal applications. Good luck getting that approved by your CISO.

### The Cost Required to Collect, Process, and Store all of Your Customer Data in a CDP Outweighs the Benefits for Many

Collecting and processing every customer interaction (which can easily run into billions of events) requires a huge computing infrastructure on top of which CDP vendors charge their margins. Even for a moderately sized business (a few million users or a couple of billion events per month), the end result could mean a quarter to half a million dollars annually plus all of your internal cost to actually use one. Not an easy investment to make when it can take a while to get results.

Have the Best of Both Worlds—Build a Warehouse-First CDP
--------------------------------------------------------

Given the difficulty of building your own CDP and the pitfalls that come with buying one off-the-shelf, is there an alternative solution? A middle ground that will give you the best of both worlds while avoiding the pitfalls? Yes, there is. Go with a warehouse-first CDP.  
  
A warehouse-first CDP builds your CDP on your data warehouse. So you get the plethora of source and destination integrations, identity resolution, and all of the features of a modern CDP, but you retain control of your customer data.

The warehouse-first approach comes with a lot of benefits, three of the biggest being:

1.  1\. More cost-effective. You don’t have to pay your CDP vendor a premium for storing your customer data.
2.  2\. More secure. You retain control over your customer data, not your CDP vendor.
3.  3\. More flexible. You can apply whatever tooling is compatible with your data warehouse to your customer data and not be bound to the limited tooling integrations and whatever modeling happens in the black box of a traditional CDP.

RudderStack is the [warehouse-first CDP](https://rudderstack.com/blog/step-by-step-guide-how-to-set-up-a-warehouse-first-cdp-on-snowflake-using-rudderstack/). RudderStack makes it easy to collect, unify, transform, and store your customer data, as well as route it securely to a wide range of common, popular marketing, sales, and product tools.

Start Building a Better CDP With RudderStack
--------------------------------------------

Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Visit us on our [website](http://www.rudderstack.com) or join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw).