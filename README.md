# QuizHire-App 
### Visit the website: https://quizhire.herokuapp.com

## About:

This is a **fully functional, full-stack(MERN), single page application(SPA)** built upon the **Model-View-Controller(MVC) architecture**.  
It is fully responsive and mobile-friendly.

## Objectives: 
### Completed User Stories:
* As a Client,
  * I should be able to make an account for my organizations hiring needs.
  * I should be able to create for my organizations hiring needs.
  * I should be able to see the result of the tests I've created.

* As an Admin,
  * I should be able to create tests too.
  * I should be able to see the result of the tests I've created.
  * I should be able create, read, update and delete questions in the database.

* As a Developer,
  * I should be able to give the test I was invited for.

* As a secure app,
  * No one should be able to get unauthorized access to a view and even if they get access to the view they must not be able to get or post any data.
  
### Upcoming User Stories: 
* As a Client,
  * I should be able to customize the test according to my needs(which questions to put in the test.)
  * I should be able to create coding tests too.
  
* As a secure app,
  * I should be able to optimize my performance even more.

* ... and many more

## Tech-Stack:
### Front-End:
The front-end was developed using **HTML5, CSS3** and **React(a modern javascript-framework)**.  
Latest features of this framework such as **hooks** and **context-api** were utilized for **local state management** and to avoid **props-drilling**.  
**Redux** and **React-Redux** were used for **global state management**.  
**React-Router-Dom** was used to navigate between different views in this SPA.

### Back-End:
The back-end was developed on **NodeJS(a javascript runtime envionment), ExpressJS(a minimalistic web framework)** and **MongoDB(as a database)**.    
**Mongoose(Object-Document-Mapper)** was used to help writing queries for **CRUD** operations in **JS** as an alternative to **NoSQL**.  
**bcryptjs** was used to store passwords as **hashed passwords**.  
**JWT(Javascript web token) authorization** was used to authorize access to **protected endpoints**.

### Connecting the front-end to the back-end REST apis:
**Axios**, a promise-based http library was used to connect the **front-end** to the **back-end REST apis.**

### Deployment:
The app was deployed on **heroku**.  
**The back-end server was responsible for serving both, the front-end code and the REST apis.**


## Try this app in a local environment:
First download the repository or clone it.  
Extract the app folder. 
Go inside the app folder and run a terminal here.
Run this code:  
```
npm install

cd client
npm install
cd ..

npm i -g nodemon
```

Run `mongod` in another terminal (to connect to the local mongodb) or go into server.js and give your MONGODB_URI.

Run `npm run dev` inside the app folder to start both the back-end and the front-end server.

