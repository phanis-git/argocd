FROM nginx:alpine
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
RUN adduser -D -H -s /sbin/nologin phani \
    && chown -R phani:phani /usr/share/nginx/html
USER phani
CMD ["nginx", "-g", "daemon off;"]