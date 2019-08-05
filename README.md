![yca-logo](http://industriaaldia.com/images/ialdia/logos/yokogawa_logo.jpg)

# ASGARD Delivery Docs

## Release Notes

### Version 0.0.1 

#### New Features

We're very excited to share this first version with our client, Yokogawa Corporation of America! The goal of this app is to make data collection a little easier on the team at YCA. Being a manufacturing company, YCA is very interested in making data-driven decisions. Data is at the heart of their business, and ASGARD will make it easy for them to gather, process, and share data about their company's various cost centers.

There are a lot of new features included in this version. Highlights include:

- Line manager data input
- QA Engineer dashboard with comprehensive graph
- Detailed Cost Center data view with editable table
- Export function that creates PDF of a cost center's graph and chart

DEMO: https://drive.google.com/file/d/1O0toj9WJowP8zXn_LlicOmgb4Tj2fUAa/view?usp=sharing

#### Known Bugs

- In case a call to the API fails, a timeout will occur and the user will have to re-input their data in the correct format. 
- Incorrect data types will temporarily crash the API server
- No mechanism for switching cost centers for a line manager
- No mechanism for routing based on user authentication

------

## Install Guide

### 1. Clone the ASGARD Repository

Open a terminal window and navigate to a destination in your filesystem where you would like to keep ASGARD materials.

You can clone the repository by using the command:
```
git clone https://github.com/JIC-8130/jic-8130-yca.git
```

This will create a local copy of all of the code in your file system.

### 2. Run the Application

Prerequisites:
- [Node.js](https://nodejs.org/en/) is the JavaScript runtime in which ASGARD runs. `npm`, the Node.js package manager, is included in the Node.js install.
- Install Node, and then open up a terminal/command prompt and run `node -v` and `npm -v`, and make sure you've got at least version 10.13 and version 6.4.1, respectively.

In order to run the application, you will need to take three simple steps. 
In the same terminal window that you used to clone the repository, navigate to the project using:
```
cd jic-8130-yca
```

Our app has a lot of dependencies (the full list is in `package.json`), but `npm` will take care of gathering and installing all of them.
To install project dependencies, input the following command in your terminal window:
```
npm install
```

Finally, you can use the following command to start up the application in your browser:
```
npm start
```

Now, if you navigate to the link provided (usually [http://localhost:8080](http://localhost:8080)) in the output of that command in your browser, you should see ASGARD!

### Troubleshooting

In the case that you receive the common error, "module not found," you may install that module manually using npm. To do that, you can use the command:
```
npm install <module_name>
```
Do not include the < > characters when you enter this command. If this does not solve your problem, you can delete the node_modules folder from the project and install a fresh copy using the command:
```
npm install
```

If there are further problems installing the application, please refer to [this troubleshooting guide](https://devcenter.kinvey.com/nodejs/guides/troubleshooting) for node.js.


------

## Deploying ASGARD

Getting ASGARD to run on your servers will take a case-by-case series of steps, based on the environment to which you want to deploy the app. There are great guides on the Internet to show you how each of those installations are done. Here are two of the most common:


### Windows Server (IIS)

While Windows Server isn't designed especially for Node applications, they can still run under a Windows Server system. You'll need to install some software called [iisnode](https://github.com/Azure/iisnode) to get optimal performance from ASGARD. Installation instructions for iisnode can be found [here](https://github.com/Azure/iisnode#hosting-nodejs-applications-in-iis-on-windows).

Once you have iisnode installed, you can begin to configure your system. You'll need to create a `web.config` file that will tell IIS to serve a Node application:
```
<configuration><system.webServer><handlers><add name="iisnode" path="/path/to/asgard/app.js" verb="*" modules="iisnode" /></handlers>    
  </system.webServer></configuration>
```

For full details on how to install ASGARD on a Windows Server instance with IIS, see these links: [Guide 1](https://www.hanselman.com/blog/InstallingAndRunningNodejsApplicationsWithinIISOnWindowsAreYouMad.aspx), [Guide 2](https://tomasz.janczuk.org/2011/08/hosting-nodejs-applications-in-iis-on.html)

### Azure Web App Service

Please follow Microsoft's official set-up instructions for Azure Web App Services [here](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs).


------

## Maintenance and Resources

If you would like to make modifications to the code, you will need to open the local copy that you just created in a text editor of your choice.
The primary frameworks used to develop the application are
- React.js [see more](https://reactjs.org/)
- HTML / CSS [see more](https://learn.shayhowe.com/html-css/)
- Node.js [see more](https://nodejs.org/en/about/)

To submit changes to the code, you can submit a pull request to the jic-8130-yca Github repository. If you are unfamiliar with using Github, a detailed guide to getting started with git can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics).

In order to learn more about the structure of our application, you may visit this [link](https://drive.google.com/open?id=1IRWXvqxzXfkr8TDX4VfOpGl3umd0hPc2).
