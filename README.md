# author-service

> This service stores author information for display on an author page, book page, etc.

## Related Projects

  - https://github.com/the-librarianshr/author-service
  - https://github.com/the-librarianshr/related-books-service
  - https://github.com/the-librarianshr/repo
  - https://github.com/the-librarianshr/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Incoming get requests to '/authors/:id' will render the static files.

On load, the component will make another get request to '/get-author/:id' to search the database for an author with the provided id value. Once that data is returned, the component will update its state with the retrieved information.

The bio section of the author component by default truncates to 180 characters, which will switch to the full bio when the user clicks the 'More' link.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.4.0
- Postgresql 11.3
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Download and install Postgresql per installation instructions (here)[https://www.postgresql.org/download/]

Postgres configuration object have the following structure:
```json
{
  database: database name,
  host: host ip,
  port: potgres port number,
  login: postgres login username,
  password: postgres password
}
```
Build the webpack bundle with ```sh npm run build``` and start the service with ```sh npm start```

Visit the service ip at the '/db/init' route to initialize blank tables before running ```sh npm run seed``` to seed the database with fake data.