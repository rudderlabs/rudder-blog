---
title: "RudderStack’s Transformations API"
siteMetadescription: "RudderStack’s Transformations API - what is it and features in detail."
date: 2021-04-13T00:00:00+05:30
featureImg: ../assets/markdown/transformationstechnical.png
category:
author: Amey Varangaonkar
authorPic: ../assets/author/Amey-Varangaonkar.png
authorPosition:
authorDescription: "Content Manager at RudderStack. Loves all things data. Manchester United, music, and sci-fi fan, among other things."
slug: "rudderstacks-transformations-api"
weight: 1
---

**RudderStack Transformations** let you transform any data that you send through RudderStack. You can use them across Event Stream, Warehouse Actions, and Cloud Extract pipelines. They are easy to build, debug, and manage; and they run in real-time, after data collection and before it is delivered to your destination. Simply put, they’re data transformations that work like you think they should. 

Although Transformations is one of the most popular RudderStack features, its API wasn’t accessible to users – until now. We are pleased to release the **RudderStack Transformations API**. With it, you can programmatically add and remove transformations to the platform, create an organization-wide sandbox where your team can store transformations before publishing them to the live environment, define libraries, and version control your transformations.


## What is the RudderStack Transformations API?

The Transformations API allows you to perform various operations on your transformations and libraries via HTTP API calls. The API is integrated with the RudderStack UI so that you can easily access and manage your transformations and libraries. You can even publish multiple transformations in a single operation, functionality that is not yet available on the RudderStack UI.

The Transformations API is a RESTful API. It lets you create and use a transformation and get a JSON object as a response. You can leverage the standard HTTP response codes to determine the success or failure of your API requests.

Some other key features of the Transformations API include: 




*   Lets you to version control all your transformations so that every change in a transformation creates a new version.
*   Lets you store your transformations in an organization-wide sandbox before publishing them.
*   Works with Transformation libraries – modular, reusable JavaScript blocks which you can use in transformations.
*   Authenticates via [Basic HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) mechanism.
*   Checks for successful compilation and execution of new transformations.


## CRUD Operations on Transformations

The Transformations API allows you to perform the standard CRUD (Create, Retrieve, Update, Delete) operations on your transformations. 

Typically, you can create a transformation and get a JSON object as a response. Updating the transformation with any changes creates a new version or **revision**. The API also offers an optional parameter (`publish)` for these operations, which allows you to publish the latest version of the transformation and make the code live for the incoming event traffic.

The API assigns an ID to every published transformation. You can leverage this ID to retrieve, update or delete a transformation. Also, you can get all the revisions made to that transformation.


## Version Control

The API creates a new version of the transformation or the library with every change, allowing you to track the whole lineage of that transformation/library.

The way the Transformations API implements version control is quite interesting. Let’s say you create a transformation. Any update or change in it causes RudderStack to save the older version of the transformation as a revision. You can make multiple such changes to the transformation, and the API will record every such revision, while the current version is always available for you to publish and use. The API also allows you to roll back and use any specific version of the transformation you want to publish via its Publish API.


## Transformation Libraries

The Transformation API exposes libraries for a better development workflow for your transformations. They give you the flexibility to reuse and maintain different versions of your transformation code while sparing you manual, repetitive coding work. 

As mentioned above, these libraries are JavaScript functions that you can write, export, and reuse. Let’s say you write a function that you want to reuse across multiple transformations configured per destination in RudderStack. All you have to do is export it and import the module by the library name in the desired transformation.

**Note**: You can apply all the CRUD operations mentioned in the above section to the libraries as well.

For more information and technical details on using the RudderStack Transformations API, check out the [docs](https://docs.rudderstack.com/adding-a-new-user-transformation-in-rudderstack). We’ve also built some handy transformation templates that you can use to create your transformations. Find them in our [GitHub repository](https://github.com/rudderlabs/sample-user-transformers).


## Try RudderStack Today

Start using a smarter customer data pipeline that builds your customer data lake on your data warehouse. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for RudderStack Cloud Free today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
