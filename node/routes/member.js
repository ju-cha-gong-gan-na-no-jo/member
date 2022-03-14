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
// 입주민 데이터 수정
// 입주민 데이터 삭제
// 상점 전체 데이터 불러오기
// 상점 데이터 추가
// 상점 데이터 수정
// 상점 데이터 삭제
// 입주민 데이터 삭제
// 상점 전체 데이터 불러오기
// 상점 데이터 추가
// 상점 데이터 수정
// 상점 데이터 삭제
module.exports = app;