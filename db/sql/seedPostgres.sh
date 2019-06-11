#!/bin/bash

cwd=$(pwd)

node $cwd/db/sql/getStartValue.js $1

wait

knex migrate:rollback; knex migrate:latest; knex seed:run;

wait

rm $cwd/db/sql/start.json

wait

echo 'success!'