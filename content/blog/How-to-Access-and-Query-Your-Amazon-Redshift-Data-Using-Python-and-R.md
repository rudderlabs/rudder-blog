---
title: "How to Access and Query Your Amazon Redshift Data Using Python and R"
siteMetadescription:
date: 2020-08-10T00:00:00+05:30
featureImg: ../assets/7.blog_.rs_-1-750x355.png
category: Tutorials
author: Kostas
authorPic: ../assets/author/Kostas.png
authorPosition: 
authorDescription: "Head of Product at RudderStack."
slug: "access-and-query-your-amazon-redshift-data-using-python-and-r"
---
Overview
--------

In this post, we will see how to access and query your Amazon Redshift data using Python. We follow two steps in this process:

*   Connecting to the Redshift warehouse instance and loading the data using Python
*   Querying the data and storing the results for analysis

Since Redshift is compatible with other databases such as PostgreSQL, we use the Python [**psycopg**](https://www.psycopg.org/) library to access and query the data from Redshift. We will then store the query results as a dataframe in pandas using the [**SQLAlchemy**](https://www.sqlalchemy.org/) library.

The purpose of this exercise is to leverage the statistical techniques available in Python to get useful insights from your Redshift data. Some of the insights that you can get include a better understanding of your customers’ product behavior, predicting churn rate, etc.

> We also have a dedicated blog for [manipulating and querying your Google BigQuery data using Python and R](https://rudderstack.com/blog/how-to-access-and-query-your-bigquery-data-using-python-and-r/), in case you are interested.

> For this post, we assume that you have the data already loaded in your Redshift instance. In case you haven’t, the best way to load your data to Redshift is to leverage Customer Data Infrastructure tools such as RudderStack. They allow you to collect your data across all the customer touch-points, and load them securely into Redshift – or any other warehouse of your choice, with minimal effort.

Connecting to Your Redshift Data Using Python
---------------------------------------------

To access your Redshift data using Python, we will first need to connect to our instance. As mentioned above, Redshift is compatible with other database solutions such as PostgreSQL. Hence, you can safely use the tools you’d use to access and query your PostgreSQL data for Redshift.

We will use the `psycopg` Python driver to connect to our Redshift instance. That said, please feel free to experiment with any other library of your choice to do so.

`gist:Veenap/7aad546da2708b783f88fef8d1ce4c93`


We highly recommend that you use the above code as part of your pipeline, and wrap it in a function that handles any errors. The parameters that you need are typical for connecting to any database:

*   Name of the database
*   Host Name
*   Port
*   User Name
*   Password

Executing Queries on Your Redshift Data Using Psycopg
-----------------------------------------------------

Once the database connection is set up, we can start querying the Redshift data. We use SQL queries to narrow down the amount of data we want for our analysis. 

To do so with `psycopg`, we perform these steps:

*   We get a cursor from our database connection, like so:
`gist:Veenap/d3150fe153f438a3eb1816854f123480`

*   We execute the query from the table that we want to pull our data from:
`gist:Veenap/badae5278b588ba3c875faee13b2264a`

*   Once the query is successfully executed, we instruct `psycopg` to fetch the data from the database. For further data analysis, it makes sense to get the complete dataset. Hence, we run the following command:
`gist:Veenap/15cad1998bed34bf32fbce0d4f0acb6e`

*   Finally, we close the cursor and the connection, like so:
`gist:Veenap/23bc25e94207143507bdb428ca31af65`

The most significant bit here is the SQL query that we execute to fetch the records from the dataset. You can also use SQL to do large chunks of your data preprocessing and set up a proper dataset to make your data analysis a lot easier.

For example, you can join multiple tables in the database, or use the Redshift-supported aggregation functions to create new fields as per your requirement.

Using the Queried Data for Data Analysis
----------------------------------------

Now that we have successfully queried our Redshift data and fetched it for our analysis, it is time to work on it using the data analysis tools we have at our disposal.

When it comes to Python, the most popular libraries for data analysis are `NumPy` and `pandas`:

*   [NumPy](https://www.numpy.org/) is a popular Python library used mainly for numerical computing.
*   [pandas](https://pandas.pydata.org/) is a widely-used data analysis library in Python. It provides a high-performance data structure called DataFrame for working with table-like structures.

No matter what kind of analysis you wish to do, you will need to use one of these two libraries to represent your initial data.

### Loading the Data to NumPy

It is quite straightforward to turn your data into a `NumPy` array. We initialize a new `NumPy` array and pass the cursor containing the query results as a parameter. 

Run the following code in your Python console:

`gist:Veenap/f4dcac030864789e3ca009c2f6d16f7a`

### Loading the Data to pandas

You can also use pandas instead of `NumPy` for your data analysis. For this, however, the steps involved are a bit different. 

Refer to the following code snippet:

`gist:Veenap/5476d1933ce1e47e078acdade7171b92`

As seen in the code above, we will use [**SQLAlchemy**](https://www.sqlalchemy.org/) to connect to our Redshift instance using the connection credentials. Then, we use the [**read\_sql method**](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_sql.html) to make a SQL query on the database. Finally, we can load the results directly into a DataFrame and use it for our analysis.

How to Access and Query Redshift Data Using R?
----------------------------------------------

Loading and querying your Redshift data is equally easy in R. We can use the `RPostgreSQL` package to connect to our Redshift instance and then run queries on the data. 

Here is how to install the package in RStudio:
`gist:Veenap/684239d11f4dcc35def5318903ae9bd6`

The next step is to connect to the Redshift instance, as shown below:
`gist:Veenap/733326d3867d64f38ce15d4c90fab867`


> Note: It is important to close the connection once you are done with pulling the data out of the database.

Querying the data and loading it into a R data frame is quite easy too:
`gist:Veenap/a2b86e08545a5f445f792b0473475e57`

Summary
-------

The first step in any data analysis process is to correctly procure the data and then store it in an easily readable format. In this post, we loaded the Redshift data using Python / R and then queried it to get the data useful for further analysis.

While we focused on Amazon Redshift in this blog, the process is also applicable to other databases like PostgreSQL. In this post, we used psycopg to connect to our Redshift instance – the same Python connector can be used to connect to a PostgreSQL instance as well.

One of the advantages of residing your data within a database as opposed to other formats such as CSV files is the ability to query it using SQL. You can run complex SQL queries to preprocess your data effectively and save a lot of your time and effort in building statistical models for an in-depth data analysis.