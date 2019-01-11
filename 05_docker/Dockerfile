FROM node:10

WORKDIR /usr/src/app

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
COPY . .
RUN npm install

ENTRYPOINT ["/tini", "--"]
CMD ["node", "index.js"]
