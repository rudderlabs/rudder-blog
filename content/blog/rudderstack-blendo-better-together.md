---
title: "RudderStack + Blendo: Better Together"
siteMetadescription: "RudderStack acquires Blendo: Kostas Pardalis, the founder of Blendo, talks about why he decided to merge Blendo with RudderStack, building the team, and working on the product together. He discusses the challnegs and successes through this blog."
date: 2021-04-02T00:00:00+05:30
featureImg: ../assets/markdown/rudderstackacquiresblendo.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "rudderstack-blendo-better-together"
weight: 1
---

I started [Blendo](https://www.blendo.co/) in 2014. The only knowledge I had at that time was that I wanted to leave academia and consulting to build a company and, most importantly, a product. I also knew that, based on my background, whatever I would be building would be something around data.

Coming up with the idea for and building a cloud-based ELT platform back then took time and failure. I had to travel from Greece to Israel, start building a business, fail many times, and persist until we iterated enough to come up with one of the first products to market - together with Fivetran and Stitch Data.

I learned many lessons from this journey - lessons that deserve a post of their own - but there’s one lesson that I learned early on that stands out. In this blog, I talk about why we merged Blendo with [RudderStack](https://rudderstack.com/), building the team, and working together to build a great product. 


### What we Were Doing at Blendo was Just One Piece of the Puzzle

Very early, it became clear that if we wanted to deliver the greatest possible value to our customers, we had to reinvent the concept of the data pipeline. We had to make it broader and understand that it couldn’t be a linear process that pulls data from source A, delivers it to warehouse B, and we are done.


## The Power of the Unified Pipeline

When I was building Blendo, two main categories of companies focused on making data available inside of organizations.



*   **ETL/ELT Pipeline companies**, such as Blendo. These products do not care about how the data is captured. All they care about is how to connect to a system, pull data out, and load the data into another system more suitable for processing.
*   **Customer Data Pipeline companies**, such as Segment. These products were dealing with capturing data where it is generated and delivering the data to places that can process it. 

**Note: To know more about Customer Data Pipelines and their architecture, refer to [this article](https://rudderstack.com/blog/part-1-the-evolution-of-data-pipeline-architecture).**


### Their Differences are Emphasized, but ETL/ELT and Customer Data Pipelines are More Similar Than Not

There are two notable differences between ETL/ELT and Customer Data Pipelines:



*   ETL/ELT always followed a batch processing model while Customer Data Pipelines were streaming data from the source to the destination. 
*   ETL/ELT was always data category agnostic, while Customer Data Pipelines were always focusing on data generated as the result of user behavior.

For a long time, people focused on the differences between these two types of products. As the market matured and started understanding both the technologies and the problems they were solving, some very important similarities became much more obvious.



*   The data the two product categories are dealing with are complementary, and you limit your ability to generate value without having both.
*   Both are very complex technologies that need a lot of investment to build correctly and at scale. At the same time, there’s a big overlap between the two.
*   Batch and Streaming are not that different. Batch processing is an approximation of streaming, and, sooner or later, the dimension of time will come up no matter how you work with your data.

As our customers were investing more and more into these technologies (because they needed both), it became clear to me that maintaining different data pipeline infrastructures adds a lot of overhead and complicates things to a level that hurts value creation.


### Unified Customer Data is Important but Incomplete. You Have to be Able to Share the Results Too

Another early signal that I was receiving from the customers I was working with - and something I was aware of almost from the beginning of Blendo - moving all the data into one place is important, but it’s still incomplete.

Whatever we do with the data, we need to share the results with the rest of the systems to activate this data. There are several different use cases, but in the end, the business logic behind them remains the same. Two of the most common ones are:



*   Enrich customer profiles and share them with your marketing and sales teams.
*   Process data on your Data Warehouse - even build and use ML models - and then use the results to personalize the product experience.

You can’t satisfy either of the above use cases without taking the data out of the data lake or data warehouse and pushing it into systems like marketing automation and CRM platforms.


### Reverse-ETL: The Missing Piece of the Data Pipeline Puzzle

Today, this product category has a name. It’s called **[Reverse-ETL](https://rudderstack.com/blog/reverse-etl-is-just-another-data-pipeline)**. Although it might still be young, based on my experience, it’s the last piece missing for delivering a complete data infrastructure that can operationalize all the data a company has.

As in the case of the two previous product categories, reverse-ETL has more in common with them than differences. Reverse-ETL is almost an extension or mirror of an ELT pipeline.


### There is no Value in Using Multiple Data Pipeline Products

We now have three data pipeline product categories - ETL/ELT, Customer Data Pipelines, and reverse-ETL - and the question must be asked, what’s the value of having three different pieces of infrastructure and three different vendors that deliver these pipelines?

Based on the experience I have accumulated by building an ELT product and company, there’s no value for the customer. On the contrary, there’s less value delivered, larger costs, and more complex infrastructure that hurts the data quality.

Why does this happen so frequently, then?


### Building a Unified Pipeline is Difficult, but the Reward will be Huge

Building a product that satisfies all the above use cases requires enormous talent and experience from a technical perspective. Even if you can put the team together, it’s still difficult when you are trying to deliver an MVP at the highest possible velocity.

From a business perspective, there are too many customer personas that you need to sell to. Is the primary customer for this type of unified data pipeline product a Data Engineer, a Product Manager, or someone in Marketing? It could be anyone, all three, or even someone else in the organization. It’s hard to build scalable and repeatable GTM motions around a product that involves so many customer personas.

If someone can manage to deliver that platform, the reward will be huge, which is the kind of challenge that motivates entrepreneurs like me. 


## Deciding to Merge Blendo and RudderStack

When I met Soumyadeb (referred to as Soumya going forward), the founder and CEO of RudderStack, I saw a person with deep technical skills and a passion for building companies. He had already exited his previous company and was obsessed with solving the problem of dealing with customer data at scale. 

We started exchanging notes, and I quickly figured out that we were attacking the same problem from different angles. It didn’t take long to figure out that the two products together made a lot of sense but deciding to merge your company with another requires more than that.


### Product Alignment

When we met, RudderStack had already built a very performant and scalable Customer Data Pipeline platform. At Blendo, we had built a scalable and performant ELT platform. RudderStack had perfected the deployment of the platform following a data-control plane model, while Blendo is a perfect example of a SaaS cloud delivery model. RudderStack is an expert in Customer Data, while we at Blendo, experts in ELT.

It made total sense to both Soumya and me. We can combine our technical and business expertise, bring two of the three pieces of the data pipeline puzzle together, and focus on how we can deliver a complete data pipeline infrastructure.


### The Team

Both the technical and business leadership of RudderStack is built with entrepreneurs who had experience building at least one other Silicon Valley company. That’s super important because, as I mentioned earlier, building a business around such a product is going to be hard, and you need people with experience and extreme grit. I recognized both in the RudderStack team.

Getting a group of people with such experience, grit, and vision and making them work in harmony without issues is very hard. Ego and stubbornness are the traits of these people. For that reason, the role of the CEO is crucial for the success of the team. In Soumya, I recognized all the traits that a leader needs for this hard task, and so far, he has delivered beyond my expectations.


### The Challenge and Experience

Finally, there were also a couple of personal reasons that helped me make this decision.

First, the challenge itself. The harder the problem I’m trying to solve, the more excited I get. When I started Blendo, I knew the opportunity was huge, but just now, I realize how big. Unifying data pipelines under one platform and getting this product to market is the type of challenge that keeps me awake at night because of excitement. I knew it wouldn’t be easy to find another opportunity like this.

Second, my passion is to build technology companies, and I want to experience every part of it while also growing professionally. Deciding to join an early-stage company offers me continuity in my journey, allowing me to grow the parts of my career that I didn’t get to with Blendo. No vacation in between. I love being on the grind.


## A New and Exciting Beginning

In just a year, we managed to build a company with 50 employees across three different countries, all during COVID-19 lockdowns. That’s probably the biggest testament to the level of professionalism the RudderStack team has.

We have our first version of the unified data pipeline platform in production, with hundreds of customers using it to collect, process, and operationalize billions of events and rows per month.

The velocity we have achieved together in delivering product and business results is amazing, and this is just the beginning.

I am extremely confident about what we as RudderStack can achieve, and I couldn’t be more excited about the future of RudderStack and the industry we are part of. 


Join us on [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, explore our open source repos on<span style="text-decoration:underline;"> [GitHub](https://github.com/rudderlabs)</span>, subscribe to [our blog](https://rudderstack.com/blog/), and follow us on our socials: [Twitter](https://twitter.com/RudderStack)<span style="text-decoration:underline;">, [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/)</span>, [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don't miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
