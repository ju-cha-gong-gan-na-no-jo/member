const express = require('express')
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

// 입주민 전체 데이터 불러오기
app.get('/user/resident/info', (req, res) => {
  const sql = 'select * from MEMBER_INFO';
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});

// 입주민 데이터 추가
app.post('/user/resident/info/add', (req, res) => {
  const sql = 'INSERT INTO MEMBER_INFO(MEMBER_NUM, NAME, DONG, HO, PHONE_NUM, MEMBER_TYPE_NUM, REMARK) VALUES (6, "홍길동", 201, 201, "010-8888-7777", 1, "");';
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record inserted");
    console.log("1 record inserted");
  });
});

// 입주민 데이터 수정
app.post('/user/resident/info/update', (req, res) => {
  const sql = 'UPDATE MEMBER_INFO SET NAME="김길동", DONG=111, HO=111, PHONE_NUM="010-1234-9999", MEMBER_TYPE_NUM=2, REMARK="HELLO!" WHERE MEMBER_NUM=19;';
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record changed");
    console.log("1 record changed");
  });
});

// 입주민 데이터 삭제
app.post('/user/resident/info/delete', (req, res) => {
  const sql = 'DELETE FROM MEMBER_INFO WHERE MEMBER_NUM=6;';
  mysql_con.query(sql, function(err){
    if (err) console.log(err);
    res.send("1 record deleted");
    console.log("1 record deleted");
  });
});

// 상점 전체 데이터 불러오기
app.get('/user/resident/info', (req, res) => {
  const sql = 'select * from MEMBER_INFO';
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});
// 상점 데이터 추가

// 상점 데이터 수정

// 상점 데이터 삭제

module.exports = app;