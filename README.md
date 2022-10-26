<h1 align="center">Flitts Backend Test</h1>

This backend application uses [OMDb API](https://www.omdbapi.com/) for movie data.

## Built With

- [Node.js](https://nodejs.org/en/download/)
- [Express.js](https://expressjs.com/en/starter/installing.html)

## How to use the app

### Local

1. Clone the repository
1. Create `.env` file
1. Type `npm install` into CMD or terminal
1. Type `npm start` into CMD or terminal to start up the app
1. Enter request URL (e.g. http://localhost:5000/movie/search)

### Heroku

1. Enter request URL (e.g. https://flitts-backend-test.herokuapp.com/movie/search)

## Set up .env file

Open .env file, and fill in the code below:

```
OMDB_API_KEY=<your_api_key>
```

## Routes

`GET /movie/search`

`GET /movie/detail`
