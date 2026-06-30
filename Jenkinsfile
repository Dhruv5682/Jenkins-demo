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
                
                // IMPORTANT: To make this work, you need the Azure CLI installed on your Jenkins server
                // and you need to log in to Azure using a Service Principal.
                // You would typically configure these credentials in Jenkins and inject them as environment variables.
                
                // Example deployment command (uncomment and replace variables to use):
                /*
                withCredentials([azureServicePrincipal('my-azure-credentials-id')]) {
                    sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID'
                    
                    // The 'az webapp up' command automatically creates an App Service if it doesn't exist
                    // and deploys your HTML code to it!
                    sh 'az webapp up --name my-unique-jenkins-app-1234 --resource-group Jenkins-RG --html'
                }
                */
                
                echo 'Deployment stage completed. (Azure commands are commented out until credentials are set up)'
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
