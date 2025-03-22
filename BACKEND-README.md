# Debita AI Backend

A NestJS backend service for managing financial transactions, payments, and user management.

## API Documentation

### Authentication
All endpoints except login/register require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Authentication

##### Login
```http
POST /auth/login
```
Request Body:
```json
{
  "email": string,
  "password": string
}
```
Response:
```json
{
  "access_token": string,
  "user": {
    "id": number,
    "email": string,
    "name": string,
    "type": "BUYER" | "SELLER"
  }
}
```

##### Register
```http
POST /auth/register
```
Request Body:
```json
{
  "email": string,
  "password": string,
  "name": string,
  "type": "BUYER" | "SELLER"
}
```

#### Users

##### Get User Profile
```http
GET /users/profile
```
Response:
```json
{
  "id": number,
  "email": string,
  "name": string,
  "type": "BUYER" | "SELLER",
  "phone": string,
  "status": "ACTIVE" | "INACTIVE"
}
```

##### Update User Profile
```http
PUT /users/profile
```
Request Body:
```json
{
  "name": string,
  "phone": string
}
```

##### Get User Dashboard Data
```http
GET /dashboard
```
Response:
```json
{
  "summary": {
    "totalOrders": number,
    "pendingOrders": number,
    "completedOrders": number,
    "canceledOrders": number,
    "totalAmount": number
  },
  "recentTransactions": [
    {
      "id": number,
      "amount": number,
      "status": string,
      "createdAt": string
    }
  ]
}
```

#### Clients (Buyers)

##### List Buyers
```http
GET /buyers?skip=0&take=10&search=string
```
Query Parameters:
- `skip`: Number of records to skip (default: 0)
- `take`: Number of records to take (default: 10)
- `search`: Search term for name or email

##### Create Buyer
```http
POST /buyers
```
Request Body:
```json
{
  "name": string,
  "email": string,
  "phone": string,
  "password": string
}
```

##### Get Buyer Details
```http
GET /buyers/:id
```

##### Update Buyer
```http
PUT /buyers/:id
```
Request Body:
```json
{
  "name": string,
  "email": string,
  "phone": string,
  "status": "ACTIVE" | "INACTIVE"
}
```

##### Delete Buyer
```http
DELETE /buyers/:id
```

#### Sellers

##### List Sellers
```http
GET /sellers?skip=0&take=10&search=string
```
Query Parameters:
- `skip`: Number of records to skip (default: 0)
- `take`: Number of records to take (default: 10)
- `search`: Search term for name or email

##### Create Seller
```http
POST /sellers
```
Request Body:
```json
{
  "name": string,
  "email": string,
  "phone": string,
  "password": string,
  "companyName": string,
  "cnpj": string
}
```

##### Get Seller Details
```http
GET /sellers/:id
```

##### Update Seller
```http
PUT /sellers/:id
```
Request Body:
```json
{
  "name": string,
  "email": string,
  "phone": string,
  "companyName": string,
  "cnpj": string,
  "status": "ACTIVE" | "INACTIVE"
}
```

##### Delete Seller
```http
DELETE /sellers/:id
```

#### Orders

##### List Orders
```http
GET /orders?skip=0&take=10&status=OrderStatus&search=string
```
Query Parameters:
- `skip`: Number of records to skip (default: 0)
- `take`: Number of records to take (default: 10)
- `status`: Filter by order status (PENDING, COMPLETED, CANCELLED)
- `search`: Search term for buyer/seller name or email

##### Create Order
```http
POST /orders
```
Request Body:
```json
{
  "amount": number,
  "buyerId": number,
  "sellerId": number,
  "paymentMethod": "PIX" | "BOLETO" | "CREDIT_CARD",
  "status": "PENDING"
}
```

##### Get Order Details
```http
GET /orders/:id
```

##### Update Order Status
```http
PUT /orders/:id/status
```
Request Body:
```json
{
  "status": "COMPLETED" | "CANCELLED"
}
```

##### Delete Order
```http
DELETE /orders/:id
```

#### Invoices

##### List Invoices
```http
GET /invoices?skip=0&take=10&status=InvoiceStatus&search=string
```
Query Parameters:
- `skip`: Number of records to skip (default: 0)
- `take`: Number of records to take (default: 10)
- `status`: Filter by invoice status (DRAFT, PENDING, PAID, CANCELLED)
- `search`: Search term for invoice number or buyer/seller name

##### Create Invoice
```http
POST /invoices
```
Request Body:
```json
{
  "invoiceNumber": string,
  "type": "PURCHASE" | "SALE" | "SERVICE" | "RENTAL",
  "status": "DRAFT",
  "totalAmount": number,
  "dueDate": string,
  "buyerId": number,
  "sellerId": number
}
```

##### Get Invoice Details
```http
GET /invoices/:id
```

##### Update Invoice
```http
PUT /invoices/:id
```
Request Body:
```json
{
  "invoiceNumber": string,
  "type": "PURCHASE" | "SALE" | "SERVICE" | "RENTAL",
  "status": "DRAFT" | "PENDING" | "PAID" | "CANCELLED",
  "totalAmount": number,
  "dueDate": string
}
```

##### Delete Invoice
```http
DELETE /invoices/:id
```

#### PIX Transactions

[Previous PIX Transactions section remains the same...]

#### Payment Links

[Previous Payment Links section remains the same...]

#### Bank Accounts

[Previous Bank Accounts section remains the same...]

#### Dashboard Analytics

##### Get Charges Summary
```http
GET /dashboard-analytics/charges
```
Response:
```json
{
  "expected": number,
  "issued": number,
  "received": number
}
```

##### Get Customers Summary
```http
GET /dashboard-analytics/customers
```
Response:
```json
{
  "onTime": number,
  "delinquent": number,
  "newThisMonth": number
}
```

##### Get Revenue Summary
```http
GET /dashboard-analytics/revenue
```
Response:
```json
{
  "expected": number,
  "confirmed": number,
  "received": number
}
```

##### Get Revenue Chart Data
```http
GET /dashboard-analytics/revenue/chart
```
Response:
```json
[
  {
    "month": string,
    "expected": number,
    "confirmed": number,
    "received": number
  }
]
```

##### Get Latest Charges
```http
GET /dashboard-analytics/latest-charges
```
Response:
```json
[
  {
    "id": number,
    "invoiceNumber": string,
    "type": string,
    "status": string,
    "totalAmount": number,
    "createdAt": string,
    "buyer": {
      "name": string,
      "email": string
    }
  }
]
```

## Frontend Integration

[Previous Frontend Integration section remains the same...]

## Environment Variables

[Previous Environment Variables section remains the same...]

## Installation

[Previous Installation section remains the same...]

## Development

[Previous Development section remains the same...]