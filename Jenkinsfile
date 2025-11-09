pipeline {
    agent any

    environment {
        APP_NAME = "newswave"
        IMAGE_NAME = "newswave:jenkins"
        CONTAINER_NAME = "newswave_container"
        PORT = "8081"
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Cloning repository...'
                git branch: 'main', url: 'https://github.com/harshush25/newswave.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t ${IMAGE_NAME} ./newswave'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo '🚀 Running Docker container...'
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true
                    docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '🔍 Verifying app deployment...'
                sh '''
                    sleep 5
                    curl -f http://localhost:${PORT} || echo "App not reachable!"
                '''
            }
        }
    }

    post {
        always {
            echo '📦 Cleaning up old containers...'
            sh 'docker rm -f ${CONTAINER_NAME} || true'
        }
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs for details.'
        }
    }
}
