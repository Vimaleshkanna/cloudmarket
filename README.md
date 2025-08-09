# cloudmarket (Reactjs + nodejs + mssql)
-------------------------------------------------
This is a full-stack e-commerce web application built with:
	Frontend: Reactjs(Material UI, Bootstrap, Redux, React router)
 	Backend: Nodejs + Express
	Database: MSSQL
 	Authentication: JWT
	Features: Login, Signup, Product Listings, Cart, Checkout, Contentful
 	Deployment: AWS(Ec2 with docker), Gitlab

-----------------------------------------------------
# Architecture

![Alt text](srini23.jpg?raw=true "Title")


## Features
### User Authentication
	Signup with name, email, password, address and phone number
 	Login using JWT-based authentication
## Product Listing
	View all available products from the database
 	Search and Filter products
	View product details
## Shopping Cart
	Add/remove products to cart
 	Update product quantity to cart
	Cart stored in DB
## Checkout
	Checkout with billing/Shipping info
	Place order and save to DB
 	Order confirmation

## Models
### User
```json
{
"name":String
"email" String
"password": hash(bcrypt),
"zipcode": String,
"address1": String,
"address2": String,
"phoneno": String
"role": String
}
```

### Role
```json
{
"name":String,
"access": String,
}
```

### Product

```json
{
  "product_id": "12345",
  "name": "Wireless Bluetooth Headphones",
  "description": "Premium noise-cancelling wireless headphones with superior sound quality and long-lasting battery life.",
  "price": 129.99,
  "availability": "In Stock",
  "created_at": "2025-08-09T12:00:00Z",
  "updated_at": "2025-08-09T12:00:00Z",
  "is_active": true,
  
}```
 	
