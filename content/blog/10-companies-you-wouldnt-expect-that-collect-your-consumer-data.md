---
title: "Ten Companies You Wouldn't Expect That Collect Consumer Data"
siteMetadescription: "This blog exposes ten companies that collect consumer data but do not appear to collect data."
date: 2021-01-13T00:00:00+05:30
featureImg: ../assets/10companieswhocollectyourdata.blog.rs.png
category: 
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "ten-companies-you-wouldnt-expect-that-collect-consumer-data"
---

How concerned are you about companies collecting your personal data? This isn’t a new concern. In fact, it’s been almost eight years since Edward Snowden’s release of materials detailing the sharing of personal data by companies like Facebook, Google, and Apple with the NSA. 

It’s common to see people take action on this concern. Hacker News regularly sees [first-page articles](https://news.ycombinator.com/item?id=25481465) about individuals who go through the effort of self-hosting digital products like email avoid sharing their data. 

Consumer-facing products like Gmail, Amazon, and others come to mind first when we think about personal data privacy. It’s easy to look past other companies that also collect vast amounts of personal data but don’t have consumer-facing products. 

We don’t often think of B2B companies in terms of privacy because they operate in the background relative to the customer experience, selling services to B2C companies. From marketing to analytics to CRM and more, there are many B2B services used by B2C companies to understand and deliver their customer experience. 

In this post, we’re going to highlight several of these companies—some you’ve heard of and some you might not have— to raise awareness about the huge number of B2B companies that collect customer data. 


## 1. Adobe

When many people think of Adobe, they think of design tools like Photoshop and, of course, the ubiquitous Acrobat PDF reader. But Adobe also has a $6 billion marketing cloud business that has been one of the major drivers of their stock price. Hundreds of B2C companies, from Nike to Virgin Airlines, use the Adobe Marketing Cloud suite of products. 

Whatever interactions you have with companies using Adobe Marketing Cloud, from visiting their website to opening their emails to using their mobile apps, is captured as data that flows into their systems. All of the customer data helps Adobe build rich consumer profiles, which feed their marketing and advertising products (like Adobe Advertising Cloud). 


## 2. Salesforce 

Like Adobe, tens of thousands of companies use Salesforce’s CRM, marketing software, and other tools. We think of Salesforce as used mainly by B2B companies, but massive consumer-focused companies run all of their customer data through Salesforce, from airlines to online retailers. 

If you’ve engaged in some sort of digital commerce in the past ten years, your data is almost indeed in the Salesforce ecosystem somewhere... likely in many places. 


## 3. Acxiom and Other Consumer ID Graph Vendors

While you’ve heard Salesforce and Adobe’s names before, Acxiom is a much lesser-known brand, especially to your average consumer. Yet, they probably have the most extensive collection of anonymous cookie data globally, along with mapping between PII (email, address, name, etc.) and cookies. They’ve built this massive dataset by working out data-sharing deals with thousands of publishers and content providers. 

To make things worse from a privacy perspective, they have built their entire business model on sharing this data and their identity graph (PII → cookie mapping) with other businesses. 


## 4. AppNexus and Other ad Networks

Publishers and other content producers use ad networks like AppNexus to display ads on their websites. For ads to be effective (and fetch higher premiums), you need to target them. Targeted advertisment, and that requires the publisher to share data about their audience to the ad networks. This includes information like age, location, and other demographic data and browsing history and content interests.  

Ad networks also cookie their visitors to create a richer profile by combining data across publishers. Even though you’ve never heard of them, some of these ad networks rival Facebook and Google in terms of their scale and reach across the web. 


## 5. Website Providers (Shopify, Squarespace, Wix, etc.)

A massive number of small-to-medium-sized businesses, as well as some enterprises, run their websites on third-party platforms like Shopify (for eCommerce), Wix (for marketing sites and landing pages), and others. 

These platforms have access to data about their users’ customers, from the pages they visit the products they browse and purchase. We know that these platforms collect consumer data because they provide analytics capabilities that rely on it. They don’t share this data between customers from what we can find, but they indeed use the consumer data they collect to improve their products’ experience. It’s not a stretch to imagine a future where these sites offer advertising products allowing their customers to target ‘anonymous’ users likely to buy based on purchase history with other customers. 


## 6. Customer Data Platforms 

**Customer Data Platforms (CDPs)** are all the hype in marketing technology right now. CDPs’ promise is to collect all customer data into one place, then use it to drive personalized digital experiences, from personalized content to advertising campaigns. 

The largest of these platforms host a huge amount of consumer data from many companies. 


## 7. Google Analytics and Other Analytics Companies

Google Analytics is the most ubiquitous analytics tool globally, used by countless companies to analyze visitor behavior on their websites. While the data Google Analytics collects is theoretically anonymous, Google can tie it to actual individuals within their ecosystem, which drives big business for their advertising division. 


## 8. Cloudflare and Other CDNs

CDNs are a highly-distributed platform of edge caches that minimize web page loading time by reducing the distance between the server and the user. They also provide high-availability in the case of web servers going down. 

Pretty much all moderate-to-high traffic websites use a CDN, with Cloudflare being the leader. All the traffic to those websites goes through their CDN, which means the CDNs can see end-user information like IP address, location, browser info, etc. 

While most CDNs don’t install their own cookies and hence don’t track visitors across websites, the static visitor info they collect is also sensitive data that gets stored in the CDN.


## 9. Experian and Other Credit Reporting Companies

Unlike the companies listed above, credit reporting companies have consumer-facing products, but most of their revenue comes from selling their services to other businesses. These companies have been collecting consumer data even before the dawn of the internet. 

What has changed with the internet is the scale and variety of consumer data they can collect, all the way from your entire credit card spend data to rental applications. 

They claim to make good use of this data (via their credit scoring services), but a single company having access to that scale of consumer data is extremely risky, as recent hacks and data breaches have shown. 


## 10. Verizon, Comcast, AT&T, and Other ISPs

We think of Verizon, Comcast, AT&T, and others as the companies who provide us with phone and internet service, not necessarily companies who have access to and collect huge amounts of consumer data. 

On the surface, they seem like simple tunnels for phone and internet, but they leverage that consumer data to power massive advertising businesses like AT&T’s Xandr and Comcast’s Effectv. 


## Be Responsible With Your Customer Data

Customer data privacy is a big deal (and a core value of mine in founding RudderStack). My goal isn’t to call any of these companies evil. In fact, we use some of the tools mentioned above. 

Rather, my goal is to help companies think critically about what customer data they store and where. In this age of the cloud, it’s incredibly easy to send copies of all your customer data to 10, 20, 30 tools. That too, without stopping to think about the implications of who is storing the data and how it might be accessed or used. While that isn’t evil, it is irresponsible, and no company should be irresponsible with their customer data. 

Start building a better, warehouse-first CDP that delivers complete, unified data to every part of your marketing and analytics stack by signing up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today. [Subscribe to our blogs](https://rudderstack.com/blog/), join [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open-source repos on [GitHub](https://github.com/rudderlabs), and follow us on our socials: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](http://dev.to/), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
