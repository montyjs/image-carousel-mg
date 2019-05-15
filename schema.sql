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
