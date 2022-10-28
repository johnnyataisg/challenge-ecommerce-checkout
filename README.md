# Ecommerce Checkout Challenge
## Introduction
A local Boba Tea shop is trying to expand their business online. You have been tasked to help them develop an ecommerce site so that customers can shop online!

## Getting Started
1. `npm install`
2. `npm run migrate`
This only needs to happen once.
Run `npm run dev` to start the app. Each time you boot the app with this command, a script will be run to reset the local database with product data. This is to save you time so you don't need to add product listings yourself.

Your task is to help us complete this ecommerce app by writing code for core logic, APIs, and React components. Your UI does not have to look exactly like the examples. Functionality is more important, but try not to make it ugly either. Try your best to write clean and readable code and adhere to best practices. Good luck!

## Requirements
### 1. Display products in home page
The `Product` table has 4 items stored. Display all these items when the customer lands at the website. You need to display the product photos, name, description, and price. There should also be a button in each product listing that adds the item to the shopping cart. Create a button that when clicked, sorts the products in alphabetical order. Product photos are located in the `public` folder.

![sc1](sc_1.gif?raw=true)

### 2. Modify and view the shopping cart
On the top right corner of the page there is a shopping cart icon. Clicking on this icon should show the cart modal, which contains all the items and their quantities, as well as a subtotal, tax, and total price. The customer can add and remove items as they please. The shopping cart is tied to the `ShoppingCart` table in the database. There should be a `Checkout` button on the bottom. The tax rate should be 7%.

![sc2](sc_2.gif?raw=true)

### 3. Checkout and view receipt
When the customer clicks on the checkout button, an order should be persisted into the databse `Order` table, and the cart should be cleared. The customer is then taken to a receipt page:
`http://localhost:3000/checkout/{orderId}` where they can view their receipt.

![sc3](sc_3.gif?raw=true)

## APIs
You will need to work with Next.js APIs to complete this project. All API code should be written in the `/pages/api` folder. You can choose which client library to use to make REST calls.

### Routes
If a route is enclosed by ** ** it means you have to write the code for it.

`GET /api/products`
Returns all products from the database.

`GET /api/cart`
Returns all shopping cart items + quantity from the database.

** `POST /api/cart/add?product={productId}` **
Adds the product to the shopping cart. Each call should increment quantity by 1. 

** `POST /api/cart/remove?product={productId}` **
Removes an item from the shopping cart. Each call should decrement quantity by 1. If quantity reaches 0, the item should be removed from the database table.

`DELETE /api/cart/clear`
Clears the shopping cart.

** `GET /api/order?id={orderId}` **
Gets the order from the database.

`POST /api/order`
Adds an order to the database. This endpoint accepts a JSON body and saves that JSON body in stringified form to the `summary` column in the `Order` table. 
