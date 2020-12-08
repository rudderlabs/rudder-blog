---
title: "Simplifying Event Filtering and Value Aggregation with RudderStack"
date: 2020-05-20T00:00:00+05:30
featureImg: ../assets/15.blog_.rs_-750x355.png
category: Engineering
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition: 
authorDescription: "Head of Product at RudderStack."
slug: "simplifying-event-filtering-and-value-aggregation-with-rudderstack"
---
Dealing with event data is dirty work at times. Developers may transmit events with errors because of a change a developer made. Also, sometimes errors could be introduced if the data engineering team decides to change something on the data warehouse schema. Due to these changes to the schema, data type conflict may occur.  How can someone deal with all the different event data issues that might arise in a production environment? This blog discusses how [RudderStack](http://www.rudderstack.com) handles event filtering and value aggregation without introducing manual errors.  

RudderStack’s solution is a sophisticated mechanism. Here, you can implement custom logic using JavaScript to define transformations. You can apply these transformations to the incoming events.  

Having an expressive environment like RudderStack offers endless possibilities of how a data engineering team can interact with the data. In this blog post, we will explore just two of the most common use cases we’ve encountered among the RudderStack community. Event filtering and value aggregation are universal, simple to implement, yet very powerful. 

User Transformation for Event Filtering and Value Aggregation
-------------------------------------------------------------

You can define user transformations in the Configuration Plane of your RudderStack setup. Few sample user transformations are available on our [GitHub](https://github.com/rudderlabs/sample-user-transformers). This blog provides an insight into one such sample transformation that you can use for:

*   **Event Filtering:** This stops events from passing to a destination. You might need to filter events where an organization employs multiple tools/platforms for addressing different business requirements. Also, you may want to route only specific events to specific tool/platform destinations.
*   **Value aggregation:** This allows aggregation of values on specific attributes of particular event types. You might need to aggregate values where an organization is not looking to employ a tool/platform to perform transaction-level record keeping and/or analysis. Instead, they want consolidated records/analytics. So, this kind of transformation helps in reducing the network traffic, and request/message volume. This is because the system can replace multiple events of a particular type by a single event of the same type with the aggregated value(s). This transformation also helps in cost reduction, where the destination platform charges by volume of events/messages. 

You can view the sample transformation on our [GitHub](https://github.com/rudderlabs/sample-user-transformers/blob/master/Selective_Event_Removal_And_Value_Aggregation_User_Transformation.js) page.

Implementation
--------------

You need to contain all logic within the `transform` function, which takes an array of events as input and returns an array of transformed events. The `transform` function is the entry-point function for all user transformations.

`gist:Veenap/7413876d5886e5ede5782563b5f60a4d`

The code snippet above shows how you can use the `filter` function of JavaScript arrays to filter out events based on the event name.   

A variation of this code is also possible. Here, the values in the array of event names are the ones you _want_ to retain, and you remove the not (`!`) condition from the `return` statement in the penultimate line.  

Below code shows event removal based on a simple check like event name match but more complex logic involving checking the presence of value for a related attribute.

`gist:Veenap/987068179c8fecaab404c0f0c7a47e14`

As you can see from the above examples, you can use the filtered array available as output from one step as the input to the next. As a result, you can daisy-chain the transformation conditions.

  
Finally, the following code shows how you can prepare aggregates for specific attributes across events of a particular type present in a batch. After this, the code returns a single event of the concerned type. Also, the code returns the aggregated values for the corresponding attributes.

`gist:Veenap/987068179c8fecaab404c0f0c7a47e14`

Conclusion
----------

In the above snippet:

*   First, the code collects the `spin_result` events into an array.
*   Then, the code aggregates the values for three attributes – `bet_amount`, `win_amount`, and `no_of_spin` by iterating over the elements of the above array.
*   After this, the system assigns the aggregated values to the respective attributes of the first `spin_result` event in the array.
*   Now, the code separates the events that are not of the target type (`spin_result` in this case) into another array. If there were no such events, an empty array is created.
*   Finally, the system adds the `single spin_result` event to the array created in the previous step, and the result is returned.