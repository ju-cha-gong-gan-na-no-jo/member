# 회원 관리

## 목차
1. [개요](#1-개요)
2. [시스템 아키텍처 구성도](#2-시스템-아키텍처-구성도)   
3. [소스 폴더 구조](#3-소스-폴더-구조)   
<br/>
<br/>

## 1. 개요
- 본 모듈은 아마존 클라우드 환경에서 회원을 관리하는 기능을 담당합니다.
- 회원 정보가 담긴 DB를 기반으로 인증을 진행하거나 메인 서버와 REST API로 통신하는 작업을 주로 진행합니다.
<br/>
<br/>

## 2. 시스템 아키텍처 구성도
![링크](https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F26079d2d-ca9a-4249-9163-d434cbd7e305%2FUntitled.png?table=block&id=f6622242-2edb-46f4-9e09-11efe08ee66b&spaceId=46a46a25-581b-4261-ba40-fdefadd8fd7a&name=Untitled.png&userId=9f1ffc9c-3e09-4541-b4f2-f4c42f6ffbfb&cache=v2)

- AWS Lightsail의 Node.js 인스턴스 내에서 서버를 실행합니다.
- MySQL의 Docker에는 회원의 정보가 담겨 있습니다.
- WordPress의 플러그인을 이용하여 회원 가입 및 인증을 진행합니다.
<br/>
<br/>

## 3. 소스 폴더 구조
- 회원관리 모듈의 소스 폴더는 크게 node 폴더와 db 폴더로 나뉩니다 </br>

1) node/   
- app.js : 메인 서버를 실행시킵니다   
- backup.js : AWS S3로 백업한 데이터를 전송합니다.   
- node.sh : app.js를 제어하는 쉘 스크립트입니다.    
- member.js : REST API가 담겨있는 파일입니다.   

2. db/   
- backup.sh : MySQL의 데이터를 백업하는 쉘 스크립트입니다.
- db/sql/ : 테스트 목적으로 사용되는 SQL 문장입니다.   

## 4. API 목록
- /user/info : 전체 회원 데이터의 목록을 반환합니다.   
- /user/add : 회원의 데이터를 DB에 추가합니다.   
- /user/update : 갱신된 회원의 데이터를 DB에 반영합니다.   
- /user/delete : 회원의 데이터를 DB에서 제거합니다.<br/>
- /user/auth : 입력한 계정의 ID와 비밀번호가 유효한지 확인합니다.   
- /user/create : 계정을 생성합니다.   
