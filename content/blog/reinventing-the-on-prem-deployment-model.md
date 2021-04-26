---
title: "Reinventing the On-Prem Deployment Model"
siteMetadescription: "Here's a blog on Deploying and Managing Hybrid Data Infrastructure on the Cloud. The Control Pane - Data Plane Architecture"
date: 2021-04-26T00:00:00+05:30
featureImg: ../assets/markdown/12generic.png
category:
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition:
authorDescription: "Head of Product at RudderStack."
slug: "reinventing-the-on-prem-deployment-model"
weight: 1
---

## Intro

The SaaS software delivery model has completely transformed the industry, and for a good reason. It offers an amazing combination of easiness and maintainability that wasn't possible in the past with older software delivery models. It works amazingly well when we want to deliver software like CRMs, Marketing platforms, etc.

Regardless of its success, there are still challenges with the adoption of SaaS, especially in the enterprise market where security and compliance are of great importance. Today, with the rapid growth of data-related products, the SaaS model is getting even more challenged while compliance and security are not just an enterprise concern anymore.

There's a new architecture and deployment paradigm that is gaining momentum and addresses the issues we have today by merging the best from both worlds, on-prem and SaaS. This new paradigm is based on the separation of the control and data plane. An increasing number of innovative companies use it, and that's what RudderStack is also following. Let's see in more detail why we need a new paradigm and what this new model has to offer.


## The traditional models. SaaS vs. on-prem

Since the introduction of the Cloud, two main delivery models are competing, the first one is a pure SaaS delivery model, and the second is a pure on-prem deployment model. Let's see the pros and cons of each one.


## The SaaS Model

The concept of SaaS is well known. The software is deployed on the vendor's infrastructure, and it is accessible by the customer over the Internet. A typical example of this is Salesforce. Of course, your salespeople don't have to install anything to use the CRM, an Internet connection and a browser is all it takes.

This model has some great advantages, both for the vendor and the customer. Let’s see some of them.


### The Pros

**Extreme deployment velocity**. Your team can access the product and start using it in zero time.

**Zero maintenance & Automatic Updates**. The vendor is fully responsible for maintaining the software. Figuring out IT resources to maintain a tool now transforms into negotiating SLAs with a vendor while any software updates are deployed much faster and without disrupting operations.

**High availability and Scalability**. The vendor can now implement an SRE organization to deliver these SLAs. The customer doesn't have to worry about how to scale up and down the product infrastructure or is on the vendor, who can now apply economies of scale to manage the infrastructure.

**Better Support**. The vendor can now deliver much better support to the customer. There's better observability to what's going on, and as a result, support can be delivered faster and more efficiently.


### The Cons

**Security & Compliance**. Now the security of the software and everything that lives in it is completely out of the customer's control.

**Data Ownership**. This is more related to data infrastructure products, but it becomes more and more important. The data lives mainly outside the premises of the customer. This has, as a result, created another data silo and big liabilities for the customer around data privacy and security.

**Cost**. This is important primarily for a data product. Storing a ton of data on the vendor side, outside of creating another silo, adds additional costs both in storage and network. In contrast, no additional value is added to the data itself.

Looking into the cons and pros of SaaS, one can easily say that the pros are many more compared to cons. The issue here is that, especially for data products, the cons are extremely important.

Privacy regulations are becoming more and more strict, while any kind of data leak has devastating effects on the brand and the people who are trusting it with their information.


## The On-Premises Model

This model exists for a much longer time than SaaS. In fact, SaaS came to replace it. The idea here is pretty simple, the software is deployed on the customer's premises, and after this happens, the total control of it on the customer's side.


### The Cons

**Deployment is a pain**. Deployment cycles are very, very long, especially for infrastructure products.

**Updates** just take forever; in some cases, it's as hard as deploying the software. Any new features take much more time to reach the customer.

**Support** is hard, and its SLAs are bad. Without access to the product and the infrastructure, it's hard to help the customer troubleshoot when something goes wrong.

**Costs** are much, much higher. Without the ability to implement an SRE organization, there aren't any economies of scale in this model. Also, the total cost of ownership is not standard; it heavily depends on how IT is run in each customer.


### The Pros

**Security & Compliance** is under the total control of the customer. This is important for large enterprises, but it becomes pretty much a problem for every company with digital operations.

**Data Ownership** is entirely to the customer. That's not only important for privacy and compliance reasons, but it also contributes to a lower cost of ownership for the data and provides an environment where data quality can be much higher.

Looking into the pros and cons of the on-prem model and comparing it to the SaaS model, we can easily see that they sit on completely different sides of a spectrum. Each one addresses the cons of the other in some way.

The question is, is there a model where we can deliver pros from both these models while avoiding most of their cons?

As we will see, the answer to these questions is yes.


## A Hybrid Model

The Hybrid Cloud Model is attempting to offer all the benefits of SaaS with the security and data ownership of on-premise deployments.

The way that this is done is by separating the architecture into two parts.



*   **Control Plane**. All the business logic lives here.
*   **Data Plane**. Processing and Storage happen here.

This data-control plane distinction is not a new concept. It’s heavily inspired by models found in networking and became popular after K8s introduced the concept in its architecture.

By separating the two, we can have the Control Plane live on the vendor's side while deploying the Data Plane on the customer’s VPC.

The **Control Plane** is responsible for implementing the business logic and deliver the product experience to the customer. Anything that has to do with actual processing or storage happens by the **Data Plane,** and the Control Plane delegates any action to the Data plane. A very small amount of actual data lives on the Control Plane, and usually, it's just metadata that does not add any kind of risk.

The control plane is also responsible for collecting operational telemetry from the data planes. In this way, DevOps and SRE best practices can be implemented by the vendor, and economies of scale can exist.

The **Data Plane** is responsible for all the processing and storage of data. This happens isolated on the customer's VPC, who now has total ownership and control over the data and what happens to it.

The Data Plane receives "commands" from the Control Plane and sends back telemetry data to help the SRE teams identify issues and either fix or communicate ahead of time with the customer's IT team. The issues of troubleshooting on-prem software are mitigated in this way.

The two planes can communicate in a very secure way. For example, at RudderStack, the way the data plane communicates with the Control Plane is through a gRPC connection that is initiated by the Data Plane. By doing this, the customer can have their network completely isolated from the Internet in terms of incoming connections.


### The Benefits

With a hybrid model, we can do the following.

Offer the **security and compliance** that a traditional on-prem deployment offers. Data, processing, and storage lives on the customer’s land, and whatever is communicated back to the control plane is controlled by the customer.

**SaaS onboarding**. By having the control plane living on the vendor's land, we can get close to SaaS products’ onboarding experience. No local installation is needed, and product updates are delivered seamlessly.

Better **support and infrastructure management**. No matter how good the IT team of the customer is, no one knows better than the vendor how to manage their product. This separation of the planes allows the vendor to deploy a powerful SRE team that can monitor and if the customer wants to manage the data plane. Any issues can be addressed faster, even proactively, leading to better SLAs and support.


## Final Thoughts

The hybrid model is here to stay. It's the natural evolution of software delivery models in the era of data as it allows both vendors and customers to get the best from both worlds.

Many innovative companies like[ RudderStack](http://www.rudderstack.com),[ Tecton](http://tecton.ai), and[ Kong](http://konghq.com) have embraced this model with great success, and I'm sure that more will follow.

In the future, we are planning to post more technical information around building and managing a Hybrid Model, so stay tuned.

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
