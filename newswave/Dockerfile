# Use Node LTS
FROM node:18-alpine

WORKDIR /app
COPY app/package*.json ./
RUN npm install --production
COPY app/ ./

EXPOSE 8081
CMD ["node", "server.js"]
