const express = require('express');
const request = require('request');
const app = express();
const mysql = require('mysql');
const mysql_sync = require('sync-mysql'); // sql 동기 처리
const bodyParser = require('body-parser');
const crypto = require("crypto") // 비밀번호 암호화

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

var member_num, name, dong, ho, phone_num, member_type_num, remark;
var name, visit_date, car_num, phone_num, member_num, member_type_num, remark;
var booked_purpose, validity, phone_num, name, company_name, car_num, member_type_num, remark;
var store_num, store_name, phone_num, addr, owner_name, joined_date, withdrew_date, account_num, remark;

// MySQL 연결
const mysql_con = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'member',
  database: 'member_db'
});

// 동기처리를 위한 MySQL 연결
const mysql_con_sync = new mysql_sync({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'member',
  database: 'member_db'
});

// 전체 데이터 조회
app.get('/user/info/:arg', (req, res) => {
  const arg = req.params.arg;
  let sql;
  switch(arg){
    // 입주민
    case "member":
      sql = 'SELECT m.MEMBER_NUM, m.NAME, m.DONG, m.HO, m.PHONE_NUM, m.MEMBER_TYPE_NUM, c.CAR_NUM FROM MEMBER_INFO m, CAR_INFO c where m.MEMBER_NUM=c.MEMBER_NUM order by MEMBER_NUM desc;';
      break;
    // 1회 방문자
    case "guest":
      sql = "SELECT * FROM GUEST ORDER BY GUEST_NUM desc";
      break;
    // 정기 방문자
    case "book":
      sql = 'SELECT * FROM BOOKED ORDER BY BOOKED_NUM desc';
      break;
    // 상가
    case "store":
      sql = 'SELECT * FROM STORE ORDER BY STORE_NUM desc';
      break;
  }

  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});


// 차량번호 데이터 조회
app.post('/user/info/car/:arg', (req, res) => {
  const arg = req.params.arg
  const car_num = req.body.car_num;
  let sql = 'SELECT * FROM ';
  switch(arg){
    case "member":
      sql = 'SELECT m.MEMBER_NUM, m.NAME, m.DONG, m.HO, m.PHONE_NUM, m.MEMBER_TYPE_NUM, c.CAR_NUM FROM MEMBER_INFO m, CAR_INFO c where m.MEMBER_NUM=c.MEMBER_NUM and car_num="' + car_num + '";';
      break;
    case "guest":
      sql = sql + 'GUEST WHERE CAR_NUM="' + car_num + '";';
      break;
    case "book":
      sql = sql + 'BOOKED WHERE CAR_NUM="' + car_num + '";';
      break;
    }
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});

// 상점 이름으로 데이터 조회
app.post('/user/info/name', (req, res) => {
  const store_name = req.body.store_name;
  sql = "SELECT * FROM STORE WHERE STORE_NAME='" + store_name + "';";
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});

// 회원 유형 조회
app.post('/user/info/', (req, res) => {
  const car_num = req.body.car_num;
  let member, guest, booked;

  member = mysql_con_sync.query('SELECT DISTINCT MEMBER_TYPE_NUM as num FROM CAR_INFO where CAR_NUM="' + car_num + '";');
  guest = mysql_con_sync.query('SELECT DISTINCT MEMBER_TYPE_NUM as num FROM GUEST where CAR_NUM="' + car_num + '";');
  booked = mysql_con_sync.query('SELECT DISTINCT MEMBER_TYPE_NUM as num FROM BOOKED where CAR_NUM="' + car_num + '";');

  if(member.length){
    res.send("회원");
  }
  else if(guest.length){
    res.send("단기방문자");
  }
  else if(booked.length){
    res.send("정기방문자");
  }
  else{
    res.send("잘못된 입력입니다.");
  }
});

// 데이터 추가
app.post('/user/add/:arg', (req, res) => {
  const arg = req.params.arg;
  let sql = '';

  switch(arg){
    // 입주민
    case "member":
      let max_member_num_query = mysql_con_sync.query('select max(MEMBER_NUM) as num from MEMBER_INFO;');

      if(!max_member_num_query[0].num){
        member_num = 1;
      }
      else{
        member_num =  max_member_num_query[0].num + 1;
      }
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      member_type_num = req.body.member_type_num;
      car_num = req.body.car_num;
      remark = req.body.remark;

      sql = 'INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + member_num + ', "'+ name + '", ' + dong + ', ' + ho + ', "' + phone_num + '", ' + member_type_num + ', "' + remark + '");';
      sql_num = 'INSERT INTO CAR_INFO(CAR_NUM, MEMBER_NUM, MEMBER_TYPE_NUM) VALUES ("' + car_num + '", ' + member_num + ', ' + member_type_num + ');';
      
      break;
    // 1회 방문자
    case "guest":
      name = req.body.name;
      visit_date = req.body.visit_date;
      car_num = req.body.car_num;
      phone_num = req.body.phone_num;
      member_num = req.body.member_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'INSERT INTO GUEST(NAME, VISIT_DATE, CAR_NUM, PHONE_NUM, MEMBER_NUM, MEMBER_TYPE_NUM, REMARK) VALUES ("' + name + '", "' + visit_date + '", "' + car_num + '", "' + phone_num + '", ' + member_num + ', ' + member_type_num + ', "' + remark + '");';
      break;
    // 정기 방문자
    case "book":
      booked_purpose = req.body.booked_purpose;
      validity = req.body.validity;
      phone_num = req.body.phone_num;
      name = req.body.name;
      company_name = req.body.company_name;
      car_num = req.body.car_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'INSERT INTO BOOKED(BOOKED_PURPOSE, VALIDITY, PHONE_NUM, NAME, COMPANY_NAME, CAR_NUM, MEMBER_TYPE_NUM, REMARK) VALUES ("' + booked_purpose + '", "' + validity + '", "' + phone_num + '", "' + name + '", "' + company_name + '", "' + car_num + '", ' + member_type_num + ', "' + remark + '");';
      break;
    // 상가
    case "store":    
      // 계정 번호값 부여
      let max_account_num_query = mysql_con_sync.query('select max(ACCOUNT_NUM) as num from ACCOUNT_INFO;');

      if(!max_account_num_query[0].num){
        account_num = 1;
      }
      else{
        account_num =  max_account_num_query[0].num + 1;
      }

      // id 및 password DB에 insert
      const user_id = req.body.user_id;
      let password = req.body.password;
      const account_type = req.body.account_type;

      let encrypt = crypto.createHash("sha256")
      encrypt.update(password)
      password = encrypt.digest("hex")

      sql = 'INSERT INTO ACCOUNT_INFO(ACCOUNT_NUM, USER_ID, USER_PW, ACCOUNT_TYPE) VALUES (' + account_num + ', "' + user_id + '", "' + password + '", "' + account_type + '")';

      mysql_con.query(sql, function(err){
        if (err) console.log(err);
      });

      // 상점 번호값 부여
      let max_store_num_query = mysql_con_sync.query('select max(STORE_NUM) as num from STORE;');

      if(!max_store_num_query[0].num){
        store_num = 0;
      }
      else{
        store_num =  max_store_num_query[0].num + 1;
      }

      store_name = req.body.store_name;
      phone_num = req.body.phone_num;
      addr = req.body.addr;
      owner_name = req.body.owner_name;
      joined_date = req.body.joined_date;
      withdrew_date = req.body.withdrew_date;
      remark = req.body.remark;

      if (withdrew_date == "NULL" || withdrew_date == "null" || withdrew_date == ""){
        withdrew_date = "NULL"
        sql = 'INSERT INTO STORE(STORE_NUM, STORE_NAME, PHONE_NUM, ADDR, OWNER_NAME, JOINED_DATE, WITHDREW_DATE, ACCOUNT_NUM, REMARK) VALUES (' + store_num + ', "' + store_name + '", "' + phone_num + '", "' + addr + '", "' + owner_name + '", "' + joined_date + '", ' + withdrew_date + ', ' + account_num + ', "' + remark + '");';
      }
      else{
        sql = 'INSERT INTO STORE(STORE_NUM, STORE_NAME, PHONE_NUM, ADDR, OWNER_NAME, JOINED_DATE, WITHDREW_DATE, ACCOUNT_NUM, REMARK) VALUES (' + store_num + ', "' + store_name + '", "' + phone_num + '", "' + addr + '", "' + owner_name + '", "' + joined_date + '", "' + withdrew_date + '", ' + account_num + ', "' + remark + '");';
      }
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
  });
  if(arg == "member"){
    mysql_con.query(sql_num, function(err){
      if (err) console.log(err);
      res.send("1 record inserted");
    });
  }
  else{
    res.send("1 record inserted")
  }
});

// 데이터 수정
app.post('/user/update/:arg', (req, res) => {
  const arg = req.params.arg;
  const name_old = req.body.name_old;
  let sql = '';
  switch(arg){
    // 입주민
    case "member":
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      remark = req.body.remark;
      car_num = req.body.car_num;

      let member_num = mysql_con_sync.query("SELECT MEMBER_NUM as num FROM MEMBER_INFO WHERE NAME='" + name_old + "';");

      if (!member_num){
        res.send("입주민이 아닙니다");
      }
      else{
        mysql_con_sync.query("UPDATE CAR_INFO SET CAR_NUM='" + car_num + "' WHERE MEMBER_NUM=" + member_num[0].num + ";");
      }
      sql = 'UPDATE MEMBER_INFO SET NAME="' + name + '", DONG=' + dong + ', HO=' + ho + ', PHONE_NUM="' + phone_num + '", REMARK="' + remark + '" WHERE NAME="' + name_old + '";';
      break;

    // 1회 방문자
    case "guest":
      name = req.body.name;
      visit_date = req.body.visit_date;
      car_num = req.body.car_num;
      phone_num = req.body.phone_num;
      remark = req.body.remark;

      sql = 'UPDATE GUEST SET NAME="' + name + '", ' + 'VISIT_DATE="' + visit_date + '", CAR_NUM="' + car_num + '", PHONE_NUM="' + phone_num + '", REMARK="' + remark + '" WHERE NAME= "' + name_old + '";';
      break;

    // 정기 방문자
    case "book":
      booked_purpose = req.body.booked_purpose;
      validity = req.body.validity;
      phone_num = req.body.phone_num;
      name = req.body.name;
      company_name = req.body.company_name;
      car_num = req.body.car_num;
      remark = req.body.remark;

      sql = 'UPDATE BOOKED SET BOOKED_PURPOSE="' + booked_purpose + '", VALIDITY="' + validity + '", PHONE_NUM="' + phone_num + '", NAME="' + name + '", COMPANY_NAME="' + company_name + '", CAR_NUM="' + car_num + '", REMARK="' + remark + '" WHERE NAME= "' + name_old + '";';
      break;
      
    // 상가
    case "store":
      store_name = req.body.store_name;
      phone_num = req.body.phone_num;
      addr = req.body.addr;
      owner_name = req.body.owner_name;
      joined_date = req.body.joined_date;
      withdrew_date = req.body.withdrew_date;
      remark = req.body.remark;
      
      if(withdrew_date == "NULL" || withdrew_date == "null" || withdrew_date == ""){
        withdrew_date = "NULL"
        sql = 'UPDATE STORE SET STORE_NAME="' + store_name + '", PHONE_NUM= "' + phone_num + '", ADDR="' + addr + '", OWNER_NAME="' + owner_name + '", JOINED_DATE="' + joined_date + '", WITHDREW_DATE= ' + withdrew_date + ', REMARK="' + remark + '" WHERE STORE_NAME="' + name_old + '";';
      }
      else{
        sql = 'UPDATE STORE SET STORE_NAME="' + store_name + '", PHONE_NUM= "' + phone_num + '", ADDR="' + addr + '", OWNER_NAME="' + owner_name + '", JOINED_DATE="' + joined_date + '", WITHDREW_DATE= "' + withdrew_date + '", REMARK="' + remark + '" WHERE STORE_NAME="' + name_old + '";';
      }
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record updated");
  });
});

// 데이터 삭제
app.post('/user/delete/:arg', (req, res) => {
  const arg = req.params.arg;
  let sql = '';
  switch(arg){
    // 입주민
    case "member":
      name = req.body.name;
      let member_num = mysql_con_sync.query('SELECT MEMBER_NUM as num FROM MEMBER_INFO WHERE NAME="' + name + '";');
      if(member_num){
        member_num = member_num[0].num;
      }
      else{
        console.log("NO MEMBER");
        res.send("회원이 아닙니다.")
      }
      let car_num = mysql_con_sync.query('SELECT CAR_NUM as num from CAR_INFO WHERE MEMBER_NUM="' + member_num + '";');
      car_num = car_num[0].num;
      mysql_con_sync.query('SET foreign_key_checks = 0;');
      mysql_con_sync.query('DELETE FROM CAR_INFO WHERE CAR_NUM="' + car_num + '";');
      mysql_con_sync.query('DELETE FROM MEMBER_INFO WHERE MEMBER_NUM="' + member_num + '";');
      mysql_con_sync.query('SET foreign_key_checks = 1;');
      res.send("1 record deleted");
      break;

    // 1회 방문자
    case "guest":
      name = req.body.name;

      mysql_con_sync.query('DELETE FROM GUEST WHERE NAME="' + name + '";');
      res.send("1 record deleted");
      break;
    
    // 정기 방문자
    case "book":
      name = req.body.name;

      mysql_con_sync.query('DELETE FROM BOOKED WHERE NAME="' + name + '";');
      res.send("1 record deleted");
      break;
    
    // 상가
    case "store":
      store_name = req.body.store_name;   
      let account_num = mysql_con_sync.query('SELECT ACCOUNT_NUM as num FROM STORE WHERE STORE_NAME="' + store_name + '";');
      if(!account_num[0]){
        res.send("잘못된 상점 이름입니다.")
      }
      else{
        account_num = account_num[0].num;
        mysql_con_sync.query('SET foreign_key_checks = 0;');
        mysql_con_sync.query('DELETE FROM ACCOUNT_INFO WHERE ACCOUNT_NUM=' + account_num.toString() + ';');
        mysql_con_sync.query('DELETE FROM STORE WHERE STORE_NAME="' + store_name + '";');
        mysql_con_sync.query('SET foreign_key_checks = 1;');
        res.send("1 record deleted");
      }
      break;
  }
});

// 인증확인
app.post('/user/auth', (req, res) => {
  let user_id = req.body.user_id;
  let password = req.body.password;

  let encrypt = crypto.createHash("sha256")
  encrypt.update(password)
  password = encrypt.digest("hex")

  sql = "select USER_ID, ACCOUNT_NUM, ACCOUNT_TYPE from ACCOUNT_INFO where USER_ID='" + user_id.toString() + "' and USER_PW='" + password.toString() + "';"
  mysql_con.query(sql, function(err, rows){
    if (rows.length < 1){
      res.send("Invalid ID or Password!");
    }
    else{  
      res.send(rows);
    }
  });
});

// 관리자 회원 가입
app.post('/user/create', (req, res) => {

  // 계정 번호값 부여
  let max_account_num_query = mysql_con_sync.query('select max(ACCOUNT_NUM) as num from ACCOUNT_INFO;');

  if(!max_account_num_query[0].num){
    account_num = 1;
  }
  else{
    account_num =  max_account_num_query[0].num + 1;
  }

  // id 및 password DB에 insert
  const user_id = req.body.user_id;
  let password = req.body.password;
  const account_type = req.body.account_type;

  let encrypt = crypto.createHash("sha256")
  encrypt.update(password)
  password = encrypt.digest("hex")

  sql = 'INSERT INTO ACCOUNT_INFO(ACCOUNT_NUM, USER_ID, USER_PW, ACCOUNT_TYPE) VALUES (' + account_num + ', "' + user_id + '", "' + password + '", "' + account_type + '")';

  mysql_con.query(sql, function(err){
    if (err) {
      console.log(err)
      res.send("Failed to create administrator account!");
    }
    else{
      res.send("Successfully create administrator account!");
    }
  });
});

module.exports = app;
