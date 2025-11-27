FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev && npm install next@14.0.0 --save-exact && npx next telemetry disable
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start", "--", "-H", "0.0.0.0"]
