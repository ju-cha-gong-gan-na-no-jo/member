CREATE TABLE IF NOT EXISTS MEMBER_TYPE
(
    MEMBER_TYPE_NUM INT PRIMARY KEY,
    MEMBER_TYPE VARCHAR(10)
);

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

CREATE TABLE IF NOT EXISTS GUEST
(
    GUEST_NUM INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(5) NOT NULL,
    VISIT_DATE DATE,
    CAR_NUM VARCHAR(9) UNIQUE NOT NULL,
    PHONE_NUM VARCHAR(13) UNIQUE,
    MEMBER_NUM INT,
    MEMBER_TYPE_NUM INT NOT NULL,
    REMARK VARCHAR(20),

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM),
    FOREIGN KEY (MEMBER_NUM) REFERENCES MEMBER_INFO(MEMBER_NUM)
);

CREATE TABLE IF NOT EXISTS CAR_INFO
(
    CAR_NUM VARCHAR(9) PRIMARY KEY,
    MEMBER_NUM INT,
    MEMBER_TYPE_NUM INT NOT NULL,

    FOREIGN KEY (MEMBER_TYPE_NUM) REFERENCES MEMBER_TYPE(MEMBER_TYPE_NUM),
    FOREIGN KEY (MEMBER_NUM) REFERENCES MEMBER_INFO(MEMBER_NUM)
);

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

CREATE TABLE IF NOT EXISTS ACCOUNT_INFO
(
    ACCOUNT_NUM INT PRIMARY KEY,
    USER_ID VARCHAR(20) UNIQUE NOT NULL,
    USER_PW VARCHAR(255) NOT NULL,
    ACCOUNT_TYPE VARCHAR(5)
);

CREATE TABLE IF NOT EXISTS STORE
(
    STORE_NUM INT PRIMARY KEY,
    STORE_NAME VARCHAR(10) UNIQUE NOT NULL,
    PHONE_NUM VARCHAR(13) NOT NULL,
    ADDR VARCHAR(30) NOT NULL,
    OWNER_NAME VARCHAR(8) NOT NULL,
    JOINED_DATE DATE NOT NULL,
    WITHDREW_DATE DATE,    
    ACCOUNT_NUM INT,
    REMARK VARCHAR(20),

    FOREIGN KEY (ACCOUNT_NUM) REFERENCES ACCOUNT_INFO(ACCOUNT_NUM)
);

CREATE TABLE IF NOT EXISTS STORE_PAYMENT_INFO
(
    STORE_PAYMENT_NUM INT AUTO_INCREMENT PRIMARY KEY,
    STORE_NUM INT,
    PAYMENT_DATE DATE,
    PAYMENT INT,

    FOREIGN KEY (STORE_NUM) REFERENCES STORE(STORE_NUM)
);