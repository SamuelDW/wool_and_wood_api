# Wool & Wood API
The API that will drive the Wool &amp; Wood Online Store, and to be used a basis for my own API standards.
Built for a client, an API will enable them to change the frontend as they see fit, in case that the developed
solution is not fit for their needs.

## Tools and Frameworks
This API is built with Node.js 16 [], a MongoDB database [] and Express.js [] as the primary tools.

### Goals and Improvements to self
#### Baseline
- Very limited experience with API's, especially those with a database linked.
- Limited experience with Node.js from work.
- No experience with payment tokenization
- No experience with NoSQL databases

#### Purpose of this project
- Develop a complete API for a shop, with Orders, Products, Customers and Payments functionality, and understand
difficulties in developing an API
- Develop an understanding of how to use NoSQL databases

#### Goals
- Develop a complete API, with best practises applied [ESlint, strict, comments and tests, Prepared statements]
- Have a minimum of 70% test coverage
- Understand how payment API's work
- Understand the complexities in working with a NoSQL database

#### Potential Challenges
- Not developed an API with database interaction, could be complex
- Very little experience with JS classes,
- Not used to testing with Jest and Supertest, so understanding proper testing practises here will be a steep learning curve

## The API

### POST
    - # Creating Products
        The request object should look like this
        ```json
        {
            "name": "name",
            "price": 123.12
            "description": "this is a description",
            "preparationTime": "1-3 years",
            "categories": ["value", "value"],
            "tags": ["value", "value"]
        }
        ```
