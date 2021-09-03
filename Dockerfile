FROM node:11-slim

RUN apt-get update && apt-get install -yq build-essential dumb-init

# where our app will live in container
WORKDIR /app

# dashboard
COPY  ./packages/frontend/package.json ./packages/frontend/package.json

#  backend
COPY  ./packages/backend/package.json ./packages/backend/package.json


# root package file
COPY package.json package.json
COPY lerna.json lerna.json
RUN yarn
RUN yarn run bootstrap

# copy whatever is here into container
# copy everything except packages
COPY . .

ENTRYPOINT ["/usr/bin/dumb-init", "--"]