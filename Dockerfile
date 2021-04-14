FROM nginx:stable

ENV NODEJS_MAJOR_VERSION 12

EXPOSE 80

RUN apt-get update

RUN ["/bin/bash", \
  "-c", \
  "set -o pipefail && \
  apt-get install -y curl && \
  apt-get install -y make && \
  apt-get install -y g++ && \
  curl -sL https://deb.nodesource.com/setup_$NODEJS_MAJOR_VERSION.x | bash - && \
  apt-get install -y nodejs" \
  ]

WORKDIR '/app'
COPY ./package.json ./

RUN npm install
COPY . .
RUN npm run build && \
  mv -f nginx/default.conf /etc/nginx/conf.d/. && \
  mv build/* /usr/share/nginx/html/. 
