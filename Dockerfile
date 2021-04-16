#Paso 1: Construir la aplicación de REACT#
FROM    node:current-alpine as build
WORKDIR /usr/src/app
COPY    package.json ./
RUN     apk update && \
        apk --no-cache add --update python && \
        npm install
COPY    . .
RUN     npm run build

#Paso 2: Construir el servidor NGINX#
FROM    nginx:1.17.6-alpine
COPY    --from=build /usr/src/app/build/ /usr/share/nginx/html
COPY    nginx.conf /etc/nginx/
RUN     touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /usr/share/nginx/html
USER    nginx
EXPOSE  8080
