FROM alpine:3.11

ENV NODE_VERSION 12.11.0

RUN apk add --update nodejs-npm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["node", "server.js"]