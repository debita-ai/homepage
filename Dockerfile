# ─── Build stage ─────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# 1) Copia apenas os manifests e instala todas as deps
COPY package*.json ./
RUN npm install

# 2) Build com build-arg para as vars públicas
ARG NEXT_PUBLIC_LOGIN_APP_URL
ENV NEXT_PUBLIC_LOGIN_APP_URL=${NEXT_PUBLIC_LOGIN_APP_URL}

# 3) Copia o restante do código e builda o Next.js
COPY . .

RUN npm run build

# ─── Production stage ────────────────────────────────────────
FROM node:18-alpine AS runner
WORKDIR /app

# Define variáveis de ambiente
ENV NODE_ENV=production 
ENV PORT=4000

# 1) Traz node_modules e package*.json do builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# 2) Traz build do Next.js e assets estáticos
COPY --from=builder /app/.next       ./.next
COPY --from=builder /app/public      ./public
COPY --from=builder /app/next.config.js ./

# 3) Cria usuário não-root para rodar a app
RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001 -G nodejs \
 && chown -R nextjs:nodejs /app
USER nextjs

# 4) Exponha a porta que o Next.js vai usar
EXPOSE 4000

# 5) Comando de start: certifique-se de ter no package.json:
#    "start": "next start -p $PORT"
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "4000"]
