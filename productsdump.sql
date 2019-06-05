--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: images; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.images (
    id integer NOT NULL,
    size character varying NOT NULL,
    color character varying NOT NULL,
    orientation character varying NOT NULL,
    url text NOT NULL
);


ALTER TABLE public.images OWNER TO cj;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO cj;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.products (
    id integer NOT NULL,
    product_name character varying NOT NULL,
    company_name character varying NOT NULL,
    item_number integer NOT NULL,
    color character varying NOT NULL,
    price numeric NOT NULL,
    rating character varying NOT NULL,
    no_ratings integer NOT NULL
);


ALTER TABLE public.products OWNER TO cj;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO cj;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: shoe_size; Type: TABLE; Schema: public; Owner: cj
--

CREATE TABLE public.shoe_size (
    id integer NOT NULL,
    size numeric NOT NULL
);


ALTER TABLE public.shoe_size OWNER TO cj;

--
-- Name: shoe_size_id_seq; Type: SEQUENCE; Schema: public; Owner: cj
--

CREATE SEQUENCE public.shoe_size_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shoe_size_id_seq OWNER TO cj;

--
-- Name: shoe_size_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cj
--

ALTER SEQUENCE public.shoe_size_id_seq OWNED BY public.shoe_size.id;


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: shoe_size id; Type: DEFAULT; Schema: public; Owner: cj
--

ALTER TABLE ONLY public.shoe_size ALTER COLUMN id SET DEFAULT nextval('public.shoe_size_id_seq'::regclass);


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.images (id, size, color, orientation, url) FROM stdin;
1	thumb	kiwi	back	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi-thumb/back_thumb.png
2	thumb	kiwi	bottom	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi-thumb/bottom_thumb.png
3	thumb	kiwi	front-high	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi-thumb/front_high_thumb.png
4	thumb	kiwi	front-low	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi-thumb/front_low_thumb.png
5	thumb	kiwi	outside	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi-thumb/outside_thumb.png
6	full	kiwi	back	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/back_full.jpg
7	full	kiwi	bottom	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/bottom_full.jpg
8	full	kiwi	front-high	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/front_high_full.jpg
9	full	kiwi	front-low	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/front_low_full.jpg
10	full	kiwi	outside	https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/outside_full.jpg
11	thumb	flame	angle	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/angle_thumb.jpg
12	thumb	flame	back	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/back_thumb.jpg
13	thumb	flame	bottom	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/bottom_thumb.jpg
14	thumb	flame	front	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/front_thumb.jpg
15	thumb	flame	inside	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inside_thumb.jpg
16	thumb	flame	inuse_1	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_1_thumb.jpg
17	thumb	flame	inuse_2	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/inuse_2_thumb.jpg
18	thumb	flame	inuse_3	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/angle_thumb.jpg
19	thumb	flame	outside	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/outside_thumb.jpg
20	thumb	flame	top	https://s3-us-west-2.amazonaws.com/fec-rei/flame-thumb/top_thumb.jpg
21	full	flame	angle	https://s3-us-west-2.amazonaws.com/fec-rei/flame/angle_full.jpg
22	full	flame	back	https://s3-us-west-2.amazonaws.com/fec-rei/flame/back_full.jpg
23	full	flame	bottom	https://s3-us-west-2.amazonaws.com/fec-rei/flame/bottom_full.jpg
24	full	flame	front	https://s3-us-west-2.amazonaws.com/fec-rei/flame/front_full.jpg
25	full	flame	inside	https://s3-us-west-2.amazonaws.com/fec-rei/flame/inside_full.jpg
26	full	flame	inuse_1	https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_1_full.jpg
27	full	flame	inuse_2	https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_2_full.jpg
28	full	flame	inuse_3	https://s3-us-west-2.amazonaws.com/fec-rei/flame/inuse_3_full.jpg
29	full	flame	outside	https://s3-us-west-2.amazonaws.com/fec-rei/flame/outside_full.jpg
30	full	flame	top	https://s3-us-west-2.amazonaws.com/fec-rei/flame/top_full.jpg
31	select	kiwi	 	https://www.rei.com/media/f85ca8b1-5e82-44d6-97c1-cf38c88154b0
32	select	flame	 	https://rei.com/media/4f72b233-00f4-449b-b3c8-c338b526cb05?size=60
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.products (id, product_name, company_name, item_number, color, price, rating, no_ratings) FROM stdin;
1	La Sportiva Tarantulace	La Sportiva	830932	Flame	80.00	4.3	166
2	Mythos Climbing Shoes	Five Ten	271749	Blue	169.44	1.6	115
3	Street Climbing Shoes	evolv	676305	Black	129.15	1.6	208
4	Finale Climbimng Shoes	Black Diamond	346601	Gray	30.30	1.9	22
5	Vapor V Climbing Shoes	Five Ten	829488	Black	43.41	1.6	203
6	Momentum Climbing Shoes	La Sportiva	268449	Maroon	56.68	5.0	108
7	Tarantulace Climbing 	Arc`teryx	891303	Maroon	140.78	4.5	245
8	Mythos Climbing Shoes	Butora	789222	Kiwi	120.61	4.8	3
9	TC Pro Climbing Shoes	Garmont	163932	Black	151.24	4.2	208
10	Tarantulace Climbing 	La Sportiva	730246	Gray	126.88	4.0	216
11	Tarantulace Climbing 	Arc`teryx	905390	Maroon	84.18	1.2	241
12	Origin Climbing Shoes	Arc`teryx	682997	Maroon	42.03	4.3	156
13	Street LV Climbing Shoes	La Sportiva	18002	Khaki	8.65	3.4	38
14	Anasazi Climbing Shoes	Butora	362518	Kiwi	51.78	5.0	18
15	Tarantulace Climbing 	La Sportiva	28462	Brown	46.75	4.6	199
16	Street LV Climbing Shoes	Butora	288314	Maroon	144.86	3.6	149
17	Mythos Climbing Shoes	Garmont	888045	Black	75.56	4.7	209
18	Street LV Climbing Shoes	Arc`teryx	111504	Blue	70.86	2.8	180
19	Finale Climbing Shoes	Five Ten	475184	Maroon	27.71	4.9	1
20	Vapor V Climbing Shoes	Butora	695737	Brown	43.68	3.0	52
21	Mythos Climbing Shoes	Black Diamond	570592	Brown	52.61	5.0	174
22	Techno X Climbing Shoes	Garmont	733745	Black	62.57	4.2	23
23	Anasazi Climbing Shoes	Garmont	802202	Blue	30.93	3.3	232
24	Origin Climbing Shoes	Garmont	472014	Brown	182.69	2.4	55
25	Techno X Climbing Shoes	Butora	312504	Maroon	103.36	4.5	225
26	Finale Climbing Shoes	Garmont	950736	Kiwi	101.67	5.0	120
27	Anasazi Climbing Shoes	La Sportiva	543472	Khaki	114.93	5.0	246
28	Vapor V Climbing Shoes	Five Ten	578737	Brown	41.35	5.0	248
29	Mythos Climbing Shoes	evolv	594419	Gray	154.24	1.9	40
30	Street LV Climbing Shoes	Five Ten	576061	Khaki	17.83	5.0	240
31	Nighthawk Climbing Shoes	Arc`teryx	168739	Maroon	152.82	1.0	127
32	Helix Climbing Shoes	evolv	487751	Brown	42.57	2.1	227
33	Anasazi Climbing Shoes	Black Diamond	892233	Kiwi	91.76	3.3	61
34	Katana Climbing Shoes	Arc`teryx	19270	Kiwi	138.66	2.4	215
35	Street Climbing Shoes	Garmont	107268	Maroon	90.50	3.4	75
36	Mythos Climbing Shoes	evolv	90061	Khaki	174.39	4.5	11
37	Techno X Climbing Shoes	Arc`teryx	38510	Kiwi	34.16	2.6	215
38	Mythos Climbing Shoes	Arc`teryx	512317	Black	43.61	2.7	159
39	Origin Climbing Shoes	Garmont	594593	Kiwi	164.68	2.8	71
40	Street LV Climbing Shoes	evolv	411132	Brown	105.24	3.9	128
41	Mythos Climbing Shoes	La Sportiva	76938	Brown	40.87	4.0	132
42	Katana Climbing Shoes	Butora	585492	Maroon	87.14	5.0	119
43	Tarantulace Climbing 	La Sportiva	537202	Gray	60.94	5.0	235
44	Katana Climbing Shoes	Arc`teryx	362534	Brown	170.02	5.0	38
45	Momentum Climbing Shoes	Garmont	592684	Kiwi	171.69	3.4	157
46	Katana Climbing Shoes	Arc`teryx	936140	Maroon	199.35	4.5	230
47	Anasazi Climbing Shoes	Black Diamond	100039	Khaki	51.45	5.0	228
48	Techno X Climbing Shoes	La Sportiva	590593	Kiwi	130.32	3.6	171
49	Helix Climbing Shoes	evolv	832643	Black	36.70	4.7	221
50	Vapor V Climbing Shoes	La Sportiva	39750	Brown	166.49	3.7	30
51	Street Climbing Shoes	evolv	339160	Kiwi	57.15	5.0	21
52	Finale Climbing Shoes	Arc`teryx	175217	Black	165.35	1.7	231
53	Origin Climbing Shoes	evolv	656515	Gray	188.31	1.7	51
54	Helix Climbing Shoes	Arc`teryx	543836	Khaki	1.86	4.7	189
55	Techno X Climbing Shoes	La Sportiva	391604	Maroon	119.46	3.7	127
56	Katana Climbing Shoes	Arc`teryx	354362	Brown	35.94	1.7	216
57	Nighthawk Climbing Shoes	Five Ten	548778	Maroon	148.25	3.8	209
58	Techno X Climbing Shoes	Arc`teryx	517639	Kiwi	45.75	1.8	110
59	Nighthawk Climbing Shoes	Five Ten	303152	Brown	70.15	1.4	194
60	Street Climbing Shoes	Five Ten	340265	Gray	167.37	2.5	93
61	Street LV Climbing Shoes	La Sportiva	40167	Gray	49.09	5.0	8
62	Techno X Climbing Shoes	La Sportiva	376753	Khaki	121.53	4.7	30
63	Tarantulace Climbing 	Butora	621014	Gray	192.92	4.3	244
64	Nighthawk Climbing Shoes	Arc`teryx	658402	Brown	62.52	2.4	68
65	Mythos Climbing Shoes	Arc`teryx	118150	Khaki	121.87	4.4	228
66	Nighthawk Climbing Shoes	evolv	980607	Brown	113.83	1.2	209
67	Tarantulace Climbing 	evolv	75771	Black	5.96	4.1	236
68	Street LV Climbing Shoes	Arc`teryx	52876	Khaki	82.37	3.4	72
69	TC Pro Climbing Shoes	La Sportiva	376338	Gray	127.13	2.6	246
70	Techno X Climbing Shoes	Butora	412546	Kiwi	48.13	3.8	70
71	Momentum Climbing Shoes	Butora	579275	Khaki	1.22	4.8	27
72	Tarantulace Climbing 	Arc`teryx	826136	Brown	131.51	1.8	204
73	Street Climbing Shoes	Arc`teryx	399709	Black	52.89	5.0	21
74	Momentum Climbing Shoes	Black Diamond	628714	Blue	114.07	5.0	201
75	Origin Climbing Shoes	Five Ten	346363	Brown	92.04	1.0	217
76	Tarantulace Climbing 	Black Diamond	443637	Black	95.67	1.0	71
77	Katana Climbing Shoes	evolv	553094	Maroon	32.26	5.0	243
78	Street LV Climbing Shoes	Five Ten	345668	Maroon	163.81	2.0	178
79	Finale Climbing Shoes	Butora	783379	Khaki	123.48	1.0	9
80	Nighthawk Climbing Shoes	La Sportiva	598548	Khaki	35.41	1.0	155
81	Helix Climbing Shoes	Arc`teryx	321088	Black	74.81	5.0	164
82	Finale Climbing Shoes	Five Ten	85457	Brown	92.40	1.8	65
83	Vapor V Climbing Shoes	Butora	708804	Kiwi	120.29	4.7	37
84	Momentum Climbing Shoes	evolv	41804	Brown	182.62	4.4	76
85	Street LV Climbing Shoes	Black Diamond	454026	Kiwi	111.12	4.1	187
86	Origin Climbing Shoes	La Sportiva	707124	Gray	88.74	3.2	10
87	Finale Climbing Shoes	Five Ten	212493	Kiwi	170.36	4.6	191
88	TC Pro Climbing Shoes	Butora	661295	Blue	154.20	4.7	232
89	Oxygym Climbing Shoes	Garmont	568425	Blue	30.39	3.5	188
90	Street LV Climbing Shoes	Arc`teryx	298559	Maroon	35.63	5.0	165
91	Momentum Climbing Shoes	Five Ten	305175	Blue	128.54	2.7	23
92	Vapor V Climbing Shoes	Garmont	475806	Blue	188.69	5.0	45
93	Street Climbing Shoes	Garmont	325102	Khaki	112.86	4.6	195
94	TC Pro Climbing Shoes	Arc`teryx	392989	Black	57.82	2.7	122
95	Street LV Climbing Shoes	evolv	555844	Khaki	13.10	4.8	129
96	Street LV Climbing Shoes	Black Diamond	609732	Blue	140.04	2.4	109
97	Vapor V Climbing Shoes	La Sportiva	739575	Kiwi	42.68	4.4	16
98	Techno X Climbing Shoes	evolv	632731	Blue	199.10	4.4	221
99	Origin Climbing Shoes	evolv	559390	Kiwi	193.59	2.6	95
100	Origin Climbing Shoes	Butora	254477	Khaki	52.82	1.6	82
101	Oxygym Climbing Shoes	Arc`teryx	798357	Khaki	24.92	5	234
\.


--
-- Data for Name: shoe_size; Type: TABLE DATA; Schema: public; Owner: cj
--

COPY public.shoe_size (id, size) FROM stdin;
1	38
2	38.5
3	39
4	39.5
5	40
6	40.5
7	41
8	41.5
9	42
10	42.5
11	43
12	43.5
13	44
14	44.5
15	45
16	45.5
17	46
18	46.5
19	47
20	47.5
\.


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.images_id_seq', 32, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.products_id_seq', 101, true);


--
-- Name: shoe_size_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cj
--

SELECT pg_catalog.setval('public.shoe_size_id_seq', 20, true);


--
-- PostgreSQL database dump complete
--

