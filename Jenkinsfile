pipeline {
    agent any

    stages{
        stage('STEP (1/) Preparation'){
            steps{
                echo "apt update and upgrade..."
                sh 'sudo apt update && sudo apt upgrade -y' 
            }
        }
        stage('STEP (2/) Install Docker'){
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
    }
}