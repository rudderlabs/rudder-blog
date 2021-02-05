---
title: "Protect Your Event Data Before It’s Too Late!!"
siteMetadescription: RudderStack helps to secure the not-so-well-protected data from the third-party vendors.With the open-source, Rudder data plane control over the event data.
date: 2020-03-15T00:00:00+05:30
featureImg: ../assets/photo-1459347268516-3ed71100e718-750x355.jpeg
category: Thoughts & Opinions
author: Soumyadeb Mitra
authorPic: ../assets/author/Soumyadeb-Mitra.png
authorPosition: 
authorDescription: "Founder and CEO of RudderStack. Passionate about finding engineering solutions to real-world problems."
slug: "protect-your-event-data-before-its-too-late"
weight: 1000
---
Most enterprises know that [**PII** (**Personally Identifiable Information**)](https://en.wikipedia.org/wiki/Personal_data) within their customer data is extremely critical, and take extra steps to protect it. Databases holding PII are encrypted. Furthermore, organizations enforce strong access control and every access is logged. All that is really great. In this privacy and security-conscious world, the stakes of losing PII are too high. Not to mention that the risks of losing it now come with heavy penalties, especially with strong data protection laws such as GDPR and CCPA in place now. Event data should be an important consideration for data protection and this is why.  

Unfortunately, the production database is not the only place where all the PII gets dumped. More often than not PII gets included in the log files as well as event streams. To make things worse, events streams and logs are often sent to third parties or are dumped into not-so-well-protected locations, like S3 buckets with loose permissions, for example. In another blog, we talk about [5 Best Practices for Tracking In-app Event Data](https://rudderstack.com/wp-admin/post.php?post=25760&action=edit).

Data Protection gone wrong – A case study
-----------------------------------------

Even the slightest mistake by an individual or a team can lead to the PII being accidentally sent to third-party vendors. As a real-world example, a company once sent out PII (which included emails and phone numbers) to Segment. This PII was then integrated with dozens of other systems – all outside of the firewall. This was a clear violation of the company’s security policies and the laws of the land.  

Who was to be blamed in this case? The company had hired top-notch security professionals to define and implement security policies. However, an inadvertent error by an individual engineer caused the PII to be included in the customer event data. This was then forwarded to third-party vendors. Tools like Segment – while they make it really easy to forward event streams to multiple destinations or third-party vendors – exacerbate the security problems for the exact same reason.  

We built [RudderStack](https://rudderstack.com/) to address this very problem. 

How RudderStack ensures event data privacy and protection
---------------------------------------------------------

With RudderStack, you get complete control over your event data. With the open-source, self-hosted Rudder data plane, your customer event data doesn’t leave your control. Rudder’s transformation framework lets you enforce policies (such as scrubbing for sensitive data) on the event stream before the event data are sent to external third parties. This can prevent accidental leakages like the incident above. Know more about RudderStack’s features in our blog on [Introducing RudderStack](https://rudderstack.com/blog/introducing-rudderstack/).  
If you think data privacy and protection of your customers’ PII is a critical issue that can impact your business, we’re here to help you. [Contact us](https://rudderstack.com/contact/) today!