INSERT INTO MEMBER_TYPE(MEMBER_TYPE_NUM, MEMBER_TYPE)
VALUES
(1, "입주민"),
(2, "단기방문자"),
(3, "정기방문자"),
(4, "고객"),
(5, "상점고객");

INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK)
VALUES
(1, "김정균", 101, 101, "010-1111-1111", 1, ""),
(2, "정주영", 101, 102, "010-2222-2222", 1, ""),
(3, "윤치용", 101, 201, "010-3333-3333", 1, ""),
(4, "우정인", 101, 202, "010-4444-4444", 1, ""),
(5, "최한성", 101, 301, "010-5555-5555", 1, ""),
(6, "오현식", 101, 302, "010-6666-6666", 1, ""),
(7, "김태민", 101, 401, "010-7777-7777", 1, ""),
(8, "문승연", 101, 402, "010-8888-8888", 1, ""),
(9, "박수산나", 101, 501, "010-9999-9999", 1, ""),
(10, "성예원", 101, 502, "010-1212-1212", 1, ""),
(11, "신진호", 102, 101, "010-2121-2121", 1, ""),
(12, "안시하", 102, 102, "010-2323-2323", 1, ""),
(13, "오승근", 102, 201, "010-3232-3232", 1, ""),
(14, "유동연", 102, 202, "010-3434-3434", 1, ""),
(15, "이길용", 102, 301, "010-4343-4343", 1, ""),
(16, "이선일", 102, 302, "010-4545-4545", 1, ""),
(17, "이승수", 102, 401, "010-5454-5454", 1, ""),
(18, "이영주", 102, 402, "010-5656-5656", 1, ""),
(19, "이정후", 102, 501, "010-6565-6565", 1, ""),
(20, "조은찬", 103, 101, "010-6767-6767", 1, ""),
(21, "주민지", 103, 102, "010-7676-7676", 1, ""),
(22, "최영민", 103, 201, "010-7878-7878", 1, ""),
(23, "하상준", 103, 202, "010-8787-8787", 1, ""),
(24, "임해숙", 103, 301, "010-8989-8989", 1, "");

INSERT INTO GUEST(NAME, VISIT_DATE, CAR_NUM, PHONE_NUM, MEMBER_NUM, MEMBER_TYPE_NUM, REMARK) 
VALUES
("함지민", '2022-03-01', "123거1234", "010-6821-3321", 1, 2, ""),
("백준호", '2022-03-02', "321나6879", "010-2311-8723", 2, 2, ""),
("전수진", '2022-03-02', "555다3333", "010-3554-8112", 3, 2, ""),
("조우진", '2022-03-03', "323라9911", "010-5215-7754", 4, 2, ""),
("이나현", '2022-03-03', "235마1143", "010-8231-9991", 5, 2, ""),
("함지민", '2022-03-04', "123거1234", "010-6821-3321", 6, 2, ""),
("백준호", '2022-03-04', "321나6879", "010-2311-8723", 7, 2, ""),
("전수진", '2022-03-05', "555다3333", "010-3554-8112", 8, 2, ""),
("조우진", '2022-03-05', "323라9911", "010-5215-7754", 9, 2, ""),
("이나현", '2022-03-06', "235마1143", "010-8231-9991", 10, 2, ""),
("함지민", '2022-03-06', "123거1234", "010-6821-3321", 11, 2, ""),
("백준호", '2022-03-06', "321나6879", "010-2311-8723", 12, 2, ""),
("전수진", '2022-03-07', "555다3333", "010-3554-8112", 13, 2, ""),
("조우진", '2022-03-07', "323라9911", "010-5215-7754", 14, 2, ""),
("이나현", '2022-03-08', "235마1143", "010-8231-9991", 15, 2, ""),
("함지민", '2022-03-09', "123거1234", "010-6821-3321", 16, 2, ""),
("백준호", '2022-03-10', "321나6879", "010-2311-8723", 17, 2, ""),
("전수진", '2022-03-11', "555다3333", "010-3554-8112", 18, 2, ""),
("조우진", '2022-03-12', "323라9911", "010-5215-7754", 19, 2, ""),
("이나현", '2022-03-12', "235마1143", "010-8231-9991", 20, 2, ""),
("함지민", '2022-03-13', "123거1234", "010-6821-3321", 21, 2, ""),
("백준호", '2022-03-13', "321나6879", "010-2311-8723", 22, 2, ""),
("전수진", '2022-03-13', "555다3333", "010-3554-8112", 23, 2, ""),
("조우진", '2022-03-14', "323라9911", "010-5215-7754", 24, 2, ""),
("이나현", '2022-03-14', "235마1143", "010-8231-9991", 15, 2, ""),
("함지민", '2022-03-14', "123거1234", "010-6821-3321", 16, 2, ""),
("백준호", '2022-03-14', "321나6879", "010-2311-8723", 7, 2, ""),
("전수진", '2022-03-14', "555다3333", "010-3554-8112", 18, 2, ""),
("조우진", '2022-03-15', "323라9911", "010-5215-7754", 19, 2, ""),
("이나현", '2022-03-16', "235마1143", "010-8231-9991", 20, 2, ""),
("함지민", '2022-03-17', "123거1234", "010-6821-3321", 11, 2, ""),
("백준호", '2022-03-18', "321나6879", "010-2311-8723", 22, 2, ""),
("전수진", '2022-03-19', "555다3333", "010-3554-8112", 13, 2, ""),
("조우진", '2022-03-20', "323라9911", "010-5215-7754", 4, 2, ""),
("이나현", '2022-03-21', "235마1143", "010-8231-9991", 5, 2, ""),
("함지민", '2022-03-22', "123거1234", "010-6821-3321", 13, 2, ""),
("백준호", '2022-03-23', "321나6879", "010-2311-8723", 12, 2, ""),
("전수진", '2022-03-24', "555다3333", "010-3554-8112", 3, 2, ""),
("조우진", '2022-03-25', "323라9911", "010-5215-7754", 22, 2, ""),
("이나현", '2022-03-26', "235마1143", "010-8231-9991", 1, 2, ""),
("함지민", '2022-03-27', "123거1234", "010-6821-3321", 8, 2, ""),
("백준호", '2022-03-27', "321나6879", "010-2311-8723", 9, 2, ""),
("전수진", '2022-03-27', "555다3333", "010-3554-8112", 3, 2, ""),
("조우진", '2022-03-28', "323라9911", "010-5215-7754", 4, 2, ""),
("이나현", '2022-03-29', "235마1143", "010-8231-9991", 5, 2, ""),
("함지민", '2022-03-29', "123거1234", "010-6821-3321", 1, 2, ""),
("백준호", '2022-03-29', "321나6879", "010-2311-8723", 2, 2, ""),
("전수진", '2022-03-30', "555다3333", "010-3554-8112", 3, 2, ""),
("조우진", '2022-03-31', "323라9911", "010-5215-7754", 4, 2, ""),
("이나현", '2022-03-31', "235마1143", "010-8231-9991", 5, 2, "");

INSERT INTO CAR_INFO(CAR_NUM, MEMBER_NUM, MEMBER_TYPE_NUM) 
VALUES
("123가1234", 1, 1),
("123나1234", 2, 1),
("123다1234", 3, 1),
("123라1234", 4, 1),
("123마1234", 5, 1),
("123바1234", 6, 1),
("123사1234", 7, 1),
("123아1234", 8, 1),
("123자1234", 9, 1),
("123차1234", 10, 1),
("123카1234", 11, 1),
("123타1234", 12, 1),
("123파1234", 13, 1),
("123하1234", 14, 1),
("123거1234", 15, 1),
("123너1234", 16, 1),
("123더1234", 17, 1),
("123러1234", 18, 1),
("123머1234", 19, 1),
("123버1234", 20, 1);



INSERT INTO BOOKED(BOOKED_PURPOSE, VALIDITY, PHONE_NUM, NAME, COMPANY_NAME, CAR_NUM, MEMBER_TYPE_NUM, REMARK) 
VALUES
("택배", "2022-05-30", "010-2312-3281", "전주원", "택배1", "117가4454",  3, ""),
("택배", "2022-05-30", "010-8441-8153", "장하은", "택배2", "834나1279", 3, ""),
("택배", "2022-05-30", "010-2984-8662", "소하준", "우체국", "435다3233",  3, ""),
("청소", "2022-05-30", "010-5125-7334", "연하윤", "청소", "321라7511", 3, ""),
("이사", "2022-05-30", "010-8001-9911", "김지호", "이사", "295마1213", 3, "");

INSERT INTO ACCOUNT_INFO(ACCOUNT_NUM, USER_ID, USER_PW, ACCOUNT_TYPE) 
VALUES
(1, "admin01", "1234", "관리자"),
(2, "store01", "1111", "상가"),
(3, "store02", "0000", "상가");

INSERT INTO STORE(STORE_NUM, STORE_NAME, PHONE_NUM, ADDR, OWNER_NAME, JOINED_DATE, WITHDREW_DATE, ACCOUNT_NUM, REMARK)
VALUES
(0, "고객", "", "", "", "2022-03-01", NULL, 2, "임시"),
(1, "방배골", "010-1234-1111", "서울특별시 서초구 방배로8길 6", "김진수", "2022-03-01", NULL, 2, ""),
(2, "국수나무", "010-3222-3333", "서울특별시 서초구 동광로 21", "이민호", "2022-03-01", NULL, 3, "");

INSERT INTO STORE_PAYMENT_INFO(STORE_NUM, PAYMENT_DATE, PAYMENT)
VALUES
(1, "2022-03-07", 120000),
(2, "2022-03-10", 250000);

INSERT INTO PAY_OPTION(PARK_NUM, RETURN_TIME, PAY_FEE, START_TIME, END_TIME, PARK_DAY_FEE, REMARK)
VALUES
(1, 10, 500, "09:00", "18:00", 30000, "");

INSERT INTO DAILY_PAY_INFO(CAR_NUM, IN_TIME, OUT_TIME, PAY_STATUS, COUPON, COUPON_STATUS, PAY_AMOUNT, MEMBER_TYPE, PARK_NUM, STORE_NAME, STORE_NUM, PARK_TIME, REMARK)
VALUES
("111가1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111나1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111다1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "방배골", "2", 30, ""),
("111라1111", "2022-03-01 09:20:00", "2022-03-01 09:50:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111마1111", "2022-03-01 09:00:00", "2022-03-01 18:00:00", "T", "", "F", 27000, "고객", "1", "일반", "0", 540, ""),
("111바1111", "2022-03-01 11:00:00", "2022-03-01 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "꿈다락", "1", 210, ""),
("111사1111", "2022-03-01 12:00:00", "2022-03-01 12:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111아1111", "2022-03-01 11:00:00", "2022-03-01 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "방배골", "2", 210, ""),
("111자1111", "2022-03-01 10:00:00", "2022-03-01 17:30:00", "T", "", "F", 22500, "고객", "1", "일반", "0", 450, ""),
("111차1111", "2022-03-01 13:00:00", "2022-03-01 15:30:00", "T", "", "F", 12500, "고객", "1", "일반", "0", 150, ""),
("111카1111", "2022-03-01 15:00:00", "2022-03-01 17:30:00", "T", "3", "T", 12500, "상점고객", "1", "방배골", "2", 150, ""),
("111타1111", "2022-03-01 15:30:00", "2022-03-01 18:00:00", "T", "3", "T", 12500, "상점고객", "1", "꿈다락", "1", 150, ""),
("111파1111", "2022-03-01 08:00:00", "2022-03-01 09:30:00", "T", "", "F", 30000, "고객", "1", "일반", "0", 90, "이용시간비준수"),
("111하1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111가1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111나1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111다1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "방배골", "2", 30, ""),
("111라1111", "2022-03-02 09:20:00", "2022-03-02 09:50:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111마1111", "2022-03-02 09:00:00", "2022-03-02 18:00:00", "T", "", "F", 27000, "고객", "1", "일반", "0", 540, ""),
("111바1111", "2022-03-02 11:00:00", "2022-03-02 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "꿈다락", "1", 210, ""),
("111사1111", "2022-03-02 12:00:00", "2022-03-02 12:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111아1111", "2022-03-02 11:00:00", "2022-03-02 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "방배골", "2", 210, ""),
("111자1111", "2022-03-02 10:00:00", "2022-03-02 17:30:00", "T", "", "F", 22500, "고객", "1", "일반", "0", 450, ""),
("111차1111", "2022-03-02 13:00:00", "2022-03-02 15:30:00", "T", "", "F", 12500, "고객", "1", "일반", "0", 150, ""),
("111카1111", "2022-03-02 15:00:00", "2022-03-02 17:30:00", "T", "3", "T", 12500, "상점고객", "1", "방배골", "2", 150, ""),
("111타1111", "2022-03-02 15:30:00", "2022-03-02 18:00:00", "T", "3", "T", 12500, "상점고객", "1", "꿈다락", "1", 150, ""),
("111파1111", "2022-03-02 08:00:00", "2022-03-02 09:30:00", "T", "", "F", 30000, "고객", "1", "일반", "0", 90, "이용시간비준수"),
("111하1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111가1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111나1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111다1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "T", "1", "T", 1500, "상점고객", "1", "방배골", "2", 30, ""),
("111라1111", "2022-03-03 09:20:00", "2022-03-03 09:50:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, ""),
("111마1111", "2022-03-03 09:00:00", "2022-03-03 18:00:00", "T", "", "F", 27000, "고객", "1", "일반", "0", 540, ""),
("111바1111", "2022-03-03 11:00:00", "2022-03-03 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "꿈다락", "1", 210, ""),
("111사1111", "2022-03-03 12:00:00", "2022-03-03 12:30:00", "T", "1", "T", 1500, "상점고객", "1", "꿈다락", "1", 30, ""),
("111아1111", "2022-03-03 11:00:00", "2022-03-03 14:30:00", "T", "4", "T", 10500, "상점고객", "1", "방배골", "2", 210, ""),
("111자1111", "2022-03-03 10:00:00", "2022-03-03 17:30:00", "T", "", "F", 22500, "고객", "1", "일반", "0", 450, ""),
("111차1111", "2022-03-03 13:00:00", "2022-03-03 15:30:00", "T", "", "F", 12500, "고객", "1", "일반", "0", 150, ""),
("111카1111", "2022-03-03 15:00:00", "2022-03-03 17:30:00", "T", "3", "T", 12500, "상점고객", "1", "방배골", "2", 150, ""),
("111타1111", "2022-03-03 15:30:00", "2022-03-03 18:00:00", "T", "3", "T", 12500, "상점고객", "1", "꿈다락", "1", 150, ""),
("111파1111", "2022-03-03 08:00:00", "2022-03-03 09:30:00", "T", "", "F", 30000, "고객", "1", "일반", "0", 90, "이용시간비준수"),
("111하1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "T", "", "F", 1500, "고객", "1", "일반", "0", 30, "");

INSERT INTO PARK_AREA(PARK_NUM, RENTAL_SPACE, TOTAL_SPACE, REMARK)
VALUES
(1, 20, 30, "");

INSERT INTO PARK_STATUS(CAR_NUM, IN_TIME, OUT_TIME, MEMBER_TYPE, MEMBER_TYPE_NUM, VISIT_DATE, REMARK)
VALUES
("111가1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "고객", "4", "2022-03-01", ""),
("111나1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "고객", "4", "2022-03-01", ""),
("111다1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "고객", "4", "2022-03-01", ""),
("111라1111", "2022-03-01 09:20:00", "2022-03-01 09:50:00", "고객", "4", "2022-03-01", ""),
("111마1111", "2022-03-01 09:00:00", "2022-03-01 18:00:00", "고객", "4", "2022-03-01", ""),
("111바1111", "2022-03-01 11:00:00", "2022-03-01 14:30:00", "고객", "4", "2022-03-01", ""),
("111사1111", "2022-03-01 12:00:00", "2022-03-01 12:30:00", "고객", "4", "2022-03-01", ""),
("111아1111", "2022-03-01 11:00:00", "2022-03-01 14:30:00", "고객", "4", "2022-03-01", ""),
("111자1111", "2022-03-01 10:00:00", "2022-03-01 17:30:00", "고객", "4", "2022-03-01", ""),
("111차1111", "2022-03-01 13:00:00", "2022-03-01 15:30:00", "고객", "4", "2022-03-01", ""),
("111카1111", "2022-03-01 15:00:00", "2022-03-01 17:30:00", "고객", "4", "2022-03-01", ""),
("111타1111", "2022-03-01 15:30:00", "2022-03-01 18:00:00", "고객", "4", "2022-03-01", ""),
("111파1111", "2022-03-01 08:00:00", "2022-03-01 09:30:00", "고객", "4", "2022-03-01", ""),
("111하1111", "2022-03-01 09:00:00", "2022-03-01 09:30:00", "고객", "4", "2022-03-01", ""),
("117가4454", "2022-03-01 07:30:00", "2022-03-01 08:00:00", "정기방문자", "4", "2022-03-01", ""),
("834나1279", "2022-03-01 11:00:00", "2022-03-01 12:30:00", "정기방문자", "4", "2022-03-01", ""),
("321라7511", "2022-03-01 18:00:00", "2022-03-01 18:30:00", "정기방문자", "4", "2022-03-01", ""),
("123가1234", "2022-03-01 19:00:00", "2022-03-01 07:30:00", "입주민", "1", "2022-03-01", ""),
("123나1234", "2022-03-01 23:00:00", "2022-03-01 06:30:00", "입주민", "1", "2022-03-01", ""),
("123다1234", "2022-03-01 20:00:00", "2022-03-01 08:30:00", "입주민", "1", "2022-03-01", ""),
("123라1234", "2022-03-01 18:00:00", "2022-03-01 09:30:00", "입주민", "1", "2022-03-01", ""),
("123마1234", "2022-03-01 18:30:00", "2022-03-01 05:30:00", "입주민", "1", "2022-03-01", ""),
("123바1234", "2022-03-01 19:30:00", "2022-03-01 06:30:00", "입주민", "1", "2022-03-01", ""),
("123사1234", "2022-03-01 20:30:00", "2022-03-01 08:30:00", "입주민", "1", "2022-03-01", ""),
("123아1234", "2022-03-01 19:30:00", "2022-03-01 06:30:00", "입주민", "1", "2022-03-01", ""),
("123자1234", "2022-03-01 19:45:00", "2022-03-01 05:30:00", "입주민", "1", "2022-03-01", ""),
("123차1234", "2022-03-01 19:00:00", "2022-03-01 04:30:00", "입주민", "1", "2022-03-01", ""),
("123카1234", "2022-03-01 18:00:00", "2022-03-01 07:30:00", "입주민", "1", "2022-03-01", ""),
("123타1234", "2022-03-01 17:30:00", "2022-03-01 06:30:00", "입주민", "1", "2022-03-01", ""),
("123파1234", "2022-03-01 22:00:00", "2022-03-01 08:30:00", "입주민", "1", "2022-03-01", ""),
("123하1234", "2022-03-01 23:00:00", "2022-03-01 09:30:00", "입주민", "1", "2022-03-01", ""),
("123거1234", "2022-03-01 15:00:00", "2022-03-01 12:30:00", "입주민", "1", "2022-03-01", ""),
("123너1234", "2022-03-01 14:00:00", "2022-03-01 11:30:00", "입주민", "1", "2022-03-01", ""),
("123더1234", "2022-03-01 19:30:00", "2022-03-01 13:30:00", "입주민", "1", "2022-03-01", ""),
("123러1234", "2022-03-01 22:00:00", "2022-03-01 15:30:00", "입주민", "1", "2022-03-01", ""),
("123버1234", "2022-03-01 23:00:00", "2022-03-01 18:30:00", "입주민", "1", "2022-03-01", ""),
("111가1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "고객", "4", "2022-03-02", ""),
("111나1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "고객", "4", "2022-03-02", ""),
("111다1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "고객", "4", "2022-03-02", ""),
("111라1111", "2022-03-02 09:20:00", "2022-03-02 09:50:00", "고객", "4", "2022-03-02", ""),
("111마1111", "2022-03-02 09:00:00", "2022-03-02 18:00:00", "고객", "4", "2022-03-02", ""),
("111바1111", "2022-03-02 11:00:00", "2022-03-02 14:30:00", "고객", "4", "2022-03-02", ""),
("111사1111", "2022-03-02 12:00:00", "2022-03-02 12:30:00", "고객", "4", "2022-03-02", ""),
("111아1111", "2022-03-02 11:00:00", "2022-03-02 14:30:00", "고객", "4", "2022-03-02", ""),
("111자1111", "2022-03-02 10:00:00", "2022-03-02 17:30:00", "고객", "4", "2022-03-02", ""),
("111차1111", "2022-03-02 13:00:00", "2022-03-02 15:30:00", "고객", "4", "2022-03-02", ""),
("111카1111", "2022-03-02 15:00:00", "2022-03-02 17:30:00", "고객", "4", "2022-03-02", ""),
("111타1111", "2022-03-02 15:30:00", "2022-03-02 18:00:00", "고객", "4", "2022-03-02", ""),
("111파1111", "2022-03-02 08:00:00", "2022-03-02 09:30:00", "고객", "4", "2022-03-02", ""),
("111하1111", "2022-03-02 09:00:00", "2022-03-02 09:30:00", "고객", "4", "2022-03-02", ""),
("117가4454", "2022-03-02 07:30:00", "2022-03-02 08:00:00", "정기방문자", "4", "2022-03-02", ""),
("834나1279", "2022-03-02 11:00:00", "2022-03-02 12:30:00", "정기방문자", "4", "2022-03-02", ""),
("321라7511", "2022-03-02 18:00:00", "2022-03-02 18:30:00", "정기방문자", "4", "2022-03-02", ""),
("123가1234", "2022-03-02 19:00:00", "2022-03-02 07:30:00", "입주민", "1", "2022-03-02", ""),
("123나1234", "2022-03-02 23:00:00", "2022-03-02 06:30:00", "입주민", "1", "2022-03-02", ""),
("123다1234", "2022-03-02 20:00:00", "2022-03-02 08:30:00", "입주민", "1", "2022-03-02", ""),
("123라1234", "2022-03-02 18:00:00", "2022-03-02 09:30:00", "입주민", "1", "2022-03-02", ""),
("123마1234", "2022-03-02 18:30:00", "2022-03-02 05:30:00", "입주민", "1", "2022-03-02", ""),
("123바1234", "2022-03-02 19:30:00", "2022-03-02 06:30:00", "입주민", "1", "2022-03-02", ""),
("123사1234", "2022-03-02 20:30:00", "2022-03-02 08:30:00", "입주민", "1", "2022-03-02", ""),
("123아1234", "2022-03-02 19:30:00", "2022-03-02 06:30:00", "입주민", "1", "2022-03-02", ""),
("123자1234", "2022-03-02 19:45:00", "2022-03-02 05:30:00", "입주민", "1", "2022-03-02", ""),
("123차1234", "2022-03-02 19:00:00", "2022-03-02 04:30:00", "입주민", "1", "2022-03-02", ""),
("123카1234", "2022-03-02 18:00:00", "2022-03-02 07:30:00", "입주민", "1", "2022-03-02", ""),
("123타1234", "2022-03-02 17:30:00", "2022-03-02 06:30:00", "입주민", "1", "2022-03-02", ""),
("123파1234", "2022-03-02 22:00:00", "2022-03-02 08:30:00", "입주민", "1", "2022-03-02", ""),
("123하1234", "2022-03-02 23:00:00", "2022-03-02 09:30:00", "입주민", "1", "2022-03-02", ""),
("123거1234", "2022-03-02 15:00:00", "2022-03-02 12:30:00", "입주민", "1", "2022-03-02", ""),
("123너1234", "2022-03-02 14:00:00", "2022-03-02 11:30:00", "입주민", "1", "2022-03-02", ""),
("123더1234", "2022-03-02 19:30:00", "2022-03-02 13:30:00", "입주민", "1", "2022-03-02", ""),
("123러1234", "2022-03-02 22:00:00", "2022-03-02 15:30:00", "입주민", "1", "2022-03-02", ""),
("123버1234", "2022-03-02 23:00:00", "2022-03-02 18:30:00", "입주민", "1", "2022-03-02", ""),
("111가1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "고객", "4", "2022-03-03", ""),
("111나1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "고객", "4", "2022-03-03", ""),
("111다1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "고객", "4", "2022-03-03", ""),
("111라1111", "2022-03-03 09:20:00", "2022-03-03 09:50:00", "고객", "4", "2022-03-03", ""),
("111마1111", "2022-03-03 09:00:00", "2022-03-03 18:00:00", "고객", "4", "2022-03-03", ""),
("111바1111", "2022-03-03 11:00:00", "2022-03-03 14:30:00", "고객", "4", "2022-03-03", ""),
("111사1111", "2022-03-03 12:00:00", "2022-03-03 12:30:00", "고객", "4", "2022-03-03", ""),
("111아1111", "2022-03-03 11:00:00", "2022-03-03 14:30:00", "고객", "4", "2022-03-03", ""),
("111자1111", "2022-03-03 10:00:00", "2022-03-03 17:30:00", "고객", "4", "2022-03-03", ""),
("111차1111", "2022-03-03 13:00:00", "2022-03-03 15:30:00", "고객", "4", "2022-03-03", ""),
("111카1111", "2022-03-03 15:00:00", "2022-03-03 17:30:00", "고객", "4", "2022-03-03", ""),
("111타1111", "2022-03-03 15:30:00", "2022-03-03 18:00:00", "고객", "4", "2022-03-03", ""),
("111파1111", "2022-03-03 08:00:00", "2022-03-03 09:30:00", "고객", "4", "2022-03-03", ""),
("111하1111", "2022-03-03 09:00:00", "2022-03-03 09:30:00", "고객", "4", "2022-03-03", ""),
("117가4454", "2022-03-03 07:30:00", "2022-03-03 08:00:00", "정기방문자", "4", "2022-03-03", ""),
("834나1279", "2022-03-03 11:00:00", "2022-03-03 12:30:00", "정기방문자", "4", "2022-03-03", ""),
("321라7511", "2022-03-03 18:00:00", "2022-03-03 18:30:00", "정기방문자", "4", "2022-03-03", ""),
("123가1234", "2022-03-03 19:00:00", "2022-03-03 07:30:00", "입주민", "1", "2022-03-03", ""),
("123나1234", "2022-03-03 23:00:00", "2022-03-03 06:30:00", "입주민", "1", "2022-03-03", ""),
("123다1234", "2022-03-03 20:00:00", "2022-03-03 08:30:00", "입주민", "1", "2022-03-03", ""),
("123라1234", "2022-03-03 18:00:00", "2022-03-03 09:30:00", "입주민", "1", "2022-03-03", ""),
("123마1234", "2022-03-03 18:30:00", "2022-03-03 05:30:00", "입주민", "1", "2022-03-03", ""),
("123바1234", "2022-03-03 19:30:00", "2022-03-03 06:30:00", "입주민", "1", "2022-03-03", ""),
("123사1234", "2022-03-03 20:30:00", "2022-03-03 08:30:00", "입주민", "1", "2022-03-03", ""),
("123아1234", "2022-03-03 19:30:00", "2022-03-03 06:30:00", "입주민", "1", "2022-03-03", ""),
("123자1234", "2022-03-03 19:45:00", "2022-03-03 05:30:00", "입주민", "1", "2022-03-03", ""),
("123차1234", "2022-03-03 19:00:00", "2022-03-03 04:30:00", "입주민", "1", "2022-03-03", ""),
("123카1234", "2022-03-03 18:00:00", "2022-03-03 07:30:00", "입주민", "1", "2022-03-03", ""),
("123타1234", "2022-03-03 17:30:00", "2022-03-03 06:30:00", "입주민", "1", "2022-03-03", ""),
("123파1234", "2022-03-03 22:00:00", "2022-03-03 08:30:00", "입주민", "1", "2022-03-03", ""),
("123하1234", "2022-03-03 23:00:00", "2022-03-03 09:30:00", "입주민", "1", "2022-03-03", ""),
("123거1234", "2022-03-03 15:00:00", "2022-03-03 12:30:00", "입주민", "1", "2022-03-03", ""),
("123너1234", "2022-03-03 14:00:00", "2022-03-03 11:30:00", "입주민", "1", "2022-03-03", ""),
("123더1234", "2022-03-03 19:30:00", "2022-03-03 13:30:00", "입주민", "1", "2022-03-03", ""),
("123러1234", "2022-03-03 22:00:00", "2022-03-03 15:30:00", "입주민", "1", "2022-03-03", ""),
("123버1234", "2022-03-03 23:00:00", "2022-03-03 18:30:00", "입주민", "1", "2022-03-03", "");