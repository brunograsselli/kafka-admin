FROM node:alpine
RUN apk update
RUN apk add yarn
RUN mkdir /src
WORKDIR /src
ADD . /src
RUN yarn
EXPOSE  8080
CMD ["yarn", "start"]
