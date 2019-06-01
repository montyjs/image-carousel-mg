FROM node:latest

RUN mkdir -p src/app

WORKDIR /src/app

COPY package.json /src/app

RUN npm install

COPY . /src/app

ENV NODE_ENV=production
ENV PORT=3001
ENV DB_URI=postgresql://rei:batman123@product.cr1jajqsrh0x.us-west-2.rds.amazonaws.com:5432/product


EXPOSE 3001

CMD ["npm", "start"]