# REI Product Wrapper

> This a clone of the item page on rei.com. This was built with a team during my time at Hack Reactor. We used a SOA and reverse proxy architecture, test driven development, and agile development practices.

## Related Projects
  #### Services
  - https://github.com/montyjs/checkout-tm-service
  - https://github.com/montyjs/jb-description
  #### Proxy Server
  - https://github.com/montyjs/mg-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. run `npm install` to install all packages.
2. Add a .env file to the root directory
  - in the .env file include the following
  ```
    PORT=3030
    user='<YOUR POSTGRES SUPERUSER USERNAME>'
    DB_PW='<PASSWORD ASSOCIATED WITH THAT SUPERUSER>'
  ```
3. Seed the DB
  - in package.json, under the seed script, change <YOUR USERNAME HERE> to... your username!
  - Then run the  the seeding script with `npm run-script seed`,
4. Start webpack
  -run `npm run-script build:dev`
5. In another terminal, start express
  -run `npm run-script start:dev`



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

