---
title: "Using SQLite on Unity for Android and iOS"
siteMetadescription:
date: 2020-03-10T00:00:00+05:30
featureImg: ../assets/erik-mclean-C3T8KTZxTFM-unsplash1-750x355.jpg
category: Tutorials
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition: 
authorDescription: "Head of Product at RudderStack."
slug: "mobile-persistent-storage-with-sqlite-on-unity-for-android-and-ios"
---
While going through the [RudderStack](https://github.com/rudderlabs/rudder-server) SDK roadmap, we decided to include Unity next in the list of the supported platforms. Why Unity? We found that despite heavily relying on data, the hosted customer data management solutions out there underserve the gaming industry. This dependency on data is the result of a number of factors. Games generate a high volume of data, especially telemetry data coming from mobile devices while gaming companies face great difficulty in the monetization of their products.

Background
----------

[RudderStack](https://rudderstack.com/) promises to capture user-generated events. We route these events to various destinations, such as cloud applications, data warehouses, and cloud file systems.

For the successful implementation of the Unity SDK, we had four main requirements:

1.  The SDK should implement initialization and event collection mechanisms.
2.  Events should be temporarily stored on persistent storage to ensure the delivery semantics that we want for the platform.
3.  Events should be pushed to the RudderServer. These events will run in different environments.
4.  Finally, there should be a mechanism to handle device-mode SDKs. Device-mode SDKs support a number of destinations that cannot be supported through the RudderStack server-to-server integration. Another intention for device-mode support was to leverage the power of Native SDKs specifically for push notifications, attributions, and more.

The Challenges
--------------

### Choosing the correct C# version for Unity

The first challenge we encountered was choosing the correct C# version. Unity supports .Net 3.5, .Net 4.x, and .Net Standard. However, there are some major changes and incompatibilities between versions 3.5 and 4.x. Many popular games are built on version 3.5. Migrating to 4.x is such a painful process that studios prefer staying on older versions. 

We started developing the Unity SDKs with .Net 4.x. Soon after the release, we realized that many games couldn’t use our SDK because of being developed in version 3.5. In the end, we ended up rewriting around 80 percent of the codebase to go back to version 3.5.

#### Lesson learned from this

Always research well on the following BEFORE you start developing:

1.  Which is the most adopted software version in the industry?
2.  What’s the adoption of the SDKs relevant to our project? Learn and prioritize by identifying what developers are using and why.

These are important considerations, both from the product and engineering points of view.

### Delivering Unity data securely and consistently to the chosen destination

Now came the main challenge, which is also the reason we wrote this blog post. Capturing and transmitting data over unreliable networks is a difficult task. It’s futile to capture data if you don’t manage to deliver it securely and consistently to the chosen destination. One way to deliver the data securely and consistently is to have some kind of caching mechanism to store the events. This mechanism stores the events until you receive the acknowledgment that the data is delivered correctly to the destination. 

You can store events on Unity using [PlayerPrefs](https://docs.unity3d.com/ScriptReference/PlayerPrefs.html). However, we had three major constraints:

1.  We should be able to store an event buffer of arbitrary size. The default buffer size we use in Rudder is 10K events. However, for this case, we wanted to be able to scale it up and down.
2.  There should be the flexibility of defining and enforcing a schema on the events that are stored. PlayerPrefs is a simple key-value store supporting a very limited set of data types and no hierarchy.
3.  Managing the buffer should not happen in the main thread. Working with PlayerPrefs happens in the main thread, which is not a viable option in most cases.

Instead of PlayerPrefs, we decided to use SQLite for this purpose. SQLite is a lightweight, embeddable, and highly reliable SQL database engine that works incredibly well for mobile devices. However, embedding SQLite in Unity is not straightforward.

The Implementation
------------------

### Getting started

.Net and Unity do not support SQLite out of the box. We also wanted to minimize the number of third-party libraries used as much as possible to keep the SDK as lightweight as possible. Collecting events should be extremely lightweight without introducing bugs and a large number of dependencies. 

Initially, we tried to build separate binaries for supporting SQLite and integrating with the Unity SDK. The problem here is that this design is painful to deploy and maintain in production as it is not thread-safe.

### Unity plugins support for Android and iOS

Thus, we finally decided to follow a popular Unity pattern that includes the exploitation of the excellent [plugins](https://docs.unity3d.com/Manual/Plugins.html) supports that Unity offers.

Unity supports code for Android and iOS simultaneously using preprocessor directives. It controls the lines of code that will be executed depending on the platform. We built Android SDK and iOS plugins separately for Unity by exploiting this Unity offering.

For example, our iOS plugin for Unity has a method for initialization of the `RudderClient` that looks like the following code snippet:
`gist:Veenap/d9b874c85ab73df57897002a55cf7999`

This takes all the necessary parameters from the Unity bridge and initiates the `RudderClient`. We have a similar method for Android as follows:
`gist:Veenap/f2b5a2a19bcc2af89f4854da26fb2d74`

Now, when we want to call these methods from our C# code, we can control the calling of these methods as well as the platform using the preprocessor directives at run time. The code in C# looks like this:
`gist:Veenap/988b01d5e120f28eec76e02662bdd9f9`

This code defines the method to be used for the iPhone environment. When we need to call a method, we can check the current runtime and call this method using the code snippet below:
`gist:Veenap/4553cccca8113fe14a4ad5c9ba1c9b76`

Similarly, for Android, we have to define an `AndroidJavaClass` object inside our Unity code so that we can access its methods in our code. To do this, please use the following code:
`gist:Veenap/32195ef4e696bb14c736fe526bcfbac5`

Finally, to call the `initiateInstance` method from our Android Plugin, we will check the runtime and call using the `callStatic` method of the `AndroidJavaClass` object as shown below:
`gist:Veenap/ec43327950e69668741569b1f14d46c5`

### Using the Unity Plugins directory

In addition, Unity supports a special kind of directory under its `Assets` directory named `Plugins`. This directory holds all the platform-specific libraries required for the application. All it takes is to create two folders, one named `Android` and another one named `iOS` inside the `Plugins` folder. Unity will automatically add those files with the final product/build of your project for the corresponding platform.

We leveraged this mechanism and built plugins for both Android and iOS. We added these plugins to the project following the directory structure mentioned above. This way, Unity is able to interop with both JAVA for Android and Object-C for iOS. Due to this, we get a lot of flexibility in terms of the technologies we can interact with. In our case, we could embed SQLite for both Android and iOS in Unity.

Following this approach, we ended up having two plugins, one for each platform and a wrapper Unity app that interops with these plugins to expose the functionality we need. 

> **What just happened:**
> 
> To quickly summarize, the wrapper is written in C# and it takes care of our first requirement of being able to manage the size of the event cache on the client-side. The plugins take care of the rest of the requirements we mentioned at the beginning of the post.

### Adding new destinations

Finally, we wanted to offer as many destinations as possible that are relevant to Unity and mobile development. The most relevant destinations for Unity are Adjust and Firebase. For these two, we support what we call device-mode SDKs. The device-mode SDKs allow events to be pushed to destinations without the need to go through the RadderStack Server.

We decided to build the [Device-Mode mechanism](https://github.com/rudderlabs/rudder-sdk-unity/blob/master/SDK/Rudder/RudderIntegrationManager.cs) in Unity itself and use the Unity SDKs of the platforms. In this way, you can use the platform-supported native code, which offers greater reliability and support for the long term.

Conclusion
----------

Unity is a feature-rich and versatile game development platform. We wanted to offer gamer developers functionalities around data that are commonly accessible to mobile and server-side developers. Although supporting an embedded database is not trivial in Unity, the platform allows you to do it in an elegant way through the plugin system.  
RudderStack and all the SDKs are open-source and available on [GitHub](https://github.com/rudderlabs). You can also find the detailed documentation for this Unity SDK [here](https://docs.rudderstack.com/sdk-integration-guide/getting-started-with-unity-sdk). We’d love to hear your feedback on how to improve our SDKs.