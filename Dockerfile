# Base Image
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat

# Deps Stage
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build Stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner Stage
FROM base AS runner
ENV NODE_ENV=production \
    HOSTNAME="0.0.0.0" \
    PORT=3000

WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
