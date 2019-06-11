#!/bin/bash

cwd=$(pwd);
echo $currentWorkingDir
start_time="$(date -u +%s)"
node $cwd/db/redis/redisDataGenerator.js image
wait
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed for process"
start_time2="$(date -u +%s)"
cat $cwd/image.txt | redis-cli --pipe
wait
rm $cwd/image.txt
wait
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time2))"
echo "Total of $elapsed seconds elapsed for process"
start_time3="$(date -u +%s)"
node $cwd/db/redis/redisDataGenerator.js product
wait
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time3))"
echo "Total of $elapsed seconds elapsed for process"
start_time4="$(date -u +%s)"
cat $cwd/product.txt | redis-cli --pipe
wait
rm $cwd/product.txt
wait
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time4))"
echo "Total of $elapsed seconds elapsed for process"
start_time5="$(date -u +%s)"
node $cwd/db/redis/redisDataGenerator.js shoesize
wait
cat $cwd/shoesize.txt | redis-cli --pipe
wait
rm $cwd/shoesize.txt
wait
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time5))"
echo "Total of $elapsed seconds elapsed for process"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed for program"
echo 'success'