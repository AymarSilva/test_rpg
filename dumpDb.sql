--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-02-21 02:13:46

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS rpg;
--
-- TOC entry 4846 (class 1262 OID 17495)
-- Name: rpg; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE rpg WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';


ALTER DATABASE rpg OWNER TO postgres;

\connect rpg

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 217 (class 1259 OID 17496)
-- Name: dice; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dice (
    id integer NOT NULL,
    mensagem text
);


ALTER TABLE public.dice OWNER TO postgres;

--
-- TOC entry 4840 (class 0 OID 17496)
-- Dependencies: 217
-- Data for Name: dice; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.dice VALUES (1, 'Na grandiosa era medieval, os cavaleiros alcançaram feitos extraordinários em suas jornadas, desafiando montanhas e enfrentando monstros aterradores. Guiados pela honra e coragem, protegeram reinos e resgataram terras perdidas. Suas espadas brilharam nos campos de batalha, enquanto suas armaduras reluziam sob o sol poente. Cada vitória foi celebrada como um símbolo de lealdade e bravura, mas também marcada por sacrifícios profundos. Ao retornar vitoriosos, eram recebidos com aplausos, reverenciados como heróis imortais. Sua lenda perdurou através das gerações, ecoando em canções e histórias que inspiraram os corações de muitos.') ON CONFLICT DO NOTHING;
INSERT INTO public.dice VALUES (2, 'Apesar da bravura e do fervor, muitos cavaleiros encontraram o fracasso em suas jornadas. Enfrentaram batalhas que se provaram imbatíveis, com forças inimigas maiores do que imaginavam. Suas espadas, uma vez afiadas, tornaram-se pesadas e inúteis diante da imensidão do desafio. Muitos tombaram em campos distantes, suas armaduras quebradas e suas esperanças desfeitas. As terras que buscaram salvar foram tomadas, e os reinos caíram em desespero. Seus nomes, antes celebrados, logo foram esquecidos, seus feitos restando apenas como lamentos silenciosos nas sombras da história. O fracasso, com o tempo, apagou o brilho de seus ideais.') ON CONFLICT DO NOTHING;


--
-- TOC entry 4694 (class 2606 OID 17502)
-- Name: dice dice_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dice
    ADD CONSTRAINT dice_pkey PRIMARY KEY (id);


-- Completed on 2025-02-21 02:13:47

--
-- PostgreSQL database dump complete
--

