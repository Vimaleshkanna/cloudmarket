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

## User Registration (Sign Up)

Accepts name, email, password, zipcode, addressOne, addressTwo, phoneno as input.

Passwords are hashed using bcrypt before storing in the contentful.

we integrated contentful API's in our Login and Regiter

Validates unique email to prevent duplicate accounts.

Returns a success response upon successful registration.

## User Login

Accepts email and password.

Validates credentials against stored hashed passwords.

Generates a JWT access token upon successful authentication.

Token includes user information (excluding password) for session management.

Token-Based Authentication

JWT tokens are signed with a secret key from environment variables.

## Token expiry is configured for security.

Middleware added to verify token for protected routes.

## Error Handling

Centralized error handling middleware for consistent error responses.

Proper HTTP status codes returned for authentication failures.

## Security Measures

Password hashing with salt using bcrypt.

Input validation for required fields.

Environment-based secret management via .env.


## Product Listing
	View all available products from the contentful
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
"zipCode": String,
"addressOne": String,
"addressTwo": String,
"phoneNo": String
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

### Cart History

[{
  "product_id": "12345",
  "name": "Wireless Bluetooth Headphones",
  "description": "Premium noise-cancelling wireless headphones with superior sound quality and long-lasting battery life.",
  "price": 129.99,
  "cart_id": 1,
  "userid": 1,
  "qty": 2,
  "availability": "In Stock",
  "created_at": "2025-08-09T12:00:00Z",
  "updated_at": "2025-08-09T12:00:00Z",
  "is_active": true,
  
}]```

 	
