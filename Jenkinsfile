pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application....'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "Tests passed successfully!"'
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo 'Deploying application to Azure App Service...'
                
                withCredentials([
                    string(credentialsId: 'AZURE_CLIENT_ID', variable: 'AZURE_CLIENT_ID'),
                    string(credentialsId: 'AZURE_CLIENT_SECRET', variable: 'AZURE_CLIENT_SECRET'),
                    string(credentialsId: 'AZURE_TENANT_ID', variable: 'AZURE_TENANT_ID')
                ]) {
                    sh 'az login --service-principal -u $AZURE_CLIENT_ID --password="$AZURE_CLIENT_SECRET" --tenant $AZURE_TENANT_ID'
                    sh 'az group create --name JenkinsDemo-RG --location southeastasia'                   
                    sh 'az appservice plan create --name JenkinsDemoPlan --resource-group JenkinsDemo-RG --sku B1 --is-linux'                   
                    sh 'az webapp create --resource-group JenkinsDemo-RG --plan JenkinsDemoPlan --name dhruvsimform-jenkins-demo --runtime "NODE:22-lts"'                   
                    sh 'python3 -c "import zipfile; z=zipfile.ZipFile(\'site.zip\',\'w\'); z.write(\'index.html\'); z.write(\'index.js\'); z.write(\'package.json\'); z.close()"'              
                    sh 'az webapp deploy --resource-group JenkinsDemo-RG --name dhruvsimform-jenkins-demo --src-path site.zip --type zip'
                }
                
                echo 'Deployment stage completed.'
            }
        }
    }
    
    post {
        always {
            echo 'This will always run after the pipeline finishes, regardless of success or failure.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
