#!/bin/bash

start_time="$(date -u +%s)"

knex migrate:rollback; knex migrate:latest; knex seed:run

wait

end_time="$(date -u +%s)"
elapsed=($end_time-$start_time)
minutes=$((elapsed/60%60))
seconds=$((elapsed%60))

echo "success! Total of $minutes minutes and $seconds seconds elapsed for seeding"