-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Fev-2023 às 23:33
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lol`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `campeoes`
--

CREATE TABLE `campeoes` (
  `campeoes` varchar(150) NOT NULL,
  `lane_desginada` varchar(3) NOT NULL,
  `funçao` varchar(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Extraindo dados da tabela `campeoes`
--

INSERT INTO `campeoes` (`campeoes`, `lane_desginada`, `funçao`, `id`) VALUES
('Jinx', 'BOT', 'Atirador', 1),
('Ahri', 'MID', 'Mago', 2),
('VI', 'JG', 'Lutador', 3),
('Rammus', 'JG', 'Tanque', 4),
('Kayle', 'TOP', 'Lutador', 5),
('Kayn', 'jg', 'Lutador', 6),
('Galio', 'MID', 'Tanque', 7),
('Poppy', 'TOP', 'Tanque', 8),
('Nilah', 'BOT', 'Lutador', 9),
('Volibear', 'TOP', 'Lutador', 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `inscrever`
--

CREATE TABLE `inscrever` (
  `nome` varchar(30) DEFAULT NULL,
  `nickname` varchar(30) NOT NULL,
  `senha` int(6) NOT NULL,
  `confirmarSenha` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `nickname_inscrever` varchar(30) DEFAULT NULL,
  `senha` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `recuperarsenha`
--

CREATE TABLE `recuperarsenha` (
  `nickname_inscrever` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `campeoes`
--
ALTER TABLE `campeoes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `inscrever`
--
ALTER TABLE `inscrever`
  ADD PRIMARY KEY (`nickname`);

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nickname_inscrever` (`nickname_inscrever`);

--
-- Índices para tabela `recuperarsenha`
--
ALTER TABLE `recuperarsenha`
  ADD UNIQUE KEY `nickname_inscrever` (`nickname_inscrever`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `campeoes`
--
ALTER TABLE `campeoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`nickname_inscrever`) REFERENCES `inscrever` (`nickname`),
  ADD CONSTRAINT `login_ibfk_2` FOREIGN KEY (`nickname_inscrever`) REFERENCES `inscrever` (`nickname`);

--
-- Limitadores para a tabela `recuperarsenha`
--
ALTER TABLE `recuperarsenha`
  ADD CONSTRAINT `recuperarsenha_ibfk_1` FOREIGN KEY (`nickname_inscrever`) REFERENCES `inscrever` (`nickname`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
