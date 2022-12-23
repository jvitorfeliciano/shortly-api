--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    short_url text NOT NULL,
    url text NOT NULL,
    user_id integer NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (5, '54da8eda', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 3, 0, '2022-12-21 16:36:25.390206');
INSERT INTO public.urls VALUES (6, '9ee0d11a', 'https://twitter.com/joaoamoedonovo/status/1581427249953538048?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet', 3, 0, '2022-12-21 16:36:42.2266');
INSERT INTO public.urls VALUES (7, 'b1418ebb', 'https://www.w3schools.com/nodejs/', 3, 0, '2022-12-21 16:36:57.400402');
INSERT INTO public.urls VALUES (1, '6a499860', 'https://open.spotify.com/artist/6UcJxoeHWWWyT5HZP064om', 3, 3, '2022-12-21 16:15:14.512001');
INSERT INTO public.urls VALUES (3, '79624590', 'https://www.notion.so/bootcampra/Materiais-5d1fe6e0d1764b0e94ed6b0a65827c98', 3, 4, '2022-12-21 16:30:17.166272');
INSERT INTO public.urls VALUES (10, '2c63e638', 'https://www.w3schools.com/php/default.asp', 5, 0, '2022-12-21 16:43:34.70059');
INSERT INTO public.urls VALUES (8, 'dc7adb4b', 'https://www.youtube.com/@TraversyMedia/playlists', 5, 2, '2022-12-21 16:43:09.973571');
INSERT INTO public.urls VALUES (9, '66c38e66', 'https://www.w3schools.com/REACT/DEFAULT.ASP', 5, 1, '2022-12-21 16:43:19.342445');
INSERT INTO public.urls VALUES (12, '5b83197c', 'data:image/jpeg;base64,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', 7, 4, '2022-12-23 01:43:12.874833');
INSERT INTO public.urls VALUES (4, '0a0752ae', 'https://ajuda.sharpspring.com.br/hc/pt-br/articles/4474117291291-Como-Usar-o-Postman-para-testar-m%C3%A9todos-da-API-SharpSpring#:~:text=Realizando%20uma%20Requisi%C3%A7%C3%A3o&text=Aqui%20voc%C3%AA%20ir%C3%A1%20fornecer%20o,uma%20requisi%C3%A7%C3%A3o%20API%20via%20Postman.', 3, 1, '2022-12-21 16:36:13.685482');
INSERT INTO public.urls VALUES (11, 'b1aef460', 'https://open.spotify.com/album/0W2k8xZhYcJI23jYMqWfOY', 7, 1, '2022-12-23 01:36:55.743024');
INSERT INTO public.urls VALUES (15, '593a2a56', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:28.641977');
INSERT INTO public.urls VALUES (16, '25bb15d6', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:29.937818');
INSERT INTO public.urls VALUES (17, 'fe47db8d', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:31.024615');
INSERT INTO public.urls VALUES (18, '0018e97c', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:32.383075');
INSERT INTO public.urls VALUES (19, 'd8fd8ea2', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:33.352896');
INSERT INTO public.urls VALUES (20, 'ee4a680d', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:36.11402');
INSERT INTO public.urls VALUES (21, '134e84df', 'https://www.notion.so/bootcampra/Projeto-Shortly-API-3ef2afe78c254d069f862c036efa6f04', 7, 0, '2022-12-23 02:05:37.307713');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'João', 'j@j.com', '123', '2022-12-21 15:36:44.521707');
INSERT INTO public.users VALUES (3, 'vitor', 'v@v.com', '$2b$10$yvNJlZTGE29ELt.kmhQi7e1njgaRqJjPy2bomWi4RhFkTRSx7dmWS', '2022-12-21 16:10:58.015414');
INSERT INTO public.users VALUES (4, 'mateus', 'm@m.com', '$2b$10$AYpCDs.JIczolkNhhx3vJ.AnmJqqbYNSSpiTBw/ReyUMAUM18kdZG', '2022-12-21 16:20:57.943876');
INSERT INTO public.users VALUES (5, 'oscar', 'o@o.com', '$2b$10$5IwRJ5fVIrQPoQdkEnJ3n.VQuU11aVWe2NEkQdMGtp9hdGkqaQ7o6', '2022-12-21 16:21:18.983091');
INSERT INTO public.users VALUES (6, 'g', 'g@g.com', '$2b$10$mkj.uBG49FimCjbty5smyOrEJFDLrIHGHaWq9HwXWuC6fzvtP0v/u', '2022-12-23 01:22:51.024399');
INSERT INTO public.users VALUES (7, 'h', 'h@h.com', '$2b$10$VmJ3Mgc3TKjCkw7xs/3z4OiMpusnLS8WmpGvuSnWPDB66NgZKAlE6', '2022-12-23 01:32:32.971265');
INSERT INTO public.users VALUES (8, 'i', 'i@i.com', '$2b$10$8fkEn7h4IKNV9g2PSEi.G.wYZztpyCm7s2.TLg5FZ5u3H3qBf/qtq', '2022-12-23 02:00:06.320814');
INSERT INTO public.users VALUES (9, 'y', 'y@y.com', '$2b$10$xKGoDBAlNvM7gMAqAIX6Z.Wg3XHALB7OhLk6GCrFj3wnCV9i6VTEy', '2022-12-23 02:07:23.196391');
INSERT INTO public.users VALUES (10, 'p', 'p@p.com', '$2b$10$owAMstLBAYkNk82xKlpbC.7m3rw4BqbW2wW.Al5dhyFXgAzjDLSpW', '2022-12-23 02:08:36.114607');
INSERT INTO public.users VALUES (11, 'z', 'z@z.com', '$2b$10$ijo5J2215vRuW1SkdjCnduWcaSSUkBvWHbX2pRuQJXhEJSSv5S6Sy', '2022-12-23 02:08:49.953343');
INSERT INTO public.users VALUES (12, 'q', 'q@q.com', '$2b$10$Z6jkRsRFXXZ/ZwxNAibFJ.j2CxmoYabMsFc5Ggk4QE03gl1qftMxq', '2022-12-23 02:09:02.049708');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 21, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

