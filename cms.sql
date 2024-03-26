-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 04:03 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_cow_details` (IN `cow_id_param` INT)  BEGIN
    SELECT * FROM `cattle` WHERE `cow_id` = cow_id_param;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cattle`
--

CREATE TABLE `cattle` (
  `cow_id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `health` varchar(255) DEFAULT NULL,
  `caretaker_id` int(11) DEFAULT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `room_no` int(11) DEFAULT NULL,
  `weight` decimal(10,2) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `last_vaccination` date DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cattle`
--

INSERT INTO `cattle` (`cow_id`, `age`, `gender`, `health`, `caretaker_id`, `doc_id`, `room_no`, `weight`, `color`, `breed`, `birth_date`, `last_vaccination`, `price`) VALUES
(5, 6, 'M', 'Healthy', 2, 8, 5, '320.80', 'Red', 'Simmental', '2021-09-15', '2021-11-15', '15000.00'),
(6, 2, 'M', 'Healthy', 1, 4, 1, '300.50', 'Brown', 'Jersey', '2022-01-15', '2022-02-15', '10000.00'),
(7, 3, 'F', 'Sick', 2, 5, 2, '250.75', 'Black', 'Holstein', '2021-12-10', '2022-01-10', '2500.00'),
(8, 4, 'M', 'Healthy', 3, 6, 3, '350.25', 'White', 'Angus', '2021-11-05', '2022-01-05', '20000.00'),
(9, 5, 'F', 'Injured', 1, 7, 4, '280.30', 'Spotted', 'Hereford', '2021-10-20', '2021-12-20', '5000.00'),
(10, 6, 'M', 'Healthy', 2, 8, 5, '320.80', 'Red', 'Simmental', '2021-09-15', '2021-11-15', '4500.00'),
(11, 3, 'F', 'Healthy', 3, 4, 2, '260.00', 'Brown', 'Jersey', '2021-08-10', '2022-02-10', '9000.00'),
(12, 4, 'M', 'Sick', 1, 5, 3, '330.50', 'Black', 'Holstein', '2021-07-05', '2022-01-05', '4000.00'),
(13, 2, 'F', 'Healthy', 2, 6, 4, '290.75', 'White', 'Angus', '2021-06-20', '2021-12-20', '5500.00'),
(14, 5, 'M', 'Injured', 3, 7, 5, '310.25', 'Spotted', 'Hereford', '2021-05-15', '2021-11-15', '2000.00'),
(29, 2, 'f', 'health', 4, 6, 3, '18.00', 'black', 'hybi', '2012-12-12', '2012-12-12', '6900.00'),
(30, 1, 'M', 'sick', 3, 7, 2, '500.85', 'white', 'blabala', '2024-02-08', '2024-02-22', '2344.00'),
(33, 2, 'M', 'health', 2, 6, 3, '234.30', 'white', 'ho', '0000-00-00', '2024-02-01', '9000.00'),
(34, 20, 'f', 'healthy', 2, 6, 2, '500.00', 'pink', 'blabala', '0000-00-00', '2024-02-22', '10000.00'),
(35, 20, 'f', 'healthy', 2, 6, 2, '500.00', 'white with dots', 'crosss', '0000-00-00', '2024-02-26', '20000.00'),
(36, 3, 'f', 'healthy', 2, 6, 2, '500.00', 'white with dots', 'crosss', '0000-00-00', '2024-02-22', '20000.00');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `d_id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact` bigint(20) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`d_id`, `name`, `contact`, `specialization`, `hospital`) VALUES
(1, 'Dr.sadguna aithal', 9876543210, 'dentist', 'sadguru health center'),
(2, 'Dr.Dezuivere', 8765432109, 'Psychiatrist', 'dezuivere health center'),
(3, 'Dr.pooja', 7204472899, 'dentist', 'attavar kmc'),
(4, 'Dr. Rahul Kumar', 7654321098, 'Orthopedic Surgeon', 'Columbia Asia Hospital'),
(5, 'Dr. Aarti Gupta', 6543210987, 'Ophthalmologist', 'Manipal Hospital'),
(6, 'Dr. Vikram Mehta', 5432109876, 'Psychiatrist', 'NIMHANS'),
(7, 'Dr. Nisha Verma', 4321098765, 'Gynecologist', 'Cloudnine Hospital'),
(8, 'Dr. Rohit Choudhary', 3210987654, 'ENT Specialist', 'Aster CMI Hospital'),
(10, 'Dr.Smitha', 2109876543, 'balablaa', 'smitha health center'),
(12, 'Dr.Chaithra rao', 8747808789, 'kooli dotru', 'chethana hospital'),
(15, 'Dr.Anirud', 7204472899, 'surgeon', 'city hospital');

-- --------------------------------------------------------

--
-- Table structure for table `dt`
--

CREATE TABLE `dt` (
  `room_no` int(10) NOT NULL,
  `water_supply` int(10) DEFAULT NULL,
  `food_supply` int(10) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dt`
--

INSERT INTO `dt` (`room_no`, `water_supply`, `food_supply`, `capacity`) VALUES
(11, 20, 10, 20),
(24, 98, 34, 3);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `salary` int(255) DEFAULT NULL,
  `phone_no` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `name`, `age`, `address`, `salary`, `phone_no`) VALUES
(1, 'Aarav Sharma', 28, '123 Ganga Nagar, Delhi', 50000, 9876543210),
(2, 'Aditi Patel', 32, '456 Kaveri Street, Mumbai', 60000, 8765432109),
(3, 'Ishaan Gupta', 35, '789 Yamuna Road, Bangalore', 70000, 7654321098),
(4, 'Sunita Reddy', 35, '234 Brigade Road, Bangalore', 75000, 6543210987),
(5, 'Amit Kumar', 30, '345 MG Road, Pune', 60000, 5432109876);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `email` varchar(255) NOT NULL,
  `cow_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`email`, `cow_id`) VALUES
('dezuivere@gmail.com', 7),
('ganeshshathrugna@gmail.com', 4),
('dezuivere@gmail.com', 37),
('dezuivere@gmail.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_no` int(10) NOT NULL,
  `water_supply` int(10) DEFAULT NULL,
  `food_supply` int(10) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_no`, `water_supply`, `food_supply`, `capacity`) VALUES
(1, 100, 200, 20),
(2, 150, 250, 15),
(3, 120, 180, 25),
(4, 80, 150, 25),
(5, 100, 200, 18),
(6, 100, 200, 23),
(7, 650, 230, 21),
(9, 500, 250, 23),
(10, 650, 230, 21),
(11, 20, 10, 20),
(24, 98, 34, 3);

--
-- Triggers `rooms`
--
DELIMITER $$
CREATE TRIGGER `insert_into_dt` AFTER INSERT ON `rooms` FOR EACH ROW BEGIN
    INSERT INTO dt (room_no, water_supply, food_supply, capacity)
    VALUES (NEW.room_no, NEW.water_supply, NEW.food_supply, NEW.capacity);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isadmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `email`, `password`, `isadmin`) VALUES
(18, 'SHWETHA K S', 'dezuivere@gmail.com', 'As12345678', 0),
(19, 'akshay ', 'akshaybkadri@gmail.com', 'akshu@40987A', 0),
(22, 'sharath', 'sharath@gmail.com', 'Sh12345678', 0),
(23, 'poojaaaa', 'pooja@gmail.com', 'Pooja12345678', 0),
(24, 'chaithra', 'chaithra@gmail.com', 'Chai123456789', 0),
(28, 'chaithu', 'chaithra.shrinivasa@iwavesystems.com', 'Ch123456456', 0),
(33, 'ape_with_helmet', 'ganeshshathrugna@gmail.com', 'Pass12345678', 0),
(35, 'Admin', 'admin@gmail.com', 'Pass1234', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cattle`
--
ALTER TABLE `cattle`
  ADD PRIMARY KEY (`cow_id`),
  ADD KEY `caretaker_id` (`caretaker_id`),
  ADD KEY `doc_id` (`doc_id`),
  ADD KEY `room_no` (`room_no`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_no`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cattle`
--
ALTER TABLE `cattle`
  MODIFY `cow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cattle`
--
ALTER TABLE `cattle`
  ADD CONSTRAINT `cattle_ibfk_1` FOREIGN KEY (`caretaker_id`) REFERENCES `employee` (`emp_id`),
  ADD CONSTRAINT `cattle_ibfk_2` FOREIGN KEY (`doc_id`) REFERENCES `doctor` (`d_id`),
  ADD CONSTRAINT `cattle_ibfk_3` FOREIGN KEY (`room_no`) REFERENCES `rooms` (`room_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
