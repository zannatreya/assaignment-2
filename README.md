# assaignment-2
# Mongoose Express CRUD Mastery

## Description
Develop a Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management.data integrity through validation using Zod.

Create a new Node.js Express project.
Set up a MongoDB database using Mongoose for storing user and order data.
Define Data Models
Create Mongoose models for User data based on the provided data structure. 
Define appropriate data types, validations.
Data Types List
userId (number): A unique identifier for the user.
username (string): Denotes the user's unique username, ensuring uniqueness across the system.
password (string): Represents the user's password. The password is securely stored in hashed form, utilizing the bcrypt algorithm for hashing.
fullName (object): An object containing the first and last name of the user.
firstName (string): The first name of the user.
lastName (string): The last name of the user.
age (number): The age of the user.
email (string): The email address of the user.
isActive (boolean): A flag indicating whether the user is active or not.
hobbies (array of strings): An array containing the hobbies of the user.
address (object): An object containing the street, city, and country of the user's address.
street (string): The street of the user's address.
city (string): The city of the user's address.
country (string): The country of the user's address.
orders (array of objects): An array containing the orders of the user.
productName (string): The name of the product in the order.
price (number): The price of the product in the order.
quantity (number): The quantity of the product in the order.


## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB server is running)

## Getting Started

1. Clone the repository:

   ```bash
[(https://github.com/zannatreya/assaignment-2.git)]https://github.com/zannatreya/assaignment-2.git
