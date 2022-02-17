FROM node:buster

RUN apt-get update && \
  apt-get install -y build-essential libcairo2-dev libpango1.0-dev librsvg2-dev librsvg2-2 && \
  apt-get install -y python3 python3-pip
ADD index.js index.js
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install && \
  apt-get remove -y --purge python3 python3-pip && \
  apt-get autoremove -y

EXPOSE 80

ENTRYPOINT ["node", "index.js"]