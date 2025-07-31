 
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build
 
FROM node:20-alpine AS runner

WORKDIR /app
 
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules 

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]
