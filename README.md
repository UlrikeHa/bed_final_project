# BED Final Project
**WINC Academy**

This is my final project of the Back-End-Development course at Winc Academy.

It's aim is to design and develop a RESTful API for an online booking app using Express.js and Prisma.
This is a comprehensive backend solution with a focus on route handling, middleware for tasks like logging and authentication as well as error handling using Prisma and the Prisma client to read, modify and delete the data.

### The app allows users to:

- Login 
- Create, view, update, and delete users
- Create, view, update, and delete hosts
- Create, view, update, and delete properties
- Create, view, update, and delete amenities
- Create, view, update, and delete bookings
- Create, view, update, and delete reviews

### Requirements

-   The API meets the data properties described in the diagram shown earlier and the model is implemented using Prisma.
-   The Prisma model contains the following collections for property and host:
```
Property
--------

amenities[] - (many-to-many)
bookings[] - (1-to-many)
reviews[] - (1-to-many)

Host
----

listings[] - (1-to-many)
```
-   The API has the following endpoints with the corresponding method, route, and description:

| RESOURCE | HTTP METHOD | ROUTE | DESCRIPTION |
|--|--|--|--|
| Login | POST | /login | Returns a token upon a successful user login |
| User | GET | /users | Returns all users and their information |
| User | POST | /users | Create a new user |
| User | GET, PUT, DELETE | /users/:id | Returns a single user, updates it, or deletes it. id is the user's id |
| Booking | GET | /bookings | Returns all bookings and their information |
| Booking | POST | /bookings | Create a new booking |
| Booking | GET, PUT, DELETE | /bookings/:id | Returns a single booking, updates it, or deletes it. id is the booking's id |
| Property | GET | /properties | Returns all properties and their information |
| Property | POST | /properties | Create a new property |
| Property | GET, PUT, DELETE | /properties/:id | Returns a single property, updates it, or deletes it. id is the property's id |
| Review | GET | /reviews | Returns all reviews and their information |
| Review | POST | /reviews | Create a new review |
| Review | GET, PUT, DELETE | /reviews/:id | Returns a single review, updates it, or deletes it. id is the review's id |
| Host | GET | /hosts | Returns all hosts and their information |
| Host | POST | /hosts | Create a new host |
| Host | GET, PUT, DELETE | /hosts/:id | Returns a single host, updates it, or deletes it. id is the host's id |
| Amenity | GET | /amenities | Returns all amenities and their information |
| Amenity | POST | /amenities | Create a new amenity |
| Amenity | GET, PUT, DELETE | /amenities/:id | Returns a single amenity, updates it, or deletes it. id is the amenity's id |

-   The services that are being used for these endpoints use Prisma to use the CRUD operations to retrieve, modify, or delete data from the database. 
-   The API returns the appropriate statuses for successful responses. Use status code 200 for successful requests and 201 for created resources (POST requests). 
-   The API returns the appropriate statuses for unsuccessful responses. Use status code 404 when an resource (id) is not found, 401 for invalid credentials when trying to login and 500 for other general internal errors. 
The API has authentication middleware for POST on all routes (e.g. /users) except login, PUT, DELETE on routes that receive an id parameter (e.g. /users/:id)
- The authentication is implemented with JWT
- Implement the query parameters that make the following endpoints possible: 
```
/properties?location=Amsterdam&pricePerNight=88&amenities=Wifi
/bookings?userId=ee4b8bc3-4e54-4e0a-962d-d5a5570db4e7
/users?username=PietVanMolen
/users?email=piet@vanmolen.nl
/hosts?name=Linda+Pollen
```
- Implement an error handler with Sentry

### Starter:
https://github.com/WincAcademy/bed-final-project-boilerplate/tree/main
