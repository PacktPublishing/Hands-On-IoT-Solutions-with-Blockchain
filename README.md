# Hands-On-IoT-Solutions-with-Blockchain
Hands-On IoT Solutions with Blockchain published by Packt

Ensure you have installed
NodeJS v7.0.0
NPM 3.10.8
<root directory> - is the directory that you have cloned this repository


# Chapter 1: Creating your first IoT solution using IBM Watson IoT Platform 

# application-1: Contains the code for the sample application created on Chapter1

#Access application source code
cd <root directory>/ch1/application-1

# Install dependencies
$npm install

# Update application.json: change org, auth-key and auth-token values to match your configuration
{
    "org": "<your IoT organization id>",
    "id": "sample-app",
    "auth-key": "<application authentication key>",
    "auth-token": "<application authentication token>"
}

# Run the application
$npm start


# application-1: Contains the code for the sample application created on Chapter1

#Access application source code
cd <root directory>/ch1/device-1

# Install dependencies
$npm install

# Update device.json: change org and auth-token values to match your configuration
{
    "org": "<your IoT organization id>",
    "type": "DeviceSimulator",
    "id": "DeviceSimulator01",
    "auth-method" : "token",
    "auth-token" : "<device authentication token>"
}

# Run the application
$npm start
