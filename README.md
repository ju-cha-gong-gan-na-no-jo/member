# 회원 관리

## 목차
1. [개요](#1-개요)   
2. [사전 준비](#2-사전-준비)
3. [시스템 아키텍처 구성도](#2-시스템-아키텍처-구성도)   
4. [소스 폴더 구조](#3-소스-폴더-구조)  
5. [REST API 목록](#4-rest-api-목록) 
<br/>
<br/>

## 1. 개요
- 본 모듈은 아마존 클라우드 환경에서 회원을 관리하는 기능을 담당합니다.
- 회원 정보가 담긴 DB를 기반으로 인증을 진행하거나 메인 서버와 REST API로 통신하는 작업을 주로 진행합니다.   

## 2. 사전 준비 
- Amazon Lightsail의 Node.js 인스턴스 환경에서 구동합니다.
- Jenkins Pipeline으로 서비스 환경을 구축할 수 있습니다. Jenkins/README.md 파일을 참고하세요.       

<br/>
<br/>

## 3. 시스템 아키텍처 구성도
![링크](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F78557097-a667-48f8-a89b-9fad41e2795b%2FUntitled.png?table=block&id=da61a2d9-3ce5-4f21-b260-82e21d5afb34&spaceId=46a46a25-581b-4261-ba40-fdefadd8fd7a&width=2000&userId=9f1ffc9c-3e09-4541-b4f2-f4c42f6ffbfb&cache=v2)

- AWS Lightsail의 Node.js 인스턴스 내에서 서버를 실행합니다.
- MySQL의 Docker에는 회원의 정보가 담겨 있습니다.
.
<br/>
<br/>

## 4. 소스 폴더 구조
- 회원관리 모듈의 소스 폴더는 크게 node 폴더와 db 폴더로 나뉩니다 </br>

1) node/   
- app.js : 메인 서버를 실행시킵니다   
- upload.js : AWS S3로 백업한 데이터를 전송합니다.   
- node.sh : app.js의 동작을 제어하는 쉘 스크립트입니다.    
- member.js : REST API가 담겨있는 파일입니다.   

2. db/   
- backup.sh : MySQL의 데이터를 백업하는 쉘 스크립트입니다.
- db/sql/ : 테스트 목적으로 사용되는 SQL 문장입니다.   

## 5. REST API 목록
- /user/info/:arg : 회원, 비회원 또는 상가의 데이터를 조회하여 반환합니다.  
- /user/info : 입력된 차량번호를 바탕으로 회원 여부를 조회하여 반환합니다.
- /user/info/car : 입력된 차량번호를 바탕으로 데이터를 조회하여 반환합니다.   
- /user/info/name : 입력된 상점이름을 바탕으로 데이터를 조회하여 반환합니다.    
- /user/add/:arg : 회원, 비회원 및 상가의 데이터를 DB에 추가합니다. 상점의 경우 계정생성까지 진행합니다.     
- /user/update/:arg : 갱신된 회원의 데이터를 DB에 반영합니다.   
- /user/delete/:arg : 회원의 데이터를 DB에서 제거합니다.   
- /user/auth : 입력한 계정의 ID와 비밀번호가 유효한지 확인합니다.   
- /user/create : 관리자 계정을 생성합니다.   
