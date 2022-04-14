pipeline {
    agent any

    stages{
        stage('STEP (1/7) Preparation'){
            steps{
                echo "start jenkins pipeline..."
                sh 'sudo apt update && sudo apt upgrade -y' 
            }
        }
        stage('STEP (2/7) Install Docker'){
            steps{
                echo "install docker..."
                sh "sudo apt install -y ca-certificates curl gnupg lsb-release"
                sh 'sudo rm -rf /usr/share/keyrings/docker-archive-keyring.gpg'
                sh "curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg"
                sh 'echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null'
                sh "sudo apt update"
                sh "sudo apt install -y docker-ce docker-ce-cli containerd.io" 
            }
        }
        stage('STEP (3/7) Pull Docker image'){
            steps{
                echo 'pull docker image...'
                sh 'sudo docker pull emmyuel/mysql:0.3'
            }
        }
        stage('STEP (4/7) Create Docker volume'){
            steps{
                echo 'create docker volume...'
                sh 'sudo docker volume create vol_db'
            }
        }
        stage('STEP (5/7) Run Docker container'){
            steps{
                echo 'run docker container...'
                sh 'sudo docker run -d --name mysql_db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=member -e MYSQL_DATABASE=wpdb -e MYSQL_USER=wp -e MYSQL_PASSWORD=wppass -v vol_db:/var/lib/mysql emmyuel/mysql:0.3'            
                sh 'sudo docker exec mysql_db tar -xvf backup.tar.gz -C /var/lib/'
            }
        }
        stage('STEP (6/7) Pull github source'){
            steps{
                echo 'pull source code from github...'
                sh 'git clone https://github.com/ju-cha-gong-gan-na-no-jo/member.git'
            }
        }
        stage('STEP (7/7) Start Node.js'){
            steps{
                echo 'start node...'
                sh '/opt/bitnami/node/bin/node ./member/node/app.js &'
            }
        }
    }
}