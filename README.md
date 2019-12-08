Snowdays 2020 front-end repo

[![Build Status](https://jenkins.tiakane.it/buildStatus/icon?job=snowdays-front-end)](https://jenkins.tiakane.it/job/snowdays-front-end/)


To install packages and then run the server use the command
`npm run install:clean`

After the first install and run, you can simply navigate to the home directory and start the local development server using `npm start`

Built using npm version 6.12 and node.js 10.16.3

### [Docker](https://bit.ly/2CzWxCd) :whale:
If you want to (and you really should) use docker here's the command:
```
docker-compose up node_install
```
That will collect all the necessary node requirements, which typically happens only on _package.json_ updates (and the first time cloning the repo).

To start the application simply launch:
```
docker-compose up webserver
```
By default the app will run on [localhost:8088](http://localhost:8088)

As in the un-containerized version, any update in the source will be automatically reflected in the app.

The single Dockerfile is just for Jenkins, don't consider it for development.
