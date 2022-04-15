-- 19~20시 사이에 주차장에 있는 입주민 수
-- select * from (select distinct p.CAR_NUM, p.IN_TIME, p.OUT_TIME from PARK_STATUS p, CAR_INFO c where p.CAR_NUM=c.CAR_NUM) as r where r.IN_TIME < "2022-03-03 19:00:00" and not (r.OUT_TIME > "2022-03-03 19:00" and r.OUT_TIME < "2022-03-03 20:00");
-- UPDATE CAR_INFO SET CAR_NUM="999가9999" WHERE MEMBER_NUM=1;
UPDATE MEMBER_INFO SET NAME="균정김", DONG=999, HO=999, PHONE_NUM="010-4455-9811, REMARK="hellooo" WHERE NAME="김정균";
-- select x.CAR_NUM, x.IN_TIME, x.OUT_TIME from (select k.CAR_NUM, k.TIME_IN as IN_TIME, p.OUT_TIME from (select r.CAR_NUM, max(r.IN_TIME) as TIME_IN from (select distinct p.CAR_NUM, p.IN_TIME, p.OUT_TIME from PARK_STATUS p, CAR_INFO c where p.CAR_NUM=c.CAR_NUM) as r where r.IN_TIME < "2022-03-03 20:00:00" group by r.CAR_NUM order by r.CAR_NUM) as k, PARK_STATUS as p where k.CAR_NUM=p.CAR_NUM and k.TIME_IN=p.IN_TIME order by CAR_NUM) as x where x.OUT_TIME > "2022-03-03 21:00";
-- 상점 통계 
-- select STORE_NAME as 유형, count(*) as 대수, sum(PARK_TIME) as 시간, sum(PAY_AMOUNT) as 돈 from DAILY_PAY_INFO where OUT_TIME >= '2022-03-01' and OUT_TIME < '2022-03-02' group by STORE_NAME;
-- select STORE_NAME as 유형, count(*) as 대수, sum(PARK_TIME) as 시간, sum(PAY_AMOUNT) as 돈 from DAILY_PAY_INFO group by STORE_NAME;
