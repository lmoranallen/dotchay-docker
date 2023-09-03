# syntax=docker/dockerfile:1

# Dev Environment

FROM node:18-alpine
ENV NODE_ENV=development
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i
COPY . ./
CMD ["npm", "start"]
EXPOSE 3000

# syntax=docker/dockerfile:1
# FROM busybox:latest
# COPY --chmod=755 <<EOF /app/run.sh
# #!/bin/sh
# while true; do
#   echo -ne "The time is now $(date +%T)\\r"
#   sleep 1
# done
# EOF

# ENTRYPOINT /app/run.sh
