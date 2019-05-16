DROP SCHEMA product_schema;
CREATE SCHEMA product_schema;

CREATE TABLE "images" (
    "id" INT   NOT NULL,
    "width" INT   NOT NULL,
    "color" STRING   NOT NULL,
    "orientation" STRING   NOT NULL,
    "url" STRING   NOT NULL
);

CREATE TABLE "product" (
    "id" INT   NOT NULL,
    "product_name" STRING   NOT NULL,
    "company_name" STRING   NOT NULL,
    "item_number" INT   NOT NULL,
    "color" STRING   NOT NULL,
    "thumbnail_url" INT   NOT NULL,
    "price" FLOAT   NOT NULL,
    "rating" FLOAT   NOT NULL,
    "no_ratings" INT   NOT NULL
);


ALTER TABLE "product" ADD CONSTRAINT "fk_product_thumbnail_url" FOREIGN KEY("thumbnail_url")
REFERENCES "images" ("url");

-- Insert into images
INSERT INTO t("product_name", "width", "color", "orientation", "url") 
    VALUES("Tarantulace", 1200, "flame", "side", "https://s3-us-west-2.amazonaws.com/fec-rei/flame/side_out_tarantulace_flame_1.jpg");
    VALUES("Tarantulace", 1200, "flame", "top", "https://s3-us-west-2.amazonaws.com/fec-rei/flame/top_tarantulace_flame_2.jpg"),
    VALUES("Tarantulace", 1200, "kiwi", "back", "https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/back_kiwi_tarantulace_kiwigrey_5_8.jpg"),
    VALUES("Tarantulace", 1200, "kiwi", "bottom", "https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/bottom_kiwi_tarantulace_kiwigrey_3_8.jpg"),
    VALUES("Tarantulace", 1200, "kiwi", "front_high", "https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/front_kiwi_tarantulace_kiwigrey_4_8.jpg"),
    VALUES("Tarantulace", 1200, "kiwi", "front_low", "https://s3.console.aws.amazon.com/s3/object/fec-rei/kiwi,front_low_kiwi_tarantulace_kiwigrey_4_8.jpg?region=us-west-2&tab=overview"),
    VALUES("Tarantulace", 1200, "kiwi", "side", "https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/side_out_kiwi_tarantulace_kiwigrey_1_8.jpg");

INSERT INTO t("product_name", "company_name", "item_number", "color", "thumbnail_url", "price", "rating","no_ratings")
    VALUES("La Sportiva Tarantulace", "La Sportiva", 830932, "Flame, Kiwi", 1, 80.00, 4.3, 166);