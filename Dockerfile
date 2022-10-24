FROM node:16.13.0

WORKDIR /app

COPY . /app

RUN npm ci --force
RUN npm run build

EXPOSE 3000

CMD node index.js
