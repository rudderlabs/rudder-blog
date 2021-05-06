---
title: "How to Access and Query Your Google BigQuery Data Using Python and R"
metaTitle: "How to Access and Query Your Google BigQuery Data"
siteMetadescription: "RudderStack details how to access and query Google BigQuery Data using Python and R for that they do sure to connect the Python client to BigQuery instance."
date: 2020-08-04T00:00:00+05:30
featureImg: ../assets/8rs.blog_-750x355.png
category: Tutorials
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition: 
authorDescription: "Head of Product at RudderStack."
slug: "how-to-access-and-query-your-bigquery-data-using-python-and-r"
weight: 
---
Overview
--------

In this post, we see how to load Google BigQuery data using Python and R, followed by querying the data to get useful insights. We leverage the [Google Cloud BigQuery](https://rudderstack.com/integration/gcp-storage/) library for connecting BigQuery Python, and the [bigrquery](https://github.com/r-dbi/bigrquery) library is used to do the same with R. 

We also look into the two steps of manipulating the BigQuery data using Python/R:

*   Connecting to Google BigQuery and accessing the data
*   Querying the data using Python/R

> In this post, we assume that you have all your customer data stored in Google BigQuery.
> 
> If you are interested in learning more about how to get your data from your data sources into tools like Google BigQuery and other data warehouse solutions in real-time, you should explore the [Customer Data Infrastructure tools like RudderStack](https://rudderstack.com).

**Python**
----------

Python is one of the most widely-used general-purpose programming languages out there. It has gained a lot of attention and popularity because of its ease of use and flexibility. 

Many engineers and data science teams also prefer Python because of the extensive libraries and tools available at their disposal to connect with other third-party systems to manipulate the data.

**Connecting Google BigQuery with Python**
------------------------------------------

To query your Google BigQuery data using Python, we need to connect the Python client to our BigQuery instance. We do so using a cloud client library for the Google BigQuery API. You can also choose to use any other third-party option to connect BigQuery with Python; the [BigQuery-Python library](https://github.com/tylertreat/BigQuery-Python) by _tylertreat_ is also a great option. 

We use the Google Cloud BigQuery library because it is stable and officially supported by Google.

> For this post, we assume that you already have a Python development environment set up. If not, we highly recommend you refer to the [Python Development Environment Setup Guide](https://cloud.google.com/python/setup).

To install the library, run the following command from your terminal:

`pip install --upgrade google-cloud-bigquery`

Next, we connect the client to the database. To do this, you will need to download a JSON file that contains the BigQuery service account credentials. If you don’t have a service account, [follow this guide to create one](https://cloud.google.com/iam/docs/creating-managing-service-accounts), and then proceed to download the JSON file to your local machine. 

Now that we have everything set up, we proceed to initialize the connection. The following Python code is used to do so:
`gist:Veenap/49fc2d3fac2abbc4ebc72a558b4f1df8`

In the snippet above, you will need to specify the **`project_id`** and the location of your JSON key file by replacing the **`'path/to/file.json'`** with the actual path to the locally stored JSON file.

> In Google BigQuery, the project is a top-level container and provides default access control across all the datasets.

**Executing Queries on BigQuery Data with Python**
--------------------------------------------------

Now that we have the BigQuery client set up and ready to use, we can execute queries on the BigQuery dataset. 

For this, we use the query method, which inserts a query job into the BigQuery queue. These queries are then executed asynchronously – in the sense that we do not specify any timeout, and the client waits for the job to complete. As soon as the job is complete, the method returns a `Query_Job` instance containing the results.

For more details on how this method works, please refer to the official documentation [here](https://googlecloudplatform.github.io/google-cloud-python/latest/bigquery/reference.html#google.cloud.bigquery.job.QueryJob).

The required Python code is as follows:
`gist:Veenap/23bf6dec2508dbd7453f2aecb7206da2`

Please note that the above query uses the standard SQL syntax as a default. If you wish you to use legacy SQL, use the code below:
`gist:Veenap/8bfc7c52890816199fa6e36882f0100d`

**R**
-----

R is a popular alternative to Python used by many data scientists and engineers. If detailed, methodical statistical data analysis is your goal, then very few languages are as good as R.

When it comes to working with Google BigQuery, R too offers a robust and easy to use library for data manipulation and querying. For this post, we use the library [**bigrquery**](https://github.com/r-dbi/bigrquery) created and maintained by _Hadley Wickham_, a Chief Scientist at _RStudio_.

For this section, we assume that you have set up the R development environment already. If not, you can always [follow this](https://rstudio-education.github.io/hopr/starting.html) [guide](https://rstudio-education.github.io/hopr/starting.html) to set up RStudio.

**Connecting to Google BigQuery with R**
----------------------------------------

To install bigrquery, we run the following command from within R console:

`install.packages(“bigrquery”)`

And that’s it! We are good to go.

As with Python, we will need to authorize our R client to access Google Cloud Services. As per the [documentation](https://github.com/r-dbi/bigrquery#authentication-and-authorization) for bigrquery, we will follow the prompt within the R console to open the authorization URL and copy the code into the console. 

> Note that this authorization needs to be done only once. The subsequent requests will automatically refresh the access credentials.

**Executing Queries on BigQuery Data with R**
---------------------------------------------

To execute queries on the BigQuery data with R, we will follow these steps:

*   Specify the project ID from the Google Cloud Console, as we did with Python.
*   Form your query string to query the data.
*   Call `query_exec` with your project ID and query string.

The code to implement this is as below:
`gist:Veenap/f887f4a96b6e0590b6e156b27c609fb5`

As with Python, if you wish you can execute queries using legacy SQL, you can change `useLegacySql` to `TRUE` in your `query_exec` function.

**Conclusion**
--------------

In this post, we saw how easy and straightforward it is to access and manipulate the data stored in Google BigQuery using Python and R.

These two languages make it quite easy to build a statistical model on top of this data, which can be used for various purposes – understanding customers’ in-app behavior, predicting the churn rate, etc. are just some of the use-cases.

There is a significant advantage to using a database to store your data compared to using other mediums such as CSV files. Apart from the flexibility to store large volumes of data with varying data types, you can leverage SQL’s power to generate complex queries that give you meaningful insights.

While this post focuses on Google BigQuery, using any other database tool with R and Python is equally easy. The only difference will be the choice of Python/R library used to connect to the database.

## Try RudderStack Today

Start building a smarter customer data pipeline. Use all your customer data. Answer more difficult questions. Send insights to your whole customer data stack. Sign up for [RudderStack Cloud Free](https://app.rudderlabs.com/signup?type=freetrial) today.

Join our [Slack](https://resources.rudderstack.com/join-rudderstack-slack) to chat with our team, check out our open source repos on [GitHub](https://github.com/rudderlabs), subscribe to [our blog](https://rudderstack.com/blog/), and follow us on social: [Twitter](https://twitter.com/RudderStack), [LinkedIn](https://www.linkedin.com/company/rudderlabs/), [dev.to](https://dev.to/rudderstack), [Medium](https://rudderstack.medium.com/), [YouTube](https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw). Don’t miss out on any updates. [Subscribe](https://rudderstack.com/blog/) to our blogs today!