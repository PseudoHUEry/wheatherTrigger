FROM node:16.13.2

WORKDIR /

COPY . .

RUN npm set registry=https://registry.npmjs.org/
RUN npm install --production && npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
