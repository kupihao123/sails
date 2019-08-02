-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sails
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `platform`
--

DROP TABLE IF EXISTS `platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `platform` (
  `platformId` varchar(45) NOT NULL,
  `id` varchar(45) DEFAULT NULL,
  `platform` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`platformId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platform`
--

LOCK TABLES `platform` WRITE;
/*!40000 ALTER TABLE `platform` DISABLE KEYS */;
INSERT INTO `platform` VALUES ('3ecfefc0-b4f6-11e9-bc75-0336189aaf27','1b235ec0-af53-11e9-a608-913d687b8dec','Mobile','2019-08-02 14:22:12','Active'),('4cddaaa0-b436-11e9-a73e-cf9bc775771a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','IOS','2019-08-01 15:28:12','Active'),('5a586340-b4f5-11e9-a646-a5b17d4cced0','1b235ec0-af53-11e9-a608-913d687b8dec','Mobile','2019-08-02 14:15:49','Expired'),('62bcccf0-b429-11e9-9ee1-e3494be30d2a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','Android','2019-08-01 13:55:45','Expired'),('6c6e0840-b429-11e9-9ee1-e3494be30d2a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','Web Chrome','2019-08-01 13:56:01','Expired'),('887c1df0-b411-11e9-90aa-7b30685304b2','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','Desktop Web Chrome','2019-08-01 11:05:00','Expired'),('99ea65e0-b436-11e9-a73e-cf9bc775771a','1b235ec0-af53-11e9-a608-913d687b8dec','Mobile','2019-08-01 15:30:22','Expired'),('9acbd820-b429-11e9-9ee1-e3494be30d2a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','IOS','2019-08-01 13:57:19','Expired'),('a04e3d20-b4f5-11e9-b264-d95a37149d15','1b235ec0-af53-11e9-a608-913d687b8dec','Mobile','2019-08-02 14:17:46','Expired'),('c287cf90-b429-11e9-9ee1-e3494be30d2a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','IOS','2019-08-01 13:58:26','Expired'),('f5ed01c0-b429-11e9-9ee1-e3494be30d2a','2f2ee5a0-b1cf-11e9-a96d-119f3587b41b','IOS','2019-08-01 13:59:52','Expired');
/*!40000 ALTER TABLE `platform` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-02 15:32:20
