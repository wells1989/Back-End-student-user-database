# Portfolio Project Student / User Database

RESTful API database with express / postgres 

## Installation

npm install

### Dependencies

      "dependencies": {
        "detect-libc": "^2.0.0",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.7",
        "nopt": "^5.0.0",
        "npmlog": "^5.0.1",
        "rimraf": "^3.0.2",
        "semver": "^7.3.5",
        "tar": "^6.1.11"
      }

### Start API

npm start

## Use

### Routes

#### Students

- GET:    /students/

- GET:    /students/:id
- POST:   /students/
- DELETE: /students/:id
- PUT: /students/name/:id
- PUT: /students/email/:id
- PUT: /students/age/:id

#### Auth

- GET: /auth/ (sends message for users to log in, also root page redirects to this route)
- POST: /auth/register
- POST: /auth/login

## Personal Notes

This project was my first solo attempt at creating a responsive RESTful API database using express and Postgres

I focused on 2 key areas:
1. linking the database to express.js via the /students routes, adding GET / POST / PUT / UPDATE requests
2. Creating a users table along with some basic authentication on the /auth/login and /auth/register routes (due to time limitations I kept the username etc variables locally, but if I had more time I would have linked them to Postgres in a similar way to the /student routes.)
