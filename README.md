# REI Product Wrapper

> This a clone of the item page on rei.com. This was built with a team during my time at Hack Reactor. We used a SOA and reverse proxy architecture, test driven development, and agile development practices.gi

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

0. run `npm install` to install all packages.
1. Seed the DB
  - Add your postgress superuser username to the environmental variable. 
    run  `npm config set db_user <YOUR SUPERUSER USERNAME>`
  - Run the seeding script
    -run `npm run-script seed`"cross-var psql -f schema.sql -U $npm_config_db_user",
2. Start webpack
  -run `npm run-script build:dev`
3. In another terminal, start express
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

