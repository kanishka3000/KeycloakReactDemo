# Introduction
Sample Application to demonstrate integration of keycloak with react applications

![highlevel](diagrams/HighLevel.png)

# Running the Demo

```
chmod +x build.sh
docker-compose up --build
```

# Accessing the application

http://localhost:8080 for the application
http://localhost:9000 for the keycloak

Keycloak credentials

user : root
password: root@123

Please use above credentials to create a realm user for the applicaiton. 
Future versions of the domo may retain pre configured users in the configuraiton file itself for testing purposes. 

# Google Cloud Notes

## Switch kubectl from minikube to gcloud

kubectl config get-contexts

kubectl config use-context CONTEXT_NAME

https://stackoverflow.com/questions/43643463/how-to-switch-kubectl-clusters-between-gcloud-and-minikube

# GCloud

https://cloud.google.com/sdk/docs/quickstart


GCloud console will provide the gcloud command to add cluster link to kubectl

https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#using-gcloud-init