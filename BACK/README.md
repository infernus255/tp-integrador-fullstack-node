## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Modules

```bash
# help
$ nest g --

# create module
$ nest g module moduleNameHere
```

## Controllers

```bash
# create controller
$ nest g controller controllerNameHere

# create controller without specs
$ nest g controller controllerNameHere --no-spec
```

## Services

```bash
# create provider
$ nest g service controllerNameHere

# create provider without specs
$ nest g service controllerNameHere --no-spec
```

## uuid

```bash
# add uuid package
$ yarn add uuid
```

## Validation and Error Handling

```bash
# add validators
$ yarn add class-validator class-transformer
```

## TypeORM

```bash
# add typeorm / typeorm utils for nestjs / postgres
$ yarn add typeorm @nestjs/typeorm pg
```

## Authentication and Authorization

```bash
# add auth module
$ nest g module auth

# add auth service
$ nest g service auth --no-spec

# add auth controller
$ nest g controller auth --no-spec

# add bcrypt for encryption
$ yarn add bcrypt

# add passport.js for jwt ( for test use https://jwt.io/ )
$ yarn add @nestjs/jwt @nestjs/passport passport passport-jwt

# add tools for passport-jwt
$ yarn add @types/passport-jwt
```

## Endpoints

From body parameters, use x-www-form-urlencoded

## Enviroment variables for Windows

NPM scripts are not supported on Windows by default.
We need to install cross-env NPM package globally.

```bash
# install cross-env
$ npm install -g cross-env

# install cross-env yarn
$ yarn global add cross-env

# add env variables
$ cross-env MY_VARIABLE=var yarn start:dev

# add 2 or more env variables in one command
$ cross-env MY_FIRST_VARIABLE=first MY_SECOND_VARIABLE=second yarn start:dev

# add @nestjs/config package
$ yarn add @nestjs/config
```

## License

Nest is [MIT licensed](LICENSE).
