# PaymentWorks SubwayLine Web App

### This web application was designed and built to interface with the mbta api

### The app will automatically load all routes into an accordion display and load all related stops once the user expands that section of the accordion

#### BUILD INSTRUCTIONS

1. Install docker and docker-compose

- You may find this [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) helpful.
- You may also use pip to install docker-compose

2. Pull this repo to a local directory
3. Ensure that you are in the same directory as the docker-compose files
4. Ensure that ports 3000 and 5000 are available
5. After you ensure that the above are complete, build and deploy app with the one of these cmds:
   - production: `docker-compose -f docker-compose-prod.yml up --build -d`
   - development: `docker-compose up --build -d`
