FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run prisma:generate:local

EXPOSE 3000

CMD ["npm", "run", "start:local"]