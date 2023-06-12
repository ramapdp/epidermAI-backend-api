# Let's get the base image of node16
FROM node:16
# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
# Install app dependencies
RUN npm install
# Bundle app source
COPY . .
# Binding port
EXPOSE 8080
ENV PORT 8080
ENV HOST 0.0.0.0
# Command to run our app
CMD [ "npm", "start" ]