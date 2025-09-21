FROM node:24-alpine

WORKDIR /app

COPY . /app
COPY .env /app
RUN npm i -g pnpm
RUN CI="true" pnpm install && pnpm run build

CMD [ "pnpm", "start" ]

