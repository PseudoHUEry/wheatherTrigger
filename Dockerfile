FROM node:16.13.2

WORKDIR /app

COPY . .

RUN npm config set registry="http://registry.npmjs.org/"
RUN npm install --production

EXPOSE 3000

CMD [ "node", "app.js" ]
