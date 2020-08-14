# Container image that runs your code
FROM node:lts-alpine

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh
COPY package.json /package.json
COPY package-lock.json /package-lock.json
COPY index.js /index.js

EXPOSE 80
EXPOSE 3000

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
