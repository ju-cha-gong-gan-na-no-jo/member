-- 19~20시 사이에 주차장에 있는 입주민 수
-- select * from (select distinct p.CAR_NUM, p.IN_TIME, p.OUT_TIME from PARK_STATUS p, CAR_INFO c where p.CAR_NUM=c.CAR_NUM) as r where r.IN_TIME < "2022-03-02 19:00:00" and not (r.OUT_TIME > "2022-03-02 19:00" and r.OUT_TIME < "2022-03-02 20:00");
-- select * from PARK_STATUS order by IN_TIME;
-- 상점 통계 
-- select STORE_NAME as 유형, count(*) as 대수, sum(PARK_TIME) as 시간, sum(PAY_AMOUNT) as 돈 from DAILY_PAY_INFO where OUT_TIME >= '2022-03-01' and OUT_TIME < '2022-03-02' group by STORE_NAME;
-- select STORE_NAME as 유형, count(*) as 대수, sum(PARK_TIME) as 시간, sum(PAY_AMOUNT) as 돈 from DAILY_PAY_INFO group by STORE_NAME;

-- select * from ACCOUNT_INFO;
SET foreign_key_checks = 0;
DELETE FROM ACCOUNT_INFO WHERE ACCOUNT_NUM=3;
DELETE FROM STORE WHERE STORE_NAME="나나";
SET foreign_key_checks = 1;