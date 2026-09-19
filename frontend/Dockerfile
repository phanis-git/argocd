FROM nginx:alpine

COPY . /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN adduser -D -H -s /sbin/nologin phani \
    && chown -R phani:phani /usr/share/nginx/html \
    && chown -R phani:phani /var/cache/nginx \
    && chown -R phani:phani /var/log/nginx \
    && chown -R phani:phani /etc/nginx \
    && touch /var/run/nginx.pid \
    && chown phani:phani /var/run/nginx.pid

USER phani

EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]