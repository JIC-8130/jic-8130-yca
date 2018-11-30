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

#### Known Bugs

- In case a call to the API fails, a timeout will occur and the user will have to re-input their data in the correct format. 

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
- None! As long as you have your computer and the ability to open up a terminal window, you are all set.

In order to run the application, you will need to take three simple steps. 
In the same terminal window that you used to clone the repository, navigate to the project using:
```
cd jic-8130-yca
```

Then, use npm (node package manager) to install the project dependencies on your machine.
If you do not have npm, you can download it [here](https://nodejs.org/en/).
To install project dependencies, input the following command in your terminal window:
```
npm install
```

Finally, you can use the following command to start up the application in your browser:
```
npm start
```

Now, if you navigate to the link provided in the output of that command in your browser, you should see ASGARD!

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

## Further Set-Up

### IIS Server on Windows Server 2012 R2

TODO: Include info and screenshots

### Azure Web App Service

TODO: Include info and screenshots

------

## Maintenance and Resources

If you would like to make modifications to the code, you will need to open the local copy that you just created in a text editor of your choice.
The primary frameworks used to develop the application are
- React.js [see more](https://reactjs.org/)
- HTML / CSS [see more](https://learn.shayhowe.com/html-css/)
- node.js [see more](https://nodejs.org/en/about/)

To submit changes to the code, you can submit a pull request to the jic-8130-yca Github repository. If you are unfamiliar with using Github, a detailed guide to getting started with git can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics).

In order to learn more about the structure of our application, you may visit this [link](https://drive.google.com/open?id=1IRWXvqxzXfkr8TDX4VfOpGl3umd0hPc2).
