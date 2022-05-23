# 构建
FROM node:16.13.2 as build-stage
WORKDIR /app
COPY package*.json .
COPY yarn.lock .
COPY .npmrc .
RUN yarn
COPY . .
RUN yarn build

# 生产
FROM nginx:alpine as prod-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d