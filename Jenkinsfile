pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/harshush25/newswave.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image for NewsWave...'
                sh 'docker build -t newswave:jenkins ./newswave'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running NewsWave container...'
                sh 'docker run -d -p 8081:8081 --name newswave_container newswave:jenkins || true'
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Checking running containers...'
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Please check logs.'
        }
        always {
            echo '📦 Build finished. Cleaning up old containers...'
            sh 'docker rm -f newswave_container || true'
        }
    }
}
