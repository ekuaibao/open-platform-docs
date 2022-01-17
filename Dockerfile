FROM halverneus/static-file-server

ENV URL_PREFIX=/open-platform-docs
EXPOSE 8080/tcp

COPY build/ /web
