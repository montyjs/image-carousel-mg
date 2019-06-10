#!/bin/bash

# converts a csv file to proper redis format then pipes it to redis through redis-cli

start_time="$(date -u +%s)"
python3 convert.py imageDump.csv image > imageResp.txt
wait
echo "imageResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed for process"
start_time2="$(date -u +%s)"
cat imageResp.txt | redis-cli --pipe
wait
echo "imageResp.txt seeded"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time2))"
echo "Total of $elapsed seconds elapsed for process"
start_time3="$(date -u +%s)"
python3 convert.py productDump.csv product > productResp.txt
wait
echo "productResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time3))"
echo "Total of $elapsed seconds elapsed for process"
start_time4="$(date -u +%s)"
cat productResp.txt | redis-cli --pipe
wait
echo "productResp.txt seeded"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time4))"
echo "Total of $elapsed seconds elapsed for process"
start_time5="$(date -u +%s)"
python3 convert.py shoeSizeDump.csv shoesize > shoeSizeResp.txt
wait
echo "shoeSizeResp.txt created"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time5))"
echo "Total of $elapsed seconds elapsed for process"
cat shoeSizeResp.txt | redis-cli --pipe
wait
echo "shoeSizeResp.txt seeded"
echo "Success!"
end_time="$(date -u +%s)"
elapsed="$(($end_time-$start_time))"
echo "Total of $elapsed seconds elapsed of program"