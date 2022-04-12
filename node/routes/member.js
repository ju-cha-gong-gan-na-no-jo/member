const express = require('express');
const request = require('request');
const app = express();
const mysql = require('mysql');
const mysql_sync = require('sync-mysql');
const bodyParser = require('body-parser');
const crypto = require("crypto")

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
  let sql = 'SELECT * FROM ';
  switch(arg){
    // 입주민
    case "member":
      sql = 'SELECT m.MEMBER_NUM, m.NAME, m.DONG, m.HO, m.PHONE_NUM, m.MEMBER_TYPE_NUM, c.CAR_NUM FROM MEMBER_INFO m, CAR_INFO c where m.MEMBER_NUM=c.MEMBER_NUM;';
      break;
    // 1회 방문자
    case "guest":
      sql = sql + 'GUEST';
      break;
    // 정기 방문자
    case "book":
      sql = sql + 'BOOKED';
      break;
    // 상가
    case "store":
      sql = sql + 'STORE';
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

// 회원여부 조회
app.post('/user/info/', (req, res) => {
  const car_num = req.body.car_num;
  let sql = 'SELECT MEMBER_TYPE_NUM FROM CAR_INFO where CAR_NUM="' + car_num + '";';

  mysql_con.query(sql, function(err, result){
    if (err) 
      res.send("An error occurred!");
    else
    {
      if (result.length < 1){
        res.send("올바르지 않은 입력입니다.")
        return;
      }
      const member_type = result[0].MEMBER_TYPE_NUM;
      if (member_type == 1){
        res.send("회원")
      }
      else{
        res.send("비회원")
      }
    }
  });
});

// 데이터 추가
app.post('/user/add/:arg', (req, res) => {
  const arg = req.params.arg;
  let sql = '';

  let max_member_num_query = mysql_con_sync.query('select max(MEMBER_NUM) as num from MEMBER_INFO;');
  max_member_num = max_member_num_query[0].num;

  switch(arg){
    // 입주민
    case "member":
      member_num =  max_member_num + 1;
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      member_type_num = req.body.member_type_num;
      car_num = req.body.car_num;
      remark = req.body.remark;
      console.log(name);
      sql = 'INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + member_num + ', "'+ name + '", ' + dong + ', ' + ho + ', ' + phone_num + ', ' + member_type_num + ', ' + remark + ');';
      sql_car = 'INSERT INTO CAR_INFO(CAR_NUM, MEMBER_NUM, MEMBER_TYPE_NUM) VALUES ("' + car_num + '", ' + member_num + ', ' + member_type_num + ');';
      
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

      sql = 'INSERT INTO GUEST(NAME, VISIT_DATE, CAR_NUM, PHONE_NUM, MEMBER_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + name + ', ' + visit_date + ', ' + car_num + ', ' + phone_num + ', ' + member_num + ', ' + member_type_num + ', ' + remark + ');';
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

      sql = 'INSERT INTO BOOKED(BOOKED_PURPOSE, VALIDITY, PHONE_NUM, NAME, COMPANY_NAME, CAR_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + booked_purpose + ', ' + validity + ', ' + phone_num + ', ' + name + ', ' + company_name + ', ' + car_num + ', ' + member_type_num + ', ' + remark + ');';
      break;
    // 상가
    case "store":
      store_num = req.body.store_num;
      store_name = req.body.store_name;
      phone_num = req.body.phone_num;
      addr = req.body.addr;
      owner_name = req.body.owner_name;
      joined_date = req.body.joined_date;
      withdrew_date = req.body.withdrew_date;
      account_num = req.body.account_num;
      remark = req.body.remark;

      sql = 'INSERT INTO STORE(STORE_NUM, STORE_NAME, PHONE_NUM, ADDR, OWNER_NAME, JOINED_DATE, WITHDREW_DATE, ACCOUNT_NUM, REMARK) VALUES (' + store_num + ', ' + store_name + ', ' + phone_num + ', ' + addr + ', ' + owner_name + ', ' + joined_date + ', ' + withdrew_date + ', ' + account_num + ', ' + remark + ');';
      break;
  }
  mysql_con.query(sql);
  mysql_con.query(sql_car, function(err){
    if (err) console.log(err);
    res.send("1 record inserted");
  });
});

// 데이터 수정
app.post('/user/update/:arg', (req, res) => {
  const arg = req.params.arg;
  const name_old = req.body.name_old;
  let sql = '';
  switch(arg){
    // 입주민
    case "member":
      member_num = req.body.member_num;
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'UPDATE MEMBER_INFO SET NAME=' + name + ', DONG=' + dong + ', HO=' + ho + ', PHONE_NUM=' + phone_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME=' + name_old + ';';
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

      sql = 'UPDATE GUEST SET NAME=' + name + ', ' + 'VISIT_DATE=' + visit_date + ', CAR_NUM=' + car_num + ', PHONE_NUM=' + phone_num + ', MEMBER_NUM=' + member_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME= ' + name_old + ';';
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

      sql = 'UPDATE BOOKED SET BOOKED_PURPOSE=' + booked_purpose + ', VALIDITY=' + validity + ', PHONE_NUM=' + phone_num + ', NAME=' + name + ', COMPANY_NAME=' + company_name + ', CAR_NUM=' + car_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME= ' + name_old + ';';
      break;
      
    // 상가
    case "store":
      store_num = req.body.store_num;
      store_name = req.body.store_name;
      phone_num = req.body.phone_num;
      addr = req.body.addr;
      owner_name = req.body.owner_name;
      joined_date = req.body.joined_date;
      withdrew_date = req.body.withdrew_date;
      account_num = req.body.account_num;
      remark = req.body.remark;

      sql = 'UPDATE STORE SET STORE_NAME=' + store_name + ', PHONE_NUM= ' + phone_num + ', ADDR=' + addr + ', OWNER_NAME=' + owner_name + ', JOINED_DATE=' + joined_date + ', WITHDREW_DATE= ' + withdrew_date + ', ACCOUNT_NUM= ' + account_num + ', REMARK=' + remark + 'WHERE STORE_NAME=' + name_old + ';';
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record updated");
    console.log("1 record updated");
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

      sql = 'DELETE FROM MEMBER_INFO WHERE NAME=' + name + ';';
      break;

    // 1회 방문자
    case "guest":
      name = req.body.name;

      sql = 'DELETE FROM GUEST WHERE NAME=' + name + ';';
      break;
    
    // 정기 방문자
    case "book":
      name = req.body.name;

      sql = 'DELETE FROM BOOKED WHERE NAME=' + name + ';';
      break;
    
    // 상가
    case "store":
      store_name = req.body.store_name;

      sql = 'DELETE FROM STORE WHERE STORE_NAME=' + store_name + ';';
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record deleted");
    console.log("1 record deleted");
  });
});

// 인증확인
app.post('/user/auth', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let encrypt = crypto.createHash("sha256")
  encrypt.update(password)
  password = encrypt.digest("hex")

  sql = "select ACCOUNT_NUM, ACCOUNT_TYPE from ACCOUNT_INFO where USER_ID='" + username.toString() + "' and USER_PW='" + password.toString() + "';"
  mysql_con.query(sql, function(err, rows){
    if (rows.length < 1){
      res.send("Invalid ID or Password!");
    }
    else{  
      res.send(rows);
    }
  });
});

// 회원 가입
app.post('/user/create', (req, res) => {
  const username = req.body.username;
  let password = req.body.password;
  const account_type = req.body.account_type;

  let encrypt = crypto.createHash("sha256")
  encrypt.update(password)
  password = encrypt.digest("hex")

  sql = 'INSERT INTO ACCOUNT_INFO(USER_ID, USER_PW, ACCOUNT_TYPE) VALUES ("' + username + '", "' + password + '", "' + account_type + '")';
  mysql_con.query(sql, function(err){
    if (err) {
      console.log(err)
      res.send("Failed to create account!");
    }
    else{
      res.send("Successfully create account!");
    }
  });
});

module.exports = app;
