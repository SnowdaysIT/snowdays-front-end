FROM node:10.16.3-alpine

ENV DIR /snowdays-front-end

RUN mkdir $DIR
WORKDIR $DIR

COPY package.json $DIR

RUN npm install

COPY . $DIR

EXPOSE 8080

CMD npm start
