FROM node:8.9-alpine

#RUN yum install unzip -y

# Set enviroments
ENV NODE_ENV production

ENV APPLICATION_DIR /opt/current

# Create app directory
RUN mkdir -p $APPLICATION_DIR

WORKDIR $APPLICATION_DIR

# Bundle app source
COPY zip/*.zip $APPLICATION_DIR

RUN unzip *.zip

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
