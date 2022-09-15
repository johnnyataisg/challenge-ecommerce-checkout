# Ecommerce Checkout Challenge
## Introduction
A local Boba Tea shop is trying to expand their business online. You have been tasked to help them develop an ecommerce site so that customers can shop online!

Here is an explanation of what I will build as the deliverable for part B:

## Description
A simple web application including the following views/components:
  - A landing page
  - A shopping cart
  - A receipt/confirmation page
  
## Features
1. The main page will show all products available at the shop. This includes the price, name, description, and a picture. The user can click on a button/icon in each card to add it to their cart.
2. The user can at any point, click on the cart icon on the top right corner of the page to open up the cart modal. This modal will show all items the user clicked on, their prices, quantity, and a subtotal and total (plus tax). Cart content should be persisted and should not reset upon refresh of the page.
3. The user can click on the "Checkout" button in the cart modal which adds an order to the database, clears the cart, and brings them to a receipt summary page.

For the deliverable of part B, I will build all of these features along with the database, APIs, and basic UI components. Not all of these will be required to be built by the candidate during the interview. For part C, I will pick certain important parts of part B to omit and leave to the candidate to implement. These will most likely by API calls, certain API definitions, HTML to display data, and would exclude CSS and styling. 

The dependencies for this project should be relatively simple:
1. Next.js
2. TypeScript
3. Prisma
4. Material UI
5. Lint tools
6. Fetch
7. Local SQLite database

## Startin the app
If you just cloned the repo, make sure to run `npm install` and `npm run migrate`. This only needs to happen once.
Do `npm run dev` to start the app.
