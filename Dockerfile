FROM node:14
RUN npm install -g serve

EXPOSE 3000/tcp

COPY build/ /web

CMD ["serve", "-s", "/web", "-l", "8080"]
