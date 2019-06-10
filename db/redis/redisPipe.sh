#!/bin/bash

# converts a csv file to proper redis format then pipes it to redis through redis-cli

start_time="$(date -u +%s)"
python3 ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/convert.py ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/imageDump.csv image > ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/imageResp.txt
wait
echo "imageResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed for process"
start_time2="$(date -u +%s)"
cat ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/imageResp.txt wait | redis-cli --pipe
wait
echo "imageResp.txt seeded"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time2))"
echo "Total of $elapsed seconds elapsed for process"
start_time3="$(date -u +%s)"
python3 ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/convert.py ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/productDump.csv product > ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/productResp.txt
wait
echo "productResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time3))"
echo "Total of $elapsed seconds elapsed for process"
start_time4="$(date -u +%s)"
cat ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/productResp.txt wait | redis-cli --pipe
wait
echo "productResp.txt seeded"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time4))"
echo "Total of $elapsed seconds elapsed for process"
start_time5="$(date -u +%s)"
python3 ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/convert.py ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/shoeSizeDump.csv shoesize > ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/shoeSizeResp.txt
wait
echo "shoeSizeResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time5))"
echo "Total of $elapsed seconds elapsed for process"
cat ~/Desktop/HackReactor/8-10_Week/mg-product-wrapper/db/redis/shoeSizeResp.txt wait | redis-cli --pipe
wait
echo "shoeSizeResp.txt seeded"
echo "Success!"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed of program"