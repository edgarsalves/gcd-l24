**Google Cloud Day Lisbon 2024 - Demo**

[Shared] Presentation: https://docs.google.com/presentation/d/10XohtSTdiuSkKyyRblon8BjV3B2aItbZsk2EpZDIJE8/edit?usp=sharing

[Private] Presentation: https://docs.google.com/presentation/d/1j2UX4FiSBCrbfJBxvbQotagIdn349_fM7XhZD5jYEmQ/edit?usp=sharing

_____________________________________________________________________________________________________________________________


**Project Setup**  

Create a GCP Project at [https://console.cloud.google.com/](https://console.cloud.google.com/) 
*   \[PROJECT\_NAME\] (e.g. test-gcd-dataform-v1 ) 
    
Access BigQuery at [https://console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery) 
*   Enable BigQuery API in the UI 

Import Notebook setup.ipynb in the BigQuery Console 
*   Set Region: (e.g. europe-west4)  
*   Enable BigQuery Studio notebooks API in the UI   
*   Consequently it might ask you to enable Vertex AI API and Compute Engine API

_____________________________________________________________________________________________________________________________

**Remote Function and Permissions** 

Create a GCS bucket with the project name at [https://console.cloud.google.com/storage/browser](https://console.cloud.google.com/storage/browser) 
*   Upload the cloud function zip into it 
*   Later on create a UDF to link to it  
    *   [https://cloud.google.com/bigquery/docs/remote-function-tutorial](https://cloud.google.com/bigquery/docs/remote-function-tutorial) 
    *   Add permissions to the cloud function invoker (notebook setup.ipynb) 

Run the Notebook setup.ipynb cells except the Setup : Grant the necessary permissions to the Dataform Service Account after repository creation 

_____________________________________________________________________________________________________________________________

**Dataform Setup** 

Create a repository at [https://console.cloud.google.com/bigquery/dataform](https://console.cloud.google.com/bigquery/dataform) 
*   \[REPOSITORY\_NAME\] (e.g. test-gcd-dataform-v1-repo) 
*   Region: europe-west4 
*   Save the default dataform service account just in case (\*@gcp-sa-dataform.iam.gserviceaccount.com) 
    
To Create a GitHub-based repository (skip it if not necessary) 
*   Create GitHub Repository Access Token: [Introduction to Dataform in Google Cloud Platform](https://www.youtube.com/watch?v=285HnXL9_rk&ab_channel=Cloud4DataScience) 
    *   Go to GitHub settings 
    *   Developer settings 
    *   Personal access tokens 
    *   Fine-grained tokens 
    *   Generate a new token 
        *   Add token name 
        *   Set Expiration 
        *   Only select repositories 
        *   Repository permissions 
            *   Contents -> Read and Write 
        *   Generate token 
*   Add GitHub Repository Secret to GCP: 
    *   Go to Google Cloud Security -> Secret Manager  
    *   Enable API if necessary 
    *   Create Secret 
        *   Add Secret Name 
        *   Add Secret Value 
        *   Create Secret 
*   Link Repository created to GitHub 
    *   Go to repository settings 
    *   Connect with git 
    *   Fill in the remote git repository URL 
    *   Select Default Branch 
    *   Add secret previously created  
    *   Run the setup Notebook cell to grant permissions to the Dataform Service Account  
    *   Link  

Create workspace
*   \[WORKSPACE\_NAME\] (e.g. test-gcd-dataform-v1-workspace) - equivalent to a branch name

Initialize workspace
