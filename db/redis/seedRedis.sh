#!/bin/bash

cwd=$(pwd);
echo $currentWorkingDir
start_time="$(date -u +%s)"
for i in `seq 1 100`;
do
  node $cwd/db/redis/redisDataGenerator.js image
  wait
  cat $cwd/image.txt | redis-cli --pipe
  wait
  rm $cwd/image.txt
  wait
done
end_time2="$(date -u +%s)"
elapsed="$(($end_time2-$start_time))"
echo "Total of $elapsed seconds elapsed for process"
start_time3="$(date -u +%s)"
for i in `seq 1 100`;
do
  node $cwd/db/redis/redisDataGenerator.js product
  wait
  cat $cwd/product.txt | redis-cli --pipe
  wait
  rm $cwd/product.txt
  wait
done
end_time3="$(date -u +%s)"
elapsed="$(($end_time3-$start_time3))"
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
