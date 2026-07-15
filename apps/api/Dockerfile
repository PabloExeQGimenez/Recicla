FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/api/package.json apps/api/
RUN npm ci

COPY packages/shared packages/shared
RUN cd packages/shared && npm run build

COPY apps/api/prisma apps/api/prisma/
RUN cd apps/api && npx prisma generate

COPY apps/api ./apps/api
RUN cd apps/api && npm run build
RUN cd apps/api && npx tsc prisma/seed.ts --outDir prisma --esModuleInterop --allowSyntheticDefaultImports --module commonjs --target es2020 --skipLibCheck --moduleResolution node

FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/api/package.json apps/api/
RUN npm ci --omit=dev

COPY --from=build /app/apps/api/dist ./apps/api/dist
COPY --from=build /app/packages/shared/dist ./packages/shared/dist
COPY --from=build /app/apps/api/node_modules/.prisma ./apps/api/node_modules/.prisma
COPY --from=build /app/apps/api/node_modules/@prisma ./apps/api/node_modules/@prisma
COPY --from=build /app/apps/api/prisma/seed.js ./apps/api/prisma/seed.js
COPY apps/api/prisma apps/api/prisma/

EXPOSE 3000

CMD ["sh", "-c", "cd apps/api && npx prisma migrate deploy && node prisma/seed.js && node dist/src/main"]
