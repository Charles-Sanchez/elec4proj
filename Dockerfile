# Stage 1: Build the Vite frontend
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Clean install including devDependencies for the build
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:20-alpine
WORKDIR /app

# Copy the build output from Stage 1
COPY --from=builder /app/dist ./dist
# Copy the server folder (Make sure this folder exists in your root!)
COPY --from=builder /app/server ./server
COPY --from=builder /app/package*.json ./

# Install only production-ready packages
RUN npm ci --only=production

EXPOSE 3000
# Ensure this matches your server entry point
CMD ["node", "server/index.js"]