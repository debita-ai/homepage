# ─── Build stage ─────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# Dependências
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Código e build
COPY . .
RUN yarn build

# ─── Production stage ────────────────────────────────────────
FROM node:18-alpine AS runner
WORKDIR /app

# Só o necessário do build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Ambiente
ENV NODE_ENV=production
ENV PORT=4000
ENV NEXT_PUBLIC_SECURITY_HEADERS=true

# Instala só prod deps
COPY package*.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Usuário não-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs && \
    chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 4000
CMD ["node", "server.js"]
