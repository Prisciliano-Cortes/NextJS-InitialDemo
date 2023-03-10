# Prepare build and production base images
FROM node:16 as build-base
WORKDIR /app
ENV CI=true \
    NEXT_TELEMETRY_DISABLED=1
 
FROM node:16-alpine as prod-base
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
 
# Install all dependencies for build and only production deps for prod image
FROM build-base as build-deps
COPY ./package.json ./package-lock.json ./
RUN npm install --frozen-lockfile
 
FROM prod-base as prod-deps
COPY ./package.json ./package-lock.json ./
RUN npm install --frozen-lockfile
 
# Build app
FROM build-base as builder
COPY --from=build-deps /app/node_modules ./node_modules
COPY . ./
RUN npm run build
 
# Generate production image
FROM prod-base
COPY --from=prod-deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
USER nextjs
ENV PORT 3000
EXPOSE 3000
ENTRYPOINT ["/bin/sh", "-c", "npm start"]