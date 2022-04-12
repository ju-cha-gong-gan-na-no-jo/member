-- 회원 유형
CREATE TABLE IF NOT EXISTS MEMBER_TYPE
(
    MEMBER_TYPE_NUM INT PRIMARY KEY,
    MEMBER_TYPE VARCHAR(10)
);

-- 회원 관리
CREATE TABLE IF NOT EXISTS MEMBER_INFO
(
    MEMBER_NUM INT PRIMARY KEY,
    NAME VARCHAR(5) NOT NULL,
    DONG INT NOT NULL,
    HO INT NOT NULL,
    PHONE_NUM VARCHAR(13) UNIQUE NOT NULL,
    MEMBER_TYPE_NUM INT NOT NULL,
    REMARK VARCHAR(20),

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM)
);

-- 1회 방문자
CREATE TABLE IF NOT EXISTS GUEST
(
    GUEST_NUM INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(5) NOT NULL,
    VISIT_DATE DATE,
    CAR_NUM VARCHAR(9) NOT NULL,
    PHONE_NUM VARCHAR(13),
    MEMBER_NUM INT,
    MEMBER_TYPE_NUM INT NOT NULL,
    REMARK VARCHAR(20),

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM),
    FOREIGN KEY (MEMBER_NUM) REFERENCES MEMBER_INFO(MEMBER_NUM)
);

-- 차량 정보
CREATE TABLE IF NOT EXISTS CAR_INFO
(
    CAR_INFO_NUM INT AUTO_INCREMENT PRIMARY KEY,
    CAR_NUM VARCHAR(9),
    MEMBER_NUM INT,
    MEMBER_TYPE_NUM INT NOT NULL,

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM),
    FOREIGN KEY (MEMBER_NUM) REFERENCES MEMBER_INFO(MEMBER_NUM)
);

-- 정기 방문자
CREATE TABLE IF NOT EXISTS BOOKED
(
    BOOKED_NUM INT AUTO_INCREMENT PRIMARY KEY,
    BOOKED_PURPOSE VARCHAR(10) NOT NULL,
    VALIDITY DATE NOT NULL,
    PHONE_NUM VARCHAR(13) UNIQUE NOT NULL,
    NAME VARCHAR(5) NOT NULL,
    COMPANY_NAME VARCHAR(10),
    CAR_NUM VARCHAR(9) UNIQUE NOT NULL,
    MEMBER_TYPE_NUM INT NOT NULL,
    REMARK VARCHAR(20),

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM)
);

-- 계정 정보
CREATE TABLE IF NOT EXISTS ACCOUNT_INFO
(
    ACCOUNT_NUM INT AUTO_INCREMENT PRIMARY KEY,
    USER_ID VARCHAR(20) UNIQUE NOT NULL,
    USER_PW VARCHAR(255) NOT NULL,
    ACCOUNT_TYPE VARCHAR(5)
);

-- 상점 정보
CREATE TABLE IF NOT EXISTS STORE
(
    STORE_NUM INT PRIMARY KEY,
    STORE_NAME VARCHAR(10) UNIQUE NOT NULL,
    PHONE_NUM VARCHAR(13) NOT NULL,
    ADDR VARCHAR(30) NOT NULL,
    OWNER_NAME VARCHAR(5) NOT NULL,
    JOINED_DATE DATE NOT NULL,
    WITHDREW_DATE DATE,    
    ACCOUNT_NUM INT,
    REMARK VARCHAR(20),

    FOREIGN KEY (ACCOUNT_NUM) REFERENCES ACCOUNT_INFO(ACCOUNT_NUM)
);

-- 상점 결제 정보
CREATE TABLE IF NOT EXISTS STORE_PAYMENT_INFO
(
    STORE_PAYMENT_NUM INT AUTO_INCREMENT PRIMARY KEY,
    STORE_NUM INT,
    PAYMENT_DATE DATE,
    PAYMENT INT,
	REMARK VARCHAR(30),
    FOREIGN KEY (STORE_NUM) REFERENCES STORE(STORE_NUM)
);

-- 결제 설정 정보
CREATE TABLE IF NOT EXISTS PAY_OPTION
(
    PARK_NUM VARCHAR(3) PRIMARY KEY,
    RETURN_TIME VARCHAR(3),
    PAY_FEE VARCHAR(10),
    START_TIME VARCHAR(20),
    END_TIME VARCHAR(20),
    PARK_DAY_FEE VARCHAR(10),
    REMARK VARCHAR(20)
);

-- 일별 결제 정보
CREATE TABLE IF NOT EXISTS DAILY_PAY_INFO
(
    PAY_INFO_NUM INT AUTO_INCREMENT PRIMARY KEY,
    CAR_NUM VARCHAR(9) NOT NULL,
    IN_TIME DATETIME,
    OUT_TIME DATETIME,
    PAY_STATUS VARCHAR(5),
    COUPON VARCHAR(3),
    COUPON_STATUS VARCHAR(5),
    PAY_AMOUNT VARCHAR(10),
    MEMBER_TYPE VARCHAR(10),
    PARK_NUM VARCHAR(3),
    STORE_NAME VARCHAR(10),
    STORE_NUM INT(3),
    REMARK VARCHAR(20),
    PARK_TIME INT,

    FOREIGN KEY (STORE_NUM) REFERENCES STORE(STORE_NUM),
    FOREIGN KEY (PARK_NUM) REFERENCES PAY_OPTION(PARK_NUM)
);

-- 주차 공간 정보
CREATE TABLE IF NOT EXISTS PARK_AREA
(
    PARK_AREA_NUM INT AUTO_INCREMENT PRIMARY KEY,
    PARK_NUM VARCHAR(3),
    RENTAL_SPACE VARCHAR(4),
    TOTAL_SPACE VARCHAR(4),
    REMARK VARCHAR(20),

    FOREIGN KEY (PARK_NUM) REFERENCES PAY_OPTION(PARK_NUM)
);

-- 일별 주차 현황 정보
CREATE TABLE IF NOT EXISTS PARK_STATUS
(
    PARK_STATUS_NUM INT AUTO_INCREMENT PRIMARY KEY,
    VISIT_DATE VARCHAR(25),
    CAR_NUM VARCHAR(9),
    IN_TIME DATETIME,
    OUT_TIME DATETIME,
    MEMBER_TYPE_NUM INT,
    MEMBER_TYPE VARCHAR(10),
    REMARK VARCHAR(20),

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM)
);