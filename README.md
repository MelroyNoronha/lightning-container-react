# Demo of React App inside lightning container

## Run this demo:
### Clone this repository
### Build the React App
* cd to testReactApp/
* `npm install` to install dependencies
* Create .env file with `PLATFORM_NAME=SALESFORCE` 
* `npm run build` 
* cd ReactBuild/ 
* Make sure index.html has script tag in body for bundle.js and there is a  manifest.json file with 
```
{
  "landing-pages": [
    {
      "path": "index.html",
      "apex-controller": "DCRController"
    }
  ]
}
```
* Create a zip file of all the contents in ReactBuild

### On your Salesforce org
* Go to Setup and search for static resources
* Create a new static resource with the name 'DCRReactApp' and upload the ReactBuild.zip file and save
* Create a custom object with the name DCR (Make sure API name is DCR__c)
* Open the Developer Console and copy/paste the contents from the files in the lightning-app/ directory to respective component, class and js files with the same names
* Go to DCRReact.app in the Developer Console and click on Preview to see the application in your browser
