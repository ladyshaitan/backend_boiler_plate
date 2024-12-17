FROM node:slim

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
EXPOSE 3000

COPY . /app/

CMD ["npm", "start"]