const express = require('express');
const request = require('request');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

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

// 전체 데이터 조회
app.get('/user/info', (req, res) => {
  arg = 1
  var sql = 'select * from ';
  switch(arg){
    // 입주민
    case 1:
      sql = sql + 'MEMBER_INFO';
      break;
    // 1회 방문자
    case 2:
      sql = sql + 'GUEST';
      break;
    // 정기 방문자
    case 3:
      sql = sql + 'BOOKED';
      break;
    // 상가
    case 4:
      sql = sql + 'STORE';
      break;
  }
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});

// 데이터 추가
app.post('/user/add', (req, res) => {
  arg = 1;
  var sql = '';
  switch(arg){
    // 입주민
    case 1:
      member_num = req.body.member_num;
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + member_num + ', '+ name + ', ' + dong + ', ' + ho + ', ' + phone_num + ', ' + member_type_num + ', ' + remark + ');';
      break;
    // 1회 방문자
    case 2:
      name = req.body.name;
      visit_date = req.body.visit_date;
      car_num = req.body.car_num;
      phone_num = req.body.phone_num;
      member_num = req.body.member_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'INSERT INTO GUEST(NAME, VISIT_DATE, CAR_NUM, PHONE_NUM, MEMBER_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (' + name + ', ' + visit_date + ', ' + car_num + ', ' + phone_num + ', ' + member_num + ', ' + member_type_num + ', ' + remark + 'where ~~);';
      break;
    // 정기 방문자
    case 3:
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
    case 4:
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
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record inserted");
  });
});

// 데이터 수정
app.post('/user/update', (req, res) => {
  arg = 1;
  var sql = '';
  switch(arg){
    // 입주민
    case 1:
      member_num = req.body.member_num;
      name = req.body.name;
      dong = req.body.dong;
      ho = req.body.ho;
      phone_num = req.body.phone_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'UPDATE MEMBER_INFO SET NAME=' + name + ', DONG=' + dong + ', HO=' + ho + ', PHONE_NUM=' + phone_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME=' + name + ';';
      break;

    // 1회 방문자
    case 2:
      name = req.body.name;
      visit_date = req.body.visit_date;
      car_num = req.body.car_num;
      phone_num = req.body.phone_num;
      member_num = req.body.member_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'UPDATE GUEST SET NAME=' + name + ', ' + 'VISIT_DATE=' + visit_date + ', CAR_NUM=' + car_num + ', PHONE_NUM=' + phone_num + ', MEMBER_NUM=' + member_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME= ' + name + ';';
      break;

    // 정기 방문자
    case 3:
      booked_purpose = req.body.booked_purpose;
      validity = req.body.validity;
      phone_num = req.body.phone_num;
      name = req.body.name;
      company_name = req.body.company_name;
      car_num = req.body.car_num;
      member_type_num = req.body.member_type_num;
      remark = req.body.remark;

      sql = 'UPDATE BOOKED SET BOOKED_PURPOSE=' + booked_purpose + ', VALIDITY=' + validity + ', PHONE_NUM=' + phone_num + ', NAME=' + name + ', COMPANY_NAME=' + company_name + ', CAR_NUM=' + car_num + ', MEMBER_TYPE_NUM=' + member_type_num + ', REMARK=' + remark + 'WHERE NAME= ' + name + ';';
      break;
      
    // 상가
    case 4:
      store_num = req.body.store_num;
      store_name = req.body.store_name;
      phone_num = req.body.phone_num;
      addr = req.body.addr;
      owner_name = req.body.owner_name;
      joined_date = req.body.joined_date;
      withdrew_date = req.body.withdrew_date;
      account_num = req.body.account_num;
      remark = req.body.remark;

      sql = 'UPDATE STORE SET STORE_NAME=' + store_name + ', PHONE_NUM= ' + phone_num + ', ADDR=' + addr + ', OWNER_NAME=' + owner_name + ', JOINED_DATE=' + joined_date + ', WITHDREW_DATE= ' + withdrew_date + ', ACCOUNT_NUM= ' + account_num + ', REMARK=' + remark + 'WHERE STORE_NAME=' + store_name + ';';
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record updated");
    console.log("1 record updated");
  });
});

// 데이터 삭제
app.post('/user/delete', (req, res) => {
  arg = 1;
  var sql = '';
  switch(arg){
    // 입주민
    case 1:
      name = req.body.name;

      sql = 'DELETE FROM MEMBER_INFO WHERE NAME=' + name + ';';
      break;

    // 1회 방문자
    case 2:
      name = req.body.name;

      sql = 'DELETE FROM GUEST WHERE NAME=' + name + ';';
      break;
    
    // 정기 방문자
    case 3:
      name = req.body.name;

      sql = 'DELETE FROM GUEST WHERE NAME=' + name + ';';
      break;
    
    // 상가
    case 4:
      store_name = req.body.store_name;

      sql = 'DELETE FROM STORE WHERE NAME=' + name + ';';
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record deleted");
    console.log("1 record deleted");
  });
});

// 인증확인
app.get('/user/auth', (req, res) => {
  var url = "http://52.79.193.214:8080/wp-json/wp/v2/posts";
  username = "hong";
  password = "12345678";
  var auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

  const options = {
    uri:url,
    headers : {
      "Authorization": auth
    }
  }

  request.get(options, function (error, response, body) {
    if(error)
   { console.error("Error while communication with api and ERROR is :  " + error);
   res.send(error);
  }
    console.log('body : ', body);
    res.send(body);
  });
});

// 회원 가입
app.post('/user/create', (req, res) => {
  var url = "http://52.79.193.214:8080/wp-json/wp/v2/users";
  username = "root";
  password = "member";
  var auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
  
  const options = {
    uri:url,
    method:'POST',
    headers : {
      "Authorization": auth
    },
    form:{
      username:"yoon",
      email:"yoon@y.com",
      password:"1234"
    }
  }
    request.post(options, function (error, response, body) {
        if(error)
       { console.error("Error while communication with api and ERROR is :  " + error);
       res.send(error);
    }
        console.log('body : ', body);
        res.send(body);
    });    
});

module.exports = app;