/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zhongjiu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-13 21:05:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for recommend
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend` (
  `goodsid` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) NOT NULL,
  `classify` int(11) NOT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of recommend
-- ----------------------------
INSERT INTO `recommend` VALUES ('1', '201703101457379373680.jpg', '0');
INSERT INTO `recommend` VALUES ('2', '201703101458282942570.jpg', '0');
INSERT INTO `recommend` VALUES ('3', '201703101458343938680.jpg', '0');
INSERT INTO `recommend` VALUES ('4', '201703101458462654880.jpg', '0');
INSERT INTO `recommend` VALUES ('5', '201703101458499938950.jpg', '0');
INSERT INTO `recommend` VALUES ('6', '201703101458556879050.jpg', '0');
INSERT INTO `recommend` VALUES ('7', '201703141146412534670.jpg', '0');
INSERT INTO `recommend` VALUES ('8', '201703141146443578720.jpg', '0');
INSERT INTO `recommend` VALUES ('9', '201703141146500050820.jpg', '0');
INSERT INTO `recommend` VALUES ('10', '201703141147004883000.jpg', '0');
INSERT INTO `recommend` VALUES ('11', '201703141147033275050.jpg', '1');
INSERT INTO `recommend` VALUES ('12', '201703141147091775160.jpg', '1');
INSERT INTO `recommend` VALUES ('13', '201703141147266651460.jpg', '1');
INSERT INTO `recommend` VALUES ('14', '201703141147289115500.jpg', '1');
INSERT INTO `recommend` VALUES ('15', '201703141147354635620.jpg', '1');
INSERT INTO `recommend` VALUES ('16', '201703141147377567660.jpg', '1');
INSERT INTO `recommend` VALUES ('17', '201704072009377178530.jpg', '1');
INSERT INTO `recommend` VALUES ('18', '201704072012359417040.jpg', '1');
INSERT INTO `recommend` VALUES ('19', '201704121143421788430.jpg', '1');
INSERT INTO `recommend` VALUES ('20', '201704121143486528540.jpg', '1');
INSERT INTO `recommend` VALUES ('21', '201704121143564996680.jpg', '2');
INSERT INTO `recommend` VALUES ('22', '201704121144025368780.jpg', '2');
INSERT INTO `recommend` VALUES ('23', '201704121144051576830.jpg', '2');
INSERT INTO `recommend` VALUES ('24', '201704121144079032880.jpg', '2');
INSERT INTO `recommend` VALUES ('25', '201704121144102432920.jpg', '2');
INSERT INTO `recommend` VALUES ('26', '201704121144164833030.jpg', '2');
INSERT INTO `recommend` VALUES ('27', '201704121144250321180.jpg', '2');
INSERT INTO `recommend` VALUES ('28', '201704121144426289490.jpg', '2');
INSERT INTO `recommend` VALUES ('29', '201704121353237533100.jpg', '2');
INSERT INTO `recommend` VALUES ('30', '201704121353267329150.jpg', '2');
INSERT INTO `recommend` VALUES ('31', '201704121353290573190.jpg', '3');
INSERT INTO `recommend` VALUES ('32', '201704121353311633230.jpg', '3');
INSERT INTO `recommend` VALUES ('33', '201704121353367169330.jpg', '3');
INSERT INTO `recommend` VALUES ('34', '201704121353428477440.jpg', '3');
INSERT INTO `recommend` VALUES ('35', '201704121353495401550.jpg', '3');
INSERT INTO `recommend` VALUES ('36', '201704121353516149590.jpg', '3');
INSERT INTO `recommend` VALUES ('37', '201704121353535337620.jpg', '3');
INSERT INTO `recommend` VALUES ('38', '201704191101241283220.jpg', '3');
INSERT INTO `recommend` VALUES ('39', '201705031657054751560.jpg', '3');
INSERT INTO `recommend` VALUES ('40', '201705151042039711570.jpg', '3');
INSERT INTO `recommend` VALUES ('41', '201703101458556879050.jpg', '4');
INSERT INTO `recommend` VALUES ('42', '201703101458343938680.jpg', '4');
INSERT INTO `recommend` VALUES ('43', '201703141147354635620.jpg', '4');
INSERT INTO `recommend` VALUES ('44', '201704072012359417040.jpg', '4');
INSERT INTO `recommend` VALUES ('45', '201704072009377178530.jpg', '4');
INSERT INTO `recommend` VALUES ('46', '201704121353290573190.jpg', '4');
INSERT INTO `recommend` VALUES ('47', '201704121353495401550.jpg', '4');
INSERT INTO `recommend` VALUES ('48', '201704121353516149590.jpg', '4');
INSERT INTO `recommend` VALUES ('49', '201704121353535337620.jpg', '4');
INSERT INTO `recommend` VALUES ('50', '201705151042039711570.jpg', '4');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `account` varchar(32) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', '13632459713', 'e10adc3949ba59abbe56e057f20f883e', null);
SET FOREIGN_KEY_CHECKS=1;
