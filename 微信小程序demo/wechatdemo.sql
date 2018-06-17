/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50136
Source Host           : localhost:3306
Source Database       : wechatdemo

Target Server Type    : MYSQL
Target Server Version : 50136
File Encoding         : 65001

Date: 2018-04-21 10:44:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for art
-- ----------------------------
DROP TABLE IF EXISTS `art`;
CREATE TABLE `art` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of art
-- ----------------------------
INSERT INTO `art` VALUES ('1', 'AAA');
INSERT INTO `art` VALUES ('2', 'BBB');
INSERT INTO `art` VALUES ('3', 'CCC');
INSERT INTO `art` VALUES ('4', 'DDD');
INSERT INTO `art` VALUES ('5', 'EEE');
INSERT INTO `art` VALUES ('6', 'FFF');
INSERT INTO `art` VALUES ('7', 'GGG');
