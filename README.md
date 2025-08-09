# Steps to run the front-end
## npm install
## npm start


# Steps to run the back-end
## npm install
## add .env.development file
```json PORT=5000
DATABASE_NAME='Ecommerce'
DATABASE_USER_NAME='Ecommerce'
DATABASE_PASSWORD='Ecommerce2025@'
DATABASE_HOST='DESKTOP-BGIJ7UQ\MSSQLSERVER02'
DATABASE_DIALECT='mssql'
NODE_ENV='development'
SESSION_SECRECT_KEY='SessionSecretKey'
JWT_SECRET='EcommerceJWTSecrect'
CONTENTFUL_SPACE='fby9g2bb0y33'
CONTENTFUL_ENVIRONMENT='master'
CONTENTFUL_ACCESSTOKEN='03J3THDTIvkkbEP-Rnzr-v3WKViQHJUqc6UP26W0M7Q'
CONTENTFUL_MANAGEMENT_ACCESSTOKEN='CFPAT-ccNxjO9QIBxvSJzbUQn2yKVRF2lEfOhrDKZtlzpUA9s'
```
## node app.js

# Branch struture
## master -> main(Branch to run)

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

# Output screenshots

<img width="1824" height="927" alt="image" src="https://github.com/user-attachments/assets/5366b069-0e43-44b9-9d9f-cb1f10208af4" />

<img width="1898" height="895" alt="image" src="https://github.com/user-attachments/assets/fa5a46c5-961d-4f3f-b09c-ed4e32a450db" />

<img width="1850" height="936" alt="image" src="https://github.com/user-attachments/assets/7f488b0f-2c28-4aa6-9bb3-8e12f643b112" />

<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/75850321-f71c-4cc1-aedf-66d45ee4965e" />




