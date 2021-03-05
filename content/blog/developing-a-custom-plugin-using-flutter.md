---
title: "Developing a Custom Plugin using Flutter"
siteMetadescription: "A tutorial with steps and hands-on code to create a custom plugin using Flutter."
date: 2021-03-05T00:00:00+05:30
featureImg: ../assets/markdown/custompluginiusingflutter.png
category:
author: Sai Venkat Desu 
authorPic: ../assets/author/Desu.png
authorPosition:
authorDescription: "Desu is a Software Engineer in the Integration Team at RudderStack. He develops on Android and iOS SDKs and device-mode Integrations using ReactNative and Flutter."
slug: "developing-a-custom-plugin-using-flutter"
weight: 
---

[Flutter](https://flutter.dev/) is Google's free and open-source UI application development toolkit. It is used to build high-quality native interfaces on Android and iOS using a single codebase. One interesting thing about Flutter is that it works with existing code and is used by developers and organizations worldwide. In this post, we will learn how to develop a custom plugin using Flutter.  

As a part of our SDK roadmap at [RudderStack](https://rudderstack.com/), we wanted to develop a Flutter SDK. Our existing SDKs include features such as storing event details and persisting user details on the database, and much more. However, these features are already implemented in our Android and iOS SDKs.

The Flutter SDK that we intend to develop is also meant to run on either your Android or iOS devices. So, we wanted to develop a solution in which we can use our existing Android and iOS SDK and develop the Flutter SDK.

All the brainstorming finally led us to the idea of developing a custom plugin in Flutter. The custom plugin follows a basic mechanism based on Flutter's flexible system that allows calling platform-specific APIs available in Kotlin or Java on Android or Swift or Objective-C code on iOS.


## Working of the Flutter SDK Across Different Channels

Flutter's built-in platform-specific API support does not rely on code generation but rather on a flexible message-passing style using a Platform Channel. To create a custom plugin, let us understand the Flutter architecture in detail: 




*   The Flutter portion of the app sends messages to its _host_ - the iOS or Android portion of the app, over a platform channel.
*   The _host_ listens on the platform channel and receives the message. It then calls into any number of platform-specific APIs—using the native programming language—and sends a response back to the _client_, the app's Flutter portion, as shown below:



![Architectural overview of how platform channels work between different platforms](../assets/markdown/flutterarchitecture.png)





## Building a Custom Plugin using Flutter


### Getting Started  


The following example demonstrates how to call a platform-specific API to retrieve and display the current battery level. It uses the Android `BatteryManager` API and the iOS `device.batteryLevel` API, via a single platform message, `getBatteryLevel()`. 



### Step 1: Create the Package 


To create a plugin package, 



*   Use the `--template=plugin` flag with the Flutter `create` command.
*   Use the `--platforms=` option followed by a comma-separated list to specify the plugin supports platforms. Available platforms are Android, iOS, web, Linux, macOS, and Windows.
*   Use the `--org` option to specify your organization, using reverse domain name notation. This value is used in various package and bundle identifiers in the generated plugin code.
*   Use the `-a` option to specify the language for Android or the **-i** option to specify the language for iOS.
*   Below is the example command to create a plugin package for Android, iOS platforms while using java for Android and Objective-C for iOS.


`gist:Veenap/72a0f9b636194c5fab2b3d66412aef8c`


*   This command creates a plugin project in the `batteryLevel` folder with the specialized content given as follows:
    *   `lib/batteryLevel.dart -` The Dart API for the plugin.
    *   `android/src/main/java/com/rudderstack/batteryLevel/BatteryLevelPlugin.java` - The Android platform-specific implementation of the plugin API in Java.
    *   `ios/Classes/BatteryLevelPlugin.m` - The iOS-platform specific implementation of the plugin API in Objective-C.
    *   `example/` - A Flutter app that depends on the plugin and illustrates how to use it. 


**Check out how different dart values are received on the platform side and vice versa on the Flutter website.**




### Step 2: Create the Flutter Platform Client 


The app's `State` class holds the current app state. Extend that to hold the current battery state.



*   First, construct the channel by using `MethodChannel` with a single platform method that returns the battery level.
*   The client and host sides of a channel are connected through a channel name that’s passed in the channel constructor.

    **Note: All channel names used in a single app must be unique.** 

*   Prefix the channel name with a unique _domain prefix_. For example, `org.rudderstack.dev/battery`.
*   Open the `batteryLevel.dart` file located in the `lib` folder.
*   Create the `method` channel object as shown below with the channel name as `org.rudderstack.dev/battery`.
*   Please ensure that you are initializing the channel object with the same name as in Flutter across both the Android and iOS platforms.

`gist:Veenap/bd5320cb048e9cdf3b88934c63636210`


*   Next, invoke a method on the method channel, specifying the concrete method to call using the string identifier `getBatteryLevel`. For example, the call might fail if the platform does not support the platform API (such as when running in a simulator). So, wrap the `invokeMethod` call in a `try-catch` statement.
*   Once you get the battery level, return it using the following code:

`gist:Veenap/6e1effa564ebc1f7a68d7bca1ffd1a9a`


*   Now, replace the `example/lib/main.dart` file to contain a small user interface that displays the battery state in a string and a button for refreshing the value:

`gist:Veenap/eb50a75a374469478e0be0bb3a3ccad2`


### Step 3: Add Android Platform-Specific Implementation

Open `BatteryLevelPlugin.java` within `android/src/main/java/com/rudderstack/batteryLevel/` and make the changes as follows:



*   First, change the channel name in the initialization of `MethodChannel` object to `org.rudderstack.dev/battery` as follows: 


`gist:Veenap/bde5e8cb3930343bb8fa6a1db3700ec9`


*   Now, replace `onMethodCall` with the definition shown below to handle the `getBatteryLevel` call and respond with `batteryLevel` as follows:


`gist:Veenap/f69fd8bddd46d9130c648cdf61865107`

### Step 4: Add iOS Platform-Specific Implementation

Open `BatteryLevelPlugin.m` under `ios/Classes/` and make the following changes: 




*   First, change the channel name in the initialization of `FlutterMethodChannel` object to `org.rudderstack.dev/battery` as follows: 


`gist:Veenap/8622982c8f90448d34e4edd8c95a56f4`



*   Next, replace the `handleMethodCall` method with the definition below to handle the `getBatteryLevel` call and respond with `batteryLevel` as follows: 


`gist:Veenap/a0a3f1094d6aab35ef2cd0c5b6ca1f58`

With this, we have successfully developed a custom plugin. Now you can run the plugin across any two platforms (Android and iOS) and understand how it works.


## Publishing the Custom Plugin

Let’s quickly look at a few instructions that you need to keep in mind after developing the custom plugin:



*   After developing the custom plugin, you can publish the custom plugin at [pub.dev](https://pub.dev/) so that other developers can easily use it. However, before publishing, review the `pubspec.yaml`, `README.md`, `CHANGELOG.md`, and `LICENSE` files to ensure that the content is complete and correct.
*   Next, run the publish command in the `dry-run` mode to see if everything passes the analysis: 


**$ flutter pub publish --dry-run**



*   The next step is publishing to [pub.dev](https://pub.dev/), but ensure that you are ready because publishing is a final step that cannot be reverted: 


**$ flutter pub publish**

For more details on publishing, check out the [publishing docs](https://dart.dev/tools/pub/publishing) on dart.dev. 


References: 



*   [https://flutter.dev/docs/development/packages-and-plugins/developing-packages](https://flutter.dev/docs/development/packages-and-plugins/developing-packages)
*   [https://flutter.dev/docs/development/platform-integration/platform-channels?tab=android-channel-java-tab](https://flutter.dev/docs/development/platform-integration/platform-channels?tab=android-channel-java-tab)

You can also check out the following Github repositories:



*   [Sample App created in this post.](https://github.com/desusai7/flutter-custom-plugin)
*   [Rudderstack's Flutter SDK  
](https://github.com/rudderlabs/rudder-sdk-flutter)

You can download Rudderstack`s Flutter SDK as a dependency for your Flutter Apps from[ pub.dev](http://pub.dev).


## Explore More With RudderStack

We currently support over 20 sources, including [Warehouse Actions](https://docs.rudderstack.com/warehouse-actions), [Cloud Extracts](https://docs.rudderstack.com/cloud-extract-sources), and [Event streams](https://docs.rudderstack.com/rudderstack-event-streams). We also support over 80 [destinations](https://docs.rudderstack.com/destinations) and add a new one every two weeks, so be sure to look at the other [integrations](https://rudderstack.com/integration/) we support. [Sign up](https://app.rudderstack.com/signup) with RudderStack Cloud Free to try out these integrations for free! 


Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, explore our open source repos on [GitHub](https://github.com/rudderlabs), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!
