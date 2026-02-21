FROM node:22-slim

# Install dependency build ringan
RUN apt-get update && apt-get install -y \
    libvips-dev build-essential python3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# Paksa npm mengabaikan peer dependency conflict
RUN npm install

COPY . .

CMD ["node", "index.js"]
