FROM node:14

ENV GETIR_MONGO_URI='mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true'
ENV PORT=80

# Create app directory
WORKDIR /app

RUN npm install yarn

COPY package.json /app/package.json

RUN yarn install --silent

COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]
