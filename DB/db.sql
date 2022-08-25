--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 14.4

-- Started on 2022-08-24 21:50:52

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

--
-- TOC entry 2 (class 3079 OID 16385)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 2964 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 32783)
-- Name: task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.task (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    status character varying NOT NULL,
    "userId" uuid
);


ALTER TABLE public.task OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 32792)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 2957 (class 0 OID 32783)
-- Dependencies: 201
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.task (id, title, description, status, "userId") FROM stdin;
24eaa0e1-1b81-4ce7-be38-48f682d50eb8	tarea 1	tarea 1	in_progress	86aa4f69-59de-4298-913e-980686285a7a
b0fa0724-1b41-4d88-82d4-76591ab7f0c4	tarea 6	tarea 6	pending	2c4b5e3a-1f65-48df-bc2f-690bf1e7fc2e
f6d4bfb9-7484-47c5-88b9-4a0f40981ab2	tarea 8	tarea 8	pending	2c4b5e3a-1f65-48df-bc2f-690bf1e7fc2e
a0d5be26-c9b5-4620-95dc-5782a974fd13	tarea 5	tarea 5	finished	86aa4f69-59de-4298-913e-980686285a7a
2fc297b4-f010-48a6-823a-3e82d5de3064	tarea 3	tarea 3	finished	86aa4f69-59de-4298-913e-980686285a7a
cf7dbbde-c55d-49ee-96d3-a3b6ca9ea0b8	tarea 7	tarea 7	finished	86aa4f69-59de-4298-913e-980686285a7a
6ec5ce2d-9f00-4c4a-b2cd-8074b21ce473	tarea 5	tarea 5	in_progress	86aa4f69-59de-4298-913e-980686285a7a
261de6d6-31eb-4edc-a69d-087bd475839c	tarea 2 editada	tarea 2 editada	pending	86aa4f69-59de-4298-913e-980686285a7a
\.


--
-- TOC entry 2958 (class 0 OID 32792)
-- Dependencies: 202
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, password) FROM stdin;
2c4b5e3a-1f65-48df-bc2f-690bf1e7fc2e	pepe1234	$2b$10$elsS5Q82Mx1Bsu9sY6JOnuluiB7hY5fr9b8jzd8Xy/Joa9N3uYfaK
86aa4f69-59de-4298-913e-980686285a7a	pepeABCD	$2b$10$EkLu4lflT4AROzVOf3g3BeAYhqDZQei07CJV5b021SWZ5nN6zD372
e3dd388e-5abc-46aa-ad44-66d7cae5d96c	pepeABCD1	$2b$10$L43K01SkhRt7NtMSyf3zi.6PyjWUSg3/vA2Lois33OemHHF2ZONXm
db356cc7-353b-4492-a602-011a3b94aa80	pepeABCD4	$2b$10$7qGNCG7GghaCx6h8tTEVce/YG4jwlojQi64gQ.kgRFDbkFd4NUo4a
\.


--
-- TOC entry 2823 (class 2606 OID 32800)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 2821 (class 2606 OID 32791)
-- Name: task PK_fb213f79ee45060ba925ecd576e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id);


--
-- TOC entry 2825 (class 2606 OID 32802)
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- TOC entry 2826 (class 2606 OID 32803)
-- Name: task FK_f316d3fe53497d4d8a2957db8b9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES public."user"(id);


-- Completed on 2022-08-24 21:50:52

--
-- PostgreSQL database dump complete
--

