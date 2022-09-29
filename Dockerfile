FROM node:alpine as build

ARG PORT

WORKDIR /app

COPY . /app

RUN npm ci
RUN npm run build

FROM nginx:alpine

RUN echo $PORT

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
