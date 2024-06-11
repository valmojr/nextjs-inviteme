FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run prisma:generate:local

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:local"]