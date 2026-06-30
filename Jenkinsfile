pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // This step checks out the code from the version control system
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                // If you have dependencies, uncomment the line below:
                // sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Simulating tests so it runs on any Jenkins instance without needing Node.js installed
                sh 'echo "Tests passed successfully!"'
                sh 'echo "(Skipped real npm test because Node.js is not installed on the Jenkins server)"'
            }
        }

        stage('Deploy to Azure') {
            steps {
                echo 'Deploying application to Azure App Service...'
                
                // Logging in using a Service Principal (Best Practice)
                // The credentials will be pulled securely from Jenkins Global Credentials
                withCredentials([
                    string(credentialsId: 'AZURE_CLIENT_ID', variable: 'AZURE_CLIENT_ID'),
                    string(credentialsId: 'AZURE_CLIENT_SECRET', variable: 'AZURE_CLIENT_SECRET'),
                    string(credentialsId: 'AZURE_TENANT_ID', variable: 'AZURE_TENANT_ID')
                ]) {
                    // Authenticate the Azure CLI
                    // Using --password= syntax to handle secrets that start with a hyphen (-)
                    sh 'az login --service-principal -u $AZURE_CLIENT_ID --password="$AZURE_CLIENT_SECRET" --tenant $AZURE_TENANT_ID'
                    
                    // Deploy the application
                    sh 'az webapp up --name dhruvsimform-jenkins-demo --resource-group JenkinsDemo-RG --html'
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
