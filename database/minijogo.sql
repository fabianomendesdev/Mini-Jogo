-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Jul-2021 às 17:45
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `minijogo`
--
CREATE DATABASE IF NOT EXISTS `minijogo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `minijogo`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(20) DEFAULT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `user`, `email`, `password`) VALUES
(1, 'Fabiano Mendes', 'fabianoomendes@gmail.com', '987321'),
(2, 'Fabiano', 'fabiano@gmail.com', '123456'),
(3, 'Outro Usuário ', 'outrousuario@gmail.com', '987456'),
(4, 'Novo Usuário', 'novousuario@gmail.com', '123456'),
(5, 'Aluno', 'aluno@aluno.com.br', '321987'),
(6, 'Qui totam dolor even', 'miju@mailinator.com', 'Pa$$w0rd!'),
(7, 'Anim vel optio labo', 'sexo@mailinator.com', 'Pa$$w0rd!'),
(8, 'Blanditiis libero ma', 'jumypylo@mailinator.com', 'jumypylo@mailinator.com'),
(9, 'Pariatur Quasi veli', 'nakum@mailinator.com', 'nakum@mailinator.com'),
(10, 'Dolor sit ab eiusmod', 'nyzejok@mailinator.com', 'nyzejok@mailinator.com'),
(11, 'Necessitatibus dolor', 'kihicarike@mailinator.com', 'kihicarike@mailinator.com'),
(12, 'Nemo et autem unde q', 'henewitufu@mailinator.com', 'henewitufu@mailinator.com'),
(13, 'Natus et corporis es', 'qenego@mailinator.com', 'qenego@mailinator.com'),
(14, 'Voluptate eos rerum ', 'xixam@mailinator.com', 'Pa$$w0rd!'),
(15, 'Quibusdam ut eu cons', 'zadelaza@mailinator.com', 'Pa$$w0rd!');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
