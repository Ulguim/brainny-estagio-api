FROM node:16.15 AS development

WORKDIR /usr/src/

COPY package.json .
COPY package-lock.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build