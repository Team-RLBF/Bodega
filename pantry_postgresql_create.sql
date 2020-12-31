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

CREATE TABLE public.pantry (
	_id serial NOT NULL,
	user_id varchar NOT NULL,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	qty integer,
	category varchar,
	par integer,
	CONSTRAINT pantry_pk PRIMARY KEY (_id)
);

CREATE TABLE public.shopping (
	_id serial NOT NULL,
	user_id varchar NOT NULL,
	pantry_id integer,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	list_qty integer,
	buy_qty integer,
	category varchar,
	CONSTRAINT shopping_pk PRIMARY KEY (_id)
);

INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES ('1', 'Eggs', 'Brown', 'Each', '10', 'Fridge', '12');
INSERT INTO public.pantry (user_id,item_name, note, unit, qty, category, par) VALUES ('2', 'Milk', 'Whole', 'Gallon', '1', 'Fridge', '1');
INSERT INTO public.pantry (user_id,item_name, note, unit, qty, category, par) VALUES ('3', 'Bread', 'White', 'Loaf', '4', 'Pantry', '3');
CREATE TABLE public.auth (
	_id serial NOT NULL,
	user_name varchar NOT NULL,
	passkey varchar NOT NULL,
UNIQUE (user_name)	--CONSTRAINT auth_pk PRIMARY KEY (_id) 
);

-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Eggs', 'Brown', 'Each', '10', 'Fridge', '12');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Milk', 'Whole', 'Gallon', '1', 'Fridge', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (2, 'Bread', 'White', 'Loaf', '4', 'Pantry', '3');

-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Sam Adams', 'Lager', 'Bottle', '12', 'Alcohol');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (2, 'Green beans', 'French Cut', 'Can', '1', 'Canned Goods');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (2, 'Roast Beef', 'Sandwich Cut', 'pkg', '1', 'Deli');

-- psql -d postgres://xvzpelsn:FR_araMqHVuQNjR1SK2lJdaztmjC77Gd@suleiman.db.elephantsql.com:5432/xvzpelsn -f pantry_postgresql_create.sql