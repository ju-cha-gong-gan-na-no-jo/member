const express = require('express');
const request = require('request');
const app = express()
const mysql = require('mysql')

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
  arg = 4
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
      sql = 'INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (6, "홍길동", 201, 201, "010-8888-7777", 1, "");';
      break;
    // 1회 방문자
    case 2:
      sql = 'INSERT INTO GUEST(NAME, VISIT_DATE, CAR_NUM, PHONE_NUM, MEMBER_NUM, MEMBER_TYPE_NUM, REMARK) VALUES ("이민호", "2022-03-15", "334마8116", "010-5534-1997", 4, 2, "가전제품설치기사")';
      break;
    // 정기 방문자
    case 3:
      sql = 'INSERT INTO BOOKED(BOOKED_PURPOSE, VALIDITY, PHONE_NUM, NAME, COMPANY_NAME, CAR_NUM, MEMBER_TYPE_NUM, REMARK) VALUES ("쓰레기수거", "2022-12-31", "010-7777-3554", "안나연", "수거1", "123호4884",  3, "")';
      break;
    // 상가
    case 4:
      sql = 'INSERT INTO STORE(STORE_NUM, STORE_NAME, PHONE_NUM, ADDR, OWNER_NAME, JOINED_DATE, WITHDREW_DATE, ACCOUNT_NUM, REMARK) VALUES (3, "미소야", "010-7332-4819", "서울특별시 어딘가", "한송이", "2022-03-11", NULL, 2, "");';
      break;
  }
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record inserted");
    console.log("1 record inserted");
  });
});

// 데이터 수정
app.post('/user/update', (req, res) => {
  arg = 1;
  var sql = '';
  switch(arg){
    // 입주민
    case 1:
      sql = 'UPDATE MEMBER_INFO SET NAME="김길동", DONG=111, HO=111, PHONE_NUM="010-1234-9999", MEMBER_TYPE_NUM=2, REMARK="HELLO!" WHERE MEMBER_NUM=19;';
      break;
    // 1회 방문자
    case 2:
      sql = 'UPDATE GUEST SET NAME="김아무개", REMARK="이름수정되었습니다" WHERE GUEST_NUM=4;';
      break;
    // 정기 방문자
    case 3:
      sql = 'UPDATE BOOKED SET NAME="소형준", CAR_NUM="888서3456", REMARK="hello!" WHERE BOOKED_NUM=2;';
      break;
    // 상가
    case 4:
      sql = 'UPDATE STORE SET STORE_NAME="김밥천국", REMARK="수정되었습니다" WHERE STORE_NUM=3;';
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
      sql = 'DELETE FROM MEMBER_INFO WHERE MEMBER_NUM=6;';
      break;
    case 2:
      sql = 'DELETE FROM GUEST WHERE GUEST_NUM=3;';
      break;
    case 3:
      sql = 'DELETE FROM BOOKED WHERE BOOKED_NUM=3;';
      break;
    case 4:
      sql = 'DELETE FROM STORE WHERE STORE_NUM=3;';
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
  password = "12345dasasdasd67";
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  const options = {
    uri:url,
    method:'GET',
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
app.post('/user/add', (req, res) => {
  var url = "http://52.79.193.214:8080/wp-json/wp/v2/users";
  username = "root";
  password = "member";
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  
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