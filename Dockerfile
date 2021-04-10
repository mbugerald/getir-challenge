FROM node:14

# Create app directory
WORKDIR /app

RUN npm install yarn

COPY package.json /app/package.json

RUN yarn install --silent

COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]
