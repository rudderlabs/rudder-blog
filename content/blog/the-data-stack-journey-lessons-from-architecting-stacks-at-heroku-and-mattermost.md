---
title: "The Data Stack Journey: Lessons from Architecting Stacks at Heroku and Mattermost"
siteMetadescription: "This blog covers company stages, the core components of the customer data stack, and recommendations on using various component in building data stack at companies such as Heroku and Mattermost."
date: 2021-04-15T00:00:00+05:30
featureImg: ../assets/markdown/datastackjourney.png
category:
author: Eric Dodds
authorPic: ../assets/author/Eric-Dodds.png
authorPosition:
authorDescription: "Eric leads our Customer Success team and has a long history of helping companies architect customer data stacks and use their data to grow."
slug: "the-data-stack-journey-lessons-from-architecting-stacks-at-heroku-and-mattermost"
weight: 1
---

Our current world is defined by information overload. From your watch tracking your health to your washing machine notifying you when your clothes are done and your phone tracking everything, our personal lives are constantly emitting streams of data.

It’s no different for businesses. Many businesses collect the types of product data mentioned above, of course, but that’s only one kind of data. Tracking sales leads, marketing journeys and customer experiences is now standard, to name just a few forms of business data. The amount of data produced by your business is immense — if harnessed properly, it can also be immensely valuable.

In fact, we argue that companies that can leverage this data at scale, are able to understand their businesses better and iterate more quickly. This unique competitive advantage helps them ultimately win in the marketplace.

Importantly, your efforts at implementing the tools and processes required to create value from data aren’t static. As your business grows in size and complexity, you iterate to adapt to demands from customers and the market. This changes how you create value from data.

We call this process “The Data Stack Journey.” This post is meant to guide you in making good foundational decisions that will give you short-term benefit, but reduce or eliminate the all-too-common growing pains that happen as your business and data grow.

We will cover company stages, the core components of the customer data stack, and then dig into Alex’s recommendations on which components to use at which stage based on his experience building data stack at companies like Heroku and Mattermost.


## The Data Stack Journey

The moment your business first provisions a database to store data, you’ve taken your first step on the Data Stack Journey. Understanding where you are on your journey can help you choose the right data tools for your business. This toolkit will enable you to leverage your data for its maximum impact.

Ultimately, the Data Stack Journey is the evolution of your data, data tools and processes over time as your business and data grow and change. By choosing the right tools and technologies at the appropriate steps of your Journey, you will be able to maximize the value that you’re able to extract from your data while also controlling your spending on tools and resources. Perhaps most importantly, you can make wise decisions early that pay dividends as you grow, helping you avoid migration/integration work and the need for re-architecting for scale.


## Company Stages

Let’s start by looking at the stages businesses generally go through as they grow, from a small startup to an international enterprise.

As companies evolve, so do their data and data technology needs. With each stage of growth comes new challenges and we’ll specifically call out targeted advice for each stage.

**First Steps:** You have a small number of customers that you maintain hightouch relationships with. The founders are wearing all the hats and most back-office processes are being done manually.

**Seed:** Your product has gained traction and you’re no longer able to personally message every customer. Your business has started to generate revenue and you are quickly iterating the product. This is generally where Seed and Series A stage VC companies are. Most traditional departments, such as Sales, Marketing, etc., are staffed by small (1-3) teams of people.

**Growth:** You’ve found product-market fit and are aggressively growing your market share. You have thousands (or even more) of customers (the number also depends on the business model). Annual revenue is now in the millions. Your organization is starting to feel growing pains and needs to scale and mature. This is around where most Series B and C companies find themselves.

**Mature**: Your business is considered a big player in its market and is considered one of the de-facto choices in your segment. Product iteration tends to be more deliberate and calculated. Optimizing any business metric by even a handful of percentage points could yield millions of dollars of cost savings or revenue.

**Your Grandma Has Heard of Them**: Your business deals with actual “Big Data.” We’re talking FAANG-level here, where data sizes are in terms of Petabytes. You’re building some of your own internal tools to deal with the scale of your data because there aren’t off-the-shelf solutions for all of your data needs.


## Data Stack Components

Now that we’ve established the high-level stages of companies as they go through the Data Stack Journey, let’s take a look at the core components of the data stack. The customer data stack [is a comprehensive, complex system](https://rudderstack.com/blog/the-complete-customer-data-stack), so for this post, we’ve trimmed the list down the core components at the foundation of the stack that every company needs.

**Data warehouse**: the “center” of the stack, where all of your data is unified and accessible (to teams, tools, apps, etc.)

**Data transformation:** processing and transformation to ensure your data is usable for downstream functions

**Data visualization:** translates data into a usable interface for humans for all kinds of purposes, primarily analytical

**Event stream:** user behavior data from your websites and apps

**ETL/ELT (tabular):** table data from your cloud apps

**Reverse-ETL:** sending data from your warehouse to apps and other destinations

**Data governance:** keeping your data clean & compliant across the entire stack


## Data Stack Components by Stage

This is where the rubber meets the road for companies — deciding which components to use at which stage. (This analysis comes from Alex’s experience building and re-building data stacks at various stages at companies like Heroku and Mattermost.)


### Data Warehouse

**First Step** and **Seed**: You most likely can just query your production database, though I would recommend using a read replica/follower. I would say you **can** run dbt against your production database but I’d be very careful and might just skip dbt altogether until you can get a database for analytics only.

For a while, you should be able to get away with using a Postgres database as your data warehouse.

**Growth** and larger: Once you get to a certain size, you’ll most likely be looking for a proper data warehouse.

The top three players at the moment are Google’s BigQuery, Amazon Redshift, and Snowflake. I personally put Snowflake and BigQuery as 1a and 1b.



*   **BigQuery** has capabilities for streaming data into your warehouse very quickly (e.g. a handful of seconds to get certain sources of data queryable).
*   I find **Snowflake** to be the easiest to use, with a more conventional database permission system. Also being able to control the amount of compute power by controlling the size of your “Virtual Warehouse” makes it easy to run your big beefy jobs in a decent runtime. It also has interesting features like Snowpipe for pulling data into the warehouse.

With both BigQuery and Snowflake, you need to keep an eye on costs as you’re generally paying for how many compute resources you are consuming.

**Redshift** is great but is more like a traditional database system to run. The benefit to Redshift is that you’re just paying a flat amount regardless of how much you do with it. You have to spend more time on database administration tasks, however, such as optimizing column encodings, sort keys and distribution keys. Also, your compute power isn’t separate from your storage. So if you just need more storage, you have to add more nodes to your cluster, even if you don’t necessarily want to pay for more compute power.


### Data Transformation

The one and only [dbt](https://www.getdbt.com/). This the one tool I’d **recommend for companies of any size**. It provides a framework for transforming the data as part of your ELT process. With dbt, you define your raw data sources and build models in SQL-like templates and then build models that reference other models. Because you’ve now defined a hierarchy of models, dbt can now build your models appropriately based on the graph of models you’ve built.

Dbt will then automatically generate a docs site that allows you to visualize the lineage graph of your models and raw data sources. This can really help with onboarding new analysts and data engineers by giving them an easy way to explore how the data is modeled and its lineage.

[Dbt Cloud](https://www.getdbt.com/signup/) is a $50/mo/developer user with unlimited “view-only” users. You can also run dbt yourself through a tool like Airflow. In most cases, I’d start with dbt Cloud since the operational burden of running Airflow yourself could be more than it’s worth, especially if you’re just using it to run dbt.


### Data Visualization

For **First Step** and **Seed**, I’d recommend [Metabase](https://www.metabase.com/). This provides data visualization that won’t break the bank. For future scalability and maintainability, I’d recommend leveraging dbt to build models that can answer most questions with simple SQL queries. By putting most of the complexity in your dbt models, you ensure that users can’t get themselves into trouble by incorrectly writing SQL. This also allows you to have more portability if you choose to move to a different visualization platform.

Pricing for Metabase can be as low as $100/mo if you use their cloud service.

For **Growth** and larger, I would recommend [Looker](https://looker.com/). The only reason I wouldn’t recommend it for the smaller company stages is that the cost is much higher than alternatives such as Metabase. With Looker, you define your data model in [LookML](https://docs.looker.com/data-modeling/learning-lookml/what-is-lookml), which Looker then uses to provide a drag-and-drop interface for end-users that enables them to build their own visualizations without needing to write SQL. This lets your analytics team scale by not getting bogged down answering one-off questions from end-users or having to build every chart or graph that your users need.


### Event Stream

There are really only two choices here — Segment and RudderStack. They are both affordable in the First Step and Seed Stages, but [RudderStack](https://rudderstack.com/?utm_content=inline-mention) scales much better through the Growth, Mature, and Enterprise phases.

**Segment**: Segment is a mature product with a heavy lean towards marketing and now revenue operations users. While Segment will sync your data to your data warehouse, a lot of features are restricted to only use data that is in Segment itself. This means it’s difficult to unlock the real power of your data. Also, with MTU-based pricing, you can be forced into situations where you’re trying to determine if implementing new telemetry is worth the cost.

**RudderStack**: RudderStack doesn’t store any data (they enable you to build a CDP on your own warehouse) and their event stream capabilities are as good or better than Segment. Also, they offer Cloud Extract (ELT) and Warehouse Actions (reverse-ETL), meaning you don’t have to manage your event stream separately from your other pipelines. Lastly, because they are open source, there’s no vendor lock-in.


### Data Governance

This is closely related to the transformations component we covered above, so we don’t need to go into a ton of detail. Ultimately, you need to bake data governance into the stack from the beginning and dbt/Looker are the tools for the job.

**First Steps** and **Seed**: With dbt, you can hide the complexity of transforming raw data into usable models and also ensure that internal users are only looking at data from the vetted dbt models.

**Growth** and **larger**: With the combination of dbt and Looker, you can maintain good data governance. Looker gives you the platform to let you unify the definitions of business metrics so that everyone is playing off the same sheet of music.


### ETL/ELT (Tabular)

ETL/ELT solutions for getting tabular data from your cloud tools to your warehouse are becoming commoditized and that functionality is now ubiquitous among data stacks. There are various options and some up-and-comers to keep an eye out for.

**Pipelinewise:** An open-source framework for running Singer.io taps and targets. It’s relatively easy to run yourself and can get you started with ETL. Recommended for **First Steps** and **Seed** (but you can use it as just an additional tool since it’s pretty straightforward to use).

**Stitchdata:** A SaaS product that also runs Singer.io taps and targets. The UX is relatively straightforward, though there are some rough edges and you can’t use cron style scheduling unless you purchase their enterprise plan. The pricing is based purely on the number of rows synced and generally is not very expensive.

**FiveTran:** This is the premium product in this space with a polished UX, but also comes with a higher cost. They also have a pricing plan based on “monthly active rows” which can make it a little more challenging to calculate. Recommended for Growth or larger companies.

**RudderStack Cloud Extract:** With Cloud Extract, you can pull data out of sources and into your warehouse. Because it’s integrated with the rest of the RudderStack product, it is easier to manage without having tons of different tools you have to log into.

**Airbyte:** This is a newcomer to the space and is open source. They are looking to move away from Singer.io formats and are also looking to integrate better with dbt. Keep an eye on this one.


### Reverse-ETL

Enriching data in your business systems from your data warehouse is becoming increasingly important. The key is to ensure that each business system is getting populated with accurate data. This also allows for the various teams in your company to work with the technologies they are familiar with without having to jump between a bunch of different systems. For instance, enriching lead information in your CRM with product usage data can help your sales reps engage with customers better and lead to more conversions.

Reverse-ETL can also be instrumental in helping to automate and make business processes more efficient. There are a lot of competitors in this space and the dust hasn’t yet settled on which is the premier solution.

**Census:** As of this writing, Census is one of the more mature products in this space. Don’t underestimate how much a good UX helps to drive adoption within an organization. The default pricing model is per connector without charging extra per volume. If your organization syncs a ton of data to one destination, this could be the solution for you.

**Hightouch:** This product is developing quickly. One interesting feature is their [Git sync for dbt](https://docs.hightouch.io/hightouch-with-dbt/git-sync-for-dbt) which gives you “configuration-as-code” which will help with scalability and maintainability. Their pricing is based on the volume of **unique** records synced to any number of destinations. This could be the solution for you if you’re looking to sync a relatively smaller number of records to a lot of different destinations.

**Polytomic:** This product is a new entrant into the space and they have a couple of interesting twists. One is that they don’t write to the data source that they’re pulling data from, which means you can hook it up to a read-only replica without issue. Also, they can join together data from a variety of sources, including Google Sheets, and push the combined data to a variety of sources. If you’re in the early stages of your Data Stack Journey this is definitely worth a look.

**RudderStack Warehouse Actions:** With RudderStack’s warehouse-first architecture, it dovetails nicely into using your Warehouse to send data to other sources. This feature is still developing but looks promising and keeps you from having “Yet Another Tool” if you have relatively straightforward reverse-ETL needs.


## Only You Can Prevent a Messy Stack

It’s a great time to be a data engineer architecting a customer data stack. The tools available allow you to build from the data layer up with your warehouse as the center, giving you, ultimately, flexibility and scalability. Perhaps the best news is that there are tools like dbt and RudderStack that will scale with you from your first steps through becoming an enterprise company, drastically simplifying your work on the stack and giving you the ability to focus on your product.

At the end of the day, though, tools are only the conduit: the best companies make data itself a first-class citizen in the organization and invest time upfront in data modeling, transformations, and governance to ensure that no matter which tools are used, data stays clean and usable through every stage of growth.

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!

This blog was [orignially published](https://thenewstack.io/the-data-stack-journey-lessons-from-architecting-stacks-at-heroku-and-mattermost/) at The New Stack.
