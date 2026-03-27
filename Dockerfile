# Stage 1: Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve stage
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build output from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Security: Ensure nginx can run as non-root
RUN touch /tmp/nginx.pid && \
    chown -R nginx:nginx /tmp/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx

USER nginx

# Expose port 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
