#!/bin/bash

mongod --nojournal &amp;

mongoimport -d product_wrapper -c images --type csv --file imageData.csv -f id,size,color,orientation,url --numInsertionWorkers 8;
wait
mongoimport -d product_wrapper -c products --type csv --file productData.csv -f id,product_name,company_name,item_number,color,price,rating,no_ratings --numInsertionWorkers 8;
wait
mongoimport -d product_wrapper -c shoesizes --type csv --file shoeSizeDump.csv -f id,size --numInsertionWorkers 1;

