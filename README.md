# Dendrostream Backend API

## Description

This code is for the Dendrostream backend API, used to transmit the tree and climate data received from the prototype tree talker unit developed as part of Sensing the Forest, to a requesting client. This system in turn calls upon the [custom-web-server-backend](https://github.com/sensingtheforest/custom-web-server-backend) to attempt to return the latest data received from the hardware units, where possible, else returning historical data.

## Features

* Returns latest or all available JSON object array data from each tree-talker unit
* Fallback to return historical data, if current device data is unavailable
* Web socket functionality to allow client to constantly obtain latest record from unit
* Email notifications when unit stops streaming or dendrometer reading is out of range
* Forwards Contact Form responses to administrative email

## Installation/Deployment

### Hardware/Software Requirements

* Hardware/software meeting the minimum requirements for Node.js (^v18.18.0) and Express (^5.1.0)
* Developed/tested and working on an Apple Macbook Pro (16-inch/November 2024/M4 Pro/48 GB/Sequoia 15.6) and Render cloud deployment service (Hobby tier - free) as of 25/01/2026

### Prerequisites

#### Install Node.js/npm
 * Local installation: [npm Docs: Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) tutorial for the latest installation instructions for your chosen platform
 * Cloud service installation: refer to your cloud provider for information and support. Services such as [Render](https://render.com) already support deployment from this GitHub repository, without manual installation of Node.js/npm.

 **Note:** this tutorial assumes deployment from the master branch of the official source GitHub repository: [sensingtheforest/dendrostream-api](https://github.com/sensingtheforest/dendrostream-api). 

### Setup

#### Local (Development)

1. Clone or download this GitHub repository to your local development machine.

2. Open the project and navigate to the root directory of this cloned project on your local development machine in your code editor/IDE of choice (e.g., VS Code).

3. Within this root directory, create a new file named `.env`. Populate it with the required fields in the below data, to enable the sending of email alert notifications when a unit stops streaming or the dendrometer data is out of range, and save this file:

```
EMAIL_USERNAME=johndoe@examplemail.com
EMAIL_PASSWORD=password
EMAIL_SEND_TO=johnnyappleseed@examplemail.com
```

`EMAIL_USERNAME` refers is the username or email address of the email account you wish the API to use in order to send the email alerts from.

`EMAIL_PASSWORD` refers to the corresponding password or API key used by the email account specified above.

`EMAIL_SEND_TO` refers to the account to send the email alert notifications to. This could be any personal or administrator email account that you wish to receive the email alert notifications to. It may also be the same email account as the specified `EMAIL_USERNAME`, if desired.

**Note:** Replace the above dummy data e.g., `johndoe@examplemail.com` with your real data, e.g., email account credentials. Check with your email provider and/or the [Nodemailer Docs](https://nodemailer.com/usage/using-gmail) for instructions on how to obtain your email credentials (hint: the fastest method is to use [Gmail](http://gmail.com)).

4. Ensuring you are currently in the root directory of the cloned project in your terminal (such as in VS Code), type the following command, and then press the Enter key:

```
npm i
```
**Note:** this command may take a few moments to run, and you should see a directory created named `node_modules` within the project's root directory. 

5. Again, ensuring you are currently in the root directory of the cloned project in your terminal, type the following command, and then press the Enter key:

```
npm start
```

6. Your project should now be running at the following URLs (displayed in the terminal), which you can navigate to using a browser (or the [Postman application](https://www.postman.com)):
```
Data server running at http://localhost:3000
Northern 1 socket data server running at http://localhost:3001
Northern 2 socket data server running at http://localhost:3002
Northern 3 socket data server running at http://localhost:3003
Northern 4 socket data server running at http://localhost:3004
Northern 5 socket data server running at http://localhost:3005
Northern 6 socket data server running at http://localhost:3006
Northern 7 socket data server running at http://localhost:3007
```

7. The application will now be running, and any errors encountered will be displayed in the terminal.

8. To stop the application running, enter the key command: `ctrl+c` in the terminal.

#### Remote Cloud Service (Deployment)

1. Clone this GitHub repository as a new project, using your remote cloud service, e.g. [Render](https://render.com). The service provided should automatically install all project dependencies and build the project, although check with your service provider's documentation for more information.

2. Within the root directory, or within a method of specifying Environment Variables (sometimes known as secret keys) within your remote cloud service, create a new file named `.env`, or add the following secret keys to your project, to enable the sending of email alert notifications when a unit stops streaming or the dendrometer data is out of range, and save this file:

```
EMAIL_USERNAME=johndoe@examplemail.com
EMAIL_PASSWORD=password
EMAIL_SEND_TO=johnnyappleseed@examplemail.com
```

`EMAIL_USERNAME` refers is the username or email address of the email account you wish the API to use in order to send the email alerts from.

`EMAIL_PASSWORD` refers to the corresponding password or API key used by the email account specified above.

`EMAIL_SEND_TO` refers to the account to send the email alert notifications to. This could be any personal or administrator email account that you wish to receive the email alert notifications to. It may also be the same email account as the specified `EMAIL_USERNAME`, if desired.

**Note:** Replace the above dummy data e.g., `johndoe@examplemail.com` with your real data, e.g., email account credentials. Check with your email provider and/or the [Nodemailer Docs](https://nodemailer.com/usage/using-gmail) for instructions on how to obtain your email credentials (hint: the fastest method is to use [Gmail](http://gmail.com)).

4. If necessary, rebuild or restart the project within your remote cloud service.

5. Your project should now be running at the URLs provided by your remote cloud service, and the following should be displayed in the terminal output: 

```
Data server running at http://localhost:3000
Northern 1 socket data server running at http://localhost:3001
Northern 2 socket data server running at http://localhost:3002
Northern 3 socket data server running at http://localhost:3003
Northern 4 socket data server running at http://localhost:3004
Northern 5 socket data server running at http://localhost:3005
Northern 6 socket data server running at http://localhost:3006
Northern 7 socket data server running at http://localhost:3007
```

**Note:** the above URLs and/or port numbers will not be correct. To find the correct base URLs, refer to your remote cloud service's dashboard.

6. The application will now be running, and any errors encountered will be displayed in the terminal of your remote cloud service. 

7. To stop the application running, enter the key command: `ctrl+c` in the terminal of your cloud service, or press the relevant shut down button. 

**Note:** Some services, such as Render, will automatically rebuild the project upon a new commit being made to the GitHub repository: please consult the relevant documentation to deactivate this feature, if desired.

## Troubleshooting

Common issues:
* Most local connection issues will be due to CORS problems, thus the `cors` package is installed and active by default.
* When deploying to a cloud service, the API will use the URL specified by the service, else a local installation will use the base URL: `http://localhost:{port}` e.g. `http://localhost:3000`. Refer to `stf-backend-api.js` for the ports used for each service.
* For remote usage, deploying the API using a cloud provider is recommended, such as [Render](https://render.com). This will provide you with a public URL automatically.
* The contents of the `.env` file are not available in the public repository for security reasons. You must create your own `.env` file in the root project directory, simply named `.env` (with no file name), otherwise the email system will not function. Please see Setup for more information.

For further support, please email Tug F. O'Flaherty: [t.f.oflaherty@se24.qmul.ac.uk](mailto:t.f.oflaherty@se24.qmul.ac.uk). 

## Dependencies

The following libraries and tools are required for the Dendrostream backend API and additional tasks.

**Note:** Dependencies are automatically installed by the provided installer. No manual installation should be required. 

### System Packages

- [cors](https://github.com/expressjs/cors#readme) - ^v2.8.5 - Permits cross-origin requests, for local/development use
- [dotenv](https://github.com/motdotla/dotenv#readme) - ^v17.2.1 - Hiding protected data, such as email login credentials
- [express](https://expressjs.com) - ^v5.1.0 - Client HTTP request and response handling and routing
- [luxon](https://github.com/moment/luxon#readme) - ^v3.7.1 - Converts dates received from original API into ISO 8601 ISO date
- [nodemailer](https://nodemailer.com) - ^v7.0.5 - Sends email alert notifications and Contact Form responses
- [socket.io](https://github.com/socketio/socket.io/tree/main/packages/socket.io#readme) - ^v4.8.1 - Handles web sockets for client automatic data update functionality

### Additional Information and Further Reading

For tutorials and details about hardware and code, visit [Sensing the Forest](https://sensingtheforest.github.io).

The accompanying Master's thesis may be viewed at: [https://doi.org/10.5281/zenodo.17924731](https://doi.org/10.5281/zenodo.17924731).
For academic purposes, this code can be referenced by its associated paper as: 

```
O'Flaherty, T. F., & Xambó Sedó, A. (2025). Dendrostream: Exploring Tree Stress and Climate Change Through Sonification and Visualisation. Zenodo. https://doi.org/10.5281/zenodo.17924731
```

The Dendrostream project has featured in reports including in the:
* [Web Audio Conference 2025](https://doi.org/10.5281/zenodo.17642479)
* [Queen Mary University of London EECS Research Impact Case Study](https://www.qmul.ac.uk/eecs/research/research-impact/case-study-sensing-the-forest/)
* [Sensing the Forest Blog](https://sensingtheforest.github.io/2025/12/23/dendrostream/)

## License

BSD-3-Clause license (see LICENSE file for more information).

## Contribution Guidelines

We welcome contributions to this project that improve the quality, reliability, and functionality of the developed system. As this project is part of an AHRC-funded research programme, with a focus on open-source development, sustainability, and climate change, contributions should align with the project's research aims. As such, contributors should prioritise maintainability, transparency, and reproducibility.

All bug fixes, functionality and/or documentation improvements, and testing are especially encouraged, with contributions being accepted under the BSD-3-Clause license. Contributors should ensure that any submitted code is original, license-compatible, and does not include any sensitive or personal data (e.g., third-party login credentials, API keys etc.).

Contributions may be made through forking this repository on GitHub, and creating your own branch in your fork. You can then open a Pull Request to this repository's `main` branch. Changes will be reviewed and, if relevant and suitable, merged into the `main` branch of this repository, with contribution acknowledgements being made. For more information, please email Tug F. O'Flaherty: [t.f.oflaherty@se24.qmul.ac.uk](mailto:t.f.oflaherty@se24.qmul.ac.uk).

## Credits and Acknowledgements

* **Authors**: 
  - [Tug F. O'Flaherty](https://github.com/thewoe)
Developed the Dendrostream sonification and visualisation tool project.

* **Funders**:

  - [Sensing the Forest](https://sensingtheforest.github.io/) is a project funded by the [UKRI Arts and Humanities Research Council (AHRC)](https://www.ukri.org/councils/ahrc/) (AH/X011585/1, AH/X011585/2).

* **Contributors**:
  - PI and Project Supervisor: [Anna Xambó Sedo](https://github.com/axambo)

* **Acknowledgements**:
  - Original tree-talker unit API (requested by this API): [Gerard Roma](https://github.com/g-roma)
  - Tree-talker unit hardware: [Krishna Nama Manjunatha](https://www.dmu.ac.uk/about-dmu/academic-staff/technology/krishna-nama-manjunatha/krishna-nama-manjunatha.aspx) and [Mahmoud B. Elmokadem](https://www.linkedin.com/in/mahmoud-b-elmokadem-478617174)
  - Scientific ideas and advice: [Georgios Xenakis](https://www.forestresearch.gov.uk/staff/georgios-xenakis/)
  - README Template: [Luigi Marino](https://github.com/luigimarino)

<!-- A huge thanks must be expressed to Anna, for all your help and support during this project! --!>