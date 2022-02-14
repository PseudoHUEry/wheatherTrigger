FROM node:15

WORKDIR /

COPY . .

RUN npm set registry=https://registry.npmjs.org/
RUN npm install --production 
RUN npm install 
EXPOSE 3000

CMD [ "node", "app.js"]
