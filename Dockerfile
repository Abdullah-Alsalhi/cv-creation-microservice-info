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

COPY prisma ./prisma

RUN npm ci --omit=dev

RUN npx prisma generate

RUN chown -R node:node /app

USER node

EXPOSE 3000

ENTRYPOINT ["node", "/app/index.js"]