# Jenkins
Amazon Lightsail의 Node.js 인스턴스 위에서 실행합니다   

## 0-1. Jenkins 설치 <hr/>
```
$ sudo passwd root   
$ sudo apt update   
$ sudo apt install -y openjdk-11-jre   
$ java -version   
$ curl -fsSL https://pkg.jenkins.io/debian/jenkins.io.key | sudo tee \\   
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null   
$ echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \\   
  https://pkg.jenkins.io/debian binary/ | sudo tee \\   
  /etc/apt/sources.list.d/jenkins.list > /dev/null   
$ sudo apt update   
$ sudo apt install -y jenkins   
```
## 0-2. 사전 준비 <hr/>
### 1) 다음 기능을 사용하기 위해 포트를 오픈합니다   

3000 : Node.js   
3306 : MySQL   
8080 : Jenkins


### 2) Jenkins에서 권한을 얻기 위해 다음 파일을 수정합니다
```
$ sudo vi /etc/sudoers      
```
12 Defaults:jenkins !authenticate   
22 jenkins ALL=(ALL:ALL) ALL   

## 1. 패키지 리스트 업데이트 및 패키지 업그레이드 <hr/>
```
$ sudo apt update && sudo apt -y upgrade   
```

## 2. Docker 설치 <hr/>
```
$ sudo apt install ca-certificates curl gnupg lsb-release   
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg   
$ echo \\   
  "deb [arch=\$(dpkg --print-architecture) signed-by=/usr/share/keyrings/   docker-archive-keyring.gpg] https://download.docker.com/linux/debian \\   
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null   
$ sudo apt update   
$ sudo apt install docker-ce docker-ce-cli containerd.io   
```
## 3. Docker 이미지 pull <hr/>
```
$ sudo docker pull emmyuel/mysql:0.3   
```
## 4. Docker 볼륨 생성 <hr/>
```
$ sudo docker volume create vol_wp   
```
## 5. 도커 컨테이너 실행 <hr/>
```
$ sudo docker run -d --name mysql_db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=member -e MYSQL_DATABASE=wpdb -e MYSQL_USER=wp -e MYSQL_PASSWORD=wppass -v vol_db:/var/lib/mysql emmyuel/mysql:0.3   
```
## 6. 깃허브에서 소스 가져오기 <hr/>
```
$ git clone https://github.com/ju-cha-gong-gan-na-no-jo/member.git   
```
## 7. Node.js 실행 <hr/>
```
$ make app   
```
## 문제가 생겼을 때 <hr/>
```
$ sudo docker rm -f \$(sudo docker ps -aq)   
$ sudo docker rmi -f $(sudo docker images -aq)   
$ rm -rf /var/lib/jenkins/workspace/Deploy/member   
```
