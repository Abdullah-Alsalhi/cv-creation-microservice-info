# build stage
FROM node:latest AS build

LABEL authors="abdullahalsalhi"

WORKDIR /app

RUN npm install -g typescript

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

# runtime stage
FROM node:alpine

WORKDIR /app

COPY --from=build /app/build ./

COPY .env .

COPY package*.json ./

RUN npm install -g prisma

COPY prisma ./prisma

COPY db_check_migrate .

RUN chmod +x db_check_migrate

RUN npm ci --omit=dev

RUN prisma generate

RUN chown -R node:node /app

USER node

EXPOSE 3000

ENTRYPOINT ["node", "/app/index.js"]