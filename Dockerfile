FROM node:18-alpine

# Install necessary system dependencies
RUN apk update && \
    apk add --no-cache chromium udev ttf-freefont curl

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD [ "node", "dist/app.js" ]