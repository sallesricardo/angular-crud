# ANGULAR CRUD

Project based on course from [COD3R](https://www.cod3r.com.br) of [Angular 9](https://angular.io).

## Backend

A simple mock backend based on a db.json served by [json-server](https://my-json-server.typicode.com/).

## Frontend

Code discussed by the course providing a simple CRUD application.
Covering:

- [**C**]reate
- [**R**]ead
- [**U**]pdate
- [**D**]elete

## Preparing

First you will need [Node.js](https://nodejs.org).
Then you will need the Angular CLI to be installed with the following command:

```bash
$ sudo npm install -g @angular/cli
```

### Running the project

#### Backend

Enter `backend` directory:

```bash
$ cd backend
```

Install `json-server` and its dependency.

```bash
$ npm install
```

Start json-server with `npm run`,
After this command, a mock REST API will be served on address `http://localhost:3001`

```bash
$ npm run start
```

#### Frontend

In another terminal, enter the `frontend`directory.

```bash
$ cd frontend
```

Install its dependency.

```bash
$ npm install
```

Start the `ng serve` with the following command.
After this command the `Angular CLI`will compile the code and after a feel seconds you will can access them on address `http://localhost:4200`

```bash
$ npm run start
```
