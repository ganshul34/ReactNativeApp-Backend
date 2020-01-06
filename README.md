# Backend for React Native App

A node js app made using express and mongodb

## Running Locally

Make sure you have [Node.js](http://nodejs.org/).

```
git clone https://github.com/ganshul34/ReactNativeApp-Backend.git # or clone your own fork
cd  ReactNativeApp-Backend
npm install
nodemon index.js
```

Your app should now be running on [localhost: 7000](http://localhost:7000/).

## Available endpoints

```
    GET   /api/users
    POST  /api/users
    DELETE /api/user/:id
```
## Database

### `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]` 
```

Place the above code in DB file in api directory

Replace the username and password with the credentials generated on the cloud

This will connect to the mongodb service on the cloud
