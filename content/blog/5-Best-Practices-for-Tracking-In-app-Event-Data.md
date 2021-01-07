---
title: "5 Best Practices for Tracking In-app Event Data"
siteMetadescription:
date: 2020-01-29T00:00:00+05:30
featureImg: ../assets/digital-dream-3-1456674-750x355.jpg
category: Tutorials
author: Arnab Pal
authorPic: ../assets/author/Arnab-Pal.png
authorPosition: 
authorDescription: "Software Team Lead at RudderStack. Leads the integrations team, and specializes in Java and Android development."
slug: "5-best-practices-for-tracking-in-app-events-data-analysis"
---
This is the era of mobile apps. We get everything – from critical business information to entertaining videos and games – on our mobile devices. Information is right at our fingertips, and we are always striving to catch up with the outside world. As per [App Annie](https://www.appannie.com/en/insights/market-data/app-annie-2017-retrospective/), an average smartphone user has 80 apps installed.

In this highly competitive market of mobile apps, each app development company looks for ways in which they can reach maximum users, and retain these users for as long as possible. Engaging users continuously is a tricky business. Knowing what your customers want and using this information to build better versions of the app is the key to success. In-app event data is your direct link to the customers’ minds, and using it efficiently can prove to be the differentiating factor between you and the competition.  

What are in-app events and event data
-------------------------------------

In-app events are the records of activities of users within the application, right from the moment the user installs the app. A few examples of event data could be Registration, Login, Tutorials Completed, etc. You can also gather rich in-app events with a number of parameters, or through a stream of multiple events. For example, you can determine whether the user has made any purchase, or which engagement campaign brought the user to your application. Moreover, you can measure abstract information with a large volume of event data, such as which campaign brought more revenue-generating users.

Why do you need to track in-app events
--------------------------------------

Building a unique app is hard; however, it is harder to reach out to the right audience and engage them with your application. We love personalized things and try to find products that suit our needs the best. In-app events allow us to find the features that are most liked by the users and thus generate revenue from in-app purchases. 

As per [Statistica](https://www.statista.com/statistics/202485/average-in-app-session-durations-operating-systems-worldwide/), a user spends around 5-6 minutes on an app per session. To ensure that the user comes back to the app, it is important to give the best experience to the user during this short period of time. Perfecting that experience for the user demands the knowledge of the pain points of the user of the application, or what keeps the user engaged. And that is only possible once we start measuring various in-app metrics.   

What should you track and what not
----------------------------------

Ideally, you would want to know as much as you can regarding the users and their behavior, which means there shouldn’t be any limitation on the volume of data collected and analyzed. However, analytics services come with a price tag and you often need to restrict them in terms of what to track and how much. That said, following some best practices when tracking your in-app event data can help you optimize the process, and ensure you get the best return on investment.

The following are the best practices to set up an event stream.  

1.  **1\. Finalize the questions you want to answer with your event data.** 

It is very important to determine beforehand what kind of insights you want from the event data. For example, questions such as “How long is a user taking to make his initial purchase?” or “How many levels do the users play on an average before making the purchase?” are worth asking of your data. This is the most important bit. Answers to these questions define the overall goal of tracking and monitoring in-app data. In-app data can also give you some subtle inferences such as, which particular level in a game is too hard to pass and where most of the users are getting dropped off.   

2.  **2\. Specify the event properties that will answer the above questions.**

Specify this along with the stream of events. For example, to answer the question above, you can generate streams such as “Login”, “Tutorial Completed”, “Level Completed” (for ~4-5 times), and “Purchase”.  

3.  **3\. Make sure the analytics platform suits your needs across your teams.** 

A single platform may not be able to answer all your questions through your event data straight away. Your marketing team may need a different report whereas your customer support team may need the entire data to answer a user complaint. Identifying the needs of various concerned teams across your organization and picking the right platform that serves them all reduces a lot of time, effort, and money.  

4.  **4\. Test your event data.** 

This is the most critical step of your decision-making because once you distribute your app, there is no easy way to go back and fix the problem with your analytics instrumentation code. Event analysis instrumentation is as important as your feature development.  

5.  **5\. Find the right tool to analyze the data**.

Powerful reports help you analyze your data and make informed decisions on that. It is hard to find a single tool that meets all our needs. As a result, you end up using multiple platforms to analyze data, create ROI, and build an audience on top of that. From an application developer’s perspective, once you decide to use a new analytics platform, you end up implementing their SDKs and start instrumenting the event data at different action points of the app. This approach comes with its own difficulties:

*   You write a lot of code to meet the needs of the data format of different platforms and eventually increase the size of the application.
*   Distributing the application through App Store and Play Store (different apps built for iOS and Android) brings us two different versions of the apps that are being used by different sets of users.
*   Moreover, different SDKs do their own processing which results in killing limited resources of the mobile device and draining up the battery. 

Now, if you want to control your event data flow to the right platform without getting into these issues, you need a central system that will route this event data intelligently and efficiently. 

> At RudderStack, we are addressing these issues with a couple of approaches. We have developed SDKs for [Android](https://docs.rudderstack.com/sdk-integration-guide/getting-started-with-android-sdk), [iOS](https://docs.rudderstack.com/sdk-integration-guide/getting-started-with-ios-sdk), and [Unity](https://docs.rudderstack.com/sdk-integration-guide/getting-started-with-unity-sdk), and defined a unified event structure to meet the needs of different analytics platforms. Along with that, we have intelligent transformers on our server-side to take care of the delivery of your events to the destination platform of your choice. On the other hand, if you want to explore the features of the native SDK of a  platform, we support that too.

Few hacks and tips for setting-up your event data
-------------------------------------------------

Here are a few key things to keep in mind while designing your event data. These considerations may vary with the platform or the product.  

1.  **Event Properties:**

*   **Time of the event generated or the timestamp of the event:** This can infer a pattern of the usage of the app. For example, on an E-commerce platform, most of the users check new arrivals while traveling back from work or at bedtime. 
*   **Associate the user with identification or anonymousId:** This will help you to re-target the user or engage them with more personalized stuff since all of their activities are captured under the same identification.

2.  **User Properties**:
    *   **Time of the first usage of the application:** This will help you to build a set of loyal users as well as to build an ROI of dropped-out users.
    *   **The number of purchases made through the platform:** This will tell more about the buying pattern of the user.
    *   **Total revenue from the user:** You can also identify high-revenue users and those who do not add to your app revenue.  
        
3.  **How to name events**:  
    It is advised to name the events as Object + Action to avoid confusion. For example, “Product Added” or “Order Completed” is much unambiguous than “Product” or “Order”.  
      
    
4.  **Take care of your payment data**:  
    In the case of in-app purchases, it is best to have an alternate way to validate the payment through purchase tokens. Failing to do so may lead to compromised accuracy.

In conclusion
-------------

In a nutshell, thinking ahead of how you want to use analytics to improve your app is very important. It is not a good idea to spend most of the time only developing your app, but dedicating only a couple of hours on leveraging analytics to improve it. Make decisions about what you want to know from your event stream, and ensure that the platform you have chosen is able to meet your needs.

> We, at [RudderStack](https://rudderstack.com/), offer you a unified platform for all your event data collection and routing needs, with a special focus on data privacy. With our completely open source data plane, you also get the freedom to customize and transform your event data to suit the destination analytics platform’s requirements. As many destinations charge on a per-event call basis, this can help you save a ton of money!

If you’re interested in knowing more about event data analytics and how to get the most out of it in the best and cheapest way possible, please feel free to [reach out to us](https://rudderstack.com/contact/) with your queries.