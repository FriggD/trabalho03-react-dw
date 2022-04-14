FROM node:alpine

WORKDIR /opt/pe-mes/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]