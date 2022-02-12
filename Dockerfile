FROM node:15

WORKDIR /app

COPY . ./

RUN npm install --production

EXPOSE 3000

CMD [ "node", "app.js" ]
